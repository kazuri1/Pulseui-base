import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider } from "./ThemeProvider";
import { Button } from "../atoms/Button/Button";
import { Input } from "../atoms/Input/Input";
import { ActionButton } from "../atoms/ActionButton/ActionButton";
import { Add, Edit, Delete } from "../atoms/Icon/IconSet";

const meta: Meta<typeof ThemeProvider> = {
  title: "Components/ThemeProvider",
  component: ThemeProvider,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    initialTheme: {
      control: { type: "select" },
      options: ["light", "dark"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Demo component that shows various components
const ComponentDemo = () => {
  return (
    <div
      style={{
        padding: "24px",
        backgroundColor: "var(--color-background)",
        color: "var(--color-text-primary)",
        transition: "background-color 0.3s ease, color 0.3s ease",
      }}
    >
      <div style={{ marginBottom: "24px" }}>
        <h1 style={{ marginBottom: "16px" }}>Component Demo</h1>
      </div>

      <div style={{ display: "grid", gap: "24px", maxWidth: "600px" }}>
        <div>
          <h3 style={{ marginBottom: "16px" }}>Buttons</h3>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Button variant="filled">Filled Button</Button>
            <Button variant="outline">Outline Button</Button>
            <Button variant="subtle">Subtle Button</Button>
            <Button variant="light">Light Button</Button>
            <Button variant="white">White Button</Button>
            <Button variant="default">Default Button</Button>
          </div>
        </div>

        <div>
          <h3 style={{ marginBottom: "16px" }}>Action Buttons</h3>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <ActionButton icon={Add} variant="filled" />
            <ActionButton icon={Edit} variant="outline" />
            <ActionButton icon={Delete} variant="subtle" />
            <ActionButton icon={Add} variant="light" />
            <ActionButton icon={Edit} variant="white" />
            <ActionButton icon={Delete} variant="default" />
          </div>
        </div>

        <div>
          <h3 style={{ marginBottom: "16px" }}>Inputs</h3>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "12px" }}
          >
            <Input placeholder="Default input" />
            <Input placeholder="Filled input" variant="filled" />
            <Input placeholder="Unstyled input" variant="unstyled" />
          </div>
        </div>

        <div>
          <h3 style={{ marginBottom: "16px" }}>Text Examples</h3>
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <p style={{ color: "var(--color-text-primary)" }}>
              Primary text color
            </p>
            <p style={{ color: "var(--color-text-secondary)" }}>
              Secondary text color
            </p>
            <p style={{ color: "var(--color-text-muted)" }}>Muted text color</p>
            <p style={{ color: "var(--color-text-disabled)" }}>
              Disabled text color
            </p>
          </div>
        </div>

        <div>
          <h3 style={{ marginBottom: "16px" }}>Surfaces</h3>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <div
              style={{
                padding: "16px",
                backgroundColor: "var(--color-surface)",
                border: "1px solid var(--color-border-primary)",
                borderRadius: "8px",
              }}
            >
              Primary Surface
            </div>
            <div
              style={{
                padding: "16px",
                backgroundColor: "var(--color-surface-secondary)",
                border: "1px solid var(--color-border-primary)",
                borderRadius: "8px",
              }}
            >
              Secondary Surface
            </div>
            <div
              style={{
                padding: "16px",
                backgroundColor: "var(--color-surface-tertiary)",
                border: "1px solid var(--color-border-primary)",
                borderRadius: "8px",
              }}
            >
              Tertiary Surface
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const Default: Story = {
  render: () => (
    <ThemeProvider initialTheme="light">
      <ComponentDemo />
    </ThemeProvider>
  ),
  parameters: {
    docs: {
      source: {
        code: `<ThemeProvider initialTheme="light">
              <YourApp />
            </ThemeProvider>`,
      },
    },
  },
};

export const StaticDemo: Story = {
  render: () => <ComponentDemo />,
  parameters: {
    docs: {
      source: {
        code: `// Static component demo without theme switching
<ComponentDemo />`,
      },
    },
  },
};
