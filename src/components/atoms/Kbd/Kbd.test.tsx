import React from "react";
import { render, screen } from "@testing-library/react";
import { Kbd } from "./Kbd";

describe("Kbd", () => {
  it("renders without crashing", () => {
    render(<Kbd>Shift</Kbd>);

    expect(screen.getByText("Shift")).toBeInTheDocument();
  });

  it("renders with default size (md)", () => {
    render(<Kbd>Ctrl</Kbd>);

    const kbdElement = screen.getByText("Ctrl").closest("kbd");
    expect(kbdElement).toHaveClass("md");
  });

  it("renders with small size", () => {
    render(<Kbd size="sm">Alt</Kbd>);

    const kbdElement = screen.getByText("Alt").closest("kbd");
    expect(kbdElement).toHaveClass("sm");
  });

  it("renders with large size", () => {
    render(<Kbd size="lg">Enter</Kbd>);

    const kbdElement = screen.getByText("Enter").closest("kbd");
    expect(kbdElement).toHaveClass("lg");
  });

  it("renders with extra large size", () => {
    render(<Kbd size="xl">Space</Kbd>);

    const kbdElement = screen.getByText("Space").closest("kbd");
    expect(kbdElement).toHaveClass("xl");
  });

  it("displays the correct text content", () => {
    render(<Kbd>Tab</Kbd>);

    expect(screen.getByText("Tab")).toBeInTheDocument();
  });

  it("applies custom className when provided", () => {
    render(<Kbd className="custom-class">Escape</Kbd>);

    const kbdElement = screen.getByText("Escape").closest("kbd");
    expect(kbdElement).toHaveClass("custom-class");
  });

  it("renders with different key texts", () => {
    const { rerender } = render(<Kbd>F1</Kbd>);
    expect(screen.getByText("F1")).toBeInTheDocument();

    rerender(<Kbd>Ctrl</Kbd>);
    expect(screen.getByText("Ctrl")).toBeInTheDocument();

    rerender(<Kbd>Shift</Kbd>);
    expect(screen.getByText("Shift")).toBeInTheDocument();
  });

  it("renders with special characters", () => {
    render(<Kbd>+</Kbd>);
    expect(screen.getByText("+")).toBeInTheDocument();
  });

  it("renders with arrow symbols", () => {
    render(<Kbd>↑</Kbd>);
    expect(screen.getByText("↑")).toBeInTheDocument();
  });

  it("renders with numbers", () => {
    render(<Kbd>1</Kbd>);
    expect(screen.getByText("1")).toBeInTheDocument();
  });

  it("renders with long text", () => {
    render(<Kbd>Function</Kbd>);
    expect(screen.getByText("Function")).toBeInTheDocument();
  });
});
