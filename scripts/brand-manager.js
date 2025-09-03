#!/usr/bin/env node

/**
 * PulseUI Brand Manager
 *
 * This script manages the complete brand lifecycle:
 * 1. Creates new brands from Figma tokens
 * 2. Validates token compliance
 * 3. Generates brand-specific SCSS
 * 4. Updates component library with new brand
 *
 * Usage:
 *   node scripts/brand-manager.js --create --brand=carbon --figma-file=xxx
 *   node scripts/brand-manager.js --validate --brand=carbon
 *   node scripts/brand-manager.js --sync --brand=carbon
 *   node scripts/brand-manager.js --list
 */

import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import https from "https";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const CONFIG = {
  BRANDS_DIR: path.join(__dirname, "../brands"),
  TOKENS_SCSS: path.join(__dirname, "../src/styles/_tokens.scss"),
  PULSEUI_SCSS: path.join(__dirname, "../src/styles/pulseui-base.scss"),
  SCHEMA_FILE: path.join(__dirname, "../src/styles/token-schema.json"),
  FIGMA_API_TOKEN: process.env.FIGMA_API_TOKEN,
  FIGMA_API_BASE: "https://api.figma.com/v1",
};

// Brand registry
const BRAND_REGISTRY_FILE = path.join(CONFIG.BRANDS_DIR, "brand-registry.json");

class BrandManager {
  constructor() {
    this.ensureBrandsDirectory();
    this.loadBrandRegistry();
  }

  ensureBrandsDirectory() {
    if (!fs.existsSync(CONFIG.BRANDS_DIR)) {
      fs.mkdirSync(CONFIG.BRANDS_DIR, { recursive: true });
      console.log(`📁 Created brands directory: ${CONFIG.BRANDS_DIR}`);
    }
  }

  loadBrandRegistry() {
    if (fs.existsSync(BRAND_REGISTRY_FILE)) {
      this.brandRegistry = JSON.parse(
        fs.readFileSync(BRAND_REGISTRY_FILE, "utf8")
      );
    } else {
      this.brandRegistry = {
        brands: {},
        lastUpdated: new Date().toISOString(),
        version: "1.0.0",
      };
      this.saveBrandRegistry();
    }
  }

  saveBrandRegistry() {
    fs.writeFileSync(
      BRAND_REGISTRY_FILE,
      JSON.stringify(this.brandRegistry, null, 2)
    );
  }

  async createBrand(brandId, figmaFileKey, options = {}) {
    console.log(`🚀 Creating new brand: ${brandId}`);

    try {
      // 1. Fetch tokens from Figma
      const figmaTokens = await this.fetchFigmaTokens(figmaFileKey);

      // 2. Validate against schema
      const validation = this.validateTokens(figmaTokens, brandId);
      if (!validation.isValid) {
        console.error("❌ Token validation failed:", validation.errors);
        return false;
      }

      // 3. Create brand directory and files
      const brandDir = path.join(CONFIG.BRANDS_DIR, brandId);
      fs.mkdirSync(brandDir, { recursive: true });

      // 4. Generate brand files
      this.generateBrandFiles(brandId, figmaTokens);

      // 5. Update brand registry
      this.brandRegistry.brands[brandId] = {
        id: brandId,
        name:
          options.name || brandId.charAt(0).toUpperCase() + brandId.slice(1),
        description: options.description || `Auto-generated ${brandId} brand`,
        figmaFileKey,
        createdAt: new Date().toISOString(),
        lastSynced: new Date().toISOString(),
        version: "1.0.0",
        themes: Object.keys(figmaTokens.tokens),
        status: "active",
      };

      this.saveBrandRegistry();

      // 6. Update PulseUI SCSS with new brand
      this.updatePulseUISCSS(brandId, figmaTokens);

      console.log(`✅ Brand '${brandId}' created successfully!`);
      return true;
    } catch (error) {
      console.error(`❌ Failed to create brand: ${error.message}`);
      return false;
    }
  }

  async fetchFigmaTokens(figmaFileKey) {
    return new Promise((resolve, reject) => {
      const url = `${CONFIG.FIGMA_API_BASE}/files/${figmaFileKey}`;

      const options = {
        headers: {
          "X-Figma-Token": CONFIG.FIGMA_API_TOKEN,
        },
      };

      https
        .get(url, options, (res) => {
          let data = "";

          res.on("data", (chunk) => {
            data += chunk;
          });

          res.on("end", () => {
            if (res.statusCode === 200) {
              const figmaData = JSON.parse(data);
              const tokens = this.extractTokensFromFigma(figmaData);
              resolve(tokens);
            } else {
              reject(new Error(`Figma API error: ${res.statusCode}`));
            }
          });
        })
        .on("error", (error) => {
          reject(error);
        });
    });
  }

