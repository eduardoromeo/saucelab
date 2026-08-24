import { test, expect } from '@playwright/test';
import { PaginaLogin } from './paginas/PaginaLogin';
import { USUARIOS, CONTRASENA } from './paginas/constantes';

test('Evidenciar bug en checkout: problem_user no permite completar los campos de envío', async ({ page }) => {
    const paginaLogin = new PaginaLogin(page);

    await paginaLogin.irAlSitio();
    await paginaLogin.iniciarSesion(USUARIOS.problema, CONTRASENA);

    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await page.locator('[data-test="checkout"]').click();

    const firstNameInput = page.locator('[data-test="firstName"]');
    const lastNameInput = page.locator('[data-test="lastName"]');
    const postalCodeInput = page.locator('[data-test="postalCode"]');

    await firstNameInput.fill('Rocky');
    await lastNameInput.fill('Balboa'); 
    await postalCodeInput.fill('0000');
    
    await page.locator('[data-test="continue"]').click();

    const mensajeError = page.locator('[data-test="error"]');
    await expect(mensajeError).toBeVisible();
    await expect(mensajeError).toContainText('Error: Last Name is required');

    await page.screenshot({ path: 'bug-problem-user-checkout-apellido.png', fullPage: true });
});