Feature: Create a Route

	Scenario: The user creates correctly a route
		Given The create route page
		When the user clicks in some points of the map
        And writes a name for the route
		Then a new route should be created and saved in his POD

    # Scenario: The user tries to create a route without name
	# 	Given The create route page
	# 	When the user clicks in some points of the map
    #     And writes a name for the route
	# 	Then a new route should be created and saved in his POD

    # Scenario: The user tries to create a route without points
	# 	Given The create route page
	# 	When the user clicks in some points of the map
    #     And writes a name for the route
	# 	Then a new route should be created and saved in his POD