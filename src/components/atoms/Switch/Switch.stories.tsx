import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./Switch";

const meta: Meta<typeof Switch> = {
  title: "Components/atoms/Switch",
  component: Switch,
  parameters: {
    layout: "padded",
    docs: {
      source: {
        code: `<Switch label="Label" size="md" />`,
      },
    },
  },
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
