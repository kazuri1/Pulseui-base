import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import {
  Download,
  Upload,
  Add,
  Remove,
  Edit,
  Delete,
  Search,
  FilterList,
  Refresh,
  Settings,
} from "../Icon/IconSet";

// Import ArgsTable for documentation
import { PureArgsTable as ArgsTable } from "@storybook/blocks";

const meta: Meta<typeof Button> = {
  title: "Components/atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: `


\`\`\`
        `,
      },
    },
  },
  argTypes: {
    children: {
      control: "text",
      description: "Button text content",
    },
    leftIcon: {
      control: { type: "select" },
      options: ["none", "download", "upload", "add", "remove", "edit"],
      description: "Left icon",
    },
    rightIcon: {
      control: { type: "select" },
      options: ["none", "delete", "search", "filter", "refresh", "settings"],
      description: "Right icon",
    },
    variant: {
      control: { type: "select" },
      options: ["filled", "subtle", "light", "outline", "white", "default"],
      description: "Button variant style",
    },
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
      description: "Button size",
    },
    state: {
      control: { type: "select" },
      options: ["default", "hover", "disabled"],
      description: "Button state",
    },
    justify: {
      control: { type: "select" },
      options: ["center", "space-between"],
      description: "Content justification",
    },
    compact: {
      control: "boolean",
      description: "Compact mode",
    },
    disabled: {
      control: "boolean",
      description: "Disabled state",
    },
    type: {
      control: { type: "select" },
      options: ["button", "submit", "reset"],
      description: "Button type",
    },
    onClick: {
      action: "clicked",
      description: "Click handler",
    },
  },
  args: {
    children: "Button",
    leftIcon: "none",
    rightIcon: "none",
    variant: "filled",
    size: "md",
    state: "default",
    justify: "center",
    compact: false,
    disabled: false,
    type: "button",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Reusable template for button grid
const ButtonGrid = ({ children }: { children: React.ReactNode }) => (
  <div className="flex flex-wrap gap-4">{children}</div>
);

// Reusable template for section
const Section = ({
  title,
  children,
  description,
}: {
  title: string;
  children: React.ReactNode;
  description?: string;
}) => (
  <div className="space-y-4">
    <div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      {description && (
        <p className="text-sm text-gray-600 mb-4">{description}</p>
      )}
    </div>
    {children}
  </div>
);

// Playground story with full controls
export const Playground: Story = {
  name: "Playground",
  args: {
    children: "Interactive Button",
    variant: "filled",
    size: "md",
    leftIcon: "add",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Use the controls panel to experiment with all button properties in real-time.",
      },
    },
  },
};

// Variants story
export const Variants: Story = {
  args: {
    size: "sm",
  },

  name: "Variants",

  render: () => (
    <div className="space-y-6">
      <Section
        title="All Variants"
        description="Six different button styles for various use cases"
      >
        <ButtonGrid>
          <Button variant="filled">Filled</Button>
          <Button variant="subtle">Subtle</Button>
          <Button variant="light">Light</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="white">White</Button>
          <Button variant="default">Default</Button>
        </ButtonGrid>
      </Section>
    </div>
  ),

  parameters: {
    docs: {
      description: {
        story:
          "All 6 button variants: filled, subtle, light, outline, white, and default",
      },
    },
  },
};

// Sizes story
export const Sizes: Story = {
  name: "Sizes",
  render: () => (
    <div className="space-y-6">
      <Section
        title="All Sizes"
        description="Five different button sizes from extra small to extra large"
      >
        <ButtonGrid>
          <Button size="xs">Extra Small</Button>
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
          <Button size="xl">Extra Large</Button>
        </ButtonGrid>
      </Section>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All 5 button sizes: xs, sm, md, lg, xl",
      },
    },
  },
};

// States story
export const States: Story = {
  name: "States",
  render: () => (
    <div className="space-y-6">
      <Section
        title="Button States"
        description="Different states for user interaction feedback"
      >
        <ButtonGrid>
          <Button state="default">Default</Button>
          <Button state="hover">Hover</Button>
          <Button state="disabled">Disabled</Button>
        </ButtonGrid>
      </Section>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All 3 button states: default, hover, and disabled",
      },
    },
  },
};

// With Icons story
export const WithIcons: Story = {
  name: "With Icons",
  render: () => (
    <div className="space-y-6">
      <Section
        title="Left Icons"
        description="Icons positioned on the left side of the button"
      >
        <ButtonGrid>
          <Button leftIcon="upload">Upload</Button>
          <Button leftIcon="add">Add Item</Button>
          <Button leftIcon="edit">Edit</Button>
          <Button leftIcon="search">Search</Button>
        </ButtonGrid>
      </Section>

      <Section
        title="Right Icons"
        description="Icons positioned on the right side of the button"
      >
        <ButtonGrid>
          <Button rightIcon="download">Download</Button>
          <Button rightIcon="delete">Remove</Button>
          <Button rightIcon="delete">Delete</Button>
          <Button rightIcon="settings">Settings</Button>
        </ButtonGrid>
      </Section>

      <Section
        title="Both Icons"
        description="Icons on both sides for complex actions"
      >
        <ButtonGrid>
          <Button leftIcon="upload" rightIcon="download">
            Upload & Download
          </Button>
          <Button leftIcon="add" rightIcon="delete">
            Add & Remove
          </Button>
          <Button leftIcon="search" rightIcon="filter">
            Search & Filter
          </Button>
        </ButtonGrid>
      </Section>

      <Section title="Icon Only" description="Buttons with only icons, no text">
        <ButtonGrid>
          <Button leftIcon="add" size="sm">
            +
          </Button>
          <Button leftIcon="settings" size="md">
            ⚙
          </Button>
          <Button leftIcon="refresh" size="lg">
            ↻
          </Button>
        </ButtonGrid>
      </Section>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Buttons with different Material-UI icons for various actions",
      },
    },
  },
};

