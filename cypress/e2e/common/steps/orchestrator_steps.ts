import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import * as sel from '../selectors/orchestrator_selectors';

Given("the Customer is on the homepage", () => {
  cy.visit('/');
});

When("he clicks Vorlesungsverzeichnis", () => {
  sel.clickLabel('Vorlesungsverzeichnis');
});

Then("Fremdsprachen should be displayed", () => {
  sel.getLabel('Fremdsprachen').should('be.visible');
});

When("he clicks Fremdsprachen", () => {
  sel.clickLabel('Fremdsprachen');
});

Then("Japanisch should be shown", () => {
  sel.getLabel('Japanisch').should('be.visible');
});