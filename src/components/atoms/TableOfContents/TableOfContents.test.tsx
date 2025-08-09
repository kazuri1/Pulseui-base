import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, jest } from "@jest/globals";
import "@testing-library/jest-dom";
import React from "react";
import { TableOfContents } from "./TableOfContents";
import type { TableOfContentsItem } from "./TableOfContents";

const mockItems: TableOfContentsItem[] = [
  {
    id: "section-1",
    label: "Section 1",
  },
  {
    id: "section-2",
    label: "Section 2",
  },
  {
    id: "subsection-2-1",
    label: "Subsection 2.1",
  },
  {
    id: "subsection-2-2",
    label: "Subsection 2.2",
  },
];

describe("TableOfContents", () => {
  it("renders all items", () => {
    render(<TableOfContents items={mockItems} />);

    expect(screen.getByText("Section 1")).toBeInTheDocument();
    expect(screen.getByText("Section 2")).toBeInTheDocument();
    expect(screen.getByText("Subsection 2.1")).toBeInTheDocument();
    expect(screen.getByText("Subsection 2.2")).toBeInTheDocument();
  });

  it("applies variant classes correctly", () => {
    const { rerender } = render(
      <TableOfContents items={mockItems} variant="filled" />
    );
    // Target the main container, not the item
    const container = document.querySelector(".container");
    expect(container).toHaveClass("variant-filled");

    rerender(<TableOfContents items={mockItems} variant="light" />);
    expect(document.querySelector(".container")).toHaveClass("variant-light");

    rerender(<TableOfContents items={mockItems} variant="subtle" />);
    expect(document.querySelector(".container")).toHaveClass("variant-subtle");
  });

  it("applies size classes correctly", () => {
    const { rerender } = render(
      <TableOfContents items={mockItems} size="sm" />
    );
    expect(document.querySelector(".container")).toHaveClass("size-sm");

    rerender(<TableOfContents items={mockItems} size="md" />);
    expect(document.querySelector(".container")).toHaveClass("size-md");

    rerender(<TableOfContents items={mockItems} size="lg" />);
    expect(document.querySelector(".container")).toHaveClass("size-lg");
  });

  it("shows numbers when showNumbers is true", () => {
    render(<TableOfContents items={mockItems} showNumbers={true} />);

    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
    expect(screen.getByText("4")).toBeInTheDocument();
  });

  it("does not show numbers when showNumbers is false", () => {
    render(<TableOfContents items={mockItems} showNumbers={false} />);

    expect(screen.queryByText("1")).not.toBeInTheDocument();
    expect(screen.queryByText("2")).not.toBeInTheDocument();
  });

  it("limits items based on maxItems prop", () => {
    render(<TableOfContents items={mockItems} maxItems={2} />);

    expect(screen.getByText("Section 1")).toBeInTheDocument();
    expect(screen.getByText("Section 2")).toBeInTheDocument();
    expect(screen.queryByText("Subsection 2.1")).not.toBeInTheDocument();
    expect(screen.queryByText("Subsection 2.2")).not.toBeInTheDocument();
  });

  it("applies compact class when compact prop is true", () => {
    render(<TableOfContents items={mockItems} compact={true} />);

    const container = document.querySelector(".container");
    expect(container).toHaveClass("compact");
  });

  it("calls onItemClick when item is clicked", () => {
    const mockOnItemClick = jest.fn();
    render(<TableOfContents items={mockItems} onItemClick={mockOnItemClick} />);

    fireEvent.click(screen.getByText("Section 1"));
    expect(mockOnItemClick).toHaveBeenCalledWith(mockItems[0]);
  });

  it("scrolls to target element when item is clicked", () => {
    // Mock scrollTo
    const mockScrollTo = jest.fn();
    Object.defineProperty(window, "scrollTo", {
      value: mockScrollTo,
      writable: true,
    });

    // Mock getElementById
    const mockElement = {
      offsetTop: 100,
      offsetHeight: 50,
    };
    jest.spyOn(document, "getElementById").mockReturnValue(mockElement as any);

    render(<TableOfContents items={mockItems} scrollOffset={50} />);

    fireEvent.click(screen.getByText("Section 1"));

    expect(mockScrollTo).toHaveBeenCalledWith({
      top: 50, // offsetTop - scrollOffset
      behavior: "smooth",
    });
  });

  it("renders nothing when items array is empty", () => {
    const { container } = render(<TableOfContents items={[]} />);
    expect(container.firstChild).toBeNull();
  });

  it("applies active class to active item", () => {
    render(<TableOfContents items={mockItems} activeId="section-2" />);

    const activeItem = screen.getByText("Section 2").closest("div");
    expect(activeItem).toHaveClass("active");
  });

  it("renders with custom className", () => {
    render(<TableOfContents items={mockItems} className="custom-class" />);

    const container = document.querySelector(".container");
    expect(container).toHaveClass("custom-class");
  });

  it("renders with custom style", () => {
    render(
      <TableOfContents items={mockItems} style={{ backgroundColor: "red" }} />
    );

    const container = document.querySelector(".container");
    expect(container).toHaveStyle({ backgroundColor: "red" });
  });
});
