import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "@jest/globals";
import "@testing-library/jest-dom";
import React from "react";
import { Container } from "./Container";

describe("Container Component", () => {
  it("renders with default props", () => {
    render(<Container>Test content</Container>);
    expect(screen.getByText("Test content")).toBeInTheDocument();
  });

  it("renders with custom className", () => {
    render(<Container className="custom-class">Test content</Container>);
    const container = document.querySelector(".root");
    expect(container).toHaveClass("custom-class");
  });

  it("renders with default props", () => {
    render(<Container>Test content</Container>);
    const container = document.querySelector(".root");
    expect(container).toHaveClass("root");
    expect(container).toHaveClass("size-md");
    expect(container).toHaveClass("strategy-block");
  });

  it("renders with fluid prop", () => {
    render(<Container fluid>Test content</Container>);
    const container = document.querySelector(".root");
    expect(container).toHaveClass("fluid");
  });

  it("renders with different sizes", () => {
    const { rerender } = render(<Container size="sm">Test content</Container>);
    expect(document.querySelector(".root")).toHaveClass("size-sm");

    rerender(<Container size="lg">Test content</Container>);
    expect(document.querySelector(".root")).toHaveClass("size-lg");
  });

  it("renders with grid strategy", () => {
    render(<Container strategy="grid">Test content</Container>);
    const container = document.querySelector(".root");
    expect(container).toHaveClass("strategy-grid");
  });

  it("renders children correctly", () => {
    render(
      <Container>
        <h1>Title</h1>
        <p>Paragraph</p>
      </Container>
    );
    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Paragraph")).toBeInTheDocument();
  });
});
