import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within, expect } from "@storybook/test";
import { SimpleTopNav } from "./SimpleTopNav";
import {
  Home,
  Person,
  Store,
  Email,
  Info,
  Assignment,
  Book,
} from "../Icon/IconSet";

const meta: Meta<typeof SimpleTopNav> = {
  title: "Atoms/SimpleTopNav",
  component: SimpleTopNav,
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "desktop",
    },
    docs: {
      description: {
        component: `
# SimpleTopNav Component

A responsive top navigation component that automatically adapts to different screen sizes using the \`useBreakpoint\` hook, with extensive content injection capabilities for maximum flexibility.

## Features

- **Responsive Design**: Automatically switches between desktop and mobile layouts
- **Mobile Navigation**: Slide-in drawer with header and close button
- **Icon Support**: Optional icons for navigation items
- **Hook-based Responsiveness**: Uses \`useBreakpoint\` hook for breakpoint detection
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **Content Injection**: Multiple content slots for custom content placement
- **Children Support**: Direct children rendering for maximum flexibility

## Content Injection Slots

The component provides several strategic content injection points:

- **\`beforeBrand\`**: Content before the brand section (e.g., environment badges, status indicators)
- **\`afterBrand\`**: Content after the brand section (e.g., team info, version badges)
- **\`centerContent\`**: Centered content area (e.g., search bars, breadcrumbs)
- **\`children\`**: Direct children content with flexible positioning
- **\`beforeNavigation\`**: Content before navigation items (e.g., section labels, quick actions)
- **\`afterNavigation\`**: Content after navigation items (e.g., action buttons, user menu)
- **\`mobileHeaderContent\`**: Custom content in mobile navigation header
- **\`mobileFooterContent\`**: Custom content at bottom of mobile navigation

## Mobile Navigation

The mobile navigation includes:
- A slide-in drawer from the right side
- Navigation header with title and close button
- Smooth animations and transitions
- Touch-friendly navigation items
- Automatic menu closing when items are clicked
- Custom header and footer content support

## Breakpoints

- **Desktop**: Shows full horizontal navigation with all content slots
- **Tablet/Mobile**: Shows hamburger menu toggle and mobile drawer
- **Responsive Content**: Center content and children automatically hide on smaller screens

## Usage Examples

\`\`\`tsx
// Basic usage with children
<SimpleTopNav brandName="My App">
  <SearchBar />
</SimpleTopNav>

// With content slots
<SimpleTopNav
  beforeBrand={<Badge>BETA</Badge>}
  centerContent={<SearchBar />}
  afterNavigation={<UserMenu />}
/>

// Complex layout
<SimpleTopNav
  beforeBrand={<EnvironmentBadge />}
  children={<StatusIndicator />}
  afterNavigation={<ActionButtons />}
/>
\`\`\`
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    brandName: {
      control: { type: "text" },
      description: "The main brand name to display",
    },
    brandTitle: {
      control: { type: "text" },
      description: "The brand subtitle or role",
    },
    showBrand: {
      control: { type: "boolean" },
      description: "Whether to show the brand section",
    },
    showNavigation: {
      control: { type: "boolean" },
      description: "Whether to show the navigation section",
    },
    defaultMobileMenuOpen: {
      control: { type: "boolean" },
      description:
        "Whether the mobile menu should be open by default (useful for testing)",
    },
    children: {
      control: { type: "text" },
      description: "Children content to render in the navigation",
    },
    beforeBrand: {
      control: { type: "text" },
      description: "Content to render before the brand section",
    },
    afterBrand: {
      control: { type: "text" },
      description: "Content to render after the brand section",
    },
    centerContent: {
      control: { type: "text" },
      description: "Content to render in the center area",
    },
    beforeNavigation: {
      control: { type: "text" },
      description: "Content to render before navigation items",
    },
    afterNavigation: {
      control: { type: "text" },
      description: "Content to render after navigation items",
    },
    mobileHeaderContent: {
      control: { type: "text" },
      description: "Custom content for mobile navigation header",
    },
    mobileFooterContent: {
      control: { type: "text" },
      description: "Custom content for mobile navigation footer",
    },
    showCenterContent: {
      control: { type: "boolean" },
      description: "Whether to show the center content area",
    },
    showMobileHeaderContent: {
      control: { type: "boolean" },
      description: "Whether to show custom mobile header content",
    },
    showMobileFooterContent: {
      control: { type: "boolean" },
      description: "Whether to show custom mobile footer content",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;



const defaultItemsWithIcons = [
  {
    id: "home",
    label: "Home",
    active: true,
    icon: Home,
  },
  {
    id: "about",
    label: "About",
    active: false,
    icon: Person,
  },
  {
    id: "work",
    label: "Work",
    active: false,
    icon: Store,
  },
  {
    id: "contact",
    label: "Contact",
    active: false,
    icon: Email,
  },
];

export const Default: Story = {
  args: {
    brandName: "VIGNESH VISHNUMOORTHY",
    brandTitle: "PRODUCT DESIGNER + ENGINEER",
    items: defaultItemsWithIcons,
  },
};

export const WithCustomBrand: Story = {
  args: {
    brandName: "JOHN DOE",
    brandTitle: "FULL-STACK DEVELOPER",
    items: defaultItemsWithIcons,
  },
};

export const WithoutBrand: Story = {
  args: {
    showBrand: false,
    items: defaultItemsWithIcons,
  },
};

export const WithoutNavigation: Story = {
  args: {
    showNavigation: false,
  },
};

export const WithCustomLogo: Story = {
  args: {
    brandLogo: (
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "var(--color-blue-8)",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          fontSize: "12px",
          fontWeight: "bold",
        }}
      >
        VV
      </div>
    ),
    items: defaultItemsWithIcons,
  },
};

export const WithClickHandlers: Story = {
  args: {
    items: [
      {
        id: "work",
        label: "WORK",
        active: false,
        icon: Store,
        onClick: () => {},
      },
      {
        id: "fun",
        label: "FUN",
        active: false,
        icon: Book,
        onClick: () => {},
      },
      {
        id: "about",
        label: "ABOUT",
        active: true,
        icon: Info,
        onClick: () => {},
      },
      {
        id: "resume",
        label: "RESUME",
        active: false,
        icon: Assignment,
        onClick: () => {},
      },
    ],
  },
};

export const WithLinks: Story = {
  args: {
    items: [
      {
        id: "work",
        label: "WORK",
        active: false,
        icon: Store,
        href: "/work",
      },
      {
        id: "fun",
        label: "FUN",
        active: false,
        icon: Book,
        href: "/fun",
      },
      {
        id: "about",
        label: "ABOUT",
        active: true,
        icon: Info,
        href: "/about",
      },
      {
        id: "resume",
        label: "RESUME",
        active: false,
        icon: Assignment,
        href: "/resume",
      },
    ],
  },
};

export const Minimal: Story = {
  args: {
    brandName: "VIGNESH VISHNUMOORTHY",
    items: [
      {
        id: "about",
        label: "ABOUT",
        active: true,
        icon: Info,
      },
    ],
  },
};

// Responsive Stories - These demonstrate the hook-based responsive behavior
export const DesktopView: Story = {
  args: {
    brandName: "VIGNESH VISHNUMOORTHY",
    brandTitle: "PRODUCT DESIGNER + ENGINEER",
    items: defaultItemsWithIcons,
  },
  parameters: {
    viewport: {
      defaultViewport: "desktop",
    },
  },
};

export const TabletView: Story = {
  args: {
    brandName: "VIGNESH VISHNUMOORTHY",
    brandTitle: "PRODUCT DESIGNER + ENGINEER",
    items: defaultItemsWithIcons,
  },
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
};

export const MobileView: Story = {
  args: {
    brandName: "VIGNESH VISHNUMOORTHY",
    brandTitle: "PRODUCT DESIGNER + ENGINEER",
    items: defaultItemsWithIcons,
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

export const WithDefaultMobileMenuOpen: Story = {
  args: {
    brandName: "VIGNESH VISHNUMOORTHY",
    brandTitle: "PRODUCT DESIGNER + ENGINEER",
    items: defaultItemsWithIcons,
    defaultMobileMenuOpen: true,
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

export const NoIcons: Story = {
  args: {
    brandName: "VIGNESH VISHNUMOORTHY",
    brandTitle: "PRODUCT DESIGNER + ENGINEER",
    items: [
      {
        id: "work",
        label: "WORK",
        active: false,
      },
      {
        id: "fun",
        label: "FUN",
        active: false,
      },
      {
        id: "about",
        label: "ABOUT",
        active: true,
      },
      {
        id: "resume",
        label: "RESUME",
        active: false,
      },
    ],
  },
};

export const HookBasedResponsiveness: Story = {
  args: {
    brandName: "VIGNESH VISHNUMOORTHY",
    brandTitle: "PRODUCT DESIGNER + ENGINEER",
    items: defaultItemsWithIcons,
  },
};

// Enhanced Mobile Navigation Stories
export const MobileNavigationDemo: Story = {
  args: {
    brandName: "VIGNESH VISHNUMOORTHY",
    brandTitle: "PRODUCT DESIGNER + ENGINEER",
    items: defaultItemsWithIcons,
    defaultMobileMenuOpen: true,
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Wait for the mobile menu to be visible
    await expect(canvas.getByText("Navigation")).toBeInTheDocument();

    // Verify the mobile navigation header is present
    await expect(canvas.getByText("Navigation")).toBeInTheDocument();
    await expect(
      canvas.getByLabelText("Close mobile menu")
    ).toBeInTheDocument();

    // Verify navigation items are visible
    await expect(canvas.getByText("Home")).toBeInTheDocument();
    await expect(canvas.getByText("About")).toBeInTheDocument();
    await expect(canvas.getByText("Work")).toBeInTheDocument();
    await expect(canvas.getByText("Contact")).toBeInTheDocument();
  },
};

export const MobileNavigationWithCustomItems: Story = {
  args: {
    brandName: "PULSE UI",
    brandTitle: "COMPONENT LIBRARY",
    items: [
      {
        id: "components",
        label: "Components",
        active: true,
        icon: Assignment,
      },
      {
        id: "documentation",
        label: "Documentation",
        active: false,
        icon: Book,
      },
      {
        id: "examples",
        label: "Examples",
        active: false,
        icon: Store,
      },
      {
        id: "support",
        label: "Support",
        active: false,
        icon: Info,
      },
    ],
    defaultMobileMenuOpen: true,
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

export const MobileNavigationInteraction: Story = {
  args: {
    brandName: "VIGNESH VISHNUMOORTHY",
    brandTitle: "PRODUCT DESIGNER + ENGINEER",
    items: defaultItemsWithIcons,
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Find and click the mobile menu toggle
    const menuToggle = canvas.getByLabelText("Toggle mobile menu");
    await userEvent.click(menuToggle);

    // Wait for the mobile menu to open
    await expect(canvas.getByText("Navigation")).toBeInTheDocument();

    // Test clicking on a navigation item
    const homeItem = canvas.getByText("Home");
    await userEvent.click(homeItem);

    // Verify the menu closes after clicking an item
    await expect(canvas.queryByText("Navigation")).not.toBeInTheDocument();
  },
};

export const ResponsiveIconSizing: Story = {
  args: {
    brandName: "VIGNESH VISHNUMOORTHY",
    brandTitle: "PRODUCT DESIGNER + ENGINEER",
    items: [
      {
        id: "dashboard",
        label: "Dashboard",
        active: true,
        icon: Home,
      },
      {
        id: "profile",
        label: "Profile",
        active: false,
        icon: Person,
      },
      {
        id: "settings",
        label: "Settings",
        active: false,
        icon: Assignment,
      },
      {
        id: "help",
        label: "Help",
        active: false,
        icon: Info,
      },
    ],
  },
  parameters: {
    docs: {
      description: {
        story: `
This story demonstrates how icons automatically resize based on the current breakpoint:

- **Desktop**: Icons use "sm" size for compact horizontal layout
- **Mobile/Tablet**: Icons use "md" size for better touch targets

The component automatically detects the screen size using the \`useBreakpoint\` hook and adjusts icon sizes accordingly.
        `,
      },
    },
  },
};

