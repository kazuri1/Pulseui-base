import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
// import { userEvent, within, expect } from "@storybook/test";
import { Drawer } from "./Drawer";
import { Button } from "../Button";

const meta: Meta<typeof Drawer> = {
  title: "Atoms/Drawer",
  component: Drawer,
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    show: {
      control: { type: "boolean" },
    },
    direction: {
      control: { type: "select" },
      options: ["right", "left", "bottom", "top"],
    },
    showTitle: {
      control: { type: "boolean" },
    },
    showScroll: {
      control: { type: "boolean" },
    },
    showClose: {
      control: { type: "boolean" },
    },
    closeOnBackdropClick: {
      control: { type: "boolean" },
    },
    closeOnEscape: {
      control: { type: "boolean" },
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
};

export const DrawerDirections: Story = {
  render: function DrawerDirectionsStory() {
    const [currentDirection, setCurrentDirection] = useState<
      "right" | "left" | "bottom" | "top"
    >("right");
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
            <p>
              This drawer demonstrates the {currentDirection} direction variant.
            </p>
            <p>Drawer directions affect how the drawer slides into view.</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur.
            </p>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </Drawer>
      </div>
    );
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
          <div
            key={i}
            style={{
              marginBottom: "16px",
              padding: "16px",
              border: "1px solid #e0e0e0",
              borderRadius: "4px",
            }}
          >
            <h4>Section {i + 1}</h4>
            <p>
              This is section {i + 1} of the drawer content. When there's a lot
              of content, the drawer will show a scrollbar.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        ))}
      </div>
    ),
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
        <p>
          Sometimes you might want a drawer without a title for a cleaner look.
        </p>
      </div>
    ),
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
        <p>
          Use this when you want to force users to interact with the content to
          close the drawer.
        </p>
      </div>
    ),
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
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <p>
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo consequat.
        </p>
        <p>
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur.
        </p>
        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt mollit anim id est laborum.
        </p>
      </div>
    ),
  },
};
