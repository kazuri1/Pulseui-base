import type { Meta, StoryObj } from "@storybook/react";
import { ContentCard } from "./ContentCard";

const meta: Meta<typeof ContentCard> = {
  title: "Atoms/ContentCard",
  component: ContentCard,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A content card component for displaying blog posts, articles, or any content with an image, title, description, date, and author information. Built with PulseUI design system and supports multiple sizes and interactive states.",
      },
    },
  },
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "Size variant of the content card",
    },
    onClick: {
      action: "clicked",
      description: "Click handler for the card",
    },
    imageUrl: {
      control: { type: "text" },
      description: "URL of the featured image",
    },
    imageAlt: {
      control: { type: "text" },
      description: "Alt text for accessibility",
    },
    date: {
      control: { type: "text" },
      description: "Publication date",
    },
    title: {
      control: { type: "text" },
      description: "Article title",
    },
    description: {
      control: { type: "text" },
      description: "Article description/excerpt",
    },
    authorName: {
      control: { type: "text" },
      description: "Author's name",
    },
    authorRole: {
      control: { type: "text" },
      description: "Author's role/title",
    },
    authorImageUrl: {
      control: { type: "text" },
      description: "Author's profile image URL",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data for stories
const sampleData = {
  imageUrl:
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&crop=center",
  imageAlt: "Balanced stones on a beach",
  date: "May 15, 2023",
  title: "Power of Design Systems",
  description:
    "Discover how a well-structured design system can transform your workflow, boost team efficiency, and help overcome design inconsistencies. Explore practical tips and techniques to build and maintain a cohesive design language for greater user experience and product success.",
  authorName: "Vignesh Vishnumoorthy",
  authorRole: "UX Design Engineer",
  authorImageUrl: undefined,
};

export const Default: Story = {
  args: {
    ...sampleData,
    size: "md",
  },
};

export const Small: Story = {
  args: {
    ...sampleData,
    size: "sm",
  },
};

export const Large: Story = {
  args: {
    ...sampleData,
    size: "lg",
  },
};

export const WithClickHandler: Story = {
  args: {
    ...sampleData,
    size: "md",
    onClick: () => alert("Content card clicked!"),
  },
};

export const TechnologyArticle: Story = {
  args: {
    imageUrl:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop&crop=center",
    imageAlt: "Modern technology workspace",
    date: "June 22, 2023",
    title: "The Future of Web Development",
    description:
      "Explore the latest trends in web development, from AI-powered tools to modern frameworks. Learn how to stay ahead of the curve and build better applications for tomorrow's users.",
    authorName: "Vignesh Vishnumoorthy",
    authorRole: "UX Design Engineer",
    authorImageUrl: undefined,
    size: "md",
  },
};

export const TravelBlog: Story = {
  args: {
    imageUrl:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop&crop=center",
    imageAlt: "Scenic mountain landscape",
    date: "July 8, 2023",
    title: "Adventures in the Himalayas",
    description:
      "Join us on an incredible journey through the majestic Himalayas. From breathtaking mountain views to local culture, discover the beauty and challenges of high-altitude trekking.",
    authorName: "Vignesh Vishnumoorthy",
    authorRole: "UX Design Engineer",
    authorImageUrl: undefined,
    size: "md",
  },
};

export const BusinessInsights: Story = {
  args: {
    imageUrl:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop&crop=center",
    imageAlt: "Business meeting in modern office",
    date: "August 12, 2023",
    title: "Building Successful Remote Teams",
    description:
      "Learn the essential strategies for building and managing successful remote teams. From communication tools to team building activities, discover how to maintain productivity and engagement in a distributed work environment.",
    authorName: "Vignesh Vishnumoorthy",
    authorRole: "UX Design Engineer",
    authorImageUrl: undefined,
    size: "md",
  },
};

export const WithoutAuthorImage: Story = {
  args: {
    ...sampleData,
    authorImageUrl: undefined,
    size: "md",
  },
};

export const LongTitle: Story = {
  args: {
    ...sampleData,
    title:
      "This is a Very Long Article Title That Demonstrates How the Component Handles Extended Text Content and Maintains Proper Layout",
    size: "md",
  },
};

export const LongDescription: Story = {
  args: {
    ...sampleData,
    description:
      "This is a much longer description that demonstrates how the ContentCard component handles extended text content. It shows the proper line height, spacing, and text wrapping to ensure readability while maintaining the overall design aesthetic. The component gracefully adapts to different content lengths and provides an optimal reading experience for users.",
    size: "md",
  },
};
