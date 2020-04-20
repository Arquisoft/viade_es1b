Feature: Add and remove a friend and create a group

	Scenario: I want to add a new friend
		Given The friends page
		When I type my new friend's webId
		Then I expect to see him in my friends list
