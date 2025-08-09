import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within, expect } from "@storybook/test";
import { Group } from "./Group";

const meta: Meta<typeof Group> = {
  title: "Components/Group",
  component: Group,
  parameters: {
    layout: "padded",
  },
  argTypes: {
    children: {
      control: "text",
      description: "Group content",
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
    wrap: {
      control: "boolean",
      description: "Whether to wrap items to the next line",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
  args: {
    children: "Group content goes here",
    align: "center",
    gap: "md",
    justify: "flex-start",
    wrap: true,
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
          padding: "var(--spacing-sm) var(--spacing-md)",
          backgroundColor: "var(--color-surface-secondary)",
          borderRadius: "var(--radius-md)",
          border: "1px solid var(--color-border-primary)",
        }}
      >
        Item 1
      </div>,
      <div
        key="2"
        style={{
          padding: "var(--spacing-sm) var(--spacing-md)",
          backgroundColor: "var(--color-surface-300)",
          borderRadius: "var(--radius-md)",
          border: "1px solid var(--color-border-primary)",
        }}
      >
        Item 2
      </div>,
      <div
        key="3"
        style={{
          padding: "var(--spacing-sm) var(--spacing-md)",
          backgroundColor: "var(--color-surface-400)",
          borderRadius: "var(--radius-md)",
          border: "1px solid var(--color-border-primary)",
        }}
      >
        Item 3
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
          padding: "var(--spacing-sm) var(--spacing-md)",
          backgroundColor: "var(--color-surface-secondary)",
          borderRadius: "var(--radius-md)",
          border: "1px solid var(--color-border-primary)",
        }}
      >
        Item 1
      </div>,
      <div
        key="2"
        style={{
          padding: "var(--spacing-sm) var(--spacing-md)",
          backgroundColor: "var(--color-surface-300)",
          borderRadius: "var(--radius-md)",
          border: "1px solid var(--color-border-primary)",
        }}
      >
        Item 2
      </div>,
      <div
        key="3"
        style={{
          padding: "var(--spacing-sm) var(--spacing-md)",
          backgroundColor: "var(--color-surface-400)",
          borderRadius: "var(--radius-md)",
          border: "1px solid var(--color-border-primary)",
        }}
      >
        Item 3
      </div>,
    ],
  },
};

export const Center: Story = {
  args: {
    align: "center",
    justify: "center",
    children: [
      <div
        key="1"
        style={{
          padding: "var(--spacing-sm) var(--spacing-md)",
          backgroundColor: "var(--color-surface-secondary)",
          borderRadius: "var(--radius-md)",
          border: "1px solid var(--color-border-primary)",
        }}
      >
        Item 1
      </div>,
      <div
        key="2"
        style={{
          padding: "var(--spacing-sm) var(--spacing-md)",
          backgroundColor: "var(--color-surface-300)",
          borderRadius: "var(--radius-md)",
          border: "1px solid var(--color-border-primary)",
        }}
      >
        Item 2
      </div>,
      <div
        key="3"
        style={{
          padding: "var(--spacing-sm) var(--spacing-md)",
          backgroundColor: "var(--color-surface-400)",
          borderRadius: "var(--radius-md)",
          border: "1px solid var(--color-border-primary)",
        }}
      >
        Item 3
      </div>,
    ],
  },
};

export const Stretch: Story = {
  args: {
    align: "stretch",
    children: [
      <div
        key="1"
        style={{
          padding: "var(--spacing-sm) var(--spacing-md)",
          backgroundColor: "var(--color-surface-secondary)",
          borderRadius: "var(--radius-md)",
          border: "1px solid var(--color-border-primary)",
        }}
      >
        Item 1
      </div>,
      <div
        key="2"
        style={{
          padding: "var(--spacing-sm) var(--spacing-md)",
          backgroundColor: "var(--color-surface-300)",
          borderRadius: "var(--radius-md)",
          border: "1px solid var(--color-border-primary)",
        }}
      >
        Item 2
      </div>,
      <div
        key="3"
        style={{
          padding: "var(--spacing-sm) var(--spacing-md)",
          backgroundColor: "var(--color-surface-400)",
          borderRadius: "var(--radius-md)",
          border: "1px solid var(--color-border-primary)",
        }}
      >
        Item 3
      </div>,
    ],
  },
};

