import { test } from '@playwright/test';
import { PaginaLogin } from './paginas/PaginaLogin';
import { PaginaInventario } from './paginas/PaginaInventario';
import { USUARIOS, CONTRASENA } from './paginas/constantes';

test('Ordenar productos de mayor a menor precio y verificar el primero', async ({ page }) => {
    const paginaLogin = new PaginaLogin(page);
    const inventoryPage = new PaginaInventario(page);

    await paginaLogin.irAlSitio();
    await paginaLogin.iniciarSesion(USUARIOS.estandar, CONTRASENA);

    await inventoryPage.ordenarPorPrecioMayorAMenor();

    await inventoryPage.verificarPrimerProducto('Sauce Labs Fleece Jacket');
});