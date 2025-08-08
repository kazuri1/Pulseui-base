import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Modal } from "./Modal";

describe("Modal", () => {
  const defaultProps = {
    show: true,
    onClose: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders modal when show is true", () => {
    render(<Modal {...defaultProps}>Modal content</Modal>);
    
    expect(screen.getByText("Modal content")).toBeInTheDocument();
  });

  it("does not render modal when show is false", () => {
    render(<Modal {...defaultProps} show={false}>Modal content</Modal>);
    
    expect(screen.queryByText("Modal content")).not.toBeInTheDocument();
  });

  it("renders title when provided", () => {
    render(<Modal {...defaultProps} title="Test Title">Modal content</Modal>);
    
    expect(screen.getByText("Test Title")).toBeInTheDocument();
  });

  it("renders description when provided", () => {
    render(
      <Modal {...defaultProps} description="Test description">
        Modal content
      </Modal>
    );
    
    expect(screen.getByText("Test description")).toBeInTheDocument();
  });

  it("calls onClose when close button is clicked", () => {
    render(<Modal {...defaultProps} showClose={true}>Modal content</Modal>);
    
    const closeButton = screen.getByLabelText("Close modal");
    fireEvent.click(closeButton);
    
    expect(defaultProps.onClose).toHaveBeenCalledTimes(1);
  });

  it("calls onClose when backdrop is clicked", () => {
    render(<Modal {...defaultProps} closeOnBackdropClick={true}>Modal content</Modal>);
    
    const backdrop = screen.getByRole("dialog");
    fireEvent.click(backdrop);
    
    expect(defaultProps.onClose).toHaveBeenCalledTimes(1);
  });

  it("does not call onClose when backdrop is clicked and closeOnBackdropClick is false", () => {
    render(
      <Modal {...defaultProps} closeOnBackdropClick={false}>
        Modal content
      </Modal>
    );
    
    const backdrop = screen.getByRole("dialog");
    fireEvent.click(backdrop);
    
    expect(defaultProps.onClose).not.toHaveBeenCalled();
  });

  it("calls onClose when escape key is pressed", () => {
    render(<Modal {...defaultProps} closeOnEscape={true}>Modal content</Modal>);
    
    const backdrop = screen.getByRole("dialog");
    fireEvent.keyDown(backdrop, { key: "Escape" });
    
    expect(defaultProps.onClose).toHaveBeenCalledTimes(1);
  });

  it("does not call onClose when escape key is pressed and closeOnEscape is false", () => {
    render(
      <Modal {...defaultProps} closeOnEscape={false}>
        Modal content
      </Modal>
    );
    
    const backdrop = screen.getByRole("dialog");
    fireEvent.keyDown(backdrop, { key: "Escape" });
    
    expect(defaultProps.onClose).not.toHaveBeenCalled();
  });

  it("renders footer when showFooter is true", () => {
    render(
      <Modal
        {...defaultProps}
        showFooter={true}
        footerVariant="primary"
        primaryText="Save"
        secondaryText="Cancel"
      >
        Modal content
      </Modal>
    );
    
    expect(screen.getByText("Save")).toBeInTheDocument();
    expect(screen.getByText("Cancel")).toBeInTheDocument();
  });

  it("calls onPrimaryClick when primary button is clicked", () => {
    const onPrimaryClick = jest.fn();
    render(
      <Modal
        {...defaultProps}
        showFooter={true}
        onPrimaryClick={onPrimaryClick}
        primaryText="Save"
      >
        Modal content
      </Modal>
    );
    
    fireEvent.click(screen.getByText("Save"));
    expect(onPrimaryClick).toHaveBeenCalledTimes(1);
  });

  it("calls onSecondaryClick when secondary button is clicked", () => {
    const onSecondaryClick = jest.fn();
    render(
      <Modal
        {...defaultProps}
        showFooter={true}
        onSecondaryClick={onSecondaryClick}
        secondaryText="Cancel"
      >
        Modal content
      </Modal>
    );
    
    fireEvent.click(screen.getByText("Cancel"));
    expect(onSecondaryClick).toHaveBeenCalledTimes(1);
  });

  it("applies correct size class", () => {
    render(<Modal {...defaultProps} size="lg">Modal content</Modal>);
    
    const modal = screen.getByRole("dialog").querySelector("div");
    expect(modal).toHaveClass("size-lg");
  });

  it("applies disabled class when disabled is true", () => {
    render(<Modal {...defaultProps} disabled={true}>Modal content</Modal>);
    
    const modal = screen.getByRole("dialog").querySelector("div");
    expect(modal).toHaveClass("disabled");
  });

  it("renders with custom className", () => {
    render(<Modal {...defaultProps} className="custom-class">Modal content</Modal>);
    
    const modal = screen.getByRole("dialog").querySelector("div");
    expect(modal).toHaveClass("custom-class");
  });

  it("sets aria-labelledby when title is provided", () => {
    render(<Modal {...defaultProps} title="Test Title" id="test-modal">Modal content</Modal>);
    
    const dialog = screen.getByRole("dialog");
    expect(dialog).toHaveAttribute("aria-labelledby", "test-modal-title");
  });

  it("sets aria-describedby when description is provided", () => {
    render(
      <Modal {...defaultProps} description="Test description" id="test-modal">
        Modal content
      </Modal>
    );
    
    const dialog = screen.getByRole("dialog");
    expect(dialog).toHaveAttribute("aria-describedby", "test-modal-description");
  });
});
