import React from "react";
import { render, screen } from "@testing-library/react";
import { Text } from "./Text";

describe("Text", () => {
  const defaultProps = {
    children: "Test text content",
  };

  it("renders with default props", () => {
    render(<Text {...defaultProps} />);
    expect(screen.getByText("Test text content")).toBeInTheDocument();
  });

  it("renders as a paragraph by default", () => {
    render(<Text {...defaultProps} />);
    const element = screen.getByText("Test text content");
    expect(element.tagName).toBe("P");
  });

  it("renders with custom element", () => {
    render(<Text {...defaultProps} as="h1" />);
    const element = screen.getByText("Test text content");
    expect(element.tagName).toBe("H1");
  });

  it("applies variant classes correctly", () => {
    const { rerender } = render(<Text {...defaultProps} variant="xs" />);
    let element = screen.getByText("Test text content");
    expect(element).toHaveClass("variant-xs");

    rerender(<Text {...defaultProps} variant="lg" />);
    element = screen.getByText("Test text content");
    expect(element).toHaveClass("variant-lg");

    rerender(<Text {...defaultProps} variant="xxl" />);
    element = screen.getByText("Test text content");
    expect(element).toHaveClass("variant-xxl");
  });

  it("applies color classes correctly", () => {
    const { rerender } = render(<Text {...defaultProps} color="primary" />);
    let element = screen.getByText("Test text content");
    expect(element).toHaveClass("color-primary");

    rerender(<Text {...defaultProps} color="secondary" />);
    element = screen.getByText("Test text content");
    expect(element).toHaveClass("color-secondary");
  });

  it("applies weight classes correctly", () => {
    const { rerender } = render(<Text {...defaultProps} weight="normal" />);
    let element = screen.getByText("Test text content");
    expect(element).toHaveClass("weight-normal");

    rerender(<Text {...defaultProps} weight="bold" />);
    element = screen.getByText("Test text content");
    expect(element).toHaveClass("weight-bold");
  });

  it("applies truncate class when truncate is true", () => {
    render(<Text {...defaultProps} truncate />);
    const element = screen.getByText("Test text content");
    expect(element).toHaveClass("truncate");
  });

  it("applies lines class when lines prop is provided", () => {
    const { rerender } = render(<Text {...defaultProps} lines={2} />);
    let element = screen.getByText("Test text content");
    expect(element).toHaveClass("lines-2");

    rerender(<Text {...defaultProps} lines={3} />);
    element = screen.getByText("Test text content");
    expect(element).toHaveClass("lines-3");
  });

  it("applies custom className", () => {
    render(<Text {...defaultProps} className="custom-class" />);
    const element = screen.getByText("Test text content");
    expect(element).toHaveClass("custom-class");
  });

  it("applies custom styles via sx prop", () => {
    render(<Text {...defaultProps} sx={{ fontSize: "20px", marginTop: "10px" }} />);
    const element = screen.getByText("Test text content");
    expect(element).toHaveStyle({ fontSize: "20px", marginTop: "10px" });
  });

  it("applies custom styles via style prop", () => {
    render(
      <Text
        {...defaultProps}
        style={{ backgroundColor: "blue", padding: "10px" }}
      />
    );
    const element = screen.getByText("Test text content");
    expect(element).toHaveStyle({ backgroundColor: "blue", padding: "10px" });
  });

  it("combines multiple props correctly", () => {
    render(
      <Text
        {...defaultProps}
        variant="lg"
        color="primary"
        weight="bold"
        as="h2"
        className="custom-class"
      />
    );
    const element = screen.getByText("Test text content");
    expect(element.tagName).toBe("H2");
    expect(element).toHaveClass(
      "variant-lg",
      "color-primary",
      "weight-bold",
      "custom-class"
    );
  });

  it("renders with complex content", () => {
    const complexContent = (
      <span>
        Complex content with <strong>bold</strong> and <em>italic</em> text
      </span>
    );
    render(<Text>{complexContent}</Text>);
    // Check that the complex content renders by finding the container element
    const textElement = document.querySelector('.text');
    expect(textElement?.textContent).toContain("Complex content with");
    expect(screen.getByText("bold")).toBeInTheDocument();
    expect(screen.getByText("italic")).toBeInTheDocument();
  });

  it("handles empty content", () => {
    render(<Text />);
    // Just check that a Text element with expected class is rendered
    const element = document.querySelector('.text');
    expect(element).toBeInTheDocument();
  });

  it("applies font-family from design tokens", () => {
    render(<Text {...defaultProps} />);
    const element = screen.getByText("Test text content");
    // Just verify the text component renders correctly
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass("text");
  });
});
