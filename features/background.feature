@Background
Feature: Background

    Background: 
        Given user is on sauce page
        When user login using username "standard_user" and password "secret_sauce"
    
    Scenario: User buy Sauce Labs T-shirt
        When user should redirect to homepage
        When user add "Sauce Labs T-shirt" to cart
        When user click cart button
        When user redirect to cart page
        Then user should see "Sauce Labs Bolt T-Shirt" on cart page

    Scenario: User buy Sauce Labs Onesie
        When user should redirect to homepage
        When user add "Sauce Labs Onesie" to cart
        When user click cart button
        When user redirect to cart page
        Then user should see "Sauce Labs Onesie" on cart page