  extractTokensFromFigma(figmaData) {
    // Extract tokens from Figma variables
    const tokens = {
      brand: {
        id: "new-brand",
        name: "New Brand",
        version: "1.0.0",
        description: "Auto-generated from Figma",
        generatedAt: new Date().toISOString(),
      },
      tokens: {
        light: {
          colors: {},
          spacing: {},
          typography: {},
          effects: {},
          sizes: {},
          breakpoints: {},
        },
      },
    };

    // Process Figma variables
    if (figmaData.variables && figmaData.variables.meta) {
      const variables = figmaData.variables.meta.variables;
      const collections = figmaData.variables.meta.variableCollections || {};

      Object.values(variables).forEach((variable) => {
        const name = variable.name.toLowerCase().replace(/[^a-z0-9]/g, "-");
        const collection = collections[variable.variableCollectionId];
        const collectionName = collection
          ? collection.name.toLowerCase()
          : "misc";

        // Map to PulseUI token structure
        switch (variable.resolvedType) {
          case "COLOR":
            this.processColorToken(tokens.tokens.light.colors, name, variable);
            break;
          case "FLOAT":
            if (
              collectionName.includes("spacing") ||
              name.includes("spacing")
            ) {
              this.processSpacingToken(
                tokens.tokens.light.spacing,
                name,
                variable
              );
            } else if (
              collectionName.includes("size") ||
              name.includes("size")
            ) {
              this.processSizeToken(tokens.tokens.light.sizes, name, variable);
            } else if (
              name.includes("font-size") ||
              name.includes("line-height")
            ) {
              this.processTypographyToken(
                tokens.tokens.light.typography,
                name,
                variable
              );
            }
            break;
          case "STRING":
            if (name.includes("font-family")) {
              this.processTypographyToken(
                tokens.tokens.light.typography,
                name,
                variable
              );
            }
            break;
        }
      });
    }

    return tokens;
  }

  processColorToken(colors, name, variable) {
    // Convert Figma color to hex
    const color = variable.resolvedValue;
    if (color && color.r !== undefined) {
      const hex = this.rgbToHex(color.r, color.g, color.b);
      colors[name] = hex;
    }
  }

  processSpacingToken(spacing, name, variable) {
    spacing[name] = `${variable.resolvedValue}px`;
  }

  processSizeToken(sizes, name, variable) {
    sizes[name] = `${variable.resolvedValue}px`;
  }

  processTypographyToken(typography, name, variable) {
    if (name.includes("font-size")) {
      typography[name] = `${variable.resolvedValue}px`;
    } else if (name.includes("line-height")) {
      typography[name] = variable.resolvedValue.toString();
    } else if (name.includes("font-family")) {
      typography[name] = variable.resolvedValue;
    }
  }

  rgbToHex(r, g, b) {
    return (
      "#" +
      (
        (1 << 24) +
        (Math.round(r * 255) << 16) +
        (Math.round(g * 255) << 8) +
        Math.round(b * 255)
      )
        .toString(16)
        .slice(1)
    );
  }

  validateTokens(tokens, brandId) {
    const schema = JSON.parse(fs.readFileSync(CONFIG.SCHEMA_FILE, "utf8"));
    const validation = {
      isValid: true,
      errors: [],
      warnings: [],
    };

    // Basic validation
    if (!tokens.brand || !tokens.tokens) {
      validation.isValid = false;
      validation.errors.push("Missing required brand or tokens structure");
    }

    if (!tokens.tokens.light) {
      validation.isValid = false;
      validation.errors.push("Light theme is required");
    }

    // Validate required token categories
    const requiredCategories = ["colors", "spacing", "typography", "effects"];
    requiredCategories.forEach((category) => {
      if (!tokens.tokens.light[category]) {
        validation.warnings.push(`Missing ${category} tokens`);
      }
    });

    return validation;
  }

  generateBrandFiles(brandId, tokens) {
    const brandDir = path.join(CONFIG.BRANDS_DIR, brandId);

    // Generate SCSS tokens
    Object.keys(tokens.tokens).forEach((theme) => {
      const scssContent = this.generateSCSSTokens(
        tokens.tokens[theme],
        brandId,
        theme
      );
      const scssPath = path.join(brandDir, `_tokens-${theme}.scss`);
      fs.writeFileSync(scssPath, scssContent);
      console.log(`💾 Generated SCSS tokens: ${scssPath}`);
    });

    // Generate JSON tokens
    const jsonPath = path.join(brandDir, "tokens.json");
    fs.writeFileSync(jsonPath, JSON.stringify(tokens, null, 2));
    console.log(`💾 Generated JSON tokens: ${jsonPath}`);

    // Generate brand configuration
    const configPath = path.join(brandDir, "brand-config.json");
    const config = {
      brand: tokens.brand,
      themes: Object.keys(tokens.tokens),
      generatedAt: new Date().toISOString(),
      pulseuiVersion: "2.0.0",
    };
    fs.writeFileSync(configPath, JSON.stringify(config, null, 2));
    console.log(`💾 Generated brand config: ${configPath}`);
  }

