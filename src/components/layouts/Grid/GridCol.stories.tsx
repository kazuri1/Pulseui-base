import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Grid } from "./Grid";

const meta: Meta<typeof Grid.Col> = {
  title: "Components/Grid/GridCol",
  component: Grid.Col,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "GridCol Component - The column component for the Grid system with responsive spans, offsets, ordering, and grid areas support.",
      },
    },
  },
  argTypes: {
    children: {
      control: "text",
      description: "Column content",
    },
    span: {
      control: "object",
      description:
        "Number of columns to span (1-12). Can be a number or responsive object",
    },
    offset: {
      control: "object",
      description:
        "Number of columns to offset (0-11). Can be a number or responsive object",
    },
    order: {
      control: "object",
      description: "Column order. Can be a number or responsive object",
    },
    gridArea: {
      control: "text",
      description: "Grid area name for complex layouts",
    },
  },
  args: {
    children: "Grid Column Content",
    span: 6,
    offset: 0,
    order: 0,
    gridArea: "",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    span: 6,
    children: (
      <div
        style={{
          padding: "var(--spacing-md)",
          backgroundColor: "var(--color-surface-secondary)",
          borderRadius: "var(--radius-md)",
          minHeight: "100px",
        }}
      >
        Default Column (span: 6)
      </div>
    ),
  },
  decorators: [
    (Story) => (
      <Grid columns={12} gutter="md">
        <Story />
        <Grid.Col span={6}>
          <div
            style={{
              padding: "var(--spacing-md)",
              backgroundColor: "var(--color-surface-300)",
              borderRadius: "var(--radius-md)",
              minHeight: "100px",
            }}
          >
            Second Column (span: 6)
          </div>
        </Grid.Col>
      </Grid>
    ),
  ],
};

export const WithOffset: Story = {
  args: {
    span: 4,
    offset: 2,
    children: (
      <div
        style={{
          padding: "var(--spacing-md)",
          backgroundColor: "var(--color-primary-1)",
          borderRadius: "var(--radius-md)",
          minHeight: "100px",
        }}
      >
        Offset Column (span: 4, offset: 2)
      </div>
    ),
  },
  decorators: [
    (Story) => (
      <Grid columns={12} gutter="md">
        <Grid.Col span={2}>
          <div
            style={{
              padding: "var(--spacing-md)",
              backgroundColor: "var(--color-surface-secondary)",
              borderRadius: "var(--radius-md)",
              minHeight: "100px",
            }}
          >
            First Column (span: 2)
          </div>
        </Grid.Col>
        <Story />
        <Grid.Col span={4}>
          <div
            style={{
              padding: "var(--spacing-md)",
              backgroundColor: "var(--color-surface-300)",
              borderRadius: "var(--radius-md)",
              minHeight: "100px",
            }}
          >
            Last Column (span: 4)
          </div>
        </Grid.Col>
      </Grid>
    ),
  ],
};

export const WithOrder: Story = {
  args: {
    span: 4,
    order: -1,
    children: (
      <div
        style={{
          padding: "var(--spacing-md)",
          backgroundColor: "var(--color-success-1)",
          borderRadius: "var(--radius-md)",
          minHeight: "100px",
        }}
      >
        First in Order (span: 4, order: -1)
      </div>
    ),
  },
  decorators: [
    (Story) => (
      <Grid columns={12} gutter="md">
        <Grid.Col span={4} order={1}>
          <div
            style={{
              padding: "var(--spacing-md)",
              backgroundColor: "var(--color-surface-secondary)",
              borderRadius: "var(--radius-md)",
              minHeight: "100px",
            }}
          >
            Second in Order (span: 4, order: 1)
          </div>
        </Grid.Col>
        <Story />
        <Grid.Col span={4} order={2}>
          <div
            style={{
              padding: "var(--spacing-md)",
              backgroundColor: "var(--color-surface-300)",
              borderRadius: "var(--radius-md)",
              minHeight: "100px",
            }}
          >
            Last in Order (span: 4, order: 2)
          </div>
        </Grid.Col>
      </Grid>
    ),
  ],
};

export const ResponsiveSpan: Story = {
  args: {
    span: {
      base: 12,
      sm: 6,
      md: 4,
      lg: 3,
    },
    children: (
      <div
        style={{
          padding: "var(--spacing-md)",
          backgroundColor: "var(--color-warning-1)",
          borderRadius: "var(--radius-md)",
          minHeight: "100px",
        }}
      >
        Responsive Column
        <br />
        <small>base: 12, sm: 6, md: 4, lg: 3</small>
      </div>
    ),
  },
  decorators: [
    (Story) => (
      <Grid columns={12} gutter="md">
        <Story />
        <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
          <div
            style={{
              padding: "var(--spacing-md)",
              backgroundColor: "var(--color-surface-secondary)",
              borderRadius: "var(--radius-md)",
              minHeight: "100px",
            }}
          >
            Responsive Column 2
          </div>
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
          <div
            style={{
              padding: "var(--spacing-md)",
              backgroundColor: "var(--color-surface-300)",
              borderRadius: "var(--radius-md)",
              minHeight: "100px",
            }}
          >
            Responsive Column 3
          </div>
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
          <div
            style={{
              padding: "var(--spacing-md)",
              backgroundColor: "var(--color-surface-400)",
              borderRadius: "var(--radius-md)",
              minHeight: "100px",
            }}
          >
            Responsive Column 4
          </div>
        </Grid.Col>
      </Grid>
    ),
  ],
};

export const ComplexLayout: Story = {
  args: {
    span: 6,
    offset: { base: 0, md: 3 },
    order: { base: 2, lg: 1 },
    children: (
      <div
        style={{
          padding: "var(--spacing-md)",
          backgroundColor: "var(--color-info-1)",
          borderRadius: "var(--radius-md)",
          minHeight: "100px",
        }}
      >
        Complex Column
        <br />
        <small>span: 6, offset: base: 0, md: 3, order: base: 2, lg: 1</small>
      </div>
    ),
  },
  decorators: [
    (Story) => (
      <Grid columns={12} gutter="md">
        <Grid.Col span={6} order={{ base: 1, lg: 2 }}>
          <div
            style={{
              padding: "var(--spacing-md)",
              backgroundColor: "var(--color-surface-secondary)",
              borderRadius: "var(--radius-md)",
              minHeight: "100px",
            }}
          >
            First Column (order: base: 1, lg: 2)
          </div>
        </Grid.Col>
        <Story />
      </Grid>
    ),
  ],
};
