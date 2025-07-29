import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import {
  ArrowUpward,
  ArrowDownward,
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
} from "@mui/icons-material";

const meta: Meta<typeof Button> = {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A versatile button component with 6 variants, 5 sizes, and 3 states. Built with design tokens for consistent styling across the application.",
      },
    },
  },
  argTypes: {
    children: {
      control: "text",
      description: "Button text content",
    },
    leftIcon: {
      control: "boolean",
      description: "Show icon on the left side",
    },
    rightIcon: {
      control: "boolean",
      description: "Show icon on the right side",
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
    leftIcon: false,
    rightIcon: false,
    variant: "default",
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

// Default button
export const Default: Story = {
  args: {
    children: "Button",
  },
};

// All 6 variants
export const Variants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-4">
        <Button variant="filled">Filled</Button>
        <Button variant="subtle">Subtle</Button>
        <Button variant="light">Light</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="white">White</Button>
        <Button variant="default">Default</Button>
      </div>
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

// All 5 sizes
export const Sizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-4">
        <Button size="xs">Extra Small</Button>
        <Button size="sm">Small</Button>
        <Button size="md">Medium</Button>
        <Button size="lg">Large</Button>
        <Button size="xl">Extra Large</Button>
      </div>
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

// All 3 states
export const States: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-4">
        <Button state="default">Default</Button>
        <Button state="hover">Hover</Button>
        <Button state="disabled">Disabled</Button>
      </div>
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

// Variants with different sizes
export const VariantsAndSizes: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Filled Variant</h3>
        <div className="flex flex-wrap items-center gap-4">
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
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Subtle Variant</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="subtle" size="xs">
            XS
          </Button>
          <Button variant="subtle" size="sm">
            SM
          </Button>
          <Button variant="subtle" size="md">
            MD
          </Button>
          <Button variant="subtle" size="lg">
            LG
          </Button>
          <Button variant="subtle" size="xl">
            XL
          </Button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Light Variant</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="light" size="xs">
            XS
          </Button>
          <Button variant="light" size="sm">
            SM
          </Button>
          <Button variant="light" size="md">
            MD
          </Button>
          <Button variant="light" size="lg">
            LG
          </Button>
          <Button variant="light" size="xl">
            XL
          </Button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Outline Variant</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="outline" size="xs">
            XS
          </Button>
          <Button variant="outline" size="sm">
            SM
          </Button>
          <Button variant="outline" size="md">
            MD
          </Button>
          <Button variant="outline" size="lg">
            LG
          </Button>
          <Button variant="outline" size="xl">
            XL
          </Button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">White Variant</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="white" size="xs">
            XS
          </Button>
          <Button variant="white" size="sm">
            SM
          </Button>
          <Button variant="white" size="md">
            MD
          </Button>
          <Button variant="white" size="lg">
            LG
          </Button>
          <Button variant="white" size="xl">
            XL
          </Button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Default Variant</h3>
        <div className="flex flex-wrap items-center gap-4">
          <Button variant="default" size="xs">
            XS
          </Button>
          <Button variant="default" size="sm">
            SM
          </Button>
          <Button variant="default" size="md">
            MD
          </Button>
          <Button variant="default" size="lg">
            LG
          </Button>
          <Button variant="default" size="xl">
            XL
          </Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All variants shown with all sizes for comprehensive comparison",
      },
    },
  },
};

// States for each variant
export const StatesForVariants: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Filled Variant States</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="filled" state="default">
            Default
          </Button>
          <Button variant="filled" state="hover">
            Hover
          </Button>
          <Button variant="filled" state="disabled">
            Disabled
          </Button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Subtle Variant States</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="subtle" state="default">
            Default
          </Button>
          <Button variant="subtle" state="hover">
            Hover
          </Button>
          <Button variant="subtle" state="disabled">
            Disabled
          </Button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Light Variant States</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="light" state="default">
            Default
          </Button>
          <Button variant="light" state="hover">
            Hover
          </Button>
          <Button variant="light" state="disabled">
            Disabled
          </Button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Outline Variant States</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="outline" state="default">
            Default
          </Button>
          <Button variant="outline" state="hover">
            Hover
          </Button>
          <Button variant="outline" state="disabled">
            Disabled
          </Button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">White Variant States</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="white" state="default">
            Default
          </Button>
          <Button variant="white" state="hover">
            Hover
          </Button>
          <Button variant="white" state="disabled">
            Disabled
          </Button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Default Variant States</h3>
        <div className="flex flex-wrap gap-4">
          <Button variant="default" state="default">
            Default
          </Button>
          <Button variant="default" state="hover">
            Hover
          </Button>
          <Button variant="default" state="disabled">
            Disabled
          </Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "All states (default, hover, disabled) shown for each variant",
      },
    },
  },
};

