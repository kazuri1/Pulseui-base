import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, jest } from "@jest/globals";
import "@testing-library/jest-dom";
import React from "react";
import { Input } from "./Input";

describe("Input Component", () => {
  it("renders with default props", () => {
    render(<Input placeholder="Test placeholder" />);
    const input = screen.getByPlaceholderText("Test placeholder");
    expect(input).toBeInTheDocument();
  });

  it("renders with different variants", () => {
    const { rerender } = render(<Input variant="default" placeholder="Test" />);
    expect(screen.getByPlaceholderText("Test")).toHaveClass("variant-default");

    rerender(<Input variant="filled" placeholder="Test" />);
    expect(screen.getByPlaceholderText("Test")).toHaveClass("variant-filled");

    rerender(<Input variant="unstyled" placeholder="Test" />);
    expect(screen.getByPlaceholderText("Test")).toHaveClass("variant-unstyled");
  });

  it("renders with different sizes", () => {
    const { rerender } = render(<Input size="sm" placeholder="Test" />);
    expect(screen.getByPlaceholderText("Test")).toHaveClass("size-sm");

    rerender(<Input size="md" placeholder="Test" />);
    expect(screen.getByPlaceholderText("Test")).toHaveClass("size-md");

    rerender(<Input size="lg" placeholder="Test" />);
    expect(screen.getByPlaceholderText("Test")).toHaveClass("size-lg");
  });

  it("renders with different states", () => {
    const { rerender } = render(<Input state="enabled" placeholder="Test" />);
    expect(screen.getByPlaceholderText("Test")).toHaveClass("state-enabled");

    rerender(<Input state="focus" placeholder="Test" />);
    expect(screen.getByPlaceholderText("Test")).toHaveClass("state-focus");

    rerender(<Input state="disabled" placeholder="Test" />);
    expect(screen.getByPlaceholderText("Test")).toHaveClass("state-disabled");
  });

  it("renders with error state", () => {
    render(<Input state="error" placeholder="Test" />);
    expect(screen.getByPlaceholderText("Test")).toHaveClass("state-error");
  });

  it("renders with disabled state", () => {
    render(<Input disabled placeholder="Test" />);
    const input = screen.getByPlaceholderText("Test");
    expect(input).toBeDisabled();
    expect(input).toHaveClass("disabled");
  });

  it("renders with readonly state", () => {
    render(<Input readonly placeholder="Test" />);
    const input = screen.getByPlaceholderText("Test");
    expect(input).toHaveAttribute("readonly");
    expect(input).toHaveClass("readonly");
  });

  it("renders with required attribute", () => {
    render(<Input required placeholder="Test" />);
    expect(screen.getByPlaceholderText("Test")).toHaveAttribute("required");
  });

  it("renders with different input types", () => {
    const { rerender } = render(<Input type="text" placeholder="Test" />);
    expect(screen.getByPlaceholderText("Test")).toHaveAttribute("type", "text");

    rerender(<Input type="email" placeholder="Test" />);
    expect(screen.getByPlaceholderText("Test")).toHaveAttribute(
      "type",
      "email"
    );

    rerender(<Input type="password" placeholder="Test" />);
    expect(screen.getByPlaceholderText("Test")).toHaveAttribute(
      "type",
      "password"
    );
  });

  it("renders with different input types", () => {
    const { rerender } = render(<Input type="text" placeholder="Test" />);
    expect(screen.getByPlaceholderText("Test")).toHaveAttribute("type", "text");

    rerender(<Input type="email" placeholder="Test" />);
    expect(screen.getByPlaceholderText("Test")).toHaveAttribute(
      "type",
      "email"
    );

    rerender(<Input type="password" placeholder="Test" />);
    expect(screen.getByPlaceholderText("Test")).toHaveAttribute(
      "type",
      "password"
    );
  });

  it("renders with value", () => {
    render(<Input value="test value" placeholder="Test" />);
    const input = screen.getByPlaceholderText("Test");
    expect(input).toHaveValue("test value");
  });

  it("renders with name and id attributes", () => {
    render(<Input name="test-name" id="test-id" placeholder="Test" />);
    const input = screen.getByPlaceholderText("Test");
    expect(input).toHaveAttribute("name", "test-name");
    expect(input).toHaveAttribute("id", "test-id");
  });

  it("applies custom className", () => {
    render(<Input className="custom-class" placeholder="Test" />);
    expect(screen.getByPlaceholderText("Test")).toHaveClass("custom-class");
  });

  it("forwards ref correctly", () => {
    const ref = jest.fn();
    render(<Input ref={ref} placeholder="Test" />);
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLInputElement));
  });

  it("renders with left icon string", () => {
    render(<Input leftIcon="search" placeholder="Test" />);
    expect(screen.getByPlaceholderText("Test")).toBeInTheDocument();
  });

  it("renders with right icon string", () => {
    render(<Input rightIcon="dropdown" placeholder="Test" />);
    expect(screen.getByPlaceholderText("Test")).toBeInTheDocument();
  });

  it("renders with both icon strings", () => {
    render(<Input leftIcon="search" rightIcon="dropdown" placeholder="Test" />);
    expect(screen.getByPlaceholderText("Test")).toBeInTheDocument();
  });

  it("renders password input with automatic toggle", () => {
    render(<Input type="password" placeholder="Test" />);
    expect(screen.getByPlaceholderText("Test")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("renders password input with visible password", () => {
    render(<Input type="password" passwordVisible={true} placeholder="Test" />);
    expect(screen.getByPlaceholderText("Test")).toHaveAttribute("type", "text");
  });

  it("renders password input with hidden password", () => {
    render(
      <Input type="password" passwordVisible={false} placeholder="Test" />
    );
    expect(screen.getByPlaceholderText("Test")).toHaveAttribute(
      "type",
      "password"
    );
  });

  it("toggles password visibility when clicking the eye icon", () => {
    render(<Input type="password" placeholder="Test" />);

    const input = screen.getByPlaceholderText("Test");
    const toggleButton = screen.getByRole("button");

    // Initially should be password type
    expect(input).toHaveAttribute("type", "password");

    // Click the toggle button
    fireEvent.click(toggleButton);

    // Should now be text type
    expect(input).toHaveAttribute("type", "text");

    // Click again to hide
    fireEvent.click(toggleButton);

    // Should be password type again
    expect(input).toHaveAttribute("type", "password");
  });

  it("calls onPasswordVisibilityChange when provided", () => {
    const handleVisibilityChange = jest.fn();
    render(
      <Input
        type="password"
        passwordVisible={false}
        onPasswordVisibilityChange={handleVisibilityChange}
        placeholder="Test"
      />
    );

    const toggleButton = screen.getByRole("button");

    // Click the toggle button
    fireEvent.click(toggleButton);

    // Should call the handler with true
    expect(handleVisibilityChange).toHaveBeenCalledWith(true);
  });

  it("does not show toggle when explicitly disabled", () => {
    render(
      <Input type="password" showPasswordToggle={false} placeholder="Test" />
    );

    expect(screen.getByPlaceholderText("Test")).toBeInTheDocument();
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });
});
