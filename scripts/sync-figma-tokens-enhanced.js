#!/usr/bin/env node

/**
 * Enhanced Figma Token Sync Script
 * Supports brand tokens and validates against PulseUI schema
 *
 * Usage:
 *   node scripts/sync-figma-tokens-enhanced.js --brand=ibm --theme=light
 *   node scripts/sync-figma-tokens-enhanced.js --validate --brand=ibm
 *   node scripts/sync-figma-tokens-enhanced.js --generate --brand=ibm
 */

const https = require("https");
const fs = require("fs");
const path = require("path");

// Configuration
const CONFIG = {
  FIGMA_API_TOKEN: process.env.FIGMA_API_TOKEN,
  FIGMA_FILE_KEY: process.env.FIGMA_FILE_KEY,
  BRANDS_DIR: "brands",
  TOKENS_FILE: "src/styles/_tokens.scss",
  OUTPUT_DIR: "dist",
  SCHEMA_FILE: "src/styles/token-schema.json",
};

// PulseUI Token Schema (for validation)
const PULSEUI_SCHEMA = {
  colors: {
    primary: "string",
    secondary: "string",
    success: "string",
    warning: "string",
    error: "string",
    info: "string",
    surface: "string",
    text: "string",
    border: "string",
    background: "string",
    white: "string",
    black: "string",
    gray: "string",
  },
  spacing: {
    xs: "string",
    sm: "string",
    md: "string",
    lg: "string",
    xl: "string",
    xxl: "string",
    "2xl": "string",
  },
  typography: {
    "font-size-xs": "string",
    "font-size-sm": "string",
    "font-size-md": "string",
    "font-size-lg": "string",
    "font-size-xl": "string",
    "font-size-xxl": "string",
    "line-height-xs": "string",
    "line-height-sm": "string",
    "line-height-md": "string",
    "line-height-lg": "string",
    "line-height-xl": "string",
    "line-height-xxl": "string",
    "font-weight-normal": "string",
    "font-weight-medium": "string",
    "font-weight-semibold": "string",
    "font-weight-bold": "string",
    "font-family": "string",
  },
  effects: {
    "radius-xs": "string",
    "radius-sm": "string",
    "radius-md": "string",
    "radius-lg": "string",
    "radius-xl": "string",
    "radius-full": "string",
    "shadow-hover": "string",
    "shadow-normal": "string",
    "shadow-md": "string",
    "shadow-lg": "string",
    "outline-focus": "string",
    "outline-offset": "string",
    "transform-hover": "string",
  },
  sizes: {
    xs: "string",
    sm: "string",
    md: "string",
    lg: "string",
    xl: "string",
    xxl: "string",
    "icon-size-xs": "string",
    "icon-size-sm": "string",
    "icon-size-md": "string",
    "icon-size-lg": "string",
    "icon-size-xl": "string",
  },
  breakpoints: {
    xs: "string",
    sm: "string",
    md: "string",
    lg: "string",
    xl: "string",
    xxl: "string",
  },
};

// Command line arguments parsing
function parseArgs() {
  const args = process.argv.slice(2);
  const options = {};

  args.forEach((arg) => {
    if (arg.startsWith("--")) {
      const [key, value] = arg.substring(2).split("=");
      options[key] = value || true;
    }
  });

  return options;
}

// Validate environment variables
function validateEnvironment() {
  if (!CONFIG.FIGMA_API_TOKEN) {
    console.error("❌ FIGMA_API_TOKEN environment variable is required");
    console.log("Set it with: export FIGMA_API_TOKEN='your_token_here'");
    process.exit(1);
  }

  if (!CONFIG.FIGMA_FILE_KEY) {
    console.error("❌ FIGMA_FILE_KEY environment variable is required");
    console.log("Set it with: export FIGMA_FILE_KEY='your_file_key_here'");
    process.exit(1);
  }

  console.log(" Environment variables validated");
}

// Fetch Figma file data
function fetchFigmaFile(fileKey) {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: "api.figma.com",
      port: 443,
      path: `/v1/files/${fileKey}`,
      method: "GET",
      headers: {
        "X-Figma-Token": CONFIG.FIGMA_API_TOKEN,
      },
    };

    const req = https.request(options, (res) => {
      let data = "";

      res.on("data", (chunk) => {
        data += chunk;
      });

      res.on("end", () => {
        try {
          const jsonData = JSON.parse(data);
          resolve(jsonData);
        } catch (error) {
          reject(new Error(`Failed to parse Figma response: ${error.message}`));
        }
      });
    });

    req.on("error", (error) => {
      reject(new Error(`Request failed: ${error.message}`));
    });

    req.end();
  });
}

