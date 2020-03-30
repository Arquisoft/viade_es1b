Feature: Loggin into the app

Scenario: The user has to log in the site
  Given The Log in page
  When I press the LogIn button
  Then I expect to see a popup to log in
  And After entering my credentials, log in the app
