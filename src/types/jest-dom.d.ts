/// <reference types="@testing-library/jest-dom" />

declare global {
  namespace jest {
    interface Matchers<R> {
      toBeInTheDocument(): R;
      toHaveClass(className: string): R;
      toHaveAttribute(attr: string, value?: string): R;
      toHaveStyle(style: Record<string, any>): R;
      toHaveValue(value: string | number): R;
      toBeDisabled(): R;
      toBeEnabled(): R;
      toBeVisible(): R;
      toBeEmptyDOMElement(): R;
      toHaveTextContent(text: string | RegExp): R;
    }
  }
}
