import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, jest } from "@jest/globals";
import "@testing-library/jest-dom";
import React from "react";
import { Textarea } from "./Textarea";

describe("Textarea", () => {
  it("renders with label", () => {
    render(<Textarea label="Description" />);
    expect(screen.getByText("Description")).toBeInTheDocument();
  });

  it("renders required indicator", () => {
    render(<Textarea label="Description" required />);
    expect(screen.getByText("*")).toBeInTheDocument();
  });

  it("renders placeholder", () => {
    render(<Textarea placeholder="Enter description" />);
    expect(
      screen.getByPlaceholderText("Enter description")
    ).toBeInTheDocument();
  });

  it("renders caption", () => {
    render(<Textarea caption="Optional helper text" />);
    expect(screen.getByText("Optional helper text")).toBeInTheDocument();
  });

  it("calls onChange when textarea changes", () => {
    const handleChange = jest.fn();
    render(<Textarea onChange={handleChange} />);

    const textarea = screen.getByRole("textbox");
    fireEvent.change(textarea, { target: { value: "New text" } });

    expect(handleChange).toHaveBeenCalledWith("New text");
  });

  it("calls onFocus when textarea is focused", () => {
    const handleFocus = jest.fn();
    render(<Textarea onFocus={handleFocus} />);

    const textarea = screen.getByRole("textbox");
    fireEvent.focus(textarea);

    expect(handleFocus).toHaveBeenCalled();
  });

  it("calls onBlur when textarea loses focus", () => {
    const handleBlur = jest.fn();
    render(<Textarea onBlur={handleBlur} />);

    const textarea = screen.getByRole("textbox");
    fireEvent.blur(textarea);

    expect(handleBlur).toHaveBeenCalled();
  });

  it("applies disabled state", () => {
    render(<Textarea disabled />);
    const textarea = screen.getByRole("textbox");
    expect(textarea).toBeDisabled();
  });

  it("renders with custom rows", () => {
    render(<Textarea rows={8} />);
    const textarea = screen.getByRole("textbox");
    expect(textarea).toHaveAttribute("rows", "8");
  });

  it("applies no-resize class when resizable is false", () => {
    const { container } = render(<Textarea resizable={false} />);
    const textarea = container.querySelector("textarea");
    expect(textarea).toHaveClass("noResize");
  });

  it("generates unique id when not provided", () => {
    render(<Textarea label="Test" />);
    const label = screen.getByText("Test");
    const textarea = screen.getByRole("textbox");

    expect(label).toHaveAttribute("for");
    expect(textarea).toHaveAttribute("id");
    expect(label.getAttribute("for")).toBe(textarea.getAttribute("id"));
  });

  it("uses provided id", () => {
    render(<Textarea label="Test" id="custom-id" />);
    const label = screen.getByText("Test");
    const textarea = screen.getByRole("textbox");

    expect(label).toHaveAttribute("for", "custom-id");
    expect(textarea).toHaveAttribute("id", "custom-id");
  });

  it("renders with value", () => {
    render(<Textarea value="Initial text" />);
    const textarea = screen.getByRole("textbox");
    expect(textarea).toHaveValue("Initial text");
  });

  it("applies disabled styles when disabled", () => {
    const { container } = render(<Textarea disabled />);
    expect(container.firstChild).toHaveClass("disabled");
  });

  it("does not show caption when empty", () => {
    render(<Textarea />);
    expect(screen.queryByText("")).not.toBeInTheDocument();
  });
});
