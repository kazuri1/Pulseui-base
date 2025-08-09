import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within, expect } from "@storybook/test";
import { Autocomplete } from "./Autocomplete";

const meta: Meta<typeof Autocomplete> = {
  title: "Components/Autocomplete",
  component: Autocomplete,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg", "xl"],
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
    showArrow: {
      control: { type: "boolean" },
    },
    filterOptions: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample options
const foodOptions = [
  { value: "apples", label: "Apples", icon: "🍎" },
  { value: "bananas", label: "Bananas", icon: "🍌" },
  { value: "broccoli", label: "Broccoli", icon: "🥦" },
  { value: "carrots", label: "Carrots", icon: "🥕" },
  { value: "chocolate", label: "Chocolate", icon: "🍫" },
  { value: "dragonfruit", label: "Dragonfruit", icon: "🐉" },
  { value: "eggs", label: "Eggs", icon: "🥚" },
  { value: "fish", label: "Fish", icon: "🐟" },
  { value: "grapes", label: "Grapes", icon: "🍇" },
  { value: "honey", label: "Honey", icon: "🍯" },
];

const countryOptions = [
  { value: "usa", label: "United States" },
  { value: "canada", label: "Canada" },
  { value: "uk", label: "United Kingdom" },
  { value: "germany", label: "Germany" },
  { value: "france", label: "France" },
  { value: "japan", label: "Japan" },
  { value: "australia", label: "Australia" },
  { value: "brazil", label: "Brazil" },
  { value: "india", label: "India" },
  { value: "china", label: "China" },
];

// Interactive component wrapper
const AutocompleteWrapper = (props: any) => {
  const [value, setValue] = useState(props.value || "");

  return (
    <Autocomplete
      {...props}
      value={value}
      onChange={setValue}
      onSelect={(option) => {
        console.log("Selected:", option);
        setValue(option.value);
      }}
    />
  );
};

export const Default: Story = {
  render: (args) => <AutocompleteWrapper {...args} />,
  args: {
    options: foodOptions,
    placeholder: "Select a food...",
    size: "md",
    variant: "default",
  },
  parameters: {
    docs: {
      source: {
        code: `<Autocomplete options={foodOptions} placeholder="Select a food..." />`,
      },
    },
  },
};

export const WithIcons: Story = {
  render: (args) => <AutocompleteWrapper {...args} />,
  args: {
    options: foodOptions,
    placeholder: "Select a food with icons...",
    size: "md",
  },
  parameters: {
    docs: {
      source: {
        code: `<Autocomplete options={foodOptions} placeholder="Select a food with icons..." />`,
      },
    },
  },
};

export const WithoutIcons: Story = {
  render: (args) => <AutocompleteWrapper {...args} />,
  args: {
    options: countryOptions,
    placeholder: "Select a country...",
    size: "md",
  },
  parameters: {
    docs: {
      source: {
        code: `<Autocomplete options={countryOptions} placeholder="Select a country..." />`,
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
        width: "300px",
      }}
    >
      <AutocompleteWrapper
        options={foodOptions.slice(0, 5)}
        placeholder="Small size"
        size="sm"
      />
      <AutocompleteWrapper
        options={foodOptions.slice(0, 5)}
        placeholder="Medium size"
        size="md"
      />
      <AutocompleteWrapper
        options={foodOptions.slice(0, 5)}
        placeholder="Large size"
        size="lg"
      />
    </div>
  ),
};

export const WithoutArrow: Story = {
  render: (args) => <AutocompleteWrapper {...args} />,
  args: {
    options: foodOptions,
    placeholder: "No dropdown arrow",
    showArrow: false,
  },
  parameters: {
    docs: {
      source: {
        code: `<Autocomplete options={foodOptions} showArrow={false} />`,
      },
    },
  },
};

export const WithoutFiltering: Story = {
  render: (args) => <AutocompleteWrapper {...args} />,
  args: {
    options: foodOptions,
    placeholder: "No filtering",
    filterOptions: false,
  },
  parameters: {
    docs: {
      source: {
        code: `<Autocomplete options={foodOptions} filterOptions={false} />`,
      },
    },
  },
};

export const Disabled: Story = {
  render: (args) => <AutocompleteWrapper {...args} />,
  args: {
    options: foodOptions,
    placeholder: "Disabled autocomplete",
    disabled: true,
  },
  parameters: {
    docs: {
      source: {
        code: `<Autocomplete options={foodOptions} disabled />`,
      },
    },
  },
};

export const ErrorState: Story = {
  render: (args) => <AutocompleteWrapper {...args} />,
  args: {
    options: foodOptions,
    placeholder: "Error state",
    state: "error",
  },
  parameters: {
    docs: {
      source: {
        code: `<Autocomplete options={foodOptions} state="error" />`,
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
        width: "300px",
      }}
    >
      <AutocompleteWrapper
        options={foodOptions.slice(0, 3)}
        placeholder="Default variant"
        variant="default"
      />
      <AutocompleteWrapper
        options={foodOptions.slice(0, 3)}
        placeholder="Filled variant"
        variant="filled"
      />
      <AutocompleteWrapper
        options={foodOptions.slice(0, 3)}
        placeholder="Unstyled variant"
        variant="unstyled"
      />
    </div>
  ),
};

export const LimitedSuggestions: Story = {
  render: (args) => <AutocompleteWrapper {...args} />,
  args: {
    options: foodOptions,
    placeholder: "Max 3 suggestions",
    maxSuggestions: 3,
  },
  parameters: {
    docs: {
      source: {
        code: `<Autocomplete options={foodOptions} maxSuggestions={3} />`,
      },
    },
  },
};

