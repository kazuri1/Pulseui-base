import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { BarChart } from "./BarChart";
import "../../../styles/pulseui-base.scss";

const meta = {
  title: "Atoms/Charts/BarChart",
  component: BarChart,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof BarChart>;

export default meta;
type Story = StoryObj<typeof meta>;

const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];

export const Basic: Story = {
  args: {
    title: "Monthly sales",
    xLabels: labels,
    series: [
      {
        label: "North",
        data: [12, 18, 15, 22, 28, 24, 30],
        colorVar: "--color-blue-6",
      },
      {
        label: "West",
        data: [10, 14, 12, 18, 20, 22, 25],
        colorVar: "--color-yellow-6",
      },
      {
        label: "East",
        data: [8, 11, 9, 14, 16, 18, 20],
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
      <BarChart {...args} />
    </div>
  ),
  args: {
    ...Basic.args,
    title: "Monthly sales (Dark)",
  },
};

export const Stacked: Story = {
  args: {
    title: "Monthly sales (Stacked)",
    xLabels: labels,
    series: [
      {
        label: "North",
        data: [12, 18, 15, 22, 28, 24, 30],
        colorVar: "--color-blue-6",
      },
      {
        label: "West",
        data: [10, 14, 12, 18, 20, 22, 25],
        colorVar: "--color-yellow-6",
      },
      {
        label: "East",
        data: [8, 11, 9, 14, 16, 18, 20],
        colorVar: "--color-red-6",
      },
    ],
    variant: "stacked",
  },
};

export const StackedDark: Story = {
  render: (args) => (
    <div
      data-theme="dark"
      style={{ padding: 16, background: "var(--color-background)" }}
    >
      <BarChart {...args} />
    </div>
  ),
  args: {
    ...Stacked.args,
    title: "Monthly sales (Stacked, Dark)",
  },
};
