import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import {
  Info,
  KeyboardArrowDown,
  Search,
  FilterList,
} from "@mui/icons-material";

const meta: Meta<typeof Input> = {
  title: "Atoms/Input",
  component: Input,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A versatile input component with 3 variants, 5 states, and error handling. Built with design tokens for consistent styling across the application.",
      },
    },
  },
  argTypes: {
    placeholder: {
      control: "text",
      description: "Input placeholder text",
    },
    value: {
      control: "text",
      description: "Input value",
    },
    variant: {
      control: { type: "select" },
      options: ["default", "filled", "unstyled"],
      description: "Input variant style",
    },
    state: {
      control: { type: "select" },
      options: ["enabled", "focus", "typing", "filled", "disabled"],
      description: "Input state",
    },
    error: {
      control: "boolean",
      description: "Error state",
    },
    showInfoIcon: {
      control: "boolean",
      description: "Show info icon",
    },
    showDropdownArrow: {
      control: "boolean",
      description: "Show dropdown arrow",
    },
    type: {
      control: { type: "select" },
      options: ["text", "email", "password", "number", "tel", "url"],
      description: "Input type",
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "Input size",
    },
    disabled: {
      control: "boolean",
      description: "Disabled state",
    },
    readonly: {
      control: "boolean",
      description: "Readonly state",
    },
    required: {
      control: "boolean",
      description: "Required field",
    },
    onChange: {
      action: "changed",
      description: "Change handler",
    },
    onFocus: {
      action: "focused",
      description: "Focus handler",
    },
    onBlur: {
      action: "blurred",
      description: "Blur handler",
    },
  },
  args: {
    placeholder: "Placeholder",
    value: "",
    variant: "default",
    state: "enabled",
    error: false,
    showInfoIcon: true,
    showDropdownArrow: true,
    type: "text",
    size: "md",
    disabled: false,
    readonly: false,
    required: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default input
export const Default: Story = {
  args: {
    placeholder: "Placeholder",
  },
};

// All variants
export const Variants: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold mb-4">Default Variant</h3>
        <Input variant="default" placeholder="Placeholder" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Filled Variant</h3>
        <Input variant="filled" placeholder="Placeholder" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Unstyled Variant</h3>
        <Input variant="unstyled" placeholder="Placeholder" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All 3 input variants: default, filled, and unstyled",
      },
    },
  },
};

// All states
export const States: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold mb-4">Enabled State</h3>
        <Input state="enabled" placeholder="Placeholder" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Focus State</h3>
        <Input state="focus" placeholder="Placeholder" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Typing State</h3>
        <Input state="typing" value="Typing text" placeholder="Placeholder" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Filled State</h3>
        <Input state="filled" value="Filled text" placeholder="Placeholder" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Disabled State</h3>
        <Input state="disabled" placeholder="Placeholder" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "All 5 input states: enabled, focus, typing, filled, and disabled",
      },
    },
  },
};

// All sizes
export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold mb-4">Small Size</h3>
        <Input size="sm" placeholder="Small input" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Medium Size</h3>
        <Input size="md" placeholder="Medium input" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Large Size</h3>
        <Input size="lg" placeholder="Large input" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All 3 input sizes: sm, md, lg",
      },
    },
  },
};

