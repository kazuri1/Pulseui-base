import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom";
import { Button } from "./Button";

describe("Button", () => {
  it("renders with default props", () => {
    render(<Button>Click me</Button>);
    expect(
      screen.getByRole("button", { name: "Click me" })
    ).toBeInTheDocument();
  });

  it("renders with different variants", () => {
    const variants = [
      "filled",
      "subtle",
      "light",
      "outline",
      "white",
      "default",
    ] as const;

    variants.forEach((variant) => {
      render(<Button variant={variant}>Button</Button>);
      const button = screen.getByRole("button", { name: "Button" });
      expect(button).toBeInTheDocument();
    });
  });

  it("renders with different sizes", () => {
    const sizes = ["xs", "sm", "md", "lg", "xl"] as const;

    sizes.forEach((size) => {
      render(<Button size={size}>Button</Button>);
      const button = screen.getByRole("button", { name: "Button" });
      expect(button).toBeInTheDocument();
    });
  });

  it("renders with different states", () => {
    const states = ["default", "hover", "disabled"] as const;

    states.forEach((state) => {
      render(<Button state={state}>Button</Button>);
      const button = screen.getByRole("button", { name: "Button" });
      expect(button).toBeInTheDocument();
    });
  });

  it("renders with left icon", () => {
    render(<Button leftIcon>Button</Button>);
    const button = screen.getByRole("button", { name: "Button" });
    expect(button).toBeInTheDocument();
  });

  it("renders with right icon", () => {
    render(<Button rightIcon>Button</Button>);
    const button = screen.getByRole("button", { name: "Button" });
    expect(button).toBeInTheDocument();
  });

  it("renders with both icons", () => {
    render(
      <Button leftIcon rightIcon>
        Button
      </Button>
    );
    const button = screen.getByRole("button", { name: "Button" });
    expect(button).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(<Button className="custom-class">Button</Button>);
    const button = screen.getByRole("button", { name: "Button" });
    expect(button).toHaveClass("custom-class");
  });

  it("handles click events", () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Button</Button>);
    const button = screen.getByRole("button", { name: "Button" });
    button.click();
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("is disabled when disabled prop is true", () => {
    render(<Button disabled>Button</Button>);
    const button = screen.getByRole("button", { name: "Button" });
    expect(button).toBeDisabled();
  });

  it("is disabled when state is disabled", () => {
    render(<Button state="disabled">Button</Button>);
    const button = screen.getByRole("button", { name: "Button" });
    expect(button).toBeDisabled();
  });

  it("renders with compact mode", () => {
    render(<Button compact>Button</Button>);
    const button = screen.getByRole("button", { name: "Button" });
    expect(button).toBeInTheDocument();
  });

  it("renders with different justification", () => {
    render(
      <Button justify="space-between" leftIcon rightIcon>
        Button
      </Button>
    );
    const button = screen.getByRole("button", { name: "Button" });
    expect(button).toBeInTheDocument();
  });
});
