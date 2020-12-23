Feature: User going to validate PetTypes tab of Petclinic Application

      
       Scenario: Verify title of the page as 'Pet Types' on clicking menu 'Pet Types'

              Given User is on Petclinic home page
              When User clicks on PetTypes tab
              Then Pet Types title should be displayed