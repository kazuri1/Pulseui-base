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
            padding: "20px",
            backgroundColor: "#f0f0f0",
            borderRadius: "8px",
          }}
        >
          Column 1
        </div>
      </Grid.Col>,
      <Grid.Col key="2" span={4}>
        <div
          style={{
            padding: "20px",
            backgroundColor: "#e0e0e0",
            borderRadius: "8px",
          }}
        >
          Column 2
        </div>
      </Grid.Col>,
      <Grid.Col key="3" span={4}>
        <div
          style={{
            padding: "20px",
            backgroundColor: "#d0d0d0",
            borderRadius: "8px",
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
    children: [
      <Grid.Col key="1" span={4}>
        <div
          style={{
            padding: "20px",
            backgroundColor: "#f0f0f0",
            borderRadius: "8px",
          }}
        >
          <h3>Column 1</h3>
          <p>This is the first column with some content.</p>
        </div>
      </Grid.Col>,
      <Grid.Col key="2" span={4}>
        <div
          style={{
            padding: "20px",
            backgroundColor: "#e0e0e0",
            borderRadius: "8px",
          }}
        >
          <h3>Column 2</h3>
          <p>This is the second column with some content.</p>
        </div>
      </Grid.Col>,
      <Grid.Col key="3" span={4}>
        <div
          style={{
            padding: "20px",
            backgroundColor: "#d0d0d0",
            borderRadius: "8px",
          }}
        >
          <h3>Column 3</h3>
          <p>This is the third column with some content.</p>
        </div>
      </Grid.Col>,
    ],
  },
};

export const CenteredAlignment: Story = {
  args: {
    align: "center",
    justify: "center",
    children: [
      <Grid.Col key="1" span={3}>
        <div
          style={{
            padding: "20px",
            backgroundColor: "#f0f0f0",
            borderRadius: "8px",
            height: "100px",
          }}
        >
          Centered
        </div>
      </Grid.Col>,
      <Grid.Col key="2" span={3}>
        <div
          style={{
            padding: "20px",
            backgroundColor: "#e0e0e0",
            borderRadius: "8px",
            height: "150px",
          }}
        >
          Centered
        </div>
      </Grid.Col>,
      <Grid.Col key="3" span={3}>
        <div
          style={{
            padding: "20px",
            backgroundColor: "#d0d0d0",
            borderRadius: "8px",
            height: "80px",
          }}
        >
          Centered
        </div>
      </Grid.Col>,
      <Grid.Col key="4" span={3}>
        <div
          style={{
            padding: "20px",
            backgroundColor: "#c0c0c0",
            borderRadius: "8px",
            height: "120px",
          }}
        >
          Centered
        </div>
      </Grid.Col>,
    ],
  },
};

export const LargeGutter: Story = {
  args: {
    gutter: "xl",

    children: [
      <Grid.Col key="1" span={2}>
        <div
          style={{
            padding: "20px",
            backgroundColor: "#f0f0f0",
            borderRadius: "8px",
          }}
        >
          Large Gap
        </div>
      </Grid.Col>,
      <Grid.Col key="2" span={2}>
        <div
          style={{
            padding: "20px",
            backgroundColor: "#e0e0e0",
            borderRadius: "8px",
          }}
        >
          Large Gap
        </div>
      </Grid.Col>,
      <Grid.Col key="3" span={2}>
        <div
          style={{
            padding: "20px",
            backgroundColor: "#d0d0d0",
            borderRadius: "8px",
          }}
        >
          Large Gap
        </div>
      </Grid.Col>,
      <Grid.Col key="4" span={2}>
        <div
          style={{
            padding: "20px",
            backgroundColor: "#c0c0c0",
            borderRadius: "8px",
          }}
        >
          Large Gap
        </div>
      </Grid.Col>,
      <Grid.Col key="5" span={2}>
        <div
          style={{
            padding: "20px",
            backgroundColor: "#b0b0b0",
            borderRadius: "8px",
          }}
        >
          Large Gap
        </div>
      </Grid.Col>,
      <Grid.Col key="6" span={2}>
        <div
          style={{
            padding: "20px",
            backgroundColor: "#a0a0a0",
            borderRadius: "8px",
          }}
        >
          Large Gap
        </div>
      </Grid.Col>,
    ],

    align: "baseline"
  },
};

export const SpaceBetween: Story = {
  args: {
    justify: "space-between",
    children: [
      <Grid.Col key="1" span={4}>
        <div
          style={{
            padding: "20px",
            backgroundColor: "#f0f0f0",
            borderRadius: "8px",
          }}
        >
          Left
        </div>
      </Grid.Col>,
      <Grid.Col key="2" span={4}>
        <div
          style={{
            padding: "20px",
            backgroundColor: "#e0e0e0",
            borderRadius: "8px",
          }}
        >
          Center
        </div>
      </Grid.Col>,
      <Grid.Col key="3" span={4}>
        <div
          style={{
            padding: "20px",
            backgroundColor: "#d0d0d0",
            borderRadius: "8px",
          }}
        >
          Right
        </div>
      </Grid.Col>,
    ],
  },
};

export const TwelveColumns: Story = {
  args: {
    gutter: "sm",
    children: Array.from({ length: 12 }, (_, i) => (
      <Grid.Col key={i} span={1}>
        <div
          style={{
            padding: "10px",
            backgroundColor: `hsl(${(i * 30) % 360}, 70%, 80%)`,
            borderRadius: "4px",
            textAlign: "center",
            fontSize: "12px",
          }}
        >
          {i + 1}
        </div>
      </Grid.Col>
    )),
  },
};

export const ResponsiveSpan: Story = {
  args: {
    children: [
      <Grid.Col key="1" span={{ base: 12, md: 6, lg: 3 }}>
        <div
          style={{
            padding: "20px",
            backgroundColor: "#f0f0f0",
            borderRadius: "8px",
          }}
        >
          <h3>Responsive Column</h3>
          <p>
            This column spans 12/12 on mobile, 6/12 on medium, and 3/12 on large
            screens.
          </p>
        </div>
      </Grid.Col>,
      <Grid.Col key="2" span={{ base: 12, md: 6, lg: 3 }}>
        <div
          style={{
            padding: "20px",
            backgroundColor: "#e0e0e0",
            borderRadius: "8px",
          }}
        >
          <h3>Responsive Column</h3>
          <p>
            This column spans 12/12 on mobile, 6/12 on medium, and 3/12 on large
            screens.
          </p>
        </div>
      </Grid.Col>,
      <Grid.Col key="3" span={{ base: 12, md: 6, lg: 3 }}>
        <div
          style={{
            padding: "20px",
            backgroundColor: "#d0d0d0",
            borderRadius: "8px",
          }}
        >
          <h3>Responsive Column</h3>
          <p>
            This column spans 12/12 on mobile, 6/12 on medium, and 3/12 on large
            screens.
          </p>
        </div>
      </Grid.Col>,
      <Grid.Col key="4" span={{ base: 12, md: 6, lg: 3 }}>
        <div
          style={{
            padding: "20px",
            backgroundColor: "#c0c0c0",
            borderRadius: "8px",
          }}
        >
          <h3>Responsive Column</h3>
          <p>
            This column spans 12/12 on mobile, 6/12 on medium, and 3/12 on large
            screens.
          </p>
        </div>
      </Grid.Col>,
    ],
  },
};