export const NoWrap: Story = {
  args: {
    wrap: false,
    children: [
      <div
        key="1"
        style={{
          padding: "var(--spacing-sm) var(--spacing-md)",
          backgroundColor: "var(--color-surface-secondary)",
          borderRadius: "var(--radius-md)",
          border: "1px solid var(--color-border-primary)",
        }}
      >
        Item 1
      </div>,
      <div
        key="2"
        style={{
          padding: "var(--spacing-sm) var(--spacing-md)",
          backgroundColor: "var(--color-surface-300)",
          borderRadius: "var(--radius-md)",
          border: "1px solid var(--color-border-primary)",
        }}
      >
        Item 2
      </div>,
      <div
        key="3"
        style={{
          padding: "var(--spacing-sm) var(--spacing-md)",
          backgroundColor: "var(--color-surface-400)",
          borderRadius: "var(--radius-md)",
          border: "1px solid var(--color-border-primary)",
        }}
      >
        Item 3
      </div>,
    ],
  },
};

export const LargeGap: Story = {
  args: {
    gap: "lg",
    children: [
      <div
        key="1"
        style={{
          padding: "var(--spacing-sm) var(--spacing-md)",
          backgroundColor: "var(--color-surface-secondary)",
          borderRadius: "var(--radius-md)",
          border: "1px solid var(--color-border-primary)",
        }}
      >
        Item 1
      </div>,
      <div
        key="2"
        style={{
          padding: "var(--spacing-sm) var(--spacing-md)",
          backgroundColor: "var(--color-surface-300)",
          borderRadius: "var(--radius-md)",
          border: "1px solid var(--color-border-primary)",
        }}
      >
        Item 2
      </div>,
      <div
        key="3"
        style={{
          padding: "var(--spacing-sm) var(--spacing-md)",
          backgroundColor: "var(--color-surface-400)",
          borderRadius: "var(--radius-md)",
          border: "1px solid var(--color-border-primary)",
        }}
      >
        Item 3
      </div>,
    ],
  },
};

export const SmallGap: Story = {
  args: {
    gap: "sm",
    children: [
      <div
        key="1"
        style={{
          padding: "var(--spacing-sm) var(--spacing-md)",
          backgroundColor: "var(--color-surface-secondary)",
          borderRadius: "var(--radius-md)",
          border: "1px solid var(--color-border-primary)",
        }}
      >
        Item 1
      </div>,
      <div
        key="2"
        style={{
          padding: "var(--spacing-sm) var(--spacing-md)",
          backgroundColor: "var(--color-surface-300)",
          borderRadius: "var(--radius-md)",
          border: "1px solid var(--color-border-primary)",
        }}
      >
        Item 2
      </div>,
      <div
        key="3"
        style={{
          padding: "var(--spacing-sm) var(--spacing-md)",
          backgroundColor: "var(--color-surface-400)",
          borderRadius: "var(--radius-md)",
          border: "1px solid var(--color-border-primary)",
        }}
      >
        Item 3
      </div>,
    ],
  },
};

export const WithButtons: Story = {
  args: {
    children: [
      <button
        key="1"
        style={{
          padding: "var(--spacing-sm) var(--spacing-md)",
          backgroundColor: "var(--color-primary-500)",
          color: "white",
          border: "none",
          borderRadius: "var(--radius-md)",
          cursor: "pointer",
        }}
      >
        Primary Button
      </button>,
      <button
        key="2"
        style={{
          padding: "var(--spacing-sm) var(--spacing-md)",
          backgroundColor: "var(--color-surface-600)",
          color: "white",
          border: "none",
          borderRadius: "var(--radius-md)",
          cursor: "pointer",
        }}
      >
        Secondary Button
      </button>,
      <button
        key="3"
        style={{
          padding: "var(--spacing-sm) var(--spacing-md)",
          backgroundColor: "var(--color-green-500)",
          color: "white",
          border: "none",
          borderRadius: "var(--radius-md)",
          cursor: "pointer",
        }}
      >
        Success Button
      </button>,
      <button
        key="4"
        style={{
          padding: "var(--spacing-sm) var(--spacing-md)",
          backgroundColor: "var(--color-red-500)",
          color: "white",
          border: "none",
          borderRadius: "var(--radius-md)",
          cursor: "pointer",
        }}
      >
        Danger Button
      </button>,
    ],
  },
};

