import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Group } from "./Group";

describe("Group", () => {
  it("renders children correctly", () => {
    render(
      <Group>
        <div>Test Item 1</div>
        <div>Test Item 2</div>
      </Group>
    );

    expect(screen.getByText("Test Item 1")).toBeInTheDocument();
    expect(screen.getByText("Test Item 2")).toBeInTheDocument();
  });

  it("applies default classes", () => {
    const { container } = render(
      <Group>
        <div>Test Item</div>
      </Group>
    );

    const groupElement = container.firstChild as HTMLElement;
    expect(groupElement).toHaveClass("root");
    expect(groupElement).toHaveClass("align-center");
    expect(groupElement).toHaveClass("justify-flex-start");
    expect(groupElement).toHaveClass("gap-md");
  });

  it("applies custom align class", () => {
    const { container } = render(
      <Group align="flex-start">
        <div>Test Item</div>
      </Group>
    );

    const groupElement = container.firstChild as HTMLElement;
    expect(groupElement).toHaveClass("align-flex-start");
  });

  it("applies custom justify class", () => {
    const { container } = render(
      <Group justify="space-between">
        <div>Test Item</div>
      </Group>
    );

    const groupElement = container.firstChild as HTMLElement;
    expect(groupElement).toHaveClass("justify-space-between");
  });

  it("applies custom gap class", () => {
    const { container } = render(
      <Group gap="lg">
        <div>Test Item</div>
      </Group>
    );

    const groupElement = container.firstChild as HTMLElement;
    expect(groupElement).toHaveClass("gap-lg");
  });

  it("applies nowrap class when wrap is false", () => {
    const { container } = render(
      <Group wrap={false}>
        <div>Test Item</div>
      </Group>
    );

    const groupElement = container.firstChild as HTMLElement;
    expect(groupElement).toHaveClass("nowrap");
  });

  it("applies custom className", () => {
    const { container } = render(
      <Group className="custom-class">
        <div>Test Item</div>
      </Group>
    );

    const groupElement = container.firstChild as HTMLElement;
    expect(groupElement).toHaveClass("custom-class");
  });

  it("applies custom gap via CSS variable", () => {
    const { container } = render(
      <Group gap="2rem">
        <div>Test Item</div>
      </Group>
    );

    const groupElement = container.firstChild as HTMLElement;
    expect(groupElement).toHaveStyle({ "--group-gap": "2rem" });
  });

  it("renders with flex direction row and wrap", () => {
    const { container } = render(
      <Group>
        <div>Test Item</div>
      </Group>
    );

    const groupElement = container.firstChild as HTMLElement;
    expect(groupElement).toHaveStyle({
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
    });
  });
});
