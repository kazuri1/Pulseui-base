import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./Textarea";

const meta: Meta<typeof Textarea> = {
  title: "Components/atoms/Textarea",
  component: Textarea,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "Textarea label",
    },
    required: {
      control: "boolean",
      description: "Whether the field is required",
    },
    placeholder: {
      control: "text",
      description: "Textarea placeholder text",
    },
    caption: {
      control: "text",
      description: "Caption text below the textarea",
    },
    value: {
      control: "text",
      description: "Textarea value",
    },
    rows: {
      control: { type: "number", min: 1, max: 20 },
      description: "Number of rows to display",
    },
    resizable: {
      control: "boolean",
      description: "Whether textarea can be resized",
    },
    disabled: {
      control: "boolean",
      description: "Whether the textarea is disabled",
    },
    onChange: {
      action: "changed",
      description: "Callback fired when textarea value changes",
    },
    onFocus: {
      action: "focused",
      description: "Callback fired when textarea is focused",
    },
    onBlur: {
      action: "blurred",
      description: "Callback fired when textarea loses focus",
    },
  },
  args: {
    label: "Description",
    required: false,
    placeholder: "Enter your description here...",
    caption: "",
    value: "",
    rows: 4,
    resizable: true,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    label: "Interactive Textarea",
    placeholder: "Type your message here...",
    value: "",
    required: false,
    caption: "",
    rows: 4,
    resizable: true,
    disabled: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Interactive playground with all controls available. Use the Controls panel to change properties and see the textarea update in real-time.",
      },
    },
  },
};

export const Default: Story = {
  args: {},
};

export const WithLabel: Story = {
  args: {
    label: "Bio",
    placeholder: "Tell us about yourself...",
  },
};

export const Required: Story = {
  args: {
    label: "Comments",
    required: true,
    placeholder: "Please provide your comments",
  },
};

export const WithCaption: Story = {
  args: {
    label: "Feedback",
    placeholder: "Share your feedback with us",
    caption: "Your feedback helps us improve our services",
  },
};

export const WithValue: Story = {
  args: {
    label: "Notes",
    value:
      "This is some sample text that demonstrates how the textarea looks with content. It can span multiple lines and show how the component handles longer text.",
  },
};

export const MoreRows: Story = {
  args: {
    label: "Long Description",
    placeholder: "Enter a longer description...",
    rows: 8,
  },
};

export const NoResize: Story = {
  args: {
    label: "Fixed Size",
    placeholder: "This textarea cannot be resized",
    resizable: false,
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Textarea",
    placeholder: "This textarea is disabled",
    disabled: true,
    value: "This content cannot be edited",
  },
};

export const ShortRows: Story = {
  args: {
    label: "Short Input",
    placeholder: "Brief description",
    rows: 2,
  },
};
