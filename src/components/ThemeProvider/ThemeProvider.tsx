import React, { createContext, useContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

// Brand configurations based on documented architecture
export const brandConfig = {
  default: {
    name: "Pulse",
    description: "Default Pulse theme",
  },
  medash: {
    name: "MedDash",
    description: "MedTech brand with medical blue colors",
  },
  fitcore: {
    name: "FitCore",
    description: "FitnessTech brand with energetic orange colors",
  },
  labsync: {
    name: "LabSync",
    description: "LabSync brand with scientific purple colors",
  },
} as const;

export type Brand = keyof typeof brandConfig;
export type ThemeMode = "light" | "dark";

interface ThemeContextType {
  brand: Brand;
  mode: ThemeMode;
  setBrand: (brand: Brand) => void;
  setMode: (mode: ThemeMode) => void;
  toggleMode: () => void;
  brandConfig: typeof brandConfig;
  currentBrand: (typeof brandConfig)[Brand];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
  defaultBrand?: Brand;
  defaultMode?: ThemeMode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  defaultBrand = "default",
  defaultMode = "light",
}) => {
  const [brand, setBrandState] = useState<Brand>(defaultBrand);
  const [mode, setModeState] = useState<ThemeMode>(defaultMode);

  const setBrand = (newBrand: Brand) => {
    setBrandState(newBrand);
    document.documentElement.setAttribute("data-brand", newBrand);
  };

  const setMode = (newMode: ThemeMode) => {
    setModeState(newMode);
    document.documentElement.setAttribute("data-mode", newMode);
  };

  const toggleMode = () => {
    const newMode = mode === "light" ? "dark" : "light";
    setMode(newMode);
  };

  // Initialize theme on mount
  useEffect(() => {
    document.documentElement.setAttribute("data-brand", brand);
    document.documentElement.setAttribute("data-mode", mode);
  }, []);

  const value: ThemeContextType = {
    brand,
    mode,
    setBrand,
    setMode,
    toggleMode,
    brandConfig,
    currentBrand: brandConfig[brand],
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
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

// Hook to get current brand info
export const useBrandInfo = () => {
  const { currentBrand } = useTheme();
  return {
    name: currentBrand.name,
    description: currentBrand.description,
  };
};

// Hook to get CSS variable value (following documented architecture)
export const useTokenValue = (tokenName: string): string => {
  // Get computed style to access CSS variables
  const computedStyle = getComputedStyle(document.documentElement);
  return computedStyle.getPropertyValue(tokenName).trim();
};

// Hook to get brand colors using CSS variables
export const useBrandColors = () => {
  return {
    primary: {
      50: useTokenValue("--color-primary-50"),
      100: useTokenValue("--color-primary-100"),
      200: useTokenValue("--color-primary-200"),
      300: useTokenValue("--color-primary-300"),
      400: useTokenValue("--color-primary-400"),
      500: useTokenValue("--color-primary-500"),
      600: useTokenValue("--color-primary-600"),
      700: useTokenValue("--color-primary-700"),
      800: useTokenValue("--color-primary-800"),
      900: useTokenValue("--color-primary-900"),
    },
    surface: {
      50: useTokenValue("--color-surface-50"),
      100: useTokenValue("--color-surface-100"),
      200: useTokenValue("--color-surface-200"),
      300: useTokenValue("--color-surface-300"),
      400: useTokenValue("--color-surface-400"),
      500: useTokenValue("--color-surface-500"),
      600: useTokenValue("--color-surface-600"),
      700: useTokenValue("--color-surface-700"),
      800: useTokenValue("--color-surface-800"),
      900: useTokenValue("--color-surface-900"),
    },
    text: {
      primary: useTokenValue("--color-text-primary"),
      secondary: useTokenValue("--color-text-secondary"),
      muted: useTokenValue("--color-text-muted"),
      disabled: useTokenValue("--color-text-disabled"),
    },
    border: {
      primary: useTokenValue("--color-border-primary"),
      secondary: useTokenValue("--color-border-secondary"),
      focus: useTokenValue("--color-border-focus"),
    },
  };
};
