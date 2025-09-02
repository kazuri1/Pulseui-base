import type { Meta, StoryObj } from "@storybook/react";
// import { userEvent, within, expect } from "@storybook/test";
import { Badge } from "./Badge";
import { Add, Close, Search, Settings } from "../Icon/IconSet";

const meta: Meta<typeof Badge> = {
  title: "Components/Badge",
  component: Badge,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: [
        "dot",
        "filled",
        "subtle",
        "light",
        "outline",
        "white",
        "default",
      ],
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
    leftIcon: {
      control: { type: "select" },
      options: [
        "none",
        "add",
        "remove",
        "edit",
        "delete",
        "search",
        "filter",
        "refresh",
        "settings",
        "close",
        "check",
        "warning",
        "info",
        "star",
        "heart",
        "share",
        "download",
        "upload",
      ],
    },
    rightIcon: {
      control: { type: "select" },
      options: [
        "none",
        "add",
        "remove",
        "edit",
        "delete",
        "search",
        "filter",
        "refresh",
        "settings",
        "close",
        "check",
        "warning",
        "info",
        "star",
        "heart",
        "share",
        "download",
        "upload",
      ],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "BADGE",
  },
};

export const DotVariant: Story = {
  args: {
    children: "BADGE",
    variant: "dot",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "16px",
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      <Badge variant="dot">DOT</Badge>
      <Badge variant="filled">FILLED</Badge>
      <Badge variant="subtle">SUBTLE</Badge>
      <Badge variant="light">LIGHT</Badge>
      <Badge variant="outline">OUTLINE</Badge>
      <Badge variant="white">WHITE</Badge>
      <Badge variant="default">DEFAULT</Badge>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <Badge size="xs">XS</Badge>
      <Badge size="sm">SM</Badge>
      <Badge size="md">MD</Badge>
      <Badge size="lg">LG</Badge>
      <Badge size="xl">XL</Badge>
    </div>
  ),
};

export const WithLeftIcon: Story = {
  args: {
    children: "BADGE",
    leftIcon: Add,
  },
};

export const WithRightIcon: Story = {
  args: {
    children: "BADGE",
    rightIcon: Close,
  },
};

export const WithBothIcons: Story = {
  args: {
    children: "BADGE",
    leftIcon: Search,
    rightIcon: Settings,
  },
};

export const Clickable: Story = {
  args: {
    children: "CLICKABLE",
    onClick: () => alert("Badge clicked!"),
  },
};

export const Disabled: Story = {
  args: {
    children: "DISABLED",
    disabled: true,
  },
};

export const AllVariantsWithIcons: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "16px",
        flexWrap: "wrap",
        alignItems: "center",
      }}
    >
      <Badge variant="dot" leftIcon={Add}>
        DOT
      </Badge>
      <Badge variant="filled" leftIcon={Search}>
        FILLED
      </Badge>
      <Badge variant="subtle" rightIcon={Settings}>
        SUBTLE
      </Badge>
      <Badge variant="light" leftIcon={Add} rightIcon={Close}>
        LIGHT
      </Badge>
      <Badge variant="outline" leftIcon={Search}>
        OUTLINE
      </Badge>
      <Badge variant="white" rightIcon={Settings}>
        WHITE
      </Badge>
      <Badge variant="default" leftIcon={Add} rightIcon={Close}>
        DEFAULT
      </Badge>
    </div>
  ),
};

export const AllSizesWithDot: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <Badge variant="dot" size="xs">
        XS
      </Badge>
      <Badge variant="dot" size="sm">
        SM
      </Badge>
      <Badge variant="dot" size="md">
        MD
      </Badge>
      <Badge variant="dot" size="lg">
        LG
      </Badge>
      <Badge variant="dot" size="xl">
        XL
      </Badge>
    </div>
  ),
};

export const InteractiveStates: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
      <Badge variant="filled" state="default">
        DEFAULT
      </Badge>
      <Badge variant="filled" state="hover">
        HOVER
      </Badge>
      <Badge variant="filled" state="disabled">
        DISABLED
      </Badge>
    </div>
  ),
};

