Feature: Add a friend 

	Scenario: The user introduces a correct webId
		Given the friends page
		When the user types his new friend's webId
		Then the user expects to see him in his friends list

	Scenario: The user introduces an invalid webId
		Given the friends page
		When the user types an inexistent webId
		Then an error must appear
		And the friend is not added

	Scenario: The user introduces a webId from an existent friend
		Given the friends page
		When the user types a webId of a friend
		Then the user must be notified
		And the friend is not added

	Scenario: The user wants to remove a friend
		Given the friends page
		When the user selects the friend he wants to remove
		And press de remove button
		Then the user is notified
		And the friend is not showed

