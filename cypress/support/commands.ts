// Custom commands for testing

// Wait for component to be fully loaded
Cypress.Commands.add("waitForComponent", (componentName: string) => {
  cy.get(`[data-testid="${componentName}"]`).should("be.visible");
});

// Check if component is accessible
Cypress.Commands.add("checkAccessibility", () => {
  cy.injectAxe();
  cy.checkA11y();
});

// Test responsive behavior
Cypress.Commands.add(
  "testResponsive",
  (breakpoints: { [key: string]: [number, number] }) => {
    Object.entries(breakpoints).forEach(([name, [width, height]]) => {
      cy.viewport(width, height);
      cy.get("body").should("be.visible");
      // Add specific responsive tests here
    });
  }
);

// Test theme switching
Cypress.Commands.add("testTheme", (themes: string[]) => {
  themes.forEach((theme) => {
    cy.get(`[data-theme="${theme}"]`).click();
    cy.get("body").should("have.attr", "data-theme", theme);
  });
});

// Test component interactions
Cypress.Commands.add("testInteractions", (componentSelector: string) => {
  cy.get(componentSelector).should("be.visible");
  cy.get(componentSelector).should("not.be.disabled");
  cy.get(componentSelector).click();
  // Add more interaction tests as needed
});

// Test keyboard navigation
Cypress.Commands.add("testKeyboardNavigation", (componentSelector: string) => {
  cy.get(componentSelector).focus();
  cy.get(componentSelector).type("{enter}");
  cy.get(componentSelector).type("{space}");
  cy.get(componentSelector).type("{tab}");
});

// Test component states
Cypress.Commands.add(
  "testStates",
  (componentSelector: string, states: string[]) => {
    states.forEach((state) => {
      cy.get(componentSelector).should("have.class", `component--${state}`);
    });
  }
);

// Test component variants
Cypress.Commands.add(
  "testVariants",
  (componentSelector: string, variants: string[]) => {
    variants.forEach((variant) => {
      cy.get(componentSelector).should("have.class", `component--${variant}`);
    });
  }
);
