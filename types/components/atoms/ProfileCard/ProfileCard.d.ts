import React from "react";
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
export declare const ProfileCard: React.FC<ProfileCardProps>;
