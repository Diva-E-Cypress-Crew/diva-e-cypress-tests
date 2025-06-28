Feature: MEAG Investmentrechner – Button-Klick (minimal)

  Scenario: Klick auf "Anlegen"-Tile
    Given the Customer is on the homepage --orchestrator
    When  he clicks the "Anlegen" button --orchestrator
    Then  the "Was möchten Sie berechnen?" text should be displayed --orchestrator