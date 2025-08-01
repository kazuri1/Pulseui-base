import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider } from "./ThemeProvider";
import { Button } from "../atoms/Button/Button";
import { Input } from "../atoms/Input/Input";
import { ActionButton } from "../atoms/ActionButton/ActionButton";
import { Add, Edit, Delete } from "../atoms/Icon/IconSet";
import { useTheme } from "./ThemeProvider";

const meta: Meta<typeof ThemeProvider> = {
  title: "Components/ThemeProvider",
  component: ThemeProvider,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "Theme provider content",
    },
    initialTheme: {
      control: { type: "select" },
      options: ["light", "dark"],
      description: "Initial theme to use",
    },
  },
  args: {
    children: "Theme provider content",
    initialTheme: "light",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Demo component that shows various components
const ComponentDemo = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      style={{
        padding: "var(--spacing-lg)",
        backgroundColor: "var(--color-surface-50)",
        minHeight: "100vh",
      }}
    >
      <div style={{ marginBottom: "var(--spacing-lg)" }}>
        <h1 style={{ marginBottom: "var(--spacing-md)" }}>Component Demo</h1>
        <button onClick={toggleTheme}>
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>

      <div
        style={{ display: "grid", gap: "var(--spacing-lg)", maxWidth: "600px" }}
      >
        <div>
          <h3 style={{ marginBottom: "var(--spacing-md)" }}>Buttons</h3>
          <div
            style={{
              display: "flex",
              gap: "var(--spacing-sm)",
              flexWrap: "wrap",
            }}
          >
            <button
              style={{
                padding: "var(--spacing-sm) var(--spacing-md)",
                backgroundColor: "var(--color-primary-500)",
                color: "white",
                border: "none",
                borderRadius: "var(--radius-sm)",
              }}
            >
              Primary
            </button>
            <button
              style={{
                padding: "var(--spacing-sm) var(--spacing-md)",
                backgroundColor: "var(--color-surface-600)",
                color: "white",
                border: "none",
                borderRadius: "var(--radius-sm)",
              }}
            >
              Secondary
            </button>
          </div>
        </div>

        <div>
          <h3 style={{ marginBottom: "var(--spacing-md)" }}>Action Buttons</h3>
          <div
            style={{
              display: "flex",
              gap: "var(--spacing-sm)",
              flexWrap: "wrap",
            }}
          >
            <button
              style={{
                padding: "var(--spacing-sm) var(--spacing-md)",
                backgroundColor: "var(--color-green-500)",
                color: "white",
                border: "none",
                borderRadius: "var(--radius-sm)",
              }}
            >
              Success
            </button>
            <button
              style={{
                padding: "var(--spacing-sm) var(--spacing-md)",
                backgroundColor: "var(--color-red-500)",
                color: "white",
                border: "none",
                borderRadius: "var(--radius-sm)",
              }}
            >
              Danger
            </button>
          </div>
        </div>

        <div>
          <h3 style={{ marginBottom: "var(--spacing-md)" }}>Inputs</h3>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--spacing-sm)",
            }}
          >
            <input
              type="text"
              placeholder="Text input"
              style={{
                padding: "var(--spacing-sm)",
                border: "1px solid var(--color-border-primary)",
                borderRadius: "var(--radius-sm)",
              }}
            />
            <textarea
              placeholder="Textarea"
              style={{
                padding: "var(--spacing-sm)",
                border: "1px solid var(--color-border-primary)",
                borderRadius: "var(--radius-sm)",
              }}
            />
          </div>
        </div>

        <div>
          <h3 style={{ marginBottom: "var(--spacing-md)" }}>Text Examples</h3>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "var(--spacing-xs)",
            }}
          >
            <h1 style={{ color: "var(--color-text-primary)" }}>Heading 1</h1>
            <h2 style={{ color: "var(--color-text-primary)" }}>Heading 2</h2>
            <p style={{ color: "var(--color-text-secondary)" }}>
              This is a paragraph with secondary text color.
            </p>
            <small style={{ color: "var(--color-text-muted)" }}>
              This is small text with muted color.
            </small>
          </div>
        </div>

        <div>
          <h3 style={{ marginBottom: "var(--spacing-md)" }}>Surfaces</h3>
          <div
            style={{
              display: "flex",
              gap: "var(--spacing-sm)",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                padding: "var(--spacing-md)",
                backgroundColor: "var(--color-surface-100)",
                border: "1px solid var(--color-border-primary)",
                borderRadius: "var(--radius-md)",
              }}
            >
              Surface 100
            </div>
            <div
              style={{
                padding: "var(--spacing-md)",
                backgroundColor: "var(--color-surface-200)",
                border: "1px solid var(--color-border-primary)",
                borderRadius: "var(--radius-md)",
              }}
            >
              Surface 200
            </div>
            <div
              style={{
                padding: "var(--spacing-md)",
                backgroundColor: "var(--color-surface-300)",
                border: "1px solid var(--color-border-primary)",
                borderRadius: "var(--radius-md)",
              }}
            >
              Surface 300
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const LightTheme: Story = {
  render: () => (
    <ThemeProvider initialTheme="light">
      <ComponentDemo />
    </ThemeProvider>
  ),
  parameters: {
    docs: {
      description: {
        story: `Theme provider with light theme initialized.
        
\`\`\`tsx
<ThemeProvider initialTheme="light">
  <ComponentDemo />
</ThemeProvider>
\`\`\``,
      },
    },
  },
};

export const DarkTheme: Story = {
  render: () => (
    <ThemeProvider initialTheme="dark">
      <ComponentDemo />
    </ThemeProvider>
  ),
  parameters: {
    docs: {
      description: {
        story: `Theme provider with dark theme initialized.
        
\`\`\`tsx
<ThemeProvider initialTheme="dark">
  <ComponentDemo />
</ThemeProvider>
\`\`\``,
      },
    },
  },
};

export const StaticDemo: Story = {
  render: () => <ComponentDemo />,
  parameters: {
    docs: {
      description: {
        story: `// Static component demo without theme switching
<ComponentDemo />`,
      },
    },
  },
};
