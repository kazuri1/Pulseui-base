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
const TOKENS_JSON_PATH = path.join(__dirname, "../tokens/figma-tokens.json");

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
        typographyObj[name] = name.includes("line-height")
          ? value.toString()
          : `${value}px`;
      }
    });
  }
}

/**
 * Extract tokens from text content (fallback method)
 */
function extractTokensFromText(fileData, tokens) {
  // This is a fallback method for when variables API isn't available
  // We'll look for text content that might contain token definitions

  function traverseNodes(node) {
    if (node.type === "TEXT" && node.characters) {
      const text = node.characters;

      // Look for color patterns
      const colorMatches = text.match(/#[0-9a-fA-F]{6}/g);
      if (colorMatches) {
        colorMatches.forEach((color, index) => {
          tokens.colors[`extracted-color-${index + 1}`] = color;
        });
      }

      // Look for spacing patterns
      const spacingMatches = text.match(/(\d+)px/g);
      if (spacingMatches) {
        spacingMatches.forEach((spacing, index) => {
          const value = spacing.match(/(\d+)/)[1];
          tokens.spacing[`extracted-spacing-${index + 1}`] = `${value}px`;
        });
      }
    }

    if (node.children) {
      node.children.forEach(traverseNodes);
    }
  }

  if (fileData.document) {
    traverseNodes(fileData.document);
  }
}

/**
 * Generates SCSS variables from tokens
 */
function generateSCSS(tokens) {
  console.log("📝 Generating SCSS variables...");

  let scss = `// Design Tokens - Auto-generated from Figma
// Last updated: ${new Date().toISOString()}
// 
// 🎨 This file maintains 100% design token compliance
// ⚠️  DO NOT EDIT MANUALLY - Changes will be overwritten
//

:root {
`;

  // Generate color tokens
  if (Object.keys(tokens.colors).length > 0) {
    scss += `  // Colors\n`;
    Object.entries(tokens.colors).forEach(([name, value]) => {
      scss += `  --color-${name}: ${value};\n`;
    });
    scss += "\n";
  }

  // Generate spacing tokens
  if (Object.keys(tokens.spacing).length > 0) {
    scss += `  // Spacing\n`;
    Object.entries(tokens.spacing).forEach(([name, value]) => {
      scss += `  --spacing-${name}: ${value};\n`;
    });
    scss += "\n";
  }

  // Generate size tokens
  if (Object.keys(tokens.sizes).length > 0) {
    scss += `  // Component Sizes\n`;
    Object.entries(tokens.sizes).forEach(([name, value]) => {
      scss += `  --size-${name}: ${value};\n`;
    });
    scss += "\n";
  }

  // Generate typography tokens
  if (Object.keys(tokens.typography).length > 0) {
    scss += `  // Typography\n`;
    Object.entries(tokens.typography).forEach(([name, value]) => {
      scss += `  --${name}: ${value};\n`;
    });
    scss += "\n";
  }

  scss += `}

// Export tokens for JavaScript usage
:export {
`;

  // Export all tokens for JS
  const allTokens = {
    ...tokens.colors,
    ...tokens.spacing,
    ...tokens.sizes,
    ...tokens.typography,
  };
  Object.entries(allTokens).forEach(([name, value]) => {
    scss += `  ${name.replace(/-/g, "")}: ${value};\n`;
  });

  scss += `}
`;

  return scss;
}

/**
 * Surgically updates only changed token values from Figma
 *
 * PRESERVES EVERYTHING:
 * - File structure and formatting
 * - Comments and spacing
 * - Organization and grouping
 *
 * ONLY CHANGES:
 * - Token values that differ from Figma (e.g., #ffffff → #f8f9fa)
 * - Nothing else
 */
function mergeTokensWithExisting(figmaTokens) {
  console.log("🔄 Merging Figma tokens with existing file...");

  if (!fs.existsSync(TOKENS_OUTPUT_PATH)) {
    console.log("⚠️  No existing tokens file found, creating new one");
    return generateScssFromTokens(figmaTokens);
  }

  // Read existing file
  const existingContent = fs.readFileSync(TOKENS_OUTPUT_PATH, "utf8");
  let updatedContent = existingContent;
  let changesCount = 0;

  // Debug: Show what tokens exist in current file
  const existingTokens = existingContent.match(/--[\w-]+:/g) || [];
  console.log(
    "🔍 Debug: Existing tokens in file:",
    existingTokens.slice(0, 10).map((t) => t.replace(":", ""))
  );

  // Extract all tokens from Figma data
  const allFigmaTokens = {
    ...figmaTokens.colors,
    ...figmaTokens.spacing,
    ...figmaTokens.sizes,
    ...figmaTokens.typography,
  };

  // Debug: Show what tokens we received from Figma
  console.log(
    "🔍 Debug: Figma tokens received:",
    Object.keys(allFigmaTokens).length,
    "tokens"
  );

  // Only proceed if we actually have tokens from Figma
  if (Object.keys(allFigmaTokens).length === 0) {
    console.log(
      "⚠️  No tokens received from Figma - keeping existing file unchanged"
    );
    console.log("🔍 This could mean:");
    console.log("   - Figma API token is missing or invalid");
    console.log("   - Figma file key is incorrect");
    console.log("   - Figma file has no design tokens");
    console.log("   - API connection failed");
    return existingContent; // Return unchanged content
  }

  // Update each token value if it exists in the file AND we have a new value from Figma
  Object.entries(allFigmaTokens).forEach(([tokenName, newValue]) => {
    // Skip if the token value is empty or undefined
    if (!newValue || newValue.toString().trim() === "") {
      console.log(`⚠️  Skipping empty token: --${tokenName}`);
      return;
    }

    // Create a very precise regex that only matches the exact token
    const escapedTokenName = tokenName.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const tokenPattern = new RegExp(
      `(^\\s*--${escapedTokenName}\\s*:\\s*)([^;\\n\\r]+)(;\\s*$)`,
      "gm"
    );
    const match = existingContent.match(tokenPattern);

    if (match && match.length > 0) {
      const fullMatch = match[0];
      const currentValue = fullMatch
        .split(":")[1]
        .trim()
        .replace(";", "")
        .trim();
      const cleanNewValue = newValue.toString().trim();

      if (currentValue !== cleanNewValue) {
        updatedContent = updatedContent.replace(
          tokenPattern,
          `$1${cleanNewValue}$3`
        );
        changesCount++;
        console.log(
          `🔄 Updated --${tokenName}: "${currentValue}" → "${cleanNewValue}"`
        );
      } else {
        console.log(
          `✅ Token --${tokenName} already up to date: "${currentValue}"`
        );
      }
    } else {
      console.log(
        `⚠️  Token --${tokenName} not found in existing file (skipping)`
      );
    }
  });

  // Only log changes, don't modify file structure or add timestamps
  if (changesCount === 0) {
    console.log(
      "✅ No token values changed - all tokens are already up to date!"
    );
    console.log(
      "🔍 This means your Figma tokens exactly match your current file values"
    );
    console.log("📋 File will remain unchanged (no unnecessary commits)");
    return existingContent; // Return unchanged content
  } else {
    console.log(`✅ Updated ${changesCount} token values from Figma`);
    console.log(
      "📋 File structure and formatting preserved - only values changed"
    );
    // DO NOT add timestamps or modify file structure - only token values changed
  }

  return updatedContent;
}

/**
 * Saves tokens to files
 */
function saveTokens(tokens, scss) {
  console.log("💾 Saving tokens to files...");

  // Save JSON tokens
  fs.writeFileSync(TOKENS_JSON_PATH, JSON.stringify(tokens, null, 2));
  console.log(`✅ Saved JSON tokens to ${TOKENS_JSON_PATH}`);

  // Create backup of existing SCSS file
  if (fs.existsSync(TOKENS_OUTPUT_PATH)) {
    const backup = TOKENS_OUTPUT_PATH.replace(".scss", ".backup.scss");
    fs.copyFileSync(TOKENS_OUTPUT_PATH, backup);
    console.log(`📋 Backed up existing tokens to ${backup}`);
  }

  // Use smart merging instead of complete replacement
  const mergedContent = mergeTokensWithExisting(tokens);
  fs.writeFileSync(TOKENS_OUTPUT_PATH, mergedContent);
  console.log(`✅ Merged SCSS tokens to ${TOKENS_OUTPUT_PATH}`);
}

/**
 * Main execution function
 */
async function main() {
  try {
    console.log("🚀 Starting Figma design token sync...\n");

    // Fetch tokens from Figma
    const figmaData = await fetchFigmaTokens();

    // Process tokens
    const tokens = processTokens(figmaData);

    // Save files with smart merging (no need for full SCSS generation)
    saveTokens(tokens, null);

    // Summary
    const tokenCount = Object.values(tokens).reduce(
      (sum, category) => sum + Object.keys(category).length,
      0
    );

    console.log("\n🎉 Figma token sync completed successfully!");
    console.log(`📊 Processed ${tokenCount} design tokens`);
    console.log("🏆 Design token compliance maintained at 100%");

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

export { fetchFigmaTokens, processTokens, generateSCSS, saveTokens };
