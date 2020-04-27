Feature: Viade logout

    Scenario: The user wants to logout Viade
        Given The Welcome page of Viade
        When The user press the exit button
        Then The user expects to be on the Login page of Viade
