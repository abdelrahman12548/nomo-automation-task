Feature: Login Functionality

  As a user of the app
  I want to be able to log in
  So that I can access my account securely

  Scenario: Successful login with valid credentials
    Given I launch the app
    And I am on the login page
    When I enter "bob@example.com" as the username
    And I enter "10203040" as the password
    And I click on the login button
    Then I should see a welcome message

  Scenario: Failed login with incorrect credentials
    Given I launch the app
    And I am on the login page
    When I enter "1@2.com" as the username
    And I enter "f-o-o" as the password
    And I click on the login button
    Then I should see an error message saying "Provided credentials do not match any user in this service."

  Scenario: Login attempt with a locked account
    Given I launch the app
    And I am on the login page
    When I enter "alice@example.com" as the username
    And I enter "10203040" as the password
    And I click on the login button
    Then I should see an error message saying "Sorry, this user has been locked out."

  Scenario: Login attempt with empty fields
    Given I launch the app
    And I am on the login page
    When I leave the username and password fields empty
    And I click on the login button
    Then I should see an error message saying "Username is required"
