Feature: Login into Viade

	Scenario: The user wants to login into Viade
		Given The login page
		When The user press Log In button and enter his personal data
		Then The user expects to be on the Welcome page of ViaDe