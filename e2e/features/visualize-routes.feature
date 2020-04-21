Feature: Watch my routes

	Scenario: The user has routes in his POD but not loaded
		Given the map page
		When the user types the folder with routes
		And press the download button
		Then the user expects to watch them in the list
	
	Scenario: The user has already loaded routes in the app
		Given the map page with routes loaded
		When the user press a route name
		Then the user expects to watch it drown in the map