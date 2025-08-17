import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  type ReactNode,
} from "react";

// Brand interface based on our brand config structure
export interface Brand {
  id: string;
  name: string;
  version: string;
  description: string;
  figmaFileKey?: string;
  tokens: {
    light: Record<string, any>;
    dark: Record<string, any>;
  };
}

// Brand context interface
export interface BrandContextType {
  currentBrand: Brand | null;
  brandId: string | null;
  setBrand: (brandId: string | null) => void;
  availableBrands: Brand[];
  isDefaultBrand: boolean;
  isCustomBrand: boolean;
}

// Create the context
const BrandContext = createContext<BrandContextType | undefined>(undefined);

// Brand provider props
export interface BrandProviderProps {
  children: ReactNode;
  defaultBrand?: string | null;
  persistBrand?: boolean;
  availableBrands?: Brand[];
}

// Default brands (PulseUI base + IBM)
const defaultAvailableBrands: Brand[] = [
  {
    id: "pulseui",
    name: "PulseUI",
    version: "1.0.0",
    description: "Default PulseUI design system",
    tokens: {
      light: {},
      dark: {},
    },
  },
];

// Brand provider component
export const BrandProvider: React.FC<BrandProviderProps> = ({
  children,
  defaultBrand = null, // null means PulseUI (default)
  persistBrand = true,
  availableBrands = defaultAvailableBrands,
}) => {
  // Get initial brand from localStorage or use default
  const getInitialBrand = (): string | null => {
    if (!persistBrand) return defaultBrand;

    try {
      const saved = localStorage.getItem("pulseui-brand");
      if (
        saved &&
        (saved === "pulseui" || availableBrands.some((b) => b.id === saved))
      ) {
        return saved === "pulseui" ? null : saved;
      }
    } catch (error) {
      console.warn("Failed to load brand from localStorage:", error);
    }

    return defaultBrand;
  };

  const [brandId, setBrandId] = useState<string | null>(getInitialBrand);

  // Get current brand object
  const currentBrand = brandId
    ? availableBrands.find((b) => b.id === brandId) || null
    : null;

  // Convenience booleans
  const isDefaultBrand = brandId === null;
  const isCustomBrand = brandId !== null;

  // Set brand function
  const setBrand = (newBrandId: string | null) => {
    setBrandId(newBrandId);

    // Persist to localStorage
    if (persistBrand) {
      try {
        const valueToStore = newBrandId || "pulseui";
        localStorage.setItem("pulseui-brand", valueToStore);
      } catch (error) {
        console.warn("Failed to save brand to localStorage:", error);
      }
    }
  };

  // Apply brand to document
  useEffect(() => {
    const root = document.documentElement;

    // Set data-brand attribute for CSS targeting
    if (brandId) {
      root.setAttribute("data-brand", brandId);
    } else {
      root.removeAttribute("data-brand");
    }

    // Note: CSS variables are handled by the CSS-based brand system
    // in brand-specific _tokens.scss files using [data-brand="brandname"] selectors
    // This ensures consistency with the design system
  }, [brandId]);

  // Context value
  const contextValue: BrandContextType = {
    currentBrand,
    brandId,
    setBrand,
    availableBrands,
    isDefaultBrand,
    isCustomBrand,
  };

  return (
    <BrandContext.Provider value={contextValue}>
      {children}
    </BrandContext.Provider>
  );
};

// Hook to use brand context
export const useBrand = (): BrandContextType => {
  const context = useContext(BrandContext);
  if (context === undefined) {
    throw new Error("useBrand must be used within a BrandProvider");
  }
  return context;
};

// Note: CSS-based brand system in brand-specific _tokens.scss files now handles all brand changes
// This ensures consistency with the design system and eliminates conflicts
