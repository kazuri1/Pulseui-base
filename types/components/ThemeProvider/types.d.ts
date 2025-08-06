export type ThemeMode = "light" | "dark" | "auto";
export interface TokenValue {
    type: string;
    value: string;
}
export interface ThemeTokens {
    [key: string]: TokenValue;
}
export interface ThemeModeConfig {
    light: ThemeTokens;
    dark: ThemeTokens;
    auto?: ThemeTokens;
}
export interface ThemeConfig {
    description: string;
    mode: ThemeModeConfig;
}
export interface CustomTheme {
    description: string;
    mode: {
        light: ThemeTokens;
        dark: ThemeTokens;
    };
}
export interface AnimationConfig {
    duration: string;
    easing: string;
    delay?: string;
}
export interface ThemeContextValue {
    currentTheme: string;
    currentMode: ThemeMode;
    themes: Record<string, ThemeConfig>;
    setTheme: (themeName: string) => void;
    setMode: (mode: ThemeMode) => void;
    addCustomTheme: (name: string, theme: CustomTheme) => void;
    getThemeValue: (path: string) => string;
}
