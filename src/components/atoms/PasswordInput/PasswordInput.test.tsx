import { render, screen, fireEvent } from "@testing-library/react";
import { PasswordInput } from "./PasswordInput";

describe("PasswordInput", () => {
  it("renders with label", () => {
    render(<PasswordInput label="Password" />);
    expect(screen.getByText("Password")).toBeInTheDocument();
  });

  it("renders with placeholder", () => {
    render(<PasswordInput placeholder="Enter password" />);
    expect(screen.getByPlaceholderText("Enter password")).toBeInTheDocument();
  });

  it("renders with required indicator", () => {
    render(<PasswordInput label="Password" required />);
    expect(screen.getByText("*")).toBeInTheDocument();
  });

  it("renders with caption", () => {
    render(<PasswordInput caption="Must be 8 characters" />);
    expect(screen.getByText("Must be 8 characters")).toBeInTheDocument();
  });

  it("renders with error", () => {
    render(<PasswordInput error="Password is required" />);
    expect(screen.getByText("Password is required")).toBeInTheDocument();
  });

  it("renders password toggle button", () => {
    render(<PasswordInput />);
    expect(
      screen.getByRole("button", { name: /show password/i })
    ).toBeInTheDocument();
  });

  it("toggles password visibility when button is clicked", () => {
    render(<PasswordInput />);
    const toggleButton = screen.getByRole("button", { name: /show password/i });
    const input = screen.getByRole("textbox");

    // Initially should be password type
    expect(input).toHaveAttribute("type", "password");

    // Click to show password
    fireEvent.click(toggleButton);
    expect(input).toHaveAttribute("type", "text");
    expect(
      screen.getByRole("button", { name: /hide password/i })
    ).toBeInTheDocument();

    // Click to hide password
    fireEvent.click(toggleButton);
    expect(input).toHaveAttribute("type", "password");
    expect(
      screen.getByRole("button", { name: /show password/i })
    ).toBeInTheDocument();
  });

  it("does not render toggle button when showPasswordToggle is false", () => {
    render(<PasswordInput showPasswordToggle={false} />);
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  it("does not render toggle button when disabled", () => {
    render(<PasswordInput disabled />);
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  it("calls onChange when input value changes", () => {
    const handleChange = jest.fn();
    render(<PasswordInput onChange={handleChange} />);

    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "password123" } });

    expect(handleChange).toHaveBeenCalledWith("password123");
  });

  it("supports controlled password visibility", () => {
    const handleVisibilityChange = jest.fn();
    render(
      <PasswordInput
        passwordVisible={false}
        onPasswordVisibilityChange={handleVisibilityChange}
      />
    );

    const toggleButton = screen.getByRole("button", { name: /show password/i });
    fireEvent.click(toggleButton);

    expect(handleVisibilityChange).toHaveBeenCalledWith(true);
  });

  it("renders with value", () => {
    render(<PasswordInput value="secret123" />);
    expect(screen.getByDisplayValue("secret123")).toBeInTheDocument();
  });

  it("renders disabled state", () => {
    render(<PasswordInput disabled value="secret123" />);
    const input = screen.getByDisplayValue("secret123");
    expect(input).toBeDisabled();
  });
});
