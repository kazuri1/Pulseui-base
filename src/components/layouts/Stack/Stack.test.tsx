import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "@jest/globals";
import "@testing-library/jest-dom";
import React from "react";
import { Stack } from "./Stack";

describe("Stack", () => {
  it("renders children correctly", () => {
    render(
      <Stack>
        <div>Test Item 1</div>
        <div>Test Item 2</div>
      </Stack>
    );

    expect(screen.getByText("Test Item 1")).toBeInTheDocument();
    expect(screen.getByText("Test Item 2")).toBeInTheDocument();
  });

  it("applies default classes", () => {
    const { container } = render(
      <Stack>
        <div>Test Item</div>
      </Stack>
    );

    const stackElement = container.firstChild as HTMLElement;
    expect(stackElement).toHaveClass("root");
    expect(stackElement).toHaveClass("align-stretch");
    expect(stackElement).toHaveClass("justify-flex-start");
    expect(stackElement).toHaveClass("gap-md");
  });

  it("applies custom align class", () => {
    const { container } = render(
      <Stack align="center">
        <div>Test Item</div>
      </Stack>
    );

    const stackElement = container.firstChild as HTMLElement;
    expect(stackElement).toHaveClass("align-center");
  });

  it("applies custom justify class", () => {
    const { container } = render(
      <Stack justify="space-between">
        <div>Test Item</div>
      </Stack>
    );

    const stackElement = container.firstChild as HTMLElement;
    expect(stackElement).toHaveClass("justify-space-between");
  });

  it("applies custom gap class", () => {
    const { container } = render(
      <Stack gap="lg">
        <div>Test Item</div>
      </Stack>
    );

    const stackElement = container.firstChild as HTMLElement;
    expect(stackElement).toHaveClass("gap-lg");
  });

  it("applies custom className", () => {
    const { container } = render(
      <Stack className="custom-class">
        <div>Test Item</div>
      </Stack>
    );

    const stackElement = container.firstChild as HTMLElement;
    expect(stackElement).toHaveClass("custom-class");
  });

  it("applies custom gap via CSS variable", () => {
    const { container } = render(
      <Stack gap="2rem">
        <div>Test Item</div>
      </Stack>
    );

    const stackElement = container.firstChild as HTMLElement;
    expect(stackElement).toHaveStyle({ "--stack-gap": "2rem" });
  });

  it("renders with flex direction column", () => {
    const { container } = render(
      <Stack>
        <div>Test Item</div>
      </Stack>
    );

    const stackElement = container.firstChild as HTMLElement;
    expect(stackElement).toHaveStyle({
      display: "flex",
      flexDirection: "column",
    });
  });
});
