import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, jest } from "@jest/globals";
import "@testing-library/jest-dom";
import React from "react";
import { Tabs, TabsList, TabsTab, TabsPanel } from "./index";

describe("Tabs", () => {
  const renderTabs = (props = {}) => {
    return render(
      <Tabs defaultValue="tab1" {...props}>
        <TabsList>
          <TabsTab value="tab1" placeholder="First Tab" />
          <TabsTab value="tab2" placeholder="Second Tab" />
          <TabsTab value="tab3" placeholder="Third Tab" />
        </TabsList>
        <TabsPanel value="tab1">
          <h3>First Tab Content</h3>
          <p>Content for first tab</p>
        </TabsPanel>
        <TabsPanel value="tab2">
          <h3>Second Tab Content</h3>
          <p>Content for second tab</p>
        </TabsPanel>
        <TabsPanel value="tab3">
          <h3>Third Tab Content</h3>
          <p>Content for third tab</p>
        </TabsPanel>
      </Tabs>
    );
  };

  it("renders tabs with default active tab", () => {
    renderTabs();

    expect(screen.getByText("First Tab")).toBeInTheDocument();
    expect(screen.getByText("Second Tab")).toBeInTheDocument();
    expect(screen.getByText("Third Tab")).toBeInTheDocument();
    expect(screen.getByText("First Tab Content")).toBeInTheDocument();
    expect(screen.queryByText("Second Tab Content")).not.toBeInTheDocument();
  });

  it("switches active tab when clicked", () => {
    renderTabs();

    fireEvent.click(screen.getByText("Second Tab"));

    expect(screen.getByText("Second Tab Content")).toBeInTheDocument();
    expect(screen.queryByText("First Tab Content")).not.toBeInTheDocument();
  });

  it("calls onChange when tab is clicked", () => {
    const onChange = jest.fn();
    renderTabs({ onChange });

    fireEvent.click(screen.getByText("Second Tab"));

    expect(onChange).toHaveBeenCalledWith("tab2");
  });

  it("allows tab deactivation when allowTabDeactivation is true", () => {
    const onChange = jest.fn();
    renderTabs({ allowTabDeactivation: true, onChange });

    // Click active tab to deactivate
    fireEvent.click(screen.getByText("First Tab"));

    expect(onChange).toHaveBeenCalledWith(null);
  });

  it("prevents tab deactivation when allowTabDeactivation is false", () => {
    const onChange = jest.fn();
    renderTabs({ allowTabDeactivation: false, onChange });

    // Click active tab - should not deactivate
    fireEvent.click(screen.getByText("First Tab"));

    expect(onChange).not.toHaveBeenCalledWith(null);
  });

  it("works as controlled component", () => {
    const onChange = jest.fn();
    renderTabs({ value: "tab2", onChange });

    expect(screen.getByText("Second Tab Content")).toBeInTheDocument();
    expect(screen.queryByText("First Tab Content")).not.toBeInTheDocument();
  });

  it("applies orientation classes correctly", () => {
    const { rerender } = renderTabs({ orientation: "horizontal" });
    expect(screen.getByText("First Tab").closest(".tabs")).toHaveClass(
      "orientation-horizontal"
    );

    rerender(
      <Tabs defaultValue="tab1" orientation="vertical">
        <TabsList>
          <TabsTab value="tab1" placeholder="First Tab" />
        </TabsList>
        <TabsPanel value="tab1">Content</TabsPanel>
      </Tabs>
    );
    expect(screen.getByText("First Tab").closest(".tabs")).toHaveClass(
      "orientation-vertical"
    );
  });

  it("applies placement classes correctly for vertical orientation", () => {
    const { rerender } = renderTabs({
      orientation: "vertical",
      placement: "left",
    });
    expect(screen.getByText("First Tab").closest(".tabs")).toHaveClass(
      "placement-left"
    );

    rerender(
      <Tabs defaultValue="tab1" orientation="vertical" placement="right">
        <TabsList>
          <TabsTab value="tab1" placeholder="First Tab" />
        </TabsList>
        <TabsPanel value="tab1">Content</TabsPanel>
      </Tabs>
    );
    expect(screen.getByText("First Tab").closest(".tabs")).toHaveClass(
      "placement-right"
    );
  });
});

