import type { Brand } from "../contexts/BrandContext";
export interface BrandConfig {
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
export interface BrandLoader {
    loadBrand: (brandId: string) => Promise<Brand | null>;
    loadAllBrands: () => Promise<Brand[]>;
    validateBrand: (brandConfig: BrandConfig) => boolean;
    getBrandTokens: (brandId: string, theme: "light" | "dark") => Promise<Record<string, any> | null>;
    addBrand: (brandConfig: BrandConfig) => void;
    removeBrand: (brandId: string) => void;
    getAvailableBrandIds: () => string[];
}
export declare class DefaultBrandLoader implements BrandLoader {
    private brands;
    constructor(brands?: Record<string, BrandConfig>);
    /**
     * Load a specific brand by ID
     */
    loadBrand(brandId: string): Promise<Brand | null>;
    /**
     * Load all available brands
     */
    loadAllBrands(): Promise<Brand[]>;
    /**
     * Validate a brand configuration
     */
    validateBrand(brandConfig: BrandConfig): boolean;
    /**
     * Get tokens for a specific brand and theme
     */
    getBrandTokens(brandId: string, theme: "light" | "dark"): Promise<Record<string, any> | null>;
    /**
     * Add a new brand configuration
     */
    addBrand(brandConfig: BrandConfig): void;
    /**
     * Remove a brand
     */
    removeBrand(brandId: string): void;
    /**
     * Get all available brand IDs
     */
    getAvailableBrandIds(): string[];
}
export declare class DynamicBrandLoader extends DefaultBrandLoader {
    private externalBrandUrls;
    constructor(brands?: Record<string, BrandConfig>, externalBrandUrls?: Map<string, string>);
    /**
     * Load a brand from external URL
     */
    loadBrandFromUrl(brandId: string, url: string): Promise<Brand | null>;
    /**
     * Add external brand URL
     */
    addExternalBrandUrl(brandId: string, url: string): void;
    /**
     * Get external brand URLs
     */
    getExternalBrandUrls(): Map<string, string>;
}
export declare const defaultBrandLoader: DefaultBrandLoader;
export declare const dynamicBrandLoader: DynamicBrandLoader;
export declare const loadBrand: (brandId: string) => Promise<Brand>;
export declare const loadAllBrands: () => Promise<Brand[]>;
export declare const validateBrand: (brandConfig: BrandConfig) => boolean;
export declare const getBrandTokens: (brandId: string, theme: "light" | "dark") => Promise<Record<string, any>>;
