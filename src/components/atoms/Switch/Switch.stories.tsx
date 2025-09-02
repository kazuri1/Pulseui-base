import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./Switch";

const meta: Meta<typeof Switch> = {
  title: "Atoms/Switch",
  component: Switch,
  parameters: {
    docs: {
      description: {
        component: `
A toggle switch component that allows users to turn options on or off.

## Features
- **Accessibility**: Full keyboard navigation and screen reader support
- **Sizes**: Three size variants (sm, md, lg)
- **States**: On, off, disabled, and error states
- **Controlled/Uncontrolled**: Supports both controlled and uncontrolled usage
- **Form Integration**: Works seamlessly with HTML forms

## Usage
\`\`\`tsx
import { Switch } from '@pulseui/atoms';

<Switch
  label="Enable notifications"
  onChange={() => {}}
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
      description: "Size of the switch",
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
      description: "Whether the switch is disabled",
    },
    required: {
      control: { type: "boolean" },
      description: "Whether the switch is required",
    },
    error: {
      control: { type: "text" },
      description: "Error message to display",
    },
    onChange: {
      action: "changed",
      description: "Callback when switch state changes",
    },
  },
  args: {
    label: "Enable notifications",
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
    error: "This setting cannot be enabled",
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

export const MultipleSwitches: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Switch
        label="Email notifications"
        defaultChecked={true}
        onChange={() => {}}
      />
      <Switch
        label="SMS notifications"
        onChange={() => {}}
      />
      <Switch
        label="Push notifications (Disabled)"
        disabled={true}
        onChange={() => {}}
      />
      <Switch
        label="Marketing emails (Required)"
        required={true}
        onChange={() => {}}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Example of multiple switches in a settings-like layout.",
      },
    },
  },
};
