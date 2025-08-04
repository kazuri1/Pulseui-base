import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Radio } from "./Radio";

describe("Radio", () => {
  const defaultProps = {
    label: "Test Radio",
  };

  it("renders with label", () => {
    render(<Radio {...defaultProps} />);
    expect(screen.getByText("Test Radio")).toBeInTheDocument();
  });

  it("renders without label when showLabel is false", () => {
    render(<Radio {...defaultProps} showLabel={false} />);
    expect(screen.queryByText("Test Radio")).not.toBeInTheDocument();
  });

  it("renders checked state correctly", () => {
    render(<Radio {...defaultProps} checked={true} />);
    const radio = screen.getByRole("radio");
    expect(radio).toBeChecked();
  });

  it("renders unchecked state correctly", () => {
    render(<Radio {...defaultProps} checked={false} />);
    const radio = screen.getByRole("radio");
    expect(radio).not.toBeChecked();
  });

  it("calls onChange when clicked", () => {
    const handleChange = jest.fn();
    render(<Radio {...defaultProps} onChange={handleChange} />);

    const radio = screen.getByRole("radio");
    fireEvent.click(radio);

    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it("does not call onChange when disabled", () => {
    const handleChange = jest.fn();
    render(
      <Radio {...defaultProps} onChange={handleChange} state="disabled" />
    );

    const radio = screen.getByRole("radio");
    fireEvent.click(radio);

    expect(handleChange).not.toHaveBeenCalled();
  });

  it("applies correct size classes", () => {
    const { rerender } = render(<Radio {...defaultProps} size="xs" />);
    let radio = screen.getByRole("radio").closest("label");
    expect(radio).toHaveClass("size-xs");

    rerender(<Radio {...defaultProps} size="lg" />);
    radio = screen.getByRole("radio").closest("label");
    expect(radio).toHaveClass("size-lg");
  });

  it("applies correct state classes", () => {
    const { rerender } = render(<Radio {...defaultProps} state="disabled" />);
    let radio = screen.getByRole("radio").closest("label");
    expect(radio).toHaveClass("state-disabled");

    rerender(<Radio {...defaultProps} state="error" />);
    radio = screen.getByRole("radio").closest("label");
    expect(radio).toHaveClass("state-error");
  });

  it("applies label position classes", () => {
    render(<Radio {...defaultProps} labelPosition="left" />);
    const radio = screen.getByRole("radio").closest("label");
    expect(radio).toHaveClass("labelLeft");
  });

  it("renders with correct accessibility attributes", () => {
    render(
      <Radio
        {...defaultProps}
        id="test-radio"
        name="test-group"
        value="test-value"
      />
    );
    const radio = screen.getByRole("radio");

    expect(radio).toHaveAttribute("id", "test-radio");
    expect(radio).toHaveAttribute("name", "test-group");
    expect(radio).toHaveAttribute("value", "test-value");
  });

  it("is disabled when state is disabled", () => {
    render(<Radio {...defaultProps} state="disabled" />);
    const radio = screen.getByRole("radio");
    expect(radio).toBeDisabled();
  });

  it("is not disabled when state is default", () => {
    render(<Radio {...defaultProps} state="default" />);
    const radio = screen.getByRole("radio");
    expect(radio).not.toBeDisabled();
  });

  it("is not disabled when state is error", () => {
    render(<Radio {...defaultProps} state="error" />);
    const radio = screen.getByRole("radio");
    expect(radio).not.toBeDisabled();
  });

  it("applies custom className", () => {
    render(<Radio {...defaultProps} className="custom-class" />);
    const radio = screen.getByRole("radio").closest("label");
    expect(radio).toHaveClass("custom-class");
  });

  it("renders with all size variants", () => {
    const sizes = ["xs", "sm", "md", "lg", "xl"];

    sizes.forEach((size) => {
      const { unmount } = render(
        <Radio {...defaultProps} size={size as any} />
      );
      const radio = screen.getByRole("radio").closest("label");
      expect(radio).toHaveClass(`size-${size}`);
      unmount();
    });
  });

  it("renders with all state variants", () => {
    const states = ["default", "disabled", "error"];

    states.forEach((state) => {
      const { unmount } = render(
        <Radio {...defaultProps} state={state as any} />
      );
      const radio = screen.getByRole("radio").closest("label");
      expect(radio).toHaveClass(`state-${state}`);
      unmount();
    });
  });

  it("handles label click correctly", () => {
    const handleChange = jest.fn();
    render(<Radio {...defaultProps} onChange={handleChange} />);

    const label = screen.getByText("Test Radio");
    fireEvent.click(label);

    expect(handleChange).toHaveBeenCalledWith(true);
  });

  it("maintains checked state when label is clicked", () => {
    const handleChange = jest.fn();
    render(<Radio {...defaultProps} checked={true} onChange={handleChange} />);

    const label = screen.getByText("Test Radio");
    fireEvent.click(label);

    expect(handleChange).toHaveBeenCalledWith(false);
  });
});
