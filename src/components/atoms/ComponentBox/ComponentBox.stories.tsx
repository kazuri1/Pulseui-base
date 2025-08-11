import type { Meta, StoryObj } from "@storybook/react";
import React, { useState } from "react";
import { ComponentBox } from "./ComponentBox";
import { Button } from "../Button";
import { Badge } from "../Badge";
import { Alert } from "../Alert";
import { Modal } from "../Modal";
import { Icon } from "../Icon";
import { Home, Favorite, Info, Warning, Error } from "../Icon/IconSet";

const meta: Meta<typeof ComponentBox> = {
  title: "Atoms/ComponentBox",
  component: ComponentBox,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "A simple component display box with a centered component area and title below.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
      description: "The title displayed below the component",
    },
    showBorder: {
      control: "boolean",
      description: "Whether to show a border around the component area",
    },
    variant: {
      control: { type: "select" },
      options: ["default", "surface", "secondary"],
      description: "Background color variant for the component area",
    },
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg", "xl"],
      description: "Size of the component box",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Button Component",
    children: <Button variant="filled">Click me</Button>,
  },
};

export const SmallSize: Story = {
  args: {
    title: "Small Badge",
    size: "sm",
    children: <Badge variant="filled">New</Badge>,
  },
};

export const LargeSize: Story = {
  args: {
    title: "Large Icon",
    size: "lg",
    children: <Icon icon={Home} size="xl" />,
  },
};

export const ExtraLargeSize: Story = {
  args: {
    title: "Extra Large Component",
    size: "xl",
    children: (
      <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
        <Icon icon={Favorite} size="xl" />
        <Icon icon={Home} size="xl" />
      </div>
    ),
  },
};

export const WithoutBorder: Story = {
  args: {
    title: "No Border",
    showBorder: false,
    children: <Button variant="outline">No Border Button</Button>,
  },
};

export const SurfaceVariant: Story = {
  args: {
    title: "Surface Background",
    variant: "surface",
    children: <Badge variant="subtle">Surface Badge</Badge>,
  },
};

export const SecondaryVariant: Story = {
  args: {
    title: "Secondary Background",
    variant: "secondary",
    children: <Button variant="light">Light Button</Button>,
  },
};

export const ComplexComponent: Story = {
  args: {
    title: "Complex Component Layout",
    size: "lg",
    children: (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
          <Badge variant="filled">Primary</Badge>
          <Badge variant="subtle">Secondary</Badge>
          <Badge variant="light">Success</Badge>
        </div>
        <Button variant="filled" size="md">
          Action Button
        </Button>
      </div>
    ),
  },
};

export const IconCollection: Story = {
  args: {
    title: "Icon Collection",
    size: "lg",
    children: (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "24px",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <Icon icon={Home} size="lg" />
          <div style={{ fontSize: "12px", marginTop: "8px" }}>Home</div>
        </div>
        <div style={{ textAlign: "center" }}>
          <Icon icon={Info} size="lg" />
          <div style={{ fontSize: "12px", marginTop: "8px" }}>Info</div>
        </div>
        <div style={{ textAlign: "center" }}>
          <Icon icon={Favorite} size="lg" />
          <div style={{ fontSize: "12px", marginTop: "8px" }}>Favorite</div>
        </div>
      </div>
    ),
  },
};

export const AlertComponent: Story = {
  args: {
    title: "Alert Component",
    size: "lg",
    children: (
      <Alert title="Information Alert" variant="info">
        This is an informational alert message that provides important
        information to the user.
      </Alert>
    ),
  },
};

export const WarningAlert: Story = {
  args: {
    title: "Warning Alert",
    size: "lg",
    children: (
      <Alert title="Warning Alert" variant="warning">
        This is a warning alert message that indicates a potential issue.
      </Alert>
    ),
  },
};

export const ErrorAlert: Story = {
  args: {
    title: "Error Alert",
    size: "lg",
    children: (
      <Alert title="Error Alert" variant="error">
        This is an error alert message that indicates a critical problem.
      </Alert>
    ),
  },
};

// Component to handle modal state
const ModalButton: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button variant="filled" onClick={() => setIsModalOpen(true)}>
        Open Modal
      </Button>
      <Modal
        title="Example Modal"
        show={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        showFooter
        primaryText="Confirm"
        secondaryText="Cancel"
        onPrimaryClick={() => setIsModalOpen(false)}
        onSecondaryClick={() => setIsModalOpen(false)}
      >
        <p>This is the modal content that appears when you click the button.</p>
        <p>You can put any content here - forms, text, components, etc.</p>
      </Modal>
    </>
  );
};

export const ModalWithButton: Story = {
  args: {
    title: "Modal Component",
    size: "lg",
    children: <ModalButton />,
  },
};
