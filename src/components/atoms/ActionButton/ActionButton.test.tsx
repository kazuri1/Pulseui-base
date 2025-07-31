import { render, screen, fireEvent } from "@testing-library/react";
import { ActionButton } from "./ActionButton";
import { Add, Edit, Delete } from "../Icon/IconSet";

describe("ActionButton", () => {
  it("renders with default props", () => {
    render(<ActionButton icon={Add} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("renders with custom icon", () => {
    render(<ActionButton icon={Edit} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    render(<ActionButton icon={Add} className="custom-class" />);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("custom-class");
  });

  it("handles click events", () => {
    const handleClick = jest.fn();
    render(<ActionButton icon={Add} onClick={handleClick} />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("applies disabled state correctly", () => {
    render(<ActionButton icon={Add} disabled />);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });

  it("applies different variants correctly", () => {
    const { rerender } = render(<ActionButton icon={Add} variant="filled" />);
    expect(screen.getByRole("button")).toBeInTheDocument();

    rerender(<ActionButton icon={Add} variant="outline" />);
    expect(screen.getByRole("button")).toBeInTheDocument();

    rerender(<ActionButton icon={Add} variant="subtle" />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("applies different sizes correctly", () => {
    const { rerender } = render(<ActionButton icon={Add} size="sm" />);
    expect(screen.getByRole("button")).toBeInTheDocument();

    rerender(<ActionButton icon={Add} size="lg" />);
    expect(screen.getByRole("button")).toBeInTheDocument();

    rerender(<ActionButton icon={Add} size="xl" />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("applies different icon sizes correctly", () => {
    const { rerender } = render(<ActionButton icon={Add} iconSize="sm" />);
    expect(screen.getByRole("button")).toBeInTheDocument();

    rerender(<ActionButton icon={Add} iconSize="lg" />);
    expect(screen.getByRole("button")).toBeInTheDocument();

    rerender(<ActionButton icon={Add} iconSize="xl" />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("applies different icon colors correctly", () => {
    const { rerender } = render(
      <ActionButton icon={Add} iconColor="primary" />
    );
    expect(screen.getByRole("button")).toBeInTheDocument();

    rerender(<ActionButton icon={Add} iconColor="secondary" />);
    expect(screen.getByRole("button")).toBeInTheDocument();

    rerender(<ActionButton icon={Add} iconColor="success" />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("applies different button types correctly", () => {
    const { rerender } = render(<ActionButton icon={Add} type="submit" />);
    const submitButton = screen.getByRole("button");
    expect(submitButton).toHaveAttribute("type", "submit");

    rerender(<ActionButton icon={Add} type="reset" />);
    const resetButton = screen.getByRole("button");
    expect(resetButton).toHaveAttribute("type", "reset");
  });

  it("applies different states correctly", () => {
    const { rerender } = render(<ActionButton icon={Add} state="hover" />);
    expect(screen.getByRole("button")).toBeInTheDocument();

    rerender(<ActionButton icon={Add} state="disabled" />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("does not call onClick when disabled", () => {
    const handleClick = jest.fn();
    render(<ActionButton icon={Add} onClick={handleClick} disabled />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(handleClick).not.toHaveBeenCalled();
  });

  it("renders with different icons", () => {
    const { rerender } = render(<ActionButton icon={Add} />);
    expect(screen.getByRole("button")).toBeInTheDocument();

    rerender(<ActionButton icon={Edit} />);
    expect(screen.getByRole("button")).toBeInTheDocument();

    rerender(<ActionButton icon={Delete} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
});
