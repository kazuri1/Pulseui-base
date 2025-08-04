import { render, screen, fireEvent } from "@testing-library/react";
import { Badge } from "./Badge";
import { Add, Close } from "../Icon/IconSet";

describe("Badge", () => {
  it("renders with default props", () => {
    render(<Badge>Test Badge</Badge>);
    expect(screen.getByText("Test Badge")).toBeInTheDocument();
  });

  it("renders with dot variant by default", () => {
    render(<Badge>Test Badge</Badge>);
    const badge = screen.getByText("Test Badge").closest("div");
    expect(badge).toHaveClass("variant-dot");
  });

  it("renders dot element when variant is dot", () => {
    render(<Badge variant="dot">Test Badge</Badge>);
    const dot = document.querySelector(".dot");
    expect(dot).toBeInTheDocument();
  });

  it("does not render dot element for non-dot variants", () => {
    render(<Badge variant="filled">Test Badge</Badge>);
    const dot = document.querySelector(".dot");
    expect(dot).not.toBeInTheDocument();
  });

  it("applies correct size classes", () => {
    const { rerender } = render(<Badge size="xs">Test</Badge>);
    expect(screen.getByText("Test").closest("div")).toHaveClass("size-xs");

    rerender(<Badge size="sm">Test</Badge>);
    expect(screen.getByText("Test").closest("div")).toHaveClass("size-sm");

    rerender(<Badge size="md">Test</Badge>);
    expect(screen.getByText("Test").closest("div")).toHaveClass("size-md");

    rerender(<Badge size="lg">Test</Badge>);
    expect(screen.getByText("Test").closest("div")).toHaveClass("size-lg");

    rerender(<Badge size="xl">Test</Badge>);
    expect(screen.getByText("Test").closest("div")).toHaveClass("size-xl");
  });

  it("applies correct variant classes", () => {
    const { rerender } = render(<Badge variant="filled">Test</Badge>);
    expect(screen.getByText("Test").closest("div")).toHaveClass("variant-filled");

    rerender(<Badge variant="subtle">Test</Badge>);
    expect(screen.getByText("Test").closest("div")).toHaveClass("variant-subtle");

    rerender(<Badge variant="light">Test</Badge>);
    expect(screen.getByText("Test").closest("div")).toHaveClass("variant-light");

    rerender(<Badge variant="outline">Test</Badge>);
    expect(screen.getByText("Test").closest("div")).toHaveClass("variant-outline");

    rerender(<Badge variant="white">Test</Badge>);
    expect(screen.getByText("Test").closest("div")).toHaveClass("variant-white");

    rerender(<Badge variant="default">Test</Badge>);
    expect(screen.getByText("Test").closest("div")).toHaveClass("variant-default");
  });

  it("renders left icon when provided", () => {
    render(<Badge leftIcon={Add}>Test Badge</Badge>);
    const icon = document.querySelector(".left");
    expect(icon).toBeInTheDocument();
  });

  it("renders right icon when provided", () => {
    render(<Badge rightIcon={Close}>Test Badge</Badge>);
    const icon = document.querySelector(".right");
    expect(icon).toBeInTheDocument();
  });

  it("renders both left and right icons when provided", () => {
    render(
      <Badge leftIcon={Add} rightIcon={Close}>
        Test Badge
      </Badge>
    );
    const leftIcon = document.querySelector(".left");
    const rightIcon = document.querySelector(".right");
    expect(leftIcon).toBeInTheDocument();
    expect(rightIcon).toBeInTheDocument();
  });

  it("renders as button when onClick is provided", () => {
    const handleClick = jest.fn();
    render(<Badge onClick={handleClick}>Clickable Badge</Badge>);
    const badge = screen.getByText("Clickable Badge").closest("button");
    expect(badge).toBeInTheDocument();
  });

  it("renders as div when no onClick is provided", () => {
    render(<Badge>Non-clickable Badge</Badge>);
    const badge = screen.getByText("Non-clickable Badge").closest("div");
    expect(badge).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const handleClick = jest.fn();
    render(<Badge onClick={handleClick}>Clickable Badge</Badge>);
    fireEvent.click(screen.getByText("Clickable Badge"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("does not call onClick when disabled", () => {
    const handleClick = jest.fn();
    render(
      <Badge onClick={handleClick} disabled>
        Disabled Badge
      </Badge>
    );
    fireEvent.click(screen.getByText("Disabled Badge"));
    expect(handleClick).not.toHaveBeenCalled();
  });

  it("applies disabled class when disabled", () => {
    render(<Badge disabled>Disabled Badge</Badge>);
    expect(screen.getByText("Disabled Badge").closest("div")).toHaveClass("disabled");
  });

  it("applies clickable class when onClick is provided", () => {
    const handleClick = jest.fn();
    render(<Badge onClick={handleClick}>Clickable Badge</Badge>);
    expect(screen.getByText("Clickable Badge").closest("button")).toHaveClass("clickable");
  });

  it("applies state classes", () => {
    const { rerender } = render(<Badge state="hover">Test</Badge>);
    expect(screen.getByText("Test").closest("div")).toHaveClass("state-hover");

    rerender(<Badge state="disabled">Test</Badge>);
    expect(screen.getByText("Test").closest("div")).toHaveClass("state-disabled");
  });

  it("maps icon sizes correctly", () => {
    const { rerender } = render(<Badge size="xs" leftIcon={Add}>Test</Badge>);
    const icon = document.querySelector(".left");
    expect(icon).toBeInTheDocument();

    rerender(<Badge size="sm" leftIcon={Add}>Test</Badge>);
    expect(icon).toBeInTheDocument();

    rerender(<Badge size="md" leftIcon={Add}>Test</Badge>);
    expect(icon).toBeInTheDocument();

    rerender(<Badge size="lg" leftIcon={Add}>Test</Badge>);
    expect(icon).toBeInTheDocument();

    rerender(<Badge size="xl" leftIcon={Add}>Test</Badge>);
    expect(icon).toBeInTheDocument();
  });

  it("handles string icon props", () => {
    render(<Badge leftIcon="none">Test Badge</Badge>);
    const leftIcon = document.querySelector(".left");
    expect(leftIcon).not.toBeInTheDocument();

    render(<Badge rightIcon="none">Test Badge</Badge>);
    const rightIcon = document.querySelector(".right");
    expect(rightIcon).not.toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(<Badge className="custom-class">Test Badge</Badge>);
    expect(screen.getByText("Test Badge").closest("div")).toHaveClass("custom-class");
  });

  it("applies custom style", () => {
    const customStyle = { backgroundColor: "red" };
    render(<Badge style={customStyle}>Test Badge</Badge>);
    const badge = screen.getByText("Test Badge").closest("div");
    expect(badge).toHaveStyle("background-color: red");
  });
}); 