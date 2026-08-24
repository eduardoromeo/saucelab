import { test, expect } from '@playwright/test';
import { PaginaLogin } from './paginas/PaginaLogin';
import { USUARIOS, CONTRASENA } from './paginas/constantes';

test('Intentar loguear con usuario bloqueado y capturar mensaje de error', async ({ page }) => {
    
    const paginaLogin = new PaginaLogin(page);

    await paginaLogin.irAlSitio();
    await paginaLogin.iniciarSesion(USUARIOS.bloqueado, CONTRASENA);

    await paginaLogin.verificarUsuarioBloqueado();
});