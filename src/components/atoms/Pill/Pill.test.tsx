import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Pill } from "./Pill";
import React from "react";

describe("Pill Component", () => {
  describe("Rendering", () => {
    it("renders with correct text content", () => {
      render(<Pill>Test Pill</Pill>);
      expect(screen.getByText("Test Pill")).toBeInTheDocument();
    });

    it("renders children correctly", () => {
      render(<Pill>Custom Content</Pill>);
      expect(screen.getByText("Custom Content")).toBeInTheDocument();
    });

    it("applies custom className", () => {
      render(<Pill className="custom-class">Test Pill</Pill>);
      const pill = screen.getByText("Test Pill").closest("div");
      expect(pill).toHaveClass("custom-class");
    });
  });

  describe("Sizes", () => {
    it("applies xs size styles", () => {
      render(<Pill size="xs">Test Pill</Pill>);
      const pill = screen.getByText("Test Pill").closest("div");
      expect(pill).toHaveClass("size-xs");
    });

    it("applies sm size styles", () => {
      render(<Pill size="sm">Test Pill</Pill>);
      const pill = screen.getByText("Test Pill").closest("div");
      expect(pill).toHaveClass("size-sm");
    });

    it("applies md size styles (default)", () => {
      render(<Pill>Test Pill</Pill>);
      const pill = screen.getByText("Test Pill").closest("div");
      expect(pill).toHaveClass("size-md");
    });

    it("applies lg size styles", () => {
      render(<Pill size="lg">Test Pill</Pill>);
      const pill = screen.getByText("Test Pill").closest("div");
      expect(pill).toHaveClass("size-lg");
    });

    it("applies xl size styles", () => {
      render(<Pill size="xl">Test Pill</Pill>);
      const pill = screen.getByText("Test Pill").closest("div");
      expect(pill).toHaveClass("size-xl");
    });
  });

  describe("Closable functionality", () => {
    it("does not show close button by default", () => {
      render(<Pill>Test Pill</Pill>);
      expect(screen.queryByRole("button")).not.toBeInTheDocument();
    });

    it("shows close button when closable is true", () => {
      render(<Pill closable>Test Pill</Pill>);
      expect(screen.getByRole("button")).toBeInTheDocument();
    });

    it("calls onClose when close button is clicked", () => {
      const mockOnClose = jest.fn();
      render(
        <Pill closable onClose={mockOnClose}>
          Test Pill
        </Pill>
      );

      const closeButton = screen.getByRole("button");
      fireEvent.click(closeButton);
      expect(mockOnClose).toHaveBeenCalledTimes(1);
    });

    it("applies closable class when closable", () => {
      render(<Pill closable>Test Pill</Pill>);
      const pill = screen.getByText("Test Pill").closest("div");
      expect(pill).toHaveClass("closable");
    });
  });

  describe("Disabled state", () => {
    it("applies disabled class when disabled", () => {
      render(<Pill disabled>Test Pill</Pill>);
      const pill = screen.getByText("Test Pill").closest("div");
      expect(pill).toHaveClass("disabled");
    });

    it("disables close button when disabled", () => {
      render(
        <Pill closable disabled>
          Test Pill
        </Pill>
      );
      const closeButton = screen.getByRole("button");
      expect(closeButton).toBeDisabled();
    });

    it("does not call onClose when disabled and clicked", () => {
      const mockOnClose = jest.fn();
      render(
        <Pill closable disabled onClose={mockOnClose}>
          Test Pill
        </Pill>
      );

      const closeButton = screen.getByRole("button");
      fireEvent.click(closeButton);
      expect(mockOnClose).not.toHaveBeenCalled();
    });
  });

  describe("Accessibility", () => {
    it("has proper aria-label for close button", () => {
      render(<Pill closable>Test Pill</Pill>);
      const closeButton = screen.getByRole("button");
      expect(closeButton).toHaveAttribute("aria-label", "Remove pill");
    });
  });

  describe("Custom styling", () => {
    it("applies custom style", () => {
      render(<Pill style={{ backgroundColor: "red" }}>Test Pill</Pill>);
      const pill = screen.getByText("Test Pill").closest("div");
      expect(pill).toHaveStyle({ backgroundColor: "red" });
    });

    it("applies sx prop styles", () => {
      render(<Pill sx={{ backgroundColor: "primary" }}>Test Pill</Pill>);
      const pill = screen.getByText("Test Pill").closest("div");
      expect(pill).toHaveStyle({ backgroundColor: "var(--color-primary)" });
    });
  });

  describe("Error handling", () => {
    it("renders without onClose prop when closable", () => {
      render(<Pill closable>Test Pill</Pill>);
      const closeButton = screen.getByRole("button");
      fireEvent.click(closeButton);
      // Should not throw error
      expect(screen.getByText("Test Pill")).toBeInTheDocument();
    });
  });

  describe("Combined props", () => {
    it("handles multiple props correctly", () => {
      const mockOnClose = jest.fn();
      render(
        <Pill
          size="lg"
          closable
          onClose={mockOnClose}
          className="custom-class"
          style={{ margin: "10px" }}
        >
          Combined Props Pill
        </Pill>
      );

      const pill = screen.getByText("Combined Props Pill").closest("div");
      expect(pill).toHaveClass("size-lg");
      expect(pill).toHaveClass("closable");
      expect(pill).toHaveClass("custom-class");
      expect(pill).toHaveStyle({ margin: "10px" });

      const closeButton = screen.getByRole("button");
      fireEvent.click(closeButton);
      expect(mockOnClose).toHaveBeenCalledTimes(1);
    });
  });
});
