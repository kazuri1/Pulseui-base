import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within, expect } from "@storybook/test";
import { useState } from "react";
import { PinInput } from "./PinInput";

const meta: Meta<typeof PinInput> = {
  title: "Components/Atoms/PinInput",
  component: PinInput,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A PinInput component for secure PIN entry with accessibility features, placeholder support (default: '0'), keyboard navigation, and screen reader compatibility. Perfect for security verification flows.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text", description: "Label for the PIN input" },
    value: { control: "text", description: "Current PIN value" },
    disabled: {
      control: "boolean",
      description: "Whether the input is disabled",
    },
    required: {
      control: "boolean",
      description: "Whether the input is required",
    },
    mask: {
      control: "boolean",
      description: "Whether to mask the PIN with dots",
    },
    length: { control: "number", description: "Number of PIN digits" },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl"],
      description: "Size of the input fields",
    },
    caption: { control: "text", description: "Caption text below the input" },
    error: { control: "text", description: "Error message to display" },
    placeholder: {
      control: "text",
      description: "Placeholder character for empty inputs",
    },
    showLabel: { control: "boolean", description: "Whether to show the label" },
    helperText: { control: "text", description: "Helper text below the input" },
    ariaLabel: {
      control: "text",
      description: "Accessibility label for screen readers",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    const [value, setValue] = useState("");
    return <PinInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: "Security PIN",
    placeholder: "0",
    helperText:
      "Enter your 4-digit PIN. Placeholder shows '0' in empty fields.",
  },
};

export const WithLabel: Story = {
  render: (args) => {
    const [value, setValue] = useState("");
    return <PinInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: "Security PIN",
    required: true,
    placeholder: "0",
    helperText: "This field is required",
  },
};

export const WithCaption: Story = {
  render: (args) => {
    const [value, setValue] = useState("");
    return <PinInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: "Verification Code",
    caption: "Enter the code sent to your phone",
    length: 6,
  },
};

export const WithError: Story = {
  render: (args) => {
    const [value, setValue] = useState("");
    return <PinInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: "PIN Code",
    placeholder: "0",
    error: "Invalid PIN code. Please try again.",
    helperText: "Enter the correct 4-digit PIN",
  },
};

export const AccessibilityFocused: Story = {
  render: (args) => {
    const [value, setValue] = useState("");
    return <PinInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: "Accessible PIN Input",
    placeholder: "0",
    required: true,
    helperText:
      "Fully accessible with keyboard navigation, screen reader support, and ARIA labels",
    ariaLabel: "Enter your security PIN for account access",
    length: 4,
  },
  parameters: {
    docs: {
      description: {
        story:
          "This PIN input demonstrates all accessibility features including keyboard navigation, proper ARIA labels, screen reader instructions, and placeholder support.",
      },
    },
  },
};

export const Disabled: Story = {
  args: {
    label: "PIN Code",
    disabled: true,
    value: "1234",
    placeholder: "0",
    helperText: "This PIN input is disabled",
  },
};

export const PlaceholderExamples: Story = {
  render: () => {
    const [value1, setValue1] = useState("");
    const [value2, setValue2] = useState("");
    const [value3, setValue3] = useState("");

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
            Default Placeholder: "0"
          </h3>
          <PinInput
            label="Security PIN"
            value={value1}
            onChange={setValue1}
            placeholder="0"
            helperText="Default placeholder shows '0' in empty fields"
          />
        </div>

        <div>
          <h3
            style={{ marginBottom: "8px", fontSize: "16px", fontWeight: "600" }}
          >
            Custom Placeholder: "X"
          </h3>
          <PinInput
            label="Security PIN"
            value={value2}
            onChange={setValue2}
            placeholder="X"
            helperText="Custom placeholder shows 'X' in empty fields"
          />
        </div>

        <div>
          <h3
            style={{ marginBottom: "8px", fontSize: "16px", fontWeight: "600" }}
          >
            No Placeholder
          </h3>
          <PinInput
            label="Security PIN"
            value={value3}
            onChange={setValue3}
            placeholder=""
            helperText="No placeholder - empty fields remain blank"
          />
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Examples of different placeholder options. The default placeholder is '0' as requested.",
      },
    },
  },
};

