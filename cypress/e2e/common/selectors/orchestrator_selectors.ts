export function inputByLabel(label: string) {
  const text = String(label);
  return cy.contains('label', text).then($l => {
    const id = $l.attr('for');
    if (id) return cy.get('#' + id);
    const $input = $l.closest('form, *').find('input, textarea, [contenteditable="true"]').first();
    if ($input && $input.length) return cy.wrap($input);
    return cy.contains(':visible', text).parents().find('input, textarea, [contenteditable="true"]').first();
  });
}

export function getHeading(label: string) {
  return cy.contains('h1:visible, h2:visible, [role="heading"]:visible', String(label));
}

export function getLabel(label: string) {
  return cy.contains(':visible', String(label));
}

export function clickLabel(label: string) {
  const parts = String(label).split(/\s+(?:and|und)\s+|,\s*/i).map(s => s.trim()).filter(Boolean);
  let chain = cy.wrap(null);
  parts.forEach(p => { chain = chain.then(() => cy.contains(String(p)).click({ force: true })); });
  return chain;
}

export function visitHomepage() {
  return cy.visit('/');
}

export function browserName() {
  return cy.get('text=Benutze unsere Homepage, die nie solche Nachrichten anzeigt');
}

export function startLink() {
  return cy.get('#startLink');
}

export function cookiePolicyLink() {
  return cy.get('#cookie-policy-link');
}

export function privacyPolicyLink() {
  return cy.get('#privacy-policy-link');
}

export function termsOfServiceLink() {
  return cy.get('#terms-of-service-link');
}

export function aboutUsLink() {
  return cy.get('#about-us-link');
}

export function contactUsLink() {
  return cy.get('#contact-us-link');
}

export function searchButton() {
  return cy.get('button[type="submit"]');