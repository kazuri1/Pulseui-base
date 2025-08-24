import React from "react";
import { Text, Button, Grid, GridCol, Card } from "../index";

export function HomePage() {
  return (
    <div style={{ textAlign: "center" }}>
      {/* Hero Section */}
      <div style={{ marginBottom: "64px" }}>
        <Text as="h1" variant="xxl" weight="bold" sx={{ marginBottom: "16px" }}>
          Welcome to PulseUI
        </Text>
        <Text variant="xl" color="secondary" sx={{ marginBottom: "32px" }}>
          A comprehensive React component library with multi-brand theming
        </Text>
        <div style={{ display: "flex", gap: "16px", justifyContent: "center" }}>
          <Button variant="filled" size="lg">
            Get Started
          </Button>
          <Button variant="outline" size="lg">
            View Components
          </Button>
        </div>
      </div>

      {/* Features Grid */}
      <Grid gutter="24px" style={{ marginBottom: "64px" }}>
        <GridCol span={4}>
          <Card
            title="🎨 Multi-Brand Theming"
            description="Support for multiple brands with automatic theme switching. Switch between MedDash, FitCore, and LabSync themes instantly."
            buttonText="Explore Themes"
            buttonVariant="outline"
          />
        </GridCol>
        <GridCol span={4}>
          <Card
            title="⚡ Performance First"
            description="Lightweight components built with performance in mind. Zero heavy dependencies and optimized for production apps."
            buttonText="Learn More"
            buttonVariant="outline"
          />
        </GridCol>
        <GridCol span={4}>
          <Card
            title="🛠️ Developer Experience"
            description="Full TypeScript support, comprehensive Storybook documentation, and intuitive API design for maximum productivity."
            buttonText="View Docs"
            buttonVariant="outline"
          />
        </GridCol>
      </Grid>

      {/* Stats Section */}
      <div
        style={{
          padding: "48px 32px",
          backgroundColor: "var(--color-surface-secondary)",
          borderRadius: "var(--radius-lg)",
          marginBottom: "64px",
        }}
      >
        <Text
          as="h2"
          variant="xl"
          weight="semibold"
          sx={{ marginBottom: "32px" }}
        >
          Built for Modern Development
        </Text>
        <Grid gutter="32px">
          <GridCol span={3}>
            <Text variant="xxl" weight="bold" color="primary">
              50+
            </Text>
            <Text variant="md" color="secondary">
              Components
            </Text>
          </GridCol>
          <GridCol span={3}>
            <Text variant="xxl" weight="bold" color="primary">
              3
            </Text>
            <Text variant="md" color="secondary">
              Brand Themes
            </Text>
          </GridCol>
          <GridCol span={3}>
            <Text variant="xxl" weight="bold" color="primary">
              100%
            </Text>
            <Text variant="md" color="secondary">
              TypeScript
            </Text>
          </GridCol>
          <GridCol span={3}>
            <Text variant="xxl" weight="bold" color="primary">
              0
            </Text>
            <Text variant="md" color="secondary">
              Heavy Dependencies
            </Text>
          </GridCol>
        </Grid>
      </div>

      {/* Getting Started */}
      <div style={{ textAlign: "left" }}>
        <Text
          as="h2"
          variant="xl"
          weight="semibold"
          sx={{ marginBottom: "24px" }}
        >
          Getting Started
        </Text>
        <Text variant="lg" color="secondary" sx={{ marginBottom: "24px" }}>
          PulseUI is designed to be easy to use and integrate into your existing
          projects.
        </Text>

        <Grid gutter="24px">
          <GridCol span={6}>
            <div
              style={{
                padding: "24px",
                backgroundColor: "var(--color-surface-variant)",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--color-border-secondary)",
              }}
            >
              <Text
                as="h3"
                variant="lg"
                weight="semibold"
                sx={{ marginBottom: "12px" }}
              >
                Installation
              </Text>
              <Text
                variant="sm"
                color="secondary"
                sx={{ marginBottom: "16px" }}
              >
                Install PulseUI via npm or yarn
              </Text>
              <div
                style={{
                  padding: "12px",
                  backgroundColor: "var(--color-surface)",
                  borderRadius: "var(--radius-sm)",
                  fontFamily: "monospace",
                  fontSize: "14px",
                  color: "var(--color-text-primary)",
                }}
              >
                npm install pulseui-base
              </div>
            </div>
          </GridCol>
          <GridCol span={6}>
            <div
              style={{
                padding: "24px",
                backgroundColor: "var(--color-surface-variant)",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--color-border-secondary)",
              }}
            >
              <Text
                as="h3"
                variant="lg"
                weight="semibold"
                sx={{ marginBottom: "12px" }}
              >
                Quick Start
              </Text>
              <Text
                variant="sm"
                color="secondary"
                sx={{ marginBottom: "16px" }}
              >
                Import components and start building
              </Text>
              <div
                style={{
                  padding: "12px",
                  backgroundColor: "var(--color-surface)",
                  borderRadius: "var(--radius-sm)",
                  fontFamily: "monospace",
                  fontSize: "14px",
                  color: "var(--color-text-primary)",
                }}
              >
                import {`{ Button }`} from 'pulseui-base'
              </div>
            </div>
          </GridCol>
        </Grid>
      </div>
    </div>
  );
}
