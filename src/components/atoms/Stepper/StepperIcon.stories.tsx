import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { StepperIcon } from "./StepperIcon";
import { Icon } from "../Icon";
import { Check } from "../Icon/IconSet";

const meta: Meta<typeof StepperIcon> = {
  title: "Atoms/Stepper/StepperIcon",
  component: StepperIcon,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    status: {
      control: { type: "select" },
      options: ["default", "active", "complete"],
    },
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    radius: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    status: "default",
    size: "md",
    radius: "md",
    children: "1",
  },
};

export const AllStatuses: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <div style={{ textAlign: "center" }}>
        <StepperIcon status="default" size="md">
          1
        </StepperIcon>
        <p style={{ marginTop: "8px", fontSize: "12px" }}>Default</p>
      </div>
      <div style={{ textAlign: "center" }}>
        <StepperIcon status="active" size="md">
          1
        </StepperIcon>
        <p style={{ marginTop: "8px", fontSize: "12px" }}>Active</p>
      </div>
      <div style={{ textAlign: "center" }}>
        <StepperIcon status="complete" size="md">
          <Icon icon={Check} />
        </StepperIcon>
        <p style={{ marginTop: "8px", fontSize: "12px" }}>Complete</p>
      </div>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
        <StepperIcon status="default" size="xs">1</StepperIcon>
        <StepperIcon status="active" size="xs">2</StepperIcon>
        <StepperIcon status="complete" size="xs"><Icon icon={Check} /></StepperIcon>
        <span style={{ fontSize: "12px" }}>Extra Small (xs)</span>
      </div>
      <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
        <StepperIcon status="default" size="sm">1</StepperIcon>
        <StepperIcon status="active" size="sm">2</StepperIcon>
        <StepperIcon status="complete" size="sm"><Icon icon={Check} /></StepperIcon>
        <span style={{ fontSize: "12px" }}>Small (sm)</span>
      </div>
      <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
        <StepperIcon status="default" size="md">1</StepperIcon>
        <StepperIcon status="active" size="md">2</StepperIcon>
        <StepperIcon status="complete" size="md"><Icon icon={Check} /></StepperIcon>
        <span style={{ fontSize: "12px" }}>Medium (md)</span>
      </div>
      <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
        <StepperIcon status="default" size="lg">1</StepperIcon>
        <StepperIcon status="active" size="lg">2</StepperIcon>
        <StepperIcon status="complete" size="lg"><Icon icon={Check} /></StepperIcon>
        <span style={{ fontSize: "12px" }}>Large (lg)</span>
      </div>
      <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
        <StepperIcon status="default" size="xl">1</StepperIcon>
        <StepperIcon status="active" size="xl">2</StepperIcon>
        <StepperIcon status="complete" size="xl"><Icon icon={Check} /></StepperIcon>
        <span style={{ fontSize: "12px" }}>Extra Large (xl)</span>
      </div>
    </div>
  ),
};

export const AllRadius: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
        <StepperIcon status="active" size="md" radius="xs">1</StepperIcon>
        <span style={{ fontSize: "12px" }}>Radius: Extra Small (xs)</span>
      </div>
      <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
        <StepperIcon status="active" size="md" radius="sm">2</StepperIcon>
        <span style={{ fontSize: "12px" }}>Radius: Small (sm)</span>
      </div>
      <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
        <StepperIcon status="active" size="md" radius="md">3</StepperIcon>
        <span style={{ fontSize: "12px" }}>Radius: Medium (md)</span>
      </div>
      <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
        <StepperIcon status="active" size="md" radius="lg">4</StepperIcon>
        <span style={{ fontSize: "12px" }}>Radius: Large (lg)</span>
      </div>
      <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
        <StepperIcon status="active" size="md" radius="xl">5</StepperIcon>
        <span style={{ fontSize: "12px" }}>Radius: Extra Large (xl)</span>
      </div>
      <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
        <StepperIcon status="active" size="md" radius={0}>6</StepperIcon>
        <span style={{ fontSize: "12px" }}>Radius: Custom (0px)</span>
      </div>
    </div>
  ),
};

export const WithNumbers: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <StepperIcon status="default" size="md">1</StepperIcon>
      <StepperIcon status="active" size="md">2</StepperIcon>
      <StepperIcon status="complete" size="md"><Icon icon={Check} /></StepperIcon>
      <StepperIcon status="default" size="md">3</StepperIcon>
      <StepperIcon status="default" size="md">4</StepperIcon>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <StepperIcon status="default" size="md">📝</StepperIcon>
      <StepperIcon status="active" size="md">✏️</StepperIcon>
      <StepperIcon status="complete" size="md"><Icon icon={Check} /></StepperIcon>
      <StepperIcon status="default" size="md">📤</StepperIcon>
      <StepperIcon status="default" size="md">✅</StepperIcon>
    </div>
  ),
};

export const CustomStyling: Story = {
  args: {
    status: "active",
    size: "lg",
    radius: "lg",
    children: "1",
    style: {
      boxShadow: "var(--shadow-lg)",
      transform: "scale(1.1)",
    },
  },
}; 