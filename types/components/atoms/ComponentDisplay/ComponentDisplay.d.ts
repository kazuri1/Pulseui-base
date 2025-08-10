import React from "react";
export interface ComponentDisplayProps {
    title?: string;
    description?: string;
    sourceUrl?: string;
    docsUrl?: string;
    packageName?: string;
    children?: React.ReactNode;
    className?: string;
    component?: React.ComponentType<any>;
    componentName?: string;
    stories?: any;
}
export declare const ComponentDisplay: React.FC<ComponentDisplayProps>;
