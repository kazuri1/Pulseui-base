import type { Meta, StoryObj } from "@storybook/react";
import { Grid } from "./Grid";

const meta: Meta<typeof Grid> = {
  title: "Components/layouts/Grid",
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
    justify: "flex-start",
    overflow: "visible",
    type: "media",
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

export const SixColumns: Story = {
  args: {
    columns: 6,
    children: [
      <Grid.Col key="1" span={1}>
        <div
          style={{
            padding: "var(--spacing-md)",
            backgroundColor: "var(--color-surface-secondary)",
            borderRadius: "var(--radius-md)",
          }}
        >
          Col 1
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
          Col 2
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
          Col 3
        </div>
      </Grid.Col>,
      <Grid.Col key="4" span={1}>
        <div
          style={{
            padding: "var(--spacing-md)",
            backgroundColor: "var(--color-surface-500)",
            borderRadius: "var(--radius-md)",
          }}
        >
          Col 4
        </div>
      </Grid.Col>,
      <Grid.Col key="5" span={1}>
        <div
          style={{
            padding: "var(--spacing-md)",
            backgroundColor: "var(--color-surface-600)",
            borderRadius: "var(--radius-md)",
          }}
        >
          Col 5
        </div>
      </Grid.Col>,
      <Grid.Col key="6" span={1}>
        <div
          style={{
            padding: "var(--spacing-md)",
            backgroundColor: "var(--color-surface-700)",
            borderRadius: "var(--radius-md)",
          }}
        >
          Col 6
        </div>
      </Grid.Col>,
    ],
  },
};

export const TwelveColumns: Story = {
  args: {
    columns: 12,
    children: [
      <Grid.Col key="1" span={1}>
        <div
          style={{
            padding: "var(--spacing-md)",
            backgroundColor: "var(--color-surface-secondary)",
            borderRadius: "var(--radius-md)",
          }}
        >
          1
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
          2
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
          3
        </div>
      </Grid.Col>,
      <Grid.Col key="4" span={1}>
        <div
          style={{
            padding: "var(--spacing-md)",
            backgroundColor: "var(--color-surface-500)",
            borderRadius: "var(--radius-md)",
          }}
        >
          4
        </div>
      </Grid.Col>,
      <Grid.Col key="5" span={1}>
        <div
          style={{
            padding: "var(--spacing-md)",
            backgroundColor: "var(--color-surface-600)",
            borderRadius: "var(--radius-md)",
          }}
        >
          5
        </div>
      </Grid.Col>,
      <Grid.Col key="6" span={1}>
        <div
          style={{
            padding: "var(--spacing-md)",
            backgroundColor: "var(--color-surface-700)",
            borderRadius: "var(--radius-md)",
          }}
        >
          6
        </div>
      </Grid.Col>,
      <Grid.Col key="7" span={1}>
        <div
          style={{
            padding: "var(--spacing-md)",
            backgroundColor: "var(--color-surface-800)",
            borderRadius: "var(--radius-md)",
          }}
        >
          7
        </div>
      </Grid.Col>,
      <Grid.Col key="8" span={1}>
        <div
          style={{
            padding: "var(--spacing-md)",
            backgroundColor: "var(--color-surface-900)",
            borderRadius: "var(--radius-md)",
          }}
        >
          8
        </div>
      </Grid.Col>,
      <Grid.Col key="9" span={1}>
        <div
          style={{
            padding: "var(--spacing-md)",
            backgroundColor: "var(--color-surface-100)",
            borderRadius: "var(--radius-md)",
          }}
        >
          9
        </div>
      </Grid.Col>,
      <Grid.Col key="10" span={1}>
        <div
          style={{
            padding: "var(--spacing-md)",
            backgroundColor: "var(--color-surface-200)",
            borderRadius: "var(--radius-md)",
          }}
        >
          10
        </div>
      </Grid.Col>,
      <Grid.Col key="11" span={1}>
        <div
          style={{
            padding: "var(--spacing-md)",
            backgroundColor: "var(--color-surface-300)",
            borderRadius: "var(--radius-md)",
          }}
        >
          11
        </div>
      </Grid.Col>,
      <Grid.Col key="12" span={1}>
        <div
          style={{
            padding: "var(--spacing-md)",
            backgroundColor: "var(--color-surface-400)",
            borderRadius: "var(--radius-md)",
          }}
        >
          12
        </div>
      </Grid.Col>,
    ],
  },
};

export const MixedSpans: Story = {
  args: {
    columns: 12,
    children: [
      <Grid.Col key="1" span={8}>
        <div
          style={{
            padding: "var(--spacing-md)",
            backgroundColor: "var(--color-surface-secondary)",
            borderRadius: "var(--radius-md)",
          }}
        >
          Wide Column (8 spans)
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
          Narrow Column (4 spans)
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

export const WithGrow: Story = {
  args: {
    columns: 12,
    grow: true,
    children: [
      <Grid.Col key="1" span={4}>
        <div
          style={{
            padding: "var(--spacing-md)",
            backgroundColor: "var(--color-surface-secondary)",
            borderRadius: "var(--radius-md)",
          }}
        >
          Fixed Width Column
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
          Fixed Width Column
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
          Growing Column
        </div>
      </Grid.Col>,
    ],
  },
};

export const LargeGutter: Story = {
  args: {
    gutter: "lg",
    children: [
      <Grid.Col key="1" span={6}>
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
      <Grid.Col key="2" span={6}>
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
    ],
  },
};

export const SmallGutter: Story = {
  args: {
    gutter: "sm",
    children: [
      <Grid.Col key="1" span={6}>
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
      <Grid.Col key="2" span={6}>
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
    ],
  },
};
