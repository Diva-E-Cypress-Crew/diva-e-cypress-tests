# url: https://lsf.htw-berlin.de/qisserver/rds?state=user&type=0&topitem=&breadCrumbSource=&topitem=functions

Feature: LSF
  As a user I want to open LSF and sign up for a japanese course

  Scenario: Anmelden
    Given the Customer is on the homepage
    When  he clicks Vorlesungsverzeichnis
    Then  Fremdsprachen should be displayed
    When he clicks Fremdsprachen
    Then Japanisch should be shown