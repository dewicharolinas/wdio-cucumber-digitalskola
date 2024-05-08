@outline
Feature: Login to saucedemo website

  Scenario Outline: As a user, I can log into the saucedemo website

    Given user is on sauce page
    When  user login using username "<username>" and password "<password>"
    Then  "<outcome>" be displayed


    Examples:
      | username        | password        | outcome                      |
      | standard_user   | secret_sauce    | should be redirected to the dashboard |
      | standard_user   | wrong_password  | should see a flash message   |
  
      