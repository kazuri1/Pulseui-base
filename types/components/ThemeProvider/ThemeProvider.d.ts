import React from "react";
import type { WithSxProps } from "../../utils/sxUtils";
export interface ThemeProviderProps extends WithSxProps {
    /** Default theme to use */
    defaultTheme?: "default-light" | "default-dark";
    /** Whether to persist theme choice in localStorage */
    persistTheme?: boolean;
    /** Children components */
    children: React.ReactNode;
}
export declare const ThemeProvider: React.FC<ThemeProviderProps>;