// Complete design system grid
export const DesignSystemGrid: Story = {
  render: () => (
    <div className="space-y-8">
      {/* Standard Theme */}
      <div>
        <h2 className="text-xl font-bold mb-6">Standard Theme</h2>

        {/* Default Variant */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Default Variant</h3>
          <div className="grid grid-cols-5 gap-4">
            <div>
              <h4 className="text-sm font-medium mb-2">Enabled</h4>
              <Input
                variant="default"
                state="enabled"
                placeholder="Placeholder"
              />
            </div>
            <div>
              <h4 className="text-sm font-medium mb-2">Focus</h4>
              <Input
                variant="default"
                state="focus"
                placeholder="Placeholder"
              />
            </div>
            <div>
              <h4 className="text-sm font-medium mb-2">Typing</h4>
              <Input
                variant="default"
                state="typing"
                value="Typing"
                placeholder="Placeholder"
              />
            </div>
            <div>
              <h4 className="text-sm font-medium mb-2">Filled - Text</h4>
              <Input
                variant="default"
                state="filled"
                value="Filled text"
                placeholder="Placeholder"
              />
            </div>
            <div>
              <h4 className="text-sm font-medium mb-2">Disabled</h4>
              <Input
                variant="default"
                state="disabled"
                placeholder="Placeholder"
              />
            </div>
          </div>
        </div>

        {/* Filled Variant */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Filled Variant</h3>
          <div className="grid grid-cols-5 gap-4">
            <div>
              <h4 className="text-sm font-medium mb-2">Enabled</h4>
              <Input
                variant="filled"
                state="enabled"
                placeholder="Placeholder"
              />
            </div>
            <div>
              <h4 className="text-sm font-medium mb-2">Focus</h4>
              <Input variant="filled" state="focus" placeholder="Placeholder" />
            </div>
            <div>
              <h4 className="text-sm font-medium mb-2">Typing</h4>
              <Input
                variant="filled"
                state="typing"
                value="Typing"
                placeholder="Placeholder"
              />
            </div>
            <div>
              <h4 className="text-sm font-medium mb-2">Filled - Text</h4>
              <Input
                variant="filled"
                state="filled"
                value="Filled text"
                placeholder="Placeholder"
              />
            </div>
            <div>
              <h4 className="text-sm font-medium mb-2">Disabled</h4>
              <Input
                variant="filled"
                state="disabled"
                placeholder="Placeholder"
              />
            </div>
          </div>
        </div>

        {/* Unstyled Variant */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Unstyled Variant</h3>
          <div className="grid grid-cols-5 gap-4">
            <div>
              <h4 className="text-sm font-medium mb-2">Enabled</h4>
              <Input
                variant="unstyled"
                state="enabled"
                placeholder="Placeholder"
              />
            </div>
            <div>
              <h4 className="text-sm font-medium mb-2">Focus</h4>
              <Input
                variant="unstyled"
                state="focus"
                placeholder="Placeholder"
              />
            </div>
            <div>
              <h4 className="text-sm font-medium mb-2">Typing</h4>
              <Input
                variant="unstyled"
                state="typing"
                value="Typing"
                placeholder="Placeholder"
              />
            </div>
            <div>
              <h4 className="text-sm font-medium mb-2">Filled - Text</h4>
              <Input
                variant="unstyled"
                state="filled"
                value="Filled text"
                placeholder="Placeholder"
              />
            </div>
            <div>
              <h4 className="text-sm font-medium mb-2">Disabled</h4>
              <Input
                variant="unstyled"
                state="disabled"
                placeholder="Placeholder"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Error Theme */}
      <div>
        <h2 className="text-xl font-bold mb-6">Error Theme</h2>

        {/* Default Variant - Error */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">
            Default Variant (Error)
          </h3>
          <div className="grid grid-cols-5 gap-4">
            <div>
              <h4 className="text-sm font-medium mb-2">Enabled</h4>
              <Input
                variant="default"
                state="enabled"
                error
                placeholder="Placeholder"
              />
            </div>
            <div>
              <h4 className="text-sm font-medium mb-2">Focus</h4>
              <Input
                variant="default"
                state="focus"
                error
                placeholder="Placeholder"
              />
            </div>
            <div>
              <h4 className="text-sm font-medium mb-2">Typing</h4>
              <Input
                variant="default"
                state="typing"
                error
                value="Typing"
                placeholder="Placeholder"
              />
            </div>
            <div>
              <h4 className="text-sm font-medium mb-2">Filled - Text</h4>
              <Input
                variant="default"
                state="filled"
                error
                value="Filled text"
                placeholder="Placeholder"
              />
            </div>
            <div>
              <h4 className="text-sm font-medium mb-2">Disabled</h4>
              <Input
                variant="default"
                state="disabled"
                error
                placeholder="Placeholder"
              />
            </div>
          </div>
        </div>

        {/* Filled Variant - Error */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Filled Variant (Error)</h3>
          <div className="grid grid-cols-5 gap-4">
            <div>
              <h4 className="text-sm font-medium mb-2">Enabled</h4>
              <Input
                variant="filled"
                state="enabled"
                error
                placeholder="Placeholder"
              />
            </div>
            <div>
              <h4 className="text-sm font-medium mb-2">Focus</h4>
              <Input
                variant="filled"
                state="focus"
                error
                placeholder="Placeholder"
              />
            </div>
            <div>
              <h4 className="text-sm font-medium mb-2">Typing</h4>
              <Input
                variant="filled"
                state="typing"
                error
                value="Typing"
                placeholder="Placeholder"
              />
            </div>
            <div>
              <h4 className="text-sm font-medium mb-2">Filled - Text</h4>
              <Input
                variant="filled"
                state="filled"
                error
                value="Filled text"
                placeholder="Placeholder"
              />
            </div>
            <div>
              <h4 className="text-sm font-medium mb-2">Disabled</h4>
              <Input
                variant="filled"
                state="disabled"
                error
                placeholder="Placeholder"
              />
            </div>
          </div>
        </div>

        {/* Unstyled Variant - Error */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">
            Unstyled Variant (Error)
          </h3>
          <div className="grid grid-cols-5 gap-4">
            <div>
              <h4 className="text-sm font-medium mb-2">Enabled</h4>
              <Input
                variant="unstyled"
                state="enabled"
                error
                placeholder="Placeholder"
              />
            </div>
            <div>
              <h4 className="text-sm font-medium mb-2">Focus</h4>
              <Input
                variant="unstyled"
                state="focus"
                error
                placeholder="Placeholder"
              />
            </div>
            <div>
              <h4 className="text-sm font-medium mb-2">Typing</h4>
              <Input
                variant="unstyled"
                state="typing"
                error
                value="Typing"
                placeholder="Placeholder"
              />
            </div>
            <div>
              <h4 className="text-sm font-medium mb-2">Filled - Text</h4>
              <Input
                variant="unstyled"
                state="filled"
                error
                value="Filled text"
                placeholder="Placeholder"
              />
            </div>
            <div>
              <h4 className="text-sm font-medium mb-2">Disabled</h4>
              <Input
                variant="unstyled"
                state="disabled"
                error
                placeholder="Placeholder"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Complete design system grid showing all variants, states, and error themes",
      },
    },
  },
};

// Variants with different states
export const VariantsAndStates: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">
          Default Variant - All States
        </h3>
        <div className="grid grid-cols-5 gap-4">
          <Input variant="default" state="enabled" placeholder="Enabled" />
          <Input variant="default" state="focus" placeholder="Focus" />
          <Input
            variant="default"
            state="typing"
            value="Typing"
            placeholder="Typing"
          />
          <Input
            variant="default"
            state="filled"
            value="Filled"
            placeholder="Filled"
          />
          <Input variant="default" state="disabled" placeholder="Disabled" />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">
          Filled Variant - All States
        </h3>
        <div className="grid grid-cols-5 gap-4">
          <Input variant="filled" state="enabled" placeholder="Enabled" />
          <Input variant="filled" state="focus" placeholder="Focus" />
          <Input
            variant="filled"
            state="typing"
            value="Typing"
            placeholder="Typing"
          />
          <Input
            variant="filled"
            state="filled"
            value="Filled"
            placeholder="Filled"
          />
          <Input variant="filled" state="disabled" placeholder="Disabled" />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">
          Unstyled Variant - All States
        </h3>
        <div className="grid grid-cols-5 gap-4">
          <Input variant="unstyled" state="enabled" placeholder="Enabled" />
          <Input variant="unstyled" state="focus" placeholder="Focus" />
          <Input
            variant="unstyled"
            state="typing"
            value="Typing"
            placeholder="Typing"
          />
          <Input
            variant="unstyled"
            state="filled"
            value="Filled"
            placeholder="Filled"
          />
          <Input variant="unstyled" state="disabled" placeholder="Disabled" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "All variants shown with all states for comprehensive comparison",
      },
    },
  },
};