// Extract tokens from Figma data
function extractTokens(figmaData) {
  const tokens = {
    colors: {},
    spacing: {},
    typography: {},
    effects: {},
    sizes: {},
    breakpoints: {},
  };

  try {
    // Extract color tokens
    if (figmaData.styles) {
      Object.values(figmaData.styles).forEach((style) => {
        if (style.styleType === "FILL") {
          const tokenName = style.name.toLowerCase().replace(/\s+/g, "-");
          tokens.colors[tokenName] = style.description || "#000000";
        }
      });
    }

    // Extract text styles
    if (figmaData.styles) {
      Object.values(figmaData.styles).forEach((style) => {
        if (style.styleType === "TEXT") {
          const tokenName = style.name.toLowerCase().replace(/\s+/g, "-");
          if (style.description) {
            const [fontSize, lineHeight, fontWeight] =
              style.description.split("/");
            tokens.typography[`font-size-${tokenName}`] = fontSize || "16px";
            tokens.typography[`line-height-${tokenName}`] = lineHeight || "1.5";
            tokens.typography[`font-weight-${tokenName}`] = fontWeight || "400";
          }
        }
      });
    }

    // Extract spacing from components
    if (figmaData.document) {
      extractSpacingFromDocument(figmaData.document, tokens);
    }

    console.log(" Tokens extracted from Figma");
    return tokens;
  } catch (error) {
    console.error("❌ Error extracting tokens:", error.message);
    return tokens;
  }
}

// Extract spacing from document structure
function extractSpacingFromDocument(node, tokens) {
  if (node.absoluteBoundingBox) {
    const { width, height } = node.absoluteBoundingBox;

    // Extract spacing values
    if (width && width <= 100) {
      const spacingValue = `${Math.round(width)}px`;
      if (!tokens.spacing.xs) tokens.spacing.xs = spacingValue;
      else if (!tokens.spacing.sm) tokens.spacing.sm = spacingValue;
      else if (!tokens.spacing.md) tokens.spacing.md = spacingValue;
      else if (!tokens.spacing.lg) tokens.spacing.lg = spacingValue;
      else if (!tokens.spacing.xl) tokens.spacing.xl = spacingValue;
    }
  }

  if (node.children) {
    node.children.forEach((child) => extractSpacingFromDocument(child, tokens));
  }
}

// Validate tokens against PulseUI schema
function validateTokens(tokens, brandName = "default") {
  console.log(`🔍 Validating ${brandName} tokens against PulseUI schema...`);

  const validation = {
    isValid: true,
    errors: [],
    warnings: [],
    missingTokens: [],
    extraTokens: [],
  };

  // Check required token categories
  Object.keys(PULSEUI_SCHEMA).forEach((category) => {
    if (!tokens[category]) {
      validation.errors.push(`Missing required category: ${category}`);
      validation.isValid = false;
      return;
    }

    // Check required tokens in each category
    Object.keys(PULSEUI_SCHEMA[category]).forEach((tokenName) => {
      if (!tokens[category][tokenName]) {
        validation.missingTokens.push(`${category}.${tokenName}`);
        validation.warnings.push(
          `Missing recommended token: ${category}.${tokenName}`
        );
      }
    });

    // Check for extra tokens
    Object.keys(tokens[category]).forEach((tokenName) => {
      if (!PULSEUI_SCHEMA[category][tokenName]) {
        validation.extraTokens.push(`${category}.${tokenName}`);
      }
    });
  });

  // Report validation results
  if (validation.errors.length > 0) {
    console.error("❌ Validation errors:");
    validation.errors.forEach((error) => console.error(`   ${error}`));
  }

  if (validation.warnings.length > 0) {
    console.warn("⚠️  Validation warnings:");
    validation.warnings.forEach((warning) => console.warn(`   ${warning}`));
  }

  if (validation.missingTokens.length > 0) {
    console.warn("⚠️  Missing recommended tokens:");
    validation.missingTokens.forEach((token) => console.warn(`   ${token}`));
  }

  if (validation.extraTokens.length > 0) {
    console.log("ℹ️  Extra tokens (not in schema):");
    validation.extraTokens.forEach((token) => console.log(`   ${token}`));
  }

  if (validation.isValid) {
    console.log(" Token validation passed");
  } else {
    console.error("❌ Token validation failed");
  }

  return validation;
}

