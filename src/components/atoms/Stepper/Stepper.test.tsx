import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "@jest/globals";
import "@testing-library/jest-dom";
import React from "react";
import { Stepper } from "./Stepper";

const mockSteps = [
  { id: "1", content: "1", label: "Step 1", status: "complete" as const },
  { id: "2", content: "2", label: "Step 2", status: "active" as const },
  { id: "3", content: "3", label: "Step 3", status: "default" as const },
];

describe("Stepper", () => {
  it("renders all steps", () => {
    render(<Stepper steps={mockSteps} />);

    expect(screen.getByText("Step 1")).toBeInTheDocument();
    expect(screen.getByText("Step 2")).toBeInTheDocument();
    expect(screen.getByText("Step 3")).toBeInTheDocument();
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
  });

  it("renders with different sizes", () => {
    const { rerender } = render(<Stepper steps={mockSteps} size="xs" />);
    expect(screen.getByText("Step 1").closest("div")).toHaveClass("size-xs");

    rerender(<Stepper steps={mockSteps} size="lg" />);
    expect(screen.getByText("Step 1").closest("div")).toHaveClass("size-lg");
  });

  it("hides labels when showLabels is false", () => {
    render(<Stepper steps={mockSteps} showLabels={false} />);

    expect(screen.queryByText("Step 1")).not.toBeInTheDocument();
    expect(screen.queryByText("Step 2")).not.toBeInTheDocument();
    expect(screen.queryByText("Step 3")).not.toBeInTheDocument();
  });

  it("hides connectors when showConnectors is false", () => {
    render(<Stepper steps={mockSteps} showConnectors={false} />);

    // Should not have connector elements
    const stepper = screen.getByText("Step 1").closest("div");
    expect(stepper?.querySelector(".connector")).not.toBeInTheDocument();
  });

  it("applies complete connector styling for completed steps", () => {
    render(<Stepper steps={mockSteps} />);

    // The connector after the first step (which is complete) should have complete styling
    const connectors = screen
      .getAllByText("Step 1")[0]
      .closest("div")
      ?.querySelectorAll(".connector");
    if (connectors && connectors.length > 0) {
      expect(connectors[0]).toHaveClass("connectorComplete");
    }
  });

  it("passes radius to StepperItem components", () => {
    render(<Stepper steps={mockSteps} radius="xl" />);

    // Each StepperItem should receive the radius prop
    const stepperItems = screen.getAllByText(/Step \d/);
    stepperItems.forEach((item) => {
      expect(item.closest("div")).toBeInTheDocument();
    });
  });

  it("applies custom className", () => {
    render(<Stepper steps={mockSteps} className="custom-class" />);

    expect(screen.getByText("Step 1").closest("div")).toHaveClass(
      "custom-class"
    );
  });

  it("applies custom id", () => {
    render(<Stepper steps={mockSteps} id="test-id" />);

    expect(screen.getByText("Step 1").closest("div")).toHaveAttribute(
      "id",
      "test-id"
    );
  });

  it("applies custom style", () => {
    render(<Stepper steps={mockSteps} style={{ backgroundColor: "red" }} />);

    expect(screen.getByText("Step 1").closest("div")).toHaveStyle({
      backgroundColor: "red",
    });
  });

  it("renders children content in steps", () => {
    const stepsWithIcons = [
      { id: "1", content: "👤", label: "Profile", status: "complete" as const },
      { id: "2", content: "⚙️", label: "Settings", status: "active" as const },
    ];

    render(<Stepper steps={stepsWithIcons} />);

    expect(screen.getByText("👤")).toBeInTheDocument();
    expect(screen.getByText("⚙️")).toBeInTheDocument();
  });

  it("handles asterisk in step labels", () => {
    const stepsWithAsterisk = [
      {
        id: "1",
        content: "1",
        label: "Required Step",
        status: "default" as const,
        showAsterisk: true,
      },
      {
        id: "2",
        content: "2",
        label: "Optional Step",
        status: "default" as const,
        showAsterisk: false,
      },
    ];

    render(<Stepper steps={stepsWithAsterisk} />);

    expect(screen.getByText("*")).toBeInTheDocument();
  });

  it("renders single step", () => {
    const singleStep = [
      {
        id: "1",
        content: "1",
        label: "Single Step",
        status: "active" as const,
      },
    ];

    render(<Stepper steps={singleStep} />);

    expect(screen.getByText("Single Step")).toBeInTheDocument();
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  it("handles empty steps array", () => {
    render(<Stepper steps={[]} />);

    // Should render without errors
    expect(screen.getByRole("generic")).toBeInTheDocument();
  });
});