// Error states for each variant
export const ErrorStates: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">
          Default Variant - Error States
        </h3>
        <div className="grid grid-cols-5 gap-4">
          <Input
            variant="default"
            state="enabled"
            error
            placeholder="Enabled"
          />
          <Input variant="default" state="focus" error placeholder="Focus" />
          <Input
            variant="default"
            state="typing"
            error
            value="Typing"
            placeholder="Typing"
          />
          <Input
            variant="default"
            state="filled"
            error
            value="Filled"
            placeholder="Filled"
          />
          <Input
            variant="default"
            state="disabled"
            error
            placeholder="Disabled"
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">
          Filled Variant - Error States
        </h3>
        <div className="grid grid-cols-5 gap-4">
          <Input variant="filled" state="enabled" error placeholder="Enabled" />
          <Input variant="filled" state="focus" error placeholder="Focus" />
          <Input
            variant="filled"
            state="typing"
            error
            value="Typing"
            placeholder="Typing"
          />
          <Input
            variant="filled"
            state="filled"
            error
            value="Filled"
            placeholder="Filled"
          />
          <Input
            variant="filled"
            state="disabled"
            error
            placeholder="Disabled"
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">
          Unstyled Variant - Error States
        </h3>
        <div className="grid grid-cols-5 gap-4">
          <Input
            variant="unstyled"
            state="enabled"
            error
            placeholder="Enabled"
          />
          <Input variant="unstyled" state="focus" error placeholder="Focus" />
          <Input
            variant="unstyled"
            state="typing"
            error
            value="Typing"
            placeholder="Typing"
          />
          <Input
            variant="unstyled"
            state="filled"
            error
            value="Filled"
            placeholder="Filled"
          />
          <Input
            variant="unstyled"
            state="disabled"
            error
            placeholder="Disabled"
          />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All error states shown for each variant",
      },
    },
  },
};

