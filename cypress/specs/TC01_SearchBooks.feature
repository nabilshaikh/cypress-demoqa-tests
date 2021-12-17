Feature: Search Books

As a product manager, I want books search feature to be implemented so that the user can access to books of their choice.
     
    @StubBooksResult
    Scenario Outline: Search for books using title
        Given User visits '/books' on '<viewport>' device
        When User search for books using keyword 'Cypress'
        Then User should see 1 record in the data table having title as 'Cypress Pocket Guide'
    
    Examples:

        | viewport |
        | desktop  |
        | mobile   |
    
    @StubBooksResult
    Scenario Outline: Search for books using author
        Given User visits '/books' on '<viewport>' device
        When User search for books using keyword 'Jiao'
        Then User should see 1 record in the data table having author as 'Jiao Zhang'
    
    Examples:

        | viewport |
        | desktop  |
        | mobile   |
    
    @StubBooksResult
    Scenario Outline: Search for books using publisher
        Given User visits '/books' on '<viewport>' device
        When User search for books using keyword 'Bombay'
        Then User should see 1 record in the data table having publisher as 'Bombay Publications'
    
    Examples:

        | viewport |
        | desktop  |
        | mobile   |
    
    @StubBooksResult
    Scenario Outline: Search for books using invalid keyword
        Given User visits '/books' on '<viewport>' device
        When User search for books using keyword 'avengers'
        Then User should not see any record in the data table
        And User should see the text as 'No rows found'
    
    Examples:

        | viewport |
        | desktop  |
        | mobile   |
    
    Scenario: Search for books when the book api is down
        When User searches for books when book service is down
        Then User should not see book results to get loaded in the data table
        And User should see the label as 'Loading...'