// Generate SCSS tokens file
function generateSCSSTokens(tokens, brandName, theme = "light") {
  const scssContent = `// ${brandName.toUpperCase()} Brand Tokens - ${theme} theme
// Auto-generated from Figma tokens
// Generated on: ${new Date().toISOString()}

[data-brand="${brandName}"]${theme === "dark" ? '[data-theme="dark"]' : ""} {
`;

  // Generate color tokens
  if (tokens.colors && Object.keys(tokens.colors).length > 0) {
    scssContent += `  // Color tokens\n`;
    Object.entries(tokens.colors).forEach(([key, value]) => {
      scssContent += `  --color-${key}: ${value};\n`;
    });
    scssContent += `\n`;
  }

  // Generate spacing tokens
  if (tokens.spacing && Object.keys(tokens.spacing).length > 0) {
    scssContent += `  // Spacing tokens\n`;
    Object.entries(tokens.spacing).forEach(([key, value]) => {
      scssContent += `  --spacing-${key}: ${value};\n`;
    });
    scssContent += `\n`;
  }

  // Generate typography tokens
  if (tokens.typography && Object.keys(tokens.typography).length > 0) {
    scssContent += `  // Typography tokens\n`;
    Object.entries(tokens.typography).forEach(([key, value]) => {
      scssContent += `  --${key}: ${value};\n`;
    });
    scssContent += `\n`;
  }

  // Generate effects tokens
  if (tokens.effects && Object.keys(tokens.effects).length > 0) {
    scssContent += `  // Effects tokens\n`;
    Object.entries(tokens.effects).forEach(([key, value]) => {
      scssContent += `  --${key}: ${value};\n`;
    });
    scssContent += `\n`;
  }

  // Generate size tokens
  if (tokens.sizes && Object.keys(tokens.sizes).length > 0) {
    scssContent += `  // Size tokens\n`;
    Object.entries(tokens.sizes).forEach(([key, value]) => {
      scssContent += `  --size-${key}: ${value};\n`;
    });
    scssContent += `\n`;
  }

  // Generate breakpoint tokens
  if (tokens.breakpoints && Object.keys(tokens.breakpoints).length > 0) {
    scssContent += `  // Breakpoint tokens\n`;
    Object.entries(tokens.breakpoints).forEach(([key, value]) => {
      scssContent += `  --breakpoint-${key}: ${value};\n`;
    });
    scssContent += `\n`;
  }

  scssContent += `}\n`;

  return scssContent;
}

// Generate JSON tokens file
function generateJSONTokens(tokens, brandName, theme = "light") {
  const jsonContent = {
    brand: {
      id: brandName,
      name: brandName.charAt(0).toUpperCase() + brandName.slice(1),
      version: "1.0.0",
      description: `Auto-generated ${brandName} brand tokens from Figma`,
      generatedAt: new Date().toISOString(),
      theme: theme,
      tokens: tokens,
    },
  };

  return JSON.stringify(jsonContent, null, 2);
}

// Save tokens to files
function saveTokens(tokens, brandName, theme = "light") {
  const brandDir = path.join(CONFIG.BRANDS_DIR, brandName);

  // Create brand directory if it doesn't exist
  if (!fs.existsSync(brandDir)) {
    fs.mkdirSync(brandDir, { recursive: true });
    console.log(`📁 Created brand directory: ${brandDir}`);
  }

  // Save SCSS tokens
  const scssContent = generateSCSSTokens(tokens, brandName, theme);
  const scssPath = path.join(brandDir, `_tokens-${theme}.scss`);
  fs.writeFileSync(scssPath, scssContent);
  console.log(`💾 Saved SCSS tokens: ${scssPath}`);

  // Save JSON tokens
  const jsonContent = generateJSONTokens(tokens, brandName, theme);
  const jsonPath = path.join(brandDir, `tokens-${theme}.json`);
  fs.writeFileSync(jsonPath, jsonContent);
  console.log(`💾 Saved JSON tokens: ${jsonPath}`);

  // Save combined tokens file
  const combinedPath = path.join(brandDir, `tokens.json`);
  const combinedContent = {
    brand: {
      id: brandName,
      name: brandName.charAt(0).toUpperCase() + brandName.slice(1),
      version: "1.0.0",
      description: `Auto-generated ${brandName} brand tokens from Figma`,
      generatedAt: new Date().toISOString(),
      tokens: {
        light: theme === "light" ? tokens : {},
        dark: theme === "dark" ? tokens : {},
      },
    },
  };
  fs.writeFileSync(combinedPath, JSON.stringify(combinedContent, null, 2));
  console.log(`💾 Saved combined tokens: ${combinedPath}`);
}

