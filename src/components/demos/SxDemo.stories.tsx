import type { Meta, StoryObj } from "@storybook/react";
import { SxDemo } from "./SxDemo";

const meta: Meta<typeof SxDemo> = {
  title: "Demos/SX Props System",
  component: SxDemo,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A comprehensive demo showcasing the SX props system for custom styling in PulseUI components.",
      },
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithCustomTheme: Story = {
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};
