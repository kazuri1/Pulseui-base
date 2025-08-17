import { useState, useEffect, useCallback } from "react";
import { useBrand } from "../contexts/BrandContext";
import {
  defaultBrandLoader,
  dynamicBrandLoader,
  type BrandConfig,
  type BrandLoader,
} from "../utils/brandLoader";

export interface UseBrandManagerOptions {
  /** Whether to use dynamic loading from external sources */
  enableDynamicLoading?: boolean;
  /** Custom brand loader instance */
  customLoader?: BrandLoader;
  /** Auto-refresh interval in milliseconds */
  autoRefreshInterval?: number;
}

export interface UseBrandManagerReturn {
  // Brand management
  loadBrand: (brandId: string) => Promise<void>;
  loadBrandFromUrl: (brandId: string, url: string) => Promise<void>;
  addBrand: (brandConfig: BrandConfig) => void;
  removeBrand: (brandId: string) => void;
  refreshBrands: () => Promise<void>;

  // Brand information
  availableBrands: string[];
  externalBrandUrls: Map<string, string>;
  isLoading: boolean;
  error: string | null;

  // Brand validation
  validateBrand: (brandConfig: BrandConfig) => boolean;

  // Utility functions
  getBrandTokens: (
    brandId: string,
    theme: "light" | "dark"
  ) => Promise<Record<string, any> | null>;
  exportBrandConfig: (brandId: string) => string | null;
  importBrandConfig: (configJson: string) => boolean;
}

/**
 * Custom hook for advanced brand management
 */
