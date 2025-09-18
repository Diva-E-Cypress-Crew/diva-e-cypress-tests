export function getHeading(label: string) {
  return cy.contains('h1:visible, h2:visible, [role="heading"]:visible', String(label));
}

export function getLabel(label: string) {
  return cy.contains(':visible', String(label));
}

export function clickLabel(label: string) {
  const parts = String(label).split(/\s+(?:and|und)\s+|,\s*/i).map(s => s.trim()).filter(Boolean);
  let chain = cy.wrap(null);
  parts.forEach(p => { 
    chain = chain.then(() => cy.contains(String(p)).click({ force: true })); 
  });
  return chain;
}

export function visitHomepage() {
  return cy.visit('/');
}

export function auszahlungen() {
  return cy.get('#auszahlungen');
}

export function auszahlungszeitraum() {
  return cy.get('#auszahlungszeitraum');
}

export function regelmassigerAuszahlungsbetrag() {
  return cy.get('#regelmassigerAuszahlungsbetrag');
}

export function turnus() {
  return cy.get('#turnus');
}

export function jahrllicheWertentwicklung() {
  return cy.get('#jahrllicheWertentwicklung');
}