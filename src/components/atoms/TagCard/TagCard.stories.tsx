import type { Meta, StoryObj } from "@storybook/react";
import { TagCard } from "./TagCard";
import { LocalHospital, Favorite, Star, Tag as TagIcon } from "@mui/icons-material";

const meta: Meta<typeof TagCard> = {
  title: "Atoms/TagCard",
  component: TagCard,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A card component that displays multiple tags in a grid layout. Perfect for organizing and categorizing content with visual tags.",
      },
    },
  },
  argTypes: {
    title: {
      control: { type: "text" },
      description: "Title of the card",
    },
    columns: {
      control: { type: "select" },
      options: [2, 3, 4, 5],
      description: "Number of columns in the grid",
    },
    closable: {
      control: { type: "boolean" },
      description: "Whether to show close buttons on tags",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Sample data for different grid layouts
const sampleTags = [
  { id: 1, text: "Diagnosis", size: "sm", variant: "default" },
  { id: 2, text: "Diagnosis", size: "sm", variant: "selected" },
  { id: 3, text: "Diagnosis", size: "sm", variant: "mint" },
  { id: 4, text: "Diagnosis", size: "sm", variant: "teal" },
  { id: 5, text: "Diagnosis", size: "md", variant: "default" },
  { id: 6, text: "Diagnosis", size: "md", variant: "selected" },
  { id: 7, text: "Diagnosis", size: "md", variant: "mint" },
  { id: 8, text: "Diagnosis", size: "md", variant: "teal" },
  { id: 9, text: "Diagnosis", size: "lg", variant: "default" },
  { id: 10, text: "Diagnosis", size: "lg", variant: "selected" },
  { id: 11, text: "Diagnosis", size: "lg", variant: "mint" },
  { id: 12, text: "Diagnosis", size: "lg", variant: "teal" },
  { id: 13, text: "Diagnosis", size: "xl", variant: "default" },
  { id: 14, text: "Diagnosis", size: "xl", variant: "selected" },
  { id: 15, text: "Diagnosis", size: "xl", variant: "mint" },
  { id: 16, text: "Diagnosis", size: "xl", variant: "teal" },
];

const medicalTags = [
  { id: 1, text: "Cardiology", variant: "default" },
  { id: 2, text: "Neurology", variant: "mint" },
  { id: 3, text: "Oncology", variant: "teal" },
  { id: 4, text: "Pediatrics", variant: "selected" },
  { id: 5, text: "Surgery", variant: "default" },
  { id: 6, text: "Emergency", variant: "mint" },
];

const categoryTags = [
  { id: 1, text: "Technology", icon: Star, variant: "default" },
  { id: 2, text: "Design", icon: Favorite, variant: "mint" },
  { id: 3, text: "Business", icon: TagIcon, variant: "teal" },
  { id: 4, text: "Health", icon: LocalHospital, variant: "selected" },
];

export const Default: Story = {
  args: {
    title: "Medical Tags",
    tags: sampleTags,
    columns: 4,
    closable: true,
  },
};

export const FourColumnGrid: Story = {
  args: {
    title: "4-Column Grid Layout",
    tags: sampleTags,
    columns: 4,
    closable: true,
  },
};

export const ThreeColumnGrid: Story = {
  args: {
    title: "3-Column Grid Layout",
    tags: sampleTags.slice(0, 12),
    columns: 3,
    closable: true,
  },
};

export const TwoColumnGrid: Story = {
  args: {
    title: "2-Column Grid Layout",
    tags: sampleTags.slice(0, 8),
    columns: 2,
    closable: true,
  },
};

export const MedicalCategories: Story = {
  args: {
    title: "Medical Specialties",
    tags: medicalTags,
    columns: 3,
    closable: false,
  },
};

export const MixedCategories: Story = {
  args: {
    title: "Content Categories",
    tags: categoryTags,
    columns: 2,
    closable: true,
  },
};

export const NoTitle: Story = {
  args: {
    tags: sampleTags.slice(0, 8),
    columns: 4,
    closable: true,
  },
};

export const InteractiveExample: Story = {
  render: () => {
    const [tags, setTags] = React.useState([
      { id: 1, text: "React", variant: "default" as const },
      { id: 2, text: "TypeScript", variant: "mint" as const },
      { id: 3, text: "Design Systems", variant: "teal" as const },
      { id: 4, text: "UI/UX", variant: "selected" as const },
    ]);

    const handleTagClose = (tagId: string | number) => {
      setTags(tags.filter(tag => tag.id !== tagId));
    };

    return (
      <TagCard
        title="Interactive Tags"
        tags={tags}
        columns={2}
        closable={true}
        onTagClose={handleTagClose}
      />
    );
  },
};
