import type { Meta, StoryObj } from "@storybook/react";
import { Tag } from "./Tag";
import { LocalHospital, Favorite, Star, Tag as TagIcon } from "@mui/icons-material";

const meta: Meta<typeof Tag> = {
  title: "Atoms/Tag",
  component: Tag,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A tag component that displays information with icons, text, and optional close buttons. Perfect for categorizing content, showing selected items, and managing user selections.",
      },
    },
  },
  argTypes: {
    size: {
      control: { type: "select" },
      options: ["sm", "md", "lg", "xl"],
      description: "Size variant of the tag",
    },
    variant: {
      control: { type: "select" },
      options: ["default", "selected", "mint", "teal"],
      description: "Color variant of the tag",
    },
    closable: {
      control: { type: "boolean" },
      description: "Whether to show the close button",
    },
    icon: {
      control: { type: "select" },
      options: ["LocalHospital", "Favorite", "Star", "TagIcon"],
      mapping: {
        LocalHospital,
        Favorite,
        Star,
        TagIcon,
      },
      description: "Icon to display in the tag",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Diagnosis",
    icon: LocalHospital,
    size: "md",
    variant: "default",
    closable: true,
  },
};

export const SizeVariants: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", alignItems: "center" }}>
      <Tag size="sm" variant="default" closable>Small Tag</Tag>
      <Tag size="md" variant="default" closable>Medium Tag</Tag>
      <Tag size="lg" variant="default" closable>Large Tag</Tag>
      <Tag size="xl" variant="default" closable>Extra Large Tag</Tag>
    </div>
  ),
};

export const ColorVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
      <Tag variant="default" closable>Default</Tag>
      <Tag variant="selected" closable>Selected</Tag>
      <Tag variant="mint" closable>Mint</Tag>
      <Tag variant="teal" closable>Teal</Tag>
    </div>
  ),
};

export const GridLayout: Story = {
  render: () => (
    <div style={{ 
      display: "grid", 
      gridTemplateColumns: "repeat(4, 1fr)", 
      gap: "16px",
      maxWidth: "800px"
    }}>
      {/* Row 1 - Small */}
      <Tag size="sm" variant="default" closable icon={LocalHospital}>Diagnosis</Tag>
      <Tag size="sm" variant="selected" closable icon={LocalHospital}>Diagnosis</Tag>
      <Tag size="sm" variant="mint" closable icon={LocalHospital}>Diagnosis</Tag>
      <Tag size="sm" variant="teal" closable icon={LocalHospital}>Diagnosis</Tag>
      
      {/* Row 2 - Medium */}
      <Tag size="md" variant="default" closable icon={LocalHospital}>Diagnosis</Tag>
      <Tag size="md" variant="selected" closable icon={LocalHospital}>Diagnosis</Tag>
      <Tag size="md" variant="mint" closable icon={LocalHospital}>Diagnosis</Tag>
      <Tag size="md" variant="teal" closable icon={LocalHospital}>Diagnosis</Tag>
      
      {/* Row 3 - Large */}
      <Tag size="lg" variant="default" closable icon={LocalHospital}>Diagnosis</Tag>
      <Tag size="lg" variant="selected" closable icon={LocalHospital}>Diagnosis</Tag>
      <Tag size="lg" variant="mint" closable icon={LocalHospital}>Diagnosis</Tag>
      <Tag size="lg" variant="teal" closable icon={LocalHospital}>Diagnosis</Tag>
      
      {/* Row 4 - Extra Large */}
      <Tag size="xl" variant="default" closable icon={LocalHospital}>Diagnosis</Tag>
      <Tag size="xl" variant="selected" closable icon={LocalHospital}>Diagnosis</Tag>
      <Tag size="xl" variant="mint" closable icon={LocalHospital}>Diagnosis</Tag>
      <Tag size="xl" variant="teal" closable icon={LocalHospital}>Diagnosis</Tag>
    </div>
  ),
};

export const DifferentIcons: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
      <Tag icon={LocalHospital} variant="default" closable>Medical</Tag>
      <Tag icon={Favorite} variant="mint" closable>Favorites</Tag>
      <Tag icon={Star} variant="teal" closable>Featured</Tag>
      <Tag icon={TagIcon} variant="selected" closable>Category</Tag>
    </div>
  ),
};

export const WithoutCloseButton: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
      <Tag icon={LocalHospital} variant="default">Read Only</Tag>
      <Tag icon={Favorite} variant="mint">Permanent</Tag>
      <Tag icon={Star} variant="teal">Fixed</Tag>
    </div>
  ),
};

export const InteractiveExample: Story = {
  render: () => {
    const InteractiveTagExample = () => {
      const [tags, setTags] = React.useState([
        { id: 1, text: "Diagnosis", variant: "default" as const },
        { id: 2, text: "Treatment", variant: "mint" as const },
        { id: 3, text: "Follow-up", variant: "teal" as const },
      ]);

    const handleRemove = (id: number) => {
      setTags(tags.filter(tag => tag.id !== id));
    };

    return (
      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
        {tags.map(tag => (
          <Tag
            key={tag.id}
            variant={tag.variant}
            closable
            onClose={() => handleRemove(tag.id)}
          >
            {tag.text}
          </Tag>
        ))}
      </div>
    );
    };
    return <InteractiveTagExample />;
  },
};
