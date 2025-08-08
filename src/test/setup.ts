import "@testing-library/jest-dom/vitest";
import { vi } from "vitest";

// Mock CSS modules
vi.mock("*.module.scss", () => ({
  default: {
    // Mock CSS class names for testing
    button: "_button_123",
    input: "_input_456",
    label: "_label_789",
    // Add more as needed
  },
}));

// Mock CSS files
vi.mock("*.css", () => ({}));
vi.mock("*.scss", () => ({}));

// Global test setup
beforeEach(() => {
  // Reset any global state if needed
});

afterEach(() => {
  // Cleanup after each test
});
