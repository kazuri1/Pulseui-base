import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within, expect } from "@storybook/test";
import { Card } from "./Card";
import { ThemeProvider } from "../../ThemeProvider/ThemeProvider";
import { ThemeToggle } from "../ThemeToggle/ThemeToggle";
import { useTheme } from "../../../contexts/ThemeContext";

// Theme-aware wrapper component
const ThemeWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider defaultTheme="default-light">
      <div
        style={{
          padding: "2rem",
          backgroundColor: "var(--color-surface-50)",
          minHeight: "100vh",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "2rem",
            padding: "1rem",
            backgroundColor: "var(--color-surface-100)",
            borderRadius: "var(--radius-lg)",
            border: "1px solid var(--color-border-light)",
          }}
        >
          <div>
            <h2
              style={{
                margin: 0,
                color: "var(--color-text-primary)",
                fontSize: "var(--typography-h2-fontSize)",
              }}
            >
              Card Component Stories
            </h2>
            <p
              style={{
                margin: "0.5rem 0 0 0",
                color: "var(--color-text-secondary)",
                fontSize: "var(--typography-bodySmall-fontSize)",
              }}
            >
              Switch themes to see how cards adapt automatically
            </p>
          </div>
          <ThemeToggle showLabel={true} size="md" variant="outline" />
        </div>
        {children}
      </div>
    </ThemeProvider>
  );
};

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <ThemeWrapper>
        <Story />
      </ThemeWrapper>
    ),
  ],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "image-overlay"],
    },
    badgeVariant: {
      control: { type: "select" },
      options: [
        "dot",
        "filled",
        "subtle",
        "light",
        "outline",
        "white",
        "default",
      ],
    },
    buttonVariant: {
      control: { type: "select" },
      options: ["filled", "subtle", "light", "outline", "white", "default"],
    },
    buttonSize: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg", "xl"],
    },
    imageFit: {
      control: { type: "select" },
      options: ["fill", "contain", "cover", "none", "scale-down"],
    },
    showImage: {
      control: { type: "boolean" },
    },
    showTitle: {
      control: { type: "boolean" },
    },
    showBadge: {
      control: { type: "boolean" },
    },
    showDescription: {
      control: { type: "boolean" },
    },
    showButton: {
      control: { type: "boolean" },
    },
    clickable: {
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
    title: "Card Title",
    description: "This is a description of the card content.",
    buttonText: "Learn More",
    imageSrc:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop",
    imageAlt: "Mountain landscape",
  },
};

export const ImageOverlay: Story = {
  args: {
    variant: "image-overlay",
    title: "Beautiful Landscape",
    description:
      "A stunning mountain landscape with snow-capped peaks and clear blue skies.",
    imageSrc:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    imageAlt: "Mountain landscape",
  },
};

export const WithBadge: Story = {
  args: {
    title: "Card Title",
    badge: "NEW",
    badgeVariant: "filled",
    description: "This card has a badge to highlight important information.",
    buttonText: "View Details",
    imageSrc:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop",
    imageAlt: "Mountain landscape",
  },
};

export const WithoutImage: Story = {
  args: {
    title: "Card Without Image",
    badge: "FEATURED",
    badgeVariant: "subtle",
    description: "This card doesn't have an image but still looks great.",
    buttonText: "Get Started",
    showImage: false,
  },
};

export const ClickableCard: Story = {
  args: {
    title: "Clickable Card",
    description: "This entire card is clickable, not just the button.",
    buttonText: "Primary Action",
    imageSrc:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop",
    imageAlt: "Mountain landscape",
    clickable: true,
    onClick: () => alert("Card clicked!"),
  },
};

export const DisabledCard: Story = {
  args: {
    title: "Disabled Card",
    description: "This card is disabled and cannot be interacted with.",
    buttonText: "Disabled Button",
    imageSrc:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop",
    imageAlt: "Mountain landscape",
    disabled: true,
  },
};

