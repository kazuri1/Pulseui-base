import React, { type ReactNode } from "react";
import { type ThemeProviderProps } from "./ThemeContext";
import { type BrandProviderProps } from "./BrandContext";
export interface PulseUIProviderProps extends ThemeProviderProps, BrandProviderProps {
    children: ReactNode;
}
export declare const PulseUIProvider: React.FC<PulseUIProviderProps>;
export { ThemeProvider } from "./ThemeContext";
export { BrandProvider } from "./BrandContext";
export { useTheme } from "./ThemeContext";
export { useBrand } from "./BrandContext";
