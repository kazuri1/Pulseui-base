import React from "react";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Design System/Design Tokens",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "PulseUI Design System Foundation - Comprehensive design tokens that power all components with consistency and scalability.",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Color Token Showcase
export const ColorTokens: Story = {
  render: () => (
    <div style={{ padding: "2rem", fontFamily: "system-ui, sans-serif" }}>
      <h1
        style={{
          fontSize: "2.5rem",
          marginBottom: "2rem",
          color: "var(--color-text-primary)",
        }}
      >
        Design Tokens Foundation
      </h1>

      {/* Surface Color System */}
      <section style={{ marginBottom: "3rem" }}>
        <h2
          style={{
            fontSize: "1.8rem",
            marginBottom: "1.5rem",
            color: "var(--color-text-primary)",
          }}
        >
          Surface Color System
        </h2>
        <p
          style={{
            fontSize: "1.1rem",
            marginBottom: "1.5rem",
            color: "var(--color-text-secondary)",
          }}
        >
          Our surface-based color system provides 6 levels of elevation with
          semantic relationships.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1rem",
          }}
        >
          {[0, 1, 2, 3, 4, 5].map((level) => (
            <div
              key={level}
              style={{
                backgroundColor: `var(--color-surface-${level})`,
                border: "1px solid var(--color-border-secondary)",
                borderRadius: "8px",
                padding: "1.5rem",
                textAlign: "center",
                minHeight: "120px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  color: "var(--color-text-primary)",
                }}
              >
                {level}
              </div>
              <div
                style={{
                  fontSize: "0.9rem",
                  color: "var(--color-text-secondary)",
                  marginTop: "0.5rem",
                }}
              >
                Surface {level}
              </div>
              <code
                style={{
                  fontSize: "0.8rem",
                  color: "var(--color-text-secondary)",
                  marginTop: "0.5rem",
                }}
              >
                --color-surface-{level}
              </code>
            </div>
          ))}
        </div>
      </section>

      {/* Semantic Colors */}
      <section style={{ marginBottom: "3rem" }}>
        <h2
          style={{
            fontSize: "1.8rem",
            marginBottom: "1.5rem",
            color: "var(--color-text-primary)",
          }}
        >
          Semantic Color System
        </h2>
        <p
          style={{
            fontSize: "1.1rem",
            marginBottom: "1.5rem",
            color: "var(--color-text-secondary)",
          }}
        >
          Purpose-driven colors that communicate meaning and state across the
          interface.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "1rem",
          }}
        >
          {[
            {
              name: "Primary",
              token: "primary",
              description: "Main brand color",
            },
            {
              name: "Success",
              token: "success",
              description: "Positive actions",
            },
            {
              name: "Warning",
              token: "warning",
              description: "Caution states",
            },
            { name: "Error", token: "error", description: "Error states" },
            { name: "Info", token: "info", description: "Information" },
            {
              name: "Secondary",
              token: "secondary",
              description: "Secondary actions",
            },
          ].map((color) => (
            <div
              key={color.token}
              style={{
                backgroundColor: `var(--color-${color.token})`,
                color: "white",
                borderRadius: "8px",
                padding: "1.5rem",
                textAlign: "center",
                minHeight: "100px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  marginBottom: "0.5rem",
                }}
              >
                {color.name}
              </div>
              <div
                style={{
                  fontSize: "0.8rem",
                  opacity: 0.9,
                  marginBottom: "0.5rem",
                }}
              >
                {color.description}
              </div>
              <code style={{ fontSize: "0.7rem", opacity: 0.8 }}>
                --color-{color.token}
              </code>
            </div>
          ))}
        </div>
      </section>

      {/* Spacing Scale */}
      <section style={{ marginBottom: "3rem" }}>
        <h2
          style={{
            fontSize: "1.8rem",
            marginBottom: "1.5rem",
            color: "var(--color-text-primary)",
          }}
        >
          Spacing Scale
        </h2>
        <p
          style={{
            fontSize: "1.1rem",
            marginBottom: "1.5rem",
            color: "var(--color-text-secondary)",
          }}
        >
          Consistent spacing scale from 4px to 48px for predictable layouts.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {[
            { name: "xs", value: "4px", description: "Tight spacing" },
            { name: "sm", value: "8px", description: "Small spacing" },
            { name: "md", value: "16px", description: "Medium spacing" },
            { name: "lg", value: "24px", description: "Large spacing" },
            { name: "xl", value: "32px", description: "Extra large spacing" },
            { name: "xxl", value: "48px", description: "Maximum spacing" },
          ].map((spacing) => (
            <div
              key={spacing.name}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                padding: "1rem",
                backgroundColor: "var(--color-surface-1)",
                borderRadius: "8px",
              }}
            >
              <div
                style={{
                  width: spacing.value,
                  height: spacing.value,
                  backgroundColor: "var(--color-primary)",
                  borderRadius: "4px",
                  flexShrink: 0,
                }}
              />
              <div style={{ flex: 1 }}>
                <div
                  style={{
                    fontWeight: "bold",
                    color: "var(--color-text-primary)",
                  }}
                >
                  {spacing.name.toUpperCase()}
                </div>
                <div
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--color-text-secondary)",
                  }}
                >
                  {spacing.description}
                </div>
              </div>
              <div
                style={{
                  fontFamily: "monospace",
                  color: "var(--color-text-secondary)",
                }}
              >
                {spacing.value}
              </div>
              <code
                style={{
                  fontSize: "0.8rem",
                  color: "var(--color-text-secondary)",
                }}
              >
                --spacing-{spacing.name}
              </code>
            </div>
          ))}
        </div>
      </section>

      {/* Typography Scale */}
      <section style={{ marginBottom: "3rem" }}>
        <h2
          style={{
            fontSize: "1.8rem",
            marginBottom: "1.5rem",
            color: "var(--color-text-primary)",
          }}
        >
          Typography Scale
        </h2>
        <p
          style={{
            fontSize: "1.1rem",
            marginBottom: "1.5rem",
            color: "var(--color-text-secondary)",
          }}
        >
          Hierarchical typography system with consistent sizing and spacing.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {[
            { name: "h1", size: "3rem", description: "Page titles" },
            { name: "h2", size: "2.25rem", description: "Section headers" },
            { name: "h3", size: "1.875rem", description: "Subsection headers" },
            { name: "h4", size: "1.5rem", description: "Card titles" },
            {
              name: "text-lg",
              size: "1.125rem",
              description: "Large body text",
            },
            { name: "text-md", size: "1rem", description: "Body text" },
            { name: "text-sm", size: "0.875rem", description: "Small text" },
            { name: "text-xs", size: "0.75rem", description: "Caption text" },
          ].map((type) => (
            <div
              key={type.name}
              style={{
                padding: "1rem",
                backgroundColor: "var(--color-surface-1)",
                borderRadius: "8px",
              }}
            >
              <div
                style={{
                  fontSize: type.size,
                  fontWeight: type.name.startsWith("h") ? "bold" : "normal",
                  color: "var(--color-text-primary)",
                  marginBottom: "0.5rem",
                }}
              >
                {type.name === "h1" && "Heading 1"}
                {type.name === "h2" && "Heading 2"}
                {type.name === "h3" && "Heading 3"}
                {type.name === "h4" && "Heading 4"}
                {type.name === "text-lg" && "Large body text example"}
                {type.name === "text-md" && "Body text example"}
                {type.name === "text-sm" && "Small text example"}
                {type.name === "text-xs" && "Caption text example"}
              </div>
              <div
                style={{
                  fontSize: "0.9rem",
                  color: "var(--color-text-secondary)",
                }}
              >
                {type.description}
              </div>
              <code
                style={{
                  fontSize: "0.8rem",
                  color: "var(--color-text-secondary)",
                  marginTop: "0.5rem",
                }}
              >
                typography: "{type.name}"
              </code>
            </div>
          ))}
        </div>
      </section>

      {/* Border Radius Scale */}
      <section style={{ marginBottom: "3rem" }}>
        <h2
          style={{
            fontSize: "1.8rem",
            marginBottom: "1.5rem",
            color: "var(--color-text-primary)",
          }}
        >
          Border Radius Scale
        </h2>
        <p
          style={{
            fontSize: "1.1rem",
            marginBottom: "1.5rem",
            color: "var(--color-text-secondary)",
          }}
        >
          Consistent corner rounding for different component types and
          elevations.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "1rem",
          }}
        >
          {[
            { name: "xs", value: "2px", description: "Subtle rounding" },
            { name: "sm", value: "4px", description: "Light rounding" },
            { name: "md", value: "6px", description: "Medium rounding" },
            { name: "lg", value: "8px", description: "Standard rounding" },
            { name: "xl", value: "12px", description: "Heavy rounding" },
            { name: "full", value: "9999px", description: "Pill shapes" },
          ].map((radius) => (
            <div
              key={radius.name}
              style={{
                backgroundColor: "var(--color-surface-2)",
                borderRadius: radius.value,
                padding: "1.5rem",
                textAlign: "center",
                minHeight: "100px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                border: "2px solid var(--color-border-primary)",
              }}
            >
              <div
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  color: "var(--color-text-primary)",
                }}
              >
                {radius.name.toUpperCase()}
              </div>
              <div
                style={{
                  fontSize: "0.9rem",
                  color: "var(--color-text-secondary)",
                  marginBottom: "0.5rem",
                }}
              >
                {radius.description}
              </div>
              <code
                style={{
                  fontSize: "0.8rem",
                  color: "var(--color-text-secondary)",
                }}
              >
                --radius-{radius.name}
              </code>
            </div>
          ))}
        </div>
      </section>

      {/* Shadow Scale */}
      <section style={{ marginBottom: "3rem" }}>
        <h2
          style={{
            fontSize: "1.8rem",
            marginBottom: "1.5rem",
            color: "var(--color-text-primary)",
          }}
        >
          Shadow Scale
        </h2>
        <p
          style={{
            fontSize: "1.1rem",
            marginBottom: "1.5rem",
            color: "var(--color-text-secondary)",
          }}
        >
          Elevation system using shadows to create depth and hierarchy.
        </p>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "1rem",
          }}
        >
          {[
            { name: "xs", description: "Subtle elevation" },
            { name: "sm", description: "Light elevation" },
            { name: "md", description: "Medium elevation" },
            { name: "lg", description: "Heavy elevation" },
            { name: "xl", description: "Maximum elevation" },
          ].map((shadow) => (
            <div
              key={shadow.name}
              style={{
                backgroundColor: "var(--color-surface-0)",
                borderRadius: "8px",
                padding: "2rem",
                textAlign: "center",
                minHeight: "120px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                boxShadow: `var(--shadow-${shadow.name})`,
                border: "1px solid var(--color-border-secondary)",
              }}
            >
              <div
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  color: "var(--color-text-primary)",
                }}
              >
                {shadow.name.toUpperCase()}
              </div>
              <div
                style={{
                  fontSize: "0.9rem",
                  color: "var(--color-text-secondary)",
                  marginBottom: "0.5rem",
                }}
              >
                {shadow.description}
              </div>
              <code
                style={{
                  fontSize: "0.8rem",
                  color: "var(--color-text-secondary)",
                }}
              >
                --shadow-{shadow.name}
              </code>
            </div>
          ))}
        </div>
      </section>

      {/* Design System Benefits */}
      <section
        style={{
          backgroundColor: "var(--color-surface-1)",
          padding: "2rem",
          borderRadius: "12px",
          border: "1px solid var(--color-border-primary)",
        }}
      >
        <h2
          style={{
            fontSize: "1.8rem",
            marginBottom: "1.5rem",
            color: "var(--color-text-primary)",
          }}
        >
          Why This Design System?
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "1.5rem",
          }}
        >
          <div>
            <h3
              style={{
                fontSize: "1.3rem",
                marginBottom: "1rem",
                color: "var(--color-text-primary)",
              }}
            >
              🎯 Consistency
            </h3>
            <p
              style={{
                color: "var(--color-text-secondary)",
                lineHeight: "1.6",
              }}
            >
              Every component uses the same design tokens, ensuring visual
              consistency across your entire application.
            </p>
          </div>
          <div>
            <h3
              style={{
                fontSize: "1.3rem",
                marginBottom: "1rem",
                color: "var(--color-text-primary)",
              }}
            >
              🚀 Scalability
            </h3>
            <p
              style={{
                color: "var(--color-text-secondary)",
                lineHeight: "1.6",
              }}
            >
              Easy to add new components and maintain existing ones with a
              systematic approach to design.
            </p>
          </div>
          <div>
            <h3
              style={{
                fontSize: "1.3rem",
                marginBottom: "1rem",
                color: "var(--color-text-primary)",
              }}
            >
              🎨 Flexibility
            </h3>
            <p
              style={{
                color: "var(--color-text-secondary)",
                lineHeight: "1.6",
              }}
            >
              Customize themes and create new variants while maintaining design
              system integrity.
            </p>
          </div>
          <div>
            <h3
              style={{
                fontSize: "1.3rem",
                marginBottom: "1rem",
                color: "var(--color-text-primary)",
              }}
            >
              ⚡ Performance
            </h3>
            <p
              style={{
                color: "var(--color-text-secondary)",
                lineHeight: "1.6",
              }}
            >
              CSS custom properties provide instant theme switching with zero
              JavaScript overhead.
            </p>
          </div>
        </div>
      </section>
    </div>
  ),
};

