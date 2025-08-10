import type { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { ComponentDisplay } from "./ComponentDisplay";
import { Button } from "../Button/Button";
import buttonStories from "../Button/Button.stories";
import { Modal } from "../Modal/Modal";
import { Drawer } from "../Drawer/Drawer";

const meta: Meta<typeof ComponentDisplay> = {
  title: "Atoms/ComponentDisplay",
  component: ComponentDisplay,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "A documentation component that displays component information with interactive previews, code examples, and automatic Storybook documentation embedding.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "The main title of the component",
      table: {
        type: { summary: "string" },
        required: true,
        defaultValue: { summary: "undefined" },
      },
    },
    description: {
      control: "text",
      description: "Description of the component functionality",
      table: {
        type: { summary: "string" },
        required: false,
        defaultValue: { summary: "undefined" },
      },
    },
    component: {
      control: false,
      description: "The React component to display",
      table: {
        type: { summary: "React.ComponentType<any>" },
        required: true,
        defaultValue: { summary: "undefined" },
      },
    },
    props: {
      control: "object",
      description: "Props to pass to the component",
      table: {
        type: { summary: "Record<string, any>" },
        required: false,
        defaultValue: { summary: "{}" },
      },
    },
    stories: {
      control: false,
      description: "Storybook stories for the component",
      table: {
        type: { summary: "React.ComponentType<any>" },
        required: false,
        defaultValue: { summary: "undefined" },
      },
    },
    storybookUrl: {
      control: "text",
      description: "Custom Storybook URL (auto-inferred if not provided)",
      table: {
        type: { summary: "string" },
        required: false,
        defaultValue: { summary: "auto-inferred" },
      },
    },
    storyId: {
      control: "text",
      description: "Custom story ID (auto-inferred if not provided)",
      table: {
        type: { summary: "string" },
        required: false,
        defaultValue: { summary: "auto-inferred" },
      },
    },
    storybookViewMode: {
      control: { type: "select" },
      options: ["docs", "story", "canvas"],
      description: "Storybook view mode for interactive documentation",
      table: {
        type: { summary: "'docs' | 'story' | 'canvas'" },
        required: false,
        defaultValue: { summary: "docs" },
      },
    },
    showCode: {
      control: "boolean",
      description: "Whether to show the code tab",
      table: {
        type: { summary: "boolean" },
        required: false,
        defaultValue: { summary: "true" },
      },
    },
    showProps: {
      control: "boolean",
      description: "Whether to show the props tab",
      table: {
        type: { summary: "boolean" },
        required: false,
        defaultValue: { summary: "true" },
      },
    },
    showStories: {
      control: "boolean",
      description: "Whether to show the stories tab",
      table: {
        type: { summary: "boolean" },
        required: false,
        defaultValue: { summary: "true" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "ComponentDisplay",
    description:
      "A documentation component that displays component information with interactive previews and automatic Storybook documentation embedding.",
    component: Button,
    props: { children: "Default Button" },
  },
};

export const WithCustomProps: Story = {
  args: {
    title: "Button with Custom Props",
    description:
      "Demonstrates the Button component with custom variant and size props.",
    component: Button,
    props: {
      variant: "filled",
      size: "lg",
      children: "Large Filled Button",
      leftIcon: "add",
    },
  },
};

export const WithInteractiveStorybookDocs: Story = {
  args: {
    title: "Button with Interactive Docs",
    description:
      "This component automatically shows interactive Storybook documentation when stories are provided.",
    component: Button,
    props: { variant: "primary", size: "md", children: "Click me" },
    stories: buttonStories,
    // No need to specify storybookUrl or storyId - they're auto-inferred!
  },
};

export const StorybookViewModes: Story = {
  args: {
    title: "Button with Different View Modes",
    description:
      "Demonstrates different Storybook view modes for the same component.",
    component: Button,
    props: { variant: "secondary", size: "lg", children: "Secondary Button" },
    stories: buttonStories,
    storybookViewMode: "docs", // Defaults to 'docs' for interactive documentation
  },
};

export const CompleteDocumentationPage: Story = {
  args: {
    title: "Complete Component Documentation",
    description:
      "A comprehensive documentation page that automatically embeds interactive Storybook docs.",
    component: Button,
    props: {
      variant: "outline",
      size: "sm",
      children: "Documentation Example",
    },
    stories: buttonStories,
    showCode: true,
    showProps: true,
    showStories: true,
    // The component will automatically:
    // 1. Infer storybookUrl from window.location.origin + '/storybook'
    // 2. Generate storyId from the stories component name
    // 3. Default to 'docs' view mode for interactive documentation
  },
};

export const MinimalDisplay: Story = {
  args: {
    title: "Minimal Component Display",
    description: "Shows only the preview without additional tabs.",
    component: Button,
    props: { children: "Minimal Button" },
    showCode: false,
    showProps: false,
    showStories: false,
  },
};

export const CustomStorybookConfig: Story = {
  args: {
    title: "Custom Storybook Configuration",
    description:
      "Demonstrates custom Storybook URL and story ID configuration.",
    component: Button,
    props: { variant: "light", children: "Custom Config Button" },
    stories: buttonStories,
    storybookUrl: "https://custom-storybook.example.com",
    storyId: "custom-button-story",
    storybookViewMode: "canvas",
  },
};

export const LargeComponentHandling: Story = {
  args: {
    title: "Large Component Handling",
    description:
      "Demonstrates how large overlay components like Modal and Drawer are handled with a button to open them instead of rendering directly.",
    component: Modal,
    props: {
      title: "Example Modal",
      children:
        "This is the modal content that appears when you click the button.",
      showFooter: true,
      primaryText: "Confirm",
      secondaryText: "Cancel",
    },
  },
};

export const DrawerComponentHandling: Story = {
  args: {
    title: "Drawer Component Handling",
    description:
      "Shows how the Drawer component is handled in the preview - with a button to open it instead of rendering the full overlay.",
    component: Drawer,
    props: {
      title: "Example Drawer",
      children: "This drawer slides in from the right when opened.",
      direction: "right",
    },
  },
};
