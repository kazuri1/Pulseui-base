import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Menu } from "./Menu";
import { MenuProps } from "./types";
import {
  Settings,
  Message,
  Photo,
  Search,
  Sync,
  Delete,
} from "../Icon/IconSet";

export default {
  title: "Components/atoms/Menu",
  component: Menu,
  parameters: {
    docs: {
      description: {
        component: `
## Menu Component

A dropdown menu component that displays a list of options organized in sections. Each menu item can have an icon, label, and optional keyboard shortcut.

### Features

- **Sectioned Layout**: Organize menu items into logical groups with titles
- **Icons**: Support for Material-UI icons on each menu item
- **Keyboard Shortcuts**: Display keyboard shortcuts (e.g., "⌘K")
- **Danger Actions**: Special styling for destructive actions
- **Accessibility**: Full keyboard navigation and screen reader support
- **Responsive**: Adapts to different screen sizes
- **Backdrop**: Optional backdrop with blur effect

### Usage

The Menu component is designed to be used as a dropdown or context menu. It supports multiple sections, each containing menu items with icons, labels, and optional shortcuts.

### Accessibility

- Full keyboard navigation support
- Proper ARIA attributes for screen readers
- Focus management
- Escape key to close (when backdrop is enabled)
        `,
      },
    },
  },
  argTypes: {
    open: {
      control: "boolean",
      description: "Whether the menu is open",
    },
    width: {
      control: "text",
      description: "Menu width",
    },
    maxWidth: {
      control: "text",
      description: "Maximum menu width",
    },
    showSectionTitles: {
      control: "boolean",
      description: "Whether to show section titles",
    },
    showBackdrop: {
      control: "boolean",
      description: "Whether to show backdrop",
    },
  },
} as Meta;

const Template: StoryFn<MenuProps> = (args) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div style={{ height: "500px", width: "100%", position: "relative" }}>
      <Menu
        {...args}
        open={isOpen}
        onBackdropClick={() => setIsOpen(false)}
      />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  sections: [
    {
      title: "Application",
      items: [
        {
          label: "Settings",
          icon: Settings,
          onClick: () => {},
        },
        {
          label: "Messages",
          icon: Message,
          onClick: () => {},
        },
        {
          label: "Gallery",
          icon: Photo,
          onClick: () => {},
        },
        {
          label: "Search",
          icon: Search,
          shortcut: "⌘K",
          onClick: () => {},
        },
      ],
    },
    {
      title: "Danger zone",
      items: [
        {
          label: "Transfer my data",
          icon: Sync,
          onClick: () => {},
        },
        {
          label: "Delete my account",
          icon: Delete,
          danger: true,
          onClick: () => {},
        },
      ],
    },
  ],
};

export const WithoutSectionTitles = Template.bind({});
WithoutSectionTitles.args = {
  ...Default.args,
  showSectionTitles: false,
};

export const WithoutBackdrop = Template.bind({});
WithoutBackdrop.args = {
  ...Default.args,
  showBackdrop: false,
};

export const CustomWidth = Template.bind({});
CustomWidth.args = {
  ...Default.args,
  width: "400px",
  maxWidth: "500px",
};

export const WithDisabledItems = Template.bind({});
WithDisabledItems.args = {
  sections: [
    {
      title: "Application",
      items: [
        {
          label: "Settings",
          icon: Settings,
          onClick: () => {},
        },
        {
          label: "Messages",
          icon: Message,
          disabled: true,
          onClick: () => {},
        },
        {
          label: "Gallery",
          icon: Photo,
          onClick: () => {},
        },
      ],
    },
    {
      title: "Danger zone",
      items: [
        {
          label: "Transfer my data",
          icon: Sync,
          disabled: true,
          onClick: () => {},
        },
        {
          label: "Delete my account",
          icon: Delete,
          danger: true,
          onClick: () => {},
        },
      ],
    },
  ],
};

export const SingleSection = Template.bind({});
SingleSection.args = {
  sections: [
    {
      title: "Actions",
      items: [
        {
          label: "Edit",
          icon: Settings,
          onClick: () => {},
        },
        {
          label: "Copy",
          icon: Message,
          shortcut: "⌘C",
          onClick: () => {},
        },
        {
          label: "Delete",
          icon: Delete,
          danger: true,
          onClick: () => {},
        },
      ],
    },
  ],
};

export const WithSubmenus = Template.bind({});
WithSubmenus.args = {
  sections: [
    {
      title: "Application",
      items: [
        {
          label: "Settings",
          icon: Settings,
          onClick: () => {},
        },
        {
          label: "Share",
          icon: Message,
          submenu: [
            {
              title: "Social Media",
              items: [
                { label: "Share to Twitter", onClick: () => {} },
                { label: "Share to Facebook", onClick: () => {} },
              ],
            },
            {
              title: "Email",
              items: [
                { label: "Share via Gmail", onClick: () => {} },
                { label: "Share via Outlook", onClick: () => {} },
              ],
            },
          ],
        },
        {
          label: "Gallery",
          icon: Photo,
          onClick: () => {},
        },
      ],
    },
    {
      title: "Danger Zone",
      items: [
        {
          label: "Delete my account",
          icon: Delete,
          danger: true,
          onClick: () => {},
        },
      ],
    },
  ],
};
