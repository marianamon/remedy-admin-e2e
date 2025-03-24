Feature: Provider Dashboard

    Background:
     Given a user logged with "Provider" role

    Scenario Outline: Validate the provider dashboard
      When the user is on the "Dashboard" page
      Then the practice is automatically loaded
      And the <functionalities> are enabled
      Examples:
          | functionalities     | 
          | "Call History"      | 
          | "Roster"            | 
          | "On Call Override"  | 
          | "Telehealth"        |    