// Load existing brand tokens
function loadBrandTokens(brandName) {
  const brandDir = path.join(CONFIG.BRANDS_DIR, brandName);
  const tokensPath = path.join(brandDir, "tokens.json");

  if (fs.existsSync(tokensPath)) {
    try {
      const content = fs.readFileSync(tokensPath, "utf8");
      const data = JSON.parse(content);
      console.log(`📖 Loaded existing tokens for brand: ${brandName}`);
      return data.brand.tokens;
    } catch (error) {
      console.warn(`⚠️  Could not load existing tokens: ${error.message}`);
    }
  }

  return { light: {}, dark: {} };
}

// Merge new tokens with existing ones
function mergeTokens(existingTokens, newTokens, theme) {
  const merged = { ...existingTokens };

  if (!merged[theme]) {
    merged[theme] = {};
  }

  // Merge each category
  Object.keys(newTokens).forEach((category) => {
    if (!merged[theme][category]) {
      merged[theme][category] = {};
    }

    merged[theme][category] = {
      ...merged[theme][category],
      ...newTokens[category],
    };
  });

  return merged;
}

// Generate brand configuration file
function generateBrandConfig(brandName, tokens) {
  const configContent = `// ${brandName.toUpperCase()} Brand Configuration
// Auto-generated from Figma tokens

export interface ${brandName.charAt(0).toUpperCase() + brandName.slice(1)
    }BrandConfig {
  id: string;
  name: string;
  version: string;
  description: string;
  figmaFileKey?: string;
  tokens: {
    light: any;
    dark: any;
  };
}

export const ${brandName}Brand: ${brandName.charAt(0).toUpperCase() + brandName.slice(1)
    }BrandConfig = {
  id: '${brandName}',
  name: '${brandName.charAt(0).toUpperCase() + brandName.slice(1)}',
  version: '1.0.0',
  description: 'Auto-generated ${brandName} brand tokens from Figma',
  figmaFileKey: process.env.FIGMA_FILE_KEY || '',
  tokens: ${JSON.stringify(tokens, null, 2)}
};

export default ${brandName}Brand;
`;

  const brandDir = path.join(CONFIG.BRANDS_DIR, brandName);
  const configPath = path.join(brandDir, "brand.config.ts");
  fs.writeFileSync(configPath, configContent);
  console.log(`💾 Saved brand configuration: ${configPath}`);
}

// Main sync function
async function syncBrandTokens(brandName, theme = "light") {
  try {
    console.log(`🚀 Starting sync for brand: ${brandName}, theme: ${theme}`);

    // Validate environment
    validateEnvironment();

    // Fetch Figma data
    console.log(`📥 Fetching Figma file data...`);
    const figmaData = await fetchFigmaFile(CONFIG.FIGMA_FILE_KEY);
    console.log(` Figma file fetched successfully`);

    // Extract tokens
    console.log(`🔍 Extracting tokens from Figma...`);
    const newTokens = extractTokens(figmaData);

    // Validate tokens
    const validation = validateTokens(newTokens, brandName);

    if (!validation.isValid) {
      console.warn("⚠️  Continuing despite validation errors...");
    }

    // Load existing tokens
    const existingTokens = loadBrandTokens(brandName);

    // Merge tokens
    const mergedTokens = mergeTokens(existingTokens, newTokens, theme);

    // Save tokens
    saveTokens(newTokens, brandName, theme);

    // Generate brand configuration
    generateBrandConfig(brandName, mergedTokens);

    console.log(`🎉 Sync completed successfully for ${brandName} brand!`);

    return {
      success: true,
      brandName,
      theme,
      tokens: newTokens,
      validation,
    };
  } catch (error) {
    console.error(`❌ Sync failed: ${error.message}`);
    return {
      success: false,
      error: error.message,
    };
  }
}

