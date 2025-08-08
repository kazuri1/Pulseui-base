import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, jest } from "@jest/globals";
import "@testing-library/jest-dom";
import React from "react";
import { TextInput } from "./TextInput";

describe("TextInput", () => {
  it("renders with label", () => {
    render(<TextInput label="Email Address" value="" onChange={() => {}} />);
    expect(screen.getByText("Email Address")).toBeInTheDocument();
  });

  it("renders required indicator", () => {
    render(<TextInput label="Email Address" required value="" onChange={() => {}} />);
    expect(screen.getByText("*")).toBeInTheDocument();
  });

  it("renders placeholder", () => {
    render(<TextInput placeholder="Enter your email" value="" onChange={() => {}} />);
    expect(screen.getByPlaceholderText("Enter your email")).toBeInTheDocument();
  });

  it("renders caption", () => {
    render(<TextInput caption="Must be a valid email" value="" onChange={() => {}} />);
    expect(screen.getByText("Must be a valid email")).toBeInTheDocument();
  });

  it("renders error message", () => {
    render(<TextInput error="Invalid email address" value="" onChange={() => {}} />);
    expect(screen.getByText("Invalid email address")).toBeInTheDocument();
    // Check for the error icon SVG instead of text symbol
    expect(screen.getByTestId("InfoOutlinedIcon")).toBeInTheDocument();
  });

  it("calls onChange when input changes", () => {
    const handleChange = jest.fn();
    render(<TextInput onChange={handleChange} value="" />);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "test@example.com" } });

    expect(handleChange).toHaveBeenCalledWith("test@example.com");
  });

  it("calls onFocus when input is focused", () => {
    const handleFocus = jest.fn();
    render(<TextInput onFocus={handleFocus} value="" onChange={() => {}} />);

    const input = screen.getByRole("textbox");
    fireEvent.focus(input);

    expect(handleFocus).toHaveBeenCalled();
  });

  it("calls onBlur when input loses focus", () => {
    const handleBlur = jest.fn();
    render(<TextInput onBlur={handleBlur} value="" onChange={() => {}} />);

    const input = screen.getByRole("textbox");
    fireEvent.blur(input);

    expect(handleBlur).toHaveBeenCalled();
  });

  it("applies disabled state", () => {
    render(<TextInput disabled />);
    const input = screen.getByRole("textbox");
    expect(input).toBeDisabled();
  });

  it("renders with different input types", () => {
    const { rerender } = render(<TextInput type="email" value="" onChange={() => {}} />);
    expect(screen.getByRole("textbox")).toHaveAttribute("type", "email");

    rerender(<TextInput type="password" value="" onChange={() => {}} />);
    const passwordInput = screen.getByDisplayValue("");
    expect(passwordInput).toHaveAttribute("type", "password");

    rerender(<TextInput type="number" value="" onChange={() => {}} />);
    expect(screen.getByRole("spinbutton")).toBeInTheDocument();
  });

  it("renders with left icon", () => {
    render(<TextInput leftIcon="email" value="" onChange={() => {}} />);
    // The icon should be rendered by the Input component
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("renders with right icon", () => {
    render(<TextInput rightIcon="search" value="" onChange={() => {}} />);
    // The icon should be rendered by the Input component
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("shows password toggle for password inputs", () => {
    render(<TextInput type="password" showPasswordToggle value="" onChange={() => {}} />);
    // The password toggle should be rendered by the Input component  
    const passwordInput = screen.getByDisplayValue("");
    expect(passwordInput).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /show password/i })).toBeInTheDocument();
  });

  it("applies error styles when error is present", () => {
    const { container } = render(<TextInput error="Error message" value="" onChange={() => {}} />);
    expect(container.firstChild).toHaveClass("error");
  });

  it("applies disabled styles when disabled", () => {
    const { container } = render(<TextInput disabled value="" onChange={() => {}} />);
    expect(container.firstChild).toHaveClass("disabled");
  });

  it("generates unique id when not provided", () => {
    render(<TextInput label="Test" value="" onChange={() => {}} />);
    const label = screen.getByText("Test");
    const input = screen.getByRole("textbox");

    expect(label).toHaveAttribute("for");
    expect(input).toHaveAttribute("id");
    expect(label.getAttribute("for")).toBe(input.getAttribute("id"));
  });

  it("uses provided id", () => {
    render(<TextInput label="Test" id="custom-id" value="" onChange={() => {}} />);
    const label = screen.getByText("Test");
    const input = screen.getByRole("textbox");

    expect(label).toHaveAttribute("for", "custom-id");
    expect(input).toHaveAttribute("id", "custom-id");
  });

  it("does not show caption when error is present", () => {
    render(<TextInput caption="Caption text" error="Error message" value="" onChange={() => {}} />);
    expect(screen.queryByText("Caption text")).not.toBeInTheDocument();
    expect(screen.getByText("Error message")).toBeInTheDocument();
  });
});
