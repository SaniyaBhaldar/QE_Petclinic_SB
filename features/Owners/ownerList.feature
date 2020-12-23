Feature: Validate Owners Home page details for Petclinic application

Scenario: Verify title of the page as 'Owners'
        Given User is on Owners List page
        Then Owners page title should be displayed

        