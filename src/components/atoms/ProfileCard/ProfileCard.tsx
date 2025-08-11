import React from "react";
import { Card } from "../Card";
import { Text } from "../Text";
import { Avatar } from "../Avatar";
import mypic from "../../../assets/mypic.jpg";
import styles from "./ProfileCard.module.scss";

export interface ProfileCardProps {
  /** Profile avatar image URL (defaults to mypic.jpg) */
  avatarUrl?: string;
  /** Profile avatar alt text */
  avatarAlt?: string;
  /** Profile name (always "Vignesh Vishnumoorthy") */
  name?: string;
  /** Profile email */
  email: string;
  /** Profile bio/description */
  bio: string;
  /** Profile hashtag */
  hashtag: string;
  /** Number of posts */
  posts: number;
  /** Number of followers */
  followers: number;
  /** Number of following */
  following: number;
  /** Additional CSS classes */
  className?: string;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({
  avatarUrl,
  avatarAlt,
  name = "Vignesh Vishnumoorthy",
  email,
  bio,
  hashtag,
  posts,
  followers,
  following,
  className = "",
}) => {
  const formatNumber = (num: number): string => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, "") + "k";
    }
    return num.toString();
  };

  return (
    <Card className={`${styles.profileCard} ${className}`}>
      <div className={styles.avatarContainer}>
        <Avatar
          type="image"
          src={avatarUrl || mypic}
          alt={avatarAlt || `${name}'s profile`}
          size="xl"
        />
      </div>

      <div className={styles.profileInfo}>
        <Text variant="xl" weight="bold" className={styles.name}>
          {name}
        </Text>

        <Text variant="md" color="secondary" className={styles.email}>
          {email}
        </Text>

        <Text variant="md" className={styles.bio}>
          {bio}
        </Text>

        <Text variant="md" color="primary" className={styles.hashtag}>
          {hashtag}
        </Text>
      </div>

      <div className={styles.statsContainer}>
        <div className={styles.statItem}>
          <Text variant="lg" weight="bold" className={styles.statNumber}>
            {formatNumber(posts)}
          </Text>
          <Text variant="sm" color="secondary" className={styles.statLabel}>
            posts
          </Text>
        </div>

        <div className={styles.statDivider} />

        <div className={styles.statItem}>
          <Text variant="lg" weight="bold" className={styles.statNumber}>
            {formatNumber(followers)}
          </Text>
          <Text variant="sm" color="secondary" className={styles.statLabel}>
            followers
          </Text>
        </div>

        <div className={styles.statDivider} />

        <div className={styles.statItem}>
          <Text variant="lg" weight="bold" className={styles.statNumber}>
            {formatNumber(following)}
          </Text>
          <Text variant="sm" color="secondary" className={styles.statLabel}>
            following
          </Text>
        </div>
      </div>
    </Card>
  );
};
