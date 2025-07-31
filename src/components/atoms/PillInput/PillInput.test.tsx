import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { PillInput } from "./PillInput";

describe("PillInput", () => {
  it("renders with default props", () => {
    render(<PillInput />);
    expect(screen.getByPlaceholderText("Add tags...")).toBeInTheDocument();
  });

  it("renders with initial pills", () => {
    render(<PillInput pills={["React", "TypeScript"]} />);
    expect(screen.getByText("React")).toBeInTheDocument();
    expect(screen.getByText("TypeScript")).toBeInTheDocument();
  });

  it("adds a pill when Enter is pressed", async () => {
    const onPillsChange = jest.fn();
    const user = userEvent.setup();

    render(<PillInput onPillsChange={onPillsChange} />);

    const input = screen.getByPlaceholderText("Add tags...");
    await user.type(input, "New Pill");
    await user.keyboard("{Enter}");

    expect(onPillsChange).toHaveBeenCalledWith(["New Pill"]);
  });

  it("adds a pill when comma is pressed", async () => {
    const onPillsChange = jest.fn();
    const user = userEvent.setup();

    render(<PillInput onPillsChange={onPillsChange} />);

    const input = screen.getByPlaceholderText("Add tags...");
    await user.type(input, "New Pill");
    await user.keyboard(",");

    expect(onPillsChange).toHaveBeenCalledWith(["New Pill"]);
  });

  it("removes a pill when close button is clicked", async () => {
    const onPillsChange = jest.fn();
    const onPillRemove = jest.fn();
    const user = userEvent.setup();

    render(
      <PillInput
        pills={["React", "TypeScript"]}
        onPillsChange={onPillsChange}
        onPillRemove={onPillRemove}
      />
    );

    const closeButtons = screen.getAllByRole("button", { name: "Remove pill" });
    await user.click(closeButtons[0]);

    expect(onPillsChange).toHaveBeenCalledWith(["TypeScript"]);
    expect(onPillRemove).toHaveBeenCalledWith("React", 0);
  });

  it("removes last pill when Backspace is pressed on empty input", async () => {
    const onPillsChange = jest.fn();
    const user = userEvent.setup();

    render(
      <PillInput
        pills={["React", "TypeScript"]}
        onPillsChange={onPillsChange}
      />
    );

    const input = screen.getByPlaceholderText("Add tags...");
    await user.click(input);
    await user.keyboard("{Backspace}");

    expect(onPillsChange).toHaveBeenCalledWith(["React"]);
  });

  it("does not add duplicate pills", async () => {
    const onPillsChange = jest.fn();
    const user = userEvent.setup();

    render(<PillInput pills={["React"]} onPillsChange={onPillsChange} />);

    const input = screen.getByPlaceholderText("Add tags...");
    await user.type(input, "React");
    await user.keyboard("{Enter}");

    expect(onPillsChange).not.toHaveBeenCalled();
  });

  it("respects maxPills limit", async () => {
    const onPillsChange = jest.fn();
    const user = userEvent.setup();

    render(
      <PillInput
        pills={["Tag1", "Tag2"]}
        maxPills={2}
        onPillsChange={onPillsChange}
      />
    );

    const input = screen.getByPlaceholderText("Add tags...");
    await user.type(input, "Tag3");
    await user.keyboard("{Enter}");

    expect(onPillsChange).not.toHaveBeenCalled();
  });

  it("adds pill on blur if input has value", async () => {
    const onPillsChange = jest.fn();
    const user = userEvent.setup();

    render(<PillInput onPillsChange={onPillsChange} />);

    const input = screen.getByPlaceholderText("Add tags...");
    await user.type(input, "New Pill");
    await user.tab();

    expect(onPillsChange).toHaveBeenCalledWith(["New Pill"]);
  });

  it("applies disabled state correctly", () => {
    render(<PillInput pills={["Disabled"]} disabled />);

    const input = screen.getByPlaceholderText("Add tags...");
    expect(input).toBeDisabled();

    const closeButtons = screen.getAllByRole("button", { name: "Remove pill" });
    expect(closeButtons[0]).toBeDisabled();
  });

  it("applies different sizes correctly", () => {
    const { rerender } = render(<PillInput size="sm" pillSize="xs" />);
    expect(screen.getByPlaceholderText("Add tags...")).toBeInTheDocument();

    rerender(<PillInput size="lg" pillSize="xl" />);
    expect(screen.getByPlaceholderText("Add tags...")).toBeInTheDocument();
  });

  it("calls onPillAdd when a pill is added", async () => {
    const onPillAdd = jest.fn();
    const user = userEvent.setup();

    render(<PillInput onPillAdd={onPillAdd} />);

    const input = screen.getByPlaceholderText("Add tags...");
    await user.type(input, "New Pill");
    await user.keyboard("{Enter}");

    expect(onPillAdd).toHaveBeenCalledWith("New Pill");
  });
});
