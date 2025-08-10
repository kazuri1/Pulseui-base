import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { ComponentDisplay } from "./ComponentDisplay";

const meta: Meta<typeof ComponentDisplay> = {
  title: "Atoms/ComponentDisplay",
  component: ComponentDisplay,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A documentation page header component that displays component information with title, description, and metadata links. Uses design system tokens for consistent styling and accessibility.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "The main title of the component",
      table: {
        type: { summary: "string" },
        required: true,
        defaultValue: { summary: "undefined" },
      },
    },
    description: {
      control: "text",
      description: "Description of the component functionality",
      table: {
        type: { summary: "string" },
        required: true,
        defaultValue: { summary: "undefined" },
      },
    },
    sourceUrl: {
      control: "text",
      description: "URL to the source code (GitHub, etc.)",
      table: {
        type: { summary: "string" },
        required: false,
        defaultValue: { summary: "undefined" },
      },
    },
    docsUrl: {
      control: "text",
      description: "URL to edit the documentation page",
      table: {
        type: { summary: "string" },
        required: false,
        defaultValue: { summary: "undefined" },
      },
    },
    packageName: {
      control: "text",
      description: "Name of the npm package (clickable link to npmjs.com)",
      table: {
        type: { summary: "string" },
        required: false,
        defaultValue: { summary: "undefined" },
      },
    },
    children: {
      control: false,
      description: "Content to display below the header",
      table: {
        type: { summary: "ReactNode" },
        required: false,
        defaultValue: { summary: "undefined" },
      },
    },
    className: {
      control: "text",
      description: "Additional CSS class names for custom styling",
      table: {
        type: { summary: "string" },
        required: false,
        defaultValue: { summary: "undefined" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "ComponentDisplay",
    description:
      "A documentation page header component that displays component information with title, description, and metadata links.",
    sourceUrl: "https://github.com/kazuri1/Pulseui",
    docsUrl: "https://docs.your-site.com/edit",
    packageName: "@pulseui-base",
  },
};

export const WithContent: Story = {
  args: {
    title: "Button Component",
    description:
      "Interactive button component with multiple variants and states, following design system guidelines for consistent user experience.",
    sourceUrl: "https://github.com/kazuri1/Pulseui",
    docsUrl: "https://docs.your-site.com/edit",
    packageName: "@pulseui-base",
    children: (
      <>
        <div
          style={{
            padding: "20px",
            backgroundColor: "var(--color-surface-secondary)",
            borderRadius: "var(--radius-md)",
            border: "1px solid var(--color-border-secondary)",
          }}
        >
          <h3
            style={{ margin: "0 0 16px 0", color: "var(--color-text-primary)" }}
          >
            Component Examples
          </h3>
          <p
            style={{
              margin: "0 0 12px 0",
              color: "var(--color-text-secondary)",
            }}
          >
            This is where you would display your component examples, props
            table, and usage documentation.
          </p>
          <p style={{ margin: 0, color: "var(--color-text-secondary)" }}>
            The ComponentDisplay component provides a clean header structure
            that you can extend with your own content.
          </p>
        </div>
      </>
    ),
  },
};

export const Minimal: Story = {
  args: {
    title: "Icon Component",
    description:
      "Icon component for displaying various icon types with consistent sizing and color schemes.",
  },
};

export const LongDescription: Story = {
  args: {
    title: "DataTable Component",
    description:
      "Advanced data table component with sorting, filtering, pagination, and row selection capabilities. Supports both controlled and uncontrolled modes with extensive customization options. Built following design system principles for consistent spacing, typography, and interactive states.",
    sourceUrl: "https://github.com/kazuri1/Pulseui",
    packageName: "@pulseui-base",
  },
};

export const WithoutLinks: Story = {
  args: {
    title: "Typography System",
    description:
      "Comprehensive typography components for consistent text styling across your application, including headings, body text, and specialized text variants.",
    packageName: "@pulseui-base",
  },
};

export const WithCustomStyling: Story = {
  args: {
    title: "Custom Styled Component",
    description:
      "ComponentDisplay with custom styling applied via className prop, demonstrating flexibility for different use cases.",
    sourceUrl: "https://github.com/kazuri1/Pulseui",
    packageName: "@pulseui-base",
    className: "custom-component-display",
    children: (
      <>
        <div
          style={{
            padding: "20px",
            backgroundColor: "var(--color-blue-0)",
            borderRadius: "var(--radius-md)",
            border: "2px solid var(--color-blue-3)",
          }}
        >
          <h3 style={{ margin: "0 0 16px 0", color: "var(--color-blue-8)" }}>
            Custom Styled Content
          </h3>
          <p style={{ margin: 0, color: "var(--color-blue-7)" }}>
            This content area demonstrates how the ComponentDisplay can be
            customized with additional CSS classes.
          </p>
        </div>
      </>
    ),
  },
};

// Documentation Stories
export const PropsDocumentation: Story = {
  args: {
    title: "ComponentDisplay Props",
    description:
      "Complete documentation of all available props and their usage.",
    sourceUrl: "https://github.com/kazuri1/Pulseui",
    packageName: "@pulseui-base",
    children: (
      <>
        <div
          style={{ padding: "24px", backgroundColor: "var(--color-surface)" }}
        >
          <h2
            style={{ color: "var(--color-text-primary)", marginBottom: "16px" }}
          >
            Props Reference
          </h2>

          <div style={{ marginBottom: "24px" }}>
            <h3
              style={{
                color: "var(--color-text-primary)",
                marginBottom: "12px",
              }}
            >
              Required Props
            </h3>
            <div
              style={{
                padding: "16px",
                backgroundColor: "var(--color-surface-secondary)",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--color-border-secondary)",
              }}
            >
              <h4
                style={{
                  color: "var(--color-text-primary)",
                  marginBottom: "8px",
                }}
              >
                title
              </h4>
              <p
                style={{
                  color: "var(--color-text-secondary)",
                  margin: "0 0 8px 0",
                }}
              >
                The main title displayed prominently at the top of the
                component.
              </p>
              <code
                style={{
                  backgroundColor: "var(--color-surface-tertiary)",
                  padding: "4px 8px",
                  borderRadius: "var(--radius-sm)",
                  fontSize: "var(--font-size-sm)",
                  color: "var(--color-text-primary)",
                }}
              >
                string
              </code>
            </div>

            <div
              style={{
                padding: "16px",
                backgroundColor: "var(--color-surface-secondary)",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--color-border-secondary)",
                marginTop: "12px",
              }}
            >
              <h4
                style={{
                  color: "var(--color-text-primary)",
                  marginBottom: "8px",
                }}
              >
                description
              </h4>
              <p
                style={{
                  color: "var(--color-text-secondary)",
                  margin: "0 0 8px 0",
                }}
              >
                A detailed description of the component's functionality and
                purpose.
              </p>
              <code
                style={{
                  backgroundColor: "var(--color-surface-tertiary)",
                  padding: "4px 8px",
                  borderRadius: "var(--radius-sm)",
                  fontSize: "var(--font-size-sm)",
                  color: "var(--color-text-primary)",
                }}
              >
                string
              </code>
            </div>
          </div>

          <div style={{ marginBottom: "24px" }}>
            <h3
              style={{
                color: "var(--color-text-primary)",
                marginBottom: "12px",
              }}
            >
              Optional Props
            </h3>
            <div
              style={{
                padding: "16px",
                backgroundColor: "var(--color-surface-secondary)",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--color-border-secondary)",
              }}
            >
              <h4
                style={{
                  color: "var(--color-text-primary)",
                  marginBottom: "8px",
                }}
              >
                sourceUrl
              </h4>
              <p
                style={{
                  color: "var(--color-text-secondary)",
                  margin: "0 0 8px 0",
                }}
              >
                URL to the source code repository (e.g., GitHub). Creates a
                clickable "Source" link.
              </p>
              <code
                style={{
                  backgroundColor: "var(--color-surface-tertiary)",
                  padding: "4px 8px",
                  borderRadius: "var(--radius-sm)",
                  fontSize: "var(--font-size-sm)",
                  color: "var(--color-text-primary)",
                }}
              >
                string | undefined
              </code>
            </div>

            <div
              style={{
                padding: "16px",
                backgroundColor: "var(--color-surface-secondary)",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--color-border-secondary)",
                marginTop: "12px",
              }}
            >
              <h4
                style={{
                  color: "var(--color-text-primary)",
                  marginBottom: "8px",
                }}
              >
                docsUrl
              </h4>
              <p
                style={{
                  color: "var(--color-text-secondary)",
                  margin: "0 0 8px 0",
                }}
              >
                URL to edit the documentation page. Creates a clickable "Docs"
                link.
              </p>
              <code
                style={{
                  backgroundColor: "var(--color-surface-tertiary)",
                  padding: "4px 8px",
                  borderRadius: "var(--radius-sm)",
                  fontSize: "var(--font-size-sm)",
                  color: "var(--color-text-primary)",
                }}
              >
                string | undefined
              </code>
            </div>

            <div
              style={{
                padding: "16px",
                backgroundColor: "var(--color-surface-secondary)",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--color-border-secondary)",
                marginTop: "12px",
              }}
            >
              <h4
                style={{
                  color: "var(--color-text-primary)",
                  marginBottom: "8px",
                }}
              >
                packageName
              </h4>
              <p
                style={{
                  color: "var(--color-text-secondary)",
                  margin: "0 0 8px 0",
                }}
              >
                Name of the npm package. Creates a clickable link to the package
                on npmjs.com.
              </p>
              <code
                style={{
                  backgroundColor: "var(--color-surface-tertiary)",
                  padding: "4px 8px",
                  borderRadius: "var(--radius-sm)",
                  fontSize: "var(--font-size-sm)",
                  color: "var(--color-text-primary)",
                }}
              >
                string | undefined
              </code>
            </div>

            <div
              style={{
                padding: "16px",
                backgroundColor: "var(--color-surface-secondary)",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--color-border-secondary)",
                marginTop: "12px",
              }}
            >
              <h4
                style={{
                  color: "var(--color-text-primary)",
                  marginBottom: "8px",
                }}
              >
                children
              </h4>
              <p
                style={{
                  color: "var(--color-text-secondary)",
                  margin: "0 0 8px 0",
                }}
              >
                React nodes to render below the header section. Perfect for
                component examples, props tables, and usage documentation.
              </p>
              <code
                style={{
                  backgroundColor: "var(--color-surface-tertiary)",
                  padding: "4px 8px",
                  borderRadius: "var(--radius-sm)",
                  fontSize: "var(--font-size-sm)",
                  color: "var(--color-text-primary)",
                }}
              >
                ReactNode | undefined
              </code>
            </div>

            <div
              style={{
                padding: "16px",
                backgroundColor: "var(--color-surface-secondary)",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--color-border-secondary)",
                marginTop: "12px",
              }}
            >
              <h4
                style={{
                  color: "var(--color-text-primary)",
                  marginBottom: "8px",
                }}
              >
                className
              </h4>
              <p
                style={{
                  color: "var(--color-text-secondary)",
                  margin: "0 0 8px 0",
                }}
              >
                Additional CSS class names for custom styling and theming.
              </p>
              <code
                style={{
                  backgroundColor: "var(--color-surface-tertiary)",
                  padding: "4px 8px",
                  borderRadius: "var(--radius-sm)",
                  fontSize: "var(--font-size-sm)",
                  color: "var(--color-text-primary)",
                }}
              >
                string | undefined
              </code>
            </div>
          </div>
        </div>
      </>
    ),
  },
};

