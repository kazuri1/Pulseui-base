import React from "react";
import type { WithSxProps } from "../../../utils/sxUtils";
export interface VersionSelectorProps extends WithSxProps {
    /** Current version to display */
    version?: string;
    /** Available versions to select from */
    versions?: string[];
    /** Callback when version changes */
    onVersionChange?: (version: string) => void;
    /** Whether the selector is disabled */
    disabled?: boolean;
}
export declare const VersionSelector: React.FC<VersionSelectorProps>;
