import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
  title: "Atoms/Checkbox",
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component: `
A checkbox component that allows users to select one or more options from a list.

## Features
- **Accessibility**: Full keyboard navigation and screen reader support
- **Sizes**: Three size variants (sm, md, lg)
- **States**: Checked, unchecked, disabled, and error states
- **Controlled/Uncontrolled**: Supports both controlled and uncontrolled usage
- **Form Integration**: Works seamlessly with HTML forms

## Usage
\`\`\`tsx
import { Checkbox } from '@pulseui/atoms';

<Checkbox
  label="Accept terms and conditions"
  required
  onChange={(checked) => {}}
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
      description: "Size of the checkbox",
    },
    checked: {
      control: { type: "boolean" },
      description: "Controlled checked state",
    },
    defaultChecked: {
      control: { type: "boolean" },
      description: "Default checked state for uncontrolled usage",
    },
    disabled: {
      control: { type: "boolean" },
      description: "Whether the checkbox is disabled",
    },
    required: {
      control: { type: "boolean" },
      description: "Whether the checkbox is required",
    },
    error: {
      control: { type: "text" },
      description: "Error message to display",
    },
    onChange: {
      action: "changed",
      description: "Callback when checkbox state changes",
    },
  },
  args: {
    label: "Accept terms and conditions",
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

export const Checked: Story = {
  args: {
    defaultChecked: true,
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

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    defaultChecked: true,
  },
};

export const WithError: Story = {
  args: {
    error: "You must accept the terms to continue",
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
    checked: true,
  },
};

export const MultipleCheckboxes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Checkbox
        label="Option 1"
        defaultChecked={true}
        onChange={() => {}}
      />
      <Checkbox
        label="Option 2"
        onChange={() => {}}
      />
      <Checkbox
        label="Option 3 (Disabled)"
        disabled={true}
        onChange={() => {}}
      />
      <Checkbox
        label="Option 4 (Required)"
        required={true}
        onChange={() => {}}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Example of multiple checkboxes in a form-like layout.",
      },
    },
  },
};