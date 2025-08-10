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
  },
  tags: ["autodocs"],
  argTypes: {
    brandName: {
      control: { type: "text" },
    },
    brandTitle: {
      control: { type: "text" },
    },
    showBrand: {
      control: { type: "boolean" },
    },
    showNavigation: {
      control: { type: "boolean" },
    },
    defaultMobileMenuOpen: {
      control: { type: "boolean" },
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
