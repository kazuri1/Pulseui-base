import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within, expect } from "@storybook/test";
import { Grid } from "./Grid";

const meta: Meta<typeof Grid> = {
  title: "Components/Grid",
  component: Grid,
  parameters: {
    layout: "padded",
  },
  argTypes: {
    children: {
      control: "text",
      description: "Grid content",
    },
    align: {
      control: { type: "select" },
      options: ["stretch", "flex-start", "flex-end", "center", "baseline"],
      description: "Sets the `align-items` CSS property",
    },
    columns: {
      control: { type: "number", min: 1, max: 12 },
      description: "Number of columns in each row",
    },
    grow: {
      control: "boolean",
      description:
        "If set to `true`, columns in the last row will expand to fill all available space",
    },
    gutter: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
      description: "Controls the spacing (gutter) between columns",
    },
    gutterX: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
      description: "Horizontal gutter (between columns)",
    },
    gutterY: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
      description: "Vertical gutter (between rows)",
    },
    autoFit: {
      control: "boolean",
      description: "Auto-fit columns with minimum width",
    },
    minColumnWidth: {
      control: "text",
      description: "Minimum column width for auto-fit",
    },
    negativeGutter: {
      control: "boolean",
      description: "Negative gutters for edge-to-edge layouts",
    },
    justify: {
      control: { type: "select" },
      options: [
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-around",
        "space-evenly",
      ],
      description: "Sets the `justify-content` CSS property",
    },
    overflow: {
      control: { type: "select" },
      options: ["visible", "hidden", "scroll", "auto"],
      description: "Sets the `overflow` CSS property on the root element",
    },
    type: {
      control: { type: "select" },
      options: ["media", "container"],
      description: "Determines the type of queries used for responsive styles",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
  args: {
    children: "Grid content goes here",
    align: "stretch",
    columns: 12,
    grow: false,
    gutter: "md",
    gutterX: undefined,
    gutterY: undefined,
    justify: "flex-start",
    overflow: "visible",
    type: "media",
    autoFit: false,
    minColumnWidth: "200px",
    negativeGutter: false,
    className: "",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [
      <Grid.Col key="1" span={4}>
        <div
          style={{
            padding: "var(--spacing-md)",
            backgroundColor: "var(--color-surface-secondary)",
            borderRadius: "var(--radius-md)",
          }}
        >
          Column 1
        </div>
      </Grid.Col>,
      <Grid.Col key="2" span={4}>
        <div
          style={{
            padding: "var(--spacing-md)",
            backgroundColor: "var(--color-surface-300)",
            borderRadius: "var(--radius-md)",
          }}
        >
          Column 2
        </div>
      </Grid.Col>,
      <Grid.Col key="3" span={4}>
        <div
          style={{
            padding: "var(--spacing-md)",
            backgroundColor: "var(--color-surface-400)",
            borderRadius: "var(--radius-md)",
          }}
        >
          Column 3
        </div>
      </Grid.Col>,
    ],
  },
};

export const ThreeColumns: Story = {
  args: {
    columns: 3,
    children: [
      <Grid.Col key="1" span={1}>
        <div
          style={{
            padding: "var(--spacing-md)",
            backgroundColor: "var(--color-surface-secondary)",
            borderRadius: "var(--radius-md)",
          }}
        >
          Column 1
        </div>
      </Grid.Col>,
      <Grid.Col key="2" span={1}>
        <div
          style={{
            padding: "var(--spacing-md)",
            backgroundColor: "var(--color-surface-300)",
            borderRadius: "var(--radius-md)",
          }}
        >
          Column 2
        </div>
      </Grid.Col>,
      <Grid.Col key="3" span={1}>
        <div
          style={{
            padding: "var(--spacing-md)",
            backgroundColor: "var(--color-surface-400)",
            borderRadius: "var(--radius-md)",
          }}
        >
          Column 3
        </div>
      </Grid.Col>,
    ],
  },
};

