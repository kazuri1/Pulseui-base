#!/usr/bin/env node

/**
 * Explore Figma File Structure
 *
 * This script explores the Figma file to see what design tokens
 * and styles are available for extraction.
 */

import https from "https";

// Configuration
const FIGMA_API_TOKEN = process.env.FIGMA_API_TOKEN;
const FIGMA_FILE_KEY = process.env.FIGMA_FILE_KEY;
const FIGMA_API_BASE = "https://api.figma.com/v1";

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
            resolve({
              status: res.statusCode,
              data: jsonData,
              url: url,
            });
          } catch (error) {
            resolve({
              status: res.statusCode,
              data: data,
              url: url,
              parseError: error.message,
            });
          }
        });
      })
      .on("error", (error) => {
        reject({ error: error.message, url: url });
      });
  });
}

/**
 * Explore Figma file structure
 */
async function exploreFigmaFile() {
  console.log("🔍 Exploring Figma file structure...\n");

  if (!FIGMA_API_TOKEN || !FIGMA_FILE_KEY) {
    console.error("❌ Environment variables not set");
    return;
  }

  try {
    // Get file data
    console.log("📄 Fetching file data...");
    const fileUrl = `${FIGMA_API_BASE}/files/${FIGMA_FILE_KEY}`;
    const fileResponse = await makeRequest(fileUrl);

    if (fileResponse.status !== 200) {
      console.error(`❌ Failed to fetch file: ${fileResponse.status}`);
      return;
    }

    const fileData = fileResponse.data;
    console.log("✅ File data fetched successfully");
    console.log(`📄 File name: ${fileData.name}`);
    console.log(`👤 Owner: ${fileData.owner?.name || "Unknown"}`);
    console.log(
      `📅 Last modified: ${new Date(fileData.lastModified).toLocaleString()}`
    );
    console.log(`🔑 Version: ${fileData.version}`);
    console.log("");

    // Check for variables (design tokens)
    console.log("🎨 Checking for design tokens (variables)...");
    const variablesUrl = `${FIGMA_API_BASE}/files/${FIGMA_FILE_KEY}/variables/local`;
    const variablesResponse = await makeRequest(variablesUrl);

    if (variablesResponse.status === 200) {
      const variables = variablesResponse.data.meta?.variables || {};
      const variableCount = Object.keys(variables).length;

      if (variableCount > 0) {
        console.log(`✅ Found ${variableCount} design tokens`);
        console.log("📋 Sample tokens:");
        const sampleTokens = Object.entries(variables).slice(0, 10);
        sampleTokens.forEach(([key, value]) => {
          console.log(`   • ${key}: ${value.name} (${value.resolvedType})`);
        });
      } else {
        console.log("⚠️  No design tokens found");
      }
    } else {
      console.log(`❌ Cannot access variables: ${variablesResponse.status}`);
      if (variablesResponse.data && variablesResponse.data.message) {
        console.log(`📋 Error: ${variablesResponse.data.message}`);
      }
    }

    console.log("");

    // Check for styles
    console.log("🎨 Checking for styles...");
    const stylesUrl = `${FIGMA_API_BASE}/files/${FIGMA_FILE_KEY}/styles`;
    const stylesResponse = await makeRequest(stylesUrl);

    if (stylesResponse.status === 200) {
      const styles = stylesResponse.data.meta?.styles || {};
      const styleCount = Object.keys(styles).length;

      if (styleCount > 0) {
        console.log(`✅ Found ${styleCount} styles`);
        console.log("📋 Sample styles:");
        const sampleStyles = Object.entries(styles).slice(0, 10);
        sampleStyles.forEach(([key, value]) => {
          console.log(`   • ${key}: ${value.name} (${value.styleType})`);
        });
      } else {
        console.log("⚠️  No styles found");
      }
    } else {
      console.log(`❌ Cannot access styles: ${stylesResponse.status}`);
    }

    console.log("");

    // Check for components
    console.log("🧩 Checking for components...");
    const componentsUrl = `${FIGMA_API_BASE}/files/${FIGMA_FILE_KEY}/components`;
    const componentsResponse = await makeRequest(componentsUrl);

    if (componentsResponse.status === 200) {
      const components = componentsResponse.data.meta?.components || {};
      const componentCount = Object.keys(components).length;

      if (componentCount > 0) {
        console.log(`✅ Found ${componentCount} components`);
        console.log("📋 Sample components:");
        const sampleComponents = Object.entries(components).slice(0, 10);
        sampleComponents.forEach(([key, value]) => {
          console.log(`   • ${key}: ${value.name}`);
        });
      } else {
        console.log("⚠️  No components found");
      }
    } else {
      console.log(`❌ Cannot access components: ${componentsResponse.status}`);
    }

    console.log("");

    // Summary and recommendations
    console.log("📊 Summary:");
    console.log("✅ File access: Working");
    console.log("✅ File structure: Accessible");

    if (
      variablesResponse.status === 200 &&
      Object.keys(variablesResponse.data.meta?.variables || {}).length > 0
    ) {
      console.log("✅ Design tokens: Available");
      console.log("🚀 Ready to sync design tokens!");
    } else {
      console.log("❌ Design tokens: Not available");
      console.log("");
      console.log("💡 Recommendations:");
      console.log("   1. Check if your Figma file has variables set up");
      console.log("   2. Variables should be in the 'Local variables' section");
      console.log("   3. Make sure variables are properly named and organized");
      console.log("   4. Consider using Figma's design tokens plugin");
    }
  } catch (error) {
    console.error("❌ Exploration failed:", error);
  }
}

// Run the exploration
exploreFigmaFile().catch(console.error);
