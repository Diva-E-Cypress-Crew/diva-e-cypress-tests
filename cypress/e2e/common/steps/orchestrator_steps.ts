import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import * as sel from '../selectors/orchestrator_selectors';

Given("the Customer is on the homepage", () => {
  return sel.visitHomepage();
});

Then("I should see a search box", () => {
  return cy.get('input[type="search"]').should('be.visible');
});

Then("I should see the text \"Switch to DuckDuckGo.\"", () => {
  return sel.getHeading('Switch to DuckDuckGo.').should('be.visible');
});