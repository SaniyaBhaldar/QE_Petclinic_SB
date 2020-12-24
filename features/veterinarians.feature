Feature: User going to validate veterinarians tab of Petclinic Application


       Scenario: Verify title of the page as 'veterinarians' on clicking menu 'all veterinarians'

              Given User clicks on veterinarians tab
              When User clicks on All veterinarians option
              Then Veterinarians page title should be displayed

       Scenario: Verify count of radiology veterinarians on 'veterinarians' page

              Given User is on veterinarians list page
              Then Radiology veterinarians should be displayed with exact count


