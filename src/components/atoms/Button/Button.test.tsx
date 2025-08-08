import { render, screen } from "@testing-library/react";
import { describe, it, expect, jest } from "@jest/globals";
import "@testing-library/jest-dom";
import { Button } from "./Button";
import React from "react";

describe("Button", () => {
  it("renders with default props", () => {
    render(<Button>Click me</Button>);
    expect(
      screen.getByRole("button", { name: "Click me" })
    ).toBeInTheDocument();
  });

  it("renders with different variants", () => {
    const variants = [
      "filled",
      "subtle",
      "light",
      "outline",
      "white",
      "default",
    ] as const;

    variants.forEach((variant) => {
      const { unmount } = render(
        <Button variant={variant}>{variant} Button</Button>
      );
      const button = screen.getByRole("button", { name: `${variant} Button` });
      expect(button).toBeInTheDocument();
      expect(button).toHaveClass(`variant-${variant}`);
      unmount();
    });
  });

  it("renders with different sizes", () => {
    const sizes = ["xs", "sm", "md", "lg", "xl"] as const;

    sizes.forEach((size) => {
      const { unmount } = render(<Button size={size}>{size} Button</Button>);
      const button = screen.getByRole("button", { name: `${size} Button` });
      expect(button).toBeInTheDocument();
      expect(button).toHaveClass(`size-${size}`);
      unmount();
    });
  });

  it("renders with different states", () => {
    const states = ["default", "hover", "disabled"] as const;

    states.forEach((state) => {
      const { unmount } = render(<Button state={state}>{state} Button</Button>);
      const button = screen.getByRole("button", { name: `${state} Button` });
      expect(button).toBeInTheDocument();
      expect(button).toHaveClass(`state-${state}`);
      unmount();
    });
  });

  it("renders with left icon", () => {
    render(<Button leftIcon="add">Button</Button>);
    const button = screen.getByRole("button", { name: "Button" });
    expect(button).toBeInTheDocument();
  });

  it("renders with right icon", () => {
    render(<Button rightIcon="delete">Button</Button>);
    const button = screen.getByRole("button", { name: "Button" });
    expect(button).toBeInTheDocument();
  });

  it("renders with both icons", () => {
    render(
      <Button leftIcon="add" rightIcon="delete">
        Button
      </Button>
    );
    const button = screen.getByRole("button", { name: "Button" });
    expect(button).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(<Button className="custom-class">Button</Button>);
    const button = screen.getByRole("button", { name: "Button" });
    expect(button).toHaveClass("custom-class");
  });

  it("handles click events", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Button</Button>);
    const button = screen.getByRole("button", { name: "Button" });
    button.click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("is disabled when disabled prop is true", () => {
    render(<Button disabled>Button</Button>);
    const button = screen.getByRole("button", { name: "Button" });
    expect(button).toBeDisabled();
  });

  it("is disabled when state is disabled", () => {
    render(<Button state="disabled">Button</Button>);
    const button = screen.getByRole("button", { name: "Button" });
    expect(button).toBeDisabled();
  });

  it("renders with compact mode", () => {
    render(<Button compact>Button</Button>);
    const button = screen.getByRole("button", { name: "Button" });
    expect(button).toBeInTheDocument();
  });

  it("renders with different justification", () => {
    render(
      <Button justify="space-between" leftIcon="add" rightIcon="delete">
        Button
      </Button>
    );
    const button = screen.getByRole("button", { name: "Button" });
    expect(button).toBeInTheDocument();
  });

  it("renders without crashing", () => {
    render(<Button>Test Button</Button>);
    expect(screen.getByText("Test Button")).toBeInTheDocument();
  });

  it("handles leftIcon with 'none' value", () => {
    render(<Button leftIcon="none">Test Button</Button>);
    expect(screen.getByText("Test Button")).toBeInTheDocument();
    // Should not throw any errors when leftIcon is "none"
  });

  it("handles rightIcon with 'none' value", () => {
    render(<Button rightIcon="none">Test Button</Button>);
    expect(screen.getByText("Test Button")).toBeInTheDocument();
    // Should not throw any errors when rightIcon is "none"
  });

  it("handles both leftIcon and rightIcon with 'none' values", () => {
    render(
      <Button leftIcon="none" rightIcon="none">
        Test Button
      </Button>
    );
    expect(screen.getByText("Test Button")).toBeInTheDocument();
    // Should not throw any errors when both icons are "none"
  });

  it("handles valid icon strings", () => {
    render(<Button leftIcon="add">Add Item</Button>);
    expect(screen.getByText("Add Item")).toBeInTheDocument();
  });

  it("handles invalid icon strings gracefully", () => {
    render(<Button leftIcon="invalid-icon">Test Button</Button>);
    expect(screen.getByText("Test Button")).toBeInTheDocument();
    // Should not throw any errors when icon string is invalid
  });
});
