import React from "react";
import type { WithSxProps } from "../../../utils/sxUtils";
export interface CardProps extends WithSxProps {
    /** Card title */
    title?: string;
    /** Whether to show the title */
    showTitle?: boolean;
    /** Badge text */
    badge?: string;
    /** Whether to show the badge */
    showBadge?: boolean;
    /** Badge variant */
    badgeVariant?: "dot" | "filled" | "subtle" | "light" | "outline" | "white" | "default";
    /** Card description */
    description?: string;
    /** Whether to show the description */
    showDescription?: boolean;
    /** Button text */
    buttonText?: string;
    /** Whether to show the button */
    showButton?: boolean;
    /** Button variant */
    buttonVariant?: "filled" | "subtle" | "light" | "outline" | "white" | "default";
    /** Button size */
    buttonSize?: "xs" | "sm" | "md" | "lg" | "xl";
    /** Image source URL */
    imageSrc?: string;
    /** Image alt text */
    imageAlt?: string;
    /** Image fit mode */
    imageFit?: "fill" | "contain" | "cover" | "none" | "scale-down";
    /** Image border radius */
    imageRadius?: number | string;
    /** Whether to show the image */
    showImage?: boolean;
    /** Card variant - 'default' or 'image-overlay' */
    variant?: "default" | "image-overlay";
    /** Custom content to render inside the card */
    children?: React.ReactNode;
    /** Click handler for the button */
    onButtonClick?: () => void;
    /** Click handler for the entire card */
    onClick?: () => void;
    /** Whether the card is clickable */
    clickable?: boolean;
    /** Whether the card is disabled */
    disabled?: boolean;
    /** Accessibility label for the card */
    ariaLabel?: string;
    /** Whether the card is expanded/collapsed */
    ariaExpanded?: boolean;
    /** Controls the ID of the element this card controls */
    ariaControls?: string;
    /** Describes the card's purpose */
    ariaDescribedBy?: string;
    /** Whether the card has a popup */
    ariaHasPopup?: boolean;
    /** Whether the card is pressed/active */
    ariaPressed?: boolean;
    /** Tab index for keyboard navigation */
    tabIndex?: number;
}
export declare const Card: React.FC<CardProps>;
