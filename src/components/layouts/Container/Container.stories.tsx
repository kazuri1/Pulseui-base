import type { Meta, StoryObj } from "@storybook/react";
import { Container } from "./Container";

const meta: Meta<typeof Container> = {
  title: "Components/layouts/Container",
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
      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div
          style={{
            padding: "20px",
            backgroundColor: "#f0f0f0",
            borderRadius: "8px",
          }}
        >
          <h3>Main Content</h3>
          <p>This content is constrained to the container's max-width.</p>
        </div>

        <div
          data-breakout
          style={{
            backgroundColor: "#007bff",
            color: "white",
            padding: "40px 0",
          }}
        >
          <div
            data-container
            style={{
              padding: "0 20px",
            }}
          >
            <h3>Breakout Section</h3>
            <p>
              This section spans the full viewport width while maintaining the
              container's content width.
            </p>
          </div>
        </div>

        <div
          style={{
            padding: "20px",
            backgroundColor: "#f0f0f0",
            borderRadius: "8px",
          }}
        >
          <h3>More Main Content</h3>
          <p>Back to constrained width content.</p>
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
          padding: "20px",
          backgroundColor: "#f0f0f0",
          borderRadius: "8px",
        }}
      >
        <h2>Sample Content</h2>
        <p>
          This is some sample content inside the container to demonstrate how it
          looks with actual content.
        </p>
        <button
          style={{
            padding: "8px 16px",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Sample Button
        </button>
      </div>
    ),
  },
};
