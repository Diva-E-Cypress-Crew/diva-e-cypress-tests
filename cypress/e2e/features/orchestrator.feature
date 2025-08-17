Feature: duckduckgo.com
  Scenario: visiting the frontpage
    Given the Customer is on the homepage
    Then I should see a search box
    Then I should see the text "Switch to DuckDuckGo."
    