#!/usr/bin/env node

/**
 * Accessibility Testing Script for PulseUI
 *
 * This script performs basic accessibility checks on the codebase:
 * - Checks for missing alt text in images
 * - Validates ARIA attribute usage
 * - Checks for semantic HTML structure
 * - Identifies potential accessibility issues
 *
 * Usage: node scripts/accessibility-test.js
 */

const fs = require("fs");
const path = require("path");
const glob = require("glob");

// Color codes for console output
const colors = {
  reset: "\x1b[0m",
  red: "\x1b[31m",
  green: "\x1b[32m",
  yellow: "\x1b[33m",
  blue: "\x1b[34m",
  magenta: "\x1b[35m",
  cyan: "\x1b[36m",
};

// Accessibility rules and patterns
const accessibilityRules = {
  // Missing alt text in images
  missingAltText: {
    pattern: /<img[^>]*?(?!.*alt=)[^>]*?>/gi,
    message: "Image missing alt attribute",
    severity: "error",
  },

  // Missing aria-label for interactive elements
  missingAriaLabel: {
    pattern: /<(button|input|select|textarea|a)[^>]*?(?!.*aria-label)[^>]*?>/gi,
    message: "Interactive element missing aria-label",
    severity: "warning",
  },

  // Div with onClick (should be button)
  divWithOnClick: {
    pattern: /<div[^>]*?onClick[^>]*?>/gi,
    message: "Div with onClick should be a button element",
    severity: "error",
  },

  // Missing role attribute for custom components
  missingRole: {
    pattern: /<(div|span)[^>]*?className=.*?[A-Z][a-zA-Z]*[^>]*?>/gi,
    message: "Custom component should have appropriate role attribute",
    severity: "warning",
  },

  // Missing form labels
  missingFormLabel: {
    pattern: /<(input|select|textarea)[^>]*?(?!.*id=)[^>]*?>/gi,
    message: "Form control missing id attribute for label association",
    severity: "warning",
  },

  // Missing required attributes
  missingRequired: {
    pattern:
      /<(input|select|textarea)[^>]*?required[^>]*?(?!.*aria-required)[^>]*?>/gi,
    message: "Required field missing aria-required attribute",
    severity: "warning",
  },

  // Missing focus management
  missingFocus: {
    pattern: /onClick[^>]*?>/gi,
    message: "Interactive element should handle keyboard focus",
    severity: "info",
  },
};

// Component-specific accessibility checks
const componentChecks = {
  Carousel: {
    requiredProps: ["ariaLabel", "enableKeyboard"],
    requiredAttributes: ['role="region"', 'aria-roledescription="carousel"'],
    file: "src/components/atoms/Carousel/Carousel.tsx",
  },
  Button: {
    requiredProps: ["ariaLabel", "ariaPressed", "ariaExpanded"],
    requiredAttributes: ['role="button"', "aria-describedby"],
    file: "src/components/atoms/Button/Button.tsx",
  },
  Card: {
    requiredProps: ["ariaLabel", "ariaExpanded"],
    requiredAttributes: ['role="button"', "aria-describedby"],
    file: "src/components/atoms/Card/Card.tsx",
  },
  Input: {
    requiredProps: ["label", "ariaLabel"],
    requiredAttributes: ["aria-describedby", "aria-invalid"],
    file: "src/components/atoms/Input/Input.tsx",
  },
};

class AccessibilityTester {
  constructor() {
    this.issues = [];
    this.stats = {
      filesChecked: 0,
      totalIssues: 0,
      errors: 0,
      warnings: 0,
      info: 0,
    };
  }

  // Check a single file for accessibility issues
  checkFile(filePath) {
    try {
      const content = fs.readFileSync(filePath, "utf8");
      const fileName = path.basename(filePath);

      this.stats.filesChecked++;

      // Check for general accessibility patterns
      Object.entries(accessibilityRules).forEach(([ruleName, rule]) => {
        const matches = content.match(rule.pattern);
        if (matches) {
          matches.forEach((match) => {
            this.issues.push({
              file: filePath,
              fileName,
              rule: ruleName,
              message: rule.message,
              severity: rule.severity,
              match: match.substring(0, 100) + "...",
              line: this.findLineNumber(content, match),
            });

            this.stats.totalIssues++;
            this.stats[
              rule.severity === "error"
                ? "errors"
                : rule.severity === "warning"
                  ? "warnings"
                  : "info"
            ]++;
          });
        }
      });

      // Check component-specific requirements
      this.checkComponentAccessibility(filePath, content);
    } catch (error) {
      console.error(
        `${colors.red}Error reading file ${filePath}:${colors.reset}`,
        error.message
      );
    }
  }

