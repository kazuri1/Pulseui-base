import React from "react";
import type { ThemeConfig, ThemeMode, CustomTheme } from "./types";
interface ThemeContextType {
    currentTheme: string;
    currentMode: ThemeMode;
    themes: Record<string, ThemeConfig>;
    setTheme: (themeName: string) => void;
    setMode: (mode: ThemeMode) => void;
    addCustomTheme: (name: string, theme: CustomTheme) => void;
    getThemeValue: (path: string) => string;
}
export interface ThemeProviderProps {
    children: React.ReactNode;
    defaultTheme?: string;
    defaultMode?: ThemeMode;
    themes?: Record<string, ThemeConfig>;
    enableSystemPreference?: boolean;
    enableAnimation?: boolean;
}
export declare const ThemeProvider: React.FC<ThemeProviderProps>;
export declare const useTheme: () => ThemeContextType;
export {};
