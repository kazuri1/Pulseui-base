// IBM Brand Configuration
// Maps 1:1 with PulseUI token schema
// Based on IBM Design Language and Carbon Design System

export interface IBMBrandConfig {
  id: string;
  name: string;
  version: string;
  description: string;
  figmaFileKey?: string;
  tokens: {
    light: IBMTokens;
    dark: IBMTokens;
  };
}

export interface IBMTokens {
  colors: IBMColors;
  spacing: IBMSpacing;
  typography: IBMTypography;
  effects: IBMEffects;
  sizes: IBMSizes;
  breakpoints: IBMBreakpoints;
}

export interface IBMColors {
  // Primary colors (IBM Blue)
  primary: string;
  "primary-hover": string;
  "primary-light": string;
  "primary-dark": string;

  // Secondary colors
  secondary: string;
  "secondary-hover": string;

  // Semantic colors
  success: string;
  warning: string;
  error: string;
  info: string;

  // Surface colors
  surface: string;
  "surface-hover": string;
  "surface-secondary": string;
  "surface-tertiary": string;
  "surface-variant": string;

  // Text colors
  "text-primary": string;
  "text-secondary": string;
  "text-muted": string;
  "text-disabled": string;

  // Border colors
  "border-primary": string;
  "border-secondary": string;
  "border-focus": string;

  // Background colors
  background: string;

  // Component-specific colors
  "button-primary": string;
  "button-primary-hover": string;
  "button-secondary": string;
  "button-secondary-hover": string;
  "button-outline": string;
  "button-outline-hover": string;
  "button-text": string;
  "button-text-hover": string;

  // Input colors
  "input-background": string;
  "input-border": string;
  "input-border-focus": string;
  "input-text": string;
  "input-placeholder": string;

  // Icon colors
  "icon-primary": string;
  "icon-secondary": string;
  "icon-muted": string;
  "icon-inherit": string;

  // Status colors
  "color-success": string;
  "color-warning": string;
  "color-error": string;
  "color-info": string;

  // Legacy support (mapped to new system)
  white: string;
  black: string;
  gray: string;

  // Color scales (IBM Carbon Design System)
  "blue-0": string;
  "blue-1": string;
  "blue-2": string;
  "blue-3": string;
  "blue-4": string;
  "blue-5": string;
  "blue-6": string;
  "blue-7": string;
  "blue-8": string;
  "blue-9": string;

  "gray-0": string;
  "gray-1": string;
  "gray-2": string;
  "gray-3": string;
  "gray-4": string;
  "gray-5": string;
  "gray-6": string;
  "gray-7": string;
  "gray-8": string;
  "gray-9": string;

  "red-0": string;
  "red-1": string;
  "red-2": string;
  "red-3": string;
  "red-4": string;
  "red-5": string;
  "red-6": string;
  "red-7": string;
  "red-8": string;
  "red-9": string;

  "green-0": string;
  "green-1": string;
  "green-2": string;
  "green-3": string;
  "green-4": string;
  "green-5": string;
  "green-6": string;
  "green-7": string;
  "green-8": string;
  "green-9": string;

  "yellow-0": string;
  "yellow-1": string;
  "yellow-2": string;
  "yellow-3": string;
  "yellow-4": string;
  "yellow-5": string;
  "yellow-6": string;
  "yellow-7": string;
  "yellow-8": string;
  "yellow-9": string;
}

export interface IBMSpacing {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
  "2xl": string;
  icon: string;
}

export interface IBMTypography {
  "font-size-xs": string;
  "font-size-sm": string;
  "font-size-md": string;
  "font-size-lg": string;
  "font-size-xl": string;
  "font-size-xxl": string;

  "line-height-xs": string;
  "line-height-sm": string;
  "line-height-md": string;
  "line-height-lg": string;
  "line-height-xl": string;
  "line-height-xxl": string;
  "line-height-tight": string;
  "line-height-normal": string;

