import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { VersionSelector } from "./VersionSelector";

const meta: Meta<typeof VersionSelector> = {
  title: "Components/SimpleTopNav/VersionSelector",
  component: VersionSelector,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "A version selector component that displays the current version and allows users to select from available versions. It features a clean, rounded design with a dropdown interface.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    version: {
      control: "text",
      description: "Current version to display",
    },
    versions: {
      control: "object",
      description: "Available versions to select from",
    },
    onVersionChange: {
      action: "version changed",
      description: "Callback when version changes",
    },
    disabled: {
      control: "boolean",
      description: "Whether the selector is disabled",
    },
    className: {
      control: "text",
      description: "Custom class name",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    version: "v8.2.4",
    versions: ["v8.2.4", "v8.2.3", "v8.2.2", "v8.1.0"],
  },
};

export const WithCustomVersions: Story = {
  args: {
    version: "v2.1.0",
    versions: ["v2.1.0", "v2.0.0", "v1.9.0", "v1.8.0", "v1.7.0"],
  },
};

export const Disabled: Story = {
  args: {
    version: "v8.2.4",
    versions: ["v8.2.4", "v8.2.3", "v8.2.2"],
    disabled: true,
  },
};

export const LongVersionNumber: Story = {
  args: {
    version: "v2024.1.15-beta",
    versions: [
      "v2024.1.15-beta",
      "v2024.1.14",
      "v2024.1.13",
      "v2024.0.0",
    ],
  },
};

export const SingleVersion: Story = {
  args: {
    version: "v1.0.0",
    versions: ["v1.0.0"],
  },
};

export const ReferenceDesign: Story = {
  args: {
    version: "v8.2.4",
    versions: ["v8.2.4", "v8.2.3", "v8.2.2", "v8.1.0"],
  },
  parameters: {
    docs: {
      description: {
        story: "This story matches the reference design - a light-colored, rounded rectangular button with version text and a down chevron icon.",
      },
    },
  },
};
