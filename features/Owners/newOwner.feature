Feature: Validate New Owner Page for Petclinic application

    Scenario: Verify user able to see new owner page after clicking ADD NEW sub-menu of Owners tab
        Given User is on Petclinic home page
        When User clicks on Owners tab
        And Clicks on ADD NEW sub-menu
        Then New Owner page should get displayed

    Scenario: Verify User able to see five text field labels on new owner registration page
        Given User is on new owner page
        Then Five text fields labels should be displayed as FirstName, LastName, Address, City, Telephone

    Scenario: Verify user is able to add New Owner
        Given User is on New Owner page
        When User enter valid First Name, Last Name, Address, City, Telephone
        And User clicks on Add Owner button on New Owner page
        Then User should be navigate on Owners page and added owner should be displayed at last