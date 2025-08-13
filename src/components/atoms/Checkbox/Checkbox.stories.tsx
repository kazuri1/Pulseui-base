import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Checkbox } from "./Checkbox";
import { Text } from "../Text";
import React from "react";

const meta: Meta<typeof Checkbox> = {
  title: "Atoms/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A simple and accessible checkbox component built with PulseUI design system. Features multiple sizes, states, and proper accessibility support.",
      },
    },
  },
  argTypes: {
    onChange: { action: "checkbox changed" },
    onFocus: { action: "focused" },
    onBlur: { action: "blurred" },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "Size of the checkbox",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the checkbox is disabled",
    },
    required: {
      control: { type: "boolean" },
      description: "Whether the checkbox is required",
    },
    checked: {
      control: { type: "boolean" },
      description: "Controlled checked state",
    },
    defaultChecked: {
      control: { type: "boolean" },
      description: "Default checked state for uncontrolled usage",
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

// Basic checkbox
export const Default: Story = {
  args: {
    label: "Accept terms and conditions",
  },
};

// Checkbox with different sizes
export const Sizes: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        alignItems: "flex-start",
      }}
    >
      <Checkbox size="sm" label="Small checkbox" />
      <Checkbox size="md" label="Medium checkbox (default)" />
      <Checkbox size="lg" label="Large checkbox" />
    </div>
  ),
};

// Checkbox states
export const States: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        alignItems: "flex-start",
      }}
    >
      <Checkbox label="Unchecked checkbox" />
      <Checkbox label="Checked checkbox" defaultChecked />
      <Checkbox label="Disabled unchecked" disabled />
      <Checkbox label="Disabled checked" disabled defaultChecked />
      <Checkbox label="Required checkbox" required />
    </div>
  ),
};

// Checkbox with error state
export const WithError: Story = {
  args: {
    label: "Accept terms and conditions",
    error: "This field is required",
    required: true,
  },
};

// Controlled checkbox
export const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          alignItems: "flex-start",
        }}
      >
        <Checkbox
          label="Controlled checkbox"
          checked={checked}
          onChange={setChecked}
        />
        <Text variant="sm" color="secondary">
          Current state: {checked ? "Checked" : "Unchecked"}
        </Text>
        <button onClick={() => setChecked(!checked)}>Toggle checkbox</button>
      </div>
    );
  },
};

// Checkbox group example
export const CheckboxGroup: Story = {
  render: () => {
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

    const options = [
      {
        id: "email",
        label: "Email notifications",
      },
      {
        id: "sms",
        label: "SMS notifications",
      },
      {
        id: "push",
        label: "Push notifications",
      },
      {
        id: "marketing",
        label: "Marketing emails",
      },
    ];

    const handleOptionChange = (optionId: string, checked: boolean) => {
      if (checked) {
        setSelectedOptions((prev) => [...prev, optionId]);
      } else {
        setSelectedOptions((prev) => prev.filter((id) => id !== optionId));
      }
    };

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          alignItems: "flex-start",
        }}
      >
        <Text variant="lg" weight="semibold">
          Notification Preferences
        </Text>
        {options.map((option) => (
          <Checkbox
            key={option.id}
            id={option.id}
            label={option.label}
            checked={selectedOptions.includes(option.id)}
            onChange={(checked) => handleOptionChange(option.id, checked)}
          />
        ))}
        <Text variant="sm" color="secondary">
          Selected: {selectedOptions.length} of {options.length}
        </Text>
      </div>
    );
  },
};

// Simple example
export const Simple: Story = {
  args: {
    label: "Remember me",
  },
  parameters: {
    docs: {
      description: {
        story:
          "A simple checkbox with just a label - perfect for basic use cases.",
      },
    },
  },
};

// Inline layout example
export const InlineLayout: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "20px",
        alignItems: "flex-start",
        flexWrap: "wrap",
      }}
    >
      <Checkbox label="Option 1" />
      <Checkbox label="Option 2" defaultChecked />
      <Checkbox label="Option 3" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Multiple checkboxes in a horizontal layout showing the inline alignment.",
      },
    },
  },
};
