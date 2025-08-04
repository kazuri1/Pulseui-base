import React from "react";
import { render, screen } from "@testing-library/react";
import { StepperItem } from "./StepperItem";

describe("StepperItem", () => {
  it("renders with default props", () => {
    render(<StepperItem>1</StepperItem>);
    
    const item = screen.getByText("1").closest("div");
    expect(item).toBeInTheDocument();
    expect(item).toHaveClass("stepperItem", "size-md");
    expect(screen.getByText("Label")).toBeInTheDocument();
  });

  it("renders with custom label", () => {
    render(<StepperItem label="Custom Label">1</StepperItem>);
    
    expect(screen.getByText("Custom Label")).toBeInTheDocument();
  });

  it("shows asterisk when showAsterisk is true", () => {
    render(<StepperItem showAsterisk>1</StepperItem>);
    
    expect(screen.getByText("*")).toBeInTheDocument();
  });

  it("does not show asterisk when showAsterisk is false", () => {
    render(<StepperItem showAsterisk={false}>1</StepperItem>);
    
    expect(screen.queryByText("*")).not.toBeInTheDocument();
  });

  it("does not show label when showLabel is false", () => {
    render(<StepperItem showLabel={false}>1</StepperItem>);
    
    expect(screen.queryByText("Label")).not.toBeInTheDocument();
  });

  it("renders with different sizes", () => {
    const { rerender } = render(<StepperItem size="xs">1</StepperItem>);
    expect(screen.getByText("1").closest("div")).toHaveClass("size-xs");

    rerender(<StepperItem size="sm">2</StepperItem>);
    expect(screen.getByText("2").closest("div")).toHaveClass("size-sm");

    rerender(<StepperItem size="md">3</StepperItem>);
    expect(screen.getByText("3").closest("div")).toHaveClass("size-md");

    rerender(<StepperItem size="lg">4</StepperItem>);
    expect(screen.getByText("4").closest("div")).toHaveClass("size-lg");

    rerender(<StepperItem size="xl">5</StepperItem>);
    expect(screen.getByText("5").closest("div")).toHaveClass("size-xl");
  });

  it("passes status to StepperIcon", () => {
    const { rerender } = render(<StepperItem status="default">1</StepperItem>);
    expect(screen.getByText("1")).toHaveClass("status-default");

    rerender(<StepperItem status="active">2</StepperItem>);
    expect(screen.getByText("2")).toHaveClass("status-active");

    rerender(<StepperItem status="complete">3</StepperItem>);
    expect(screen.getByText("3")).toHaveClass("status-complete");
  });

  it("passes radius to StepperIcon", () => {
    render(<StepperItem radius="lg">1</StepperItem>);
    
    const icon = screen.getByText("1");
    expect(icon).toHaveStyle({ borderRadius: "var(--radius-lg)" });
  });

  it("passes numeric radius to StepperIcon", () => {
    render(<StepperItem radius={8}>1</StepperItem>);
    
    const icon = screen.getByText("1");
    expect(icon).toHaveStyle({ borderRadius: "8px" });
  });

  it("applies custom className", () => {
    render(<StepperItem className="custom-class">1</StepperItem>);
    
    expect(screen.getByText("1").closest("div")).toHaveClass("custom-class");
  });

  it("applies custom id", () => {
    render(<StepperItem id="custom-id">1</StepperItem>);
    
    expect(screen.getByText("1").closest("div")).toHaveAttribute("id", "custom-id");
  });

  it("applies custom style", () => {
    render(
      <StepperItem style={{ backgroundColor: "red" }}>1</StepperItem>
    );
    
    const item = screen.getByText("1").closest("div");
    expect(item).toHaveStyle({ backgroundColor: "red" });
  });

  it("renders children content", () => {
    render(<StepperItem>Custom Content</StepperItem>);
    
    expect(screen.getByText("Custom Content")).toBeInTheDocument();
  });

  it("renders with React elements as children", () => {
    render(
      <StepperItem>
        <span data-testid="custom-element">Custom Element</span>
      </StepperItem>
    );
    
    expect(screen.getByTestId("custom-element")).toBeInTheDocument();
  });

  it("combines label and asterisk correctly", () => {
    render(<StepperItem label="Required Field" showAsterisk>1</StepperItem>);
    
    expect(screen.getByText("Required Field")).toBeInTheDocument();
    expect(screen.getByText("*")).toBeInTheDocument();
  });

  it("handles all size variants", () => {
    const sizes = ["xs", "sm", "md", "lg", "xl"];
    
    sizes.forEach((size) => {
      const { rerender } = render(<StepperItem size={size as any}>1</StepperItem>);
      expect(screen.getByText("1").closest("div")).toHaveClass(`size-${size}`);
      rerender(<></>);
    });
  });

  it("handles all status variants", () => {
    const { rerender } = render(<StepperItem status="default">1</StepperItem>);
    expect(screen.getByText("1")).toHaveClass("status-default");

    rerender(<StepperItem status="active">2</StepperItem>);
    expect(screen.getByText("2")).toHaveClass("status-active");

    rerender(<StepperItem status="complete">3</StepperItem>);
    expect(screen.getByText("3")).toHaveClass("status-complete");
  });

  it("handles all radius variants", () => {
    const radii = ["xs", "sm", "md", "lg", "xl"];
    
    radii.forEach((radius) => {
      const { rerender } = render(<StepperItem radius={radius as any}>1</StepperItem>);
      expect(screen.getByText("1")).toHaveStyle({
        borderRadius: `var(--radius-${radius})`,
      });
      rerender(<></>);
    });
  });

  it("renders without label when showLabel is false", () => {
    render(<StepperItem showLabel={false}>1</StepperItem>);
    
    expect(screen.queryByText("Label")).not.toBeInTheDocument();
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  it("renders with asterisk when both showLabel and showAsterisk are true", () => {
    render(<StepperItem showLabel showAsterisk>1</StepperItem>);
    
    expect(screen.getByText("Label")).toBeInTheDocument();
    expect(screen.getByText("*")).toBeInTheDocument();
  });

  it("does not render asterisk when showLabel is false even if showAsterisk is true", () => {
    render(<StepperItem showLabel={false} showAsterisk>1</StepperItem>);
    
    expect(screen.queryByText("Label")).not.toBeInTheDocument();
    expect(screen.queryByText("*")).not.toBeInTheDocument();
  });
}); 