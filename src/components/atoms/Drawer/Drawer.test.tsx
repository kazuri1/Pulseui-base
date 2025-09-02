import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Drawer } from "./Drawer";

describe("Drawer", () => {
  const mockOnClose = jest.fn();

  beforeEach(() => {
    mockOnClose.mockClear();
  });

  it("renders drawer when show is true", () => {
    render(
      <Drawer show={true} title="Test Drawer" onClose={mockOnClose}>
        <div>Drawer content</div>
      </Drawer>
    );

    expect(screen.getByText("Test Drawer")).toBeInTheDocument();
    expect(screen.getByText("Drawer content")).toBeInTheDocument();
  });

  it("does not render when show is false", () => {
    render(
      <Drawer show={false} title="Test Drawer" onClose={mockOnClose}>
        <div>Drawer content</div>
      </Drawer>
    );

    expect(screen.queryByText("Test Drawer")).not.toBeInTheDocument();
    expect(screen.queryByText("Drawer content")).not.toBeInTheDocument();
  });

  it("calls onClose when close button is clicked", () => {
    render(
      <Drawer show={true} title="Test Drawer" onClose={mockOnClose}>
        <div>Drawer content</div>
      </Drawer>
    );

    const closeButton = screen.getByLabelText("Close drawer");
    fireEvent.click(closeButton);

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it("calls onClose when backdrop is clicked", () => {
    render(
      <Drawer show={true} title="Test Drawer" onClose={mockOnClose}>
        <div>Drawer content</div>
      </Drawer>
    );

    const backdrop = screen.getByRole("dialog");
    fireEvent.click(backdrop);

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it("calls onClose when escape key is pressed", () => {
    render(
      <Drawer show={true} title="Test Drawer" onClose={mockOnClose}>
        <div>Drawer content</div>
      </Drawer>
    );

    const backdrop = screen.getByRole("dialog");
    fireEvent.keyDown(backdrop, { key: "Escape" });

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it("does not call onClose when escape key is pressed and closeOnEscape is false", () => {
    render(
      <Drawer
        show={true}
        title="Test Drawer"
        onClose={mockOnClose}
        closeOnEscape={false}
      >
        <div>Drawer content</div>
      </Drawer>
    );

    const backdrop = screen.getByRole("dialog");
    fireEvent.keyDown(backdrop, { key: "Escape" });

    expect(mockOnClose).not.toHaveBeenCalled();
  });

  it("does not call onClose when backdrop is clicked and closeOnBackdropClick is false", () => {
    render(
      <Drawer
        show={true}
        title="Test Drawer"
        onClose={mockOnClose}
        closeOnBackdropClick={false}
      >
        <div>Drawer content</div>
      </Drawer>
    );

    const backdrop = screen.getByRole("dialog");
    fireEvent.click(backdrop);

    expect(mockOnClose).not.toHaveBeenCalled();
  });

  it("renders title when showTitle is true", () => {
    render(
      <Drawer
        show={true}
        title="Test Drawer"
        showTitle={true}
        onClose={mockOnClose}
      >
        <div>Drawer content</div>
      </Drawer>
    );

    expect(screen.getByText("Test Drawer")).toBeInTheDocument();
  });

  it("does not render title when showTitle is false", () => {
    render(
      <Drawer
        show={true}
        title="Test Drawer"
        showTitle={false}
        onClose={mockOnClose}
      >
        <div>Drawer content</div>
      </Drawer>
    );

    expect(screen.queryByText("Test Drawer")).not.toBeInTheDocument();
  });

  it("renders close button when showClose is true", () => {
    render(
      <Drawer
        show={true}
        title="Test Drawer"
        showClose={true}
        onClose={mockOnClose}
      >
        <div>Drawer content</div>
      </Drawer>
    );

    expect(screen.getByLabelText("Close drawer")).toBeInTheDocument();
  });

  it("does not render close button when showClose is false", () => {
    render(
      <Drawer
        show={true}
        title="Test Drawer"
        showClose={false}
        onClose={mockOnClose}
      >
        <div>Drawer content</div>
      </Drawer>
    );

    expect(screen.queryByLabelText("Close drawer")).not.toBeInTheDocument();
  });

  it("applies correct direction class", () => {
    const { container } = render(
      <Drawer
        show={true}
        title="Test Drawer"
        direction="left"
        onClose={mockOnClose}
      >
        <div>Drawer content</div>
      </Drawer>
    );

    const drawer = container.querySelector(".drawer");
    expect(drawer).toHaveClass("direction-left");
  });

  it("applies scrollable class when showScroll is true", () => {
    const { container } = render(
      <Drawer
        show={true}
        title="Test Drawer"
        showScroll={true}
        onClose={mockOnClose}
      >
        <div>Drawer content</div>
      </Drawer>
    );

    const drawer = container.querySelector(".drawer");
    expect(drawer).toHaveClass("scrollable");
  });

  it("does not apply scrollable class when showScroll is false", () => {
    const { container } = render(
      <Drawer
        show={true}
        title="Test Drawer"
        showScroll={false}
        onClose={mockOnClose}
      >
        <div>Drawer content</div>
      </Drawer>
    );

    const drawer = container.querySelector(".drawer");
    expect(drawer).not.toHaveClass("scrollable");
  });

  it("applies disabled class when disabled is true", () => {
    const { container } = render(
      <Drawer
        show={true}
        title="Test Drawer"
        disabled={true}
        onClose={mockOnClose}
      >
        <div>Drawer content</div>
      </Drawer>
    );

    const drawer = container.querySelector(".drawer");
    expect(drawer).toHaveClass("disabled");
  });

  it("does not call onClose when disabled", () => {
    render(
      <Drawer
        show={true}
        title="Test Drawer"
        disabled={true}
        onClose={mockOnClose}
      >
        <div>Drawer content</div>
      </Drawer>
    );

    const closeButton = screen.getByLabelText("Close drawer");
    fireEvent.click(closeButton);

    expect(mockOnClose).not.toHaveBeenCalled();
  });

  it("renders with correct accessibility attributes", () => {
    render(
      <Drawer
        show={true}
        title="Test Drawer"
        id="test-drawer"
        onClose={mockOnClose}
      >
        <div>Drawer content</div>
      </Drawer>
    );

    const dialog = screen.getByRole("dialog");
    expect(dialog).toHaveAttribute("aria-modal", "true");
    expect(dialog).toHaveAttribute("aria-labelledby", "test-drawer-title");
  });

  it("renders title with correct id when id is provided", () => {
    render(
      <Drawer
        show={true}
        title="Test Drawer"
        id="test-drawer"
        onClose={mockOnClose}
      >
        <div>Drawer content</div>
      </Drawer>
    );

    const title = screen.getByText("Test Drawer");
    expect(title).toHaveAttribute("id", "test-drawer-title");
  });
});