describe("TabsList", () => {
  it("applies grow class when grow prop is true", () => {
    render(
      <Tabs defaultValue="tab1">
        <TabsList grow>
          <TabsTab value="tab1" placeholder="First Tab" />
        </TabsList>
        <TabsPanel value="tab1">Content</TabsPanel>
      </Tabs>
    );

    expect(screen.getByText("First Tab").closest(".tabsList")).toHaveClass(
      "grow"
    );
  });

  it("applies justify classes correctly", () => {
    const { rerender } = render(
      <Tabs defaultValue="tab1">
        <TabsList justify="center">
          <TabsTab value="tab1" placeholder="First Tab" />
        </TabsList>
        <TabsPanel value="tab1">Content</TabsPanel>
      </Tabs>
    );

    expect(screen.getByText("First Tab").closest(".tabsList")).toHaveClass(
      "justify-center"
    );

    rerender(
      <Tabs defaultValue="tab1">
        <TabsList justify="flex-end">
          <TabsTab value="tab1" placeholder="First Tab" />
        </TabsList>
        <TabsPanel value="tab1">Content</TabsPanel>
      </Tabs>
    );

    expect(screen.getByText("First Tab").closest(".tabsList")).toHaveClass(
      "justify-flex-end"
    );
  });
});

describe("TabsTab", () => {
  it("renders with correct ARIA attributes", () => {
    render(
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTab value="tab1" placeholder="First Tab" />
        </TabsList>
        <TabsPanel value="tab1">Content</TabsPanel>
      </Tabs>
    );

    const tab = screen.getByRole("tab");
    expect(tab).toHaveAttribute("aria-selected", "true");
    expect(tab).toHaveAttribute("aria-controls");
  });

  it("handles keyboard navigation", () => {
    render(
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTab value="tab1" placeholder="First Tab" />
          <TabsTab value="tab2" placeholder="Second Tab" />
        </TabsList>
        <TabsPanel value="tab1">Content 1</TabsPanel>
        <TabsPanel value="tab2">Content 2</TabsPanel>
      </Tabs>
    );

    const firstTab = screen.getByText("First Tab").closest('[role="tab"]');
    firstTab?.focus();

    fireEvent.keyDown(firstTab!, { key: "ArrowRight" });

    // Should focus the second tab
    expect(
      screen.getByText("Second Tab").closest('[role="tab"]')
    ).toHaveFocus();
  });

  it("handles Enter and Space key presses", () => {
    const onChange = jest.fn();
    render(
      <Tabs defaultValue="tab1" onChange={onChange}>
        <TabsList>
          <TabsTab value="tab1" placeholder="First Tab" />
          <TabsTab value="tab2" placeholder="Second Tab" />
        </TabsList>
        <TabsPanel value="tab1">Content 1</TabsPanel>
        <TabsPanel value="tab2">Content 2</TabsPanel>
      </Tabs>
    );

    const secondTab = screen.getByText("Second Tab").closest('[role="tab"]');
    secondTab?.focus();

    fireEvent.keyDown(secondTab!, { key: "Enter" });
    expect(onChange).toHaveBeenCalledWith("tab2");

    fireEvent.keyDown(secondTab!, { key: " " });
    expect(onChange).toHaveBeenCalledWith("tab1"); // Toggle back
  });
});

describe("TabsPanel", () => {
  it("renders content when active", () => {
    render(
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTab value="tab1" placeholder="First Tab" />
          <TabsTab value="tab2" placeholder="Second Tab" />
        </TabsList>
        <TabsPanel value="tab1">Active Content</TabsPanel>
        <TabsPanel value="tab2">Inactive Content</TabsPanel>
      </Tabs>
    );

    expect(screen.getByText("Active Content")).toBeInTheDocument();
    expect(screen.queryByText("Inactive Content")).not.toBeInTheDocument();
  });

  it("has correct ARIA attributes", () => {
    render(
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTab value="tab1" placeholder="First Tab" />
        </TabsList>
        <TabsPanel value="tab1">Content</TabsPanel>
      </Tabs>
    );

    const panel = screen.getByRole("tabpanel");
    expect(panel).toHaveAttribute("aria-labelledby");
    expect(panel).not.toHaveAttribute("hidden");
  });

  it("hides inactive panels", () => {
    render(
      <Tabs defaultValue="tab1">
        <TabsList>
          <TabsTab value="tab1" placeholder="First Tab" />
          <TabsTab value="tab2" placeholder="Second Tab" />
        </TabsList>
        <TabsPanel value="tab1">Active Content</TabsPanel>
        <TabsPanel value="tab2">Inactive Content</TabsPanel>
      </Tabs>
    );

    const inactivePanel = screen
      .getByText("Inactive Content")
      .closest('[role="tabpanel"]');
    expect(inactivePanel).toHaveAttribute("hidden");
  });

  it("keeps panel mounted when keepMounted is true", () => {
    render(
      <Tabs defaultValue="tab1" keepMounted={false}>
        <TabsList>
          <TabsTab value="tab1" placeholder="First Tab" />
          <TabsTab value="tab2" placeholder="Second Tab" />
        </TabsList>
        <TabsPanel value="tab1">Active Content</TabsPanel>
        <TabsPanel value="tab2" keepMounted={true}>
          Inactive Content
        </TabsPanel>
      </Tabs>
    );

    // Should still be in DOM even though inactive
    expect(screen.getByText("Inactive Content")).toBeInTheDocument();
  });
});