// With different MUI icons
export const WithIcons: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Upload/Download Actions</h3>
        <div className="flex flex-wrap gap-4">
          <Button leftIcon leftIconComponent={Upload}>
            Upload
          </Button>
          <Button rightIcon rightIconComponent={Download}>
            Download
          </Button>
          <Button
            leftIcon
            rightIcon
            leftIconComponent={Upload}
            rightIconComponent={Download}
          >
            Upload & Download
          </Button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Add/Remove Actions</h3>
        <div className="flex flex-wrap gap-4">
          <Button leftIcon leftIconComponent={Add}>
            Add Item
          </Button>
          <Button rightIcon rightIconComponent={Remove}>
            Remove Item
          </Button>
          <Button
            leftIcon
            rightIcon
            leftIconComponent={Add}
            rightIconComponent={Remove}
          >
            Add & Remove
          </Button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Edit/Delete Actions</h3>
        <div className="flex flex-wrap gap-4">
          <Button leftIcon leftIconComponent={Edit}>
            Edit
          </Button>
          <Button rightIcon rightIconComponent={Delete}>
            Delete
          </Button>
          <Button
            leftIcon
            rightIcon
            leftIconComponent={Edit}
            rightIconComponent={Delete}
          >
            Edit & Delete
          </Button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Search & Filter Actions</h3>
        <div className="flex flex-wrap gap-4">
          <Button leftIcon leftIconComponent={Search}>
            Search
          </Button>
          <Button rightIcon rightIconComponent={FilterList}>
            Filter
          </Button>
          <Button
            leftIcon
            rightIcon
            leftIconComponent={Search}
            rightIconComponent={FilterList}
          >
            Search & Filter
          </Button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Utility Actions</h3>
        <div className="flex flex-wrap gap-4">
          <Button leftIcon leftIconComponent={Refresh}>
            Refresh
          </Button>
          <Button rightIcon rightIconComponent={Settings}>
            Settings
          </Button>
          <Button
            leftIcon
            rightIcon
            leftIconComponent={Refresh}
            rightIconComponent={Settings}
          >
            Refresh & Settings
          </Button>
        </div>
      </div>
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

// Justification
export const Justification: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="w-64">
        <Button
          justify="center"
          leftIcon
          rightIcon
          leftIconComponent={Add}
          rightIconComponent={Remove}
        >
          Centered
        </Button>
      </div>
      <div className="w-64">
        <Button
          justify="space-between"
          leftIcon
          rightIcon
          leftIconComponent={Add}
          rightIconComponent={Remove}
        >
          Space Between
        </Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Different content justification options",
      },
    },
  },
};

// Compact mode
export const Compact: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-4">
        <Button compact leftIcon leftIconComponent={Add}>
          Compact
        </Button>
        <Button leftIcon leftIconComponent={Add}>
          Normal
        </Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Compact vs normal button sizing",
      },
    },
  },
};

// Interactive example
export const Interactive: Story = {
  args: {
    children: "Click me!",
    variant: "filled",
    size: "md",
    leftIcon: true,
    leftIconComponent: Add,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Interactive button with all controls available in the Controls panel",
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
        <div className="flex flex-wrap gap-4">
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
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">
          All Sizes (Filled Variant)
        </h3>
        <div className="flex flex-wrap items-center gap-4">
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
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">With Icons</h3>
        <div className="flex flex-wrap gap-4">
          <Button leftIcon leftIconComponent={Upload}>
            Upload
          </Button>
          <Button rightIcon rightIconComponent={Download}>
            Download
          </Button>
          <Button
            leftIcon
            rightIcon
            leftIconComponent={Add}
            rightIconComponent={Remove}
          >
            Add & Remove
          </Button>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">States</h3>
        <div className="flex flex-wrap gap-4">
          <Button>Default</Button>
          <Button disabled>Disabled</Button>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Complete showcase of all button variations and features",
      },
    },
  },
};
