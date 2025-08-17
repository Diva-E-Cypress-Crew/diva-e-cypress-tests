import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import * as sel from '../selectors/orchestrator_selectors';

Given(/^the Customer is on the homepage$/i, () => {
  return sel.visitHomepage();
});
When(/^he clicks\s+"?(.+?)"?$/i, (label: string) => {
  return sel.clickLabel(label);
});
Then(/^(?:the )?(.+?) should be (?:shown|visible)$/i, (text: string) => {
  return sel.getHeading(text)
    .then($h => $h && ($h as any).length ? cy.wrap($h) : sel.getLabel(text))
    .should('be.visible');
});
When(/^he changes the\s+(.+?)\s+"?(.+?)"?$/i, (field: string, value: string) => {
  return sel.inputByLabel(field).clear().type(value);
});
Then(/^a changed\s+(.+?)\s+should be shown\s+"?(.+?)"?$/i, (_field: string, value: string) => {
  return sel.getLabel(value).should('be.visible');
});
Then('I should see a search box', () => {
  return 
});
Then('I should see the text "Switch to DuckDuckGo."', () => {
  return sel.getLabel('Switch to DuckDuckGo').should('be.visible');
});