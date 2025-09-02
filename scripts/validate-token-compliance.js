#!/usr/bin/env node

/**
 * Design Token Compliance Validator
 *
 * This script validates that all components maintain 100% design token compliance
 * by checking for hardcoded values that should use design tokens instead.
 *
 * Usage:
 *   node scripts/validate-token-compliance.js
 *
 * Exit codes:
 *   0 - 100% compliance achieved
 *   1 - Compliance issues found
 */

import fs from "fs";
import path from "path";
import { execSync } from "child_process";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const COMPONENTS_DIR = path.join(__dirname, "../src/components");
const TOKENS_FILE = path.join(__dirname, "../src/styles/_tokens.scss");
const EXAMPLES_DIR = "examples"; // Excluded from compliance checks

// Compliance rules
const COMPLIANCE_RULES = [
  {
    name: "Hardcoded pixel values",
    pattern: /:\s*[0-9]+px(?!\s*\/)/g,
    severity: "error",
    message: "Use design tokens instead of hardcoded px values",
    exclude: ["calc(", "var(", "clamp("], // Allow in calculations
  },
  {
    name: "Hardcoded hex colors",
    pattern: /:\s*#[0-9a-fA-F]{3,8}(?!\s*\/)/g,
    severity: "error",
    message: "Use design tokens instead of hardcoded hex colors",
  },
  {
    name: "Hardcoded RGB/RGBA colors",
    pattern: /:\s*rgba?\([^)]+\)(?!\s*\/)/g,
    severity: "error",
    message: "Use design tokens instead of hardcoded rgb/rgba colors",
  },
  {
    name: "Hardcoded HSL colors",
    pattern: /:\s*hsla?\([^)]+\)(?!\s*\/)/g,
    severity: "warning",
    message: "Consider using design tokens instead of HSL colors",
  },
  {
    name: "Magic numbers in media queries",
    pattern: /@media\s*\([^)]*[0-9]+px/g,
    severity: "warning",
    message: "Consider using design token breakpoints",
  },
];

/**
 * Recursively finds all SCSS files in a directory
 */
function findScssFiles(dir, files = []) {
  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory() && item !== EXAMPLES_DIR) {
      findScssFiles(fullPath, files);
    } else if (item.endsWith(".scss") || item.endsWith(".module.scss")) {
      files.push(fullPath);
    }
  }

  return files;
}

/**
 * Reads available design tokens from the tokens file
 */
function readAvailableTokens() {
  const tokens = {
    colors: [],
    spacing: [],
    sizes: [],
    typography: [],
    effects: [],
    breakpoints: [],
  };

  if (!fs.existsSync(TOKENS_FILE)) {
    console.warn(`⚠️  Tokens file not found: ${TOKENS_FILE}`);
    return tokens;
  }

  const content = fs.readFileSync(TOKENS_FILE, "utf8");
  const lines = content.split("\n");

  for (const line of lines) {
    const match = line.match(/--([^:]+):/);
    if (match) {
      const tokenName = match[1];

      if (tokenName.startsWith("color-")) {
        tokens.colors.push(tokenName);
      } else if (tokenName.startsWith("spacing-")) {
        tokens.spacing.push(tokenName);
      } else if (tokenName.startsWith("size-")) {
        tokens.sizes.push(tokenName);
      } else if (
        tokenName.includes("font") ||
        tokenName.includes("line-height")
      ) {
        tokens.typography.push(tokenName);
      } else if (
        tokenName.startsWith("shadow-") ||
        tokenName.startsWith("radius-")
      ) {
        tokens.effects.push(tokenName);
      } else if (tokenName.startsWith("breakpoint-")) {
        tokens.breakpoints.push(tokenName);
      }
    }
  }

  return tokens;
}

/**
 * Checks a single file for compliance issues
 */
function checkFileCompliance(filePath, availableTokens) {
  const content = fs.readFileSync(filePath, "utf8");
  const issues = [];
  const lines = content.split("\n");

  for (let lineIndex = 0; lineIndex < lines.length; lineIndex++) {
    const line = lines[lineIndex];
    const lineNumber = lineIndex + 1;

    for (const rule of COMPLIANCE_RULES) {
      const matches = line.matchAll(rule.pattern);

      for (const match of matches) {
        // Check if this should be excluded
        if (rule.exclude) {
          const shouldExclude = rule.exclude.some((exclusion) =>
            line.includes(exclusion)
          );
          if (shouldExclude) continue;
        }

        // Create issue object
        const issue = {
          file: path.relative(process.cwd(), filePath),
          line: lineNumber,
          column: match.index + 1,
          rule: rule.name,
          severity: rule.severity,
          message: rule.message,
          code: line.trim(),
          match: match[0],
        };

        // Add suggestions for common patterns
        if (rule.name === "Hardcoded pixel values") {
          issue.suggestions = suggestSpacingTokens(
            match[0],
            availableTokens.spacing
          );
        } else if (rule.name === "Hardcoded hex colors") {
          issue.suggestions = suggestColorTokens(
            match[0],
            availableTokens.colors
          );
        }

        issues.push(issue);
      }
    }
  }

  return issues;
}

/**
 * Suggests spacing tokens for pixel values
 */
