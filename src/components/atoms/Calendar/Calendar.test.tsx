import { render, screen, fireEvent } from "@testing-library/react";
import { Calendar } from ".";

describe("Calendar", () => {
  const mockOnDateSelect = jest.fn();
  const mockOnMonthChange = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the calendar with default props", () => {
    render(<Calendar date={new Date(2022, 0, 1)} />);

    // Check for header
    expect(screen.getByText("January 2022")).toBeInTheDocument();

    // Check for navigation buttons
    expect(screen.getByLabelText("Previous month")).toBeInTheDocument();
    expect(screen.getByLabelText("Next month")).toBeInTheDocument();

    // Check for day labels
    expect(screen.getByText("Su")).toBeInTheDocument();
    expect(screen.getByText("Sa")).toBeInTheDocument();

    // Check for some dates (using middle dates to avoid conflicts)
    expect(screen.getByText("15")).toBeInTheDocument();
  });

  it("renders without navigation when showNavigation is false", () => {
    render(<Calendar date={new Date(2022, 0, 1)} showNavigation={false} />);

    expect(screen.queryByLabelText("Previous month")).not.toBeInTheDocument();
    expect(screen.queryByLabelText("Next month")).not.toBeInTheDocument();
  });

  it("renders without day labels when showDayLabels is false", () => {
    render(<Calendar date={new Date(2022, 0, 1)} showDayLabels={false} />);

    expect(screen.queryByText("Su")).not.toBeInTheDocument();
    expect(screen.queryByText("Sa")).not.toBeInTheDocument();
  });

  it("calls onDateSelect when a date is clicked", () => {
    render(
      <Calendar date={new Date(2022, 0, 1)} onDateSelect={mockOnDateSelect} />
    );

    // Find the button containing "15" (middle of month, no conflicts)
    const dateButton = screen.getByText("15").closest('button');
    fireEvent.click(dateButton!);

    expect(mockOnDateSelect).toHaveBeenCalledWith(expect.any(Date));
  });

  it("calls onMonthChange when navigation buttons are clicked", () => {
    render(
      <Calendar date={new Date(2022, 0, 1)} onMonthChange={mockOnMonthChange} />
    );

    const nextButton = screen.getByLabelText("Next month");
    fireEvent.click(nextButton);

    expect(mockOnMonthChange).toHaveBeenCalledWith(expect.any(Date));
  });

  it("does not call onDateSelect when disabled", () => {
    render(
      <Calendar
        date={new Date(2022, 0, 1)}
        onDateSelect={mockOnDateSelect}
        disabled={true}
      />
    );

    // Find the button containing "15" (middle of month, no conflicts)
    const dateButton = screen.getByText("15").closest('button');
    fireEvent.click(dateButton!);

    expect(mockOnDateSelect).not.toHaveBeenCalled();
  });

  it("applies correct classes for different sizes", () => {
    const { rerender } = render(
      <Calendar date={new Date(2022, 0, 1)} size="xs" />
    );
    expect(screen.getByText("January 2022").closest("div")).toHaveClass(
      "size-xs"
    );

    rerender(<Calendar date={new Date(2022, 0, 1)} size="lg" />);
    expect(screen.getByText("January 2022").closest("div")).toHaveClass(
      "size-lg"
    );
  });

  it("renders with custom day labels", () => {
    const customLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    render(<Calendar date={new Date(2022, 0, 1)} dayLabels={customLabels} />);

    expect(screen.getByText("Sun")).toBeInTheDocument();
    expect(screen.getByText("Sat")).toBeInTheDocument();
  });

  it("highlights selected date", () => {
    const selectedDate = new Date(2022, 0, 15);
    render(
      <Calendar date={new Date(2022, 0, 1)} selectedDate={selectedDate} />
    );

    const selectedDateButton = screen.getByText("15").closest('button');
    expect(selectedDateButton).toHaveClass("active-selected");
  });

  it("shows today indicator", () => {
    const today = new Date();
    render(<Calendar date={today} />);

    const todayButton = screen.getByText(today.getDate().toString()).closest('button');
    expect(todayButton).toHaveClass("variant-holiday");
  });

  it("renders range selection correctly", () => {
    const rangeStart = new Date(2022, 0, 10);
    const rangeEnd = new Date(2022, 0, 15);

    render(
      <Calendar
        date={new Date(2022, 0, 1)}
        rangeStart={rangeStart}
        rangeEnd={rangeEnd}
      />
    );

    const startDateButton = screen.getByText("10").closest('button');
    const endDateButton = screen.getByText("15").closest('button');

    expect(startDateButton).toHaveClass("active-initial");
    expect(endDateButton).toHaveClass("active-end");
  });

  it("renders disabled state correctly", () => {
    render(<Calendar date={new Date(2022, 0, 1)} disabled={true} />);

    const calendar = screen.getByText("January 2022").closest(".calendar");
    expect(calendar).toHaveClass("disabled");
  });

  it("renders dates from previous and next months as disabled", () => {
    render(<Calendar date={new Date(2022, 0, 1)} />);

    // December 2021 dates should be disabled - find all "26" and get the disabled one
    const allDates26 = screen.getAllByText("26");
    const prevMonthDate = allDates26.find(date => date.closest('button')?.classList.contains('variant-disabled'));
    expect(prevMonthDate?.closest('button')).toHaveClass("variant-disabled");

    // February 2022 dates should be disabled - find all "1" and get the disabled one
    const allDates1 = screen.getAllByText("1");
    const nextMonthDate = allDates1.find(date => date.closest('button')?.classList.contains('variant-disabled'));
    expect(nextMonthDate?.closest('button')).toHaveClass("variant-disabled");
  });

  it("has correct accessibility attributes", () => {
    render(<Calendar date={new Date(2022, 0, 1)} id="test-calendar" />);

    const calendar = screen.getByText("January 2022").closest(".calendar");
    expect(calendar).toHaveAttribute("id", "test-calendar");
  });

  it("renders with custom className", () => {
    render(
      <Calendar date={new Date(2022, 0, 1)} className="custom-calendar" />
    );

    const calendar = screen.getByText("January 2022").closest(".calendar");
    expect(calendar).toHaveClass("custom-calendar");
  });
});
