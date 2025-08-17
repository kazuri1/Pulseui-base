import React, { type ReactNode } from "react";
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
export interface BrandContextType {
    currentBrand: Brand | null;
    brandId: string | null;
    setBrand: (brandId: string | null) => void;
    availableBrands: Brand[];
    isDefaultBrand: boolean;
    isCustomBrand: boolean;
}
export interface BrandProviderProps {
    children: ReactNode;
    defaultBrand?: string | null;
    persistBrand?: boolean;
    availableBrands?: Brand[];
}
export declare const BrandProvider: React.FC<BrandProviderProps>;
export declare const useBrand: () => BrandContextType;
