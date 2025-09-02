import { breakpoints, type Breakpoint } from "../hooks/useBreakpoint";

// Responsive CSS media query generators
export const responsiveStyles = {
  // Generate media query for specific breakpoint
  up: (breakpoint: Breakpoint) =>
    `@media (min-width: ${breakpoints[breakpoint]}px)`,
  down: (breakpoint: Breakpoint) =>
    `@media (max-width: ${breakpoints[breakpoint] - 1}px)`,
  between: (minBreakpoint: Breakpoint, maxBreakpoint: Breakpoint) =>
    `@media (min-width: ${breakpoints[minBreakpoint]}px) and (max-width: ${
      breakpoints[maxBreakpoint] - 1
    }px)`,

  // Mobile-first breakpoints
  xs: `@media (min-width: ${breakpoints.xs}px)`,
  sm: `@media (min-width: ${breakpoints.sm}px)`,
  md: `@media (min-width: ${breakpoints.md}px)`,
  lg: `@media (min-width: ${breakpoints.lg}px)`,
  xl: `@media (min-width: ${breakpoints.xl}px)`,

  // Mobile-only
  mobile: `@media (max-width: ${breakpoints.sm - 1}px)`,
  tablet: `@media (min-width: ${breakpoints.sm}px) and (max-width: ${
    breakpoints.md - 1
  }px)`,
  desktop: `@media (min-width: ${breakpoints.md}px)`,
};

// Responsive design tokens
export const responsiveTokens = {
  // Responsive spacing
  spacing: {
    xs: { xs: 4, sm: 6, md: 8, lg: 10, xl: 12 },
    sm: { xs: 8, sm: 12, md: 16, lg: 20, xl: 24 },
    md: { xs: 12, sm: 16, md: 24, lg: 32, xl: 40 },
    lg: { xs: 16, sm: 24, md: 32, lg: 40, xl: 48 },
    xl: { xs: 24, sm: 32, md: 48, lg: 56, xl: 64 },
  },

  // Responsive font sizes
  fontSize: {
    xs: { xs: 10, sm: 11, md: 12, lg: 13, xl: 14 },
    sm: { xs: 12, sm: 13, md: 14, lg: 15, xl: 16 },
    md: { xs: 14, sm: 15, md: 16, lg: 17, xl: 18 },
    lg: { xs: 16, sm: 17, md: 18, lg: 19, xl: 20 },
    xl: { xs: 18, sm: 19, md: 20, lg: 21, xl: 24 },
  },

  // Responsive component sizing
  component: {
    button: {
      height: { xs: 44, sm: 42, md: 40, lg: 38, xl: 36 }, // Touch-friendly on mobile
      padding: {
        xs: "12px 16px",
        sm: "10px 14px",
        md: "8px 16px",
        lg: "6px 14px",
        xl: "6px 12px",
      },
      fontSize: { xs: 16, sm: 15, md: 14, lg: 13, xl: 12 }, // Prevent zoom on iOS
    },
    input: {
      height: { xs: 48, sm: 44, md: 40, lg: 38, xl: 36 }, // Touch-friendly on mobile
      padding: {
        xs: "12px 16px",
        sm: "10px 14px",
        md: "8px 12px",
        lg: "6px 10px",
        xl: "6px 8px",
      },
      fontSize: { xs: 16, sm: 15, md: 14, lg: 13, xl: 12 }, // Prevent zoom on iOS
    },
    icon: {
      size: { xs: 24, sm: 22, md: 20, lg: 18, xl: 16 },
      touchTarget: { xs: 44, sm: 40, md: 32, lg: 28, xl: 24 },
    },
  },
};

// Generate responsive CSS classes
export const generateResponsiveClasses = (
  baseClass: string,
  responsiveProps: Record<string, unknown>
) => {
  const classes: string[] = [baseClass];

  Object.entries(responsiveProps).forEach(([breakpoint, styles]) => {
    if (breakpoint === "base") {
      // Base styles (mobile-first)
      classes.push(
        `${baseClass} { ${Object.entries(styles)
          .map(([prop, value]) => `${prop}: ${value};`)
          .join(" ")} }`
      );
    } else {
      // Responsive styles
      const mediaQuery = responsiveStyles[breakpoint as Breakpoint];
      classes.push(
        `${mediaQuery} { ${baseClass} { ${Object.entries(styles)
          .map(([prop, value]) => `${prop}: ${value};`)
          .join(" ")} } }`
      );
    }
  });

  return classes.join("\n");
};

// Responsive utility functions
export const getResponsiveValue = <T>(
  values: Partial<Record<Breakpoint, T>>,
  defaultValue: T,
  currentBreakpoint: Breakpoint
): T => {
  // Try exact match first
  if (values[currentBreakpoint] !== undefined) {
    return values[currentBreakpoint]!;
  }

  // Try larger breakpoints (desktop-first)
  const breakpointOrder: Breakpoint[] = ["xl", "lg", "md", "sm", "xs"];
  const currentIndex = breakpointOrder.indexOf(currentBreakpoint);

  for (let i = currentIndex; i < breakpointOrder.length; i++) {
    const bp = breakpointOrder[i];
    if (values[bp] !== undefined) {
      return values[bp]!;
    }
  }

  return defaultValue;
};

// CSS-in-JS responsive helper
export const responsive = {
  // Generate responsive styles object
  styles: (breakpointStyles: Record<Breakpoint, React.CSSProperties>) => {
    return {
      // Base styles (mobile-first)
      ...breakpointStyles.xs,
      // Responsive overrides
      [responsiveStyles.sm]: breakpointStyles.sm,
      [responsiveStyles.md]: breakpointStyles.md,
      [responsiveStyles.lg]: breakpointStyles.lg,
      [responsiveStyles.xl]: breakpointStyles.xl,
    };
  },

  // Generate responsive spacing
  spacing: (size: keyof typeof responsiveTokens.spacing) => {
    return {
      padding: responsiveTokens.spacing[size].xs,
      [responsiveStyles.sm]: { padding: responsiveTokens.spacing[size].sm },
      [responsiveStyles.md]: { padding: responsiveTokens.spacing[size].md },
      [responsiveStyles.lg]: { padding: responsiveTokens.spacing[size].lg },
      [responsiveStyles.xl]: { padding: responsiveTokens.spacing[size].xl },
    };
  },

  // Generate responsive font sizes
  fontSize: (size: keyof typeof responsiveTokens.fontSize) => {
    return {
      fontSize: responsiveTokens.fontSize[size].xs,
      [responsiveStyles.sm]: { fontSize: responsiveTokens.fontSize[size].sm },
      [responsiveStyles.md]: { fontSize: responsiveTokens.fontSize[size].md },
      [responsiveStyles.lg]: { fontSize: responsiveTokens.fontSize[size].lg },
      [responsiveStyles.xl]: { fontSize: responsiveTokens.fontSize[size].xl },
    };
  },
};

// Export breakpoints for use in other files
export { breakpoints };
