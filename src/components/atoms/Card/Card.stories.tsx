import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import { Text } from "../Text";
import { Button } from "../Button";
import { Badge } from "../Badge";
import { Avatar } from "../Avatar";
import { Icon } from "../Icon";
import { Favorite, Message, Share } from "../Icon/IconSet";

const meta: Meta<typeof Card> = {
  title: "Atoms/Card",
  component: Card,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A flexible card component for displaying content with various layouts and styles.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "image-overlay"],
      description: "Visual style variant of the card",
    },
    badgeVariant: {
      control: "select",
      options: [
        "dot",
        "filled",
        "subtle",
        "light",
        "outline",
        "white",
        "default",
      ],
      description: "Badge style variant",
    },
    buttonVariant: {
      control: "select",
      options: ["filled", "subtle", "light", "outline", "white", "default"],
      description: "Button style variant",
    },
    buttonSize: {
      control: "select",
      options: ["xs", "sm", "md", "lg", "xl"],
      description: "Button size",
    },
    imageFit: {
      control: "select",
      options: ["fill", "contain", "cover", "none", "scale-down"],
      description: "Image fit mode",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Default Card",
    description: "This is a basic card with default styling.",
    buttonText: "Action",
    imageSrc: "https://via.placeholder.com/300x200",
    imageAlt: "Placeholder image",
  },
};

export const WithCustomContent: Story = {
  args: {
    title: "Custom Content Card",
    description: "This card demonstrates custom content layout.",
    buttonText: "Learn More",
    imageSrc: "https://via.placeholder.com/400x250",
    imageAlt: "Custom content image",
  },
  render: (args) => (
    <Card {...args}>
      <div style={{ padding: "16px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "12px",
          }}
        >
          <Avatar size="sm" src="https://via.placeholder.com/40" alt="User" />
          <div style={{ marginLeft: "12px" }}>
            <Text variant="sm" weight="medium">
              John Doe
            </Text>
            <Text variant="xs" color="muted">
              Posted 2 hours ago
            </Text>
          </div>
        </div>

        <Text variant="md" style={{ marginBottom: "16px" }}>
          This card showcases custom content with avatars, badges, and
          interactive elements.
        </Text>

        <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
          <Badge variant="filled" size="sm">
            React
          </Badge>
          <Badge variant="subtle" size="sm">
            TypeScript
          </Badge>
          <Badge variant="light" size="sm">
            Storybook
          </Badge>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", gap: "16px" }}>
            <Button variant="subtle" size="sm" leftIcon="none">
              <Icon icon={Favorite} size="sm" />
              Like
            </Button>
            <Button variant="subtle" size="sm" leftIcon="none">
              <Icon icon={Message} size="sm" />
              Comment
            </Button>
            <Button variant="subtle" size="sm" leftIcon="none">
              <Icon icon={Share} size="sm" />
              Share
            </Button>
          </div>
          <Button variant="filled" size="sm">
            {args.buttonText}
          </Button>
        </div>
      </div>
    </Card>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
      <Card
        variant="default"
        title="Default Variant"
        description="Standard card appearance"
        buttonText="Action"
        style={{ width: "250px" }}
      />

      <Card
        variant="image-overlay"
        title="Image Overlay Variant"
        description="Card with image overlay styling"
        buttonText="Action"
        imageSrc="https://via.placeholder.com/250x150"
        imageAlt="Overlay variant demo"
        style={{ width: "250px" }}
      />
    </div>
  ),
};

export const ResponsiveLayout: Story = {
  render: () => (
    <div style={{ maxWidth: "800px" }}>
      <Card
        title="Responsive Card Layout"
        description="This card demonstrates responsive behavior and adapts to different screen sizes."
        buttonText="View Details"
        imageSrc="https://via.placeholder.com/600x300"
        imageAlt="Responsive layout demo"
        style={{ width: "100%" }}
      />
    </div>
  ),
  parameters: {
    viewport: {
      defaultViewport: "responsive",
    },
  },
};

export const InteractiveElements: Story = {
  render: () => (
      <Card
      title="Interactive Card"
      description="This card includes various interactive elements and hover effects."
      buttonText="Primary Action"
      imageSrc="https://via.placeholder.com/350x200"
      imageAlt="Interactive demo"
    >
      <div style={{ padding: "16px" }}>
        <div style={{ display: "flex", gap: "8px", marginBottom: "16px" }}>
          <Button variant="outline" size="sm">
            Secondary
          </Button>
          <Button variant="subtle" size="sm">
            Tertiary
          </Button>
    </div>

        <Text variant="sm" color="muted">
          Hover over buttons and card elements to see interactive states.
        </Text>
    </div>
    </Card>
  ),
};

export const AccessibilityDemo: Story = {
  render: () => (
      <Card
      title="Accessibility Features"
      description="This card demonstrates proper accessibility practices including ARIA labels and keyboard navigation."
      buttonText="Accessible Action"
      imageSrc="https://via.placeholder.com/300x180"
      imageAlt="Accessibility demonstration"
    >
      <div style={{ padding: "16px" }}>
        <Text variant="sm">
          This card includes proper semantic HTML, ARIA labels, and keyboard
          navigation support.
        </Text>

        <div style={{ marginTop: "16px" }}>
          <Button
            variant="filled"
            size="sm"
            aria-label="Primary action button for accessibility demo"
          >
            Accessible Action
          </Button>
          </div>
        </div>
      </Card>
  ),
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            id: "button-name",
            enabled: true,
          },
        ],
      },
    },
  },
};
