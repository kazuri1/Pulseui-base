import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { StepperItem } from "./StepperItem";
import { Icon } from "../Icon";
import { Check } from "../Icon/IconSet";

const meta: Meta<typeof StepperItem> = {
  title: "Atoms/Stepper/StepperItem",
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
    size: "md",
    status: "default",
    radius: "md",
    showLabel: true,
    showAsterisk: false,
    label: "Label",
    children: "1",
  },
};

export const AllStatuses: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <StepperItem status="default" label="Default Step">1</StepperItem>
      <StepperItem status="active" label="Active Step">2</StepperItem>
      <StepperItem status="complete" label="Complete Step">
        <Icon icon={Check} />
      </StepperItem>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <StepperItem size="xs" label="Extra Small Step">1</StepperItem>
      <StepperItem size="sm" label="Small Step">2</StepperItem>
      <StepperItem size="md" label="Medium Step">3</StepperItem>
      <StepperItem size="lg" label="Large Step">4</StepperItem>
      <StepperItem size="xl" label="Extra Large Step">5</StepperItem>
    </div>
  ),
};

export const WithAsterisk: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <StepperItem status="default" label="Required Step" showAsterisk>1</StepperItem>
      <StepperItem status="active" label="Active Required Step" showAsterisk>2</StepperItem>
      <StepperItem status="complete" label="Completed Required Step" showAsterisk>
        <Icon icon={Check} />
      </StepperItem>
    </div>
  ),
};

export const WithoutLabel: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <StepperItem status="default" showLabel={false}>1</StepperItem>
      <StepperItem status="active" showLabel={false}>2</StepperItem>
      <StepperItem status="complete" showLabel={false}>
        <Icon icon={Check} />
      </StepperItem>
    </div>
  ),
};

export const CustomLabels: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <StepperItem status="default" label="Personal Information">1</StepperItem>
      <StepperItem status="active" label="Payment Details">2</StepperItem>
      <StepperItem status="complete" label="Confirmation">
        <Icon icon={Check} />
      </StepperItem>
      <StepperItem status="default" label="Review Order">4</StepperItem>
    </div>
  ),
};

export const RequiredSteps: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <StepperItem status="default" label="Email Address" showAsterisk>1</StepperItem>
      <StepperItem status="active" label="Password" showAsterisk>2</StepperItem>
      <StepperItem status="complete" label="Confirm Password" showAsterisk>
        <Icon icon={Check} />
      </StepperItem>
      <StepperItem status="default" label="Terms & Conditions">4</StepperItem>
    </div>
  ),
};

export const DifferentRadius: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <StepperItem status="active" label="Rounded" radius="xs">1</StepperItem>
      <StepperItem status="active" label="Rounded" radius="sm">2</StepperItem>
      <StepperItem status="active" label="Rounded" radius="md">3</StepperItem>
      <StepperItem status="active" label="Rounded" radius="lg">4</StepperItem>
      <StepperItem status="active" label="Rounded" radius="xl">5</StepperItem>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <StepperItem status="default" label="Upload Files">📁</StepperItem>
      <StepperItem status="active" label="Process Data">⚙️</StepperItem>
      <StepperItem status="complete" label="Download Results">
        <Icon icon={Check} />
      </StepperItem>
    </div>
  ),
};

export const CustomStyling: Story = {
  args: {
    status: "active",
    size: "lg",
    radius: "lg",
    label: "Custom Styled Step",
    children: "1",
    style: {
      padding: "var(--spacing-md)",
      backgroundColor: "var(--color-gray-1)",
      borderRadius: "var(--radius-md)",
    },
  },
}; 