import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within, expect } from "@storybook/test";
import { Radio } from "./Radio";
import { useState } from "react";
import React from "react";

const meta: Meta<typeof Radio> = {
  title: "Components/Radio",
  component: Radio,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    labelPosition: {
      control: { type: "select" },
      options: ["right", "left"],
    },
    state: {
      control: { type: "select" },
      options: ["default", "disabled", "error"],
    },
    showLabel: {
      control: { type: "boolean" },
    },
    checked: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Text here",
    checked: false,
  },
};

export const Checked: Story = {
  args: {
    label: "Text here",
    checked: true,
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Radio label="Extra Small" size="xs" />
      <Radio label="Small" size="sm" />
      <Radio label="Medium (default)" size="md" />
      <Radio label="Large" size="lg" />
      <Radio label="Extra Large" size="xl" />
    </div>
  ),
};

export const LabelPositions: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Radio label="Label on the right (default)" labelPosition="right" />
      <Radio label="Label on the left" labelPosition="left" />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Radio label="Default state" state="default" />
      <Radio label="Disabled state" state="disabled" />
      <Radio label="Error state" state="error" />
    </div>
  ),
};

export const WithoutLabel: Story = {
  args: {
    showLabel: false,
  },
};

export const Interactive: Story = {
  render: () => {
    const [selectedValue, setSelectedValue] = useState<string>("option1");

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <Radio
          label="Option 1"
          name="interactive-group"
          value="option1"
          checked={selectedValue === "option1"}
          onChange={() => setSelectedValue("option1")}
        />
        <Radio
          label="Option 2"
          name="interactive-group"
          value="option2"
          checked={selectedValue === "option2"}
          onChange={() => setSelectedValue("option2")}
        />
        <Radio
          label="Option 3"
          name="interactive-group"
          value="option3"
          checked={selectedValue === "option3"}
          onChange={() => setSelectedValue("option3")}
        />
      </div>
    );
  },
};

export const MixedStates: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Radio label="Normal radio" checked={false} />
      <Radio label="Checked radio" checked={true} />
      <Radio label="Disabled radio" state="disabled" />
      <Radio label="Disabled checked radio" checked={true} state="disabled" />
      <Radio label="Error radio" state="error" />
      <Radio label="Error checked radio" checked={true} state="error" />
    </div>
  ),
};

export const DifferentSizesWithStates: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div>
        <h4 style={{ marginBottom: "8px" }}>Extra Small</h4>
        <div style={{ display: "flex", gap: "16px" }}>
          <Radio label="Default" size="xs" />
          <Radio label="Checked" size="xs" checked={true} />
          <Radio label="Disabled" size="xs" state="disabled" />
          <Radio label="Error" size="xs" state="error" />
        </div>
      </div>

      <div>
        <h4 style={{ marginBottom: "8px" }}>Small</h4>
        <div style={{ display: "flex", gap: "16px" }}>
          <Radio label="Default" size="sm" />
          <Radio label="Checked" size="sm" checked={true} />
          <Radio label="Disabled" size="sm" state="disabled" />
          <Radio label="Error" size="sm" state="error" />
        </div>
      </div>

      <div>
        <h4 style={{ marginBottom: "8px" }}>Medium</h4>
        <div style={{ display: "flex", gap: "16px" }}>
          <Radio label="Default" size="md" />
          <Radio label="Checked" size="md" checked={true} />
          <Radio label="Disabled" size="md" state="disabled" />
          <Radio label="Error" size="md" state="error" />
        </div>
      </div>

      <div>
        <h4 style={{ marginBottom: "8px" }}>Large</h4>
        <div style={{ display: "flex", gap: "16px" }}>
          <Radio label="Default" size="lg" />
          <Radio label="Checked" size="lg" checked={true} />
          <Radio label="Disabled" size="lg" state="disabled" />
          <Radio label="Error" size="lg" state="error" />
        </div>
      </div>

      <div>
        <h4 style={{ marginBottom: "8px" }}>Extra Large</h4>
        <div style={{ display: "flex", gap: "16px" }}>
          <Radio label="Default" size="xl" />
          <Radio label="Checked" size="xl" checked={true} />
          <Radio label="Disabled" size="xl" state="disabled" />
          <Radio label="Error" size="xl" state="error" />
        </div>
      </div>
    </div>
  ),
};
