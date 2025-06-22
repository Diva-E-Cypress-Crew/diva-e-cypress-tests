import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import {
  visitHomepage,
  clickLabel,
  getLabel,
  selAnlegenTile,
  selWasMöchtenSieBerechnen
} from './orchestrator_selectors';

Given('the Customer is on the homepage', () => {
  return visitHomepage();
});

When('he clicks the "Anlegen" button', () => {
  return clickLabel('Anlegen');
});

Then('the "Was möchten Sie berechnen?" text should be displayed', () => {
  return selWasMöchtenSieBerechnen().should('be.visible');
});