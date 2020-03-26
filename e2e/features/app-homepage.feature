Feature: Entering into the site

Scenario: The user is not logged in the site
  Given A not logged in user
  When I go to the main page of the app
  Then The login page should appear

Scenario: The user is already logged in the site
  Given An already logged in user
  When I go to the main page of the app
  Then The welcome page should appear