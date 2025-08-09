import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within, expect } from "@storybook/test";
import { Switch } from "./Switch";
import React from "react";

const meta: Meta<typeof Switch> = {
  title: "Components/Switch",
  component: Switch,
  parameters: {
    layout: "padded",
    docs: {
      source: {
        code: `<Switch label="Label" size="md" />`,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "Switch label",
    },
    required: {
      control: "boolean",
      description: "Whether the field is required",
    },
    caption: {
      control: "text",
      description: "Caption text below the switch",
    },
    error: {
      control: "text",
      description: "Error message to display",
    },
    checked: {
      control: "boolean",
      description: "Switch checked state",
    },
    disabled: {
      control: "boolean",
      description: "Whether the switch is disabled",
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "Switch size",
    },
    onChange: {
      action: "changed",
      description: "Callback fired when switch state changes",
    },
  },
  args: {
    label: "Label",
    required: false,
    caption: "",
    error: "",
    checked: false,
    disabled: false,
    size: "md",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Playground: Story = {
  render: (args) => {
    const [isChecked, setIsChecked] = React.useState(args.checked || false);

    return (
      <Switch
        {...args}
        checked={isChecked}
        onChange={(checked) => {
          setIsChecked(checked);
          args.onChange?.(checked);
        }}
      />
    );
  },
  args: {
    label: "Interactive Switch",
    checked: false,
    disabled: false,
    size: "md",
    required: false,
    caption: "",
    error: "",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Interactive playground with all controls available. Try clicking the switch to see it toggle, or use the Controls panel to change properties.",
      },
    },
  },
};

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const WithLabel: Story = {
  args: {
    label: "Enable notifications",
    checked: true,
  },
};

export const Required: Story = {
  args: {
    label: "Accept terms",
    required: true,
    checked: false,
  },
};

export const WithCaption: Story = {
  args: {
    label: "Auto-save",
    caption: "Automatically save your work every 5 minutes",
    checked: true,
  },
};

export const WithError: Story = {
  args: {
    label: "Enable feature",
    error: "This feature is currently unavailable",
    checked: false,
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled switch",
    disabled: true,
    checked: false,
  },
};

export const DisabledChecked: Story = {
  args: {
    label: "Disabled checked switch",
    disabled: true,
    checked: true,
  },
};

export const NoLabel: Story = {
  args: {
    label: "",
    checked: true,
  },
};

export const Small: Story = {
  args: {
    label: "Small switch",
    size: "sm",
    checked: true,
  },
};

export const Large: Story = {
  args: {
    label: "Large switch",
    size: "lg",
    checked: true,
  },
};