export const AllBadgeVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
      <Card
        title="Dot Badge"
        badge="DOT"
        badgeVariant="dot"
        description="Card with dot badge variant."
        buttonText="Action"
        imageSrc="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop"
        imageAlt="Mountain landscape"
      />
      <Card
        title="Filled Badge"
        badge="FILLED"
        badgeVariant="filled"
        description="Card with filled badge variant."
        buttonText="Action"
        imageSrc="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop"
        imageAlt="Mountain landscape"
      />
      <Card
        title="Subtle Badge"
        badge="SUBTLE"
        badgeVariant="subtle"
        description="Card with subtle badge variant."
        buttonText="Action"
        imageSrc="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop"
        imageAlt="Mountain landscape"
      />
      <Card
        title="Outline Badge"
        badge="OUTLINE"
        badgeVariant="outline"
        description="Card with outline badge variant."
        buttonText="Action"
        imageSrc="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop"
        imageAlt="Mountain landscape"
      />
    </div>
  ),
};

export const AllButtonVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
      <Card
        title="Filled Button"
        description="Card with filled button variant."
        buttonText="Filled"
        buttonVariant="filled"
        imageSrc="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop"
        imageAlt="Mountain landscape"
      />
      <Card
        title="Subtle Button"
        description="Card with subtle button variant."
        buttonText="Subtle"
        buttonVariant="subtle"
        imageSrc="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop"
        imageAlt="Mountain landscape"
      />
      <Card
        title="Outline Button"
        description="Card with outline button variant."
        buttonText="Outline"
        buttonVariant="outline"
        imageSrc="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop"
        imageAlt="Mountain landscape"
      />
      <Card
        title="Light Button"
        description="Card with light button variant."
        buttonText="Light"
        buttonVariant="light"
        imageSrc="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop"
        imageAlt="Mountain landscape"
      />
    </div>
  ),
};

export const DifferentImageFits: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
      <Card
        title="Cover Fit"
        description="Image with cover fit mode."
        buttonText="View"
        imageSrc="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop"
        imageAlt="Mountain landscape"
        imageFit="cover"
      />
      <Card
        title="Contain Fit"
        description="Image with contain fit mode."
        buttonText="View"
        imageSrc="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop"
        imageAlt="Mountain landscape"
        imageFit="contain"
      />
      <Card
        title="Rounded Image"
        description="Image with border radius."
        buttonText="View"
        imageSrc="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop"
        imageAlt="Mountain landscape"
        imageRadius={16}
      />
    </div>
  ),
};

export const BooleanControls: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
      <Card
        title="Full Card"
        badge="NEW"
        description="This card shows all elements."
        buttonText="Action"
        imageSrc="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop"
        imageAlt="Mountain landscape"
        showTitle={true}
        showBadge={true}
        showDescription={true}
        showButton={true}
        showImage={true}
      />
      <Card
        title="No Title"
        badge="NEW"
        description="This card hides the title."
        buttonText="Action"
        imageSrc="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop"
        imageAlt="Mountain landscape"
        showTitle={false}
        showBadge={true}
        showDescription={true}
        showButton={true}
        showImage={true}
      />
      <Card
        title="No Badge"
        description="This card hides the badge."
        buttonText="Action"
        imageSrc="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop"
        imageAlt="Mountain landscape"
        showTitle={true}
        showBadge={false}
        showDescription={true}
        showButton={true}
        showImage={true}
      />
      <Card
        title="No Description"
        badge="NEW"
        buttonText="Action"
        imageSrc="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop"
        imageAlt="Mountain landscape"
        showTitle={true}
        showBadge={true}
        showDescription={false}
        showButton={true}
        showImage={true}
      />
      <Card
        title="No Button"
        badge="NEW"
        description="This card hides the button."
        imageSrc="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop"
        imageAlt="Mountain landscape"
        showTitle={true}
        showBadge={true}
        showDescription={true}
        showButton={false}
        showImage={true}
      />
      <Card
        title="Image Only"
        badge="NEW"
        description="This card hides the image."
        buttonText="Action"
        imageSrc="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop"
        imageAlt="Mountain landscape"
        showTitle={true}
        showBadge={true}
        showDescription={true}
        showButton={true}
        showImage={false}
      />
    </div>
  ),
};

