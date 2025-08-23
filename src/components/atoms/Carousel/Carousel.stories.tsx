import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Carousel } from "./Carousel";
import { Card } from "../Card/Card";
import { Text } from "../Text/Text";
import { Badge } from "../Badge/Badge";

const meta: Meta<typeof Carousel> = {
  title: "Components/Atoms/Carousel",
  component: Carousel,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A carousel component that can display slides with optional Card wrapping, navigation arrows, and dot indicators. Now supports image-only mode, compact spacing, and enhanced accessibility features including keyboard navigation and screen reader support.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    showDots: {
      control: "boolean",
      description: "Whether to show navigation dots",
    },
    showArrows: {
      control: "boolean",
      description: "Whether to show navigation arrows",
    },
    useCards: {
      control: "boolean",
      description: "Whether to wrap each slide in a Card component",
    },
    cardTitles: {
      control: "object",
      description: "Array of titles for each card (when useCards is true)",
    },
    cardDescriptions: {
      control: "object",
      description:
        "Array of descriptions for each card (when useCards is true)",
    },
    cardImages: {
      control: "object",
      description: "Array of image URLs for each card (when useCards is true)",
    },
    imageOnly: {
      control: "boolean",
      description: "Whether to show only images (hide card content)",
    },
    compact: {
      control: "boolean",
      description: "Whether to use compact spacing between slides",
    },
    ariaLabel: {
      control: "text",
      description: "Accessibility label for the carousel",
    },
    enableKeyboard: {
      control: "boolean",
      description:
        "Whether to enable keyboard navigation (Arrow keys, Home, End)",
    },
    autoPlay: {
      control: "number",
      description: "Auto-play interval in milliseconds (0 to disable)",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample content for slides
const sampleContent = [
  {
    title: "First Slide",
    description: "This is the first slide with some interesting content.",
    image: "https://picsum.photos/400/200?random=1",
    content: (
      <>
        <Text variant="md" color="secondary">
          Additional content can go here. This could be any React component or
          text.
        </Text>
        <Badge variant="filled" size="sm">
          New
        </Badge>
      </>
    ),
  },
  {
    title: "Second Slide",
    description: "Another slide with different content and styling.",
    image: "https://picsum.photos/400/200?random=2",
    content: (
      <>
        <Text variant="md" color="secondary">
          More content for the second slide. The carousel supports rich content.
        </Text>
        <Badge variant="outline" size="sm">
          Featured
        </Badge>
      </>
    ),
  },
  {
    title: "Third Slide",
    description: "The final slide demonstrating the carousel capabilities.",
    image: "https://picsum.photos/400/200?random=3",
    content: (
      <>
        <Text variant="md" color="secondary">
          Final slide content. You can navigate between slides using arrows or
          dots.
        </Text>
        <Badge variant="light" size="sm">
          Popular
        </Badge>
      </>
    ),
  },
];

export const Default: Story = {
  args: {
    showDots: true,
    showArrows: true,
    useCards: true,
    cardTitles: sampleContent.map((item) => item.title),
    cardDescriptions: sampleContent.map((item) => item.description),
    cardImages: sampleContent.map((item) => item.image),
    children: sampleContent.map((item) => item.content),
    imageOnly: false,
    compact: false,
    ariaLabel: "Sample carousel with full content",
    enableKeyboard: true,
    autoPlay: 0,
  },
};

export const ImageOnly: Story = {
  args: {
    showDots: true,
    showArrows: true,
    useCards: true,
    cardTitles: sampleContent.map((item) => item.title),
    cardDescriptions: sampleContent.map((item) => item.description),
    cardImages: sampleContent.map((item) => item.image),
    children: sampleContent.map((item) => item.content),
    imageOnly: true,
    compact: false,
    ariaLabel: "Image gallery carousel",
    enableKeyboard: true,
    autoPlay: 0,
  },
};

export const Compact: Story = {
  args: {
    showDots: true,
    showArrows: true,
    useCards: true,
    cardTitles: sampleContent.map((item) => item.title),
    cardDescriptions: sampleContent.map((item) => item.description),
    cardImages: sampleContent.map((item) => item.image),
    children: sampleContent.map((item) => item.content),
    imageOnly: false,
    compact: true,
    ariaLabel: "Compact carousel layout",
    enableKeyboard: true,
    autoPlay: 0,
  },
};

export const ImageOnlyCompact: Story = {
  args: {
    showDots: true,
    showArrows: true,
    useCards: true,
    cardTitles: sampleContent.map((item) => item.title),
    cardDescriptions: sampleContent.map((item) => item.description),
    cardImages: sampleContent.map((item) => item.image),
    children: sampleContent.map((item) => item.content),
    imageOnly: true,
    compact: true,
    ariaLabel: "Compact image gallery",
    enableKeyboard: true,
    autoPlay: 0,
  },
};

export const AccessibilityFocused: Story = {
  args: {
    showDots: true,
    showArrows: true,
    useCards: true,
    cardTitles: sampleContent.map((item) => item.title),
    cardDescriptions: sampleContent.map((item) => item.description),
    cardImages: sampleContent.map((item) => item.image),
    children: sampleContent.map((item) => item.content),
    imageOnly: false,
    compact: false,
    ariaLabel: "Accessible carousel with enhanced navigation",
    enableKeyboard: true,
    autoPlay: 0,
  },
  parameters: {
    docs: {
      description: {
        story:
          "This carousel demonstrates all accessibility features including keyboard navigation (Arrow keys, Home, End), proper ARIA labels, and screen reader support.",
      },
    },
  },
};

export const AutoPlay: Story = {
  args: {
    showDots: true,
    showArrows: true,
    useCards: true,
    cardTitles: sampleContent.map((item) => item.title),
    cardDescriptions: sampleContent.map((item) => item.description),
    cardImages: sampleContent.map((item) => item.image),
    children: sampleContent.map((item) => item.content),
    imageOnly: true,
    compact: true,
    ariaLabel: "Auto-playing image carousel",
    enableKeyboard: true,
    autoPlay: 3000,
  },
  parameters: {
    docs: {
      description: {
        story:
          "This carousel auto-advances every 3 seconds. Users can still navigate manually using arrows, dots, or keyboard.",
      },
    },
  },
};

export const WithoutCards: Story = {
  args: {
    showDots: true,
    showArrows: true,
    useCards: false,
    children: [
      <div
        key="1"
        style={{
          padding: "2rem",
          textAlign: "center",
          backgroundColor: "var(--color-surface-1)",
          borderRadius: "var(--radius-lg)",
        }}
      >
        <Text variant="xl" weight="bold">
          Simple Slide 1
        </Text>
        <Text variant="md" color="secondary">
          No card wrapper
        </Text>
      </div>,
      <div
        key="2"
        style={{
          padding: "2rem",
          textAlign: "center",
          backgroundColor: "var(--color-surface-2)",
          borderRadius: "var(--radius-lg)",
        }}
      >
        <Text variant="xl" weight="bold">
          Simple Slide 2
        </Text>
        <Text variant="md" color="secondary">
          Direct content
        </Text>
      </div>,
      <div
        key="3"
        style={{
          padding: "2rem",
          textAlign: "center",
          backgroundColor: "var(--color-surface-3)",
          borderRadius: "var(--radius-lg)",
        }}
      >
        <Text variant="xl" weight="bold">
          Simple Slide 3
        </Text>
        <Text variant="md" color="secondary">
          Custom styling
        </Text>
      </div>,
    ],
    ariaLabel: "Simple content carousel",
    enableKeyboard: true,
    autoPlay: 0,
  },
};

export const NoArrows: Story = {
  args: {
    showDots: true,
    showArrows: false,
    useCards: true,
    cardTitles: sampleContent.map((item) => item.title),
    cardDescriptions: sampleContent.map((item) => item.description),
    cardImages: sampleContent.map((item) => item.image),
    children: sampleContent.map((item) => item.content),
    imageOnly: true,
    compact: true,
    ariaLabel: "Dot navigation only carousel",
    enableKeyboard: true,
    autoPlay: 0,
  },
};

export const NoDots: Story = {
  args: {
    showDots: false,
    showArrows: true,
    useCards: true,
    cardTitles: sampleContent.map((item) => item.title),
    cardDescriptions: sampleContent.map((item) => item.description),
    cardImages: sampleContent.map((item) => item.image),
    children: sampleContent.map((item) => item.content),
    imageOnly: true,
    compact: true,
    ariaLabel: "Arrow navigation only carousel",
    enableKeyboard: true,
    autoPlay: 0,
  },
};

export const SingleSlide: Story = {
  args: {
    showDots: false,
    showArrows: false,
    useCards: true,
    cardTitles: ["Single Slide"],
    cardDescriptions: [
      "This carousel has only one slide, so no navigation is shown.",
    ],
    cardImages: ["https://picsum.photos/400/200?random=4"],
    children: [
      <Text variant="md" color="secondary">
        When there's only one slide, the carousel automatically hides navigation
        elements.
      </Text>,
    ],
    imageOnly: true,
    compact: true,
    ariaLabel: "Single slide carousel",
    enableKeyboard: false,
    autoPlay: 0,
  },
};
