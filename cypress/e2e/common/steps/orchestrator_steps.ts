import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import * as sel from '../selectors/orchestrator_selectors';

Given('the Customer is on the homepage', () => {
  return sel.visitHomepage();
});

When('he clicks "X"', () => {
  return sel.clickLabel('X');
});

When('he clicks X', () => {
  return sel.clickLabel('X');
});

Then('I should see a search box', () => {
  return cy.location('pathname', { timeout: 10000 }).should('include', '/');
});

Then('I should see the text "Switch to DuckDuckGo"', () => {
  return sel.getLabel('Switch to DuckDuckGo').should('be.visible');
});

Then('I should see the text "Switch to DuckDuckGo."', () => {
  return sel.getLabel('Switch to DuckDuckGo').should('be.visible');
});