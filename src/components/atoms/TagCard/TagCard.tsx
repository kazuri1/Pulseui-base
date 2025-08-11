import React from "react";
import { Card } from "../Card";
import { Tag } from "../Tag";
import { LocalHospital } from "@mui/icons-material";
import type { SvgIconComponent } from "@mui/icons-material";
import styles from "./TagCard.module.scss";

export interface TagItem {
  /** Unique identifier for the tag */
  id: string | number;
  /** Text content of the tag */
  text: string;
  /** Icon to display in the tag */
  icon?: SvgIconComponent;
  /** Size variant of the tag */
  size?: "sm" | "md" | "lg" | "xl";
  /** Color variant of the tag */
  variant?: "default" | "selected" | "mint" | "teal";
  /** Whether to show the close button */
  closable?: boolean;
}

export interface TagCardProps {
  /** Title of the card */
  title?: string;
  /** Array of tag items to display */
  tags: TagItem[];
  /** Number of columns in the grid (default: 4) */
  columns?: number;
  /** Whether to show close buttons on tags */
  closable?: boolean;
  /** Handler for when a tag is closed */
  onTagClose?: (tagId: string | number) => void;
  /** Additional CSS classes */
  className?: string;
}

export const TagCard: React.FC<TagCardProps> = ({
  title = "Tags",
  tags,
  columns = 4,
  closable = false,
  onTagClose,
  className = "",
}) => {
  const handleTagClose = (tagId: string | number) => {
    onTagClose?.(tagId);
  };

  return (
    <Card className={`${styles.tagCard} ${className}`}>
      {title && (
        <div className={styles.cardHeader}>
          <h3 className={styles.cardTitle}>{title}</h3>
        </div>
      )}

      <div
        className={styles.tagGrid}
        style={{
          gridTemplateColumns: `repeat(${columns}, 1fr)`,
          gap: "var(--spacing-md)",
        }}
      >
        {tags.map((tag) => (
          <Tag
            key={tag.id}
            icon={tag.icon || LocalHospital}
            size={tag.size || "md"}
            variant={tag.variant || "default"}
            closable={tag.closable !== undefined ? tag.closable : closable}
            onClose={() => handleTagClose(tag.id)}
          >
            {tag.text}
          </Tag>
        ))}
      </div>
    </Card>
  );
};
