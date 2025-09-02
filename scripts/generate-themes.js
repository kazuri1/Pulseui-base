#!/usr/bin/env node

/**
 * Simple theme generator from _tokens.scss
 * Focuses on essential color tokens for light/dark themes
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths
const TOKENS_SCSS_PATH = path.join(__dirname, "../src/styles/_tokens.scss");
const THEMES_TS_PATH = path.join(__dirname, "../src/styles/themes.ts");

// Simple token extraction - focus on color scales
function extractColorTokens(scssContent) {
  const tokens = {
    colors: {},
    spacing: {},
    typography: {},
    borderRadius: {},
    shadows: {},
  };

  // Extract color scales (e.g., --color-blue-6: #228be6;)
  const colorScaleRegex = /--color-([a-z]+)-(\d+):\s*([^;]+);/g;
  let match;

  while ((match = colorScaleRegex.exec(scssContent)) !== null) {
    const [, colorName, shade, value] = match;
    const cleanValue = value.trim();

    // Skip CSS variable references
    if (cleanValue.startsWith("var(")) continue;

    // Create flat color names like "blue-0", "blue-1", etc.
    const flatColorName = `${colorName}-${shade}`;
    tokens.colors[flatColorName] = cleanValue;
  }

  // Extract single colors (e.g., --color-white: #ffffff;)
  const singleColorRegex = /--color-([a-z]+):\s*([^;]+);/g;
  while ((match = singleColorRegex.exec(scssContent)) !== null) {
    const [, colorName, value] = match;
    const cleanValue = value.trim();

    // Skip CSS variable references
    if (cleanValue.startsWith("var(")) continue;

    // Add basic semantic colors
    if (
      [
        "primary",
        "secondary",
        "success",
        "warning",
        "error",
        "info",
        "surface",
        "text",
        "border",
        "background",
        "white",
        "black",
      ].includes(colorName)
    ) {
      tokens.colors[colorName] = cleanValue;
    }
  }

  // Add default semantic colors if they don't exist
  if (!tokens.colors.primary) tokens.colors.primary = "#339af0";
  if (!tokens.colors.secondary) tokens.colors.secondary = "#868e96";
  if (!tokens.colors.success) tokens.colors.success = "#40c057";
  if (!tokens.colors.warning) tokens.colors.warning = "#fab005";
  if (!tokens.colors.error) tokens.colors.error = "#fa5252";
  if (!tokens.colors.info) tokens.colors.info = "#339af0";
  if (!tokens.colors.surface) tokens.colors.surface = "#ffffff";
  if (!tokens.colors.text) tokens.colors.text = "#212529";
  if (!tokens.colors.border) tokens.colors.border = "#e0e0e0";
  if (!tokens.colors.background) tokens.colors.background = "#ffffff";

  // Add missing gray colors
  if (!tokens.colors["gray-0"]) tokens.colors["gray-0"] = "#f8f9fa";
  if (!tokens.colors["gray-1"]) tokens.colors["gray-1"] = "#f1f3f4";
  if (!tokens.colors["gray-2"]) tokens.colors["gray-2"] = "#e8eaed";
  if (!tokens.colors["gray-3"]) tokens.colors["gray-3"] = "#dadce0";
  if (!tokens.colors["gray-4"]) tokens.colors["gray-4"] = "#bdc1c6";

  // Add some basic spacing and typography
  tokens.spacing = {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    xxl: "48px",
  };

  tokens.typography = {
    h1: { fontSize: "3rem", lineHeight: "1", fontWeight: "bold" },
    h2: { fontSize: "2.25rem", lineHeight: "2.5rem", fontWeight: "bold" },
    h3: { fontSize: "1.875rem", lineHeight: "2.25rem", fontWeight: "semibold" },
    h4: { fontSize: "1.5rem", lineHeight: "2rem", fontWeight: "semibold" },
    h5: { fontSize: "1.125rem", lineHeight: "1.75rem", fontWeight: "semibold" },
    h6: { fontSize: "1rem", lineHeight: "1.5rem", fontWeight: "semibold" },
    "text-xs": {
      fontSize: "0.75rem",
      lineHeight: "1rem",
      fontWeight: "normal",
    },
    "text-sm": {
      fontSize: "0.875rem",
      lineHeight: "1.25rem",
      fontWeight: "normal",
    },
    "text-md": { fontSize: "1rem", lineHeight: "1.5rem", fontWeight: "normal" },
    "text-lg": {
      fontSize: "1.125rem",
      lineHeight: "1.75rem",
      fontWeight: "normal",
    },
    "text-xl": {
      fontSize: "1.25rem",
      lineHeight: "1.75rem",
      fontWeight: "normal",
    },
  };

  tokens.borderRadius = {
    xs: "2px",
    sm: "4px",
    md: "6px",
    lg: "8px",
    xl: "12px",
    full: "9999px",
  };

  tokens.shadows = {
    xs: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    sm: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
    md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  };

  tokens.breakpoints = {
    xs: "0px",
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  };

  return tokens;
}

// Generate dark theme by inverting light theme colors
function generateDarkTheme(lightTokens) {
  const darkTokens = JSON.parse(JSON.stringify(lightTokens));

  // Invert color scales (e.g., blue-0 becomes blue-9, blue-1 becomes blue-8, etc.)
  Object.keys(darkTokens.colors).forEach((colorName) => {
    if (colorName.includes("-")) {
      const [baseColor, shade] = colorName.split("-");
      const shadeNum = parseInt(shade);
      if (!isNaN(shadeNum)) {
        // Find the highest shade for this color
        const maxShade = Math.max(
          ...Object.keys(darkTokens.colors)
            .filter((name) => name.startsWith(`${baseColor}-`))
            .map((name) => parseInt(name.split("-")[1]))
        );
        // Invert the shade (0 becomes max, 1 becomes max-1, etc.)
        const invertedShade = maxShade - shadeNum;
        const invertedColorName = `${baseColor}-${invertedShade}`;
        if (darkTokens.colors[invertedColorName]) {
          darkTokens.colors[colorName] = darkTokens.colors[invertedColorName];
        }
      }
    }
  });

  // Override specific colors for dark theme
  darkTokens.colors.background = "#0f172a";
  darkTokens.colors.surface = "#0f172a";
  darkTokens.colors.text = "#f8fafc";
  darkTokens.colors.border = "#475569";

  return darkTokens;
}

// Generate themes.ts content
function generateThemesTs(lightTokens, darkTokens) {
  return `// Auto-generated themes from _tokens.scss
// This file is generated by scripts/generate-themes.js
// Do not edit manually - changes will be overwritten

import type { Theme } from "./stylesApi";

// Light Theme (generated from _tokens.scss)
export const defaultLightTheme: Theme = ${JSON.stringify(lightTokens, null, 2)};

// Dark Theme (generated from light theme with inversions)
export const defaultDarkTheme: Theme = ${JSON.stringify(darkTokens, null, 2)};

// Default theme export
export const defaultTheme = defaultLightTheme;

// Theme types
export type ThemeMode = "light" | "dark";
export type ThemeName = "default-light" | "default-dark";

// Theme mapping
export const themes: Record<ThemeName, Theme> = {
  "default-light": defaultLightTheme,
  "default-dark": defaultDarkTheme,
};
`;
}

// Main execution
function main() {
  try {
    console.log("🔄 Generating themes from _tokens.scss...");

    // Read tokens.scss
    const scssContent = fs.readFileSync(TOKENS_SCSS_PATH, "utf8");
    console.log("📖 Read SCSS content, length:", scssContent.length);

    // Extract tokens
    const lightTokens = extractColorTokens(scssContent);
    console.log(
      "🎨 Extracted color categories:",
      Object.keys(lightTokens.colors)
    );

    // Generate dark theme
    const darkTokens = generateDarkTheme(lightTokens);
    console.log("🌙 Generated dark theme");

    // Generate themes.ts content
    const themesContent = generateThemesTs(lightTokens, darkTokens);

    // Write themes.ts file
    fs.writeFileSync(THEMES_TS_PATH, themesContent, "utf8");
    console.log(" themes.ts generated successfully!");
    console.log(`📁 Location: ${THEMES_TS_PATH}`);

    // Log stats
    const lightColorCount = Object.keys(lightTokens.colors).length;
    console.log(`🎨 Light theme colors: ${lightColorCount}`);
    console.log(`🌙 Dark theme colors: ${lightColorCount}`);
  } catch (error) {
    console.error("❌ Error:", error.message);
    process.exit(1);
  }
}

// Run if called directly
if (process.argv[1] && process.argv[1].endsWith("generate-themes.js")) {
  main();
}

export { main, extractColorTokens, generateDarkTheme };
