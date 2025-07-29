import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom";
import { Input } from "./Input";

describe("Input", () => {
  it("renders with default props", () => {
    render(<Input placeholder="Test input" />);
    expect(screen.getByPlaceholderText("Test input")).toBeInTheDocument();
  });

  it("renders with different variants", () => {
    const variants = ["default", "filled", "unstyled"] as const;

    variants.forEach((variant) => {
      render(<Input variant={variant} placeholder="Test input" />);
      const input = screen.getByPlaceholderText("Test input");
      expect(input).toBeInTheDocument();
    });
  });

  it("renders with different states", () => {
    const states = [
      "enabled",
      "focus",
      "typing",
      "filled",
      "disabled",
    ] as const;

    states.forEach((state) => {
      render(<Input state={state} placeholder="Test input" />);
      const input = screen.getByPlaceholderText("Test input");
      expect(input).toBeInTheDocument();
    });
  });

  it("renders with different sizes", () => {
    const sizes = ["sm", "md", "lg"] as const;

    sizes.forEach((size) => {
      render(<Input size={size} placeholder="Test input" />);
      const input = screen.getByPlaceholderText("Test input");
      expect(input).toBeInTheDocument();
    });
  });

  it("renders with error state", () => {
    render(<Input error placeholder="Test input" />);
    const input = screen.getByPlaceholderText("Test input");
    expect(input).toBeInTheDocument();
  });

  it("renders with info icon", () => {
    render(<Input showInfoIcon placeholder="Test input" />);
    const input = screen.getByPlaceholderText("Test input");
    expect(input).toBeInTheDocument();
  });

  it("renders with dropdown arrow", () => {
    render(<Input showDropdownArrow placeholder="Test input" />);
    const input = screen.getByPlaceholderText("Test input");
    expect(input).toBeInTheDocument();
  });

  it("renders without icons", () => {
    render(
      <Input
        showInfoIcon={false}
        showDropdownArrow={false}
        placeholder="Test input"
      />
    );
    const input = screen.getByPlaceholderText("Test input");
    expect(input).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(<Input className="custom-class" placeholder="Test input" />);
    const input = screen.getByPlaceholderText("Test input");
    expect(input).toHaveClass("custom-class");
  });

  it("handles change events", () => {
    const handleChange = vi.fn();
    render(<Input onChange={handleChange} placeholder="Test input" />);
    const input = screen.getByPlaceholderText("Test input");
    fireEvent.change(input, { target: { value: "test" } });
    expect(handleChange).toHaveBeenCalledWith("test");
  });

  it("handles focus events", () => {
    const handleFocus = vi.fn();
    render(<Input onFocus={handleFocus} placeholder="Test input" />);
    const input = screen.getByPlaceholderText("Test input");
    fireEvent.focus(input);
    expect(handleFocus).toHaveBeenCalled();
  });

  it("handles blur events", () => {
    const handleBlur = vi.fn();
    render(<Input onBlur={handleBlur} placeholder="Test input" />);
    const input = screen.getByPlaceholderText("Test input");
    fireEvent.blur(input);
    expect(handleBlur).toHaveBeenCalled();
  });

  it("is disabled when disabled prop is true", () => {
    render(<Input disabled placeholder="Test input" />);
    const input = screen.getByPlaceholderText("Test input");
    expect(input).toBeDisabled();
  });

  it("is disabled when state is disabled", () => {
    render(<Input state="disabled" placeholder="Test input" />);
    const input = screen.getByPlaceholderText("Test input");
    expect(input).toBeDisabled();
  });

  it("is readonly when readonly prop is true", () => {
    render(<Input readonly placeholder="Test input" />);
    const input = screen.getByPlaceholderText("Test input");
    expect(input).toHaveAttribute("readonly");
  });

  it("is required when required prop is true", () => {
    render(<Input required placeholder="Test input" />);
    const input = screen.getByPlaceholderText("Test input");
    expect(input).toHaveAttribute("required");
  });

  it("renders with different input types", () => {
    const types = [
      "text",
      "email",
      "password",
      "number",
      "tel",
      "url",
    ] as const;

    types.forEach((type) => {
      render(<Input type={type} placeholder="Test input" />);
      const input = screen.getByPlaceholderText("Test input");
      expect(input).toHaveAttribute("type", type);
    });
  });

  it("renders with value", () => {
    render(<Input value="test value" placeholder="Test input" />);
    const input = screen.getByPlaceholderText("Test input");
    expect(input).toHaveValue("test value");
  });

  it("renders with name and id", () => {
    render(<Input name="test-name" id="test-id" placeholder="Test input" />);
    const input = screen.getByPlaceholderText("Test input");
    expect(input).toHaveAttribute("name", "test-name");
    expect(input).toHaveAttribute("id", "test-id");
  });
});
