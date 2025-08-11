import type { Meta, StoryObj } from "@storybook/react";
import { ProfileCard } from "./ProfileCard";

const meta: Meta<typeof ProfileCard> = {
  title: "Atoms/ProfileCard",
  component: ProfileCard,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A clean, minimalist profile card component that displays user information including avatar, name, email, bio, hashtag, and social statistics. Perfect for user profiles, team member displays, and social media interfaces.",
      },
    },
  },
  argTypes: {
    avatarUrl: {
      control: { type: "text" },
      description: "Profile avatar image URL (defaults to mypic.jpg)",
    },
    avatarAlt: {
      control: { type: "text" },
      description: "Profile avatar alt text for accessibility",
    },
    name: {
      control: { type: "text" },
      description: "Profile name (defaults to 'Vignesh Vishnumoorthy')",
    },
    email: {
      control: { type: "text" },
      description: "Profile email address",
    },
    bio: {
      control: { type: "text" },
      description: "Profile bio/description",
    },
    hashtag: {
      control: { type: "text" },
      description: "Profile hashtag",
    },
    posts: {
      control: { type: "number" },
      description: "Number of posts",
    },
    followers: {
      control: { type: "number" },
      description: "Number of followers",
    },
    following: {
      control: { type: "number" },
      description: "Number of following",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    email: "vignesh@example.com",
    bio: "Crafting beautiful and consistent design systems that empower teams to build amazing products ✨ 🎨",
    hashtag: "#DesignSystem",
    posts: 32,
    followers: 8396,
    following: 720,
  },
};

export const DesignerProfile: Story = {
  args: {
    email: "vignesh@designstudio.com",
    bio: "Creative designer crafting beautiful digital experiences 🎨 ✨",
    hashtag: "#CreativeDesigner",
    posts: 156,
    followers: 12450,
    following: 890,
  },
};

export const DeveloperProfile: Story = {
  args: {
    email: "vignesh@techcorp.com",
    bio: "Full-stack developer building the future one line at a time 💻 🚀",
    hashtag: "#FullStackDev",
    posts: 89,
    followers: 5670,
    following: 234,
  },
};

export const MarketingProfile: Story = {
  args: {
    email: "vignesh@marketingpro.com",
    bio: "Digital marketing strategist helping brands grow online 📈 💡",
    hashtag: "#DigitalMarketing",
    posts: 203,
    followers: 18920,
    following: 1567,
  },
};

export const CustomAvatar: Story = {
  args: {
    avatarUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    avatarAlt: "Custom profile picture",
    email: "vignesh@startup.com",
    bio: "Entrepreneur building innovative solutions for tomorrow 🌟 💼",
    hashtag: "#StartupFounder",
    posts: 45,
    followers: 2340,
    following: 189,
  },
};

export const HighNumbers: Story = {
  args: {
    email: "vignesh@influencer.com",
    bio: "Content creator sharing knowledge and inspiring others 📚 ✨",
    hashtag: "#ContentCreator",
    posts: 1250,
    followers: 125000,
    following: 890,
  },
};