  "font-weight-normal": string;
  "font-weight-medium": string;
  "font-weight-semibold": string;
  "font-weight-bold": string;

  "font-family": string;
}

export interface IBMEffects {
  "radius-xs": string;
  "radius-sm": string;
  "radius-md": string;
  "radius-lg": string;
  "radius-xl": string;
  "radius-full": string;

  "shadow-hover": string;
  "shadow-normal": string;
  "shadow-md": string;
  "shadow-lg": string;

  "outline-focus": string;
  "outline-offset": string;

  "transform-hover": string;

  "motion-duration-instant": string;
  "motion-duration-fast": string;
  "motion-duration-normal": string;
  "motion-duration-slow": string;
  "motion-duration-slower": string;
  "motion-duration-slowest": string;

  "motion-easing-linear": string;
  "motion-easing-ease-in": string;
  "motion-easing-ease-out": string;
  "motion-easing-ease-in-out": string;
  "motion-easing-bounce": string;
  "motion-easing-elastic": string;

  "motion-transition-fast": string;
  "motion-transition-normal": string;
  "motion-transition-slow": string;
  "motion-transition-bounce": string;
  "motion-transition-elastic": string;
}

export interface IBMSizes {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;

  "icon-size-xs": string;
  "icon-size-sm": string;
  "icon-size-md": string;
  "icon-size-lg": string;
  "icon-size-xl": string;

  "switch-track-width-sm": string;
  "switch-track-height-sm": string;
  "switch-thumb-size-sm": string;
  "switch-thumb-offset-sm": string;
  "switch-thumb-translate-sm": string;

  "switch-track-width-md": string;
  "switch-track-height-md": string;
  "switch-thumb-size-md": string;
  "switch-thumb-offset-md": string;
  "switch-thumb-translate-md": string;

  "switch-track-width-lg": string;
  "switch-track-height-lg": string;
  "switch-thumb-size-lg": string;
  "switch-thumb-offset-lg": string;
  "switch-thumb-translate-lg": string;

  "border-width-thin": string;
  "border-width-normal": string;
  "border-width-thick": string;

  "opacity-0": string;
  "opacity-25": string;
  "opacity-50": string;
  "opacity-75": string;
  "opacity-100": string;

  "widget-min-width": string;
  "widget-max-width": string;
  "control-size-sm": string;

  "dropdown-min-width": string;
  "dropdown-min-width-mobile": string;
  "dropdown-max-height": string;
  "dropdown-option-min-width": string;
}

export interface IBMBreakpoints {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;

  mobile: string;
  tablet: string;
  desktop: string;
  wide: string;
}

