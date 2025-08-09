import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within, expect } from "@storybook/test";
import { SimpleTopNav } from "./SimpleTopNav";

const meta: Meta<typeof SimpleTopNav> = {
  title: "Atoms/SimpleTopNav",
  component: SimpleTopNav,
  parameters: {
    layout: "fullscreen",
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
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const defaultItems = [
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
];

export const Default: Story = {
  args: {
    brandName: "VIGNESH VISHNUMOORTHY",
    brandTitle: "PRODUCT DESIGNER + ENGINEER",
    items: defaultItems,
  },
};

export const WithCustomBrand: Story = {
  args: {
    brandName: "JOHN DOE",
    brandTitle: "FULL-STACK DEVELOPER",
    items: defaultItems,
  },
};

export const WithoutBrand: Story = {
  args: {
    showBrand: false,
    items: defaultItems,
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
    items: defaultItems,
  },
};

export const WithClickHandlers: Story = {
  args: {
    items: [
      {
        id: "work",
        label: "WORK",
        active: false,
        onClick: () => console.log("Work clicked"),
      },
      {
        id: "fun",
        label: "FUN",
        active: false,
        onClick: () => console.log("Fun clicked"),
      },
      {
        id: "about",
        label: "ABOUT",
        active: true,
        onClick: () => console.log("About clicked"),
      },
      {
        id: "resume",
        label: "RESUME",
        active: false,
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
        href: "/work",
      },
      {
        id: "fun",
        label: "FUN",
        active: false,
        href: "/fun",
      },
      {
        id: "about",
        label: "ABOUT",
        active: true,
        href: "/about",
      },
      {
        id: "resume",
        label: "RESUME",
        active: false,
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
      },
    ],
  },
};

