import type { Meta, StoryObj } from "@storybook/react";
import { Stepper } from "./Stepper";

const meta: Meta<typeof Stepper> = {
  title: "Components/Stepper",
  component: Stepper,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    radius: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    showLabels: {
      control: { type: "boolean" },
    },
    showConnectors: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultSteps = [
  { id: "1", content: "1", label: "Step 1", status: "complete" as const },
  { id: "2", content: "2", label: "Step 2", status: "active" as const },
  { id: "3", content: "3", label: "Step 3", status: "default" as const },
];

export const Default: Story = {
  args: {
    steps: defaultSteps,
  },
};

export const AllComplete: Story = {
  args: {
    steps: [
      { id: "1", content: "1", label: "Step 1", status: "complete" },
      { id: "2", content: "2", label: "Step 2", status: "complete" },
      { id: "3", content: "3", label: "Step 3", status: "complete" },
    ],
  },
};

export const MixedStates: Story = {
  args: {
    steps: [
      { id: "1", content: "1", label: "Completed", status: "complete" },
      { id: "2", content: "2", label: "Active", status: "active" },
      { id: "3", content: "3", label: "Pending", status: "default" },
      { id: "4", content: "4", label: "Future", status: "default" },
    ],
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
      <div>
        <h4>Extra Small</h4>
        <Stepper steps={defaultSteps} size="xs" />
      </div>
      <div>
        <h4>Small</h4>
        <Stepper steps={defaultSteps} size="sm" />
      </div>
      <div>
        <h4>Medium</h4>
        <Stepper steps={defaultSteps} size="md" />
      </div>
      <div>
        <h4>Large</h4>
        <Stepper steps={defaultSteps} size="lg" />
      </div>
      <div>
        <h4>Extra Large</h4>
        <Stepper steps={defaultSteps} size="xl" />
      </div>
    </div>
  ),
};

export const WithoutLabels: Story = {
  args: {
    steps: defaultSteps,
    showLabels: false,
  },
};

export const WithoutConnectors: Story = {
  args: {
    steps: defaultSteps,
    showConnectors: false,
  },
};

export const CustomRadius: Story = {
  args: {
    steps: defaultSteps,
    radius: "xl",
  },
};

export const LongLabels: Story = {
  args: {
    steps: [
      {
        id: "1",
        content: "1",
        label: "Personal Information and Details",
        status: "complete",
      },
      {
        id: "2",
        content: "2",
        label: "Contact Information and Preferences",
        status: "active",
      },
      {
        id: "3",
        content: "3",
        label: "Payment Method and Billing Address",
        status: "default",
      },
    ],
  },
};

export const WithIcons: Story = {
  args: {
    steps: [
      { id: "1", content: "👤", label: "User Profile", status: "complete" },
      { id: "2", content: "⚙️", label: "Settings", status: "active" },
      { id: "3", content: "💳", label: "Payment", status: "default" },
      { id: "4", content: "✅", label: "Confirmation", status: "default" },
    ],
  },
};

export const FiveSteps: Story = {
  args: {
    steps: [
      { id: "1", content: "1", label: "Step 1", status: "complete" },
      { id: "2", content: "2", label: "Step 2", status: "complete" },
      { id: "3", content: "3", label: "Step 3", status: "active" },
      { id: "4", content: "4", label: "Step 4", status: "default" },
      { id: "5", content: "5", label: "Step 5", status: "default" },
    ],
  },
};

export const CustomStyling: Story = {
  args: {
    steps: defaultSteps,
    sx: {
      backgroundColor: "var(--color-gray-1)",
      padding: "var(--spacing-lg)",
      borderRadius: "var(--radius-md)",
    },
  },
};
