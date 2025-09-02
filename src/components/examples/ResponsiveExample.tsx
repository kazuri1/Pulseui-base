import React from "react";
import { Button } from "../atoms/Button";
import { Container } from "../layouts/Container";
import { Stack } from "../layouts/Stack";
import { Group } from "../layouts/Group";
import { Grid } from "../layouts/Grid";
import {
  useBreakpoint,
  useResponsiveStyles,
  useResponsiveValue,
} from "../../hooks/useBreakpoint";
import { responsive } from "../../utils/responsiveStyles";

export const ResponsiveExample: React.FC = () => {
  const { breakpoint, isMobile, isTablet, isDesktop } = useBreakpoint();
  const responsiveStyles = useResponsiveStyles();

  // Example of responsive values
  const buttonSize = useResponsiveValue(
    {
      xs: "lg",
      sm: "md",
      md: "sm",
      lg: "sm",
      xl: "xs",
    },
    "md"
  );

  const containerSize = useResponsiveValue(
    {
      xs: "fluid",
      sm: "xs",
      md: "sm",
      lg: "md",
      xl: "lg",
    },
    "md"
  );

  return (
    <Container size={containerSize === "fluid" ? undefined : containerSize} fluid={containerSize === "fluid"}>
      <Stack gap="lg">
        <h2>Responsive Design Example</h2>

        {/* Current breakpoint info */}
        <div
          style={{
            padding: "16px",
            backgroundColor: "var(--color-gray-1)",
            borderRadius: "8px",
          }}
        >
          <h3>Current Breakpoint: {breakpoint}</h3>
          <p>Mobile: {isMobile ? "Yes" : "No"}</p>
          <p>Tablet: {isTablet ? "Yes" : "No"}</p>
          <p>Desktop: {isDesktop ? "Yes" : "No"}</p>
        </div>

        {/* Responsive button sizing */}
        <Group>
          <Button size={buttonSize}>
            Responsive Button ({buttonSize})
          </Button>
          <Button size={isMobile ? "lg" : "md"}>Conditional Button</Button>
        </Group>

        {/* Responsive grid */}
        <Grid>
          <Grid.Col span={isMobile ? 12 : 6}>
            <div
              style={{
                padding: "16px",
                backgroundColor: "var(--color-blue-1)",
                borderRadius: "8px",
              }}
            >
              <h4>Grid Column 1</h4>
              <p>This column adapts to screen size</p>
            </div>
          </Grid.Col>
          <Grid.Col span={isMobile ? 12 : 6}>
            <div
              style={{
                padding: "16px",
                backgroundColor: "var(--color-green-1)",
                borderRadius: "8px",
              }}
            >
              <h4>Grid Column 2</h4>
              <p>This column also adapts</p>
            </div>
          </Grid.Col>
        </Grid>

        {/* Responsive spacing example */}
        <div
          style={{
            padding: `${responsiveStyles.spacing.md}px`,
            backgroundColor: "var(--color-yellow-1)",
            borderRadius: "8px",
          }}
        >
          <h4>Responsive Spacing</h4>
          <p>This container uses responsive spacing tokens</p>
        </div>

        {/* Responsive sizing example */}
        <div
          style={{
            height: `${responsiveStyles.sizing.button.height}px`,
            padding: responsiveStyles.sizing.button.padding,
            fontSize: `${responsiveStyles.sizing.button.fontSize}px`,
            backgroundColor: "var(--color-purple-1)",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p>Touch-friendly sizing on mobile</p>
        </div>

        {/* Responsive layout example */}
        <div
          style={{
            padding: responsiveStyles.layout.container.padding,
            maxWidth: responsiveStyles.layout.container.maxWidth,
            backgroundColor: "var(--color-red-1)",
            borderRadius: "8px",
          }}
        >
          <h4>Responsive Layout</h4>
          <p>Container adapts to screen size</p>
        </div>

        {/* CSS-in-JS responsive example */}
        <div
          style={responsive.styles({
            xs: {
              padding: "8px",
              fontSize: "14px",
              backgroundColor: "var(--color-blue-1)",
            },
            sm: {
              padding: "12px",
              fontSize: "16px",
              backgroundColor: "var(--color-green-1)",
            },
            md: {
              padding: "16px",
              fontSize: "18px",
              backgroundColor: "var(--color-yellow-1)",
            },
            lg: {
              padding: "20px",
              fontSize: "20px",
              backgroundColor: "var(--color-red-1)",
            },
            xl: {
              padding: "24px",
              fontSize: "22px",
              backgroundColor: "var(--color-purple-1)",
            },
          })}
        >
          <h4>CSS-in-JS Responsive</h4>
          <p>This uses the responsive.styles helper</p>
        </div>

        {/* Responsive spacing tokens */}
        <div style={responsive.spacing("lg")}>
          <h4>Responsive Spacing Tokens</h4>
          <p>This uses responsive spacing tokens</p>
        </div>

        {/* Responsive font sizes */}
        <div style={responsive.fontSize("lg")}>
          <h4>Responsive Font Sizes</h4>
          <p>This text adapts to screen size</p>
        </div>
      </Stack>
    </Container>
  );
};