export const useBrandManager = (
  options: UseBrandManagerOptions = {}
): UseBrandManagerReturn => {
  const {
    enableDynamicLoading = false,
    customLoader,
    autoRefreshInterval,
  } = options;

  const { setBrand, availableBrands } = useBrand();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [externalBrandUrls, setExternalBrandUrls] = useState<
    Map<string, string>
  >(new Map());

  // Use custom loader or default based on options
  const loader =
    customLoader ||
    (enableDynamicLoading ? dynamicBrandLoader : defaultBrandLoader);

  // Load a brand by ID
  const loadBrand = useCallback(
    async (brandId: string) => {
      try {
        setIsLoading(true);
        setError(null);

        const brand = await loader.loadBrand(brandId);
        if (brand) {
          // Update the brand context
          setBrand(brandId);
          console.log(`Brand ${brandId} loaded successfully`);
        } else {
          setError(`Failed to load brand: ${brandId}`);
        }
      } catch (err) {
        setError(
          `Error loading brand ${brandId}: ${
            err instanceof Error ? err.message : "Unknown error"
          }`
        );
      } finally {
        setIsLoading(false);
      }
    },
    [loader, setBrand]
  );

  // Load a brand from external URL
  const loadBrandFromUrl = useCallback(
    async (brandId: string, url: string) => {
      if (!enableDynamicLoading) {
        setError("Dynamic loading is not enabled");
        return;
      }

      try {
        setIsLoading(true);
        setError(null);

        if (dynamicBrandLoader instanceof dynamicBrandLoader.constructor) {
          const brand = await dynamicBrandLoader.loadBrandFromUrl(brandId, url);
          if (brand) {
            // Update external URLs
            setExternalBrandUrls((prev) => new Map(prev).set(brandId, url));
            // Update the brand context
            setBrand(brandId);
            console.log(`Brand ${brandId} loaded from ${url} successfully`);
          } else {
            setError(`Failed to load brand from ${url}`);
          }
        } else {
          setError("Dynamic brand loader not available");
        }
      } catch (err) {
        setError(
          `Error loading brand from ${url}: ${
            err instanceof Error ? err.message : "Unknown error"
          }`
        );
      } finally {
        setIsLoading(false);
      }
    },
    [enableDynamicLoading, setBrand]
  );

  // Add a new brand configuration
  const addBrand = useCallback(
    (brandConfig: BrandConfig) => {
      try {
        setError(null);
        loader.addBrand(brandConfig);
        console.log(`Brand ${brandConfig.id} added successfully`);
      } catch (err) {
        setError(
          `Error adding brand: ${
            err instanceof Error ? err.message : "Unknown error"
          }`
        );
      }
    },
    [loader]
  );

  // Remove a brand
  const removeBrand = useCallback(
    (brandId: string) => {
      try {
        setError(null);
        loader.removeBrand(brandId);

        // If this was the current brand, switch to default
        if (availableBrands.some((b) => b.id === brandId)) {
          setBrand(null);
        }

        // Remove from external URLs
        setExternalBrandUrls((prev) => {
          const newMap = new Map(prev);
          newMap.delete(brandId);
          return newMap;
        });

        console.log(`Brand ${brandId} removed successfully`);
      } catch (err) {
        setError(
          `Error removing brand: ${
            err instanceof Error ? err.message : "Unknown error"
          }`
        );
      }
    },
    [loader, availableBrands, setBrand]
  );

  // Refresh all brands
  const refreshBrands = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      // Reload all brands
      await loader.loadAllBrands();
      console.log("All brands refreshed successfully");
    } catch (err) {
      setError(
        `Error refreshing brands: ${
          err instanceof Error ? err.message : "Unknown error"
        }`
      );
    } finally {
      setIsLoading(false);
    }
  }, [loader]);

  // Validate brand configuration
  const validateBrand = useCallback(
    (brandConfig: BrandConfig): boolean => {
      return loader.validateBrand(brandConfig);
    },
    [loader]
  );

  // Get brand tokens
  const getBrandTokens = useCallback(
    async (brandId: string, theme: "light" | "dark") => {
      return await loader.getBrandTokens(brandId, theme);
    },
    [loader]
  );

  // Export brand configuration
  const exportBrandConfig = useCallback(
    (brandId: string): string | null => {
      try {
        const brand = availableBrands.find((b) => b.id === brandId);
        if (brand) {
          return JSON.stringify(brand, null, 2);
        }
        return null;
      } catch (err) {
        setError(
          `Error exporting brand config: ${
            err instanceof Error ? err.message : "Unknown error"
          }`
        );
        return null;
      }
    },
    [availableBrands]
  );

  // Import brand configuration
  const importBrandConfig = useCallback(
    (configJson: string): boolean => {
      try {
        const brandConfig: BrandConfig = JSON.parse(configJson);
        if (validateBrand(brandConfig)) {
          addBrand(brandConfig);
          return true;
        } else {
          setError("Invalid brand configuration format");
          return false;
        }
      } catch (err) {
        setError(
          `Error importing brand config: ${
            err instanceof Error ? err.message : "Unknown error"
          }`
        );
        return false;
      }
    },
    [validateBrand, addBrand]
  );

  // Auto-refresh effect
  useEffect(() => {
    if (autoRefreshInterval && autoRefreshInterval > 0) {
      const interval = setInterval(refreshBrands, autoRefreshInterval);
      return () => clearInterval(interval);
    }
  }, [autoRefreshInterval, refreshBrands]);

  // Initialize external URLs if using dynamic loader
  useEffect(() => {
    if (
      enableDynamicLoading &&
      dynamicBrandLoader instanceof dynamicBrandLoader.constructor
    ) {
      setExternalBrandUrls(dynamicBrandLoader.getExternalBrandUrls());
    }
  }, [enableDynamicLoading]);

  return {
    // Brand management
    loadBrand,
    loadBrandFromUrl,
    addBrand,
    removeBrand,
    refreshBrands,

    // Brand information
    availableBrands: availableBrands.map((b) => b.id),
    externalBrandUrls,
    isLoading,
    error,

    // Brand validation
    validateBrand,

    // Utility functions
    getBrandTokens,
    exportBrandConfig,
    importBrandConfig,
  };
};
