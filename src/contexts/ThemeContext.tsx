import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";
import type { Theme } from "../styles/stylesApi";
import { themes, type ThemeName, type ThemeMode } from "../styles/themes";

// Theme context interface
interface ThemeContextType {
  currentTheme: Theme;
  themeName: ThemeName;
  themeMode: ThemeMode;
  setTheme: (theme: ThemeName) => void;
  toggleTheme: () => void;
  isDark: boolean;
  isLight: boolean;
}

// Create the context
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Theme provider props
export interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: ThemeName;
  persistTheme?: boolean;
}

// Theme provider component
export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultTheme = "default-light",
  persistTheme = true,
}) => {
  // Get initial theme from localStorage or use default
  const getInitialTheme = (): ThemeName => {
    if (!persistTheme) return defaultTheme;

    try {
      const saved = localStorage.getItem("pulseui-theme");
      if (saved && saved in themes) {
        return saved as ThemeName;
      }
    } catch (error) {
      console.warn("Failed to load theme from localStorage:", error);
    }

    return defaultTheme;
  };

  const [themeName, setThemeName] = useState<ThemeName>(getInitialTheme);

  // Get current theme object
  const currentTheme = themes[themeName];

  // Get theme mode (light/dark)
  const themeMode: ThemeMode = themeName.includes("dark") ? "dark" : "light";

  // Convenience booleans
  const isDark = themeMode === "dark";
  const isLight = themeMode === "light";

  // Set theme function
  const setTheme = (newTheme: ThemeName) => {
    if (newTheme in themes) {
      setThemeName(newTheme);

      // Persist to localStorage
      if (persistTheme) {
        try {
          localStorage.setItem("pulseui-theme", newTheme);
        } catch (error) {
          console.warn("Failed to save theme to localStorage:", error);
        }
      }
    }
  };

  // Toggle between light and dark
  const toggleTheme = () => {
    const newTheme: ThemeName = isDark ? "default-light" : "default-dark";
    setTheme(newTheme);
  };

  // Apply theme to document
  useEffect(() => {
    const root = document.documentElement;

    // Set data-theme attribute for CSS targeting
    // This triggers the CSS-based theme system in _tokens.scss
    root.setAttribute("data-theme", themeMode);

    // Note: CSS variables are now handled by the CSS-based theme system
    // in _tokens.scss using [data-theme="dark"] selectors
    // This ensures consistency with the design system
  }, [themeMode]);

  // Context value
  const contextValue: ThemeContextType = {
    currentTheme,
    themeName,
    themeMode,
    setTheme,
    toggleTheme,
    isDark,
    isLight,
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook to use theme context
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

// Note: CSS-based theme system in _tokens.scss now handles all color changes
// This ensures consistency with the design system and eliminates conflicts