export const WithCustomContent: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
      <Card
        title="Product Card"
        badge="SALE"
        description="High-quality product with custom content."
        buttonText="Buy Now"
        imageSrc="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop"
        imageAlt="Product image"
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              color: "var(--color-primary-6)",
            }}
          >
            $99.99
          </span>
          <span
            style={{
              color: "var(--color-text-secondary)",
              textDecoration: "line-through",
            }}
          >
            $129.99
          </span>
        </div>
        <div style={{ marginTop: "8px" }}>
          <span style={{ color: "var(--color-success-6)", fontSize: "14px" }}>
            ✓ In Stock
          </span>
        </div>
      </Card>

      <Card
        title="User Profile"
        description="User information with custom stats."
        buttonText="View Profile"
        imageSrc="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop"
        imageAlt="User avatar"
      >
        <div
          style={{
            display: "flex",
            gap: "16px",
            justifyContent: "space-around",
          }}
        >
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "18px", fontWeight: "bold" }}>1.2k</div>
            <div
              style={{ fontSize: "12px", color: "var(--color-text-secondary)" }}
            >
              Followers
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "18px", fontWeight: "bold" }}>348</div>
            <div
              style={{ fontSize: "12px", color: "var(--color-text-secondary)" }}
            >
              Following
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "18px", fontWeight: "bold" }}>156</div>
            <div
              style={{ fontSize: "12px", color: "var(--color-text-secondary)" }}
            >
              Posts
            </div>
          </div>
        </div>
      </Card>

      <Card
        title="Task List"
        description="Project tasks with custom progress."
        buttonText="View All"
        showImage={false}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>Design Review</span>
            <span style={{ color: "var(--color-success-6)" }}>✓ Complete</span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>Frontend Development</span>
            <span style={{ color: "var(--color-primary-6)" }}>In Progress</span>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>Backend API</span>
            <span style={{ color: "var(--color-warning-6)" }}>Pending</span>
          </div>
        </div>
      </Card>
    </div>
  ),
};

// New story to showcase theme switching
export const ThemeShowcase: Story = {
  render: () => {
    const ThemeAwareCard = () => {
      const { isDark, themeMode } = useTheme();

      return (
        <div
          style={{
            padding: "2rem",
            backgroundColor: "var(--color-surface-50)",
            borderRadius: "var(--radius-lg)",
            border: "1px solid var(--color-border-medium)",
          }}
        >
          <h3
            style={{
              color: "var(--color-text-primary)",
              marginBottom: "1rem",
            }}
          >
            Theme-Aware Card Demo
          </h3>
          <p
            style={{
              color: "var(--color-text-secondary)",
              marginBottom: "2rem",
            }}
          >
            Current theme: <strong>{themeMode}</strong> (
            {isDark ? "Dark" : "Light"})
          </p>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <Card
              title="Light Theme Card"
              description="This card automatically adapts to the current theme."
              buttonText="Theme Aware"
              imageSrc="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=200&fit=crop"
              imageAlt="Theme demo"
            />

            <Card
              title="Custom Styled Card"
              description="Using theme variables for custom styling."
              buttonText="Custom Style"
              showImage={false}
              sx={{
                backgroundColor: "surface",
                border: "2px solid var(--color-primary-3)",
                borderRadius: "xl",
              }}
            />
          </div>

          <div
            style={{
              marginTop: "2rem",
              padding: "1rem",
              backgroundColor: "var(--color-surface-100)",
              borderRadius: "var(--radius-md)",
              border: "1px solid var(--color-border-light)",
            }}
          >
            <h4
              style={{
                color: "var(--color-text-primary)",
                marginBottom: "0.5rem",
              }}
            >
              Theme Information
            </h4>
            <ul
              style={{
                color: "var(--color-text-secondary)",
                fontSize: "var(--typography-bodySmall-fontSize)",
                margin: 0,
                paddingLeft: "1.5rem",
              }}
            >
              <li>
                Background: <code>var(--color-surface-50)</code>
              </li>
              <li>
                Text: <code>var(--color-text-primary)</code>
              </li>
              <li>
                Border: <code>var(--color-border-medium)</code>
              </li>
              <li>
                Primary: <code>var(--color-primary-6)</code>
              </li>
            </ul>
          </div>
        </div>
      );
    };

    return <ThemeAwareCard />;
  },
};
