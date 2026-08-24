
import { test, expect } from '@playwright/test';
import { PaginaLogin } from './paginas/PaginaLogin';
import { PaginaInventario } from './paginas/PaginaInventario';
import { PaginaCarrito } from './paginas/PaginaCarrito';
import { USUARIOS, CONTRASENA } from './paginas/constantes';

test('Flujo completo agregando tres productos con POM', async ({ page }) => {
    const loginPage = new PaginaLogin(page);
    const inventoryPage = new PaginaInventario(page);
    const cartPage = new PaginaCarrito(page);

    await loginPage.irAlSitio();
    await loginPage.iniciarSesion(USUARIOS.estandar, CONTRASENA);

    await inventoryPage.agregarUnProducto();
    await inventoryPage.irAlCarrito();

    await cartPage.eliminarUnProducto();

    await cartPage.verificarCeroProductosEnCarrito();
});