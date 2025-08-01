import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { PasswordInput } from "./PasswordInput";

const meta: Meta<typeof PasswordInput> = {
  title: "Atoms/PasswordInput",
  component: PasswordInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    placeholder: { control: "text" },
    value: { control: "text" },
    disabled: { control: "boolean" },
    required: { control: "boolean" },
    showPasswordToggle: { control: "boolean" },
    caption: { control: "text" },
    error: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState("");
    return <PasswordInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: "Password",
    placeholder: "Enter your password",
  },
};

export const WithLabel: Story = {
  render: (args) => {
    const [value, setValue] = useState("");
    return <PasswordInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: "Password",
    placeholder: "Enter your password",
    required: true,
  },
};

export const WithCaption: Story = {
  render: (args) => {
    const [value, setValue] = useState("");
    return <PasswordInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: "Password",
    placeholder: "Enter your password",
    caption: "Must be at least 8 characters long",
  },
};

export const WithError: Story = {
  render: (args) => {
    const [value, setValue] = useState("");
    return <PasswordInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: "Password",
    placeholder: "Enter your password",
    error: "Password is required",
  },
};

export const Disabled: Story = {
  args: {
    label: "Password",
    placeholder: "Enter your password",
    disabled: true,
    value: "password123",
  },
};

export const WithoutToggle: Story = {
  render: (args) => {
    const [value, setValue] = useState("");
    return <PasswordInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: "Password",
    placeholder: "Enter your password",
    showPasswordToggle: false,
  },
};

export const ControlledVisibility: Story = {
  render: () => {
    const [value, setValue] = useState("");
    const [isVisible, setIsVisible] = useState(false);

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        <PasswordInput
          label="Controlled Password Visibility"
          placeholder="Enter your password"
          value={value}
          onChange={setValue}
          passwordVisible={isVisible}
          onPasswordVisibilityChange={setIsVisible}
        />
        <div style={{ fontSize: "14px", color: "#666" }}>
          <p>Current value: {value}</p>
          <p>Password visible: {isVisible ? "Yes" : "No"}</p>
        </div>
      </div>
    );
  },
};

export const AllStates: Story = {
  render: () => {
    const [value, setValue] = useState("");

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          width: "300px",
        }}
      >
        <PasswordInput
          label="Default Password"
          placeholder="Enter your password"
          value={value}
          onChange={setValue}
        />

        <PasswordInput
          label="Required Password"
          placeholder="Enter your password"
          required
          value={value}
          onChange={setValue}
        />

        <PasswordInput
          label="Password with Caption"
          placeholder="Enter your password"
          caption="Must be at least 8 characters"
          value={value}
          onChange={setValue}
        />

        <PasswordInput
          label="Password with Error"
          placeholder="Enter your password"
          error="Password is too short"
          value={value}
          onChange={setValue}
        />

        <PasswordInput
          label="Disabled Password"
          placeholder="Enter your password"
          disabled
          value="password123"
        />
      </div>
    );
  },
};