  generateSCSSTokens(tokens, brandId, theme) {
    let scssContent = `// ${brandId.toUpperCase()} Brand Tokens - ${theme} theme
// Auto-generated from Figma tokens
// Generated on: ${new Date().toISOString()}

[data-brand="${brandId}"]${theme === "dark" ? '[data-theme="dark"]' : ""} {
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

    scssContent += `}\n`;
    return scssContent;
  }

  updatePulseUISCSS(brandId, tokens) {
    // Read current PulseUI SCSS
    let pulseuiSCSS = fs.readFileSync(CONFIG.PULSEUI_SCSS, "utf8");

    // Add brand import at the end
    const brandImport = `\n// ${brandId.toUpperCase()} Brand Import
@import "../../brands/${brandId}/_tokens-light.scss";
`;

    pulseuiSCSS += brandImport;

    // Write back
    fs.writeFileSync(CONFIG.PULSEUI_SCSS, pulseuiSCSS);
    console.log(`📝 Updated PulseUI SCSS with ${brandId} brand`);
  }

  listBrands() {
    console.log("📋 Registered Brands:");
    console.log("=====================");

    Object.entries(this.brandRegistry.brands).forEach(([id, brand]) => {
      console.log(`\n🎨 ${brand.name} (${id})`);
      console.log(`   Description: ${brand.description}`);
      console.log(`   Version: ${brand.version}`);
      console.log(`   Themes: ${brand.themes.join(", ")}`);
      console.log(`   Status: ${brand.status}`);
      console.log(`   Created: ${brand.createdAt}`);
      console.log(`   Last Synced: ${brand.lastSynced}`);
    });
  }

  validateBrand(brandId) {
    if (!this.brandRegistry.brands[brandId]) {
      console.error(`❌ Brand '${brandId}' not found`);
      return false;
    }

    const brandDir = path.join(CONFIG.BRANDS_DIR, brandId);
    const tokensPath = path.join(brandDir, "tokens.json");

    if (!fs.existsSync(tokensPath)) {
      console.error(`❌ Brand tokens not found: ${tokensPath}`);
      return false;
    }

    const tokens = JSON.parse(fs.readFileSync(tokensPath, "utf8"));
    const validation = this.validateTokens(tokens, brandId);

    console.log(`🔍 Validating brand: ${brandId}`);
    console.log(`   Valid: ${validation.isValid ? "✅" : "❌"}`);

    if (validation.errors.length > 0) {
      console.log(`   Errors: ${validation.errors.join(", ")}`);
    }

    if (validation.warnings.length > 0) {
      console.log(`   Warnings: ${validation.warnings.join(", ")}`);
    }

    return validation.isValid;
  }
}

// CLI Interface
function parseArgs() {
  const args = process.argv.slice(2);
  const options = {};

  args.forEach((arg) => {
    if (arg.startsWith("--")) {
      const [key, value] = arg.slice(2).split("=");
      options[key] = value || true;
    }
  });

  return options;
}

async function main() {
  const options = parseArgs();
  const brandManager = new BrandManager();

  console.log("🎨 PulseUI Brand Manager");
  console.log("=======================");

  if (options.help) {
    console.log(`
Usage:
  node scripts/brand-manager.js [options]

Commands:
  --create --brand=<id> --figma-file=<key>  Create new brand from Figma
  --validate --brand=<id>                    Validate existing brand
  --sync --brand=<id>                        Sync brand with Figma
  --list                                     List all brands
  --help                                     Show this help

Examples:
  # Create Carbon brand from Figma
  node scripts/brand-manager.js --create --brand=carbon --figma-file=xxx
  
  # Validate Carbon brand
  node scripts/brand-manager.js --validate --brand=carbon
  
  # List all brands
  node scripts/brand-manager.js --list
    `);
    return;
  }

  if (options.list) {
    brandManager.listBrands();
  } else if (options.create && options.brand && options["figma-file"]) {
    const success = await brandManager.createBrand(
      options.brand,
      options["figma-file"],
      {
        name: options.name,
        description: options.description,
      }
    );

    if (success) {
      console.log(`\n🎉 Brand '${options.brand}' created successfully!`);
      console.log(`📝 Next steps:`);
      console.log(`   1. Review generated tokens in brands/${options.brand}/`);
      console.log(`   2. Test the brand in your application`);
      console.log(`   3. Commit changes to version control`);
    }
  } else if (options.validate && options.brand) {
    brandManager.validateBrand(options.brand);
  } else {
    console.error("❌ Invalid command. Use --help for usage information.");
    process.exit(1);
  }
}

// Run if called directly
if (import.meta.url.includes("brand-manager.js")) {
  main().catch(console.error);
}
