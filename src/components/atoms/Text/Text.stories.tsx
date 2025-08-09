import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within, expect } from "@storybook/test";
import { Text } from "./Text";

const meta: Meta<typeof Text> = {
  title: "Components/Text",
  component: Text,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl", "xxl"],
    },
    color: {
      control: { type: "select" },
      options: ["primary", "secondary", "muted", "success", "warning", "error"],
    },
    weight: {
      control: { type: "select" },
      options: ["normal", "medium", "semibold", "bold"],
    },
    as: {
      control: { type: "select" },
      options: ["p", "span", "div", "h1", "h2", "h3", "h4", "h5", "h6"],
    },
    truncate: {
      control: { type: "boolean" },
    },
    lines: {
      control: { type: "select" },
      options: [1, 2, 3, 4],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "This is default text using Roboto font",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Text variant="xs">Extra Small Text (12px)</Text>
      <Text variant="sm">Small Text (14px)</Text>
      <Text variant="md">Medium Text (16px) - Default</Text>
      <Text variant="lg">Large Text (18px)</Text>
      <Text variant="xl">Extra Large Text (20px)</Text>
      <Text variant="xxl">Extra Extra Large Text (24px)</Text>
    </div>
  ),
};

export const AllColors: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Text color="primary">Primary Color Text</Text>
      <Text color="secondary">Secondary Color Text</Text>
      <Text color="muted">Muted Color Text</Text>
      <Text color="success">Success Color Text</Text>
      <Text color="warning">Warning Color Text</Text>
      <Text color="error">Error Color Text</Text>
    </div>
  ),
};

export const AllWeights: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Text weight="normal">Normal Weight (400)</Text>
      <Text weight="medium">Medium Weight (500)</Text>
      <Text weight="semibold">Semibold Weight (600)</Text>
      <Text weight="bold">Bold Weight (700)</Text>
    </div>
  ),
};

export const AllElements: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Text as="h1" variant="xl" weight="bold">
        Heading 1
      </Text>
      <Text as="h2" variant="lg" weight="bold">
        Heading 2
      </Text>
      <Text as="h3" variant="md" weight="semibold">
        Heading 3
      </Text>
      <Text as="h4" variant="sm" weight="semibold">
        Heading 4
      </Text>
      <Text as="h5" variant="xs" weight="medium">
        Heading 5
      </Text>
      <Text as="h6" variant="xs" weight="medium">
        Heading 6
      </Text>
      <Text as="p">Paragraph text</Text>
      <Text as="span">Span text</Text>
      <Text as="div">Div text</Text>
    </div>
  ),
};

export const TruncatedText: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        maxWidth: "200px",
      }}
    >
      <Text truncate>
        This is a very long text that will be truncated with ellipsis when it
        exceeds the container width
      </Text>
      <Text lines={2}>
        This is a very long text that will be truncated to 2 lines with ellipsis
        when it exceeds the container height. This demonstrates multi-line
        truncation.
      </Text>
      <Text lines={3}>
        This is a very long text that will be truncated to 3 lines with ellipsis
        when it exceeds the container height. This demonstrates multi-line
        truncation with more content.
      </Text>
    </div>
  ),
};

export const Combinations: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Text variant="lg" weight="bold" color="primary">
        Large Bold Primary Text
      </Text>
      <Text variant="md" weight="semibold" color="secondary">
        Medium Semibold Secondary Text
      </Text>
      <Text variant="sm" weight="medium" color="success">
        Small Medium Success Text
      </Text>
      <Text variant="xs" weight="normal" color="muted">
        Extra Small Normal Muted Text
      </Text>
    </div>
  ),
};

export const WithCustomStyles: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Text
        variant="lg"
        weight="bold"
        sx={{
          background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        Gradient Text
      </Text>
      <Text
        variant="md"
        sx={{
          textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
          color: "#4a90e2",
        }}
      >
        Text with Shadow
      </Text>
      <Text
        variant="sm"
        sx={{
          border: "2px solid #e74c3c",
          borderRadius: "8px",
          padding: "8px",
          backgroundColor: "#fdf2f2",
        }}
      >
        Text with Border
      </Text>
    </div>
  ),
};

