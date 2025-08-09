import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Autocomplete } from "./Autocomplete";
import React from "react";

const mockOptions = [
  { value: "apple", label: "Apple", icon: "🍎" },
  { value: "banana", label: "Banana", icon: "🍌" },
  { value: "cherry", label: "Cherry", icon: "🍒" },
];

describe("Autocomplete", () => {
  it("renders with default props", () => {
    render(<Autocomplete options={mockOptions} />);
    expect(
      screen.getByPlaceholderText("Select an option...")
    ).toBeInTheDocument();
  });

  it("renders with custom placeholder", () => {
    render(<Autocomplete options={mockOptions} placeholder="Choose fruit" />);
    expect(screen.getByPlaceholderText("Choose fruit")).toBeInTheDocument();
  });

  it("shows dropdown when focused", async () => {
    const user = userEvent.setup();
    render(<Autocomplete options={mockOptions} />);

    const input = screen.getByPlaceholderText("Select an option...");
    await user.click(input);

    expect(screen.getByText("Apple")).toBeInTheDocument();
    expect(screen.getByText("Banana")).toBeInTheDocument();
    expect(screen.getByText("Cherry")).toBeInTheDocument();
  });

  it("filters options when typing", async () => {
    const user = userEvent.setup();
    render(<Autocomplete options={mockOptions} />);

    const input = screen.getByPlaceholderText("Select an option...");
    await user.click(input);
    await user.type(input, "ban");

    expect(screen.getByText("Banana")).toBeInTheDocument();
    expect(screen.queryByText("Apple")).not.toBeInTheDocument();
    expect(screen.queryByText("Cherry")).not.toBeInTheDocument();
  });

  it("selects option when clicked", async () => {
    const onSelect = jest.fn();
    const user = userEvent.setup();
    render(<Autocomplete options={mockOptions} onSelect={onSelect} />);

    const input = screen.getByPlaceholderText("Select an option...");
    await user.click(input);

    const option = screen.getByText("Apple");
    await user.click(option);

    expect(onSelect).toHaveBeenCalledWith(mockOptions[0]);
    expect(input).toHaveValue("Apple");
  });

  it("handles keyboard navigation", async () => {
    const user = userEvent.setup();
    render(<Autocomplete options={mockOptions} />);

    const input = screen.getByPlaceholderText("Select an option...");
    await user.click(input);

    // Ensure input is focused before keyboard navigation
    expect(input).toHaveFocus();

    // Press arrow down to highlight first option
    await user.keyboard("{ArrowDown}");
    const firstOption = screen.getByText("Apple").closest("div");
    expect(firstOption).toHaveClass("option");
    expect(firstOption).toHaveClass("highlighted");

    // Press arrow down to highlight second option
    await user.keyboard("{ArrowDown}");
    const secondOption = screen.getByText("Banana").closest("div");
    expect(secondOption).toHaveClass("option");
    expect(secondOption).toHaveClass("highlighted");

    // Press enter to select
    await user.keyboard("{Enter}");
    expect(input).toHaveValue("Banana");
  });

  it("closes dropdown when escape is pressed", async () => {
    const user = userEvent.setup();
    render(<Autocomplete options={mockOptions} />);

    const input = screen.getByPlaceholderText("Select an option...");
    await user.click(input);

    // Ensure input is focused and dropdown is open
    expect(input).toHaveFocus();
    expect(screen.getByText("Apple")).toBeInTheDocument();

    await user.keyboard("{Escape}");

    expect(screen.queryByText("Apple")).not.toBeInTheDocument();
  });

  it("shows no options message when no matches", async () => {
    const user = userEvent.setup();
    render(<Autocomplete options={mockOptions} />);

    const input = screen.getByPlaceholderText("Select an option...");
    await user.click(input);
    await user.type(input, "xyz");

    expect(screen.getByText("No options found")).toBeInTheDocument();
  });

  it("respects maxSuggestions limit", async () => {
    const manyOptions = [
      { value: "a", label: "A" },
      { value: "b", label: "B" },
      { value: "c", label: "C" },
      { value: "d", label: "D" },
      { value: "e", label: "E" },
    ];

    const user = userEvent.setup();
    render(<Autocomplete options={manyOptions} maxSuggestions={2} />);

    const input = screen.getByPlaceholderText("Select an option...");
    await user.click(input);

    expect(screen.getByText("A")).toBeInTheDocument();
    expect(screen.getByText("B")).toBeInTheDocument();
    expect(screen.queryByText("C")).not.toBeInTheDocument();
  });

  it("disables filtering when filterOptions is false", async () => {
    const user = userEvent.setup();
    render(<Autocomplete options={mockOptions} filterOptions={false} />);

    const input = screen.getByPlaceholderText("Select an option...");
    await user.click(input);
    await user.type(input, "xyz");

    // All options should still be visible
    expect(screen.getByText("Apple")).toBeInTheDocument();
    expect(screen.getByText("Banana")).toBeInTheDocument();
    expect(screen.getByText("Cherry")).toBeInTheDocument();
  });

  it("applies disabled state correctly", () => {
    render(<Autocomplete options={mockOptions} disabled />);

    const input = screen.getByPlaceholderText("Select an option...");
    expect(input).toBeDisabled();
  });

  it("applies different sizes correctly", () => {
    const { rerender } = render(
      <Autocomplete options={mockOptions} size="sm" />
    );
    expect(
      screen.getByPlaceholderText("Select an option...")
    ).toBeInTheDocument();

    rerender(<Autocomplete options={mockOptions} size="lg" />);
    expect(
      screen.getByPlaceholderText("Select an option...")
    ).toBeInTheDocument();
  });

  it("calls onChange when input value changes", async () => {
    const onChange = jest.fn();
    const user = userEvent.setup();

    render(<Autocomplete options={mockOptions} onChange={onChange} />);

    const input = screen.getByPlaceholderText("Select an option...");
    await user.type(input, "test");

    expect(onChange).toHaveBeenCalledWith("test");
  });

  it("handles option with icon", async () => {
    const user = userEvent.setup();
    render(<Autocomplete options={mockOptions} />);

    const input = screen.getByPlaceholderText("Select an option...");
    await user.click(input);

    expect(screen.getByText("🍎")).toBeInTheDocument();
    expect(screen.getByText("🍌")).toBeInTheDocument();
  });
});
