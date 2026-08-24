import { Page, Locator } from '@playwright/test';

export class PaginaCarrito {
    readonly page: Page;
    readonly removeOnesieButton: Locator;
    readonly checkoutButton: Locator;
    readonly itemsInCart: Locator;

    constructor(page: Page) {
        this.page = page;
        this.removeOnesieButton = page.locator('[data-test="remove-sauce-labs-onesie"]');
        this.checkoutButton = page.locator('[data-test="checkout"]');
        this.itemsInCart = page.locator('[data-test="inventory-item"]');
    }

    async eliminarUnProducto() {
        await this.removeOnesieButton.click();
    }

    async verificarCeroProductosEnCarrito() {
        await this.itemsInCart.isVisible;
    }

    async irAlCheckout() {
        await this.checkoutButton.click();
    }

}


