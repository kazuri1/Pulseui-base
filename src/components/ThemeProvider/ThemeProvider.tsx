import React, { createContext, useContext, useState, useEffect } from "react";
import styles from "./ThemeProvider.module.scss";
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

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: string;
  defaultMode?: ThemeMode;
  themes?: Record<string, ThemeConfig>;
  enableSystemPreference?: boolean;
  enableAnimation?: boolean;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultTheme = "default",
  defaultMode = "light",
  themes = {},
  enableSystemPreference = true,
  enableAnimation = true,
}) => {
  const [currentTheme, setCurrentTheme] = useState(defaultTheme);
  const [currentMode, setCurrentMode] = useState<ThemeMode>(defaultMode);
  const [availableThemes, setAvailableThemes] = useState(themes);

  // System preference detection
  useEffect(() => {
    if (enableSystemPreference) {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = (e: MediaQueryListEvent) => {
        setCurrentMode(e.matches ? "dark" : "light");
      };

      mediaQuery.addEventListener("change", handleChange);
      setCurrentMode(mediaQuery.matches ? "dark" : "light");

      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, [enableSystemPreference]);

  // Apply theme to CSS custom properties
  useEffect(() => {
    const theme = availableThemes[currentTheme];
    if (!theme) return;

    const mode = theme.mode[currentMode] || theme.mode.light;
    const root = document.documentElement;

    // Apply CSS custom properties
    Object.entries(mode).forEach(([category, values]) => {
      if (typeof values === "object" && values !== null) {
        Object.entries(values).forEach(([key, token]) => {
          if (token && typeof token === "object" && "value" in token) {
            const cssVar = `--${category}-${key}`;
            root.style.setProperty(cssVar, token.value as string);
          }
        });
      }
    });

    // Apply theme-specific properties
    root.style.setProperty("--current-theme", currentTheme);
    root.style.setProperty("--current-mode", currentMode);

    if (enableAnimation) {
      root.style.setProperty("--theme-transition", "all 0.3s ease");
    }
  }, [currentTheme, currentMode, availableThemes, enableAnimation]);

  const setTheme = (themeName: string) => {
    if (availableThemes[themeName]) {
      setCurrentTheme(themeName);
    }
  };

  const setMode = (mode: ThemeMode) => {
    setCurrentMode(mode);
  };

  const addCustomTheme = (name: string, theme: CustomTheme) => {
    setAvailableThemes((prev) => ({
      ...prev,
      [name]: theme,
    }));
  };

  const getThemeValue = (path: string): string => {
    const theme = availableThemes[currentTheme];
    if (!theme) return "";

    const mode = theme.mode[currentMode] || theme.mode.light;
    const keys = path.split(".");
    let value: any = mode;

    for (const key of keys) {
      if (value && value[key]) {
        value = value[key];
      } else {
        return "";
      }
    }

    return value?.value || "";
  };

  const contextValue: ThemeContextType = {
    currentTheme,
    currentMode,
    themes: availableThemes,
    setTheme,
    setMode,
    addCustomTheme,
    getThemeValue,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      <div
        className={styles.themeProvider}
        data-theme={currentTheme}
        data-mode={currentMode}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
