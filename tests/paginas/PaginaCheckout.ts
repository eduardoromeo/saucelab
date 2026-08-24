import { Page, Locator } from '@playwright/test';

export class PaginaCheckout {
    readonly page: Page;
    readonly firstNameInput: Locator;
    readonly lastNameInput: Locator;
    readonly postalCodeInput: Locator;
    readonly continueButton: Locator;
    readonly finishButton: Locator;
    readonly completeHeader: Locator;
    readonly cancelButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.firstNameInput = page.locator('[data-test="firstName"]');
        this.lastNameInput = page.locator('[data-test="lastName"]');
        this.postalCodeInput = page.locator('[data-test="postalCode"]');
        this.continueButton = page.locator('[data-test="continue"]');
        this.cancelButton = page.locator('[data-test="cancel"]');
        this.finishButton = page.locator('[data-test="finish"]');
        this.completeHeader = page.locator('[data-test="complete-header"]');
    }

    async completarFormularioEnvio(nombre: string, apellido: string, codigoPostal: string) {
        await this.firstNameInput.fill(nombre);
        await this.lastNameInput.fill(apellido);
        await this.postalCodeInput.fill(codigoPostal);
        await this.continueButton.click();
    }

    async cancelarCheckout() {
        await this.cancelButton.click();
    }

    async finalizarCompra() {
        await this.finishButton.click();
    }
}