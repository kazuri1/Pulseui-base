import type { Meta, StoryObj } from "@storybook/react";
import { VariantSelector } from "./VariantSelector";
import { Button } from "../Button/Button";
import { Badge } from "../Badge/Badge";
import { Alert } from "../Alert/Alert";

const meta: Meta<typeof VariantSelector> = {
  title: "Atoms/VariantSelector",
  component: VariantSelector,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A reusable component that allows switching between different variants of any component. Perfect for development, testing, and showcasing component variations.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "Title displayed above the variant selector",
    },
    variants: {
      control: "object",
      description: "Array of variant options to choose from",
    },
    defaultVariant: {
      control: "text",
      description: "Default selected variant",
    },
    label: {
      control: "text",
      description: "Label for the variant selector dropdown",
    },
    showVariantInfo: {
      control: "boolean",
      description: "Whether to show the current variant information",
    },
    onVariantChange: {
      action: "variantChanged",
      description: "Callback when variant changes",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Button variants story
export const ButtonVariants: Story = {
  args: {
    title: "Button Variant Selector",
    variants: ["filled", "subtle", "light", "outline", "white", "default"],
    defaultVariant: "filled",
    label: "Select Button Variant:",
    children: (
      <Button size="lg" onClick={() => console.log("Button clicked!")}>
        Sample Button
      </Button>
    ),
  },
};

// Badge variants story
export const BadgeVariants: Story = {
  args: {
    title: "Badge Variant Selector",
    variants: ["filled", "outline", "subtle"],
    defaultVariant: "filled",
    label: "Select Badge Variant:",
    children: <Badge size="md">Sample Badge</Badge>,
  },
};

// Alert variants story
export const AlertVariants: Story = {
  args: {
    title: "Alert Variant Selector",
    variants: ["info", "success", "warning", "error"],
    defaultVariant: "info",
    label: "Select Alert Variant:",
    children: (
      <Alert title="Sample Alert">
        This is a sample alert message to demonstrate the variant selector.
      </Alert>
    ),
  },
};

// Custom styling story
export const CustomStyling: Story = {
  args: {
    title: "Custom Styled Variant Selector",
    variants: ["primary", "secondary", "tertiary"],
    defaultVariant: "primary",
    label: "Choose Style:",
    showVariantInfo: false,
    children: (
      <Button size="lg" onClick={() => console.log("Custom button clicked!")}>
        Custom Button
      </Button>
    ),
    sx: {
      backgroundColor: "var(--color-primary-50)",
      borderColor: "var(--color-primary-200)",
    },
  },
};

// Multiple components story
export const MultipleComponents: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <VariantSelector
        title="Button Variants"
        variants={["filled", "outline", "subtle"]}
        defaultVariant="filled"
        label="Button Style:"
      >
        <Button size="md" onClick={() => console.log("Button clicked!")}>
          Action Button
        </Button>
      </VariantSelector>

      <VariantSelector
        title="Badge Variants"
        variants={["filled", "outline"]}
        defaultVariant="filled"
        label="Badge Style:"
      >
        <Badge size="sm">Status</Badge>
      </VariantSelector>

      <VariantSelector
        title="Alert Variants"
        variants={["info", "success", "warning"]}
        defaultVariant="info"
        label="Alert Type:"
      >
        <Alert title="Notification">
          This demonstrates multiple variant selectors working together.
        </Alert>
      </VariantSelector>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Multiple VariantSelector components can be used together to create comprehensive component playgrounds.",
      },
    },
  },
};
