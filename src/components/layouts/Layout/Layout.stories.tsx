import type { Meta, StoryObj } from "@storybook/react";
import { Layout } from "./Layout";
import { Text } from "../../atoms/Text";
import { Button } from "../../atoms/Button";
import { Grid, GridCol } from "../Grid";
import { Card } from "../../atoms/Card";
import type { SimpleTopNavItem } from "../../atoms/SimpleTopNav/SimpleTopNav";
import React from "react";

const meta = {
  title: "Layouts/Layout",
  component: Layout,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Layout component provides a global structure with SimpleTopNav that stays consistent across all pages. It handles theme initialization, responsive behavior, and consistent spacing.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    showTopNav: {
      control: "boolean",
      description: "Whether to show the top navigation",
    },
    applyContentPadding: {
      control: "boolean",
      description: "Whether to apply padding to the main content area",
    },
    minFullHeight: {
      control: "boolean",
      description: "Whether to apply minimum full viewport height",
    },
    contentPadding: {
      control: "text",
      description: "Custom padding for the content area",
    },
  },
} satisfies Meta<typeof Layout>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample navigation items
const defaultNavItems: SimpleTopNavItem[] = [
  {
    id: "home",
    label: "Home",
    active: true,
    onClick: () => console.log("Home clicked"),
  },
  {
    id: "components",
    label: "Components",
    onClick: () => console.log("Components clicked"),
  },
  {
    id: "docs",
    label: "Documentation",
    onClick: () => console.log("Docs clicked"),
  },
  {
    id: "about",
    label: "About",
    onClick: () => console.log("About clicked"),
  },
];

const sampleContent = (
  <>
    <Text as="h1" variant="xxl" weight="bold" sx={{ marginBottom: "24px" }}>
      Welcome to PulseUI
    </Text>
    <Text variant="lg" color="secondary" sx={{ marginBottom: "32px" }}>
      This Layout component provides a consistent structure with global
      navigation that appears on all pages.
    </Text>
    <Grid gutter="24px">
      <GridCol span={4}>
        <Card
          title="Global Navigation"
          description="The SimpleTopNav component is now available across all pages automatically."
          buttonText="Learn More"
          buttonVariant="filled"
        />
      </GridCol>
      <GridCol span={4}>
        <Card
          title="Responsive Design"
          description="Layout adapts to different screen sizes with mobile-friendly navigation."
          buttonText="View Details"
          buttonVariant="outline"
        />
      </GridCol>
      <GridCol span={4}>
        <Card
          title="Theme Support"
          description="Supports multiple brands and light/dark themes with automatic initialization."
          buttonText="Explore"
          buttonVariant="subtle"
        />
      </GridCol>
    </Grid>
    <div style={{ marginTop: "48px" }}>
      <Text
        as="h2"
        variant="xl"
        weight="semibold"
        sx={{ marginBottom: "16px" }}
      >
        Features
      </Text>
      <ul style={{ marginLeft: "20px", color: "var(--color-text-secondary)" }}>
        <li>Global SimpleTopNav component</li>
        <li>Automatic theme and brand initialization</li>
        <li>Responsive behavior across all devices</li>
        <li>Consistent spacing and layout</li>
        <li>Configurable navigation items</li>
        <li>Built-in version selector and brand switcher</li>
      </ul>
    </div>
  </>
);

/**
 * Default layout with global navigation and sample content.
 */
export const Default: Story = {
  args: {
    children: sampleContent,
    navItems: defaultNavItems,
    showTopNav: true,
    applyContentPadding: true,
    minFullHeight: true,
    topNavConfig: {
      useDynamicBrandLogo: true,
      brandLogoSize: "md",
      showBrandText: false,
      brandName: "PulseUI",
      brandTitle: "Component Library",
      versionSelector: {
        version: "1.6.0",
        versions: ["1.5.0", "1.6.0", "1.7.0"],
        onVersionChange: (version) =>
          console.log("Version changed to:", version),
        show: true,
      },
      brandSwitcher: {
        show: true,
        size: "sm",
        showDescription: false,
      },
      showThemeSwitcher: true,
    },
  },
};

/**
 * Layout without top navigation for special cases.
 */
export const WithoutTopNav: Story = {
  args: {
    children: (
      <div style={{ textAlign: "center", padding: "64px 16px" }}>
        <Text as="h1" variant="xxl" weight="bold" sx={{ marginBottom: "16px" }}>
          No Top Navigation
        </Text>
        <Text variant="lg" color="secondary">
          Sometimes you might need a layout without the global navigation.
        </Text>
        <Button variant="filled" size="lg" style={{ marginTop: "24px" }}>
          Get Started
        </Button>
      </div>
    ),
    showTopNav: false,
    applyContentPadding: true,
    minFullHeight: true,
  },
};

/**
 * Layout with custom navigation items and configuration.
 */
export const CustomNavigation: Story = {
  args: {
    children: sampleContent,
    navItems: [
      {
        id: "dashboard",
        label: "Dashboard",
        active: true,
        onClick: () => console.log("Dashboard clicked"),
      },
      {
        id: "projects",
        label: "Projects",
        onClick: () => console.log("Projects clicked"),
      },
      {
        id: "team",
        label: "Team",
        onClick: () => console.log("Team clicked"),
      },
      {
        id: "settings",
        label: "Settings",
        onClick: () => console.log("Settings clicked"),
      },
    ],
    showTopNav: true,
    applyContentPadding: true,
    minFullHeight: true,
    topNavConfig: {
      useDynamicBrandLogo: true,
      brandLogoSize: "lg",
      showBrandText: true,
      brandName: "Custom App",
      brandTitle: "Your Application",
      versionSelector: {
        show: false,
      },
      brandSwitcher: {
        show: false,
      },
      showThemeSwitcher: true,
    },
  },
};

/**
 * Layout with no content padding for full-width designs.
 */
export const FullWidth: Story = {
  args: {
    children: (
      <div
        style={{
          background:
            "linear-gradient(135deg, var(--color-blue-1), var(--color-blue-3))",
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div>
          <Text
            as="h1"
            variant="xxl"
            weight="bold"
            sx={{ marginBottom: "16px" }}
          >
            Full Width Layout
          </Text>
          <Text variant="lg" color="secondary">
            Perfect for hero sections, landing pages, or full-width components.
          </Text>
        </div>
      </div>
    ),
    navItems: defaultNavItems,
    showTopNav: true,
    applyContentPadding: false,
    minFullHeight: true,
  },
};

/**
 * Layout with custom content padding.
 */
export const CustomPadding: Story = {
  args: {
    children: (
      <div
        style={{
          border: "2px dashed var(--color-border-secondary)",
          borderRadius: "var(--radius-md)",
          padding: "32px",
          textAlign: "center",
        }}
      >
        <Text
          as="h2"
          variant="xl"
          weight="semibold"
          sx={{ marginBottom: "16px" }}
        >
          Custom Content Padding
        </Text>
        <Text variant="md" color="secondary">
          This layout uses custom padding of 64px on all sides instead of the
          default responsive padding.
        </Text>
      </div>
    ),
    navItems: defaultNavItems,
    showTopNav: true,
    applyContentPadding: false,
    contentPadding: "64px",
    minFullHeight: true,
  },
};
