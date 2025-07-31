import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
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
    render(<Input error placeholder="Test" />);
    expect(screen.getByPlaceholderText("Test")).toHaveClass("error");
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

  it("calls onChange handler", () => {
    const handleChange = vi.fn();
    render(<Input onChange={handleChange} placeholder="Test" />);

    const input = screen.getByPlaceholderText("Test");
    fireEvent.change(input, { target: { value: "new value" } });

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({ value: "new value" }),
      })
    );
  });

  it("calls onFocus handler", () => {
    const handleFocus = vi.fn();
    render(<Input onFocus={handleFocus} placeholder="Test" />);

    const input = screen.getByPlaceholderText("Test");
    fireEvent.focus(input);

    expect(handleFocus).toHaveBeenCalledTimes(1);
  });

  it("calls onBlur handler", () => {
    const handleBlur = vi.fn();
    render(<Input onBlur={handleBlur} placeholder="Test" />);

    const input = screen.getByPlaceholderText("Test");
    fireEvent.blur(input);

    expect(handleBlur).toHaveBeenCalledTimes(1);
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
    const ref = vi.fn();
    render(<Input ref={ref} placeholder="Test" />);
    expect(ref).toHaveBeenCalledWith(expect.any(HTMLInputElement));
  });

  it("renders with info icon when showInfoIcon is true", () => {
    const MockIcon = () => <div data-testid="info-icon">Info</div>;
    render(
      <Input
        showInfoIcon={true}
        infoIconComponent={MockIcon as any}
        placeholder="Test"
      />
    );
    expect(screen.getByTestId("info-icon")).toBeInTheDocument();
  });

  it("renders with dropdown arrow when showDropdownArrow is true", () => {
    const MockIcon = () => <div data-testid="dropdown-icon">Dropdown</div>;
    render(
      <Input
        showDropdownArrow={true}
        dropdownArrowComponent={MockIcon as any}
        placeholder="Test"
      />
    );
    expect(screen.getByTestId("dropdown-icon")).toBeInTheDocument();
  });

  it("does not render icons when showInfoIcon and showDropdownArrow are false", () => {
    const MockIcon = () => <div data-testid="icon">Icon</div>;
    render(
      <Input
        showInfoIcon={false}
        showDropdownArrow={false}
        infoIconComponent={MockIcon as any}
        dropdownArrowComponent={MockIcon as any}
        placeholder="Test"
      />
    );
    expect(screen.queryByTestId("icon")).not.toBeInTheDocument();
  });
});
