import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ModalFooter } from "./ModalFooter";
import { Button } from "../Button";

describe("ModalFooter", () => {
  const defaultProps = {
    onPrimaryClick: jest.fn(),
    onSecondaryClick: jest.fn(),
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders primary variant by default", () => {
    render(<ModalFooter {...defaultProps} />);

    expect(screen.getByText("OK")).toBeInTheDocument();
    expect(screen.getByText("Cancel")).toBeInTheDocument();
  });

  it("renders button-only variant with children", () => {
    render(
      <ModalFooter variant="button-only">
        <Button>Custom Button</Button>
      </ModalFooter>
    );

    expect(screen.getByText("Custom Button")).toBeInTheDocument();
  });

  it("renders primary variant with custom text", () => {
    render(
      <ModalFooter
        {...defaultProps}
        variant="primary"
        primaryText="Save"
        secondaryText="Back"
      />
    );

    expect(screen.getByText("Save")).toBeInTheDocument();
    expect(screen.getByText("Back")).toBeInTheDocument();
  });

  it("renders destructive variant", () => {
    render(
      <ModalFooter
        {...defaultProps}
        variant="destructive"
        primaryText="Delete"
        secondaryText="Cancel"
      />
    );

    expect(screen.getByText("Delete")).toBeInTheDocument();
    expect(screen.getByText("Cancel")).toBeInTheDocument();
  });

  it("calls onPrimaryClick when primary button is clicked", () => {
    render(<ModalFooter {...defaultProps} />);

    fireEvent.click(screen.getByText("OK"));
    expect(defaultProps.onPrimaryClick).toHaveBeenCalledTimes(1);
  });

  it("calls onSecondaryClick when secondary button is clicked", () => {
    render(<ModalFooter {...defaultProps} />);

    fireEvent.click(screen.getByText("Cancel"));
    expect(defaultProps.onSecondaryClick).toHaveBeenCalledTimes(1);
  });

  it("disables primary button when primaryDisabled is true", () => {
    render(<ModalFooter {...defaultProps} primaryDisabled />);

    const primaryButton = screen.getByText("OK");
    expect(primaryButton).toBeDisabled();
  });

  it("disables secondary button when secondaryDisabled is true", () => {
    render(<ModalFooter {...defaultProps} secondaryDisabled />);

    const secondaryButton = screen.getByText("Cancel");
    expect(secondaryButton).toBeDisabled();
  });

  it("applies custom button props", () => {
    render(
      <ModalFooter
        {...defaultProps}
        primaryButtonProps={{ size: "lg" }}
        secondaryButtonProps={{ variant: "outline" }}
      />
    );

    const primaryButton = screen.getByText("OK");
    const secondaryButton = screen.getByText("Cancel");

    expect(primaryButton).toHaveClass("size-lg");
    expect(secondaryButton).toHaveClass("variant-outline");
  });

  it("renders with custom className", () => {
    render(<ModalFooter {...defaultProps} className="custom-class" />);

    const footer = screen.getByRole("contentinfo");
    expect(footer).toHaveClass("custom-class");
  });
});
