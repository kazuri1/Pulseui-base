import type { Meta, StoryObj } from "@storybook/react";
import { Container } from "./Container";

const meta: Meta<typeof Container> = {
  title: "Components/Container",
  component: Container,
  parameters: {
    layout: "padded",
  },
  argTypes: {
    children: {
      control: "text",
      description: "Container content",
    },
    fluid: {
      control: "boolean",
      description:
        "If set, the container takes 100% width of its parent and `size` prop is ignored",
    },
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
      description:
        "`max-width` of the container, value is not responsive - it is the same for all screen sizes. Numbers are converted to rem. Ignored when `fluid` prop is set",
    },
    strategy: {
      control: { type: "select" },
      options: ["block", "grid"],
      description: "Centering strategy",
    },
    className: {
      control: "text",
      description: "Additional CSS classes",
    },
  },
  args: {
    children: "Container content goes here",
    fluid: false,
    size: "md",
    strategy: "block",
    className: "",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Default container with max-width",
  },
};

export const Fluid: Story = {
  args: {
    fluid: true,
    children: "Fluid container with no max-width",
  },
};

export const Small: Story = {
  args: {
    size: "sm",
    children: "Small container with 768px max-width",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
    children: "Large container with 1200px max-width",
  },
};

export const GridStrategy: Story = {
  args: {
    strategy: "grid",
    children: "Container with grid centering strategy",
  },
};

export const GridWithBreakout: Story = {
  args: {
    strategy: "grid",
    children: (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--spacing-md)",
        }}
      >
        <div
          style={{
            padding: "var(--spacing-md)",
            backgroundColor: "var(--color-surface-secondary)",
            borderRadius: "var(--radius-md)",
          }}
        >
          <h3>Main Content</h3>
          <p>This content is constrained to the container's max-width.</p>
        </div>

        <div
          data-breakout
          style={{
            padding: "var(--spacing-md)",
            backgroundColor: "var(--color-primary-500)",
            color: "white",
            borderRadius: "var(--radius-md)",
          }}
        >
          <h3>Breakout Content</h3>
          <p>This content breaks out of the container's max-width.</p>
        </div>

        <div
          style={{
            padding: "var(--spacing-md)",
            backgroundColor: "var(--color-surface-secondary)",
            borderRadius: "var(--radius-md)",
          }}
        >
          <h3>Main Content</h3>
          <p>This content is constrained to the container's max-width.</p>
        </div>
      </div>
    ),
  },
};

export const WithContent: Story = {
  args: {
    children: (
      <div
        style={{
          padding: "var(--spacing-md)",
          backgroundColor: "var(--color-surface-secondary)",
          borderRadius: "var(--radius-md)",
        }}
      >
        <h2>Sample Content</h2>
        <p>
          This is some sample content inside the container to demonstrate how it
          looks with actual content.
        </p>
        <button
          style={{
            padding: "var(--spacing-sm) var(--spacing-md)",
            backgroundColor: "var(--color-primary-500)",
            color: "white",
            border: "none",
            borderRadius: "var(--radius-sm)",
          }}
        >
          Sample Button
        </button>
      </div>
    ),
  },
};
