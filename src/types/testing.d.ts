// Type definitions for testing utilities

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