export const ResponsiveGrid: Story = {
  args: {
    columns: 12,
    children: [
      <Grid.Col key="1" span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
        <div
          style={{
            padding: "var(--spacing-md)",
            backgroundColor: "var(--color-surface-secondary)",
            borderRadius: "var(--radius-md)",
          }}
        >
          Responsive Column 1
        </div>
      </Grid.Col>,
      <Grid.Col key="2" span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
        <div
          style={{
            padding: "var(--spacing-md)",
            backgroundColor: "var(--color-surface-300)",
            borderRadius: "var(--radius-md)",
          }}
        >
          Responsive Column 2
        </div>
      </Grid.Col>,
      <Grid.Col key="3" span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
        <div
          style={{
            padding: "var(--spacing-md)",
            backgroundColor: "var(--color-surface-400)",
            borderRadius: "var(--radius-md)",
          }}
        >
          Responsive Column 3
        </div>
      </Grid.Col>,
      <Grid.Col key="4" span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
        <div
          style={{
            padding: "var(--spacing-md)",
            backgroundColor: "var(--color-surface-500)",
            borderRadius: "var(--radius-md)",
          }}
        >
          Responsive Column 4
        </div>
      </Grid.Col>,
    ],
  },
};

export const AutoFitGrid: Story = {
  args: {
    autoFit: true,
    minColumnWidth: "250px",
    gutter: "md",
    children: [
      <Grid.Col key="1">
        <div
          style={{
            padding: "var(--spacing-md)",
            backgroundColor: "var(--color-surface-secondary)",
            borderRadius: "var(--radius-md)",
            minHeight: "100px",
          }}
        >
          Auto-fit Column 1
        </div>
      </Grid.Col>,
      <Grid.Col key="2">
        <div
          style={{
            padding: "var(--spacing-md)",
            backgroundColor: "var(--color-surface-300)",
            borderRadius: "var(--radius-md)",
            minHeight: "100px",
          }}
        >
          Auto-fit Column 2
        </div>
      </Grid.Col>,
      <Grid.Col key="3">
        <div
          style={{
            padding: "var(--spacing-md)",
            backgroundColor: "var(--color-surface-400)",
            borderRadius: "var(--radius-md)",
            minHeight: "100px",
          }}
        >
          Auto-fit Column 3
        </div>
      </Grid.Col>,
    ],
  },
};

export const SeparateGutters: Story = {
  args: {
    gutterX: "lg",
    gutterY: "sm",
    children: [
      <Grid.Col key="1" span={6}>
        <div
          style={{
            padding: "var(--spacing-md)",
            backgroundColor: "var(--color-surface-secondary)",
            borderRadius: "var(--radius-md)",
            minHeight: "100px",
          }}
        >
          Column 1
        </div>
      </Grid.Col>,
      <Grid.Col key="2" span={6}>
        <div
          style={{
            padding: "var(--spacing-md)",
            backgroundColor: "var(--color-surface-300)",
            borderRadius: "var(--radius-md)",
            minHeight: "100px",
          }}
        >
          Column 2
        </div>
      </Grid.Col>,
      <Grid.Col key="3" span={6}>
        <div
          style={{
            padding: "var(--spacing-md)",
            backgroundColor: "var(--color-surface-400)",
            borderRadius: "var(--radius-md)",
            minHeight: "100px",
          }}
        >
          Column 3
        </div>
      </Grid.Col>,
      <Grid.Col key="4" span={6}>
        <div
          style={{
            padding: "var(--spacing-md)",
            backgroundColor: "var(--color-surface-500)",
            borderRadius: "var(--radius-md)",
            minHeight: "100px",
          }}
        >
          Column 4
        </div>
      </Grid.Col>,
    ],
  },
};

export const NegativeGutter: Story = {
  args: {
    negativeGutter: true,
    gutter: "lg",
    children: [
      <Grid.Col key="1" span={6}>
        <div
          style={{
            padding: "var(--spacing-md)",
            backgroundColor: "var(--color-surface-secondary)",
            borderRadius: "var(--radius-md)",
            minHeight: "100px",
          }}
        >
          Edge-to-edge Column 1
        </div>
      </Grid.Col>,
      <Grid.Col key="2" span={6}>
        <div
          style={{
            padding: "var(--spacing-md)",
            backgroundColor: "var(--color-surface-300)",
            borderRadius: "var(--radius-md)",
            minHeight: "100px",
          }}
        >
          Edge-to-edge Column 2
        </div>
      </Grid.Col>,
    ],
  },
};
