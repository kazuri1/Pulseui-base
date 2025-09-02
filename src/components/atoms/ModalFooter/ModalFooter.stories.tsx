import type { Meta, StoryObj } from "@storybook/react";
// import { userEvent, within, expect } from "@storybook/test";
import { ModalFooter } from "./ModalFooter";
import { Button } from "../Button";

const meta: Meta<typeof ModalFooter> = {
  title: "Atoms/ModalFooter",
  component: ModalFooter,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "A footer component for modals with three variants: button-only, primary, and destructive.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["button-only", "primary", "destructive"],
      description: "Footer variant style",
    },
    primaryText: {
      control: { type: "text" },
      description: "Primary button text",
    },
    secondaryText: {
      control: { type: "text" },
      description: "Secondary button text",
    },
    primaryDisabled: {
      control: { type: "boolean" },
      description: "Whether the primary button is disabled",
    },
    secondaryDisabled: {
      control: { type: "boolean" },
      description: "Whether the secondary button is disabled",
    },
    primaryLoading: {
      control: { type: "boolean" },
      description: "Whether the primary button is loading",
    },
    secondaryLoading: {
      control: { type: "boolean" },
      description: "Whether the secondary button is loading",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Stories section
export const ButtonOnlyVariant: Story = {
  args: {
    variant: "button-only",
    children: (
      <>
        <Button variant="filled" size="md">
          Save Changes
        </Button>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          "ModalFooter with button-only variant. Use this when you want to display custom content or a single button.",
      },
    },
  },
};

export const PrimaryVariant: Story = {
  args: {
    variant: "primary",
    primaryText: "Save",
    secondaryText: "Cancel",
    onPrimaryClick: () => {},
    onSecondaryClick: () => {},
  },
  parameters: {
    docs: {
      description: {
        story:
          "ModalFooter with primary variant. Shows a default (Cancel) button and a filled (OK) button.",
      },
    },
  },
};

export const DestructiveVariant: Story = {
  args: {
    variant: "destructive",
    primaryText: "Delete",
    secondaryText: "Cancel",
    onPrimaryClick: () => {},
    onSecondaryClick: () => {},
  },
  parameters: {
    docs: {
      description: {
        story:
          "ModalFooter with destructive variant. Shows a default (Cancel) button and a filled error (Delete) button.",
      },
    },
  },
};

export const DisabledButtons: Story = {
  args: {
    variant: "primary",
    primaryText: "Save",
    secondaryText: "Cancel",
    primaryDisabled: true,
    secondaryDisabled: false,
    onPrimaryClick: () => {},
    onSecondaryClick: () => {},
  },
  parameters: {
    docs: {
      description: {
        story: "ModalFooter with disabled primary button.",
      },
    },
  },
};

export const CustomButtonProps: Story = {
  args: {
    variant: "primary",
    primaryText: "Confirm",
    secondaryText: "Back",
    primaryButtonProps: {
      size: "lg",
      leftIcon: "add",
    },
    secondaryButtonProps: {
      size: "lg",
      variant: "outline",
    },
    onPrimaryClick: () => {},
    onSecondaryClick: () => {},
  },
  parameters: {
    docs: {
      description: {
        story: "ModalFooter with custom button props for size and icons.",
      },
    },
  },
};

