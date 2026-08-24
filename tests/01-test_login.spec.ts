import { test, expect } from '@playwright/test';
import { PaginaLogin } from './paginas/PaginaLogin';
import { USUARIOS, CONTRASENA } from './paginas/constantes';

test('Inicio de sesión exitoso con usuario estándar', async ({ page }) => {
    // 1. Instanciamos nuestra página basada en el Patrón POM
    const paginaLogin = new PaginaLogin(page);

    // 2. Ejecutamos las acciones usando métodos descriptivos en español
    await paginaLogin.irAlSitio();
    await paginaLogin.iniciarSesion(USUARIOS.estandar, CONTRASENA);

    // 3. Validamos el resultado esperado (Aserción)
    await expect(page).toHaveURL(/inventory.html/);
});