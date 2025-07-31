import type { Meta, StoryObj } from "@storybook/react";
import { Stack } from "./Stack";

const meta: Meta<typeof Stack> = {
  title: "Components/layouts/Stack",
  component: Stack,
  parameters: {
    layout: "padded",
  },
  argTypes: {
    children: {
      control: "text",
      description: "Stack content",
    },
    align: {
      control: { type: "select" },
      options: ["stretch", "flex-start", "flex-end", "center", "baseline"],
      description: "Sets the `align-items` CSS property",
    },
    gap: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
      description: "Controls the spacing between elements",
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
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
  args: {
    children: "Stack content goes here",
    align: "stretch",
    gap: "md",
    justify: "flex-start",
    className: "",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [
      <div
        key="1"
        style={{
          padding: "16px",
          backgroundColor: "var(--color-surface-secondary)",
          border: "1px solid var(--color-border-primary)",
          borderRadius: "var(--radius-md)",
        }}
      >
        Item 1
      </div>,
      <div
        key="2"
        style={{
          padding: "16px",
          backgroundColor: "var(--color-surface-tertiary)",
          border: "1px solid var(--color-border-primary)",
          borderRadius: "var(--radius-md)",
        }}
      >
        Item 2
      </div>,
      <div
        key="3"
        style={{
          padding: "16px",
          backgroundColor: "var(--color-surface)",
          border: "1px solid var(--color-border-primary)",
          borderRadius: "var(--radius-md)",
        }}
      >
        Item 3
      </div>,
    ],
  },
};

export const Centered: Story = {
  args: {
    align: "center",
    justify: "center",
    children: [
      <div
        key="1"
        style={{
          padding: "16px",
          backgroundColor: "var(--color-primary-6)",
          color: "var(--color-white)",
          border: "1px solid var(--color-border-primary)",
          borderRadius: "var(--radius-md)",
        }}
      >
        Centered Item 1
      </div>,
      <div
        key="2"
        style={{
          padding: "16px",
          backgroundColor: "var(--color-surface-secondary)",
          border: "1px solid var(--color-border-primary)",
          borderRadius: "var(--radius-md)",
        }}
      >
        Centered Item 2
      </div>,
      <div
        key="3"
        style={{
          padding: "16px",
          backgroundColor: "var(--color-surface-tertiary)",
          border: "1px solid var(--color-border-primary)",
          borderRadius: "var(--radius-md)",
        }}
      >
        Centered Item 3
      </div>,
    ],
  },
};

export const LargeGap: Story = {
  args: {
    gap: "xl",
    children: [
      <div
        key="1"
        style={{
          padding: "16px",
          backgroundColor: "var(--color-surface-secondary)",
          border: "1px solid var(--color-border-primary)",
          borderRadius: "var(--radius-md)",
        }}
      >
        Large Gap Item 1
      </div>,
      <div
        key="2"
        style={{
          padding: "16px",
          backgroundColor: "var(--color-surface-tertiary)",
          border: "1px solid var(--color-border-primary)",
          borderRadius: "var(--radius-md)",
        }}
      >
        Large Gap Item 2
      </div>,
      <div
        key="3"
        style={{
          padding: "16px",
          backgroundColor: "var(--color-surface)",
          border: "1px solid var(--color-border-primary)",
          borderRadius: "var(--radius-md)",
        }}
      >
        Large Gap Item 3
      </div>,
    ],
  },
};

export const SpaceBetween: Story = {
  args: {
    justify: "space-between",
    children: [
      <div
        key="1"
        style={{
          padding: "16px",
          backgroundColor: "var(--color-surface-secondary)",
          border: "1px solid var(--color-border-primary)",
          borderRadius: "var(--radius-md)",
        }}
      >
        Top Item
      </div>,
      <div
        key="2"
        style={{
          padding: "16px",
          backgroundColor: "var(--color-surface-tertiary)",
          border: "1px solid var(--color-border-primary)",
          borderRadius: "var(--radius-md)",
        }}
      >
        Middle Item
      </div>,
      <div
        key="3"
        style={{
          padding: "16px",
          backgroundColor: "var(--color-surface)",
          border: "1px solid var(--color-border-primary)",
          borderRadius: "var(--radius-md)",
        }}
      >
        Bottom Item
      </div>,
    ],
  },
};

export const DashboardLayout: Story = {
  args: {
    gap: "xl",
    children: [
      <div
        key="header"
        style={{
          padding: "16px",
          backgroundColor: "var(--color-primary-6)",
          color: "var(--color-white)",
          border: "1px solid var(--color-border-primary)",
          borderRadius: "var(--radius-md)",
        }}
      >
        <h2 style={{ margin: 0 }}>Dashboard Header</h2>
        <p style={{ margin: "10px 0 0 0" }}>Welcome to your dashboard</p>
      </div>,
      <div
        key="stats"
        style={{
          padding: "16px",
          backgroundColor: "var(--color-surface-secondary)",
          border: "1px solid var(--color-border-primary)",
          borderRadius: "var(--radius-md)",
        }}
      >
        <h3 style={{ margin: "0 0 10px 0" }}>Statistics</h3>
        <p>Key metrics and analytics data</p>
      </div>,
      <div
        key="actions"
        style={{
          padding: "16px",
          backgroundColor: "var(--color-success)",
          color: "var(--color-white)",
          border: "1px solid var(--color-border-primary)",
          borderRadius: "var(--radius-md)",
        }}
      >
        <h3 style={{ margin: "0 0 10px 0" }}>Quick Actions</h3>
        <p>Common tasks and shortcuts</p>
      </div>,
    ],
  },
};
