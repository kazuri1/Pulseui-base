import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within, expect } from "@storybook/test";
import { useState } from "react";
import { PasswordInput } from "./PasswordInput";

const meta: Meta<typeof PasswordInput> = {
  title: "Components/PasswordInput",
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
    showStrengthMeter: { control: "boolean" },
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

export const WithStrengthMeter: Story = {
  render: (args) => {
    const [value, setValue] = useState("");
    return <PasswordInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: "Password",
    placeholder: "Enter your password",
    showStrengthMeter: true,
  },
};

export const StrengthMeterExamples: Story = {
  render: () => {
    const [weakPassword, setWeakPassword] = useState("abc");
    const [mediumPassword, setMediumPassword] = useState("abc123");
    const [strongPassword, setStrongPassword] = useState("Abc123!@#");

    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          width: "400px",
        }}
      >
        <div>
          <h3
            style={{ marginBottom: "8px", fontSize: "16px", fontWeight: "600" }}
          >
            Weak Password
          </h3>
          <PasswordInput
            label="Password"
            placeholder="Enter your password"
            value={weakPassword}
            onChange={setWeakPassword}
            showStrengthMeter={true}
          />
        </div>

        <div>
          <h3
            style={{ marginBottom: "8px", fontSize: "16px", fontWeight: "600" }}
          >
            Medium Password
          </h3>
          <PasswordInput
            label="Password"
            placeholder="Enter your password"
            value={mediumPassword}
            onChange={setMediumPassword}
            showStrengthMeter={true}
          />
        </div>

        <div>
          <h3
            style={{ marginBottom: "8px", fontSize: "16px", fontWeight: "600" }}
          >
            Strong Password
          </h3>
          <PasswordInput
            label="Password"
            placeholder="Enter your password"
            value={strongPassword}
            onChange={setStrongPassword}
            showStrengthMeter={true}
          />
        </div>
      </div>
    );
  },
};