// IBM Brand Configuration
export const ibmBrand: IBMBrandConfig = {
  id: "ibm",
  name: "IBM",
  version: "1.0.0",
  description:
    "IBM Design Language - Carbon Design System inspired tokens that map 1:1 with PulseUI schema",
  figmaFileKey: "", // To be filled when Figma file is available

  tokens: {
    light: {
      colors: {
        // Primary colors (IBM Blue - Carbon Design System)
        primary: "#0f62fe", // IBM Blue 60
        "primary-hover": "#0050e6", // IBM Blue 70
        "primary-light": "#78a9ff", // IBM Blue 40
        "primary-dark": "#002d9c", // IBM Blue 80

        // Secondary colors
        secondary: "#525252", // IBM Gray 60
        "secondary-hover": "#393939", // IBM Gray 70

        // Semantic colors
        success: "#24a148", // IBM Green 60
        warning: "#f1c21b", // IBM Yellow 60
        error: "#da1e28", // IBM Red 60
        info: "#0f62fe", // IBM Blue 60

        // Surface colors
        surface: "#ffffff", // IBM White
        "surface-hover": "#f4f4f4", // IBM Gray 10
        "surface-secondary": "#f4f4f4", // IBM Gray 10
        "surface-tertiary": "#e0e0e0", // IBM Gray 20
        "surface-variant": "#f4f4f4", // IBM Gray 10

        // Text colors
        "text-primary": "#161616", // IBM Gray 100
        "text-secondary": "#525252", // IBM Gray 60
        "text-muted": "#8d8d8d", // IBM Gray 50
        "text-disabled": "#c1c1c1", // IBM Gray 30

        // Border colors
        "border-primary": "#e0e0e0", // IBM Gray 20
        "border-secondary": "#c1c1c1", // IBM Gray 30
        "border-focus": "#0f62fe", // IBM Blue 60

        // Background colors
        background: "#ffffff", // IBM White

        // Component-specific colors
        "button-primary": "#0f62fe", // IBM Blue 60
        "button-primary-hover": "#0050e6", // IBM Blue 70
        "button-secondary": "#f4f4f4", // IBM Gray 10
        "button-secondary-hover": "#e0e0e0", // IBM Gray 20
        "button-outline": "#0f62fe", // IBM Blue 60
        "button-outline-hover": "#0050e6", // IBM Blue 70
        "button-text": "#525252", // IBM Gray 60
        "button-text-hover": "#161616", // IBM Gray 100

        // Input colors
        "input-background": "#ffffff", // IBM White
        "input-border": "#e0e0e0", // IBM Gray 20
        "input-border-focus": "#0f62fe", // IBM Blue 60
        "input-text": "#161616", // IBM Gray 100
        "input-placeholder": "#8d8d8d", // IBM Gray 50

        // Icon colors
        "icon-primary": "#161616", // IBM Gray 100
        "icon-secondary": "#525252", // IBM Gray 60
        "icon-muted": "#8d8d8d", // IBM Gray 50
        "icon-inherit": "currentColor",

        // Status colors
        "color-success": "#24a148", // IBM Green 60
        "color-warning": "#f1c21b", // IBM Yellow 60
        "color-error": "#da1e28", // IBM Red 60
        "color-info": "#0f62fe", // IBM Blue 60

        // Legacy support
        white: "#ffffff",
        black: "#000000",
        gray: "#525252",

        // Color scales (IBM Carbon Design System)
        "blue-0": "#edf5ff", // IBM Blue 10
        "blue-1": "#d0e2ff", // IBM Blue 20
        "blue-2": "#a6c8ff", // IBM Blue 30
        "blue-3": "#78a9ff", // IBM Blue 40
        "blue-4": "#4589ff", // IBM Blue 50
        "blue-5": "#0f62fe", // IBM Blue 60
        "blue-6": "#0050e6", // IBM Blue 70
        "blue-7": "#0043ce", // IBM Blue 80
        "blue-8": "#002d9c", // IBM Blue 90
        "blue-9": "#001d6c", // IBM Blue 100

        "gray-0": "#ffffff", // IBM Gray 0
        "gray-1": "#f4f4f4", // IBM Gray 10
        "gray-2": "#e0e0e0", // IBM Gray 20
        "gray-3": "#c1c1c1", // IBM Gray 30
        "gray-4": "#a8a8a8", // IBM Gray 40
        "gray-5": "#8d8d8d", // IBM Gray 50
        "gray-6": "#525252", // IBM Gray 60
        "gray-7": "#393939", // IBM Gray 70
        "gray-8": "#262626", // IBM Gray 80
        "gray-9": "#161616", // IBM Gray 90

        "red-0": "#fff1f1", // IBM Red 10
        "red-1": "#ffd7d9", // IBM Red 20
        "red-2": "#ffb3b8", // IBM Red 30
        "red-3": "#ff8389", // IBM Red 40
        "red-4": "#ff6168", // IBM Red 50
        "red-5": "#da1e28", // IBM Red 60
        "red-6": "#a2191f", // IBM Red 70
        "red-7": "#750e13", // IBM Red 80
        "red-8": "#520408", // IBM Red 90
        "red-9": "#2d0709", // IBM Red 100

        "green-0": "#defbe6", // IBM Green 10
        "green-1": "#a7f0ba", // IBM Green 20
        "green-2": "#6fdc8c", // IBM Green 30
        "green-3": "#42be65", // IBM Green 40
        "green-4": "#24a148", // IBM Green 50
        "green-5": "#198038", // IBM Green 60
        "green-6": "#14c38d", // IBM Green 70
        "green-7": "#0d9d6b", // IBM Green 80
        "green-8": "#0a7c3a", // IBM Green 90
        "green-9": "#044317", // IBM Green 100

        "yellow-0": "#fef7e0", // IBM Yellow 10
        "yellow-1": "#fddc69", // IBM Yellow 20
        "yellow-2": "#f1c21b", // IBM Yellow 30
        "yellow-3": "#d2a106", // IBM Yellow 40
        "yellow-4": "#b28600", // IBM Yellow 50
        "yellow-5": "#8e4a00", // IBM Yellow 60
        "yellow-6": "#693400", // IBM Yellow 70
        "yellow-7": "#522700", // IBM Yellow 80
        "yellow-8": "#3d1e00", // IBM Yellow 90
        "yellow-9": "#291400", // IBM Yellow 100
      },

      spacing: {
        xs: "2px", // IBM spacing scale
        sm: "4px", // IBM spacing scale
        md: "8px", // IBM spacing scale
        lg: "16px", // IBM spacing scale
        xl: "24px", // IBM spacing scale
        xxl: "32px", // IBM spacing scale
        "2xl": "48px", // IBM spacing scale
        icon: "6px", // IBM icon spacing
      },

      typography: {
        "font-size-xs": "11px", // IBM Carbon font scale
        "font-size-sm": "13px", // IBM Carbon font scale
        "font-size-md": "14px", // IBM Carbon font scale
        "font-size-lg": "16px", // IBM Carbon font scale
        "font-size-xl": "18px", // IBM Carbon font scale
        "font-size-xxl": "20px", // IBM Carbon font scale

        "line-height-xs": "14px", // IBM line height scale
        "line-height-sm": "18px", // IBM line height scale
        "line-height-md": "20px", // IBM line height scale
        "line-height-lg": "24px", // IBM line height scale
        "line-height-xl": "28px", // IBM line height scale
        "line-height-xxl": "32px", // IBM line height scale
        "line-height-tight": "1.2", // IBM tight line height
        "line-height-normal": "1.5", // IBM normal line height

        "font-weight-normal": "400", // IBM font weights
        "font-weight-medium": "500", // IBM font weights
        "font-weight-semibold": "600", // IBM font weights
        "font-weight-bold": "700", // IBM font weights

        "font-family":
          '"IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif',
      },

      effects: {
        "radius-xs": "2px", // IBM border radius scale
        "radius-sm": "4px", // IBM border radius scale
        "radius-md": "6px", // IBM border radius scale
        "radius-lg": "8px", // IBM border radius scale
        "radius-xl": "12px", // IBM border radius scale
        "radius-full": "9999px", // IBM full radius

        "shadow-hover": "0 4px 12px rgba(0, 0, 0, 0.15)", // IBM shadow
        "shadow-normal": "0 2px 4px rgba(0, 0, 0, 0.1)", // IBM shadow
        "shadow-md": "0 4px 8px rgba(0, 0, 0, 0.12)", // IBM shadow
        "shadow-lg": "0 8px 16px rgba(0, 0, 0, 0.15)", // IBM shadow

        "outline-focus": "2px solid #0f62fe", // IBM focus outline
        "outline-offset": "2px", // IBM focus offset

        "transform-hover": "translateY(-1px)", // IBM hover transform

        "motion-duration-instant": "1ms", // IBM motion scale
        "motion-duration-fast": "50ms", // IBM motion scale
        "motion-duration-normal": "100ms", // IBM motion scale
        "motion-duration-slow": "200ms", // IBM motion scale
        "motion-duration-slower": "300ms", // IBM motion scale
        "motion-duration-slowest": "500ms", // IBM motion scale

        "motion-easing-linear": "linear", // IBM easing
        "motion-easing-ease-in": "ease-in", // IBM easing
        "motion-easing-ease-out": "ease-out", // IBM easing
        "motion-easing-ease-in-out": "ease-in-out", // IBM easing
        "motion-easing-bounce": "cubic-bezier(0.68, -0.55, 0.265, 1.55)", // IBM easing
        "motion-easing-elastic": "cubic-bezier(0.175, 0.885, 0.32, 1.275)", // IBM easing

        "motion-transition-fast": "all 50ms ease-out", // IBM transitions
        "motion-transition-normal": "all 100ms ease-out", // IBM transitions
        "motion-transition-slow": "all 200ms ease-out", // IBM transitions
        "motion-transition-bounce":
          "all 100ms cubic-bezier(0.68, -0.55, 0.265, 1.55)", // IBM transitions
        "motion-transition-elastic":
          "all 200ms cubic-bezier(0.175, 0.885, 0.32, 1.275)", // IBM transitions
      },

      sizes: {
        xs: "24px", // IBM size scale
        sm: "32px", // IBM size scale
        md: "40px", // IBM size scale
        lg: "48px", // IBM size scale
        xl: "56px", // IBM size scale
        xxl: "64px", // IBM size scale

        "icon-size-xs": "12px", // IBM icon size scale
        "icon-size-sm": "16px", // IBM icon size scale
        "icon-size-md": "20px", // IBM icon size scale
        "icon-size-lg": "24px", // IBM icon size scale
        "icon-size-xl": "32px", // IBM icon size scale

        "switch-track-width-sm": "32px", // IBM switch sizes
        "switch-track-height-sm": "18px",
        "switch-thumb-size-sm": "16px",
        "switch-thumb-offset-sm": "1px",
        "switch-thumb-translate-sm": "14px",

        "switch-track-width-md": "44px",
        "switch-track-height-md": "24px",
        "switch-thumb-size-md": "20px",
        "switch-thumb-offset-md": "2px",
        "switch-thumb-translate-md": "20px",

        "switch-track-width-lg": "56px",
        "switch-track-height-lg": "30px",
        "switch-thumb-size-lg": "24px",
        "switch-thumb-offset-lg": "3px",
        "switch-thumb-translate-lg": "26px",

        "border-width-thin": "1px", // IBM border widths
        "border-width-normal": "2px",
        "border-width-thick": "3px",

        "opacity-0": "0", // IBM opacity scale
        "opacity-25": "0.25",
        "opacity-50": "0.5",
        "opacity-75": "0.75",
        "opacity-100": "1",

        "widget-min-width": "280px", // IBM widget sizes
        "widget-max-width": "400px",
        "control-size-sm": "32px",

        "dropdown-min-width": "80px", // IBM dropdown sizes
        "dropdown-min-width-mobile": "70px",
        "dropdown-max-height": "200px",
        "dropdown-option-min-width": "100px",
      },

      breakpoints: {
        xs: "0px", // IBM breakpoint scale
        sm: "576px", // IBM breakpoint scale
        md: "768px", // IBM breakpoint scale
        lg: "992px", // IBM breakpoint scale
        xl: "1200px", // IBM breakpoint scale
        xxl: "1400px", // IBM breakpoint scale

        mobile: "480px", // IBM legacy breakpoints
        tablet: "768px",
        desktop: "1024px",
        wide: "1200px",
      },
    },

    dark: {
      colors: {
        // Primary colors (IBM Blue - Dark theme)
        primary: "#78a9ff", // IBM Blue 40 (lighter for dark)
        "primary-hover": "#a6c8ff", // IBM Blue 30 (lighter for dark)
        "primary-light": "#d0e2ff", // IBM Blue 20 (lighter for dark)
        "primary-dark": "#4589ff", // IBM Blue 50 (lighter for dark)

        // Secondary colors
        secondary: "#a8a8a8", // IBM Gray 40 (lighter for dark)
        "secondary-hover": "#c1c1c1", // IBM Gray 30 (lighter for dark)

        // Semantic colors
        success: "#42be65", // IBM Green 40 (lighter for dark)
        warning: "#f1c21b", // IBM Yellow 30 (same for dark)
        error: "#ff8389", // IBM Red 40 (lighter for dark)
        info: "#78a9ff", // IBM Blue 40 (lighter for dark)

        // Surface colors
        surface: "#161616", // IBM Gray 90 (dark surface)
        "surface-hover": "#262626", // IBM Gray 80 (dark hover)
        "surface-secondary": "#262626", // IBM Gray 80 (dark secondary)
        "surface-tertiary": "#393939", // IBM Gray 70 (dark tertiary)
        "surface-variant": "#2c2c2c", // IBM Gray 85 (dark variant)

        // Text colors
        "text-primary": "#ffffff", // IBM White (dark text)
        "text-secondary": "#c1c1c1", // IBM Gray 30 (dark secondary text)
        "text-muted": "#8d8d8d", // IBM Gray 50 (dark muted text)
        "text-disabled": "#525252", // IBM Gray 60 (dark disabled text)

        // Border colors
        "border-primary": "#393939", // IBM Gray 70 (dark border)
        "border-secondary": "#525252", // IBM Gray 60 (dark secondary border)
        "border-focus": "#78a9ff", // IBM Blue 40 (dark focus)

        // Background colors
        background: "#0f0f0f", // IBM Gray 95 (dark background)

        // Component-specific colors
        "button-primary": "#78a9ff", // IBM Blue 40 (dark primary)
        "button-primary-hover": "#a6c8ff", // IBM Blue 30 (dark hover)
        "button-secondary": "#262626", // IBM Gray 80 (dark secondary)
        "button-secondary-hover": "#393939", // IBM Gray 70 (dark hover)
        "button-outline": "#78a9ff", // IBM Blue 40 (dark outline)
        "button-outline-hover": "#a6c8ff", // IBM Blue 30 (dark hover)
        "button-text": "#c1c1c1", // IBM Gray 30 (dark text)
        "button-text-hover": "#ffffff", // IBM White (dark hover)

        // Input colors
        "input-background": "#262626", // IBM Gray 80 (dark input)
        "input-border": "#393939", // IBM Gray 70 (dark border)
        "input-border-focus": "#78a9ff", // IBM Blue 40 (dark focus)
        "input-text": "#ffffff", // IBM White (dark text)
        "input-placeholder": "#8d8d8d", // IBM Gray 50 (dark placeholder)

        // Icon colors
        "icon-primary": "#ffffff", // IBM White (dark icon)
        "icon-secondary": "#c1c1c1", // IBM Gray 30 (dark secondary icon)
        "icon-muted": "#8d8d8d", // IBM Gray 50 (dark muted icon)
        "icon-inherit": "currentColor",

        // Status colors
        "color-success": "#42be65", // IBM Green 40 (dark success)
        "color-warning": "#f1c21b", // IBM Yellow 30 (dark warning)
        "color-error": "#ff8389", // IBM Red 40 (dark error)
        "color-info": "#78a9ff", // IBM Blue 40 (dark info)

        // Legacy support
        white: "#ffffff",
        black: "#000000",
        gray: "#a8a8a8",

        // Color scales (IBM Carbon Design System - Dark theme)
        "blue-0": "#001d6c", // IBM Blue 100 (dark blue-0)
        "blue-1": "#002d9c", // IBM Blue 90 (dark blue-1)
        "blue-2": "#0043ce", // IBM Blue 80 (dark blue-2)
        "blue-3": "#0050e6", // IBM Blue 70 (dark blue-3)
        "blue-4": "#0f62fe", // IBM Blue 60 (dark blue-4)
        "blue-5": "#4589ff", // IBM Blue 50 (dark blue-5)
        "blue-6": "#78a9ff", // IBM Blue 40 (dark blue-6)
        "blue-7": "#a6c8ff", // IBM Blue 30 (dark blue-7)
        "blue-8": "#d0e2ff", // IBM Blue 20 (dark blue-8)
        "blue-9": "#edf5ff", // IBM Blue 10 (dark blue-9)

        "gray-0": "#161616", // IBM Gray 90 (dark gray-0)
        "gray-1": "#262626", // IBM Gray 80 (dark gray-1)
        "gray-2": "#393939", // IBM Gray 70 (dark gray-2)
        "gray-3": "#525252", // IBM Gray 60 (dark gray-3)
        "gray-4": "#8d8d8d", // IBM Gray 50 (dark gray-4)
        "gray-5": "#a8a8a8", // IBM Gray 40 (dark gray-5)
        "gray-6": "#c1c1c1", // IBM Gray 30 (dark gray-6)
        "gray-7": "#e0e0e0", // IBM Gray 20 (dark gray-7)
        "gray-8": "#f4f4f4", // IBM Gray 10 (dark gray-8)
        "gray-9": "#ffffff", // IBM Gray 0 (dark gray-9)

        "red-0": "#2d0709", // IBM Red 100 (dark red-0)
        "red-1": "#520408", // IBM Red 90 (dark red-1)
        "red-2": "#750e13", // IBM Red 80 (dark red-2)
        "red-3": "#a2191f", // IBM Red 70 (dark red-3)
        "red-4": "#da1e28", // IBM Red 60 (dark red-4)
        "red-5": "#ff6168", // IBM Red 50 (dark red-5)
        "red-6": "#ff8389", // IBM Red 40 (dark red-6)
        "red-7": "#ffb3b8", // IBM Red 30 (dark red-7)
        "red-8": "#ffd7d9", // IBM Red 20 (dark red-8)
        "red-9": "#fff1f1", // IBM Red 10 (dark red-9)

        "green-0": "#044317", // IBM Green 100 (dark green-0)
        "green-1": "#0a7c3a", // IBM Green 90 (dark green-1)
        "green-2": "#0d9d6b", // IBM Green 80 (dark green-2)
        "green-3": "#14c38d", // IBM Green 70 (dark green-3)
        "green-4": "#198038", // IBM Green 60 (dark green-4)
        "green-5": "#24a148", // IBM Green 50 (dark green-5)
        "green-6": "#42be65", // IBM Green 40 (dark green-6)
        "green-7": "#6fdc8c", // IBM Green 30 (dark green-7)
        "green-8": "#a7f0ba", // IBM Green 20 (dark green-8)
        "green-9": "#defbe6", // IBM Green 10 (dark green-9)

        "yellow-0": "#291400", // IBM Yellow 100 (dark yellow-0)
        "yellow-1": "#3d1e00", // IBM Yellow 90 (dark yellow-1)
        "yellow-2": "#522700", // IBM Yellow 80 (dark yellow-2)
        "yellow-3": "#693400", // IBM Yellow 70 (dark yellow-3)
        "yellow-4": "#8e4a00", // IBM Yellow 60 (dark yellow-4)
        "yellow-5": "#b28600", // IBM Yellow 50 (dark yellow-5)
        "yellow-6": "#d2a106", // IBM Yellow 40 (dark yellow-6)
        "yellow-7": "#f1c21b", // IBM Yellow 30 (dark yellow-7)
        "yellow-8": "#fddc69", // IBM Yellow 20 (dark yellow-8)
        "yellow-9": "#fef7e0", // IBM Yellow 10 (dark yellow-9)
      },

      // Dark theme uses same spacing, typography, effects, sizes, and breakpoints
      spacing: {
        xs: "2px",
        sm: "4px",
        md: "8px",
        lg: "16px",
        xl: "24px",
        xxl: "32px",
        "2xl": "48px",
        icon: "6px",
      },

      typography: {
        "font-size-xs": "11px",
        "font-size-sm": "13px",
        "font-size-md": "14px",
        "font-size-lg": "16px",
        "font-size-xl": "18px",
        "font-size-xxl": "20px",

        "line-height-xs": "14px",
        "line-height-sm": "18px",
        "line-height-md": "20px",
        "line-height-lg": "24px",
        "line-height-xl": "28px",
        "line-height-xxl": "32px",
        "line-height-tight": "1.2",
        "line-height-normal": "1.5",

        "font-weight-normal": "400",
        "font-weight-medium": "500",
        "font-weight-semibold": "600",
        "font-weight-bold": "700",

        "font-family":
          '"IBM Plex Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif',
      },

      effects: {
        "radius-xs": "2px",
        "radius-sm": "4px",
        "radius-md": "6px",
        "radius-lg": "8px",
        "radius-xl": "12px",
        "radius-full": "9999px",

        "shadow-hover": "0 4px 12px rgba(0, 0, 0, 0.3)", // Darker shadow for dark theme
        "shadow-normal": "0 2px 4px rgba(0, 0, 0, 0.2)", // Darker shadow for dark theme
        "shadow-md": "0 4px 8px rgba(0, 0, 0, 0.25)", // Darker shadow for dark theme
        "shadow-lg": "0 8px 16px rgba(0, 0, 0, 0.3)", // Darker shadow for dark theme

        "outline-focus": "2px solid #78a9ff", // IBM Blue 40 for dark theme
        "outline-offset": "2px",

        "transform-hover": "translateY(-1px)",

        "motion-duration-instant": "1ms",
        "motion-duration-fast": "50ms",
        "motion-duration-normal": "100ms",
        "motion-duration-slow": "200ms",
        "motion-duration-slower": "300ms",
        "motion-duration-slowest": "500ms",

        "motion-easing-linear": "linear",
        "motion-easing-ease-in": "ease-in",
        "motion-easing-ease-out": "ease-out",
        "motion-easing-ease-in-out": "ease-in-out",
        "motion-easing-bounce": "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        "motion-easing-elastic": "cubic-bezier(0.175, 0.885, 0.32, 1.275)",

        "motion-transition-fast": "all 50ms ease-out",
        "motion-transition-normal": "all 100ms ease-out",
        "motion-transition-slow": "all 200ms ease-out",
        "motion-transition-bounce":
          "all 100ms cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        "motion-transition-elastic":
          "all 200ms cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      },

      sizes: {
        xs: "24px",
        sm: "32px",
        md: "40px",
        lg: "48px",
        xl: "56px",
        xxl: "64px",

        "icon-size-xs": "12px",
        "icon-size-sm": "16px",
        "icon-size-md": "20px",
        "icon-size-lg": "24px",
        "icon-size-xl": "32px",

        "switch-track-width-sm": "32px",
        "switch-track-height-sm": "18px",
        "switch-thumb-size-sm": "16px",
        "switch-thumb-offset-sm": "1px",
        "switch-thumb-translate-sm": "14px",

        "switch-track-width-md": "44px",
        "switch-track-height-md": "24px",
        "switch-thumb-size-md": "20px",
        "switch-thumb-offset-md": "2px",
        "switch-thumb-translate-md": "20px",

        "switch-track-width-lg": "56px",
        "switch-track-height-lg": "30px",
        "switch-thumb-size-lg": "24px",
        "switch-thumb-offset-lg": "3px",
        "switch-thumb-translate-lg": "26px",

        "border-width-thin": "1px",
        "border-width-normal": "2px",
        "border-width-thick": "3px",

        "opacity-0": "0",
        "opacity-25": "0.25",
        "opacity-50": "0.5",
        "opacity-75": "0.75",
        "opacity-100": "1",

        "widget-min-width": "280px",
        "widget-max-width": "400px",
        "control-size-sm": "32px",

        "dropdown-min-width": "80px",
        "dropdown-min-width-mobile": "70px",
        "dropdown-max-height": "200px",
        "dropdown-option-min-width": "100px",
      },

      breakpoints: {
        xs: "0px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        xxl: "1400px",

        mobile: "480px",
        tablet: "768px",
        desktop: "1024px",
        wide: "1200px",
      },
    },
  },
};

export default ibmBrand;
