import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import * as sel from '../selectors/orchestrator_selectors';

Given("I am on the homepage", () => {
  cy.visit('/');
});

Then("I should see the text Switch to DuckDuckGo.", () => {
  sel.getLabel('Switch to DuckDuckGo').should('be.visible');
});

When("I click Set As Default Search", () => {
  sel.clickLabel('Set As Default Search');
});

Then("the text Make DuckDuckGo your default search engine should be displayed", () => {
  sel.getHeading('Make DuckDuckGo your default search engine').should('be.visible');
});