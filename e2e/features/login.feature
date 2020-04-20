Feature: Login into Viade

	Scenario: I want to login into Viade
		Given The login page
		When I press Log In button and enter my personal data
		Then I expect to be on the Welcome page of ViaDe