// Layout story
export const Layout: Story = {
  name: "Layout",
  render: () => (
    <div className="space-y-6">
      <Section
        title="Full Width"
        description="Buttons that span the full width of their container"
      >
        <div className="space-y-2">
          <Button variant="filled" className="w-full">
            Full Width Button
          </Button>
          <Button variant="outline" className="w-full">
            Full Width Outline
          </Button>
        </div>
      </Section>

      <Section
        title="Justification"
        description="Different content justification options"
      >
        <div className="space-y-4">
          <div className="w-64">
            <Button justify="center" leftIcon="add" rightIcon="delete">
              Centered
            </Button>
          </div>
          <div className="w-64">
            <Button justify="space-between" leftIcon="add" rightIcon="delete">
              Space Between
            </Button>
          </div>
        </div>
      </Section>

      <Section
        title="Compact Mode"
        description="Reduced padding for space-constrained layouts"
      >
        <ButtonGrid>
          <Button compact leftIcon="add">
            Compact
          </Button>
          <Button leftIcon="add">Normal</Button>
        </ButtonGrid>
      </Section>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Different layout options including full width, justification, and compact mode",
      },
    },
  },
};

// Interactive story
export const Interactive: Story = {
  name: "Interactive",
  render: () => (
    <div className="space-y-6">
      <Section
        title="Click Actions"
        description="Buttons with click handlers and actions"
      >
        <ButtonGrid>
          <Button onClick={() => alert("Button clicked!")}>Click Me</Button>
          <Button
            variant="outline"
            onClick={() => console.log("Action logged")}
          >
            Log Action
          </Button>
          <Button
            variant="light"
            onClick={() => window.open("https://example.com")}
          >
            Open Link
          </Button>
        </ButtonGrid>
      </Section>

      <Section
        title="Form Actions"
        description="Buttons for form submission and reset"
      >
        <ButtonGrid>
          <Button type="submit">Submit Form</Button>
          <Button type="reset" variant="outline">
            Reset Form
          </Button>
          <Button type="button" variant="light">
            Cancel
          </Button>
        </ButtonGrid>
      </Section>

      <Section
        title="Keyboard Navigation"
        description="Buttons accessible via keyboard navigation"
      >
        <ButtonGrid>
          <Button>Tab Focusable</Button>
          <Button variant="outline">Another Focusable</Button>
          <Button variant="light">Not Focusable</Button>
        </ButtonGrid>
      </Section>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Interactive examples showing click handlers, form actions, and keyboard navigation",
      },
    },
  },
};

// Complete Showcase story
export const CompleteShowcase: Story = {
  name: "Complete Showcase",
  render: () => (
    <div className="space-y-8">
      <Section
        title="All Variants (Medium Size)"
        description="Complete overview of all button variants"
      >
        <ButtonGrid>
          <Button variant="filled" size="md">
            Filled
          </Button>
          <Button variant="subtle" size="md">
            Subtle
          </Button>
          <Button variant="light" size="md">
            Light
          </Button>
          <Button variant="outline" size="md">
            Outline
          </Button>
          <Button variant="white" size="md">
            White
          </Button>
          <Button variant="default" size="md">
            Default
          </Button>
        </ButtonGrid>
      </Section>

      <Section
        title="All Sizes (Filled Variant)"
        description="Complete size range demonstration"
      >
        <ButtonGrid>
          <Button variant="filled" size="xs">
            XS
          </Button>
          <Button variant="filled" size="sm">
            SM
          </Button>
          <Button variant="filled" size="md">
            MD
          </Button>
          <Button variant="filled" size="lg">
            LG
          </Button>
          <Button variant="filled" size="xl">
            XL
          </Button>
        </ButtonGrid>
      </Section>

      <Section
        title="Icon Combinations"
        description="Various icon placement options"
      >
        <ButtonGrid>
          <Button leftIcon="upload">Upload</Button>
          <Button rightIcon="download">Download</Button>
          <Button leftIcon="add" rightIcon="delete">
            Add & Remove
          </Button>
          <Button leftIcon="settings" size="sm">
            ⚙
          </Button>
        </ButtonGrid>
      </Section>

      <Section
        title="States & Interactions"
        description="All button states and interaction examples"
      >
        <ButtonGrid>
          <Button>Default</Button>
          <Button disabled>Disabled</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="light">Light</Button>
        </ButtonGrid>
      </Section>

      <Section title="Layout Variations" description="Different layout options">
        <div className="space-y-4">
          <Button className="w-full">Full Width Button</Button>
          <div className="flex gap-4">
            <Button compact>Compact</Button>
            <Button>Normal</Button>
          </div>
        </div>
      </Section>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Complete showcase of all button variations and features for visual QA and testing",
      },
    },
  },
};
