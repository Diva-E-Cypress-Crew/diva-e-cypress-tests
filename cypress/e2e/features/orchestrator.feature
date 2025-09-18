# url: https://meag.gitlab.diva-e.com/investmentrechner-2023

Feature: MEAG Investmentrechner – Button-Klick (minimal)

  Scenario: Klick auf "Anlegen"-Tile
    Given the Customer is on the homepage
    When  he clicks the "Anlegen" button
    Then  the "Was möchten Sie berechnen?" title should be displayed