export const UsageExamples: Story = {
  args: {
    title: "Usage Examples",
    description:
      "Common usage patterns and examples for the ComponentDisplay component.",
    sourceUrl: "https://github.com/kazuri1/Pulseui",
    packageName: "@pulseui-base",
    children: (
      <>
        <div
          style={{ padding: "24px", backgroundColor: "var(--color-surface)" }}
        >
          <h2
            style={{ color: "var(--color-text-primary)", marginBottom: "16px" }}
          >
            Usage Examples
          </h2>

          <div style={{ marginBottom: "24px" }}>
            <h3
              style={{
                color: "var(--color-text-primary)",
                marginBottom: "12px",
              }}
            >
              Basic Usage
            </h3>
            <div
              style={{
                padding: "16px",
                backgroundColor: "var(--color-surface-secondary)",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--color-border-secondary)",
                fontFamily: "monospace",
                fontSize: "var(--font-size-sm)",
              }}
            >
              <pre style={{ margin: 0, color: "var(--color-text-primary)" }}>
                {`import { ComponentDisplay } from '@pulseui-base';

<ComponentDisplay
  title="My Component"
  description="A description of what this component does"
/>`}
              </pre>
            </div>
          </div>

          <div style={{ marginBottom: "24px" }}>
            <h3
              style={{
                color: "var(--color-text-primary)",
                marginBottom: "12px",
              }}
            >
              With All Metadata
            </h3>
            <div
              style={{
                padding: "16px",
                backgroundColor: "var(--color-surface-secondary)",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--color-border-secondary)",
                fontFamily: "monospace",
                fontSize: "var(--font-size-sm)",
              }}
            >
              <pre style={{ margin: 0, color: "var(--color-text-primary)" }}>
                {`<ComponentDisplay
  title="Advanced Component"
  description="Component with full metadata support"
  sourceUrl="https://github.com/user/repo"
  docsUrl="https://docs.example.com/edit"
  packageName="@org/package-name"
/>`}
              </pre>
            </div>
          </div>

          <div style={{ marginBottom: "24px" }}>
            <h3
              style={{
                color: "var(--color-text-primary)",
                marginBottom: "12px",
              }}
            >
              With Content
            </h3>
            <div
              style={{
                padding: "16px",
                backgroundColor: "var(--color-surface-secondary)",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--color-border-secondary)",
                fontFamily: "monospace",
                fontSize: "var(--font-size-sm)",
              }}
            >
              <pre style={{ margin: 0, color: "var(--color-text-primary)" }}>
                {`<ComponentDisplay
  title="Component with Examples"
  description="Shows how to use the component"
>
  <div>Your component examples go here</div>
  <div>Props table, usage docs, etc.</div>
</ComponentDisplay>`}
              </pre>
            </div>
          </div>

          <div style={{ marginBottom: "24px" }}>
            <h3
              style={{
                color: "var(--color-text-primary)",
                marginBottom: "12px",
              }}
            >
              Custom Styling
            </h3>
            <div
              style={{
                padding: "16px",
                backgroundColor: "var(--color-surface-secondary)",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--color-border-secondary)",
                fontFamily: "monospace",
                fontSize: "var(--font-size-sm)",
              }}
            >
              <pre style={{ margin: 0, color: "var(--color-text-primary)" }}>
                {`<ComponentDisplay
  title="Custom Styled"
  description="With custom CSS classes"
  className="my-custom-class"
/>`}
              </pre>
            </div>
          </div>
        </div>
      </>
    ),
  },
};

