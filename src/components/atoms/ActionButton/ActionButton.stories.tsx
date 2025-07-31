import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ActionButton } from "./ActionButton";
import {
  Add,
  Edit,
  Delete,
  Search,
  Settings,
  Refresh,
  Download,
  Upload,
} from "../Icon/IconSet";

const meta: Meta<typeof ActionButton> = {
  title: "Components/atoms/ActionButton",
  component: ActionButton,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    icon: {
      control: { type: "select" },
      options: [
        "Add",
        "Edit",
        "Delete",
        "Search",
        "Settings",
        "Refresh",
        "Download",
        "Upload",
      ],
      mapping: {
        Add,
        Edit,
        Delete,
        Search,
        Settings,
        Refresh,
        Download,
        Upload,
      },
    },
    iconSize: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    iconColor: {
      control: { type: "select" },
      options: [
        "primary",
        "secondary",
        "success",
        "warning",
        "error",
        "muted",
        "inherit",
      ],
    },
    variant: {
      control: { type: "select" },
      options: ["filled", "subtle", "light", "outline", "white", "default"],
    },
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    state: {
      control: { type: "select" },
      options: ["default", "hover", "disabled"],
    },
    disabled: {
      control: { type: "boolean" },
    },
    type: {
      control: { type: "select" },
      options: ["button", "submit", "reset"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: Add,
    variant: "default",
    size: "md",
  },
  parameters: {
    docs: {
      source: {
        code: `<ActionButton icon={Add} variant="default" size="md" />`,
      },
    },
  },
};

export const WithDifferentIcons: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      <ActionButton icon={Add} />
      <ActionButton icon={Edit} />
      <ActionButton icon={Delete} />
      <ActionButton icon={Search} />
      <ActionButton icon={Settings} />
      <ActionButton icon={Refresh} />
    </div>
  ),
};

export const DifferentVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      <ActionButton icon={Add} variant="filled" />
      <ActionButton icon={Edit} variant="outline" />
      <ActionButton icon={Delete} variant="subtle" />
      <ActionButton icon={Search} variant="light" />
      <ActionButton icon={Settings} variant="white" />
      <ActionButton icon={Refresh} variant="default" />
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `<ActionButton icon={Add} variant="filled" />
<ActionButton icon={Edit} variant="outline" />
<ActionButton icon={Delete} variant="subtle" />
<ActionButton icon={Search} variant="light" />
<ActionButton icon={Settings} variant="white" />
<ActionButton icon={Refresh} variant="default" />`,
      },
    },
  },
};

export const AutomaticIconColors: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div>
        <h4 style={{ marginBottom: "8px" }}>
          Automatic Icon Colors by Variant:
        </h4>
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <ActionButton icon={Add} variant="filled" />
          <ActionButton icon={Edit} variant="outline" />
          <ActionButton icon={Delete} variant="subtle" />
          <ActionButton icon={Search} variant="light" />
          <ActionButton icon={Settings} variant="white" />
          <ActionButton icon={Refresh} variant="default" />
        </div>
      </div>
      <div>
        <h4 style={{ marginBottom: "8px" }}>
          With Manual Icon Color Override:
        </h4>
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <ActionButton icon={Add} variant="filled" iconColor="primary" />
          <ActionButton icon={Edit} variant="outline" iconColor="error" />
          <ActionButton icon={Delete} variant="subtle" iconColor="warning" />
          <ActionButton icon={Search} variant="light" iconColor="success" />
          <ActionButton icon={Settings} variant="white" iconColor="muted" />
          <ActionButton icon={Refresh} variant="default" iconColor="inherit" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `// Automatic colors (no iconColor prop needed)
<ActionButton icon={Add} variant="filled" />
<ActionButton icon={Edit} variant="outline" />

// Manual override
<ActionButton icon={Add} variant="filled" iconColor="primary" />
<ActionButton icon={Edit} variant="outline" iconColor="error" />`,
      },
    },
  },
};

export const DifferentSizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      <ActionButton icon={Add} size="xs" />
      <ActionButton icon={Edit} size="sm" />
      <ActionButton icon={Delete} size="md" />
      <ActionButton icon={Search} size="lg" />
      <ActionButton icon={Settings} size="xl" />
    </div>
  ),
};

export const DifferentIconColors: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      <ActionButton icon={Add} iconColor="primary" />
      <ActionButton icon={Edit} iconColor="secondary" />
      <ActionButton icon={Delete} iconColor="success" />
      <ActionButton icon={Search} iconColor="warning" />
      <ActionButton icon={Settings} iconColor="error" />
      <ActionButton icon={Refresh} iconColor="muted" />
    </div>
  ),
};

export const DifferentIconSizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      <ActionButton icon={Add} iconSize="xs" />
      <ActionButton icon={Edit} iconSize="sm" />
      <ActionButton icon={Delete} iconSize="md" />
      <ActionButton icon={Search} iconSize="lg" />
      <ActionButton icon={Settings} iconSize="xl" />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    icon: Add,
    disabled: true,
  },
  parameters: {
    docs: {
      source: {
        code: `<ActionButton icon={Add} disabled />`,
      },
    },
  },
};

export const WithClickHandler: Story = {
  args: {
    icon: Add,
    onClick: () => console.log("Action button clicked!"),
  },
  parameters: {
    docs: {
      source: {
        code: `<ActionButton icon={Add} onClick={() => console.log("Clicked!")} />`,
      },
    },
  },
};

export const DifferentButtonTypes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
      <ActionButton icon={Add} type="button" />
      <ActionButton icon={Edit} type="submit" />
      <ActionButton icon={Delete} type="reset" />
    </div>
  ),
};

export const WithCustomClassName: Story = {
  args: {
    icon: Add,
    className: "custom-action-button",
  },
  parameters: {
    docs: {
      source: {
        code: `<ActionButton icon={Add} className="custom-action-button" />`,
      },
    },
  },
};
