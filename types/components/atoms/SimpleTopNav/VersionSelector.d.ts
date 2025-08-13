import React from "react";
export interface VersionSelectorProps {
    /** Current version to display */
    version?: string;
    /** Available versions to select from */
    versions?: string[];
    /** Callback when version changes */
    onVersionChange?: (version: string) => void;
    /** Custom class name */
    className?: string;
    /** Whether the selector is disabled */
    disabled?: boolean;
}
export declare const VersionSelector: React.FC<VersionSelectorProps>;
