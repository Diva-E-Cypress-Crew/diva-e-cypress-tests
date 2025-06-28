export const homePage = () => cy.get('https://duckduckgo.com');

export const searchBox = () => cy.get('#rrb-input');
export const switchToDuckDuckGoText = () => cy.get('span:contains("Switch to DuckDuckGo.")');