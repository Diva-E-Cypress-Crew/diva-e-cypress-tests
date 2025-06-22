export const visitHomepage = () => cy.visit('/');
export const clickLabel = (label: string) => cy.contains(String(label)).click();
export const getLabel = (label: string) => cy.contains(String(label));

export const selAnlegenTile = () => cy.contains('Anlegen');
export const selWasMöchtenSieBerechnen = () => cy.contains('Was möchten Sie berechnen?');