// With different icons
export const WithIcons: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Search Input</h3>
        <Input
          placeholder="Search..."
          infoIconComponent={Search}
          showDropdownArrow={false}
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Filter Input</h3>
        <Input
          placeholder="Filter options..."
          infoIconComponent={FilterList}
          dropdownArrowComponent={KeyboardArrowDown}
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Custom Icons</h3>
        <Input
          placeholder="Custom icons..."
          infoIconComponent={Info}
          dropdownArrowComponent={KeyboardArrowDown}
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">No Icons</h3>
        <Input
          placeholder="No icons..."
          showInfoIcon={false}
          showDropdownArrow={false}
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Inputs with different Material-UI icons and icon combinations",
      },
    },
  },
};

// Different input types
export const InputTypes: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h3 className="text-lg font-semibold mb-4">Text Input</h3>
        <Input type="text" placeholder="Enter text..." />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Email Input</h3>
        <Input type="email" placeholder="Enter email..." />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Password Input</h3>
        <Input type="password" placeholder="Enter password..." />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Number Input</h3>
        <Input type="number" placeholder="Enter number..." />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Tel Input</h3>
        <Input type="tel" placeholder="Enter phone..." />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">URL Input</h3>
        <Input type="url" placeholder="Enter URL..." />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Different HTML input types supported by the component",
      },
    },
  },
};

// Interactive example
export const Interactive: Story = {
  args: {
    placeholder: "Type something...",
    variant: "default",
    size: "md",
    showInfoIcon: true,
    showDropdownArrow: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Interactive input with all controls available in the Controls panel",
      },
    },
  },
};

// Complete showcase
export const CompleteShowcase: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">
          All Variants (Medium Size)
        </h3>
        <div className="space-y-4">
          <Input variant="default" placeholder="Default variant" />
          <Input variant="filled" placeholder="Filled variant" />
          <Input variant="unstyled" placeholder="Unstyled variant" />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">
          All Sizes (Default Variant)
        </h3>
        <div className="space-y-4">
          <Input size="sm" placeholder="Small input" />
          <Input size="md" placeholder="Medium input" />
          <Input size="lg" placeholder="Large input" />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">With Icons</h3>
        <div className="space-y-4">
          <Input
            infoIconComponent={Search}
            showDropdownArrow={false}
            placeholder="Search..."
          />
          <Input infoIconComponent={FilterList} placeholder="Filter..." />
          <Input
            showInfoIcon={false}
            showDropdownArrow={false}
            placeholder="No icons..."
          />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Error States</h3>
        <div className="space-y-4">
          <Input error placeholder="Error input" />
          <Input variant="filled" error placeholder="Filled error input" />
          <Input variant="unstyled" error placeholder="Unstyled error input" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Complete showcase of all input variations and features",
      },
    },
  },
};
