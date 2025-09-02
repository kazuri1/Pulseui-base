import React, { useState } from "react";
import { Button } from "../atoms/Button/Button";
import { Card } from "../atoms/Card/Card";
import { Badge } from "../atoms/Badge/Badge";
import { Text } from "../atoms/Text/Text";
import { Stack } from "../layouts/Stack/Stack";
import { Grid } from "../layouts/Grid/Grid";
import { Container } from "../layouts/Container/Container";
import type { SxProps } from "../../styles/stylesApi";

export const SxDemo: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState<string>("spacing");

  const spacingDemo: SxProps = {
    m: "lg",
    p: "xl",
    backgroundColor: "surface-1",
    borderRadius: "lg",
  };

  const colorDemo: SxProps = {
    backgroundColor: "primary",
    color: "white",
    p: "lg",
    borderRadius: "md",
    textAlign: "center",
  };

  const typographyDemo: SxProps = {
    typography: "h3",
    color: "success",
    textAlign: "center",
    m: "lg",
  };

  const layoutDemo: SxProps = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "md",
    p: "xl",
    backgroundColor: "surface-2",
    borderRadius: "lg",
  };

  const responsiveDemo: SxProps = {
    width: "full",
    maxWidth: "600px",
    p: "lg",
    backgroundColor: "surface-1",
    borderRadius: "md",
    boxShadow: "md",
  };

  const demos = [
    { id: "spacing", name: "Spacing & Layout", props: spacingDemo },
    { id: "colors", name: "Colors & Backgrounds", props: colorDemo },
    { id: "typography", name: "Typography", props: typographyDemo },
    { id: "layout", name: "Flexbox Layout", props: layoutDemo },
    { id: "responsive", name: "Responsive Design", props: responsiveDemo },
  ];

  return (
    <Container>
      <Stack gap="xl">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <Text as="h1" variant="xxl" sx={{ color: "primary", mb: "md" }}>
            SX Props System Demo
          </Text>
          <Text as="p" variant="md" sx={{ color: "text", maxWidth: "600px" }}>
            Explore the powerful SX props system that allows you to customize
            any PulseUI component with inline styling using design tokens and
            responsive values.
          </Text>
        </div>

        {/* Navigation */}
        <Card sx={{ p: "lg" }}>
          <Stack gap="md">
            <Text as="h3" variant="lg" sx={{ mb: "md" }}>
              Demo Categories
            </Text>
            <Grid columns={5} gutter="md">
              {demos.map((demo) => (
                <Button
                  key={demo.id}
                  variant={activeDemo === demo.id ? "filled" : "subtle"}
                  size="sm"
                  onClick={() => setActiveDemo(demo.id)}
                  sx={{
                    width: "full",
                    textTransform: "none",
                  }}
                >
                  {demo.name}
                </Button>
              ))}
            </Grid>
          </Stack>
        </Card>

        {/* Active Demo Display */}
        <Card sx={{ p: "xl" }}>
          <Stack gap="lg">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text as="h2" variant="xl" sx={{ color: "primary" }}>
                {demos.find((d) => d.id === activeDemo)?.name}
              </Text>
              <Badge variant="filled" size="lg">
                Active
              </Badge>
            </div>

            {/* Demo Content */}
            <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
              {/* Live Preview */}
              <div style={{ flex: "1", minWidth: "300px" }}>
                <Text as="h4" variant="md" sx={{ mb: "md", color: "text" }}>
                  Live Preview
                </Text>
                <div
                  style={{
                    border: "2px dashed var(--color-border-secondary)",
                    borderRadius: "8px",
                    padding: "1rem",
                    minHeight: "200px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      ...demos.find((d) => d.id === activeDemo)?.props,
                      padding: "1rem",
                      border: "1px solid var(--color-border-primary)",
                    }}
                  >
                    <Text variant="md" sx={{ textAlign: "center" }}>
                      This element uses the SX props:
                      <br />
                      <code style={{ fontSize: "0.9em", opacity: 0.8 }}>
                        {JSON.stringify(
                          demos.find((d) => d.id === activeDemo)?.props,
                          null,
                          2
                        )}
                      </code>
                    </Text>
                  </div>
                </div>
              </div>

              {/* Code Example */}
              <div style={{ flex: "1", minWidth: "300px" }}>
                <Text as="h4" variant="md" sx={{ mb: "md", color: "text" }}>
                  SX Props Code
                </Text>
                <pre
                  style={{
                    backgroundColor: "var(--color-surface-2)",
                    padding: "1rem",
                    borderRadius: "8px",
                    fontSize: "0.9em",
                    overflow: "auto",
                    border: "1px solid var(--color-border-secondary)",
                  }}
                >
                  <code>
                    {`const sxProps: SxProps = ${JSON.stringify(
                      demos.find((d) => d.id === activeDemo)?.props,
                      null,
                      2
                    )};

<Component sx={sxProps} />`}
                  </code>
                </pre>
              </div>
            </div>
          </Stack>
        </Card>

        {/* Component Examples */}
        <Card sx={{ p: "xl" }}>
          <Stack gap="lg">
            <Text as="h3" variant="lg" sx={{ mb: "md", color: "primary" }}>
              Component Examples with SX Props
            </Text>

            <Grid columns={2} gutter="lg">
              {/* Button Examples */}
              <Stack gap="md">
                <Text as="h4" variant="md" sx={{ color: "text" }}>
                  Buttons with SX
                </Text>
                <Stack gap="sm">
                  <Button
                    variant="filled"
                    sx={{
                      backgroundColor: "success",
                      borderRadius: "full",
                      px: "xl",
                      py: "lg",
                      fontSize: "lg",
                      fontWeight: "bold",
                    }}
                  >
                    Custom Success Button
                  </Button>
                  <Button
                    variant="subtle"
                    sx={{
                      border: "2px solid",
                      borderColor: "warning",
                      color: "warning",
                      borderRadius: "md",
                      px: "lg",
                      py: "md",
                    }}
                  >
                    Custom Warning Button
                  </Button>
                </Stack>
              </Stack>

              {/* Card Examples */}
              <Stack gap="md">
                <Text as="h4" variant="md" sx={{ color: "text" }}>
                  Cards with SX
                </Text>
                <Card
                  sx={{
                    backgroundColor: "surface-3",
                    border: "3px solid",
                    borderColor: "info",
                    borderRadius: "xl",
                    p: "lg",
                    boxShadow: "lg",
                  }}
                >
                  <Text
                    variant="md"
                    sx={{ textAlign: "center", color: "info" }}
                  >
                    Custom styled card with enhanced borders and shadows
                  </Text>
                </Card>
              </Stack>
            </Grid>
          </Stack>
        </Card>

        {/* Responsive Design Demo */}
        <Card sx={{ p: "xl" }}>
          <Stack gap="lg">
            <Text as="h3" variant="lg" sx={{ mb: "md", color: "primary" }}>
              Responsive SX Props
            </Text>
            <Text variant="md" sx={{ color: "text", mb: "lg" }}>
              The SX system supports responsive design through CSS media queries
              and dynamic styling.
            </Text>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "1rem",
              }}
            >
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: `var(--color-surface-${i})`,
                    padding: "1rem",
                    borderRadius: "8px",
                    textAlign: "center",
                    border: "1px solid var(--color-border-secondary)",
                  }}
                >
                  <Text variant="md" sx={{ fontWeight: "semibold" }}>
                    Responsive Item {i}
                  </Text>
                  <Text variant="sm" sx={{ color: "text" }}>
                    Adapts to screen size
                  </Text>
                </div>
              ))}
            </div>
          </Stack>
        </Card>

        {/* Usage Guidelines */}
        <Card sx={{ p: "xl", backgroundColor: "surface-1" }}>
          <Stack gap="lg">
            <Text as="h3" variant="lg" sx={{ mb: "md", color: "primary" }}>
              SX Props Usage Guidelines
            </Text>

            <Grid columns={2} gutter="lg">
              <Stack gap="md">
                <Text as="h4" variant="md" sx={{ color: "text" }}>
                   Best Practices
                </Text>
                <ul
                  style={{
                    paddingLeft: "1.5rem",
                    color: "var(--color-text-secondary)",
                  }}
                >
                  <li>Use design tokens for consistency</li>
                  <li>Prefer semantic color names</li>
                  <li>Leverage spacing scale (xs, sm, md, lg, xl, xxl)</li>
                  <li>Use typography variants for text styling</li>
                  <li>Combine with existing component variants</li>
                </ul>
              </Stack>

              <Stack gap="md">
                <Text as="h4" variant="md" sx={{ color: "text" }}>
                  ⚠️ Considerations
                </Text>
                <ul
                  style={{
                    paddingLeft: "1.5rem",
                    color: "var(--color-text-secondary)",
                  }}
                >
                  <li>Avoid overriding core component behavior</li>
                  <li>Use sparingly for one-off customizations</li>
                  <li>Consider theme consistency</li>
                  <li>Test responsive behavior</li>
                  <li>Document complex customizations</li>
                </ul>
              </Stack>
            </Grid>
          </Stack>
        </Card>
      </Stack>
    </Container>
  );
};
