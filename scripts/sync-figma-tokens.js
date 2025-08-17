#!/usr/bin/env node

/**
 * Figma Design Token Sync Script
 *
 * This script fetches design tokens from Figma and updates the local token files.
 * It maintains 100% design token compliance by ensuring all tokens are properly
 * synchronized between Figma and the codebase.
 *
 * Usage:
 *   node scripts/sync-figma-tokens.js
 *
 * Environment Variables:
 *   FIGMA_API_TOKEN - Figma API token for authentication
 *   FIGMA_FILE_KEY - Figma file key containing design tokens
 */

import fs from "fs";
import path from "path";
import https from "https";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const FIGMA_API_TOKEN = process.env.FIGMA_API_TOKEN;
const FIGMA_FILE_KEY = process.env.FIGMA_FILE_KEY;
const FIGMA_API_BASE = "https://api.figma.com/v1";

// Output paths
const TOKENS_OUTPUT_PATH = path.join(__dirname, "../src/styles/_tokens.scss");
const TOKENS_JSON_PATH = path.join(__dirname, "../tokens/tokens.json");
const FIGMA_TOKENS_JSON_PATH = path.join(
  __dirname,
  "../tokens/figma-tokens.json"
);

// Ensure tokens directory exists
const tokensDir = path.dirname(TOKENS_JSON_PATH);
if (!fs.existsSync(tokensDir)) {
  fs.mkdirSync(tokensDir, { recursive: true });
}

/**
 * Makes HTTP request to Figma API
 */
function makeRequest(url) {
  return new Promise((resolve, reject) => {
    const options = {
      headers: {
        "X-Figma-Token": FIGMA_API_TOKEN,
        "Content-Type": "application/json",
      },
    };

    https
      .get(url, options, (res) => {
        let data = "";

        res.on("data", (chunk) => {
          data += chunk;
        });

        res.on("end", () => {
          try {
            const jsonData = JSON.parse(data);
            resolve(jsonData);
          } catch (error) {
            reject(new Error(`Failed to parse JSON: ${error.message}`));
          }
        });
      })
      .on("error", (error) => {
        reject(error);
      });
  });
}

/**
 * Fetches design tokens from Figma file
 */
async function fetchFigmaTokens() {
  console.log("🎨 Fetching design tokens from Figma...");

  if (!FIGMA_API_TOKEN) {
    throw new Error("FIGMA_API_TOKEN environment variable is required");
  }

  if (!FIGMA_FILE_KEY) {
    throw new Error("FIGMA_FILE_KEY environment variable is required");
  }

  try {
    // Fetch file data
    const fileUrl = `${FIGMA_API_BASE}/files/${FIGMA_FILE_KEY}`;
    const fileData = await makeRequest(fileUrl);

    // Fetch local variables (design tokens)
    const variablesUrl = `${FIGMA_API_BASE}/files/${FIGMA_FILE_KEY}/variables/local`;
    const variablesData = await makeRequest(variablesUrl);

    console.log("✅ Successfully fetched tokens from Figma");

    return {
      file: fileData,
      variables: variablesData,
    };
  } catch (error) {
    console.error("❌ Error fetching from Figma:", error.message);
    throw error;
  }
}

/**
 * Extracts current tokens from existing _tokens.scss file
 */