export const WithVersionSelector: Story = {
  args: {
    brandName: "PULSEUI",
    brandTitle: "DESIGN SYSTEM",
    versionSelector: {
      show: true,
      version: "v8.2.4",
      versions: ["v8.2.4", "v8.2.3", "v8.2.2", "v8.1.0"],
            onVersionChange: () => {},
    },
    items: [
      { id: "home", label: "HOME", icon: Home, active: true },
      { id: "docs", label: "DOCS", icon: Book },
      { id: "components", label: "COMPONENTS", icon: Store },
      { id: "about", label: "ABOUT", icon: Person },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          "SimpleTopNav with version selector positioned adjacent to the brand. The version selector allows users to switch between different versions of the design system.",
      },
    },
  },
};

// New stories demonstrating content injection capabilities
export const WithChildren: Story = {
  args: {
    brandName: "PULSEUI",
    brandTitle: "DESIGN SYSTEM",
    children: (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "var(--spacing-md)",
          padding: "var(--spacing-sm) var(--spacing-md)",
          backgroundColor: "var(--color-surface-secondary)",
          borderRadius: "var(--radius-md)",
          border: "1px solid var(--color-border-secondary)",
        }}
      >
        <span
          style={{
            fontSize: "var(--font-size-sm)",
            color: "var(--color-text-muted)",
          }}
        >
          Status: Online
        </span>
        <div
          style={{
            width: "8px",
            height: "8px",
            borderRadius: "50%",
            backgroundColor: "var(--color-success)",
          }}
        />
      </div>
    ),
    items: [
      { id: "home", label: "HOME", icon: Home, active: true },
      { id: "docs", label: "DOCS", icon: Book },
      { id: "components", label: "COMPONENTS", icon: Store },
      { id: "about", label: "ABOUT", icon: Person },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          "SimpleTopNav with children content injected in the center area. This demonstrates how you can add custom content like status indicators, search bars, or other components directly into the navigation.",
      },
    },
  },
};

