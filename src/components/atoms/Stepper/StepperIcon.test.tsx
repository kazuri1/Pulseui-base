import React from "react";
import { render, screen } from "@testing-library/react";
import { StepperIcon } from "./StepperIcon";

describe("StepperIcon", () => {
  it("renders with default props", () => {
    render(<StepperIcon>1</StepperIcon>);
    
    const icon = screen.getByText("1");
    expect(icon).toBeInTheDocument();
    expect(icon).toHaveClass("stepperIcon", "size-md", "status-default");
  });

  it("renders with custom status", () => {
    const { rerender } = render(<StepperIcon status="default">1</StepperIcon>);
    expect(screen.getByText("1")).toHaveClass("status-default");

    rerender(<StepperIcon status="active">2</StepperIcon>);
    expect(screen.getByText("2")).toHaveClass("status-active");

    rerender(<StepperIcon status="complete">3</StepperIcon>);
    expect(screen.getByText("3")).toHaveClass("status-complete");
  });

  it("renders with different sizes", () => {
    const { rerender } = render(<StepperIcon size="xs">1</StepperIcon>);
    expect(screen.getByText("1")).toHaveClass("size-xs");

    rerender(<StepperIcon size="sm">2</StepperIcon>);
    expect(screen.getByText("2")).toHaveClass("size-sm");

    rerender(<StepperIcon size="md">3</StepperIcon>);
    expect(screen.getByText("3")).toHaveClass("size-md");

    rerender(<StepperIcon size="lg">4</StepperIcon>);
    expect(screen.getByText("4")).toHaveClass("size-lg");

    rerender(<StepperIcon size="xl">5</StepperIcon>);
    expect(screen.getByText("5")).toHaveClass("size-xl");
  });

  it("applies custom radius", () => {
    render(<StepperIcon radius="lg">1</StepperIcon>);
    
    const icon = screen.getByText("1");
    expect(icon).toHaveStyle({ borderRadius: "var(--radius-lg)" });
  });

  it("applies numeric radius", () => {
    render(<StepperIcon radius={8}>1</StepperIcon>);
    
    const icon = screen.getByText("1");
    expect(icon).toHaveStyle({ borderRadius: "8px" });
  });

  it("applies custom className", () => {
    render(<StepperIcon className="custom-class">1</StepperIcon>);
    
    expect(screen.getByText("1")).toHaveClass("custom-class");
  });

  it("applies custom id", () => {
    render(<StepperIcon id="custom-id">1</StepperIcon>);
    
    expect(screen.getByText("1")).toHaveAttribute("id", "custom-id");
  });

  it("applies custom style", () => {
    render(
      <StepperIcon style={{ backgroundColor: "red" }}>1</StepperIcon>
    );
    
    const icon = screen.getByText("1");
    expect(icon).toHaveStyle({ backgroundColor: "red" });
  });

  it("sets aria-current for active status", () => {
    render(<StepperIcon status="active">1</StepperIcon>);
    
    expect(screen.getByText("1")).toHaveAttribute("aria-current", "step");
  });

  it("does not set aria-current for non-active status", () => {
    render(<StepperIcon status="default">1</StepperIcon>);
    
    expect(screen.getByText("1")).not.toHaveAttribute("aria-current");
  });

  it("renders children content", () => {
    render(<StepperIcon>Custom Content</StepperIcon>);
    
    expect(screen.getByText("Custom Content")).toBeInTheDocument();
  });

  it("renders with React elements as children", () => {
    render(
      <StepperIcon>
        <span data-testid="custom-element">Custom Element</span>
      </StepperIcon>
    );
    
    expect(screen.getByTestId("custom-element")).toBeInTheDocument();
  });

  it("has correct tabIndex", () => {
    render(<StepperIcon>1</StepperIcon>);
    
    expect(screen.getByText("1")).toHaveAttribute("tabIndex", "-1");
  });

  it("combines radius with custom style", () => {
    render(
      <StepperIcon radius="lg" style={{ color: "blue" }}>
        1
      </StepperIcon>
    );
    
    const icon = screen.getByText("1");
    expect(icon).toHaveStyle({
      borderRadius: "var(--radius-lg)",
      color: "blue",
    });
  });

  it("handles all status variants", () => {
    const { rerender } = render(<StepperIcon status="default">1</StepperIcon>);
    expect(screen.getByText("1")).toHaveClass("status-default");

    rerender(<StepperIcon status="active">2</StepperIcon>);
    expect(screen.getByText("2")).toHaveClass("status-active");

    rerender(<StepperIcon status="complete">3</StepperIcon>);
    expect(screen.getByText("3")).toHaveClass("status-complete");
  });

  it("handles all size variants", () => {
    const sizes = ["xs", "sm", "md", "lg", "xl"];
    
    sizes.forEach((size) => {
      const { rerender } = render(<StepperIcon size={size as any}>1</StepperIcon>);
      expect(screen.getByText("1")).toHaveClass(`size-${size}`);
      rerender(<></>);
    });
  });

  it("handles all radius variants", () => {
    const radii = ["xs", "sm", "md", "lg", "xl"];
    
    radii.forEach((radius) => {
      const { rerender } = render(<StepperIcon radius={radius as any}>1</StepperIcon>);
      expect(screen.getByText("1")).toHaveStyle({
        borderRadius: `var(--radius-${radius})`,
      });
      rerender(<></>);
    });
  });
}); 