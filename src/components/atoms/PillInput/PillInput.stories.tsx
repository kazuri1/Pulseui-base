import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { PillInput } from "./PillInput";

const meta: Meta<typeof PillInput> = {
  title: "Components/PillInput",
  component: PillInput,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg", "xl"],
    },
    pillSize: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    variant: {
      control: { type: "select" },
      options: ["default", "filled", "unstyled"],
    },
    state: {
      control: { type: "select" },
      options: ["enabled", "focus", "typing", "filled", "disabled", "error"],
    },
    disabled: {
      control: { type: "boolean" },
    },
    readonly: {
      control: { type: "boolean" },
    },
    required: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Interactive component wrapper
const PillInputWrapper = (props: any) => {
  const [pills, setPills] = useState<string[]>(props.pills || []);

  return (
    <PillInput
      {...props}
      pills={pills}
      onPillsChange={setPills}
      onPillAdd={(pill) => console.log("Added pill:", pill)}
      onPillRemove={(pill, index) =>
        console.log("Removed pill:", pill, "at index:", index)
      }
    />
  );
};

export const Default: Story = {
  render: (args) => <PillInputWrapper {...args} />,
  args: {
    placeholder: "Add tags...",
    size: "md",
    pillSize: "sm",
    variant: "default",
  },
  parameters: {
    docs: {
      source: {
        code: `<PillInput placeholder="Add tags..." size="md" pillSize="sm" />`,
      },
    },
  },
};

export const WithInitialPills: Story = {
  render: (args) => <PillInputWrapper {...args} />,
  args: {
    pills: ["React", "TypeScript", "Storybook"],
    placeholder: "Add more tags...",
    size: "md",
    pillSize: "sm",
  },
  parameters: {
    docs: {
      source: {
        code: `<PillInput pills={["React", "TypeScript", "Storybook"]} placeholder="Add more tags..." />`,
      },
    },
  },
};

export const DifferentSizes: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        width: "400px",
      }}
    >
      <PillInputWrapper
        pills={["Small"]}
        size="sm"
        pillSize="xs"
        placeholder="Small input with XS pills"
      />
      <PillInputWrapper
        pills={["Medium"]}
        size="md"
        pillSize="sm"
        placeholder="Medium input with SM pills"
      />
      <PillInputWrapper
        pills={["Large"]}
        size="lg"
        pillSize="md"
        placeholder="Large input with MD pills"
      />
    </div>
  ),
};

export const WithMaxPills: Story = {
  render: (args) => <PillInputWrapper {...args} />,
  args: {
    pills: ["Tag 1", "Tag 2"],
    maxPills: 3,
    placeholder: "Add up to 3 tags...",
  },
  parameters: {
    docs: {
      source: {
        code: `<PillInput maxPills={3} placeholder="Add up to 3 tags..." />`,
      },
    },
  },
};

export const Disabled: Story = {
  render: (args) => <PillInputWrapper {...args} />,
  args: {
    pills: ["Disabled", "Tags"],
    disabled: true,
    placeholder: "Disabled input",
  },
  parameters: {
    docs: {
      source: {
        code: `<PillInput disabled pills={["Disabled", "Tags"]} placeholder="Disabled input" />`,
      },
    },
  },
};

export const ErrorState: Story = {
  render: (args) => <PillInputWrapper {...args} />,
  args: {
    pills: ["Error", "State"],
    state: "error",
    placeholder: "Error state input",
  },
  parameters: {
    docs: {
      source: {
        code: `<PillInput state="error" pills={["Error", "State"]} placeholder="Error state input" />`,
      },
    },
  },
};

export const DifferentVariants: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        width: "400px",
      }}
    >
      <PillInputWrapper
        pills={["Default"]}
        variant="default"
        placeholder="Default variant"
      />
      <PillInputWrapper
        pills={["Filled"]}
        variant="filled"
        placeholder="Filled variant"
      />
      <PillInputWrapper
        pills={["Unstyled"]}
        variant="unstyled"
        placeholder="Unstyled variant"
      />
    </div>
  ),
};
