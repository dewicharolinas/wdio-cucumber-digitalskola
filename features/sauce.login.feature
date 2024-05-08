@sauce 
Feature: Sauce Test

    @login
    Scenario: User login successfully
        Given user is on sauce page
        When user input username with "standard_user"
        When user input password with "secret_sauce"
        When user click button
        Then user should redirect to homepage

    @addtocart
    Scenario: User Add to cart successfuly 
        Given user is on dashboard page
        When user click add to cart button
        Then cart badge should display value

    @Validateitemaddtocart
    Scenario: Item successfuly add to cart
        Given user is on dashboard page
        When user click cart button
        Then should have item on cart page
        
    @checkout
    Scenario: User checkout cart
        Given user is on cart page 
        When user click checkout
        Then user redirect to checkout step one 

     @checkoutstepone
    Scenario: checkout step one 
        Given user in checkout step one 
        When user input first name with "DEWI"
        When user input last name with "CHAROLINA"
        When user input zip with "secret_sauce"
        Then user click continue button

        
