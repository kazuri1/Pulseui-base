export declare const breakpoints: {
    readonly xs: 576;
    readonly sm: 768;
    readonly md: 992;
    readonly lg: 1200;
    readonly xl: 1400;
};
export type Breakpoint = keyof typeof breakpoints;
export type BreakpointValue = (typeof breakpoints)[Breakpoint];
export declare const useBreakpoint: () => {
    breakpoint: "xs" | "sm" | "md" | "lg" | "xl";
    width: number;
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
    isExtraSmall: boolean;
    isSmall: boolean;
    isMedium: boolean;
    isLarge: boolean;
    isExtraLarge: boolean;
};
export declare const useBreakpointUp: (targetBreakpoint: Breakpoint) => boolean;
export declare const useBreakpointDown: (targetBreakpoint: Breakpoint) => boolean;
export declare const useBreakpointBetween: (minBreakpoint: Breakpoint, maxBreakpoint: Breakpoint) => boolean;
export declare const useResponsiveValue: <T>(values: Partial<Record<Breakpoint, T>>, defaultValue: T) => T;
export declare const useResponsiveStyles: () => {
    breakpoint: "xs" | "sm" | "md" | "lg" | "xl";
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
    spacing: {
        xs: number;
        sm: number;
        md: number;
        lg: number;
        xl: number;
    };
    sizing: {
        button: {
            height: number;
            padding: string;
            fontSize: number;
        };
        input: {
            height: number;
            padding: string;
            fontSize: number;
        };
        icon: {
            size: number;
            touchTarget: number;
        };
    };
    layout: {
        container: {
            padding: string;
            maxWidth: string;
        };
        grid: {
            columns: number;
            gap: number;
        };
    };
};
export declare const getBreakpointValue: (breakpoint: Breakpoint) => number;
export declare const isBreakpointUp: (width: number, breakpoint: Breakpoint) => boolean;
export declare const isBreakpointDown: (width: number, breakpoint: Breakpoint) => boolean;
export declare const isBreakpointBetween: (width: number, minBreakpoint: Breakpoint, maxBreakpoint: Breakpoint) => boolean;
