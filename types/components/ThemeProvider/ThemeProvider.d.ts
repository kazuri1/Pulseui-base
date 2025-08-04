import React from "react";
type Theme = "light" | "dark";
interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
    setTheme: (theme: Theme) => void;
}
export declare const useTheme: () => ThemeContextType;
interface ThemeProviderProps {
    children: React.ReactNode;
    initialTheme?: Theme;
}
export declare const ThemeProvider: React.FC<ThemeProviderProps>;
export {};
