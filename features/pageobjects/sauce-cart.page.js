const { $ } = require('@wdio/globals')

class CartPage {

    get checkoutButton() {
        return $("#checkout");
    }

    get items() {
        return $$('div.inventory_item_name')
        // output berupa array: ["Sauce Labs Backpack", "Sauce Labs T-shirt", "Sauce Labs Jacket"] 
    }
    
    async clickCheckoutButton() {
        await this.checkoutButton.click()
    }

    async validateOnCartPage() {
        await expect(this.checkoutButton).toHaveText("Checkout")
    }
     async validateItemExist(itemName) {
        const items = await this.items;
        let found = false;
        for (const item of items) {
            const text = await item.getText();
            if (text === itemName) {
                found = true;
                break;
            }
        }
        await expect(found).toBe(true);
    }
    open() {
        return browser.url(`https://www.saucedemo.com/cart.html`);
    }
}

module.exports = new CartPage();
