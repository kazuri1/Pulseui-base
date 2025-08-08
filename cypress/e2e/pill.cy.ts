describe("Pill Component E2E", () => {
  beforeEach(() => {
    // Visit the Pill component story in Storybook
    cy.visit("/story/pill--default");
  });

  describe("Rendering", () => {
    it("should render pill with correct text", () => {
      cy.get('[data-testid="pill"]').should("contain", "Pill");
    });

    it("should be visible and interactive", () => {
      cy.get('[data-testid="pill"]')
        .should("be.visible")
        .should("not.be.disabled");
    });
  });

  describe("Variants", () => {
    it("should display all variant options", () => {
      // Test primary variant
      cy.visit("/story/pill--primary");
      cy.get('[data-testid="pill"]').should("have.class", "pill--primary");

      // Test secondary variant
      cy.visit("/story/pill--secondary");
      cy.get('[data-testid="pill"]').should("have.class", "pill--secondary");

      // Test success variant
      cy.visit("/story/pill--success");
      cy.get('[data-testid="pill"]').should("have.class", "pill--success");

      // Test warning variant
      cy.visit("/story/pill--warning");
      cy.get('[data-testid="pill"]').should("have.class", "pill--warning");

      // Test error variant
      cy.visit("/story/pill--error");
      cy.get('[data-testid="pill"]').should("have.class", "pill--error");
    });
  });

  describe("Sizes", () => {
    it("should display all size options", () => {
      // Test small size
      cy.visit("/story/pill--small");
      cy.get('[data-testid="pill"]').should("have.class", "pill--small");

      // Test medium size (default)
      cy.visit("/story/pill--medium");
      cy.get('[data-testid="pill"]').should("have.class", "pill--medium");

      // Test large size
      cy.visit("/story/pill--large");
      cy.get('[data-testid="pill"]').should("have.class", "pill--large");
    });
  });

  describe("States", () => {
    it("should handle disabled state", () => {
      cy.visit("/story/pill--disabled");
      cy.get('[data-testid="pill"]')
        .should("be.disabled")
        .should("have.class", "pill--disabled");
    });

    it("should handle loading state", () => {
      cy.visit("/story/pill--loading");
      cy.get('[data-testid="pill"]')
        .should("have.class", "pill--loading")
        .should("have.attr", "aria-busy", "true");
    });

    it("should handle active state", () => {
      cy.visit("/story/pill--active");
      cy.get('[data-testid="pill"]').should("have.class", "pill--active");
    });
  });

  describe("Interactions", () => {
    it("should be clickable when enabled", () => {
      cy.visit("/story/pill--interactive");
      cy.get('[data-testid="pill"]').click();
      // Add assertions for click behavior if needed
    });

    it("should not be clickable when disabled", () => {
      cy.visit("/story/pill--disabled");
      cy.get('[data-testid="pill"]').click({ force: true });
      // Should not trigger any actions
    });

    it("should handle keyboard navigation", () => {
      cy.visit("/story/pill--interactive");
      cy.get('[data-testid="pill"]').focus().type("{enter}").type("{space}");
    });
  });

  describe("Responsive Behavior", () => {
    it("should be responsive on mobile", () => {
      cy.viewport("iphone-x");
      cy.visit("/story/pill--default");
      cy.get('[data-testid="pill"]').should("be.visible");
    });

    it("should be responsive on tablet", () => {
      cy.viewport("ipad-2");
      cy.visit("/story/pill--default");
      cy.get('[data-testid="pill"]').should("be.visible");
    });

    it("should be responsive on desktop", () => {
      cy.viewport(1920, 1080);
      cy.visit("/story/pill--default");
      cy.get('[data-testid="pill"]').should("be.visible");
    });
  });

  describe("Accessibility", () => {
    it("should have proper ARIA attributes", () => {
      cy.visit("/story/pill--default");
      cy.get('[data-testid="pill"]')
        .should("have.attr", "role", "button")
        .should("be.focusable");
    });

    it("should support screen readers", () => {
      cy.visit("/story/pill--default");
      cy.get('[data-testid="pill"]').should("have.attr", "aria-label");
    });
  });

  describe("Theme Integration", () => {
    it("should work with different themes", () => {
      // Test light theme
      cy.visit("/story/pill--default");
      cy.get('[data-testid="pill"]').should("be.visible");

      // Test dark theme (if available)
      cy.get('[data-theme="dark"]').click();
      cy.get('[data-testid="pill"]').should("be.visible");
    });
  });

  describe("Performance", () => {
    it("should render quickly", () => {
      cy.visit("/story/pill--default");
      cy.get('[data-testid="pill"]').should("be.visible");

      // Measure render time (basic check)
      const startTime = performance.now();
      cy.get('[data-testid="pill"]').then(() => {
        const endTime = performance.now();
        const renderTime = endTime - startTime;
        expect(renderTime).to.be.lessThan(1000); // Should render in under 1 second
      });
    });
  });
});
