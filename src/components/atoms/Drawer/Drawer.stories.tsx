import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";
import { Drawer } from "./Drawer";
import { Button } from "../Button";

const meta: Meta<typeof Drawer> = {
  title: "Atoms/Drawer",
  component: Drawer,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component: "A drawer component that slides in from different directions with customizable content and scroll behavior.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    show: {
      control: { type: "boolean" },
      description: "Whether to show the drawer",
    },
    direction: {
      control: { type: "select" },
      options: ["right", "left", "bottom", "top"],
      description: "Drawer direction",
    },
    showTitle: {
      control: { type: "boolean" },
      description: "Whether to show the title",
    },
    showScroll: {
      control: { type: "boolean" },
      description: "Whether to show scroll",
    },
    showClose: {
      control: { type: "boolean" },
      description: "Whether to show the close button",
    },
    closeOnBackdropClick: {
      control: { type: "boolean" },
      description: "Whether to close on backdrop click",
    },
    closeOnEscape: {
      control: { type: "boolean" },
      description: "Whether to close on escape key",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Stories section
export const BasicDrawer: Story = {
  args: {
    show: true,
    title: "Basic Drawer",
    direction: "right",
    children: (
      <div>
        <p>This is a basic drawer with title and content.</p>
        <p>You can put any content here.</p>
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: "Basic drawer with title and content.",
      },
    },
  },
};

export const DrawerDirections: Story = {
  render: () => {
    const [currentDirection, setCurrentDirection] = useState<"right" | "left" | "bottom" | "top">("right");
    const [showDrawer, setShowDrawer] = useState(false);

    return (
      <div style={{ padding: "24px" }}>
        <h3>Select Drawer Direction:</h3>
        <div style={{ display: "flex", gap: "12px", marginBottom: "16px" }}>
          {(["right", "left", "bottom", "top"] as const).map((direction) => (
            <Button
              key={direction}
              variant={currentDirection === direction ? "filled" : "outline"}
              onClick={() => setCurrentDirection(direction)}
            >
              {direction.toUpperCase()}
            </Button>
          ))}
        </div>
        
        <Button variant="filled" onClick={() => setShowDrawer(true)}>
          Open {currentDirection.toUpperCase()} Drawer
        </Button>

        <Drawer
          show={showDrawer}
          direction={currentDirection}
          title={`${currentDirection.toUpperCase()} Drawer`}
          onClose={() => setShowDrawer(false)}
        >
          <div>
            <p>This drawer demonstrates the {currentDirection} direction variant.</p>
            <p>Drawer directions affect how the drawer slides into view.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </Drawer>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: "Demonstrates all drawer directions: right, left, bottom, top.",
      },
    },
  },
};

export const DrawerWithScroll: Story = {
  args: {
    show: true,
    title: "Drawer with Scroll",
    direction: "right",
    showScroll: true,
    children: (
      <div>
        {Array.from({ length: 20 }, (_, i) => (
          <div key={i} style={{ marginBottom: "16px", padding: "16px", border: "1px solid #e0e0e0", borderRadius: "4px" }}>
            <h4>Section {i + 1}</h4>
            <p>This is section {i + 1} of the drawer content. When there's a lot of content, the drawer will show a scrollbar.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        ))}
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: "Drawer with scrollable content when content exceeds the drawer height.",
      },
    },
  },
};

export const DrawerWithoutTitle: Story = {
  args: {
    show: true,
    showTitle: false,
    direction: "right",
    children: (
      <div>
        <p>This drawer doesn't have a title.</p>
        <p>Sometimes you might want a drawer without a title for a cleaner look.</p>
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: "Drawer without a title, useful for content-focused drawers.",
      },
    },
  },
};

export const DrawerWithoutClose: Story = {
  args: {
    show: true,
    title: "Drawer Without Close Button",
    direction: "right",
    showClose: false,
    children: (
      <div>
        <p>This drawer doesn't have a close button.</p>
        <p>Use this when you want to force users to interact with the content to close the drawer.</p>
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: "Drawer without close button, forcing user interaction.",
      },
    },
  },
};

export const DrawerWithoutScroll: Story = {
  args: {
    show: true,
    title: "Drawer Without Scroll",
    direction: "right",
    showScroll: false,
    children: (
      <div>
        <p>This drawer has scroll disabled.</p>
        <p>Content that exceeds the drawer height will be clipped.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: "Drawer with scroll disabled - content will be clipped if it exceeds the drawer height.",
      },
    },
  },
};