function suggestSpacingTokens(value, spacingTokens) {
  const pixels = value.match(/([0-9]+)px/);
  if (!pixels) return [];

  const pxValue = parseInt(pixels[1]);
  const suggestions = [];

  // Common spacing mappings
  const spacingMap = {
    4: "spacing-xs",
    8: "spacing-sm",
    16: "spacing-md",
    24: "spacing-lg",
    32: "spacing-xl",
    48: "spacing-xxl",
  };

  if (spacingMap[pxValue]) {
    suggestions.push(`var(--${spacingMap[pxValue]})`);
  }

  // Size token suggestions
  const sizeMap = {
    24: "size-xs",
    32: "size-sm",
    40: "size-md",
    48: "size-lg",
    56: "size-xl",
  };

  if (sizeMap[pxValue]) {
    suggestions.push(`var(--${sizeMap[pxValue]})`);
  }

  return suggestions;
}

/**
 * Suggests color tokens for hex values
 */
function suggestColorTokens(value, colorTokens) {
  // This is a simple suggestion system
  // In a real implementation, you might want to do color distance calculations
  const suggestions = [];

  if (value.toLowerCase().includes("#fff")) {
    suggestions.push("var(--color-white)");
  } else if (value.toLowerCase().includes("#000")) {
    suggestions.push("var(--color-black)");
  } else {
    suggestions.push("var(--color-primary-6)", "var(--color-gray-6)");
  }

  return suggestions.slice(0, 3); // Limit suggestions
}

/**
 * Generates a compliance report
 */
function generateComplianceReport(allIssues, totalFiles, availableTokens) {
  const errorCount = allIssues.filter(
    (issue) => issue.severity === "error"
  ).length;
  const warningCount = allIssues.filter(
    (issue) => issue.severity === "warning"
  ).length;
  const issueFiles = new Set(allIssues.map((issue) => issue.file)).size;
  const cleanFiles = totalFiles - issueFiles;

  console.log("\n📊 DESIGN TOKEN COMPLIANCE REPORT");
  console.log("=====================================");

  if (allIssues.length === 0) {
    console.log("🎉 100% DESIGN TOKEN COMPLIANCE ACHIEVED!");
    console.log(` ${totalFiles} files checked`);
    console.log(" Zero hardcoded values found");
    console.log(" All components use design tokens");
  } else {
    console.log(`📁 Files checked: ${totalFiles}`);
    console.log(` Clean files: ${cleanFiles}`);
    console.log(`⚠️  Files with issues: ${issueFiles}`);
    console.log(`❌ Errors: ${errorCount}`);
    console.log(`⚠️  Warnings: ${warningCount}`);
  }

  console.log("\n📈 AVAILABLE DESIGN TOKENS:");
  console.log(`🎨 Colors: ${availableTokens.colors.length}`);
  console.log(`📏 Spacing: ${availableTokens.spacing.length}`);
  console.log(`📐 Sizes: ${availableTokens.sizes.length}`);
  console.log(`🔤 Typography: ${availableTokens.typography.length}`);
  console.log(`✨ Effects: ${availableTokens.effects.length}`);
  console.log(`📱 Breakpoints: ${availableTokens.breakpoints.length}`);

  if (allIssues.length > 0) {
    console.log("\n❌ COMPLIANCE ISSUES FOUND:");
    console.log("============================");

    // Group issues by file
    const issuesByFile = {};
    for (const issue of allIssues) {
      if (!issuesByFile[issue.file]) {
        issuesByFile[issue.file] = [];
      }
      issuesByFile[issue.file].push(issue);
    }

    for (const [file, issues] of Object.entries(issuesByFile)) {
      console.log(`\n📄 ${file}:`);

      for (const issue of issues) {
        const icon = issue.severity === "error" ? "❌" : "⚠️ ";
        console.log(
          `  ${icon} Line ${issue.line}:${issue.column} - ${issue.rule}`
        );
        console.log(`     ${issue.message}`);
        console.log(`     Code: ${issue.code}`);

        if (issue.suggestions && issue.suggestions.length > 0) {
          console.log(`     💡 Suggestions: ${issue.suggestions.join(", ")}`);
        }
      }
    }

    console.log("\n💡 HOW TO FIX:");
    console.log("================");
    console.log("1. Replace hardcoded values with design tokens");
    console.log("2. Use var(--token-name) syntax");
    console.log("3. Check available tokens in src/styles/_tokens.scss");
    console.log("4. Run npm run sync-tokens to get latest tokens from Figma");
  }

  return {
    totalFiles,
    cleanFiles,
    issueFiles,
    errorCount,
    warningCount,
    compliancePercentage: Math.round((cleanFiles / totalFiles) * 100),
  };
}

/**
 * Main execution function
 */
function main() {
  console.log("🔍 Starting design token compliance validation...\n");

  try {
    // Read available tokens
    const availableTokens = readAvailableTokens();

    // Find all SCSS files
    const scssFiles = findScssFiles(COMPONENTS_DIR);
    console.log(`📁 Found ${scssFiles.length} SCSS files to check`);

    // Check each file
    let allIssues = [];
    for (const file of scssFiles) {
      const issues = checkFileCompliance(file, availableTokens);
      allIssues = allIssues.concat(issues);
    }

    // Generate report
    const report = generateComplianceReport(
      allIssues,
      scssFiles.length,
      availableTokens
    );

    // Summary
    console.log(`\n🎯 COMPLIANCE SCORE: ${report.compliancePercentage}%`);

    if (report.errorCount === 0) {
      console.log("🏆 Ready for production deployment!");
      process.exit(0);
    } else {
      console.log("🔧 Please fix compliance issues before deployment");
      process.exit(1);
    }
  } catch (error) {
    console.error("❌ Compliance validation failed:", error.message);
    process.exit(1);
  }
}

// Run the script
if (
  import.meta.url === `file://${process.argv[1]}` ||
  import.meta.url.endsWith(process.argv[1])
) {
  main();
}

export {
  checkFileCompliance,
  findScssFiles,
  readAvailableTokens,
  generateComplianceReport,
};