  // Check component-specific accessibility requirements
  checkComponentAccessibility(filePath, content) {
    Object.entries(componentChecks).forEach(([componentName, requirements]) => {
      if (filePath.includes(requirements.file)) {
        console.log(
          `${colors.blue}Checking ${componentName} component accessibility...${colors.reset}`
        );

        // Check required props
        requirements.requiredProps.forEach((prop) => {
          if (!content.includes(prop)) {
            this.issues.push({
              file: filePath,
              fileName: path.basename(filePath),
              rule: "missingRequiredProp",
              message: `${componentName} missing required accessibility prop: ${prop}`,
              severity: "error",
              match: "Component accessibility check",
              line: "N/A",
            });
            this.stats.errors++;
            this.stats.totalIssues++;
          }
        });

        // Check required attributes
        requirements.requiredAttributes.forEach((attr) => {
          if (!content.includes(attr)) {
            this.issues.push({
              file: filePath,
              fileName: path.basename(filePath),
              rule: "missingRequiredAttribute",
              message: `${componentName} missing required accessibility attribute: ${attr}`,
              severity: "warning",
              match: "Component accessibility check",
              line: "N/A",
            });
            this.stats.warnings++;
            this.stats.totalIssues++;
          }
        });
      }
    });
  }

  // Find line number for a match in content
  findLineNumber(content, match) {
    const lines = content.split("\n");
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].includes(match.substring(0, 50))) {
        return i + 1;
      }
    }
    return "N/A";
  }

  // Run accessibility checks on the entire codebase
  async runChecks() {
    console.log(
      `${colors.cyan}🔍 Starting PulseUI Accessibility Audit...${colors.reset}\n`
    );

    // Find all TypeScript and TSX files
    const files = glob.sync("src/**/*.{ts,tsx}", {
      ignore: ["**/node_modules/**", "**/dist/**", "**/build/**", "**/*.d.ts"],
    });

    console.log(
      `${colors.blue}Found ${files.length} files to check...${colors.reset}\n`
    );

    // Check each file
    files.forEach((file) => {
      this.checkFile(file);
    });

    // Generate report
    this.generateReport();
  }

  // Generate accessibility report
  generateReport() {
    console.log(`\n${colors.cyan}📊 Accessibility Audit Report${colors.reset}`);
    console.log(
      `${colors.cyan}================================${colors.reset}\n`
    );

    // Summary statistics
    console.log(`${colors.blue}Summary:${colors.reset}`);
    console.log(`  Files checked: ${this.stats.filesChecked}`);
    console.log(`  Total issues: ${this.stats.totalIssues}`);
    console.log(`  Errors: ${colors.red}${this.stats.errors}${colors.reset}`);
    console.log(
      `  Warnings: ${colors.yellow}${this.stats.warnings}${colors.reset}`
    );
    console.log(`  Info: ${colors.blue}${this.stats.info}${colors.reset}\n`);

    // Group issues by severity
    const bySeverity = {
      error: this.issues.filter((i) => i.severity === "error"),
      warning: this.issues.filter((i) => i.severity === "warning"),
      info: this.issues.filter((i) => i.severity === "info"),
    };

    // Display errors
    if (bySeverity.error.length > 0) {
      console.log(
        `${colors.red}🚨 ERRORS (${bySeverity.error.length}):${colors.reset}`
      );
      bySeverity.error.forEach((issue) => {
        console.log(
          `  ${colors.red}${issue.fileName}:${issue.line}${colors.reset} - ${issue.message}`
        );
      });
      console.log("");
    }

    // Display warnings
    if (bySeverity.warning.length > 0) {
      console.log(
        `${colors.yellow}⚠️  WARNINGS (${bySeverity.warning.length}):${colors.reset}`
      );
      bySeverity.warning.forEach((issue) => {
        console.log(
          `  ${colors.yellow}${issue.fileName}:${issue.line}${colors.reset} - ${issue.message}`
        );
      });
      console.log("");
    }

    // Display info
    if (bySeverity.info.length > 0) {
      console.log(
        `${colors.blue}ℹ️  INFO (${bySeverity.info.length}):${colors.reset}`
      );
      bySeverity.info.forEach((issue) => {
        console.log(
          `  ${colors.blue}${issue.fileName}:${issue.line}${colors.reset} - ${issue.message}`
        );
      });
      console.log("");
    }

    // Recommendations
    if (this.stats.totalIssues === 0) {
      console.log(
        `${colors.green}🎉 Excellent! No accessibility issues found.${colors.reset}`
      );
    } else {
      console.log(`${colors.yellow}💡 Recommendations:${colors.reset}`);
      console.log(`  1. Fix all ERROR level issues first`);
      console.log(`  2. Address WARNING level issues for better compliance`);
      console.log(`  3. Review INFO level issues for improvements`);
      console.log(`  4. Run manual accessibility testing with screen readers`);
      console.log(
        `  5. Use the accessibility checklist in docs/ACCESSIBILITY_CHECKLIST.md`
      );
    }

    console.log(`\n${colors.cyan}📚 For more information, see:${colors.reset}`);
    console.log(`  - docs/ACCESSIBILITY_REPORT.md`);
    console.log(`  - docs/ACCESSIBILITY_CHECKLIST.md`);
    console.log(
      `  - WCAG 2.1 Guidelines: https://www.w3.org/WAI/WCAG21/quickref/`
    );
  }
}

// Run the accessibility test
async function main() {
  try {
    const tester = new AccessibilityTester();
    await tester.runChecks();

    // Exit with error code if there are critical issues
    if (tester.stats.errors > 0) {
      process.exit(1);
    }
  } catch (error) {
    console.error(
      `${colors.red}Error running accessibility test:${colors.reset}`,
      error
    );
    process.exit(1);
  }
}

// Run if this script is executed directly
if (require.main === module) {
  main();
}

module.exports = AccessibilityTester;
