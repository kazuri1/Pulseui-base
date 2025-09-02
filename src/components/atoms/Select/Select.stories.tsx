import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Select } from "./Select";


const meta: Meta<typeof Select> = {
  title: "Atoms/Select",
  component: Select,
  parameters: {
    docs: {
      description: {
        component: `
A dropdown select component that allows users to choose from a list of options.

## Features
- **Accessibility**: Full keyboard navigation and screen reader support
- **Sizes**: Three size variants (sm, md, lg)
- **States**: Open, closed, disabled, and error states
- **Controlled/Uncontrolled**: Supports both controlled and uncontrolled usage
- **Form Integration**: Works seamlessly with HTML forms
- **Keyboard Navigation**: Arrow keys, Enter, Escape, and Space support

## Usage
\`\`\`tsx
import { Select } from '@pulseui/atoms';

const options = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
];

<Select
  label="Choose an option"
  options={options}
  onChange(() => {})
/>
\`\`\`
        `,
      },
    },
  },
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "Size of the select",
    },
    value: {
      control: { type: "text" },
      description: "Controlled selected value",
    },
    defaultValue: {
      control: { type: "text" },
      description: "Default selected value for uncontrolled usage",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the select is disabled",
    },
    required: {
      control: { type: "boolean" },
      description: "Whether the select is required",
    },
    error: {
      control: { type: "text" },
      description: "Error message to display",
    },
    placeholder: {
      control: { type: "text" },
      description: "Placeholder text when no option is selected",
    },
    onChange: {
      action: "changed",
      description: "Callback when selection changes",
    },
  },
  args: {
    label: "Choose an option",
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2" },
      { value: "option3", label: "Option 3" },
      { value: "option4", label: "Option 4 (Disabled)", disabled: true },
    ],
    placeholder: "Select an option",
    size: "md",
    disabled: false,
    required: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithDefaultValue: Story = {
  args: {
    defaultValue: "option2",
  },
};

export const Required: Story = {
  args: {
    required: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithError: Story = {
  args: {
    error: "Please select a valid option",
  },
};

export const CustomPlaceholder: Story = {
  args: {
    placeholder: "Choose your favorite color",
    options: [
      { value: "red", label: "Red" },
      { value: "blue", label: "Blue" },
      { value: "green", label: "Green" },
      { value: "yellow", label: "Yellow" },
    ],
  },
};

export const Small: Story = {
  args: {
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
  },
};

export const NoLabel: Story = {
  args: {
    label: undefined,
  },
};

export const Controlled: Story = {
  args: {
    value: "option2",
  },
};

export const ManyOptions: Story = {
  args: {
    options: Array.from({ length: 20 }, (_, i) => ({
      value: `option${i + 1}`,
      label: `Option ${i + 1}`,
    })),
  },
  parameters: {
    docs: {
      description: {
        story: "Select with many options to demonstrate scrolling behavior.",
      },
    },
  },
};

export const DisabledOptions: Story = {
  args: {
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2 (Disabled)", disabled: true },
      { value: "option3", label: "Option 3" },
      { value: "option4", label: "Option 4 (Disabled)", disabled: true },
      { value: "option5", label: "Option 5" },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: "Select with some disabled options that cannot be selected.",
      },
    },
  },
};

export const MultipleSelects: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Select
        label="Country"
        options={[
          { value: "us", label: "United States" },
          { value: "ca", label: "Canada" },
          { value: "uk", label: "United Kingdom" },
          { value: "de", label: "Germany" },
        ]}
        placeholder="Select your country"
      />
      <Select
        label="Language"
        options={[
          { value: "en", label: "English" },
          { value: "es", label: "Spanish" },
          { value: "fr", label: "French" },
          { value: "de", label: "German" },
        ]}
        placeholder="Select your language"
      />
      <Select
        label="Theme"
        options={[
          { value: "light", label: "Light" },
          { value: "dark", label: "Dark" },
          { value: "auto", label: "Auto" },
        ]}
        placeholder="Choose theme"
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Example of multiple select components in a form-like layout.",
      },
    },
  },
};
