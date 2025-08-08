// Import commands.js using ES2015 syntax:
import "./commands";

// Component testing specific configuration
import { mount } from "cypress/react18";

// Global mount function for component testing
Cypress.Commands.add("mount", mount);

// Add custom commands for component testing
Cypress.Commands.add("getByTestId", (testId: string) => {
  return cy.get(`[data-testid="${testId}"]`);
});

Cypress.Commands.add("getByRole", (role: string, options?: any) => {
  return cy.get(`[role="${role}"]`, options);
});

// Global error handling for component tests
Cypress.on("uncaught:exception", (err, runnable) => {
  // Prevent failures for common React errors
  if (err.message.includes("ResizeObserver loop limit exceeded")) {
    return false;
  }
  if (err.message.includes("Script error")) {
    return false;
  }
  return true;
});
