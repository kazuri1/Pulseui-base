import type { Meta, StoryObj } from "@storybook/react";
import { TextInput } from "./TextInput";

const meta: Meta<typeof TextInput> = {
  title: "Components/TextInput",
  component: TextInput,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "Input label",
    },
    required: {
      control: "boolean",
      description: "Whether the field is required",
    },
    placeholder: {
      control: "text",
      description: "Input placeholder text",
    },
    caption: {
      control: "text",
      description: "Caption text below the input",
    },
    error: {
      control: "text",
      description: "Error message to display",
    },
    value: {
      control: "text",
      description: "Input value",
    },
    type: {
      control: { type: "select" },
      options: ["text", "email", "password", "number", "tel", "url", "search"],
      description: "Input type",
    },
    disabled: {
      control: "boolean",
      description: "Whether the input is disabled",
    },
    leftIcon: {
      control: { type: "select" },
      options: ["none", "search", "email", "user", "lock"],
      description: "Left icon for the input",
    },
    rightIcon: {
      control: { type: "select" },
      options: ["none", "search", "email", "user", "lock"],
      description: "Right icon for the input",
    },
    showPasswordToggle: {
      control: "boolean",
      description: "Whether to show password toggle for password inputs",
    },
    passwordVisible: {
      control: "boolean",
      description:
        "Whether password is visible (for controlled password inputs)",
    },
    onChange: {
      action: "changed",
      description: "Callback fired when input value changes",
    },
    onFocus: {
      action: "focused",
      description: "Callback fired when input is focused",
    },
    onBlur: {
      action: "blurred",
      description: "Callback fired when input loses focus",
    },
    onPasswordVisibilityChange: {
      action: "password visibility changed",
      description: "Callback when password visibility changes",
    },
  },
  args: {
    label: "Text Input",
    required: false,
    placeholder: "Placeholder",
    caption: "",
    error: "",
    value: "",
    type: "text",
    disabled: false,
    leftIcon: "none",
    rightIcon: "none",
    showPasswordToggle: false,
    passwordVisible: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    label: "Interactive Text Input",
    placeholder: "Type something...",
    value: "",
    required: false,
    caption: "",
    error: "",
    type: "text",
    disabled: false,
    leftIcon: "none",
    rightIcon: "none",
    showPasswordToggle: false,
    passwordVisible: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Interactive playground with all controls available. Use the Controls panel to change properties and see the input update in real-time.",
      },
    },
  },
};

export const Default: Story = {
  args: {},
};

export const WithLabel: Story = {
  args: {
    label: "Email Address",
    placeholder: "Enter your email",
    type: "email",
    leftIcon: "email",
  },
};

export const Required: Story = {
  args: {
    label: "Full Name",
    required: true,
    placeholder: "Enter your full name",
    leftIcon: "user",
  },
};

export const WithCaption: Story = {
  args: {
    label: "Username",
    placeholder: "Enter your username",
    caption: "Must be at least 3 characters long",
    leftIcon: "user",
  },
};

export const WithError: Story = {
  args: {
    label: "Email Address",
    placeholder: "Enter your email",
    type: "email",
    error: "Please enter a valid email address",
    leftIcon: "email",
  },
};

export const Password: Story = {
  args: {
    label: "Password",
    placeholder: "Enter your password",
    type: "password",
    leftIcon: "lock",
    showPasswordToggle: true,
  },
};

export const Disabled: Story = {
  args: {
    label: "Disabled Input",
    placeholder: "This input is disabled",
    disabled: true,
    value: "Disabled value",
  },
};

export const Search: Story = {
  args: {
    label: "Search",
    placeholder: "Search for anything...",
    type: "search",
    leftIcon: "search",
    rightIcon: "search",
  },
};

export const Number: Story = {
  args: {
    label: "Age",
    placeholder: "Enter your age",
    type: "number",
    caption: "Must be between 18 and 100",
  },
};

export const Phone: Story = {
  args: {
    label: "Phone Number",
    placeholder: "Enter your phone number",
    type: "tel",
    caption: "Format: (123) 456-7890",
  },
};

export const URL: Story = {
  args: {
    label: "Website",
    placeholder: "https://example.com",
    type: "url",
    caption: "Include http:// or https://",
  },
};
