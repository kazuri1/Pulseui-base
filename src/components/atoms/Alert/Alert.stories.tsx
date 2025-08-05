import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "./Alert";

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["info", "success", "warning", "error"],
    },
    styleVariant: {
      control: { type: "select" },
      options: [
        "default",
        "filled",
        "light",
        "outline",
        "transparent",
        "white",
      ],
    },
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    closeable: {
      control: { type: "boolean" },
    },
    visible: {
      control: { type: "boolean" },
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Simple: Story = {
  args: {
    children: "This is a simple alert without any complex styling.",
    variant: "info",
    styleVariant: "default",
    size: "md",
  },
};

export const Default: Story = {
  args: {
    title: "Alert title",
    children:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. At officiis, quae tempore necessitatibus placeat saepe.",
    variant: "info",
    styleVariant: "default",
    size: "md",
    closeable: false,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Alert variant="info" title="Information">
        This is an informational alert with important details.
      </Alert>

      <Alert variant="success" title="Success">
        Your action was completed successfully!
      </Alert>

      <Alert variant="warning" title="Warning">
        Please review your input before proceeding.
      </Alert>

      <Alert variant="error" title="Error">
        Something went wrong. Please try again.
      </Alert>
    </div>
  ),
};

export const AllStyles: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div>
        <h4 style={{ marginBottom: "8px" }}>Default Style:</h4>
        <Alert variant="info" styleVariant="default" title="Default Alert">
          This is the default style alert.
        </Alert>
      </div>

      <div>
        <h4 style={{ marginBottom: "8px" }}>Filled Style:</h4>
        <Alert variant="info" styleVariant="filled" title="Filled Alert">
          This is a filled style alert with solid background.
        </Alert>
      </div>

      <div>
        <h4 style={{ marginBottom: "8px" }}>Light Style:</h4>
        <Alert variant="info" styleVariant="light" title="Light Alert">
          This is a light style alert with subtle background.
        </Alert>
      </div>

      <div>
        <h4 style={{ marginBottom: "8px" }}>Outline Style:</h4>
        <Alert variant="info" styleVariant="outline" title="Outline Alert">
          This is an outline style alert with border only.
        </Alert>
      </div>

      <div>
        <h4 style={{ marginBottom: "8px" }}>Transparent Style:</h4>
        <Alert
          variant="info"
          styleVariant="transparent"
          title="Transparent Alert"
        >
          This is a transparent style alert with no background.
        </Alert>
      </div>

      <div>
        <h4 style={{ marginBottom: "8px" }}>White Style:</h4>
        <Alert variant="info" styleVariant="white" title="White Alert">
          This is a white style alert with white background.
        </Alert>
      </div>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <div>
        <h4 style={{ marginBottom: "8px" }}>Extra Small:</h4>
        <Alert size="xs" title="XS Alert">
          Extra small alert message
        </Alert>
      </div>

      <div>
        <h4 style={{ marginBottom: "8px" }}>Small:</h4>
        <Alert size="sm" title="Small Alert">
          Small alert message
        </Alert>
      </div>

      <div>
        <h4 style={{ marginBottom: "8px" }}>Medium:</h4>
        <Alert size="md" title="Medium Alert">
          Medium alert message
        </Alert>
      </div>

      <div>
        <h4 style={{ marginBottom: "8px" }}>Large:</h4>
        <Alert size="lg" title="Large Alert">
          Large alert message
        </Alert>
      </div>

      <div>
        <h4 style={{ marginBottom: "8px" }}>Extra Large:</h4>
        <Alert size="xl" title="XL Alert">
          Extra large alert message
        </Alert>
      </div>
    </div>
  ),
};

export const WithCloseButton: Story = {
  render: () => {
    const [visible, setVisible] = useState(true);

    if (!visible) {
      return (
        <div>
          <p>Alert was closed</p>
          <button onClick={() => setVisible(true)}>Show Alert</button>
        </div>
      );
    }

    return (
      <Alert
        variant="info"
        title="Closeable Alert"
        closeable
        onClose={() => setVisible(false)}
      >
        This alert can be closed by clicking the X button.
      </Alert>
    );
  },
};

export const Interactive: Story = {
  render: () => {
    const [alerts, setAlerts] = useState([
      {
        id: 1,
        variant: "info" as const,
        title: "Info Alert",
        message: "This is an info alert",
      },
      {
        id: 2,
        variant: "success" as const,
        title: "Success Alert",
        message: "This is a success alert",
      },
      {
        id: 3,
        variant: "warning" as const,
        title: "Warning Alert",
        message: "This is a warning alert",
      },
      {
        id: 4,
        variant: "error" as const,
        title: "Error Alert",
        message: "This is an error alert",
      },
    ]);

    const handleClose = (id: number) => {
      setAlerts(alerts.filter((alert) => alert.id !== id));
    };

    return (
      <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {alerts.map((alert) => (
          <Alert
            key={alert.id}
            variant={alert.variant}
            title={alert.title}
            closeable
            onClose={() => handleClose(alert.id)}
          >
            {alert.message}
          </Alert>
        ))}

        {alerts.length === 0 && <p>All alerts have been closed</p>}
      </div>
    );
  },
};

