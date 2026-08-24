import { test, expect } from '@playwright/test';
import { PaginaLogin } from './paginas/PaginaLogin';
import { USUARIOS, CONTRASENA } from './paginas/constantes';

test('Evidenciar bug: problem_user no permite agregar los 3 productos específicos', async ({ page }) => {
    const paginaLogin = new PaginaLogin(page);

    await paginaLogin.irAlSitio();
    await paginaLogin.iniciarSesion(USUARIOS.problema, CONTRASENA);

    await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
    await page.locator('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();

    await page.locator('[data-test="shopping-cart-link"]').click();

    await expect(page.locator('.cart_item')).toHaveCount(0);

    await page.screenshot({ path: 'bug-problem-user-tres-productos.png', fullPage: true });
});