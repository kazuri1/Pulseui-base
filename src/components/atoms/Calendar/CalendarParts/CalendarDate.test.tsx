import { render, screen, fireEvent } from "@testing-library/react";
import { CalendarDate } from "./CalendarDate";

describe("CalendarDate", () => {
  const mockDate = new Date(2024, 0, 28);
  const mockOnClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the date number correctly", () => {
    render(<CalendarDate date={mockDate} />);
    expect(screen.getByText("28")).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    render(<CalendarDate date={mockDate} onClick={mockOnClick} />);
    fireEvent.click(screen.getByRole("button"));
    expect(mockOnClick).toHaveBeenCalledWith(mockDate);
  });

  it("does not call onClick when disabled", () => {
    render(
      <CalendarDate date={mockDate} onClick={mockOnClick} disabled={true} />
    );
    fireEvent.click(screen.getByRole("button"));
    expect(mockOnClick).not.toHaveBeenCalled();
  });

  it("shows indicator when indicator prop is true", () => {
    render(<CalendarDate date={mockDate} indicator={true} />);
    const indicator = screen.getByRole("button").querySelector(".indicator");
    expect(indicator).toBeInTheDocument();
  });

  it("does not show indicator when indicator prop is false", () => {
    render(<CalendarDate date={mockDate} indicator={false} />);
    const indicator = screen.getByRole("button").querySelector(".indicator");
    expect(indicator).not.toBeInTheDocument();
  });

  it("applies correct classes for different variants", () => {
    const { rerender } = render(
      <CalendarDate date={mockDate} variant="default" />
    );
    expect(screen.getByRole("button")).toHaveClass("variant-default");

    rerender(<CalendarDate date={mockDate} variant="holiday" />);
    expect(screen.getByRole("button")).toHaveClass("variant-holiday");

    rerender(<CalendarDate date={mockDate} variant="disabled" />);
    expect(screen.getByRole("button")).toHaveClass("variant-disabled");

    rerender(<CalendarDate date={mockDate} variant="text" />);
    expect(screen.getByRole("button")).toHaveClass("variant-text");
  });

  it("applies correct classes for different active states", () => {
    const { rerender } = render(<CalendarDate date={mockDate} active="off" />);
    expect(screen.getByRole("button")).toHaveClass("active-off");

    rerender(<CalendarDate date={mockDate} active="selected" />);
    expect(screen.getByRole("button")).toHaveClass("active-selected");

    rerender(<CalendarDate date={mockDate} active="passive" />);
    expect(screen.getByRole("button")).toHaveClass("active-passive");
  });

  it("applies correct classes for different sizes", () => {
    const { rerender } = render(<CalendarDate date={mockDate} size="xs" />);
    expect(screen.getByRole("button")).toHaveClass("size-xs");

    rerender(<CalendarDate date={mockDate} size="lg" />);
    expect(screen.getByRole("button")).toHaveClass("size-lg");
  });

  it("applies disabled class when disabled", () => {
    render(<CalendarDate date={mockDate} disabled={true} />);
    expect(screen.getByRole("button")).toHaveClass("stateDisabled");
  });

  it("has correct accessibility attributes", () => {
    render(<CalendarDate date={mockDate} id="test-calendar-date" />);
    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("id", "test-calendar-date");
    expect(button).toHaveAttribute("type", "button");
  });

  it("renders with custom className", () => {
    render(<CalendarDate date={mockDate} className="custom-class" />);
    expect(screen.getByRole("button")).toHaveClass("custom-class");
  });

  it("applies weekend class for Saturday and Sunday dates", () => {
    // Saturday (day 6)
    const saturdayDate = new Date(2024, 0, 27); // January 27, 2024 is a Saturday
    const { rerender } = render(<CalendarDate date={saturdayDate} />);
    expect(screen.getByRole("button")).toHaveClass("weekend");

    // Sunday (day 0)
    const sundayDate = new Date(2024, 0, 28); // January 28, 2024 is a Sunday
    rerender(<CalendarDate date={sundayDate} />);
    expect(screen.getByRole("button")).toHaveClass("weekend");

    // Monday (day 1) - should not have weekend class
    const mondayDate = new Date(2024, 0, 29); // January 29, 2024 is a Monday
    rerender(<CalendarDate date={mondayDate} />);
    expect(screen.getByRole("button")).not.toHaveClass("weekend");
  });
});
