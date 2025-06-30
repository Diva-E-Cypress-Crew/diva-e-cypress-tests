import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import * as selectors from '../selectors/orchestrator_selectors';

Given('the Customer is on the homepage', () => {
  return visitHomepage();
});
When('he clicks the "{string}" button', (param1: string) => {
  return selAnlegen().click();
});
Then('the "{string}" text should be displayed', (param1: string) => {
  return selWasMochtenSieBerechnen().should('be.visible');
}); 