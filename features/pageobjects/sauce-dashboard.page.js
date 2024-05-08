const { $ } = require('@wdio/globals')

class DashboardPage{

    get addToCartButton() {
        return $('#add-to-cart-sauce-labs-backpack')
    }
    
    get addToCartTshirtButton() {
        return $('#add-to-cart-sauce-labs-bolt-t-shirt')
    }
    
    get addToCartOnesieButton() {
        return $('#add-to-cart-sauce-labs-onesie')
    }

    get cartButton() {
        return $('a.shopping_cart_link')
    }

    get cartBadge() {
        return $('#shopping_cart_container > a > span.shopping_cart_badge')
    }

    async validateOnPage() {
        await expect(this.addToCartButton).toBeDisplayed()
    }

    async validateOnShopingCart() {
        const cartBadgeText = await this.cartBadge.getText() 
        const cartBadgeValue = parseInt(cartBadgeText) 
        let result = false
        if (cartBadgeValue > 0) {
            result = true
        }
        await expect(result).toBe(true)
    }


    async clickCartButton() {
        await this.cartButton.click()
    }
    async clickaddToCartButton() {
        (await this.addToCartButton).click()
    }

    async clickAddToCartTshirt() {
        (await this.addToCartTshirtButton).click()
    }

    async clickAddToCartOnesie() {
        (await this.addToCartOnesieButton).click()
    }

    open() {
        return browser.url(`https://www.saucedemo.com/inventory.html`);
    }
}

module.exports = new DashboardPage();
