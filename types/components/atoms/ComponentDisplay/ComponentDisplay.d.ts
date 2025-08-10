import React from "react";
export interface ComponentDisplayProps {
    title: string;
    description?: string;
    component: React.ComponentType<any>;
    props?: Record<string, any>;
    stories?: React.ComponentType<any>;
    storybookUrl?: string;
    storyId?: string;
    storybookViewMode?: "docs" | "story" | "canvas";
    showCode?: boolean;
    showProps?: boolean;
    showStories?: boolean;
}
export declare const ComponentDisplay: React.FC<ComponentDisplayProps>;
