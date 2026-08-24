import { test, expect } from '@playwright/test';
import { PaginaLogin } from './paginas/PaginaLogin';
import { USUARIOS, CONTRASENA } from './paginas/constantes';

test('Evidenciar bug visual: 6 imágenes repetidas con problem_user', async ({ page }) => {
    const paginaLogin = new PaginaLogin(page);

    await paginaLogin.irAlSitio();
    await paginaLogin.iniciarSesion(USUARIOS.problema, CONTRASENA);

    const imagenesProductos = page.locator('.inventory_item_img img');

    await expect(imagenesProductos).toHaveCount(6);

    const srcs = await imagenesProductos.evaluateAll(imgs => imgs.map(img => img.getAttribute('src')));

    const primeraImagenSrc = srcs[0];
    for (let i = 1; i < srcs.length; i++) {
        expect(srcs[i]).toBe(primeraImagenSrc);
    }

    await page.screenshot({ path: 'bug-6-imagenes-repetidas.png', fullPage: true });
});