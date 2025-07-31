import { render, screen, fireEvent } from "@testing-library/react";
import { Pill } from "./Pill";

describe("Pill", () => {
  it("renders with default props", () => {
    render(<Pill>Test Pill</Pill>);
    expect(screen.getByText("Test Pill")).toBeInTheDocument();
  });

  it("renders with different sizes", () => {
    const { rerender } = render(<Pill size="xs">XS Pill</Pill>);
    expect(screen.getByText("XS Pill")).toBeInTheDocument();

    rerender(<Pill size="xl">XL Pill</Pill>);
    expect(screen.getByText("XL Pill")).toBeInTheDocument();
  });

  it("renders close button when closable is true", () => {
    render(<Pill closable>Closable Pill</Pill>);
    expect(
      screen.getByRole("button", { name: "Remove pill" })
    ).toBeInTheDocument();
  });

  it("does not render close button when closable is false", () => {
    render(<Pill>Non-closable Pill</Pill>);
    expect(
      screen.queryByRole("button", { name: "Remove pill" })
    ).not.toBeInTheDocument();
  });

  it("calls onClose when close button is clicked", () => {
    const handleClose = jest.fn();
    render(
      <Pill closable onClose={handleClose}>
        Test Pill
      </Pill>
    );

    const closeButton = screen.getByRole("button", { name: "Remove pill" });
    fireEvent.click(closeButton);

    expect(handleClose).toHaveBeenCalledTimes(1);
  });

  it("does not call onClose when disabled", () => {
    const handleClose = jest.fn();
    render(
      <Pill closable disabled onClose={handleClose}>
        Disabled Pill
      </Pill>
    );

    const closeButton = screen.getByRole("button", { name: "Remove pill" });
    fireEvent.click(closeButton);

    expect(handleClose).not.toHaveBeenCalled();
  });

  it("applies disabled styles when disabled", () => {
    render(<Pill disabled>Disabled Pill</Pill>);
    const pill = screen.getByText("Disabled Pill").closest("div");
    expect(pill).toHaveClass("disabled");
  });

  it("applies correct size class", () => {
    const { rerender } = render(<Pill size="lg">Large Pill</Pill>);
    const pill = screen.getByText("Large Pill").closest("div");
    expect(pill).toHaveClass("size-lg");

    rerender(<Pill size="sm">Small Pill</Pill>);
    const smallPill = screen.getByText("Small Pill").closest("div");
    expect(smallPill).toHaveClass("size-sm");
  });

  it("applies closable class when closable", () => {
    render(<Pill closable>Closable Pill</Pill>);
    const pill = screen.getByText("Closable Pill").closest("div");
    expect(pill).toHaveClass("closable");
  });

  it("renders with custom className", () => {
    render(<Pill className="custom-class">Custom Pill</Pill>);
    const pill = screen.getByText("Custom Pill").closest("div");
    expect(pill).toHaveClass("custom-class");
  });
});
