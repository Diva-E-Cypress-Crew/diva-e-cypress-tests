export function visitHomepage(): void {
  cy.visit('/');
}

export function clickLabel(label: string): void {
  cy.contains(String(label)).click({ force: true });
}

export function getLabel(label: string): Cypress.Chainable<unknown> {
  return cy.contains(':visible', String(label));
}