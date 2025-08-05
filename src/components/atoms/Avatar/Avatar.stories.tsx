import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";
import {
  Person,
  Settings,
  Search,
  Home,
  Email,
  Message,
} from "../Icon/IconSet";

const meta: Meta<typeof Avatar> = {
  title: "Components/Avatar",
  component: Avatar,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: { type: "select" },
      options: ["initial", "icon", "image"],
    },
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    variant: {
      control: { type: "select" },
      options: ["primary", "secondary", "success", "warning", "error", "muted"],
    },
    interactive: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: "initial",
    size: "md",
    initials: "AV",
    variant: "primary",
  },
  parameters: {
    docs: {
      source: {
        code: `<Avatar type="initial" size="md" initials="AV" variant="primary" />`,
      },
    },
  },
};

export const AllTypes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <Avatar type="initial" initials="JD" variant="primary" />
      <Avatar type="icon" icon={Person} variant="secondary" />
      <Avatar
        type="image"
        src="https://via.placeholder.com/40x40/4dabf7/ffffff?text=JD"
        alt="John Doe"
        initials="JD"
        variant="muted"
      />
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `<Avatar type="initial" initials="JD" variant="primary" />
<Avatar type="icon" icon={Person} variant="secondary" />
<Avatar type="image" src="..." alt="John Doe" initials="JD" variant="muted" />`,
      },
    },
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <Avatar type="initial" size="xs" initials="XS" />
      <Avatar type="initial" size="sm" initials="SM" />
      <Avatar type="initial" size="md" initials="MD" />
      <Avatar type="initial" size="lg" initials="LG" />
      <Avatar type="initial" size="xl" initials="XL" />
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `<Avatar type="initial" size="xs" initials="XS" />
<Avatar type="initial" size="sm" initials="SM" />
<Avatar type="initial" size="md" initials="MD" />
<Avatar type="initial" size="lg" initials="LG" />
<Avatar type="initial" size="xl" initials="XL" />`,
      },
    },
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <Avatar type="initial" variant="primary" initials="P" />
      <Avatar type="initial" variant="secondary" initials="S" />
      <Avatar type="initial" variant="success" initials="S" />
      <Avatar type="initial" variant="warning" initials="W" />
      <Avatar type="initial" variant="error" initials="E" />
      <Avatar type="initial" variant="muted" initials="M" />
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `<Avatar type="initial" variant="primary" initials="P" />
<Avatar type="initial" variant="secondary" initials="S" />
<Avatar type="initial" variant="success" initials="S" />
<Avatar type="initial" variant="warning" initials="W" />
<Avatar type="initial" variant="error" initials="E" />
<Avatar type="initial" variant="muted" initials="M" />`,
      },
    },
  },
};

export const IconAvatars: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <Avatar type="icon" icon={Person} variant="primary" />
      <Avatar type="icon" icon={Settings} variant="secondary" />
      <Avatar type="icon" icon={Search} variant="success" />
      <Avatar type="icon" icon={Home} variant="warning" />
      <Avatar type="icon" icon={Email} variant="error" />
      <Avatar type="icon" icon={Message} variant="muted" />
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `<Avatar type="icon" icon={Person} variant="primary" />
<Avatar type="icon" icon={Settings} variant="secondary" />
<Avatar type="icon" icon={Search} variant="success" />
<Avatar type="icon" icon={Home} variant="warning" />
<Avatar type="icon" icon={Email} variant="error" />
<Avatar type="icon" icon={Message} variant="muted" />`,
      },
    },
  },
};

export const ImageAvatars: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <Avatar
        type="image"
        src="https://via.placeholder.com/40x40/4dabf7/ffffff?text=JD"
        alt="John Doe"
        initials="JD"
        variant="primary"
      />
      <Avatar
        type="image"
        src="https://via.placeholder.com/40x40/69db7c/ffffff?text=JS"
        alt="Jane Smith"
        initials="JS"
        variant="success"
      />
      <Avatar
        type="image"
        src="https://via.placeholder.com/40x40/ff8787/ffffff?text=MB"
        alt="Mike Brown"
        initials="MB"
        variant="error"
      />
      <Avatar
        type="image"
        src="https://via.placeholder.com/40x40/ffd43b/ffffff?text=AL"
        alt="Alice Lee"
        initials="AL"
        variant="warning"
      />
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `<Avatar type="image" src="..." alt="John Doe" initials="JD" variant="primary" />
<Avatar type="image" src="..." alt="Jane Smith" initials="JS" variant="success" />
<Avatar type="image" src="..." alt="Mike Brown" initials="MB" variant="error" />
<Avatar type="image" src="..." alt="Alice Lee" initials="AL" variant="warning" />`,
      },
    },
  },
};

export const InteractiveAvatars: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <Avatar
        type="initial"
        initials="JD"
        variant="primary"
        interactive
        onClick={() => alert("Avatar clicked!")}
      />
      <Avatar
        type="icon"
        icon={Settings}
        variant="secondary"
        interactive
        onClick={() => alert("Settings avatar clicked!")}
      />
      <Avatar
        type="image"
        src="https://via.placeholder.com/40x40/4dabf7/ffffff?text=JD"
        alt="John Doe"
        initials="JD"
        variant="success"
        interactive
        onClick={() => alert("Image avatar clicked!")}
      />
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `<Avatar type="initial" initials="JD" variant="primary" interactive onClick={() => alert("Clicked!")} />
<Avatar type="icon" icon={Settings} variant="secondary" interactive onClick={() => alert("Clicked!")} />
<Avatar type="image" src="..." alt="John Doe" initials="JD" variant="success" interactive onClick={() => alert("Clicked!")} />`,
      },
    },
  },
};

export const ImageWithFallback: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <Avatar
        type="image"
        src="https://invalid-url-that-will-fail.com/image.jpg"
        alt="Failed Image"
        initials="FI"
        variant="muted"
      />
      <Avatar
        type="image"
        src=""
        alt="Empty Image"
        initials="EI"
        variant="primary"
      />
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `<Avatar type="image" src="invalid-url" alt="Failed Image" initials="FI" variant="muted" />
<Avatar type="image" src="" alt="Empty Image" initials="EI" variant="primary" />`,
      },
    },
  },
};