function extractCurrentTokens() {
  console.log("📖 Extracting current tokens from _tokens.scss...");

  if (!fs.existsSync(TOKENS_OUTPUT_PATH)) {
    console.log("⚠️  No existing _tokens.scss file found");
    return {
      colors: {},
      spacing: {},
      typography: {},
      effects: {},
      sizes: {},
      breakpoints: {},
    };
  }

  const content = fs.readFileSync(TOKENS_OUTPUT_PATH, "utf8");
  const tokens = {
    colors: {},
    spacing: {},
    typography: {},
    effects: {},
    sizes: {},
    breakpoints: {},
  };

  // Extract CSS custom properties
  const cssVarRegex = /--([^:]+):\s*([^;]+);/g;
  let match;

  while ((match = cssVarRegex.exec(content)) !== null) {
    const [, name, value] = match;
    const cleanName = name.trim();
    const cleanValue = value.trim();

    // Categorize tokens based on name
    if (cleanName.startsWith("color-") || cleanName.startsWith("--color-")) {
      tokens.colors[cleanName] = cleanValue;
    } else if (
      cleanName.includes("spacing") ||
      cleanName.includes("margin") ||
      cleanName.includes("padding")
    ) {
      tokens.spacing[cleanName] = cleanValue;
    } else if (
      cleanName.includes("font") ||
      cleanName.includes("text") ||
      cleanName.includes("line-height")
    ) {
      tokens.typography[cleanName] = cleanValue;
    } else if (
      cleanName.includes("shadow") ||
      cleanName.includes("blur") ||
      cleanName.includes("opacity")
    ) {
      tokens.effects[cleanName] = cleanValue;
    } else if (
      cleanName.includes("size") ||
      cleanName.includes("width") ||
      cleanName.includes("height")
    ) {
      tokens.sizes[cleanName] = cleanValue;
    } else if (
      cleanName.includes("breakpoint") ||
      cleanName.includes("media")
    ) {
      tokens.breakpoints[cleanName] = cleanValue;
    } else {
      // Default to colors for unknown tokens
      tokens.colors[cleanName] = cleanValue;
    }
  }

  console.log(
    `✅ Extracted ${Object.values(tokens).reduce(
      (sum, cat) => sum + Object.keys(cat).length,
      0
    )} current tokens`
  );
  return tokens;
}

/**
 * Processes Figma variables into design tokens
 */
function processTokens(figmaData) {
  console.log("🔄 Processing Figma design tokens...");

  const tokens = {
    colors: {},
    spacing: {},
    typography: {},
    effects: {},
    sizes: {},
    breakpoints: {},
  };

  // Process variables
  if (
    figmaData.variables &&
    figmaData.variables.meta &&
    figmaData.variables.meta.variables
  ) {
    const variables = figmaData.variables.meta.variables;
    const collections = figmaData.variables.meta.variableCollections || {};

    Object.values(variables).forEach((variable) => {
      const name = variable.name.toLowerCase().replace(/[^a-z0-9]/g, "-");
      const collection = collections[variable.variableCollectionId];
      const collectionName = collection
        ? collection.name.toLowerCase()
        : "misc";

      // Process different token types based on variable type
      switch (variable.resolvedType) {
        case "COLOR":
          processColorToken(tokens.colors, name, variable);
          break;
        case "FLOAT":
          if (collectionName.includes("spacing") || name.includes("spacing")) {
            processSpacingToken(tokens.spacing, name, variable);
          } else if (collectionName.includes("size") || name.includes("size")) {
            processSizeToken(tokens.sizes, name, variable);
          } else if (
            name.includes("font-size") ||
            name.includes("line-height")
          ) {
            processTypographyToken(tokens.typography, name, variable);
          }
          break;
        case "STRING":
          if (name.includes("font-family")) {
            processTypographyToken(tokens.typography, name, variable);
          }
          break;
      }
    });
  }

  // Fallback: Extract from text layers if variables aren't available
  if (Object.keys(tokens.colors).length === 0) {
    console.log(
      "⚠️  No variables found, attempting to extract from text content..."
    );
    extractTokensFromText(figmaData.file, tokens);
  }

  console.log("✅ Token processing complete");
  return tokens;
}

/**
 * Process color tokens
 */
