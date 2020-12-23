Feature: Validate Owner Information page details for Petclinic application

    Scenario: Verify user is able to navigate to owner information page
        Given User is on Owners List page
        When User clicks on Peter owner
        Then User should be navigate on Owners information page
        And Able to see Pets and Visits title

    Scenario: Verify user pet details Name, Birthdate, Type on owner information page
        Given User is on Owners Information page
        Then User pet details Name, Birthdate, Type should displayed 