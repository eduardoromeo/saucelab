import { Page, Locator, expect } from '@playwright/test';

export class PaginaInventario {
    readonly page: Page;
    readonly backpackButton: Locator;
    readonly bikeLightButton: Locator;
    readonly boltTShirtButton: Locator;
    readonly onesieButton: Locator;
    readonly cartLink: Locator;
    readonly sortDropdown: Locator;
    readonly primerProductoNombre: Locator;

    constructor(page: Page) {
        this.page = page;
        this.backpackButton = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.bikeLightButton = page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]');
        this.boltTShirtButton = page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
        this.onesieButton = page.locator('[data-test="add-to-cart-sauce-labs-onesie"]');
        this.cartLink = page.locator('[data-test="shopping-cart-link"]');
        this.sortDropdown = page.locator('[data-test="product-sort-container"]');
        this.primerProductoNombre = page.locator('.inventory_item_name').first();
    }

    async ordenarPorPrecioMayorAMenor() {
        await this.sortDropdown.selectOption('hilo');
    }

    async verificarPrimerProducto(nombreEsperado: string) {
        const textoObtenido = await this.primerProductoNombre.textContent();
        if (textoObtenido?.trim() !== nombreEsperado) {
            throw new Error(`Se esperaba el producto "${nombreEsperado}", pero se encontró "${textoObtenido}"`);
        }
    }

    async agregarTresProductos() {
        await this.backpackButton.click();
        await this.bikeLightButton.click();
        await this.boltTShirtButton.click();
    }

    async agregarUnProducto() {
        await this.onesieButton.click();
    }

    async irAlCarrito() {
        await this.cartLink.click();
    }

    async verificarImagenDePruebaEnProductos() {
        const productos = await this.page.locator('.inventory_item').elementHandles();
    }
}