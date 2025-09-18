import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import * as sel from '../selectors/orchestrator_selectors';

Given("the Customer is on the homepage", () => {
  return sel.visitHomepage();
});

When("he clicks the \"Anlegen\" button", () => {
  return sel.clickLabel('Anlegen');
});

Then("the \"Was möchten Sie berechnen?\" title should be displayed", () => {
  return sel.getHeading('Was möchten Sie berechnen?').should('be.visible');
});