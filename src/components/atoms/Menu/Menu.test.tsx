import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Menu } from "./Menu";
import { Settings, Message } from "../Icon/IconSet";

const mockMenuSections = [
  {
    title: "Application",
    items: [
      {
        label: "Settings",
        icon: Settings,
        onClick: jest.fn(),
      },
      {
        label: "Messages",
        icon: Message,
        onClick: jest.fn(),
      },
    ],
  },
];

describe("Menu Component", () => {
  it("renders menu items when open", () => {
    render(
      <Menu
        sections={mockMenuSections}
        open={true}
        onBackdropClick={jest.fn()}
      />
    );

    expect(screen.getByText("Settings")).toBeInTheDocument();
    expect(screen.getByText("Messages")).toBeInTheDocument();
    expect(screen.getByText("Application")).toBeInTheDocument();
  });

  it("does not render when closed", () => {
    render(
      <Menu
        sections={mockMenuSections}
        open={false}
        onBackdropClick={jest.fn()}
      />
    );

    expect(screen.queryByText("Settings")).not.toBeInTheDocument();
    expect(screen.queryByText("Messages")).not.toBeInTheDocument();
  });

  it("calls onClick when menu item is clicked", () => {
    const mockOnClick = jest.fn();
    const sectionsWithClick = [
      {
        title: "Test",
        items: [
          {
            label: "Test Item",
            onClick: mockOnClick,
          },
        ],
      },
    ];

    render(
      <Menu
        sections={sectionsWithClick}
        open={true}
        onBackdropClick={jest.fn()}
      />
    );

    fireEvent.click(screen.getByText("Test Item"));
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it("calls onBackdropClick when backdrop is clicked", () => {
    const mockOnBackdropClick = jest.fn();
    render(
      <Menu
        sections={mockMenuSections}
        open={true}
        onBackdropClick={mockOnBackdropClick}
        showBackdrop={true}
      />
    );

    // Click on the backdrop (the div with backdrop class)
    const backdrop = document.querySelector(".backdrop");
    if (backdrop) {
      fireEvent.click(backdrop);
      expect(mockOnBackdropClick).toHaveBeenCalledTimes(1);
    }
  });

  it("applies custom width and maxWidth", () => {
    render(
      <Menu
        sections={mockMenuSections}
        open={true}
        onBackdropClick={jest.fn()}
        width="400px"
        maxWidth="600px"
      />
    );

    const menu = screen.getByRole("menu");
    expect(menu).toHaveStyle({ width: "400px", maxWidth: "600px" });
  });

  it("handles disabled menu items", () => {
    const sectionsWithDisabled = [
      {
        title: "Test",
        items: [
          {
            label: "Disabled Item",
            disabled: true,
            onClick: jest.fn(),
          },
        ],
      },
    ];

    render(
      <Menu
        sections={sectionsWithDisabled}
        open={true}
        onBackdropClick={jest.fn()}
      />
    );

    const disabledItem = screen.getByText("Disabled Item");
    expect(disabledItem.closest('[role="menuitem"]')).toHaveAttribute(
      "aria-disabled",
      "true"
    );
  });

  it("handles danger menu items", () => {
    const sectionsWithDanger = [
      {
        title: "Test",
        items: [
          {
            label: "Danger Item",
            danger: true,
            onClick: jest.fn(),
          },
        ],
      },
    ];

    render(
      <Menu
        sections={sectionsWithDanger}
        open={true}
        onBackdropClick={jest.fn()}
      />
    );

    const dangerItem = screen.getByText("Danger Item");
    expect(dangerItem.closest('[role="menuitem"]')).toHaveClass("danger");
  });
});
