import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import {
  visitHomepage,
  clickLabel,
  getLabel,
  selAnlegenTile,
  selWasMöchtenSieBerechnen
} from "../selectors/orchestrator_selectors";

Given('the Customer is on the homepage --orchestrator', () => {
  return visitHomepage();
});

When('he clicks the "Anlegen" button --orchestrator', () => {
  return clickLabel('Anlegen');
});

Then('the "Was möchten Sie berechnen?" text should be displayed --orchestrator', () => {
  return selWasMöchtenSieBerechnen().should('be.visible');
});