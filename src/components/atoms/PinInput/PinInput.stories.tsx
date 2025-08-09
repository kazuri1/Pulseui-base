import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within, expect } from "@storybook/test";
import { useState } from "react";
import { PinInput } from "./PinInput";

const meta: Meta<typeof PinInput> = {
  title: "Components/PinInput",
  component: PinInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    value: { control: "text" },
    disabled: { control: "boolean" },
    required: { control: "boolean" },
    mask: { control: "boolean" },
    length: { control: "number" },
    size: { control: "select", options: ["sm", "md", "lg", "xl"] },
    caption: { control: "text" },
    error: { control: "text" },
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
    label: "PIN Code",
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
    error: "Invalid PIN code",
  },
};

export const Disabled: Story = {
  args: {
    label: "PIN Code",
    disabled: true,
    value: "1234",
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

