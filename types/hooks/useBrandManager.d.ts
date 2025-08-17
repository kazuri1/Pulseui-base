import { type BrandConfig, type BrandLoader } from "../utils/brandLoader";
export interface UseBrandManagerOptions {
    /** Whether to use dynamic loading from external sources */
    enableDynamicLoading?: boolean;
    /** Custom brand loader instance */
    customLoader?: BrandLoader;
    /** Auto-refresh interval in milliseconds */
    autoRefreshInterval?: number;
}
export interface UseBrandManagerReturn {
    loadBrand: (brandId: string) => Promise<void>;
    loadBrandFromUrl: (brandId: string, url: string) => Promise<void>;
    addBrand: (brandConfig: BrandConfig) => void;
    removeBrand: (brandId: string) => void;
    refreshBrands: () => Promise<void>;
    availableBrands: string[];
    externalBrandUrls: Map<string, string>;
    isLoading: boolean;
    error: string | null;
    validateBrand: (brandConfig: BrandConfig) => boolean;
    getBrandTokens: (brandId: string, theme: "light" | "dark") => Promise<Record<string, any> | null>;
    exportBrandConfig: (brandId: string) => string | null;
    importBrandConfig: (configJson: string) => boolean;
}
/**
 * Custom hook for advanced brand management
 */
export declare const useBrandManager: (options?: UseBrandManagerOptions) => UseBrandManagerReturn;
