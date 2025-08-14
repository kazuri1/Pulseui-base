import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within, expect } from "@storybook/test";
import { LeftDrawer } from "./LeftDrawer";
import { ExpandMore, ExpandLess } from "../Icon/IconSet";

const meta: Meta<typeof LeftDrawer> = {
  title: "Atoms/LeftDrawer",
  component: LeftDrawer,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    isOpen: {
      control: { type: "boolean" },
    },
    onClose: {
      action: "closed",
    },
    sections: {
      control: { type: "object" },
    },
    brandName: {
      control: { type: "text" },
    },
    showOverlay: {
      control: { type: "boolean" },
    },
    width: {
      control: { type: "text" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof LeftDrawer>;

// Sample navigation data
const sampleSections = [
  {
    id: "dashboard",
    title: "Dashboard",
    items: [
      { id: "overview", label: "Overview" },
      { id: "analytics", label: "Analytics" },
      { id: "reports", label: "Reports" },
    ],
  },
  {
    id: "management",
    title: "Management",
    items: [
      { id: "users", label: "Users" },
      { id: "roles", label: "Roles" },
      { id: "permissions", label: "Permissions" },
    ],
  },
  {
    id: "content",
    title: "Content",
    items: [
      { id: "articles", label: "Articles" },
      { id: "pages", label: "Pages" },
      { id: "media", label: "Media" },
    ],
  },
  {
    id: "communication",
    title: "Communication",
    items: [
      { id: "messages", label: "Messages" },
      { id: "notifications", label: "Notifications" },
      { id: "calendar", label: "Calendar" },
    ],
  },
];

const nestedSections = [
  {
    id: "main",
    title: "Main Navigation",
    items: [
      { id: "dashboard", label: "Dashboard" },
      { id: "profile", label: "Profile" },
      {
        id: "projects",
        label: "Projects",
        children: [
          { id: "active", label: "Active Projects" },
          { id: "archived", label: "Archived Projects" },
          { id: "templates", label: "Project Templates" },
        ],
      },
    ],
  },
  {
    id: "tools",
    title: "Tools & Utilities",
    items: [
      { id: "settings", label: "Settings" },
      { id: "help", label: "Help & Support" },
      {
        id: "admin",
        label: "Administration",
        children: [
          { id: "users", label: "User Management" },
          { id: "system", label: "System Settings" },
          { id: "logs", label: "System Logs" },
        ],
      },
    ],
  },
];

// Interactive wrapper component for stories
const LeftDrawerWrapper: React.FC<{
  sections: any[];
  brandName?: string;
  brandLogo?: React.ReactNode;
  showOverlay?: boolean;
  width?: string;
}> = ({ sections, brandName, brandLogo, showOverlay, width }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ padding: "20px" }}>
      <button
        onClick={() => setIsOpen(true)}
        style={{
          padding: "12px 24px",
          fontSize: "16px",
          cursor: "pointer",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          borderRadius: "4px",
        }}
      >
        Open Left Drawer
      </button>

      <LeftDrawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        sections={sections}
        brandName={brandName}
        brandLogo={brandLogo}
        showOverlay={showOverlay}
        width={width}
      />
    </div>
  );
};

export const Default: Story = {
  render: (args) => <LeftDrawerWrapper {...args} />,
  args: {
    sections: sampleSections,
    brandName: "PulseUI",
    showOverlay: true,
    width: "280px",
  },
};

export const WithNestedNavigation: Story = {
  render: (args) => <LeftDrawerWrapper {...args} />,
  args: {
    sections: nestedSections,
    brandName: "Enterprise App",
    showOverlay: true,
    width: "320px",
  },
};

export const WithoutOverlay: Story = {
  render: (args) => <LeftDrawerWrapper {...args} />,
  args: {
    sections: sampleSections,
    brandName: "Sidebar Nav",
    showOverlay: false,
    width: "280px",
  },
};

export const WideDrawer: Story = {
  render: (args) => <LeftDrawerWrapper {...args} />,
  args: {
    sections: sampleSections,
    brandName: "Wide Navigation",
    showOverlay: true,
    width: "400px",
  },
};

export const InteractiveAccordion: Story = {
  render: (args) => <LeftDrawerWrapper {...args} />,
  args: {
    sections: nestedSections,
    brandName: "Interactive Demo",
    showOverlay: true,
    width: "300px",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Open the drawer
    const openButton = canvas.getByText("Open Left Drawer");
    await userEvent.click(openButton);

    // Wait for drawer to be visible
    await expect(canvas.getByText("Interactive Demo")).toBeInTheDocument();

    // Test accordion functionality
    const mainSection = canvas.getByText("Main Navigation");
    await userEvent.click(mainSection);

    // Verify section content is expanded
    await expect(canvas.getByText("Dashboard")).toBeInTheDocument();
    await expect(canvas.getByText("Profile")).toBeInTheDocument();
    await expect(canvas.getByText("Projects")).toBeInTheDocument();

    // Test nested navigation
    const projectsItem = canvas.getByText("Projects");
    await userEvent.click(projectsItem);

    // Verify nested items are visible
    await expect(canvas.getByText("Active Projects")).toBeInTheDocument();
    await expect(canvas.getByText("Archived Projects")).toBeInTheDocument();

    // Test closing drawer
    const closeButton = canvas.getByLabelText("Close drawer");
    await userEvent.click(closeButton);

    // Verify drawer is closed
    await expect(
      canvas.queryByText("Interactive Demo")
    ).not.toBeInTheDocument();
  },
};

export const MobileResponsive: Story = {
  render: (args) => <LeftDrawerWrapper {...args} />,
  args: {
    sections: sampleSections,
    brandName: "Mobile App",
    showOverlay: true,
    width: "280px",
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    // Open drawer on mobile
    const openButton = canvas.getByText("Open Left Drawer");
    await userEvent.click(openButton);

    // Verify mobile layout
    await expect(canvas.getByText("Mobile App")).toBeInTheDocument();

    // Test mobile navigation
    const dashboardSection = canvas.getByText("Dashboard");
    await userEvent.click(dashboardSection);

    // Verify section expands
    await expect(canvas.getByText("Overview")).toBeInTheDocument();

    // Test item click closes drawer on mobile
    const overviewItem = canvas.getByText("Overview");
    await userEvent.click(overviewItem);

    // Verify drawer closes after item click on mobile
    await expect(canvas.queryByText("Mobile App")).not.toBeInTheDocument();
  },
};

export const CustomBranding: Story = {
  render: (args) => (
    <LeftDrawerWrapper
      {...args}
      brandLogo={
        <div
          style={{
            width: "32px",
            height: "32px",
            backgroundColor: "#007bff",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          P
        </div>
      }
    />
  ),
  args: {
    sections: sampleSections,
    brandName: "PulseUI Pro",
    showOverlay: true,
    width: "300px",
  },
};

export const MinimalNavigation: Story = {
  render: (args) => <LeftDrawerWrapper {...args} />,
  args: {
    sections: [
      {
        id: "simple",
        title: "Simple Navigation",
        items: [
          { id: "home", label: "Home" },
          { id: "about", label: "About" },
          { id: "contact", label: "Contact" },
        ],
      },
    ],
    brandName: "Minimal",
    showOverlay: true,
    width: "250px",
  },
};