function processColorToken(colorsObj, name, variable) {
  if (variable.valuesByMode) {
    Object.entries(variable.valuesByMode).forEach(([modeId, value]) => {
      if (
        value.r !== undefined &&
        value.g !== undefined &&
        value.b !== undefined
      ) {
        const r = Math.round(value.r * 255);
        const g = Math.round(value.g * 255);
        const b = Math.round(value.b * 255);
        const a = value.a !== undefined ? value.a : 1;

        if (a < 1) {
          colorsObj[name] = `rgba(${r}, ${g}, ${b}, ${a})`;
        } else {
          colorsObj[name] = `#${r.toString(16).padStart(2, "0")}${g
            .toString(16)
            .padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
        }
      }
    });
  }
}

/**
 * Process spacing tokens
 */
function processSpacingToken(spacingObj, name, variable) {
  if (variable.valuesByMode) {
    Object.entries(variable.valuesByMode).forEach(([modeId, value]) => {
      if (typeof value === "number") {
        spacingObj[name] = `${value}px`;
      }
    });
  }
}

/**
 * Process size tokens
 */
function processSizeToken(sizesObj, name, variable) {
  if (variable.valuesByMode) {
    Object.entries(variable.valuesByMode).forEach(([modeId, value]) => {
      if (typeof value === "number") {
        sizesObj[name] = `${value}px`;
      }
    });
  }
}

/**
 * Process typography tokens
 */
function processTypographyToken(typographyObj, name, variable) {
  if (variable.valuesByMode) {
    Object.entries(variable.valuesByMode).forEach(([modeId, value]) => {
      if (typeof value === "string") {
        typographyObj[name] = value;
      } else if (typeof value === "number") {
        typographyObj[name] = `${value}px`;
      }
    });
  }
}

/**
 * Extract tokens from text content (fallback method)
 */
function extractTokensFromText(fileData, tokens) {
  console.log("📝 Extracting tokens from text content...");

  if (fileData.document && fileData.document.children) {
    extractFromNode(fileData.document, tokens);
  }
}

/**
 * Recursively extract tokens from Figma nodes
 */
function extractFromNode(node, tokens) {
  if (node.children) {
    node.children.forEach((child) => extractFromNode(child, tokens));
  }

  // Extract from text layers
  if (node.type === "TEXT" && node.style) {
    if (node.style.fontSize) {
      tokens.typography[
        `font-size-${node.style.fontSize}`
      ] = `${node.style.fontSize}px`;
    }
    if (node.style.lineHeightPx) {
      tokens.typography[
        `line-height-${node.style.lineHeightPx}`
      ] = `${node.style.lineHeightPx}px`;
    }
  }

  // Extract from fills (colors)
  if (node.fills) {
    node.fills.forEach((fill, index) => {
      if (fill.type === "SOLID" && fill.color) {
        const { r, g, b, a = 1 } = fill.color;
        const colorName = `color-${node.name || `fill-${index}`}`
          .toLowerCase()
          .replace(/[^a-z0-9]/g, "-");

        if (a < 1) {
          tokens.colors[colorName] = `rgba(${Math.round(r * 255)}, ${Math.round(
            g * 255
          )}, ${Math.round(b * 255)}, ${a})`;
        } else {
          tokens.colors[colorName] = `#${Math.round(r * 255)
            .toString(16)
            .padStart(2, "0")}${Math.round(g * 255)
            .toString(16)
            .padStart(2, "0")}${Math.round(b * 255)
            .toString(16)
            .padStart(2, "0")}`;
        }
      }
    });
  }
}

/**
 * Compare Figma tokens with current tokens and identify changes
 */
function compareAndMergeTokens(figmaTokens, currentTokens) {
  console.log("🔍 Comparing Figma tokens with current tokens...");

  const changes = {
    added: {},
    updated: {},
    unchanged: {},
    removed: {},
  };

  let totalChanges = 0;

  // Check each token category
  Object.keys(figmaTokens).forEach((category) => {
    if (!currentTokens[category]) {
      currentTokens[category] = {};
    }

    Object.entries(figmaTokens[category]).forEach(([name, value]) => {
      if (!currentTokens[category][name]) {
        // New token
        changes.added[`${category}.${name}`] = value;
        currentTokens[category][name] = value;
        totalChanges++;
      } else if (currentTokens[category][name] !== value) {
        // Updated token
        changes.updated[`${category}.${name}`] = {
          from: currentTokens[category][name],
          to: value,
        };
        currentTokens[category][name] = value;
        totalChanges++;
      } else {
        // Unchanged token
        changes.unchanged[`${category}.${name}`] = value;
      }
    });
  });

  // Log changes
  if (Object.keys(changes.added).length > 0) {
    console.log(`➕ Added ${Object.keys(changes.added).length} new tokens`);
  }

  if (Object.keys(changes.updated).length > 0) {
    console.log(
      `🔄 Updated ${Object.keys(changes.updated).length} existing tokens`
    );
  }

  if (Object.keys(changes.unchanged).length > 0) {
    console.log(`✅ ${Object.keys(changes.unchanged).length} tokens unchanged`);
  }

  console.log(`📊 Total changes: ${totalChanges}`);

  return { mergedTokens: currentTokens, changes, totalChanges };
}

/**
 * Update SCSS file with new token values while preserving structure
 */
function updateSCSSTokens(scssContent, changes) {
  console.log("✏️  Updating SCSS file with new token values...");

  let updatedContent = scssContent;
  let updateCount = 0;

  // Update only changed values
  Object.entries(changes.updated).forEach(([tokenPath, change]) => {
    const [category, name] = tokenPath.split(".");
    const searchPattern = new RegExp(`(--${name}:\\s*)([^;]+);`, "g");

    if (searchPattern.test(updatedContent)) {
      updatedContent = updatedContent.replace(searchPattern, `$1${change.to};`);
      updateCount++;
    }
  });

  // Add new tokens at the end of their respective sections
  Object.entries(changes.added).forEach(([tokenPath, value]) => {
    const [category, name] = tokenPath.split(".");

    // Find the appropriate section and add the new token
    const sectionPattern = new RegExp(
      `(// ${
        category.charAt(0).toUpperCase() + category.slice(1)
      }[\\s\\S]*?)(\\n\\s*\\n)`,
      "g"
    );

    if (sectionPattern.test(updatedContent)) {
      updatedContent = updatedContent.replace(
        sectionPattern,
        `$1\n  --${name}: ${value};$2`
      );
      updateCount++;
    } else {
      // Add to the end if no section found
      updatedContent += `\n  --${name}: ${value};`;
      updateCount++;
    }
  });

  console.log(`✅ Updated ${updateCount} token values in SCSS file`);
  return updatedContent;
}

/**
 * Saves tokens to files
 */
function saveTokens(tokens, changes, currentSCSS) {
  console.log("💾 Saving tokens to files...");

  // Save current tokens as JSON for future comparison
  fs.writeFileSync(TOKENS_JSON_PATH, JSON.stringify(tokens, null, 2));
  console.log(`✅ Saved current tokens to ${TOKENS_JSON_PATH}`);

  // Save Figma tokens for reference
  fs.writeFileSync(FIGMA_TOKENS_JSON_PATH, JSON.stringify(tokens, null, 2));
  console.log(`✅ Saved Figma tokens to ${FIGMA_TOKENS_JSON_PATH}`);

  // Create backup of existing SCSS file
  if (fs.existsSync(TOKENS_OUTPUT_PATH)) {
    const backup = TOKENS_OUTPUT_PATH.replace(
      ".scss",
      `.backup.${Date.now()}.scss`
    );
    fs.copyFileSync(TOKENS_OUTPUT_PATH, backup);
    console.log(`📋 Backed up existing tokens to ${backup}`);
  }

  // Update SCSS file with changes
  if (changes.totalChanges > 0) {
    const updatedSCSS = updateSCSSTokens(currentSCSS, changes);
    fs.writeFileSync(TOKENS_OUTPUT_PATH, updatedSCSS);
    console.log(`✅ Updated SCSS tokens with ${changes.totalChanges} changes`);
  } else {
    console.log("✅ No changes detected - SCSS file unchanged");
  }
}

/**
 * Main execution function
 */
async function main() {
  try {
    console.log("🚀 Starting Figma design token sync...\n");

    // Extract current tokens from existing SCSS file
    const currentTokens = extractCurrentTokens();

    // Read current SCSS content
    let currentSCSS = "";
    if (fs.existsSync(TOKENS_OUTPUT_PATH)) {
      currentSCSS = fs.readFileSync(TOKENS_OUTPUT_PATH, "utf8");
    }

    // Fetch tokens from Figma
    const figmaData = await fetchFigmaTokens();

    // Process Figma tokens
    const figmaTokens = processTokens(figmaData);

    // Compare and merge tokens
    const { mergedTokens, changes, totalChanges } = compareAndMergeTokens(
      figmaTokens,
      currentTokens
    );

    // Save files
    saveTokens(mergedTokens, changes, currentSCSS);

    // Summary
    const tokenCount = Object.values(mergedTokens).reduce(
      (sum, category) => sum + Object.keys(category).length,
      0
    );

    console.log("\n🎉 Figma token sync completed successfully!");
    console.log(`📊 Total tokens: ${tokenCount}`);
    console.log(`📈 Changes made: ${totalChanges}`);

    if (totalChanges === 0) {
      console.log("🏆 All tokens are already up to date!");
    } else {
      console.log("🔄 Token updates applied successfully");
    }

    // Exit with success
    process.exit(0);
  } catch (error) {
    console.error("\n❌ Token sync failed:", error.message);
    console.error("💡 Please check your Figma API token and file key");
    process.exit(1);
  }
}

// Run the script
if (import.meta.url.includes("sync-figma-tokens.js")) {
  main();
}

export {
  fetchFigmaTokens,
  processTokens,
  extractCurrentTokens,
  compareAndMergeTokens,
  saveTokens,
};
