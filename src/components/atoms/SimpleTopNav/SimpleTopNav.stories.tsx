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

A responsive top navigation component that automatically adapts to different screen sizes using the \`useBreakpoint\` hook.

## Features

- **Responsive Design**: Automatically switches between desktop and mobile layouts
- **Mobile Navigation**: Slide-in drawer with header and close button
- **Icon Support**: Optional icons for navigation items
- **Hook-based Responsiveness**: Uses \`useBreakpoint\` hook for breakpoint detection
- **Accessibility**: Proper ARIA labels and keyboard navigation

## Mobile Navigation

The mobile navigation includes:
- A slide-in drawer from the right side
- Navigation header with title and close button
- Smooth animations and transitions
- Touch-friendly navigation items
- Automatic menu closing when items are clicked

## Breakpoints

- **Desktop**: Shows full horizontal navigation
- **Tablet/Mobile**: Shows hamburger menu toggle and mobile drawer
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
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultItems = [
  {
    id: "work",
    label: "WORK",
    active: false,
    icon: Store,
  },
  {
    id: "fun",
    label: "FUN",
    active: false,
    icon: Book,
  },
  {
    id: "about",
    label: "ABOUT",
    active: true,
    icon: Info,
  },
  {
    id: "resume",
    label: "RESUME",
    active: false,
    icon: Assignment,
  },
];

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
        onClick: () => console.log("Work clicked"),
      },
      {
        id: "fun",
        label: "FUN",
        active: false,
        icon: Book,
        onClick: () => console.log("Fun clicked"),
      },
      {
        id: "about",
        label: "ABOUT",
        active: true,
        icon: Info,
        onClick: () => console.log("About clicked"),
      },
      {
        id: "resume",
        label: "RESUME",
        active: false,
        icon: Assignment,
        onClick: () => console.log("Resume clicked"),
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
      onVersionChange: (version: string) => console.log(`Version changed to: ${version}`),
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
        story: "SimpleTopNav with version selector positioned adjacent to the brand. The version selector allows users to switch between different versions of the design system.",
      },
    },
  },
};
