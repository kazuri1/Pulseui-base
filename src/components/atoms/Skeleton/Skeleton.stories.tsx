import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Skeleton } from "./Skeleton";

const meta: Meta<typeof Skeleton> = {
  title: "Atoms/Skeleton",
  component: Skeleton,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Display a placeholder preview of content before data loads. Pulses to indicate activity.",
      },
    },
  },
  args: { variant: "rect", size: "md", animated: true },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["text", "rect", "circle", "avatar", "button"],
    },
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    width: { control: "text" },
    height: { control: "text" },
    radius: { control: "text" },
    animated: { control: "boolean" },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { width: 200, height: 20, variant: "text" },
};

export const ContentPreview: Story = {
  render: () => (
    <div
      style={{ display: "flex", flexDirection: "column", gap: 12, width: 320 }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <Skeleton variant="avatar" width={40} height={40} />
        <div style={{ flex: 1 }}>
          <Skeleton variant="text" width="60%" />
          <Skeleton variant="text" width="40%" />
        </div>
      </div>
      <Skeleton variant="rect" height={140} radius={8} />
      <div style={{ display: "flex", gap: 8 }}>
        <Skeleton variant="button" width={88} />
        <Skeleton variant="button" width={88} />
      </div>
    </div>
  ),
};
