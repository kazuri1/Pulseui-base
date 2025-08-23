import React from "react";
export interface CarouselProps {
    children: React.ReactNode[];
    showDots?: boolean;
    showArrows?: boolean;
    className?: string;
    id?: string;
    /** Whether to wrap each slide in a Card component */
    useCards?: boolean;
    /** Card title for each slide (only used when useCards is true) */
    cardTitles?: string[];
    /** Card descriptions for each slide (only used when useCards is true) */
    cardDescriptions?: string[];
    /** Card images for each slide (only used when useCards is true) */
    cardImages?: string[];
    /** Whether to show only images (hide card content) */
    imageOnly?: boolean;
    /** Whether to use compact spacing between slides */
    compact?: boolean;
    /** Size of the carousel for different display contexts */
    size?: "sm" | "md" | "lg" | "xl" | "display";
    /** Accessibility label for the carousel */
    ariaLabel?: string;
    /** Whether to enable keyboard navigation */
    enableKeyboard?: boolean;
    /** Auto-play interval in milliseconds (0 to disable) */
    autoPlay?: number;
}
export declare const Carousel: React.FC<CarouselProps>;
