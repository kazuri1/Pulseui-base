import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { DatePicker } from "./DatePicker";

describe("DatePicker", () => {
  const defaultProps = {
    label: "Date picker",
    placeholder: "Pick a date",
  };

  it("renders with default props", () => {
    render(<DatePicker {...defaultProps} />);

    expect(screen.getByText("Date picker")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Pick a date")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Open calendar" })
    ).toBeInTheDocument();
  });

  it("renders with required indicator", () => {
    render(<DatePicker {...defaultProps} required={true} />);

    expect(screen.getByText("*")).toBeInTheDocument();
    expect(screen.getByText("*")).toHaveClass("required");
  });

  it("renders with custom label", () => {
    render(<DatePicker label="Select date" placeholder="Pick a date" />);

    expect(screen.getByText("Select date")).toBeInTheDocument();
  });

  it("renders with custom placeholder", () => {
    render(<DatePicker label="Date picker" placeholder="Choose a date" />);

    expect(screen.getByPlaceholderText("Choose a date")).toBeInTheDocument();
  });

  it("renders with default value", () => {
    const defaultValue = new Date("2025-08-15");
    render(<DatePicker {...defaultProps} defaultValue={defaultValue} />);

    const input = screen.getByPlaceholderText("Pick a date");
    expect(input).toHaveValue("08/15/2025");
  });

  it("renders with controlled value", () => {
    const value = new Date("2025-08-20");
    render(<DatePicker {...defaultProps} value={value} />);

    const input = screen.getByPlaceholderText("Pick a date");
    expect(input).toHaveValue("08/20/2025");
  });

  it("renders disabled state", () => {
    render(<DatePicker {...defaultProps} disabled={true} />);

    const input = screen.getByPlaceholderText("Pick a date");
    const button = screen.getByRole("button", { name: "Open calendar" });

    expect(input).toBeDisabled();
    expect(button).toBeDisabled();
  });

  it("renders error state", () => {
    render(
      <DatePicker {...defaultProps} error={true} errorMessage="Invalid date" />
    );

    expect(screen.getByText("Invalid date")).toBeInTheDocument();
    expect(screen.getByText("Invalid date")).toHaveClass("errorMessage");
  });

  it("opens calendar on input click", () => {
    render(<DatePicker {...defaultProps} />);

    const input = screen.getByPlaceholderText("Pick a date");
    fireEvent.click(input);

    expect(screen.getByText("August 2025")).toBeInTheDocument();
  });

  it("opens calendar on calendar button click", () => {
    render(<DatePicker {...defaultProps} />);

    const button = screen.getByRole("button", { name: "Open calendar" });
    fireEvent.click(button);

    expect(screen.getByText("August 2025")).toBeInTheDocument();
  });

  it("opens calendar on input focus when showOnFocus is true", () => {
    render(<DatePicker {...defaultProps} showOnFocus={true} />);

    const input = screen.getByPlaceholderText("Pick a date");
    fireEvent.focus(input);

    expect(screen.getByText("August 2025")).toBeInTheDocument();
  });

  it("does not open calendar on input focus when showOnFocus is false", () => {
    render(<DatePicker {...defaultProps} showOnFocus={false} />);

    const input = screen.getByPlaceholderText("Pick a date");
    fireEvent.focus(input);

    expect(screen.queryByText("August 2025")).not.toBeInTheDocument();
  });

  it("calls onChange when date is selected", () => {
    const handleChange = jest.fn();
    render(<DatePicker {...defaultProps} onChange={handleChange} />);

    const input = screen.getByPlaceholderText("Pick a date");
    fireEvent.click(input);

    // Click on a date (15th of the month)
    const dateButton = screen.getByRole("button", { name: /15.*August 2025/ });
    fireEvent.click(dateButton);

    expect(handleChange).toHaveBeenCalledWith(expect.any(Date));
  });

  it("calls onOpenChange when calendar opens/closes", () => {
    const handleOpenChange = jest.fn();
    render(<DatePicker {...defaultProps} onOpenChange={handleOpenChange} />);

    const input = screen.getByPlaceholderText("Pick a date");
    fireEvent.click(input);

    expect(handleOpenChange).toHaveBeenCalledWith(true);
  });

  it("calls onInputChange when input value changes", () => {
    const handleInputChange = jest.fn();
    render(<DatePicker {...defaultProps} onInputChange={handleInputChange} />);

    const input = screen.getByPlaceholderText("Pick a date");
    fireEvent.change(input, { target: { value: "12/25/2025" } });

    expect(handleInputChange).toHaveBeenCalledWith("12/25/2025");
  });

  it("closes calendar when date is selected and closeOnSelect is true", () => {
    render(<DatePicker {...defaultProps} closeOnSelect={true} />);

    const input = screen.getByPlaceholderText("Pick a date");
    fireEvent.click(input);

    // Calendar should be open
    expect(screen.getByText("August 2025")).toBeInTheDocument();

    // Click on a date
    const dateButton = screen.getByRole("button", { name: /15.*August 2025/ });
    fireEvent.click(dateButton);

    // Calendar should be closed
    expect(screen.queryByText("August 2025")).not.toBeInTheDocument();
  });

  it("keeps calendar open when date is selected and closeOnSelect is false", () => {
    render(<DatePicker {...defaultProps} closeOnSelect={false} />);

    const input = screen.getByPlaceholderText("Pick a date");
    fireEvent.click(input);

    // Calendar should be open
    expect(screen.getByText("August 2025")).toBeInTheDocument();

    // Click on a date
    const dateButton = screen.getByRole("button", { name: /15.*August 2025/ });
    fireEvent.click(dateButton);

    // Calendar should still be open
    expect(screen.getByText("August 2025")).toBeInTheDocument();
  });

  it("navigates to previous month", () => {
    render(<DatePicker {...defaultProps} />);

    const input = screen.getByPlaceholderText("Pick a date");
    fireEvent.click(input);

    // Should show current month
    expect(screen.getByText("August 2025")).toBeInTheDocument();

    // Click previous month button
    const prevButton = screen.getByRole("button", { name: "Previous month" });
    fireEvent.click(prevButton);

    // Should show previous month
    expect(screen.getByText("July 2025")).toBeInTheDocument();
  });

  it("navigates to next month", () => {
    render(<DatePicker {...defaultProps} />);

    const input = screen.getByPlaceholderText("Pick a date");
    fireEvent.click(input);

    // Should show current month
    expect(screen.getByText("August 2025")).toBeInTheDocument();

    // Click next month button
    const nextButton = screen.getByRole("button", { name: "Next month" });
    fireEvent.click(nextButton);

    // Should show next month
    expect(screen.getByText("September 2025")).toBeInTheDocument();
  });

  it("highlights weekends when highlightWeekends is true", () => {
    render(<DatePicker {...defaultProps} highlightWeekends={true} />);

    const input = screen.getByPlaceholderText("Pick a date");
    fireEvent.click(input);

    // Weekend dates should have weekend class
    const weekendDates = screen.getAllByText(/2|3|9|10|16|17|23|24|30|31/);
    weekendDates.forEach((date) => {
      if (
        date.textContent &&
        ["2", "3", "9", "10", "16", "17", "23", "24", "30", "31"].includes(
          date.textContent
        )
      ) {
        expect(date).toHaveClass("weekend");
      }
    });
  });

  it("does not highlight weekends when highlightWeekends is false", () => {
    render(<DatePicker {...defaultProps} highlightWeekends={false} />);

    const input = screen.getByPlaceholderText("Pick a date");
    fireEvent.click(input);

    // Weekend dates should not have weekend class
    const weekendDates = screen.getAllByText(/2|3|9|10|16|17|23|24|30|31/);
    weekendDates.forEach((date) => {
      if (
        date.textContent &&
        ["2", "3", "9", "10", "16", "17", "23", "24", "30", "31"].includes(
          date.textContent
        )
      ) {
        expect(date).not.toHaveClass("weekend");
      }
    });
  });

  it("shows today's date highlighted when showToday is true", () => {
    render(<DatePicker {...defaultProps} showToday={true} />);

    const input = screen.getByPlaceholderText("Pick a date");
    fireEvent.click(input);

    // Today's date should have today class
    const today = new Date();
    const todayButton = screen.getByRole("button", {
      name: new RegExp(today.getDate().toString()),
    });
    expect(todayButton).toHaveClass("today");
  });

  it("does not show today's date highlighted when showToday is false", () => {
    render(<DatePicker {...defaultProps} showToday={false} />);

    const input = screen.getByPlaceholderText("Pick a date");
    fireEvent.click(input);

    // Today's date should not have today class
    const today = new Date();
    const todayButton = screen.getByRole("button", {
      name: new RegExp(today.getDate().toString()),
    });
    expect(todayButton).not.toHaveClass("today");
  });

  it("respects minDate constraint", () => {
    const minDate = new Date("2025-08-10");
    render(<DatePicker {...defaultProps} minDate={minDate} />);

    const input = screen.getByPlaceholderText("Pick a date");
    fireEvent.click(input);

    // Dates before minDate should be disabled
    const disabledDates = screen.getAllByRole("button", {
      name: /1|2|3|4|5|6|7|8|9/,
    });
    disabledDates.forEach((date) => {
      if (parseInt(date.textContent || "0") < 10) {
        expect(date).toBeDisabled();
      }
    });
  });

  it("respects maxDate constraint", () => {
    const maxDate = new Date("2025-08-25");
    render(<DatePicker {...defaultProps} maxDate={maxDate} />);

    const input = screen.getByPlaceholderText("Pick a date");
    fireEvent.click(input);

    // Dates after maxDate should be disabled
    const disabledDates = screen.getAllByRole("button", {
      name: /26|27|28|29|30|31/,
    });
    disabledDates.forEach((date) => {
      if (parseInt(date.textContent || "0") > 25) {
        expect(date).toBeDisabled();
      }
    });
  });

  it("closes calendar when clicking outside", async () => {
    render(<DatePicker {...defaultProps} />);

    const input = screen.getByPlaceholderText("Pick a date");
    fireEvent.click(input);

    // Calendar should be open
    expect(screen.getByText("August 2025")).toBeInTheDocument();

    // Click outside
    fireEvent.mouseDown(document.body);

    // Calendar should be closed
    await waitFor(() => {
      expect(screen.queryByText("August 2025")).not.toBeInTheDocument();
    });
  });

  it("closes calendar when pressing Escape key", async () => {
    render(<DatePicker {...defaultProps} />);

    const input = screen.getByPlaceholderText("Pick a date");
    fireEvent.click(input);

    // Calendar should be open
    expect(screen.getByText("August 2025")).toBeInTheDocument();

    // Press Escape
    fireEvent.keyDown(document, { key: "Escape" });

    // Calendar should be closed
    await waitFor(() => {
      expect(screen.queryByText("August 2025")).not.toBeInTheDocument();
    });
  });
});
