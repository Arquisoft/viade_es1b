Feature: Login into Viade

	Scenario: We want to login into Viade
		Given The login page
		When I press Log In button and enter our information
		Then I expect to be on the Welcome page of ViaDe