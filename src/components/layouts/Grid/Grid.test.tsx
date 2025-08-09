import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "@jest/globals";
import "@testing-library/jest-dom";
import React from "react";
import { Grid } from "./Grid";

describe("Grid Component", () => {
  it("renders with default props", () => {
    render(<Grid>Test content</Grid>);
    expect(screen.getByText("Test content")).toBeInTheDocument();
  });

  it("renders with custom className", () => {
    render(<Grid className="custom-class">Test content</Grid>);
    const grid = document.querySelector(".root");
    expect(grid).toHaveClass("custom-class");
  });

  it("renders with default classes", () => {
    render(<Grid>Test content</Grid>);
    const grid = document.querySelector(".root");
    expect(grid).toHaveClass("root");
    expect(grid).toHaveClass("align-stretch");
    expect(grid).toHaveClass("justify-flex-start");
    expect(grid).toHaveClass("overflow-visible");
    expect(grid).toHaveClass("gutter-md");
    expect(grid).toHaveClass("columns-12");
  });

  it("renders with different align values", () => {
    const { rerender } = render(<Grid align="center">Test content</Grid>);
    let grid = document.querySelector(".root");
    expect(grid).toHaveClass("align-center");

    rerender(<Grid align="flex-end">Test content</Grid>);
    grid = document.querySelector(".root");
    expect(grid).toHaveClass("align-flex-end");
  });

  it("renders with different justify values", () => {
    const { rerender } = render(<Grid justify="center">Test content</Grid>);
    let grid = document.querySelector(".root");
    expect(grid).toHaveClass("justify-center");

    rerender(<Grid justify="space-between">Test content</Grid>);
    grid = document.querySelector(".root");
    expect(grid).toHaveClass("justify-space-between");
  });

  it("renders with different column counts", () => {
    const { rerender } = render(<Grid columns={3}>Test content</Grid>);
    let grid = document.querySelector(".root");
    expect(grid).toHaveClass("columns-3");

    rerender(<Grid columns={6}>Test content</Grid>);
    grid = document.querySelector(".root");
    expect(grid).toHaveClass("columns-6");
  });

  it("renders with different gutter sizes", () => {
    const { rerender } = render(<Grid gutter="sm">Test content</Grid>);
    let grid = document.querySelector(".root");
    expect(grid).toHaveClass("gutter-sm");

    rerender(<Grid gutter="lg">Test content</Grid>);
    grid = document.querySelector(".root");
    expect(grid).toHaveClass("gutter-lg");
  });

  it("renders with different overflow values", () => {
    const { rerender } = render(<Grid overflow="hidden">Test content</Grid>);
    let grid = document.querySelector(".root");
    expect(grid).toHaveClass("overflow-hidden");

    rerender(<Grid overflow="auto">Test content</Grid>);
    grid = document.querySelector(".root");
    expect(grid).toHaveClass("overflow-auto");
  });

  it("renders with grow prop", () => {
    render(<Grid grow>Test content</Grid>);
    const grid = document.querySelector(".root");
    expect(grid).toHaveClass("grow");
  });

  it("renders children correctly", () => {
    render(
      <Grid>
        <div>Child 1</div>
        <div>Child 2</div>
        <div>Child 3</div>
      </Grid>
    );
    expect(screen.getByText("Child 1")).toBeInTheDocument();
    expect(screen.getByText("Child 2")).toBeInTheDocument();
    expect(screen.getByText("Child 3")).toBeInTheDocument();
  });

  it("applies custom gutter value", () => {
    render(<Grid gutter="20px">Test content</Grid>);
    const grid = document.querySelector(".root");
    expect(grid).toHaveStyle({ "--grid-gutter": "20px" });
  });

  it("applies custom columns value", () => {
    render(<Grid columns={8}>Test content</Grid>);
    const grid = document.querySelector(".root");
    expect(grid).toHaveStyle({ "--grid-columns": "8" });
  });
});
