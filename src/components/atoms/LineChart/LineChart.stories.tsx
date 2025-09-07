import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { LineChart } from "./LineChart";
import "../../../styles/pulseui-base.scss";

const meta = {
  title: "Atoms/Charts/LineChart",
  component: LineChart,
  parameters: {
    layout: "centered",
    docs: {
      // Using auto-generated docs from Storybook; no MDX docs per project preference
      source: { type: "code" },
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof LineChart>;

export default meta;
type Story = StoryObj<typeof meta>;

const years = [
  1960, 1965, 1970, 1975, 1980, 1985, 1990, 1995, 2000, 2005, 2010, 2015, 2020,
  2023,
];

export const Basic: Story = {
  args: {
    title: "Inflation rates",
    xData: years,
    series: [
      {
        label: "Germany",
        data: [
          2.1, 3, 1.8, 6.2, 4.9, 2.3, 3.4, 2.5, 1.6, 1.2, 1.1, 0.9, 2.5, 5.6,
        ],
        colorVar: "--color-blue-6",
      },
      {
        label: "United Kingdom",
        data: [
          3.2, 4.0, 6.5, 24.2, 15.0, 5.1, 3.4, 2.0, 1.6, 2.8, 3.5, 0.5, 1.2,
          7.9,
        ],
        colorVar: "--color-yellow-6",
      },
      {
        label: "France",
        data: [
          3.5, 2.8, 4.1, 13.2, 12.8, 3.1, 3.4, 2.1, 1.5, 1.9, 1.7, 0.3, 1.1,
          5.1,
        ],
        colorVar: "--color-red-6",
      },
    ],
  },
};

export const DarkMode: Story = {
  render: (args) => (
    <div
      data-theme="dark"
      style={{ padding: 16, background: "var(--color-background)" }}
    >
      <LineChart {...args} />
    </div>
  ),
  args: {
    ...Basic.args,
    title: "Inflation rates (Dark)",
  },
};

export const FilledArea: Story = {
  args: {
    ...Basic.args,
    title: "Inflation rates (Filled)",
    filledArea: true,
  },
};

export const FilledAreaDark: Story = {
  render: (args) => (
    <div
      data-theme="dark"
      style={{ padding: 16, background: "var(--color-background)" }}
    >
      <LineChart {...args} />
    </div>
  ),
  args: {
    ...FilledArea.args,
    title: "Inflation rates (Filled, Dark)",
  },
};
