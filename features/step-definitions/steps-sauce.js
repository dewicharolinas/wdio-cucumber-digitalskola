const { Given, When, Then } = require('@wdio/cucumber-framework');
const { browser } = require('@wdio/globals')
const CartPage = require ('../pageobjects/sauce-cart.page')
const SauceLoginPage = require('../pageobjects/sauce-login.page');
const DashboardPage = require('../pageobjects/sauce-dashboard.page');
const sauceCheckoutPage = require('../pageobjects/sauce-checkout.page');

Given("user is on sauce page", async () => {
    await SauceLoginPage.open()
})

When(/^user input username with "(.*)"$/, async (username) => {
    await SauceLoginPage.inputUsername(username)
})

When(/^user input password with "(.*)"$/, async (password) => {
    await SauceLoginPage.inputPassword(password)
});
  
When(/^user click button$/, async () => {
    await SauceLoginPage.clickLoginButton()
});

Then(/^user should redirect to homepage$/, async () => {
    await DashboardPage.validateOnPage()
});


Given ("user is on dashboard page", async () => {
    await DashboardPage.open()
    console.log('user in dashboard page')
})

When (/^user click add to cart button$/, async () => {
    await DashboardPage.clickaddToCartButton()

})

Then (/^cart badge should display value$/, async () => {
    await DashboardPage.validateOnShopingCart()
   
})

When (/^user click cart button$/, async () => {
    await DashboardPage.clickCartButton()
    await CartPage.validateOnCartPage()
})

When (/^user redirect to cart page$/, async () => {
    await CartPage.validateOnCartPage()
})

Then (/^should have item on cart page$/, async () => {
    await CartPage.validateItemExist("Sauce Labs Backpack")
})


Given (/^user is on cart page$/, async () => {
    await CartPage.validateOnCartPage()
    
});

When (/^user click checkout$/, async () => {
    await CartPage.clickCheckoutButton()
})

Then (/^user redirect to checkout step one$/, async () => {
    await sauceCheckoutPage.open()
    
});

Given ("user in checkout step one",async () => {
    await sauceCheckoutPage.open()

}) 

When(/^user input first name with "(.*)"$/, async (Firstname) => {
    await sauceCheckoutPage.inputFirstname(Firstname)
})

When(/^user input last name with "(.*)"$/, async (Lastname) => {
    await sauceCheckoutPage.inputLastname(Lastname)
})

When(/^user input zip with "(.*)"$/, async (zip) => {
    await sauceCheckoutPage.inputZip(zip)
})

When(/^user click continue button$/, async () => {
    await sauceCheckoutPage.clickContinueButton()
});

// BACKGROUND FEATURE

Then(/^user login using username "(.*)" and password "(.*)"$/, async (username, password) => {
    await SauceLoginPage.login(username, password)
});

Then(/^user add "(.*)" to cart$/, async (itemName) => {
    await browser.pause(2000);
    if (itemName === "Sauce Labs T-shirt"){
        await DashboardPage.clickAddToCartTshirt()
    } else if (itemName === "Sauce Labs Onesie") {
        await DashboardPage.clickAddToCartOnesie()
    }
    await browser.pause(2000);
});

// SCENARIO OUTLINE

Then(/^user should see "(.*)" on cart page$/, async (itemName) => {
    await browser.pause(2000);
    await CartPage.validateItemExist(itemName)
    await browser.pause(2000);
  })

Then(/^"(.*)" be displayed$/, async (outcome) => {
    if (outcome=== 'should be redirected to the dashboard'){ 
        // check validasi ke redirect ke dashboard
        await DashboardPage.open()
    } else if (outcome=== 'should see a flash message'){
        // check validasi mendapat flash message
        const flashMessage= $('div.error-message-container.error')
        await expect(flashMessage).toBeDisplayed()
    }
})


