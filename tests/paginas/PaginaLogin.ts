import { test, expect } from '@playwright/test';
import { Page, Locator } from '@playwright/test';

export class PaginaLogin {
    readonly pagina: Page;
    readonly campoUsuario: Locator;
    readonly campoContrasena: Locator;
    readonly botonIniciarSesion: Locator;
    readonly mensajeError: Locator;

    constructor(page: Page) {
        this.pagina = page;
        this.campoUsuario = page.locator('[data-test="username"]');
        this.campoContrasena = page.locator('[data-test="password"]');
        this.botonIniciarSesion = page.locator('[data-test="login-button"]');
        this.mensajeError = page.locator('[data-test="error"]');
    }

    async irAlSitio() {
        await this.pagina.goto('https://www.saucedemo.com/');
    }

    async iniciarSesion(usuario: string, contrasena: string) {
        await this.campoUsuario.fill(usuario);
        await this.campoContrasena.fill(contrasena);
        await this.botonIniciarSesion.click(); 
    }

    async verificarUsuarioBloqueado() {
        await expect(this.mensajeError).toBeVisible();
        await expect(this.mensajeError).toContainText('Epic sadface: Sorry, this user has been locked out.');
    }
}