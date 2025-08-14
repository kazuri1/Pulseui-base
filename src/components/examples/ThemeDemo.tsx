import React from "react";
import { Card } from "../atoms/Card";
import { Button } from "../atoms/Button";
import { Input } from "../atoms/Input";
import { Badge } from "../atoms/Badge";
import { ThemeToggle } from "../atoms/ThemeToggle";
import { useTheme } from "../../contexts/ThemeContext";
import { Grid } from "../layouts/Grid";

export const ThemeDemo: React.FC = () => {
  const { themeMode, themeName, isDark, isLight } = useTheme();

  return (
    <div style={{ padding: "2rem", maxWidth: "1200px", margin: "0 auto" }}>
      {/* Header with theme info */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "2rem",
          padding: "1rem",
          backgroundColor: "var(--color-surface-100)",
          borderRadius: "var(--radius-lg)",
          border: "1px solid var(--color-border-light)",
        }}
      >
        <div>
          <h1
            style={{
              margin: 0,
              color: "var(--color-text-primary)",
              fontSize: "var(--typography-h1-fontSize)",
            }}
          >
            Theme Demo
          </h1>
          <p
            style={{
              margin: "0.5rem 0 0 0",
              color: "var(--color-text-secondary)",
              fontSize: "var(--typography-bodySmall-fontSize)",
            }}
          >
            Current Theme: <strong>{themeName}</strong> ({themeMode})
          </p>
        </div>

        <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
          <ThemeToggle showLabel={true} size="lg" variant="outline" />

          <Badge
            variant={isDark ? "primary" : "secondary"}
            sx={{ fontSize: "md" }}
          >
            {isDark ? "🌙 Dark" : "☀️ Light"}
          </Badge>
        </div>
      </div>

      {/* Theme switching controls */}
      <Card
        title="Theme Controls"
        sx={{
          marginBottom: "2rem",
          backgroundColor: "var(--color-surface-50)",
          border: "2px solid var(--color-primary-3)",
        }}
      >
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <Button
            variant={themeName === "default-light" ? "primary" : "outline"}
            onClick={() => {}} // Will be handled by ThemeToggle
            sx={{ minWidth: "120px" }}
          >
            Light Theme
          </Button>

          <Button
            variant={themeName === "default-dark" ? "primary" : "outline"}
            onClick={() => {}} // Will be handled by ThemeToggle
            sx={{ minWidth: "120px" }}
          >
            Dark Theme
          </Button>

          <ThemeToggle showLabel={true} variant="default" size="md" />
        </div>

        <p
          style={{
            marginTop: "1rem",
            color: "var(--color-text-secondary)",
            fontSize: "var(--typography-bodySmall-fontSize)",
          }}
        >
          Click the theme toggle button above to switch between light and dark
          themes.
        </p>
      </Card>

      {/* Component showcase */}
      <Grid cols={2} gap={2}>
        {/* Form elements */}
        <Card
          title="Form Elements"
          sx={{
            backgroundColor: "var(--color-surface-50)",
            border: "1px solid var(--color-border-medium)",
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <Input
              placeholder="Enter your name..."
              sx={{
                backgroundColor: "var(--color-background-primary)",
                border: "1px solid var(--color-border-medium)",
              }}
            />

            <Input
              placeholder="Enter your email..."
              sx={{
                backgroundColor: "var(--color-background-primary)",
                border: "1px solid var(--color-border-medium)",
              }}
            />

            <Button
              variant="primary"
              sx={{
                backgroundColor: "var(--color-primary-6)",
                color: "var(--color-text-inverse)",
              }}
            >
              Submit Form
            </Button>
          </div>
        </Card>

        {/* Status indicators */}
        <Card
          title="Status Indicators"
          sx={{
            backgroundColor: "var(--color-surface-50)",
            border: "1px solid var(--color-border-medium)",
          }}
        >
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="error">Error</Badge>
            <Badge variant="info">Info</Badge>
            <Badge variant="primary">Primary</Badge>
          </div>

          <div style={{ marginTop: "1rem" }}>
            <p
              style={{
                color: "var(--color-text-primary)",
                marginBottom: "0.5rem",
              }}
            >
              Text colors automatically adapt to the theme:
            </p>
            <p style={{ color: "var(--color-text-secondary)" }}>
              Secondary text for less important information
            </p>
            <p style={{ color: "var(--color-text-disabled)" }}>
              Disabled text for inactive elements
            </p>
          </div>
        </Card>

        {/* Color palette */}
        <Card
          title="Color Palette"
          sx={{
            backgroundColor: "var(--color-surface-50)",
            border: "1px solid var(--color-border-medium)",
          }}
        >
          <div
            style={{
              display: "grid",
              gap: "0.5rem",
              gridTemplateColumns: "repeat(5, 1fr)",
            }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((shade) => (
              <div
                key={shade}
                style={{
                  height: "40px",
                  backgroundColor: `var(--color-primary-${shade})`,
                  borderRadius: "var(--radius-sm)",
                  border: "1px solid var(--color-border-light)",
                }}
                title={`Primary ${shade}`}
              />
            ))}
          </div>

          <p
            style={{
              marginTop: "1rem",
              color: "var(--color-text-secondary)",
              fontSize: "var(--typography-bodySmall-fontSize)",
            }}
          >
            Primary color shades automatically adjust for each theme
          </p>
        </Card>

        {/* Surface colors */}
        <Card
          title="Surface Colors"
          sx={{
            backgroundColor: "var(--color-surface-50)",
            border: "1px solid var(--color-border-medium)",
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
          >
            {[50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map((shade) => (
              <div
                key={shade}
                style={{
                  height: "30px",
                  backgroundColor: `var(--color-surface-${shade})`,
                  borderRadius: "var(--radius-sm)",
                  border: "1px solid var(--color-border-light)",
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: "0.5rem",
                  color:
                    shade <= 400
                      ? "var(--color-text-primary)"
                      : "var(--color-text-inverse)",
                }}
              >
                Surface {shade}
              </div>
            ))}
          </div>
        </Card>
      </Grid>

      {/* Theme information */}
      <Card
        title="Theme Information"
        sx={{
          marginTop: "2rem",
          backgroundColor: "var(--color-surface-100)",
          border: "2px solid var(--color-info-3)",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1rem",
          }}
        >
          <div>
            <h4
              style={{
                color: "var(--color-text-primary)",
                marginBottom: "0.5rem",
              }}
            >
              Current Theme Details
            </h4>
            <ul
              style={{
                color: "var(--color-text-secondary)",
                fontSize: "var(--typography-bodySmall-fontSize)",
                margin: 0,
                paddingLeft: "1.5rem",
              }}
            >
              <li>Theme Name: {themeName}</li>
              <li>Theme Mode: {themeMode}</li>
              <li>Is Dark: {isDark ? "Yes" : "No"}</li>
              <li>Is Light: {isLight ? "Yes" : "No"}</li>
            </ul>
          </div>

          <div>
            <h4
              style={{
                color: "var(--color-text-primary)",
                marginBottom: "0.5rem",
              }}
            >
              How It Works
            </h4>
            <ul
              style={{
                color: "var(--color-text-secondary)",
                fontSize: "var(--typography-bodySmall-fontSize)",
                margin: 0,
                paddingLeft: "1.5rem",
              }}
            >
              <li>CSS custom properties automatically update</li>
              <li>All components use theme-aware colors</li>
              <li>Theme preference is saved to localStorage</li>
              <li>No component re-renders required</li>
            </ul>
          </div>

          <div>
            <h4
              style={{
                color: "var(--color-text-primary)",
                marginBottom: "0.5rem",
              }}
            >
              Future Features
            </h4>
            <ul
              style={{
                color: "var(--color-text-secondary)",
                fontSize: "var(--typography-bodySmall-fontSize)",
                margin: 0,
                paddingLeft: "1.5rem",
              }}
            >
              <li>Custom brand themes</li>
              <li>System preference detection</li>
              <li>Theme animation transitions</li>
              <li>More theme variants</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
};

