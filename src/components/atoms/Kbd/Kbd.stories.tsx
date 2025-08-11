import type { Meta, StoryObj } from "@storybook/react";
import { Kbd } from "./Kbd";

const meta: Meta<typeof Kbd> = {
  title: "Atoms/Kbd",
  component: Kbd,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A keyboard key component that displays individual keys with customizable sizes. Perfect for showing keyboard shortcuts, key combinations, and input instructions in documentation and interfaces.",
      },
    },
  },
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg", "xl"],
      description: "Size variant of the keyboard key",
    },
    children: {
      control: { type: "text" },
      description: "The keyboard key text to display",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Shift",
    size: "md",
  },
};

export const Small: Story = {
  args: {
    children: "Ctrl",
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    children: "Enter",
    size: "lg",
  },
};

export const ExtraLarge: Story = {
  args: {
    children: "Space",
    size: "xl",
  },
};

export const CommonKeys: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "8px",
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      <Kbd size="sm">Ctrl</Kbd>
      <Kbd size="sm">+</Kbd>
      <Kbd size="sm">C</Kbd>
      <span style={{ margin: "0 8px" }}>Copy</span>

      <Kbd size="sm">Ctrl</Kbd>
      <Kbd size="sm">+</Kbd>
      <Kbd size="sm">V</Kbd>
      <span style={{ margin: "0 8px" }}>Paste</span>

      <Kbd size="sm">Ctrl</Kbd>
      <Kbd size="sm">+</Kbd>
      <Kbd size="sm">Z</Kbd>
      <span style={{ margin: "0 8px" }}>Undo</span>
    </div>
  ),
};

export const FunctionKeys: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "8px",
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      <Kbd size="md">F1</Kbd>
      <Kbd size="md">F2</Kbd>
      <Kbd size="md">F3</Kbd>
      <Kbd size="md">F4</Kbd>
      <Kbd size="md">F5</Kbd>
      <Kbd size="md">F6</Kbd>
    </div>
  ),
};

export const ArrowKeys: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "8px",
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      <Kbd size="lg">↑</Kbd>
      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
        <Kbd size="lg">←</Kbd>
        <Kbd size="lg">↓</Kbd>
        <Kbd size="lg">→</Kbd>
      </div>
    </div>
  ),
};

export const ModifierKeys: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "8px",
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      <Kbd size="md">Shift</Kbd>
      <Kbd size="md">Ctrl</Kbd>
      <Kbd size="md">Alt</Kbd>
      <Kbd size="md">Cmd</Kbd>
      <Kbd size="md">Win</Kbd>
    </div>
  ),
};