// Validate existing brand tokens
function validateExistingBrand(brandName) {
  console.log(`🔍 Validating existing brand: ${brandName}`);

  const brandDir = path.join(CONFIG.BRANDS_DIR, brandName);
  const tokensPath = path.join(brandDir, "tokens.json");

  if (!fs.existsSync(tokensPath)) {
    console.error(`❌ Brand not found: ${brandName}`);
    return false;
  }

  try {
    const content = fs.readFileSync(tokensPath, "utf8");
    const data = JSON.parse(content);
    const tokens = data.brand.tokens;

    // Validate both themes
    const lightValidation = validateTokens(
      tokens.light || {},
      `${brandName} (light)`
    );
    const darkValidation = validateTokens(
      tokens.dark || {},
      `${brandName} (dark)`
    );

    const overallValid = lightValidation.isValid && darkValidation.isValid;

    if (overallValid) {
      console.log(` Brand validation passed: ${brandName}`);
    } else {
      console.error(`❌ Brand validation failed: ${brandName}`);
    }

    return overallValid;
  } catch (error) {
    console.error(`❌ Error validating brand: ${error.message}`);
    return false;
  }
}

// Generate brand files from existing tokens
function generateBrandFiles(brandName) {
  console.log(`🔨 Generating brand files for: ${brandName}`);

  const brandDir = path.join(CONFIG.BRANDS_DIR, brandName);
  const tokensPath = path.join(brandDir, "tokens.json");

  if (!fs.existsSync(tokensPath)) {
    console.error(`❌ Brand not found: ${brandName}`);
    return false;
  }

  try {
    const content = fs.readFileSync(tokensPath, "utf8");
    const data = JSON.parse(content);
    const tokens = data.brand.tokens;

    // Generate SCSS files for each theme
    Object.keys(tokens).forEach((theme) => {
      if (tokens[theme] && Object.keys(tokens[theme]).length > 0) {
        const scssContent = generateSCSSTokens(tokens[theme], brandName, theme);
        const scssPath = path.join(brandDir, `_tokens-${theme}.scss`);
        fs.writeFileSync(scssPath, scssContent);
        console.log(`💾 Generated SCSS for ${theme} theme: ${scssPath}`);
      }
    });

    // Generate brand configuration
    generateBrandConfig(brandName, tokens);

    console.log(` Brand files generated successfully for: ${brandName}`);
    return true;
  } catch (error) {
    console.error(`❌ Error generating brand files: ${error.message}`);
    return false;
  }
}

// Main execution
async function main() {
  const options = parseArgs();

  console.log("🎨 Enhanced Figma Token Sync Script");
  console.log("=====================================");

  if (options.help) {
    console.log(`
Usage:
  node scripts/sync-figma-tokens-enhanced.js [options]

Options:
  --brand=<name>           Brand name (e.g., ibm, medash)
  --theme=<theme>          Theme: light or dark (default: light)
  --validate               Validate existing brand tokens
  --generate               Generate brand files from existing tokens
  --help                   Show this help message

Examples:
  # Sync IBM brand tokens from Figma
  node scripts/sync-figma-tokens-enhanced.js --brand=ibm --theme=light
  
  # Validate existing IBM brand
  node scripts/sync-figma-tokens-enhanced.js --validate --brand=ibm
  
  # Generate brand files from existing tokens
  node scripts/sync-figma-tokens-enhanced.js --generate --brand=ibm
    `);
    return;
  }

  if (options.validate && options.brand) {
    // Validate existing brand
    validateExistingBrand(options.brand);
  } else if (options.generate && options.brand) {
    // Generate brand files
    generateBrandFiles(options.brand);
  } else if (options.brand) {
    // Sync brand tokens
    const theme = options.theme || "light";
    await syncBrandTokens(options.brand, theme);
  } else {
    console.error("❌ Please specify a brand name with --brand=<name>");
    console.log("Use --help for usage information");
    process.exit(1);
  }
}

// Run the script
if (require.main === module) {
  main().catch((error) => {
    console.error("❌ Script execution failed:", error.message);
    process.exit(1);
  });
}

module.exports = {
  syncBrandTokens,
  validateExistingBrand,
  generateBrandFiles,
  validateTokens,
  generateSCSSTokens,
  generateJSONTokens,
};
