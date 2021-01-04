Feature: User going to validate Petclinic Application homepage


    Scenario: Verify User will able to navigate to Petclinic application
        Given User will navigate to Petclinic url
        Then User should able to see Welcome to Petclinic message
        And User should able to see title of the webpage


    Scenario: Verify User able to see Five menus on homepage
        Given User is on Petclinic home page
        Then Five menus should be displayed as Home Owners Veterinarians Pet Types and Specialties

    

