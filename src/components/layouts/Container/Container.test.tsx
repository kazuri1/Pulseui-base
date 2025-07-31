import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Container } from "./Container";

describe("Container Component", () => {
  it("renders with default props", () => {
    render(<Container>Test content</Container>);
    expect(screen.getByText("Test content")).toBeInTheDocument();
  });

  it("renders with custom className", () => {
    render(<Container className="custom-class">Test content</Container>);
    const container = screen.getByText("Test content").parentElement;
    expect(container).toHaveClass("custom-class");
  });

  it("renders with default props", () => {
    render(<Container>Test content</Container>);
    const container = screen.getByText("Test content").parentElement;
    expect(container).toHaveClass("root");
    expect(container).toHaveClass("size-md");
    expect(container).toHaveClass("strategy-block");
  });

  it("renders with fluid prop", () => {
    render(<Container fluid>Test content</Container>);
    const container = screen.getByText("Test content").parentElement;
    expect(container).toHaveClass("fluid");
  });

  it("renders with different sizes", () => {
    const { rerender } = render(<Container size="sm">Test content</Container>);
    let container = screen.getByText("Test content").parentElement;
    expect(container).toHaveClass("size-sm");

    rerender(<Container size="lg">Test content</Container>);
    container = screen.getByText("Test content").parentElement;
    expect(container).toHaveClass("size-lg");
  });

  it("renders with grid strategy", () => {
    render(<Container strategy="grid">Test content</Container>);
    const container = screen.getByText("Test content").parentElement;
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
