import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, jest } from "@jest/globals";
import "@testing-library/jest-dom";
import React from "react";
import { Switch } from "./Switch";

describe("Switch", () => {
  it("renders with label", () => {
    render(<Switch label="Enable feature" />);
    expect(screen.getByText("Enable feature")).toBeInTheDocument();
  });

  it("renders required indicator", () => {
    render(<Switch label="Accept terms" required />);
    expect(screen.getByText("*")).toBeInTheDocument();
  });

  it("renders caption", () => {
    render(<Switch caption="Optional helper text" />);
    expect(screen.getByText("Optional helper text")).toBeInTheDocument();
  });

  it("renders error message", () => {
    render(<Switch error="This feature is unavailable" />);
    expect(screen.getByText("This feature is unavailable")).toBeInTheDocument();
    expect(screen.getByText("ℹ")).toBeInTheDocument();
  });

  it("calls onChange when switch is toggled", () => {
    const handleChange = jest.fn();
    render(<Switch onChange={handleChange} />);

    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);

    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it("applies checked state", () => {
    render(<Switch checked />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeChecked();
  });

  it("applies disabled state", () => {
    render(<Switch disabled />);
    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeDisabled();
  });

  it("generates unique id when not provided", () => {
    render(<Switch label="Test" />);
    const label = screen.getByText("Test");
    const checkbox = screen.getByRole("checkbox");

    expect(label).toHaveAttribute("for");
    expect(checkbox).toHaveAttribute("id");
    expect(label.getAttribute("for")).toBe(checkbox.getAttribute("id"));
  });

  it("uses provided id", () => {
    render(<Switch label="Test" id="custom-id" />);
    const label = screen.getByText("Test");
    const checkbox = screen.getByRole("checkbox");

    expect(label).toHaveAttribute("for", "custom-id");
    expect(checkbox).toHaveAttribute("id", "custom-id");
  });

  it("applies error styles when error is present", () => {
    const { container } = render(<Switch error="Error message" />);
    expect(container.firstChild).toHaveClass("error");
  });

  it("applies disabled styles when disabled", () => {
    const { container } = render(<Switch disabled />);
    expect(container.firstChild).toHaveClass("disabled");
  });

  it("does not show caption when error is present", () => {
    render(<Switch caption="Caption text" error="Error message" />);
    expect(screen.queryByText("Caption text")).not.toBeInTheDocument();
    expect(screen.getByText("Error message")).toBeInTheDocument();
  });

  it("toggles from unchecked to checked", () => {
    const handleChange = jest.fn();
    render(<Switch checked={false} onChange={handleChange} />);

    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);

    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it("toggles from checked to unchecked", () => {
    const handleChange = jest.fn();
    render(<Switch checked={true} onChange={handleChange} />);

    const checkbox = screen.getByRole("checkbox");
    fireEvent.click(checkbox);

    expect(handleChange).toHaveBeenCalledWith(false);
  });

  it("applies size classes", () => {
    const { container, rerender } = render(<Switch size="sm" />);
    expect(container.firstChild).toHaveClass("size-sm");

    rerender(<Switch size="lg" />);
    expect(container.firstChild).toHaveClass("size-lg");
  });
});
