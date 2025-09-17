# url: https://duckduckgo.com/

Feature: DuckDuckGo
  As a user 
  I want to open DuckDuckGo and use the search bar

  Scenario: visiting the frontpage
    Given I am on the homepage
    Then I should see the text Switch to DuckDuckGo.
    When I click Set As Default Search
    Then the text Make DuckDuckGo your default search engine should be displayed