export const Disabled: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Alert variant="info" title="Disabled Alert" disabled>
        This alert is disabled and cannot be closed.
      </Alert>

      <Alert variant="success" title="Disabled Success" disabled closeable>
        This closeable alert is disabled.
      </Alert>
    </div>
  ),
};

export const WithoutTitle: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Alert variant="info">This alert has no title, just a message.</Alert>

      <Alert variant="success">Another alert without a title.</Alert>
    </div>
  ),
};

export const LongContent: Story = {
  render: () => (
    <Alert variant="warning" title="Long Content Alert" closeable>
      This alert contains a very long message that demonstrates how the
      component handles extended content. The text should wrap properly and
      maintain good readability while staying within the alert boundaries. This
      is useful for displaying detailed information or instructions to users.
    </Alert>
  ),
};

export const AllVariantsAndStyles: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
      <div>
        <h3 style={{ marginBottom: "16px" }}>Info Variant - All Styles</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <Alert variant="info" styleVariant="default" title="Default">
            Default info alert
          </Alert>
          <Alert variant="info" styleVariant="filled" title="Filled">
            Filled info alert
          </Alert>
          <Alert variant="info" styleVariant="light" title="Light">
            Light info alert
          </Alert>
          <Alert variant="info" styleVariant="outline" title="Outline">
            Outline info alert
          </Alert>
          <Alert variant="info" styleVariant="transparent" title="Transparent">
            Transparent info alert
          </Alert>
          <Alert variant="info" styleVariant="white" title="White">
            White info alert
          </Alert>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: "16px" }}>Success Variant - All Styles</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <Alert variant="success" styleVariant="default" title="Default">
            Default success alert
          </Alert>
          <Alert variant="success" styleVariant="filled" title="Filled">
            Filled success alert
          </Alert>
          <Alert variant="success" styleVariant="light" title="Light">
            Light success alert
          </Alert>
          <Alert variant="success" styleVariant="outline" title="Outline">
            Outline success alert
          </Alert>
          <Alert
            variant="success"
            styleVariant="transparent"
            title="Transparent"
          >
            Transparent success alert
          </Alert>
          <Alert variant="success" styleVariant="white" title="White">
            White success alert
          </Alert>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: "16px" }}>Warning Variant - All Styles</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <Alert variant="warning" styleVariant="default" title="Default">
            Default warning alert
          </Alert>
          <Alert variant="warning" styleVariant="filled" title="Filled">
            Filled warning alert
          </Alert>
          <Alert variant="warning" styleVariant="light" title="Light">
            Light warning alert
          </Alert>
          <Alert variant="warning" styleVariant="outline" title="Outline">
            Outline warning alert
          </Alert>
          <Alert
            variant="warning"
            styleVariant="transparent"
            title="Transparent"
          >
            Transparent warning alert
          </Alert>
          <Alert variant="warning" styleVariant="white" title="White">
            White warning alert
          </Alert>
        </div>
      </div>

      <div>
        <h3 style={{ marginBottom: "16px" }}>Error Variant - All Styles</h3>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <Alert variant="error" styleVariant="default" title="Default">
            Default error alert
          </Alert>
          <Alert variant="error" styleVariant="filled" title="Filled">
            Filled error alert
          </Alert>
          <Alert variant="error" styleVariant="light" title="Light">
            Light error alert
          </Alert>
          <Alert variant="error" styleVariant="outline" title="Outline">
            Outline error alert
          </Alert>
          <Alert variant="error" styleVariant="transparent" title="Transparent">
            Transparent error alert
          </Alert>
          <Alert variant="error" styleVariant="white" title="White">
            White error alert
          </Alert>
        </div>
      </div>
    </div>
  ),
};

export const CustomStyling: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
      <Alert
        variant="info"
        title="Custom Styled Alert"
        style={{
          backgroundColor: "var(--color-purple-1)",
          color: "var(--color-purple-9)",
          borderColor: "var(--color-purple-3)",
        }}
      >
        This alert has custom styling applied via inline styles.
      </Alert>

      <Alert
        variant="success"
        title="Custom Class Alert"
        className="custom-alert-class"
        style={{ fontStyle: "italic" }}
      >
        This alert has custom className and inline styles applied.
      </Alert>
    </div>
  ),
};
