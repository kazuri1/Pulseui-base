import React, { type ReactNode } from "react";
import type { Theme } from "../styles/stylesApi";
import { type ThemeName, type ThemeMode } from "../styles/themes";
interface ThemeContextType {
    currentTheme: Theme;
    themeName: ThemeName;
    themeMode: ThemeMode;
    setTheme: (theme: ThemeName) => void;
    toggleTheme: () => void;
    isDark: boolean;
    isLight: boolean;
}
export interface ThemeProviderProps {
    children: ReactNode;
    defaultTheme?: ThemeName;
    persistTheme?: boolean;
}
export declare const ThemeProvider: React.FC<ThemeProviderProps>;
export declare const useTheme: () => ThemeContextType;
export {};