// Token Usage Examples
export const TokenUsageExamples: Story = {
  render: () => (
    <div style={{ padding: "2rem", fontFamily: "system-ui, sans-serif" }}>
      <h1
        style={{
          fontSize: "2.5rem",
          marginBottom: "2rem",
          color: "var(--color-text-primary)",
        }}
      >
        Design Token Usage Examples
      </h1>

      <section style={{ marginBottom: "3rem" }}>
        <h2
          style={{
            fontSize: "1.8rem",
            marginBottom: "1.5rem",
            color: "var(--color-text-primary)",
          }}
        >
          SX Props Integration
        </h2>
        <p
          style={{
            fontSize: "1.1rem",
            marginBottom: "1.5rem",
            color: "var(--color-text-secondary)",
          }}
        >
          Use design tokens directly in your components with the SX props
          system.
        </p>

        <div
          style={{
            backgroundColor: "var(--color-surface-1)",
            padding: "2rem",
            borderRadius: "8px",
            border: "1px solid var(--color-border-secondary)",
          }}
        >
          <h3
            style={{
              fontSize: "1.3rem",
              marginBottom: "1rem",
              color: "var(--color-text-primary)",
            }}
          >
            Example Component with SX Props
          </h3>
          <pre
            style={{
              backgroundColor: "var(--color-surface-2)",
              padding: "1rem",
              borderRadius: "6px",
              overflow: "auto",
              fontSize: "0.9rem",
              color: "var(--color-text-primary)",
            }}
          >
            {`<Button
  sx={{
    // Spacing tokens
    m: "lg",           // margin: var(--spacing-lg) = 24px
    p: "xl",           // padding: var(--spacing-xl) = 32px
    
    // Color tokens
    color: "primary",  // color: var(--color-primary)
    backgroundColor: "surface-2", // background: var(--color-surface-2)
    
    // Typography tokens
    typography: "h3",  // fontSize, lineHeight, fontWeight from h3
    
    // Border tokens
    borderRadius: "lg", // border-radius: var(--radius-lg) = 8px
    borderColor: "border-primary", // border-color: var(--color-border-primary)
    
    // Shadow tokens
    boxShadow: "md",   // box-shadow: var(--shadow-md)
  }}
>
  Styled with Design Tokens
</Button>`}
          </pre>
        </div>
      </section>

      <section style={{ marginBottom: "3rem" }}>
        <h2
          style={{
            fontSize: "1.8rem",
            marginBottom: "1.5rem",
            color: "var(--color-text-primary)",
          }}
        >
          CSS Custom Properties
        </h2>
        <p
          style={{
            fontSize: "1.1rem",
            marginBottom: "1.5rem",
            color: "var(--color-text-secondary)",
          }}
        >
          Access design tokens directly in your CSS using CSS custom properties.
        </p>

        <div
          style={{
            backgroundColor: "var(--color-surface-1)",
            padding: "2rem",
            borderRadius: "8px",
            border: "1px solid var(--color-border-secondary)",
          }}
        >
          <h3
            style={{
              fontSize: "1.3rem",
              marginBottom: "1rem",
              color: "var(--color-text-primary)",
            }}
          >
            CSS Usage Examples
          </h3>
          <pre
            style={{
              backgroundColor: "var(--color-surface-2)",
              padding: "1rem",
              borderRadius: "6px",
              overflow: "auto",
              fontSize: "0.9rem",
              color: "var(--color-text-primary)",
            }}
          >
            {`.custom-component {
  /* Spacing */
  margin: var(--spacing-lg);
  padding: var(--spacing-xl);
  
  /* Colors */
  background-color: var(--color-surface-2);
  color: var(--color-text-primary);
  border: 1px solid var(--color-border-primary);
  
  /* Typography */
  font-size: var(--font-size-lg);
  line-height: var(--line-height-lg);
  font-weight: var(--font-weight-semibold);
  
  /* Borders */
  border-radius: var(--radius-md);
  
  /* Shadows */
  box-shadow: var(--shadow-sm);
  
  /* Transitions */
  transition: var(--motion-transition-normal);
}`}
          </pre>
        </div>
      </section>
    </div>
  ),
};
