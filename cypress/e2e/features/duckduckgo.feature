Feature: duckduckgo.com
  Scenario: visiting the frontpage
    Given I visit duckduckgo.com
    Then I should see a search box
    Then I should see the text "Switch to DuckDuckGo."
    