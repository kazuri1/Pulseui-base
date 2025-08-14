import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { VariantSelector } from "./VariantSelector";
import { Button } from "../Button/Button";

// Mock component for testing
const MockComponent = ({ variant, ...props }: any) => (
  <div data-testid="mock-component" data-variant={variant} {...props}>
    Mock Component
  </div>
);

describe("VariantSelector", () => {
  const defaultProps = {
    variants: ["filled", "outline", "subtle"],
    children: <MockComponent />,
  };

  it("renders with default props", () => {
    render(<VariantSelector {...defaultProps} />);

    expect(screen.getByText("Component Variant Selector")).toBeInTheDocument();
    expect(screen.getByText("Select Variant:")).toBeInTheDocument();
    expect(screen.getByText("Current variant:")).toBeInTheDocument();
    expect(screen.getByText("filled")).toBeInTheDocument();
  });

  it("renders with custom title", () => {
    render(<VariantSelector {...defaultProps} title="Custom Title" />);

    expect(screen.getByText("Custom Title")).toBeInTheDocument();
  });

  it("renders with custom label", () => {
    render(<VariantSelector {...defaultProps} label="Custom Label" />);

    expect(screen.getByText("Custom Label")).toBeInTheDocument();
  });

  it("uses defaultVariant when provided", () => {
    render(<VariantSelector {...defaultProps} defaultVariant="outline" />);

    expect(screen.getByText("Current variant:")).toBeInTheDocument();
    expect(screen.getByText("outline")).toBeInTheDocument();
  });

  it("clones child component with selected variant", () => {
    render(<VariantSelector {...defaultProps} />);

    const mockComponent = screen.getByTestId("mock-component");
    expect(mockComponent).toHaveAttribute("data-variant", "filled");
  });

  it("changes variant when select value changes", () => {
    render(<VariantSelector {...defaultProps} />);

    const select = screen.getByRole("combobox");
    fireEvent.change(select, { target: { value: "outline" } });

    const mockComponent = screen.getByTestId("mock-component");
    expect(mockComponent).toHaveAttribute("data-variant", "outline");
    expect(screen.getByText("outline")).toBeInTheDocument();
  });

  it("calls onVariantChange when variant changes", () => {
    const mockOnVariantChange = jest.fn();
    render(
      <VariantSelector
        {...defaultProps}
        onVariantChange={mockOnVariantChange}
      />
    );

    const select = screen.getByRole("combobox");
    fireEvent.change(select, { target: { value: "subtle" } });

    expect(mockOnVariantChange).toHaveBeenCalledWith("subtle");
  });

  it("hides variant info when showVariantInfo is false", () => {
    render(<VariantSelector {...defaultProps} showVariantInfo={false} />);

    expect(screen.queryByText("Current variant:")).not.toBeInTheDocument();
  });

  it("renders all variant options in select", () => {
    render(<VariantSelector {...defaultProps} />);

    const select = screen.getByRole("combobox");
    expect(select).toHaveValue("filled");

    const options = screen.getAllByRole("option");
    expect(options).toHaveLength(3);
    expect(options[0]).toHaveValue("filled");
    expect(options[1]).toHaveValue("outline");
    expect(options[2]).toHaveValue("subtle");
  });

  it("capitalizes variant names in select options", () => {
    render(<VariantSelector {...defaultProps} />);

    const options = screen.getAllByRole("option");
    expect(options[0]).toHaveTextContent("Filled");
    expect(options[1]).toHaveTextContent("Outline");
    expect(options[2]).toHaveTextContent("Subtle");
  });

  it("works with Button component", () => {
    render(
      <VariantSelector
        variants={["filled", "outline"]}
        children={<Button>Test Button</Button>}
      />
    );

    expect(
      screen.getByRole("button", { name: "Test Button" })
    ).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(<VariantSelector {...defaultProps} className="custom-class" />);

    const container = screen
      .getByText("Component Variant Selector")
      .closest("div");
    expect(container).toHaveClass("custom-class");
  });
});