export const Unmasked: Story = {
  render: (args) => {
    const [value, setValue] = useState("");
    return <PinInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: "PIN Code (Visible)",
    mask: false,
  },
};

export const SixDigit: Story = {
  render: (args) => {
    const [value, setValue] = useState("");
    return <PinInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: "6-Digit Code",
    length: 6,
  },
};

export const AllSizes: Story = {
  render: () => {
    const [smallValue, setSmallValue] = useState("");
    const [mediumValue, setMediumValue] = useState("");
    const [largeValue, setLargeValue] = useState("");
    const [xlValue, setXlValue] = useState("");

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
            Small Size
          </h3>
          <PinInput
            label="Small PIN"
            value={smallValue}
            onChange={setSmallValue}
            size="sm"
          />
        </div>

        <div>
          <h3
            style={{ marginBottom: "8px", fontSize: "16px", fontWeight: "600" }}
          >
            Medium Size (Default)
          </h3>
          <PinInput
            label="Medium PIN"
            value={mediumValue}
            onChange={setMediumValue}
            size="md"
          />
        </div>

        <div>
          <h3
            style={{ marginBottom: "8px", fontSize: "16px", fontWeight: "600" }}
          >
            Large Size
          </h3>
          <PinInput
            label="Large PIN"
            value={largeValue}
            onChange={setLargeValue}
            size="lg"
          />
        </div>

        <div>
          <h3
            style={{ marginBottom: "8px", fontSize: "16px", fontWeight: "600" }}
          >
            Extra Large Size
          </h3>
          <PinInput
            label="XL PIN"
            value={xlValue}
            onChange={setXlValue}
            size="xl"
          />
        </div>
      </div>
    );
  },
};

export const DifferentLengths: Story = {
  render: () => {
    const [threeDigit, setThreeDigit] = useState("");
    const [fourDigit, setFourDigit] = useState("");
    const [sixDigit, setSixDigit] = useState("");
    const [eightDigit, setEightDigit] = useState("");

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
            3-Digit PIN
          </h3>
          <PinInput
            label="3-Digit Code"
            value={threeDigit}
            onChange={setThreeDigit}
            length={3}
          />
        </div>

        <div>
          <h3
            style={{ marginBottom: "8px", fontSize: "16px", fontWeight: "600" }}
          >
            4-Digit PIN (Default)
          </h3>
          <PinInput
            label="4-Digit Code"
            value={fourDigit}
            onChange={setFourDigit}
            length={4}
          />
        </div>

        <div>
          <h3
            style={{ marginBottom: "8px", fontSize: "16px", fontWeight: "600" }}
          >
            6-Digit PIN
          </h3>
          <PinInput
            label="6-Digit Code"
            value={sixDigit}
            onChange={setSixDigit}
            length={6}
          />
        </div>

        <div>
          <h3
            style={{ marginBottom: "8px", fontSize: "16px", fontWeight: "600" }}
          >
            8-Digit PIN
          </h3>
          <PinInput
            label="8-Digit Code"
            value={eightDigit}
            onChange={setEightDigit}
            length={8}
          />
        </div>
      </div>
    );
  },
};

export const MaskedVsUnmasked: Story = {
  render: () => {
    const [maskedValue, setMaskedValue] = useState("");
    const [unmaskedValue, setUnmaskedValue] = useState("");

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
            Masked PIN (Default)
          </h3>
          <PinInput
            label="Masked PIN"
            value={maskedValue}
            onChange={setMaskedValue}
            mask={true}
          />
        </div>

        <div>
          <h3
            style={{ marginBottom: "8px", fontSize: "16px", fontWeight: "600" }}
          >
            Unmasked PIN
          </h3>
          <PinInput
            label="Visible PIN"
            value={unmaskedValue}
            onChange={setUnmaskedValue}
            mask={false}
          />
        </div>
      </div>
    );
  },
};
