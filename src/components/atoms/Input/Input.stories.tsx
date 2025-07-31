import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import { Info, ArrowDropDown, Search, FilterList } from "../Icon/IconSet";
import { Icon } from "../Icon/index";

const meta: Meta<typeof Input> = {
  title: "Components/atoms/Input",
  component: Input,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
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
      options: ["enabled", "focus", "typing", "filled", "disabled", "error"],
      description: "Input state",
    },

    leftIcon: {
      control: { type: "select" },
      options: ["none", "search", "info", "filter", "person", "settings"],
      description: "Left icon",
    },
    rightIcon: {
      control: { type: "select" },
      options: ["none", "dropdown", "email", "location", "home", "settings"],
      description: "Right icon",
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
    showPasswordToggle: {
      control: "boolean",
      description:
        "Show password toggle for password type (defaults to true when type='password')",
    },
    passwordVisible: {
      control: "boolean",
      description: "Password visibility state",
    },
    onPasswordVisibilityChange: {
      action: "password visibility changed",
      description: "Callback when password visibility changes",
    },
  },
  args: {
    placeholder: "Placeholder",
    value: "",
    variant: "default",
    state: "enabled",
    leftIcon: "none",
    rightIcon: "none",
    type: "text",
    size: "md",
    disabled: false,
    readonly: false,
    required: false,
    passwordVisible: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Playground: Story = {
  args: {
    placeholder: "Interactive Input - Type here...",
    value: "",
    variant: "default",
    size: "md",
    state: "enabled",
    leftIcon: "none",
    rightIcon: "none",
    type: "text",
    disabled: false,
    readonly: false,
    required: false,
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

// Playground story with controls
export const PlaygroundOld: Story = {
  args: {
    placeholder: "Type something...",
    value: "",
    variant: "default",
    size: "md",
    state: "enabled",
    leftIcon: "none",
    rightIcon: "none",
    type: "text",
    disabled: false,
    readonly: false,
    required: false,
    showPasswordToggle: false,
    passwordVisible: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Interactive playground with all controls available in the Controls panel. Try changing the variant, size, state, icons, and other properties to see the input update in real-time.",
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
        <Input state="error" placeholder="Error input" />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Error with Value</h3>
        <Input state="error" value="Invalid input" placeholder="Error input" />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Disabled Error State</h3>
        <Input state="error" disabled placeholder="Disabled error input" />
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
        <Input placeholder="Search..." leftIcon={Search} />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Filter Input</h3>
        <Input
          placeholder="Filter options..."
          leftIcon={FilterList}
          rightIcon={ArrowDropDown}
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Custom Icons</h3>
        <Input
          placeholder="Custom icons..."
          leftIcon={Info}
          rightIcon={ArrowDropDown}
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">No Icons</h3>
        <Input placeholder="No icons..." />
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

// Focus States story
export const FocusStates: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-lg font-semibold mb-4">Default Variant - Focus</h3>
        <Input variant="default" state="focus" placeholder="Default focused" />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Filled Variant - Focus</h3>
        <Input variant="filled" state="focus" placeholder="Filled focused" />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Unstyled Variant - Focus</h3>
        <Input
          variant="unstyled"
          state="focus"
          placeholder="Unstyled focused"
        />
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Focus with Icons</h3>
        <Input
          variant="default"
          state="focus"
          placeholder="Focused with icons"
          leftIcon={Search}
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Focus states across all input variants showing the visual feedback when state is set to 'focus'",
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
        <Input variant="default" state="error" placeholder="Error input" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Filled Variant - Error</h3>
        <Input variant="filled" state="error" placeholder="Error input" />
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-4">Unstyled Variant - Error</h3>
        <Input variant="unstyled" state="error" placeholder="Error input" />
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
          <Input leftIcon={Search} placeholder="Search..." />
          <Input leftIcon={FilterList} placeholder="Filter..." />
          <Input placeholder="No icons..." />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Error States</h3>
        <div className="space-y-4">
          <Input state="error" placeholder="Error input" />
          <Input
            variant="filled"
            state="error"
            placeholder="Filled error input"
          />
          <Input
            variant="unstyled"
            state="error"
            placeholder="Unstyled error input"
          />
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

// Password Input with Toggle
export const PasswordInput: Story = {
  render: () => {
    const [passwordVisible, setPasswordVisible] = React.useState(false);

    return (
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-semibold mb-4">
            Automatic Password Toggle (Default Behavior)
          </h3>
          <Input type="password" placeholder="Enter password..." />
          <p className="text-sm text-gray-600 mt-2">
            Password toggle automatically appears when type="password"
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">
            Controlled Password Input (External State)
          </h3>
          <Input
            type="password"
            placeholder="Enter password..."
            passwordVisible={passwordVisible}
            onPasswordVisibilityChange={setPasswordVisible}
          />
          <p className="text-sm text-gray-600 mt-2">
            State: {passwordVisible ? "Visible" : "Hidden"}
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">
            Password Input (Toggle Disabled)
          </h3>
          <Input
            type="password"
            placeholder="Enter password..."
            showPasswordToggle={false}
          />
          <p className="text-sm text-gray-600 mt-2">
            Password toggle disabled with showPasswordToggle={false}
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">
            Password Input (Always Hidden)
          </h3>
          <Input
            type="password"
            placeholder="Enter password..."
            passwordVisible={false}
          />
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">
            Password Input (Always Visible)
          </h3>
          <Input
            type="password"
            placeholder="Enter password..."
            passwordVisible={true}
          />
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Password input with automatic visibility toggle. The toggle appears automatically when type='password' unless explicitly disabled with showPasswordToggle={false}.",
      },
    },
  },
};

// Test story for debugging icons
export const IconTest: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <h3>Direct Icon Test</h3>
        <Icon icon={Search} size="md" color="muted" />
      </div>
      <div>
        <h3>Left Icon Only</h3>
        <Input placeholder="Test left icon" leftIcon={Search} />
      </div>
      <div>
        <h3>Right Icon Only</h3>
        <Input placeholder="Test right icon" rightIcon={ArrowDropDown} />
      </div>
      <div>
        <h3>Both Icons</h3>
        <Input
          placeholder="Test both icons"
          leftIcon={Search}
          rightIcon={ArrowDropDown}
        />
      </div>
    </div>
  ),
};
