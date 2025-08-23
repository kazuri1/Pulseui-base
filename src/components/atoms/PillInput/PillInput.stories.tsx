import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within, expect } from "@storybook/test";
import { PillInput } from "./PillInput";

const meta: Meta<typeof PillInput> = {
  title: "Components/Atoms/PillInput",
  component: PillInput,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "A PillInput component that allows users to add and remove pills/tags. Now fully accessible with proper labels, ARIA attributes, keyboard navigation, and screen reader support. The default placeholder is '0' as requested.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg", "xl"],
      description: "Size of the input field",
    },
    pillSize: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
      description: "Size of the pills/tags",
    },
    variant: {
      control: { type: "select" },
      options: ["default", "filled", "unstyled"],
      description: "Visual variant of the input",
    },
    state: {
      control: { type: "select" },
      options: ["enabled", "focus", "typing", "filled", "disabled", "error"],
      description: "Current state of the input",
    },
    disabled: {
      control: "boolean",
      description: "Whether the input is disabled",
    },
    readonly: {
      control: "boolean",
      description: "Whether the input is read-only",
    },
    required: {
      control: "boolean",
      description: "Whether the input is required",
    },
    label: {
      control: "text",
      description: "Label for the input field",
    },
    showLabel: {
      control: "boolean",
      description: "Whether to show the label",
    },
    helperText: {
      control: "text",
      description: "Helper text below the input",
    },
    error: {
      control: "text",
      description: "Error message to display",
    },
    ariaLabel: {
      control: "text",
      description: "Accessibility label for screen readers",
    },
    maxPills: {
      control: "number",
      description: "Maximum number of pills allowed",
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
    placeholder: "0",
    size: "md",
    pillSize: "sm",
    variant: "default",
    label: "Add Tags",
    helperText: "Type and press Enter or comma to add tags",
  },
  parameters: {
    docs: {
      source: {
        code: `<PillInput 
  label="Add Tags"
  placeholder="0" 
  size="md" 
  pillSize="sm"
  helperText="Type and press Enter or comma to add tags"
/>`,
      },
    },
  },
};

export const WithInitialPills: Story = {
  render: (args) => <PillInputWrapper {...args} />,
  args: {
    pills: ["React", "TypeScript", "Storybook"],
    placeholder: "0",
    size: "md",
    pillSize: "sm",
    label: "Technologies",
    helperText: "Add more technologies to your stack",
  },
  parameters: {
    docs: {
      source: {
        code: `<PillInput 
  label="Technologies"
  pills={["React", "TypeScript", "Storybook"]} 
  placeholder="0"
  helperText="Add more technologies to your stack"
/>`,
      },
    },
  },
};

export const AccessibilityFocused: Story = {
  render: (args) => <PillInputWrapper {...args} />,
  args: {
    pills: ["Accessibility", "WCAG", "ARIA"],
    placeholder: "0",
    size: "md",
    pillSize: "sm",
    label: "Accessibility Features",
    helperText: "This component demonstrates full accessibility support",
    ariaLabel: "Add accessibility features to your project",
    required: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "This PillInput demonstrates all accessibility features including proper labels, ARIA attributes, keyboard navigation, and screen reader support.",
      },
    },
  },
};

export const WithError: Story = {
  render: (args) => <PillInputWrapper {...args} />,
  args: {
    pills: ["Error", "State"],
    placeholder: "0",
    state: "error",
    label: "Tags",
    error: "Maximum of 5 tags allowed",
    helperText: "You can add up to 5 tags",
  },
  parameters: {
    docs: {
      description: {
        story:
          "PillInput with error state and proper error messaging for accessibility.",
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
        placeholder="0"
        label="Small Input"
        helperText="Small input with XS pills"
      />
      <PillInputWrapper
        pills={["Medium"]}
        size="md"
        pillSize="sm"
        placeholder="0"
        label="Medium Input"
        helperText="Medium input with SM pills"
      />
      <PillInputWrapper
        pills={["Large"]}
        size="lg"
        pillSize="md"
        placeholder="0"
        label="Large Input"
        helperText="Large input with MD pills"
      />
    </div>
  ),
};

export const WithMaxPills: Story = {
  render: (args) => <PillInputWrapper {...args} />,
  args: {
    pills: ["Tag 1", "Tag 2"],
    maxPills: 3,
    placeholder: "0",
    label: "Limited Tags",
    helperText: "You can add up to 3 tags",
  },
  parameters: {
    docs: {
      source: {
        code: `<PillInput 
  label="Limited Tags"
  maxPills={3} 
  placeholder="0"
  helperText="You can add up to 3 tags"
/>`,
      },
    },
  },
};

export const Disabled: Story = {
  render: (args) => <PillInputWrapper {...args} />,
  args: {
    pills: ["Disabled", "Tags"],
    disabled: true,
    placeholder: "0",
    label: "Disabled Input",
    helperText: "This input is currently disabled",
  },
  parameters: {
    docs: {
      source: {
        code: `<PillInput 
  label="Disabled Input"
  disabled 
  pills={["Disabled", "Tags"]} 
  placeholder="0"
  helperText="This input is currently disabled"
/>`,
      },
    },
  },
};

export const Required: Story = {
  render: (args) => <PillInputWrapper {...args} />,
  args: {
    placeholder: "0",
    label: "Required Tags",
    required: true,
    helperText: "This field is required",
  },
  parameters: {
    docs: {
      description: {
        story:
          "PillInput with required field indication and proper accessibility attributes.",
      },
    },
  },
};

export const NoLabel: Story = {
  render: (args) => <PillInputWrapper {...args} />,
  args: {
    pills: ["No Label"],
    placeholder: "0",
    showLabel: false,
    ariaLabel: "Add tags without visible label",
    helperText: "This input has no visible label but maintains accessibility",
  },
  parameters: {
    docs: {
      description: {
        story:
          "PillInput without visible label but with aria-label for screen reader accessibility.",
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
        placeholder="0"
        label="Default Variant"
        helperText="Standard appearance"
      />
      <PillInputWrapper
        pills={["Filled"]}
        variant="filled"
        placeholder="0"
        label="Filled Variant"
        helperText="Filled background style"
      />
      <PillInputWrapper
        pills={["Unstyled"]}
        variant="unstyled"
        placeholder="0"
        label="Unstyled Variant"
        helperText="Minimal styling"
      />
    </div>
  ),
};

export const KeyboardNavigation: Story = {
  render: (args) => <PillInputWrapper {...args} />,
  args: {
    pills: ["Keyboard", "Navigation", "Test"],
    placeholder: "0",
    label: "Keyboard Navigation Test",
    helperText: "Use Tab, Enter, comma, and backspace to navigate and interact",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Test keyboard navigation: Tab to focus, Enter/comma to add pills, backspace to remove last pill, and arrow keys to navigate pills.",
      },
    },
  },
};
