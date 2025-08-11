import React from "react";
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
export declare const ContentCard: React.FC<ContentCardProps>;
