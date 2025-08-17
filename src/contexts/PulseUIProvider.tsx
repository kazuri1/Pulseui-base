import React, { type ReactNode } from "react";
import { ThemeProvider, type ThemeProviderProps } from "./ThemeContext";
import { BrandProvider, type BrandProviderProps } from "./BrandContext";

// Combined provider props
export interface PulseUIProviderProps
  extends ThemeProviderProps,
    BrandProviderProps {
  children: ReactNode;
}

// Combined provider that handles both theme and brand
export const PulseUIProvider: React.FC<PulseUIProviderProps> = ({
  children,
  // Theme props
  defaultTheme = "default-light",
  persistTheme = true,
  // Brand props
  defaultBrand = null,
  persistBrand = true,
  availableBrands,
}) => {
  return (
    <ThemeProvider defaultTheme={defaultTheme} persistTheme={persistTheme}>
      <BrandProvider
        defaultBrand={defaultBrand}
        persistBrand={persistBrand}
        availableBrands={availableBrands}
      >
        {children}
      </BrandProvider>
    </ThemeProvider>
  );
};

// Re-export individual providers for cases where only one is needed
export { ThemeProvider } from "./ThemeContext";
export { BrandProvider } from "./BrandContext";
export { useTheme } from "./ThemeContext";
export { useBrand } from "./BrandContext";
