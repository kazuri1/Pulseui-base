import type { Theme } from "./stylesApi";
export declare const defaultLightTheme: Theme;
export declare const defaultDarkTheme: Theme;
export declare const defaultTheme: Theme;
export type ThemeMode = "light" | "dark";
export type ThemeName = "default-light" | "default-dark";
export declare const themes: Record<ThemeName, Theme>;
