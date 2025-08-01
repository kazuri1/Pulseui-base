import { useState, useEffect } from "react";

// Breakpoint definitions matching our design tokens
export const breakpoints = {
  xs: 576, // Extra small devices (phones)
  sm: 768, // Small devices (tablets)
  md: 992, // Medium devices (small laptops)
  lg: 1200, // Large devices (desktops)
  xl: 1400, // Extra large devices (large desktops)
} as const;

export type Breakpoint = keyof typeof breakpoints;
export type BreakpointValue = (typeof breakpoints)[Breakpoint];

// Hook to get current breakpoint
export const useBreakpoint = () => {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>("lg");
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      const currentWidth = window.innerWidth;
      setWidth(currentWidth);

      // Determine current breakpoint
      if (currentWidth >= breakpoints.xl) {
        setBreakpoint("xl");
      } else if (currentWidth >= breakpoints.lg) {
        setBreakpoint("lg");
      } else if (currentWidth >= breakpoints.md) {
        setBreakpoint("md");
      } else if (currentWidth >= breakpoints.sm) {
        setBreakpoint("sm");
      } else {
        setBreakpoint("xs");
      }
    };

    // Set initial values
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return {
    breakpoint,
    width,
    isMobile: breakpoint === "xs" || breakpoint === "sm",
    isTablet: breakpoint === "sm" || breakpoint === "md",
    isDesktop: breakpoint === "lg" || breakpoint === "xl",
    isExtraSmall: breakpoint === "xs",
    isSmall: breakpoint === "sm",
    isMedium: breakpoint === "md",
    isLarge: breakpoint === "lg",
    isExtraLarge: breakpoint === "xl",
  };
};

// Hook to check if screen is above a specific breakpoint
export const useBreakpointUp = (targetBreakpoint: Breakpoint) => {
  const { width } = useBreakpoint();
  return width >= breakpoints[targetBreakpoint];
};

// Hook to check if screen is below a specific breakpoint
export const useBreakpointDown = (targetBreakpoint: Breakpoint) => {
  const { width } = useBreakpoint();
  return width < breakpoints[targetBreakpoint];
};

// Hook to check if screen is between two breakpoints
export const useBreakpointBetween = (
  minBreakpoint: Breakpoint,
  maxBreakpoint: Breakpoint
) => {
  const { width } = useBreakpoint();
  return (
    width >= breakpoints[minBreakpoint] && width < breakpoints[maxBreakpoint]
  );
};

// Hook to get responsive values based on breakpoint
export const useResponsiveValue = <T>(
  values: Partial<Record<Breakpoint, T>>,
  defaultValue: T
): T => {
  const { breakpoint } = useBreakpoint();

  // Find the best matching value for current breakpoint
  const getValue = (): T => {
    // Try exact match first
    if (values[breakpoint] !== undefined) {
      return values[breakpoint]!;
    }

    // Try larger breakpoints (desktop-first)
    const breakpointOrder: Breakpoint[] = ["xl", "lg", "md", "sm", "xs"];
    const currentIndex = breakpointOrder.indexOf(breakpoint);

    for (let i = currentIndex; i < breakpointOrder.length; i++) {
      const bp = breakpointOrder[i];
      if (values[bp] !== undefined) {
        return values[bp]!;
      }
    }

    return defaultValue;
  };

  return getValue();
};

// Hook for responsive styles
export const useResponsiveStyles = () => {
  const { breakpoint, isMobile, isTablet, isDesktop } = useBreakpoint();

  return {
    breakpoint,
    isMobile,
    isTablet,
    isDesktop,
    // Responsive spacing
    spacing: {
      xs: isMobile ? 4 : 8,
      sm: isMobile ? 8 : 16,
      md: isMobile ? 12 : 24,
      lg: isMobile ? 16 : 32,
      xl: isMobile ? 24 : 48,
    },
    // Responsive sizing
    sizing: {
      button: {
        height: isMobile ? 44 : 40, // Touch-friendly on mobile
        padding: isMobile ? "12px 16px" : "8px 16px",
        fontSize: isMobile ? 16 : 14, // Prevent zoom on iOS
      },
      input: {
        height: isMobile ? 48 : 40, // Touch-friendly on mobile
        padding: isMobile ? "12px 16px" : "8px 12px",
        fontSize: isMobile ? 16 : 14, // Prevent zoom on iOS
      },
      icon: {
        size: isMobile ? 24 : 20,
        touchTarget: isMobile ? 44 : 32,
      },
    },
    // Responsive layout
    layout: {
      container: {
        padding: isMobile ? "0 16px" : "0 24px",
        maxWidth: isMobile ? "100%" : "1200px",
      },
      grid: {
        columns: isMobile ? 1 : 12,
        gap: isMobile ? 16 : 24,
      },
    },
  };
};

// Utility functions
export const getBreakpointValue = (breakpoint: Breakpoint): number => {
  return breakpoints[breakpoint];
};

export const isBreakpointUp = (
  width: number,
  breakpoint: Breakpoint
): boolean => {
  return width >= breakpoints[breakpoint];
};

export const isBreakpointDown = (
  width: number,
  breakpoint: Breakpoint
): boolean => {
  return width < breakpoints[breakpoint];
};

export const isBreakpointBetween = (
  width: number,
  minBreakpoint: Breakpoint,
  maxBreakpoint: Breakpoint
): boolean => {
  return (
    width >= breakpoints[minBreakpoint] && width < breakpoints[maxBreakpoint]
  );
};