export const WithContentSlots: Story = {
  args: {
    brandName: "PULSEUI",
    brandTitle: "DESIGN SYSTEM",
    beforeBrand: (
      <div
        style={{
          padding: "var(--spacing-xs) var(--spacing-sm)",
          backgroundColor: "var(--color-primary)",
          color: "white",
          borderRadius: "var(--radius-sm)",
          fontSize: "var(--font-size-xs)",
          fontWeight: "var(--font-weight-semibold)",
        }}
      >
        BETA
      </div>
    ),
    afterBrand: (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "var(--spacing-xs)",
          padding: "var(--spacing-xs) var(--spacing-sm)",
          backgroundColor: "var(--color-surface-secondary)",
          borderRadius: "var(--radius-sm)",
          fontSize: "var(--font-size-xs)",
        }}
      >
        <span>👥</span>
        <span>Team</span>
      </div>
    ),
    beforeNavigation: (
      <div
        style={{
          padding: "var(--spacing-xs) var(--spacing-sm)",
          backgroundColor: "var(--color-surface-secondary)",
          borderRadius: "var(--radius-sm)",
          fontSize: "var(--font-size-xs)",
          color: "var(--color-text-muted)",
        }}
      >
        Quick Actions
      </div>
    ),
    afterNavigation: (
      <button
        style={{
          padding: "var(--spacing-xs) var(--spacing-sm)",
          backgroundColor: "var(--color-primary)",
          color: "white",
          border: "none",
          borderRadius: "var(--radius-sm)",
          fontSize: "var(--font-size-xs)",
          cursor: "pointer",
        }}
      >
        Get Started
      </button>
    ),
    items: [
      { id: "home", label: "HOME", icon: Home, active: true },
      { id: "docs", label: "DOCS", icon: Book },
      { id: "components", label: "COMPONENTS", icon: Store },
      { id: "about", label: "ABOUT", icon: Person },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          "SimpleTopNav demonstrating all content injection slots: beforeBrand, afterBrand, beforeNavigation, and afterNavigation. This shows how you can add badges, buttons, and other content in strategic positions around the navigation.",
      },
    },
  },
};

