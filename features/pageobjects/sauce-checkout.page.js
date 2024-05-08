const { $ } = require('@wdio/globals')

class CheckoutPage {

    get firstName() {
        return $('#first-name');
    }

    get lastName() {
        return $('#last-name');
    }

    get zip() {
        return $('#postal-code');
    }

    get continueButton() {
        return $('#continue');
    }

    async inputFirstname(firstName) {
        await this.firstName.setValue(firstName)
    }

    async inputLastname(lastName) {
        await this.lastName.setValue(lastName)

    }

    async inputZip(zip) {
        await this.zip.setValue(zip)
    }

    async clickContinueButton() {
        await this.continueButton.click()
    }

    open() {
        return browser.url(`https://www.saucedemo.com/checkout-step-one.html`);
    }

}

module.exports = new CheckoutPage();