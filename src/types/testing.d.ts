// Type definitions for testing utilities

declare global {
  namespace Cypress {
    interface Chainable {
      // Custom commands
      mount: typeof mount;
      getByTestId: (testId: string) => Chainable<JQuery<HTMLElement>>;
      getByRole: (
        role: string,
        options?: any
      ) => Chainable<JQuery<HTMLElement>>;
      waitForComponent: (
        componentName: string
      ) => Chainable<JQuery<HTMLElement>>;
      checkAccessibility: () => Chainable<void>;
      testResponsive: (breakpoints: {
        [key: string]: [number, number];
      }) => Chainable<void>;
      testTheme: (themes: string[]) => Chainable<void>;
      testInteractions: (componentSelector: string) => Chainable<void>;
      testKeyboardNavigation: (componentSelector: string) => Chainable<void>;
      testStates: (
        componentSelector: string,
        states: string[]
      ) => Chainable<void>;
      testVariants: (
        componentSelector: string,
        variants: string[]
      ) => Chainable<void>;
    }
  }
}

// Jest matchers
declare global {
  namespace jest {
    interface Matchers<R> {
      toHaveClass: (className: string) => R;
      toHaveAttribute: (attr: string, value?: string) => R;
      toBeDisabled: () => R;
      toBeVisible: () => R;
      toBeInTheDocument: () => R;
    }
  }
}

export {};
