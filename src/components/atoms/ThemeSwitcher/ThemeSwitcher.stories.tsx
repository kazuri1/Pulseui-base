import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ThemeSwitcher } from "./ThemeSwitcher";

const meta: Meta<typeof ThemeSwitcher> = {
  title: "Atoms/ThemeSwitcher",
  component: ThemeSwitcher,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
      description: "Size of the theme switcher button",
    },
    variant: {
      control: { type: "select" },
      options: ["filled", "subtle", "light", "outline", "white", "default"],
      description: "Visual style variant of the button",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    size: "md",
    variant: "subtle",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    variant: "subtle",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    variant: "filled",
  },
};

export const Outline: Story = {
  args: {
    size: "md",
    variant: "outline",
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <ThemeSwitcher size="xs" />
      <ThemeSwitcher size="sm" />
      <ThemeSwitcher size="md" />
      <ThemeSwitcher size="lg" />
      <ThemeSwitcher size="xl" />
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <ThemeSwitcher variant="default" />
      <ThemeSwitcher variant="subtle" />
      <ThemeSwitcher variant="light" />
      <ThemeSwitcher variant="outline" />
      <ThemeSwitcher variant="white" />
      <ThemeSwitcher variant="filled" />
    </div>
  ),
};
