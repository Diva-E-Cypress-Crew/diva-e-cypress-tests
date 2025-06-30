export const visitHomepage = () => cy.visit('/');
export const clickLabel    = (label: string) => cy.contains(String(label)).click({ force: true });
export const getLabel      = (label: string) => cy.contains(String(label));
export const selAnlegen = () =>
  cy.contains('Anlegen');
export const selWasMochtenSieBerechnen = () =>
  cy.contains('Was möchten Sie berechnen?');