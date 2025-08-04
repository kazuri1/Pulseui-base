import { render, screen, fireEvent } from "@testing-library/react";
import { CalendarTitle } from "./CalendarTitle";

describe("CalendarTitle", () => {
  const mockOnClick = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the children correctly", () => {
    render(<CalendarTitle>January 2022</CalendarTitle>);
    expect(screen.getByText("January 2022")).toBeInTheDocument();
  });

  it("renders as a div when no onClick is provided", () => {
    render(<CalendarTitle>January 2022</CalendarTitle>);
    const element = screen.getByText("January 2022");
    expect(element.tagName).toBe("DIV");
  });

  it("renders as a button when onClick is provided", () => {
    render(<CalendarTitle onClick={mockOnClick}>January 2022</CalendarTitle>);
    const element = screen.getByRole("button");
    expect(element).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    render(<CalendarTitle onClick={mockOnClick}>January 2022</CalendarTitle>);
    fireEvent.click(screen.getByRole("button"));
    expect(mockOnClick).toHaveBeenCalled();
  });

  it("does not call onClick when disabled", () => {
    render(
      <CalendarTitle onClick={mockOnClick} disabled={true}>
        January 2022
      </CalendarTitle>
    );
    fireEvent.click(screen.getByRole("button"));
    expect(mockOnClick).not.toHaveBeenCalled();
  });

  it("applies correct classes for different types", () => {
    const { rerender } = render(
      <CalendarTitle type="titles">January 2022</CalendarTitle>
    );
    expect(screen.getByText("January 2022")).toHaveClass("type-titles");

    rerender(<CalendarTitle type="day">Su</CalendarTitle>);
    expect(screen.getByText("Su")).toHaveClass("type-day");
  });

  it("applies correct classes for different states", () => {
    const { rerender } = render(
      <CalendarTitle state="default">January 2022</CalendarTitle>
    );
    expect(screen.getByText("January 2022")).toHaveClass("state-default");

    rerender(<CalendarTitle state="hover">January 2022</CalendarTitle>);
    expect(screen.getByText("January 2022")).toHaveClass("state-hover");
  });

  it("applies correct classes for different sizes", () => {
    const { rerender } = render(
      <CalendarTitle size="xs">January 2022</CalendarTitle>
    );
    expect(screen.getByText("January 2022")).toHaveClass("size-xs");

    rerender(<CalendarTitle size="lg">January 2022</CalendarTitle>);
    expect(screen.getByText("January 2022")).toHaveClass("size-lg");
  });

  it("applies disabled class when disabled", () => {
    render(<CalendarTitle disabled={true}>January 2022</CalendarTitle>);
    expect(screen.getByText("January 2022")).toHaveClass("stateDisabled");
  });

  it("has correct accessibility attributes when interactive", () => {
    render(
      <CalendarTitle onClick={mockOnClick} id="test-calendar-title">
        January 2022
      </CalendarTitle>
    );
    const button = screen.getByRole("button");
    expect(button).toHaveAttribute("id", "test-calendar-title");
    expect(button).toHaveAttribute("type", "button");
  });

  it("renders with custom className", () => {
    render(
      <CalendarTitle className="custom-class">January 2022</CalendarTitle>
    );
    expect(screen.getByText("January 2022")).toHaveClass("custom-class");
  });

  it("renders day type correctly", () => {
    render(<CalendarTitle type="day">Su</CalendarTitle>);
    const element = screen.getByText("Su");
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass("type-day");
  });

  it("renders as input when editable and type is day", () => {
    const mockOnChange = jest.fn();
    render(
      <CalendarTitle type="day" editable={true} onChange={mockOnChange}>
        Su
      </CalendarTitle>
    );
    const input = screen.getByDisplayValue("Su");
    expect(input).toBeInTheDocument();
    expect(input.tagName).toBe("INPUT");
  });

  it("calls onChange when editable input changes", () => {
    const mockOnChange = jest.fn();
    render(
      <CalendarTitle type="day" editable={true} onChange={mockOnChange}>
        Su
      </CalendarTitle>
    );
    const input = screen.getByDisplayValue("Su");
    fireEvent.change(input, { target: { value: "Mo" } });
    expect(mockOnChange).toHaveBeenCalledWith("Mo");
  });

  it("does not render as input when editable but type is not day", () => {
    const mockOnChange = jest.fn();
    render(
      <CalendarTitle type="titles" editable={true} onChange={mockOnChange}>
        January 2022
      </CalendarTitle>
    );
    const element = screen.getByText("January 2022");
    expect(element.tagName).toBe("DIV");
  });

  it("applies editable class when editable", () => {
    render(
      <CalendarTitle type="day" editable={true}>
        Su
      </CalendarTitle>
    );
    const input = screen.getByDisplayValue("Su");
    expect(input).toHaveClass("editable");
  });
});
