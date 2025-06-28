export const homePage = () => cy.visit('https://duckduckgo.com');

export const searchBox = () => homePage().find('#rrb-input');
export const switchToDuckDuckGoText = () => homePage().find('span:contains("Switch to DuckDuckGo.")');