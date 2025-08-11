import type { Meta, StoryObj } from "@storybook/react";
import { UpdateNotification } from "./UpdateNotification";

const meta: Meta<typeof UpdateNotification> = {
  title: "Atoms/UpdateNotification",
  component: UpdateNotification,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A clean, minimalist update notification component that displays update information with action buttons. Perfect for software update notifications, system alerts, and user prompts.",
      },
    },
  },
  argTypes: {
    title: {
      control: { type: "text" },
      description: "Notification title",
    },
    message: {
      control: { type: "text" },
      description: "Notification message",
    },
    skipText: {
      control: { type: "text" },
      description: "Skip button text",
    },
    downloadText: {
      control: { type: "text" },
      description: "Download button text",
    },
    onSkip: {
      action: "skip",
      description: "Skip button click handler",
    },
    onDownload: {
      action: "download",
      description: "Download button click handler",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Updates Available",
    message: "A new version is available. Please upgrade for the best experience.",
    skipText: "Skip",
    downloadText: "Download",
  },
};

export const SecurityUpdate: Story = {
  args: {
    title: "Security Update Required",
    message: "A critical security patch is available. We recommend updating immediately to protect your data.",
    skipText: "Remind Later",
    downloadText: "Update Now",
  },
};

export const FeatureUpdate: Story = {
  args: {
    title: "New Features Available",
    message: "Version 2.0 brings exciting new features including dark mode, improved performance, and enhanced accessibility.",
    skipText: "Not Now",
    downloadText: "Get Update",
  },
};

export const MaintenanceUpdate: Story = {
  args: {
    title: "Maintenance Update",
    message: "Scheduled maintenance update to improve system stability and fix known issues.",
    skipText: "Postpone",
    downloadText: "Install",
  },
};

export const CustomText: Story = {
  args: {
    title: "Software Update",
    message: "A new version of the application is ready for installation.",
    skipText: "Maybe Later",
    downloadText: "Install Update",
  },
};

export const LongMessage: Story = {
  args: {
    title: "Comprehensive Update Available",
    message: "This major update includes performance improvements, bug fixes, new features, enhanced security, and better user experience. The update is approximately 150MB and will take about 5-10 minutes to complete.",
    skipText: "Skip This Time",
    downloadText: "Download & Install",
  },
};
