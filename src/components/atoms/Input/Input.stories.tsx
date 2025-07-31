import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { Info, ArrowDropDown, Search, FilterList } from "../Icon/IconSet";

const meta: Meta<typeof Input> = {
  title: "Components/atoms/Input",
  component: Input,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `

        `,
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
    infoIconComponent: {
      control: false,
      description: "Custom info icon component",
    },
    dropdownArrowComponent: {
      control: false,
      description: "Custom dropdown arrow component",
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
  },
  args: {
    placeholder: "Placeholder",
    value: "",
    variant: "default",
    state: "enabled",
    error: false,
    showInfoIcon: false,
    showDropdownArrow: false,
    type: "text",
    size: "md",
    disabled: false,
    readonly: false,
    required: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Playground story with controls
export const Playground: Story = {
  args: {
    placeholder: "Type something...",
    variant: "default",
    size: "md",
    showInfoIcon: false,
    showDropdownArrow: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Interactive playground with all controls available in the Controls panel",
      },
    },
  },
};

// Variants story
export const Variants: Story = {
  render: () => (
    <div className="space-y-8">
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
    // Enable source code display in Canvas
    source: {
      state: "open",
    },
    // Show source code in Canvas
    controls: {
      expanded: true,
    },
  },
};

// Sizes story
export const Sizes: Story = {
  render: () => (
    <div className="space-y-8">
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

      <div>
        <h3 className="text-lg font-semibold mb-4">Extra Large Size</h3>
        <Input size="xl" placeholder="Extra large input" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All 4 input sizes: sm, md, lg, xl",
      },
    },
  },
};

// States story
export const States: Story = {
  render: () => (
    <div className="space-y-8">
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

      <div>
        <h3 className="text-lg font-semibold mb-4">Error State</h3>
        <Input error placeholder="Error input" />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Error with Value</h3>
        <Input error value="Invalid input" placeholder="Error input" />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Disabled Error State</h3>
        <Input error disabled placeholder="Disabled error input" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "All input states including error states: enabled, focus, typing, filled, disabled, error, error with value, and disabled error",
      },
    },
  },
};

// With Icons story
export const WithIcons: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Search Input</h3>
        <Input
          placeholder="Search..."
          infoIconComponent={Search}
          showInfoIcon={true}
          showDropdownArrow={false}
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Filter Input</h3>
        <Input
          placeholder="Filter options..."
          infoIconComponent={FilterList}
          dropdownArrowComponent={ArrowDropDown}
          showInfoIcon={true}
          showDropdownArrow={true}
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Custom Icons</h3>
        <Input
          placeholder="Custom icons..."
          infoIconComponent={Info}
          dropdownArrowComponent={ArrowDropDown}
          showInfoIcon={true}
          showDropdownArrow={true}
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

// Error States story
export const ErrorStates: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Default Variant - Error</h3>
        <Input variant="default" error placeholder="Error input" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Filled Variant - Error</h3>
        <Input variant="filled" error placeholder="Error input" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Unstyled Variant - Error</h3>
        <Input variant="unstyled" error placeholder="Error input" />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Error states for all variants",
      },
    },
  },
};

// Input Types story
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

// Interactive story
export const Interactive: Story = {
  args: {
    placeholder: "Type something...",
    variant: "default",
    size: "md",
    showInfoIcon: false,
    showDropdownArrow: false,
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
            showInfoIcon={true}
            showDropdownArrow={false}
            placeholder="Search..."
          />
          <Input
            infoIconComponent={FilterList}
            showInfoIcon={true}
            showDropdownArrow={false}
            placeholder="Filter..."
          />
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
