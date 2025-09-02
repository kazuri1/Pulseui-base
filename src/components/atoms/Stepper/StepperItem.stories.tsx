import type { Meta, StoryObj } from "@storybook/react";
// import { userEvent, within, expect } from "@storybook/test";
import { StepperItem } from "./StepperItem";

const meta: Meta<typeof StepperItem> = {
  title: "Components/StepperItem",
  component: StepperItem,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    status: {
      control: { type: "select" },
      options: ["default", "active", "complete"],
    },
    radius: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    showLabel: {
      control: { type: "boolean" },
    },
    showAsterisk: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Step Label",
    children: "1",
  },
};

export const AllStatuses: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <StepperItem status="default" label="Default Step">
        1
      </StepperItem>
      <StepperItem status="active" label="Active Step">
        2
      </StepperItem>
      <StepperItem status="complete" label="Complete Step">
        3
      </StepperItem>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <StepperItem size="xs" label="Extra Small">
        1
      </StepperItem>
      <StepperItem size="sm" label="Small">
        2
      </StepperItem>
      <StepperItem size="md" label="Medium">
        3
      </StepperItem>
      <StepperItem size="lg" label="Large">
        4
      </StepperItem>
      <StepperItem size="xl" label="Extra Large">
        5
      </StepperItem>
    </div>
  ),
};

export const WithAsterisk: Story = {
  args: {
    label: "Required Step",
    showAsterisk: true,
    children: "1",
  },
};

export const WithoutLabel: Story = {
  args: {
    showLabel: false,
    children: "1",
  },
};

export const CustomLabels: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <StepperItem label="Personal Information">1</StepperItem>
      <StepperItem label="Contact Details">2</StepperItem>
      <StepperItem label="Preferences">3</StepperItem>
      <StepperItem label="Confirmation">4</StepperItem>
    </div>
  ),
};

export const RequiredSteps: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <StepperItem label="Name" showAsterisk>
        1
      </StepperItem>
      <StepperItem label="Email" showAsterisk>
        2
      </StepperItem>
      <StepperItem label="Phone">3</StepperItem>
      <StepperItem label="Address" showAsterisk>
        4
      </StepperItem>
    </div>
  ),
};

export const DifferentRadius: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <StepperItem radius="xs" label="Sharp">
        1
      </StepperItem>
      <StepperItem radius="sm" label="Rounded">
        2
      </StepperItem>
      <StepperItem radius="md" label="Medium">
        3
      </StepperItem>
      <StepperItem radius="lg" label="Large">
        4
      </StepperItem>
      <StepperItem radius="xl" label="Extra Large">
        5
      </StepperItem>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <StepperItem label="User Profile">👤</StepperItem>
      <StepperItem label="Settings">⚙️</StepperItem>
      <StepperItem label="Payment">💳</StepperItem>
      <StepperItem label="Confirmation"></StepperItem>
    </div>
  ),
};

export const CustomStyling: Story = {
  args: {
    label: "Custom Step",
    children: "1",
    sx: {
      backgroundColor: "var(--color-blue-1)",
      padding: "var(--spacing-md)",
      borderRadius: "var(--radius-md)",
    },
  },
};

