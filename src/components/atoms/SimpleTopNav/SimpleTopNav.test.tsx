import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, jest } from "@jest/globals";
import "@testing-library/jest-dom";
import React from "react";
import { SimpleTopNav } from "./SimpleTopNav";

describe("SimpleTopNav", () => {
  const defaultItems = [
    {
      id: "work",
      label: "WORK",
      active: false,
    },
    {
      id: "about",
      label: "ABOUT",
      active: true,
    },
  ];

  it("renders with default props", () => {
    render(<SimpleTopNav items={defaultItems} />);

    expect(screen.getByText("VIGNESH VISHNUMOORTHY")).toBeInTheDocument();
    expect(screen.getByText("PRODUCT DESIGNER + ENGINEER")).toBeInTheDocument();
    expect(screen.getByText("WORK")).toBeInTheDocument();
    expect(screen.getByText("ABOUT")).toBeInTheDocument();
  });

  it("renders with custom brand name and title", () => {
    render(
      <SimpleTopNav
        brandName="JOHN DOE"
        brandTitle="DEVELOPER"
        items={defaultItems}
      />
    );

    expect(screen.getByText("JOHN DOE")).toBeInTheDocument();
    expect(screen.getByText("DEVELOPER")).toBeInTheDocument();
  });

  it("renders without brand section when showBrand is false", () => {
    render(<SimpleTopNav items={defaultItems} showBrand={false} />);

    expect(screen.queryByText("VIGNESH VISHNUMOORTHY")).not.toBeInTheDocument();
    expect(
      screen.queryByText("PRODUCT DESIGNER + ENGINEER")
    ).not.toBeInTheDocument();
    expect(screen.getByText("WORK")).toBeInTheDocument();
    expect(screen.getByText("ABOUT")).toBeInTheDocument();
  });

  it("renders without navigation section when showNavigation is false", () => {
    render(<SimpleTopNav items={defaultItems} showNavigation={false} />);

    expect(screen.getByText("VIGNESH VISHNUMOORTHY")).toBeInTheDocument();
    expect(screen.queryByText("WORK")).not.toBeInTheDocument();
    expect(screen.queryByText("ABOUT")).not.toBeInTheDocument();
  });

  it("calls onClick handler when nav item is clicked", () => {
    const mockOnClick = jest.fn();
    const itemsWithClick = [
      {
        id: "work",
        label: "WORK",
        active: false,
        onClick: mockOnClick,
      },
    ];

    render(<SimpleTopNav items={itemsWithClick} />);

    fireEvent.click(screen.getByText("WORK"));
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it("renders active nav item with correct styling", () => {
    render(<SimpleTopNav items={defaultItems} />);

    const aboutItem = screen.getByText("ABOUT");
    expect(aboutItem.closest("button")).toHaveClass("active");
  });

  it("renders brand logo when provided", () => {
    const brandLogo = <div data-testid="brand-logo">Logo</div>;
    render(<SimpleTopNav items={defaultItems} brandLogo={brandLogo} />);

    expect(screen.getByTestId("brand-logo")).toBeInTheDocument();
  });

  it("renders nav items as links when href is provided", () => {
    const itemsWithHref = [
      {
        id: "work",
        label: "WORK",
        active: false,
        href: "/work",
      },
    ];

    render(<SimpleTopNav items={itemsWithHref} />);

    const workLink = screen.getByText("WORK");
    expect(workLink.closest("a")).toHaveAttribute("href", "/work");
  });

  it("applies custom className", () => {
    render(<SimpleTopNav items={defaultItems} className="custom-class" />);

    const nav = screen.getByRole("navigation");
    expect(nav).toHaveClass("custom-class");
  });

  it("renders with empty items array", () => {
    render(<SimpleTopNav items={[]} />);

    expect(screen.getByText("VIGNESH VISHNUMOORTHY")).toBeInTheDocument();
    expect(screen.queryByText("WORK")).not.toBeInTheDocument();
  });
});
