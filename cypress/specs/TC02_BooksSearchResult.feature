Feature: Search Results

As a product manager, I want data table to be implemented so that the user can view their search results about the books of their choice.
     
    @StubBooksResult
    Scenario Outline: Sort book results based on author
        Given User visits '/books' on '<viewport>' device
        And User sees the author of '1st' book to be 'Nabil Shaikh' and '2nd' book to be 'Jiao Zhang'
        When User clicks on author column to sort the results based on author name
        Then User finds the author of '1st' book to be 'Jiao Zhang' and '2nd' book to be 'Nabil Shaikh'
    
    Examples:

        | viewport |
        | desktop  |
        | mobile   |