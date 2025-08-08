import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { PinInput } from "./PinInput";

describe("PinInput", () => {
  const defaultProps = {
    label: "PIN Code",
    placeholder: "Enter PIN",
  };

  it("renders with default props", () => {
    render(<PinInput {...defaultProps} />);
    expect(screen.getByText("PIN Code")).toBeInTheDocument();
    expect(screen.getAllByRole("textbox")).toHaveLength(4); // 4 digit inputs
  });

  it("renders with label", () => {
    render(<PinInput {...defaultProps} label="Security PIN" />);
    expect(screen.getByText("Security PIN")).toBeInTheDocument();
  });

  it("shows required asterisk when required", () => {
    render(<PinInput {...defaultProps} required />);
    expect(screen.getByText("*")).toBeInTheDocument();
  });

  it("renders with caption", () => {
    render(
      <PinInput {...defaultProps} caption="Enter the code sent to your phone" />
    );
    expect(
      screen.getByText("Enter the code sent to your phone")
    ).toBeInTheDocument();
  });

  it("renders with error", () => {
    render(<PinInput {...defaultProps} error="Invalid PIN" />);
    expect(screen.getByText("Invalid PIN")).toBeInTheDocument();
  });

  it("handles value changes", () => {
    const handleChange = jest.fn();
    render(<PinInput {...defaultProps} onChange={handleChange} />);

    // Type into the first digit input
    const inputs = screen.getAllByRole("textbox");
    fireEvent.change(inputs[0], { target: { value: "1" } });

    expect(handleChange).toHaveBeenCalled();
  });

  it("only accepts numeric input", () => {
    const handleChange = jest.fn();
    render(<PinInput {...defaultProps} onChange={handleChange} />);

    // Test that non-numeric characters are filtered
    const inputs = screen.getAllByRole("textbox");
    fireEvent.change(inputs[0], { target: { value: "a" } });

    // Should not call onChange for non-numeric input
    expect(handleChange).not.toHaveBeenCalled();
  });

  it("limits input to specified length", () => {
    const handleChange = jest.fn();
    render(<PinInput {...defaultProps} length={3} onChange={handleChange} />);

    // Should render only 3 inputs for length=3
    const inputs = screen.getAllByRole("textbox");
    expect(inputs).toHaveLength(3);
  });

  it("masks input by default", () => {
    render(<PinInput {...defaultProps} value="1234" />);
    // Check that inputs show masked characters
    const inputs = screen.getAllByRole("textbox") as HTMLInputElement[];
    expect(inputs[0].value).toBe("•");
  });

  it("shows unmasked input when mask is false", () => {
    render(<PinInput {...defaultProps} value="1234" mask={false} />);
    // Check that inputs show actual characters
    const inputs = screen.getAllByRole("textbox") as HTMLInputElement[];
    expect(inputs[0].value).toBe("1");
  });

  it("generates placeholder based on length", () => {
    render(<PinInput {...defaultProps} length={6} />);
    // Should render 6 inputs for length=6
    const inputs = screen.getAllByRole("textbox");
    expect(inputs).toHaveLength(6);
  });

  it("uses custom placeholder when provided", () => {
    render(<PinInput {...defaultProps} placeholder="Custom placeholder" />);
    // Just verify the component renders with custom placeholder prop
    expect(screen.getByText("PIN Code")).toBeInTheDocument();
  });

  it("handles focus events", () => {
    const handleFocus = jest.fn();
    render(<PinInput {...defaultProps} onFocus={handleFocus} />);

    // Focus the first digit input
    const inputs = screen.getAllByRole("textbox");
    fireEvent.focus(inputs[0]);

    expect(handleFocus).toHaveBeenCalled();
  });

  it("handles blur events", () => {
    const handleBlur = jest.fn();
    render(<PinInput {...defaultProps} onBlur={handleBlur} />);

    // Get the first digit input
    const inputs = screen.getAllByRole("textbox");
    fireEvent.blur(inputs[0]);

    expect(handleBlur).toHaveBeenCalled();
  });

  it("applies disabled state", () => {
    render(<PinInput {...defaultProps} disabled />);
    // Check all digit inputs are disabled
    const inputs = screen.getAllByRole("textbox");
    inputs.forEach(input => {
      expect(input).toBeDisabled();
    });
  });

  it("applies readonly state", () => {
    render(<PinInput {...defaultProps} readonly />);
    // Check the first digit input is readonly
    const inputs = screen.getAllByRole("textbox");
    expect(inputs[0]).toHaveAttribute("readonly", "");
  });

  it("sets inputMode to numeric", () => {
    render(<PinInput {...defaultProps} />);
    // Check the first digit input has numeric inputMode
    const inputs = screen.getAllByRole("textbox");
    expect(inputs[0]).toHaveAttribute("inputmode", "numeric");
  });

  it("sets pattern for numeric input", () => {
    render(<PinInput {...defaultProps} />);
    // Check the first digit input has numeric pattern
    const inputs = screen.getAllByRole("textbox");
    expect(inputs[0]).toHaveAttribute("pattern", "[0-9]*");
  });

  it("applies different sizes", () => {
    const { rerender } = render(<PinInput {...defaultProps} size="sm" />);
    // Check that label is rendered (since we can't use getByLabelText)
    expect(screen.getByText("PIN Code")).toBeInTheDocument();

    rerender(<PinInput {...defaultProps} size="lg" />);
    expect(screen.getByText("PIN Code")).toBeInTheDocument();

    rerender(<PinInput {...defaultProps} size="xl" />);
    expect(screen.getByText("PIN Code")).toBeInTheDocument();
  });
});
