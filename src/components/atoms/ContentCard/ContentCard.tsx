import React from "react";
import { Card } from "../Card";
import { Text } from "../Text";
import { Avatar } from "../Avatar";
import { Image } from "../Image";
import styles from "./ContentCard.module.scss";

export interface ContentCardProps {
  /** URL of the featured image */
  imageUrl: string;
  /** Alt text for the image */
  imageAlt: string;
  /** Publication date */
  date: string;
  /** Article title */
  title: string;
  /** Article description/excerpt */
  description: string;
  /** Author's name */
  authorName: string;
  /** Author's role/title */
  authorRole: string;
  /** Author's profile image URL */
  authorImageUrl?: string;
  /** Optional click handler for the card */
  onClick?: () => void;
  /** Additional CSS classes */
  className?: string;
  /** Size variant of the card */
  size?: "sm" | "md" | "lg";
}

export const ContentCard: React.FC<ContentCardProps> = ({
  imageUrl,
  imageAlt,
  date,
  title,
  description,
  authorName,
  authorRole,
  authorImageUrl,
  onClick,
  className = "",
  size = "md",
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <Card
      className={`${styles.contentCard} ${styles[`size-${size}`]} ${className}`}
      onClick={handleClick}
      clickable={!!onClick}
    >
      <div className={styles.imageContainer}>
        <Image src={imageUrl} alt={imageAlt} className={styles.featuredImage} />
      </div>

      <div className={styles.content}>
        <Text variant="xs" color="secondary" className={styles.date}>
          {date}
        </Text>

        <Text variant="lg" weight="semibold" className={styles.title}>
          {title}
        </Text>

        <Text variant="sm" color="secondary" className={styles.description}>
          {description}
        </Text>

        <div className={styles.authorSection}>
          <Avatar
            type="image"
            src={authorImageUrl}
            alt={`${authorName}'s profile`}
            size="lg"
          />
          <div className={styles.authorInfo}>
            <Text variant="sm" weight="medium" className={styles.authorName}>
              {authorName}
            </Text>
            <Text variant="xs" color="secondary" className={styles.authorRole}>
              {authorRole}
            </Text>
          </div>
        </div>
      </div>
    </Card>
  );
};