export const DesignSystemIntegration: Story = {
  args: {
    title: "Design System Integration",
    description:
      "How ComponentDisplay integrates with the PulseUI design system for consistent styling and theming.",
    sourceUrl: "https://github.com/kazuri1/Pulseui",
    packageName: "@pulseui-base",
    children: (
      <>
        <div
          style={{ padding: "24px", backgroundColor: "var(--color-surface)" }}
        >
          <h2
            style={{ color: "var(--color-text-primary)", marginBottom: "16px" }}
          >
            Design System Features
          </h2>

          <div style={{ marginBottom: "24px" }}>
            <h3
              style={{
                color: "var(--color-text-primary)",
                marginBottom: "12px",
              }}
            >
              Design Tokens
            </h3>
            <div
              style={{
                padding: "16px",
                backgroundColor: "var(--color-surface-secondary)",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--color-border-secondary)",
              }}
            >
              <p
                style={{
                  color: "var(--color-text-secondary)",
                  margin: "0 0 12px 0",
                }}
              >
                ComponentDisplay uses design system tokens for consistent
                spacing, colors, typography, and other visual properties:
              </p>
              <ul
                style={{
                  color: "var(--color-text-secondary)",
                  margin: 0,
                  paddingLeft: "20px",
                }}
              >
                <li>
                  <strong>Colors:</strong> <code>--color-surface</code>,{" "}
                  <code>--color-text-primary</code>,{" "}
                  <code>--color-primary</code>
                </li>
                <li>
                  <strong>Spacing:</strong> <code>--spacing-md</code>,{" "}
                  <code>--spacing-lg</code>, <code>--spacing-xl</code>
                </li>
                <li>
                  <strong>Typography:</strong> <code>--font-size-lg</code>,{" "}
                  <code>--font-weight-bold</code>, <code>--line-height-lg</code>
                </li>
                <li>
                  <strong>Borders:</strong> <code>--radius-md</code>,{" "}
                  <code>--border-width-thin</code>
                </li>
                <li>
                  <strong>Shadows:</strong> <code>--shadow-normal</code>
                </li>
              </ul>
            </div>
          </div>

          <div style={{ marginBottom: "24px" }}>
            <h3
              style={{
                color: "var(--color-text-primary)",
                marginBottom: "12px",
              }}
            >
              SCSS Mixins
            </h3>
            <div
              style={{
                padding: "16px",
                backgroundColor: "var(--color-surface-secondary)",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--color-border-secondary)",
              }}
            >
              <p
                style={{
                  color: "var(--color-text-secondary)",
                  margin: "0 0 12px 0",
                }}
              >
                The component leverages SCSS mixins for common patterns:
              </p>
              <ul
                style={{
                  color: "var(--color-text-secondary)",
                  margin: 0,
                  paddingLeft: "20px",
                }}
              >
                <li>
                  <code>@include flex-center</code> - Centered flexbox layouts
                </li>
                <li>
                  <code>@include flex-column</code> - Vertical flexbox layouts
                </li>
                <li>
                  <code>@include interactive</code> - Hover and active states
                </li>
                <li>
                  <code>@include focus-ring</code> - Accessible focus indicators
                </li>
              </ul>
            </div>
          </div>

          <div style={{ marginBottom: "24px" }}>
            <h3
              style={{
                color: "var(--color-text-primary)",
                marginBottom: "12px",
              }}
            >
              Responsive Design
            </h3>
            <div
              style={{
                padding: "16px",
                backgroundColor: "var(--color-surface-secondary)",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--color-border-secondary)",
              }}
            >
              <p
                style={{
                  color: "var(--color-text-secondary)",
                  margin: "0 0 12px 0",
                }}
              >
                Mobile-first responsive design with breakpoints:
              </p>
              <ul
                style={{
                  color: "var(--color-text-secondary)",
                  margin: 0,
                  paddingLeft: "20px",
                }}
              >
                <li>
                  <strong>Mobile:</strong> Optimized for small screens with
                  adjusted spacing and typography
                </li>
                <li>
                  <strong>Tablet:</strong> Medium screen optimizations
                </li>
                <li>
                  <strong>Desktop:</strong> Full layout with optimal spacing and
                  typography
                </li>
              </ul>
            </div>
          </div>

          <div style={{ marginBottom: "24px" }}>
            <h3
              style={{
                color: "var(--color-text-primary)",
                marginBottom: "12px",
              }}
            >
              Accessibility
            </h3>
            <div
              style={{
                padding: "16px",
                backgroundColor: "var(--color-surface-secondary)",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--color-border-secondary)",
              }}
            >
              <p
                style={{
                  color: "var(--color-text-secondary)",
                  margin: "0 0 12px 0",
                }}
              >
                Built with accessibility in mind:
              </p>
              <ul
                style={{
                  color: "var(--color-text-secondary)",
                  margin: 0,
                  paddingLeft: "20px",
                }}
              >
                <li>
                  <strong>Semantic HTML structure</strong> (
                  <code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>,{" "}
                  <code>&lt;main&gt;</code>)
                </li>
                <li>ARIA labels for screen readers</li>
                <li>Keyboard navigation support</li>
                <li>Focus management with visible focus rings</li>
                <li>Proper color contrast ratios</li>
              </ul>
            </div>
          </div>
        </div>
      </>
    ),
  },
};

// New story demonstrating auto-generation from component
export const AutoGeneratedFromComponent: Story = {
  name: "Auto-Generated from Component",
  render: () => {
    // Import the Button component and its stories
    const { Button } = require("../Button/Button");
    const buttonStories = require("../Button/Button.stories");

    return (
      <ComponentDisplay
        component={Button}
        componentName="Button"
        stories={buttonStories}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "This ComponentDisplay automatically generates content from the Button component and its stories, including props table, examples, and usage instructions.",
      },
    },
  },
};

// Story demonstrating auto-generation with custom metadata
export const AutoGeneratedWithCustomMetadata: Story = {
  name: "Auto-Generated with Custom Metadata",
  render: () => {
    const { Button } = require("../Button/Button");
    const buttonStories = require("../Button/Button.stories");

    return (
      <ComponentDisplay
        component={Button}
        componentName="Custom Button"
        title="Enhanced Button Component"
        description="A fully featured button component with auto-generated documentation from its stories and props."
        docsUrl="https://github.com/kazuri1/Pulseui/edit/main/docs/components/Button.md"
        stories={buttonStories}
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story:
          "Auto-generated ComponentDisplay with custom title, description, and docs URL, while still using the component's stories for content generation.",
      },
    },
  },
};
