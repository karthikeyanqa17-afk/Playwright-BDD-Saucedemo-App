Feature: Sauce Demo Login Functionality

  Scenario: Successful login with valid credentials
    Given I am on the Sauce Demo login page
    When I enter username "standard_user" and password "secret_sauce"
    And I click the login button
    Then I should see the products page