export const WithCenterContent: Story = {
  args: {
    brandName: "PULSEUI",
    brandTitle: "DESIGN SYSTEM",
    showCenterContent: true,
    centerContent: (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "var(--spacing-sm)",
          padding: "var(--spacing-sm) var(--spacing-md)",
          backgroundColor: "var(--color-surface-secondary)",
          borderRadius: "var(--radius-md)",
          border: "1px solid var(--color-border-secondary)",
          minWidth: "300px",
        }}
      >
        <span style={{ color: "var(--color-text-muted)" }}>🔍</span>
        <input
          type="text"
          placeholder="Search components..."
          style={{
            border: "none",
            background: "transparent",
            outline: "none",
            flex: 1,
            fontSize: "var(--font-size-sm)",
            color: "var(--color-text-primary)",
          }}
        />
      </div>
    ),
    items: [
      { id: "home", label: "HOME", icon: Home, active: true },
      { id: "docs", label: "DOCS", icon: Book },
      { id: "components", label: "COMPONENTS", icon: Store },
      { id: "about", label: "ABOUT", icon: Person },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          "SimpleTopNav with center content area enabled, showing a search bar. The center content area is perfect for search functionality, breadcrumbs, or other centered content that needs to be prominent.",
      },
    },
  },
};

export const WithMobileCustomContent: Story = {
  args: {
    brandName: "PULSEUI",
    brandTitle: "DESIGN SYSTEM",
    showMobileHeaderContent: true,
    mobileHeaderContent: (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "var(--spacing-xs)",
          padding: "var(--spacing-xs) var(--spacing-sm)",
          backgroundColor: "var(--color-primary)",
          color: "white",
          borderRadius: "var(--radius-sm)",
          fontSize: "var(--font-size-xs)",
          fontWeight: "var(--font-weight-semibold)",
        }}
      >
        NEW
      </div>
    ),
    showMobileFooterContent: true,
    mobileFooterContent: (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "var(--spacing-sm)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--spacing-sm)",
            padding: "var(--spacing-sm)",
            backgroundColor: "var(--color-surface-secondary)",
            borderRadius: "var(--radius-sm)",
          }}
        >
          <span>📱</span>
          <span style={{ fontSize: "var(--font-size-sm)" }}>
            Mobile App Available
          </span>
        </div>
        <button
          style={{
            width: "100%",
            padding: "var(--spacing-sm)",
            backgroundColor: "var(--color-primary)",
            color: "white",
            border: "none",
            borderRadius: "var(--radius-sm)",
            fontSize: "var(--font-size-sm)",
            cursor: "pointer",
          }}
        >
          Download App
        </button>
      </div>
    ),
    items: [
      { id: "home", label: "HOME", icon: Home, active: true },
      { id: "docs", label: "DOCS", icon: Book },
      { id: "components", label: "COMPONENTS", icon: Store },
      { id: "about", label: "ABOUT", icon: Person },
    ],
    defaultMobileMenuOpen: true,
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
    docs: {
      description: {
        story:
          "SimpleTopNav with custom mobile header and footer content. The mobile header content appears next to the navigation title, while the footer content appears at the bottom of the mobile menu, perfect for additional actions or information.",
      },
    },
  },
};

