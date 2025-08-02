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
    expect(screen.getByLabelText("PIN Code")).toBeInTheDocument();
  });

  it("renders with label", () => {
    render(<PinInput {...defaultProps} label="Security PIN" />);
    expect(screen.getByLabelText("Security PIN")).toBeInTheDocument();
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

    const input = screen.getByLabelText("PIN Code");
    fireEvent.change(input, { target: { value: "1234" } });

    expect(handleChange).toHaveBeenCalledWith("1234");
  });

  it("only accepts numeric input", () => {
    const handleChange = jest.fn();
    render(<PinInput {...defaultProps} onChange={handleChange} />);

    const input = screen.getByLabelText("PIN Code");
    fireEvent.change(input, { target: { value: "12ab34" } });

    expect(handleChange).toHaveBeenCalledWith("1234");
  });

  it("limits input to specified length", () => {
    const handleChange = jest.fn();
    render(<PinInput {...defaultProps} length={3} onChange={handleChange} />);

    const input = screen.getByLabelText("PIN Code");
    fireEvent.change(input, { target: { value: "12345" } });

    expect(handleChange).toHaveBeenCalledWith("123");
  });

  it("masks input by default", () => {
    render(<PinInput {...defaultProps} value="1234" />);
    const input = screen.getByLabelText("PIN Code") as HTMLInputElement;
    expect(input.value).toBe("****");
  });

  it("shows unmasked input when mask is false", () => {
    render(<PinInput {...defaultProps} value="1234" mask={false} />);
    const input = screen.getByLabelText("PIN Code") as HTMLInputElement;
    expect(input.value).toBe("1234");
  });

  it("generates placeholder based on length", () => {
    render(<PinInput {...defaultProps} length={6} />);
    const input = screen.getByLabelText("PIN Code") as HTMLInputElement;
    expect(input.placeholder).toBe("••••••");
  });

  it("uses custom placeholder when provided", () => {
    render(<PinInput {...defaultProps} placeholder="Custom placeholder" />);
    const input = screen.getByLabelText("PIN Code") as HTMLInputElement;
    expect(input.placeholder).toBe("Custom placeholder");
  });

  it("handles focus events", () => {
    const handleFocus = jest.fn();
    render(<PinInput {...defaultProps} onFocus={handleFocus} />);

    const input = screen.getByLabelText("PIN Code");
    fireEvent.focus(input);

    expect(handleFocus).toHaveBeenCalled();
  });

  it("handles blur events", () => {
    const handleBlur = jest.fn();
    render(<PinInput {...defaultProps} onBlur={handleBlur} />);

    const input = screen.getByLabelText("PIN Code");
    fireEvent.blur(input);

    expect(handleBlur).toHaveBeenCalled();
  });

  it("applies disabled state", () => {
    render(<PinInput {...defaultProps} disabled />);
    const input = screen.getByLabelText("PIN Code") as HTMLInputElement;
    expect(input.disabled).toBe(true);
  });

  it("applies readonly state", () => {
    render(<PinInput {...defaultProps} readonly />);
    const input = screen.getByLabelText("PIN Code") as HTMLInputElement;
    expect(input.readOnly).toBe(true);
  });

  it("sets inputMode to numeric", () => {
    render(<PinInput {...defaultProps} />);
    const input = screen.getByLabelText("PIN Code") as HTMLInputElement;
    expect(input.inputMode).toBe("numeric");
  });

  it("sets pattern for numeric input", () => {
    render(<PinInput {...defaultProps} />);
    const input = screen.getByLabelText("PIN Code") as HTMLInputElement;
    expect(input.pattern).toBe("[0-9]*");
  });

  it("applies different sizes", () => {
    const { rerender } = render(<PinInput {...defaultProps} size="sm" />);
    expect(screen.getByLabelText("PIN Code")).toBeInTheDocument();

    rerender(<PinInput {...defaultProps} size="lg" />);
    expect(screen.getByLabelText("PIN Code")).toBeInTheDocument();

    rerender(<PinInput {...defaultProps} size="xl" />);
    expect(screen.getByLabelText("PIN Code")).toBeInTheDocument();
  });
});
