import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Pill } from "./Pill";

const meta: Meta<typeof Pill> = {
  title: "Components/Pill",
  component: Pill,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    closable: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Default Pill",
    size: "md",
  },
  parameters: {
    docs: {
      source: {
        code: `<Pill size="md">Default Pill</Pill>`,
      },
    },
  },
};

export const AllSizes: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "16px",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <Pill size="xs">XS Pill</Pill>
      <Pill size="sm">SM Pill</Pill>
      <Pill size="md">MD Pill</Pill>
      <Pill size="lg">LG Pill</Pill>
      <Pill size="xl">XL Pill</Pill>
    </div>
  ),
};

export const Closable: Story = {
  args: {
    children: "Closable Pill",
    closable: true,
    onClose: () => alert("Pill closed!"),
  },
  parameters: {
    docs: {
      source: {
        code: `<Pill closable onClose={() => console.log("Pill closed!")}>Closable Pill</Pill>`,
      },
    },
  },
};

export const AllSizesClosable: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "16px",
        alignItems: "center",
        flexWrap: "wrap",
      }}
    >
      <Pill size="xs" closable onClose={() => alert("XS Pill closed!")}>
        XS Pill
      </Pill>
      <Pill size="sm" closable onClose={() => alert("SM Pill closed!")}>
        SM Pill
      </Pill>
      <Pill size="md" closable onClose={() => alert("MD Pill closed!")}>
        MD Pill
      </Pill>
      <Pill size="lg" closable onClose={() => alert("LG Pill closed!")}>
        LG Pill
      </Pill>
      <Pill size="xl" closable onClose={() => alert("XL Pill closed!")}>
        XL Pill
      </Pill>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    children: "Disabled Pill",
    disabled: true,
  },
  parameters: {
    docs: {
      source: {
        code: `<Pill disabled>Disabled Pill</Pill>`,
      },
    },
  },
};

export const DisabledClosable: Story = {
  args: {
    children: "Disabled Closable Pill",
    closable: true,
    disabled: true,
    onClose: () => alert("This won't trigger when disabled"),
  },
  parameters: {
    docs: {
      source: {
        code: `<Pill disabled closable onClose={() => {}}>Disabled Closable Pill</Pill>`,
      },
    },
  },
};

export const LongText: Story = {
  args: {
    children: "This is a very long pill text that might overflow",
    size: "md",
    closable: true,
    onClose: () => alert("Long pill closed!"),
  },
  parameters: {
    docs: {
      source: {
        code: `<Pill size="md" closable onClose={() => console.log("Long pill closed!")}>This is a very long pill text that might overflow</Pill>`,
      },
    },
  },
};
