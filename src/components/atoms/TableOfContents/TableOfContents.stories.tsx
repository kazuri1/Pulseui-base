import type { Meta, StoryObj } from "@storybook/react";
import { TableOfContents } from "./TableOfContents";
import type { TableOfContentsItem } from "./TableOfContents";

const meta: Meta<typeof TableOfContents> = {
  title: "Atoms/TableOfContents",
  component: TableOfContents,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["filled", "light", "subtle"],
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
    },
    showNumbers: {
      control: { type: "boolean" },
    },
    maxItems: {
      control: { type: "number", min: 1, max: 20 },
    },
    compact: {
      control: { type: "boolean" },
    },
    enableScrollSpy: {
      control: { type: "boolean" },
    },
    scrollOffset: {
      control: { type: "number", min: 0, max: 200 },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleItems: TableOfContentsItem[] = [
  {
    id: "introduction",
    label: "Introduction",
  },
  {
    id: "getting-started",
    label: "Getting Started",
  },
  {
    id: "installation",
    label: "Installation",
  },
  {
    id: "configuration",
    label: "Configuration",
  },
  {
    id: "basic-usage",
    label: "Basic Usage",
  },
  {
    id: "advanced-features",
    label: "Advanced Features",
  },
  {
    id: "theming",
    label: "Theming",
  },
  {
    id: "custom-themes",
    label: "Custom Themes",
  },
  {
    id: "theme-tokens",
    label: "Theme Tokens",
  },
  {
    id: "animations",
    label: "Animations",
  },
  {
    id: "animation-types",
    label: "Animation Types",
  },
  {
    id: "performance",
    label: "Performance",
  },
  {
    id: "error-handling",
    label: "Error Handling",
  },
  {
    id: "api-reference",
    label: "API Reference",
  },
  {
    id: "components",
    label: "Components",
  },
  {
    id: "hooks",
    label: "Hooks",
  },
  {
    id: "utilities",
    label: "Utilities",
  },
];

export const Default: Story = {
  args: {
    items: sampleItems,
    variant: "light",
    size: "md",
  },
};

export const Filled: Story = {
  args: {
    items: sampleItems,
    variant: "filled",
    size: "md",
  },
};

export const Subtle: Story = {
  args: {
    items: sampleItems,
    variant: "subtle",
    size: "md",
  },
};

export const WithNumbers: Story = {
  args: {
    items: sampleItems,
    variant: "light",
    size: "md",
    showNumbers: true,
  },
};

export const SmallSize: Story = {
  args: {
    items: sampleItems,
    variant: "light",
    size: "sm",
  },
};

export const LargeSize: Story = {
  args: {
    items: sampleItems,
    variant: "light",
    size: "lg",
  },
};

export const LimitedItems: Story = {
  args: {
    items: sampleItems,
    variant: "light",
    size: "md",
    maxItems: 4,
  },
};

export const Compact: Story = {
  args: {
    items: sampleItems,
    variant: "light",
    size: "md",
    compact: true,
  },
};

export const WithActiveItem: Story = {
  args: {
    items: sampleItems,
    variant: "light",
    size: "md",
    activeId: "theming",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
      <div>
        <h3>Filled</h3>
        <TableOfContents
          items={sampleItems.slice(0, 8)}
          variant="filled"
          size="md"
        />
      </div>
      <div>
        <h3>Light</h3>
        <TableOfContents
          items={sampleItems.slice(0, 8)}
          variant="light"
          size="md"
        />
      </div>
      <div>
        <h3>Subtle</h3>
        <TableOfContents
          items={sampleItems.slice(0, 8)}
          variant="subtle"
          size="md"
        />
      </div>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "20px", flexDirection: "column" }}>
      <div>
        <h3>Small</h3>
        <TableOfContents
          items={sampleItems.slice(0, 5)}
          variant="light"
          size="sm"
        />
      </div>
      <div>
        <h3>Medium</h3>
        <TableOfContents
          items={sampleItems.slice(0, 5)}
          variant="light"
          size="md"
        />
      </div>
      <div>
        <h3>Large</h3>
        <TableOfContents
          items={sampleItems.slice(0, 5)}
          variant="light"
          size="lg"
        />
      </div>
    </div>
  ),
};

export const Interactive: Story = {
  args: {
    items: sampleItems,
    variant: "light",
    size: "md",
    enableScrollSpy: true,
    onItemClick: (item) => {
      console.log("Clicked item:", item);
    },
  },
};