export const ComplexLayout: Story = {
  args: {
    brandName: "PULSEUI",
    brandTitle: "DESIGN SYSTEM",
    beforeBrand: (
      <div
        style={{
          padding: "var(--spacing-xs) var(--spacing-sm)",
          backgroundColor: "var(--color-warning)",
          color: "white",
          borderRadius: "var(--radius-sm)",
          fontSize: "var(--font-size-xs)",
          fontWeight: "var(--font-weight-semibold)",
        }}
      >
        DEV
      </div>
    ),
    children: (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "var(--spacing-md)",
          flex: 1,
          justifyContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--spacing-xs)",
            padding: "var(--spacing-xs) var(--spacing-sm)",
            backgroundColor: "var(--color-surface-secondary)",
            borderRadius: "var(--radius-sm)",
            fontSize: "var(--font-size-xs)",
          }}
        >
          <span>📊</span>
          <span>Analytics</span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "var(--spacing-xs)",
            padding: "var(--spacing-xs) var(--spacing-sm)",
            backgroundColor: "var(--color-surface-secondary)",
            borderRadius: "var(--radius-sm)",
            fontSize: "var(--font-size-xs)",
          }}
        >
          <span>⚡</span>
          <span>Performance</span>
        </div>
      </div>
    ),
    afterNavigation: (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "var(--spacing-sm)",
        }}
      >
        <button
          style={{
            padding: "var(--spacing-xs) var(--spacing-sm)",
            backgroundColor: "var(--color-surface-secondary)",
            border: "1px solid var(--color-border-secondary)",
            borderRadius: "var(--radius-sm)",
            fontSize: "var(--font-size-xs)",
            cursor: "pointer",
          }}
        >
          Help
        </button>
        <button
          style={{
            padding: "var(--spacing-xs) var(--spacing-sm)",
            backgroundColor: "var(--color-primary)",
            color: "white",
            border: "none",
            borderRadius: "var(--radius-sm)",
            fontSize: "var(--font-size-xs)",
            cursor: "pointer",
          }}
        >
          Upgrade
        </button>
      </div>
    ),
    items: [
      { id: "home", label: "HOME", icon: Home, active: true },
      { id: "docs", label: "DOCS", icon: Book },
      { id: "components", label: "COMPONENTS", icon: Store },
      { id: "about", label: "ABOUT", icon: Person },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          "Complex layout demonstrating multiple content injection slots working together. This shows how you can create rich, feature-packed navigation bars with various content types positioned strategically throughout the navigation.",
      },
    },
  },
};
