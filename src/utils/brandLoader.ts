import type { Brand } from "../contexts/BrandContext";

// Brand configuration interface that matches our brand config files
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

// Brand loader interface
export interface BrandLoader {
  loadBrand: (brandId: string) => Promise<Brand | null>;
  loadAllBrands: () => Promise<Brand[]>;
  validateBrand: (brandConfig: BrandConfig) => boolean;
  getBrandTokens: (
    brandId: string,
    theme: "light" | "dark"
  ) => Promise<Record<string, any> | null>;
  addBrand: (brandConfig: BrandConfig) => void;
  removeBrand: (brandId: string) => void;
  getAvailableBrandIds: () => string[];
}

// Default brand configurations
const defaultBrands: Record<string, BrandConfig> = {
  pulseui: {
    id: "pulseui",
    name: "PulseUI",
    version: "1.0.0",
    description: "Default PulseUI design system",
    tokens: {
      light: {},
      dark: {},
    },
  },
};

// In-memory brand cache
const brandCache = new Map<string, Brand>();

// Default brand loader implementation
export class DefaultBrandLoader implements BrandLoader {
  private brands: Record<string, BrandConfig>;

  constructor(brands: Record<string, BrandConfig> = {}) {
    this.brands = { ...defaultBrands, ...brands };
  }

  /**
   * Load a specific brand by ID
   */
  async loadBrand(brandId: string): Promise<Brand | null> {
    // Check cache first
    if (brandCache.has(brandId)) {
      return brandCache.get(brandId)!;
    }

    // Check if brand exists in our loaded brands
    const brandConfig = this.brands[brandId];
    if (!brandConfig) {
      return null;
    }

    // Validate the brand configuration
    if (!this.validateBrand(brandConfig)) {
      console.warn(`Invalid brand configuration for ${brandId}`);
      return null;
    }

    // Convert to Brand interface
    const brand: Brand = {
      id: brandConfig.id,
      name: brandConfig.name,
      version: brandConfig.version,
      description: brandConfig.description,
      figmaFileKey: brandConfig.figmaFileKey,
      tokens: brandConfig.tokens,
    };

    // Cache the brand
    brandCache.set(brandId, brand);

    return brand;
  }

  /**
   * Load all available brands
   */
  async loadAllBrands(): Promise<Brand[]> {
    const brands: Brand[] = [];

    for (const brandId of Object.keys(this.brands)) {
      const brand = await this.loadBrand(brandId);
      if (brand) {
        brands.push(brand);
      }
    }

    return brands;
  }

  /**
   * Validate a brand configuration
   */
  validateBrand(brandConfig: BrandConfig): boolean {
    // Basic validation
    if (!brandConfig.id || !brandConfig.name || !brandConfig.version) {
      return false;
    }

    // Check if tokens exist
    if (
      !brandConfig.tokens ||
      !brandConfig.tokens.light ||
      !brandConfig.tokens.dark
    ) {
      return false;
    }

    // Check if tokens are objects
    if (
      typeof brandConfig.tokens.light !== "object" ||
      typeof brandConfig.tokens.dark !== "object"
    ) {
      return false;
    }

    return true;
  }

  /**
   * Get tokens for a specific brand and theme
   */
  async getBrandTokens(
    brandId: string,
    theme: "light" | "dark"
  ): Promise<Record<string, any> | null> {
    const brand = await this.loadBrand(brandId);
    if (!brand) {
      return null;
    }

    return brand.tokens[theme] || null;
  }

  /**
   * Add a new brand configuration
   */
  addBrand(brandConfig: BrandConfig): void {
    if (this.validateBrand(brandConfig)) {
      this.brands[brandConfig.id] = brandConfig;
      // Clear cache for this brand
      brandCache.delete(brandConfig.id);
    } else {
      throw new Error(`Invalid brand configuration for ${brandConfig.id}`);
    }
  }

  /**
   * Remove a brand
   */
  removeBrand(brandId: string): void {
    delete this.brands[brandId];
    brandCache.delete(brandId);
  }

  /**
   * Get all available brand IDs
   */
  getAvailableBrandIds(): string[] {
    return Object.keys(this.brands);
  }
}

// Dynamic brand loader that can load brands from external sources
export class DynamicBrandLoader extends DefaultBrandLoader {
  private externalBrandUrls: Map<string, string>;

  constructor(
    brands: Record<string, BrandConfig> = {},
    externalBrandUrls: Map<string, string> = new Map()
  ) {
    super(brands);
    this.externalBrandUrls = externalBrandUrls;
  }

  /**
   * Load a brand from external URL
   */
  async loadBrandFromUrl(brandId: string, url: string): Promise<Brand | null> {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch brand: ${response.statusText}`);
      }

      const brandConfig: BrandConfig = await response.json();

      // Validate the brand configuration
      if (!this.validateBrand(brandConfig)) {
        throw new Error(`Invalid brand configuration from ${url}`);
      }

      // Add to our brands
      this.addBrand(brandConfig);

      // Add to external URLs
      this.externalBrandUrls.set(brandId, url);

      return await this.loadBrand(brandId);
    } catch (error) {
      console.error(`Failed to load brand from ${url}:`, error);
      return null;
    }
  }

  /**
   * Add external brand URL
   */
  addExternalBrandUrl(brandId: string, url: string): void {
    this.externalBrandUrls.set(brandId, url);
  }

  /**
   * Get external brand URLs
   */
  getExternalBrandUrls(): Map<string, string> {
    return new Map(this.externalBrandUrls);
  }
}

// Create default instance
export const defaultBrandLoader = new DefaultBrandLoader();

// Create dynamic instance
export const dynamicBrandLoader = new DynamicBrandLoader();

// Export utility functions
export const loadBrand = (brandId: string) =>
  defaultBrandLoader.loadBrand(brandId);
export const loadAllBrands = () => defaultBrandLoader.loadAllBrands();
export const validateBrand = (brandConfig: BrandConfig) =>
  defaultBrandLoader.validateBrand(brandConfig);
export const getBrandTokens = (brandId: string, theme: "light" | "dark") =>
  defaultBrandLoader.getBrandTokens(brandId, theme);
