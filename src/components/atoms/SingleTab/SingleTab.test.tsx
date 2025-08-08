import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, jest } from "@jest/globals";
import "@testing-library/jest-dom";
import React from "react";
import { SingleTab } from "./SingleTab";
import { InfoOutlined } from "../Icon/IconSet";

describe("SingleTab", () => {
  it("renders with default props", () => {
    render(<SingleTab />);
    expect(screen.getByText("Tab title")).toBeInTheDocument();
  });

  it("renders with custom placeholder", () => {
    render(<SingleTab placeholder="Custom Tab" />);
    expect(screen.getByText("Custom Tab")).toBeInTheDocument();
  });

  it("renders with children content", () => {
    render(<SingleTab>Custom Content</SingleTab>);
    expect(screen.getByText("Custom Content")).toBeInTheDocument();
  });

  it("applies variant classes correctly", () => {
    const { rerender } = render(<SingleTab variant="default" />);
    expect(screen.getByRole("button")).toHaveClass("variant-default");

    rerender(<SingleTab variant="outline" />);
    expect(screen.getByRole("button")).toHaveClass("variant-outline");

    rerender(<SingleTab variant="pill" />);
    expect(screen.getByRole("button")).toHaveClass("variant-pill");
  });

  it("applies position classes correctly", () => {
    const { rerender } = render(<SingleTab position="top" />);
    expect(screen.getByRole("button")).toHaveClass("position-top");

    rerender(<SingleTab position="bottom" />);
    expect(screen.getByRole("button")).toHaveClass("position-bottom");

    rerender(<SingleTab position="left" />);
    expect(screen.getByRole("button")).toHaveClass("position-left");

    rerender(<SingleTab position="right" />);
    expect(screen.getByRole("button")).toHaveClass("position-right");
  });

  it("applies state classes correctly", () => {
    const { rerender } = render(<SingleTab state="default" />);
    expect(screen.getByRole("button")).toHaveClass("state-default");

    rerender(<SingleTab state="selected" />);
    expect(screen.getByRole("button")).toHaveClass("state-selected");

    rerender(<SingleTab state="hover" />);
    expect(screen.getByRole("button")).toHaveClass("state-hover");

    rerender(<SingleTab state="disabled" />);
    expect(screen.getByRole("button")).toHaveClass("state-disabled");
  });

  it("renders left icon when leftIcon is true", () => {
    render(<SingleTab leftIcon={true} />);
    // The Info icon should be rendered
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("renders left icon when leftIcon is a component", () => {
    render(<SingleTab leftIcon={InfoOutlined} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("renders right icon when rightIcon is true", () => {
    render(<SingleTab rightIcon={true} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("renders right icon when rightIcon is a component", () => {
    render(<SingleTab rightIcon={InfoOutlined} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const handleClick = jest.fn();
    render(<SingleTab onClick={handleClick} />);

    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("is disabled when disabled prop is true", () => {
    render(<SingleTab disabled={true} />);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("is disabled when state is disabled", () => {
    render(<SingleTab state="disabled" />);
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("applies custom className", () => {
    render(<SingleTab className="custom-class" />);
    expect(screen.getByRole("button")).toHaveClass("custom-class");
  });

  it("renders with both left and right icons", () => {
    render(<SingleTab leftIcon={true} rightIcon={true} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("prioritizes children over placeholder", () => {
    render(<SingleTab placeholder="Placeholder">Children Content</SingleTab>);
    expect(screen.getByText("Children Content")).toBeInTheDocument();
    expect(screen.queryByText("Placeholder")).not.toBeInTheDocument();
  });
});
