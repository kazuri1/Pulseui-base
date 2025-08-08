// Import commands.js using ES2015 syntax:
import "./commands";

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Add global error handling
Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  // for uncaught exceptions in the application code
  if (err.message.includes("ResizeObserver loop limit exceeded")) {
    return false;
  }
  if (err.message.includes("Script error")) {
    return false;
  }
  return true;
});

// Global configuration for all tests
beforeEach(() => {
  // Set viewport for consistent testing
  cy.viewport(1280, 720);

  // Wait for page to be ready
  cy.get("body").should("be.visible");
});

// Global afterEach hook
afterEach(() => {
  // Clean up any test data or state
  cy.clearLocalStorage();
  cy.clearCookies();
});
