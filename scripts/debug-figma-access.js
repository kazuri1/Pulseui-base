#!/usr/bin/env node

/**
 * Debug Figma API Access Issues
 *
 * This script provides detailed debugging information for Figma API access problems
 */

import https from "https";

// Configuration
const FIGMA_API_TOKEN = process.env.FIGMA_API_TOKEN;
const FIGMA_FILE_KEY = process.env.FIGMA_FILE_KEY;
const FIGMA_API_BASE = "https://api.figma.com/v1";

/**
 * Makes HTTP request to Figma API with detailed error handling
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
              headers: res.headers,
              data: jsonData,
              url: url,
            });
          } catch (error) {
            resolve({
              status: res.statusCode,
              headers: res.headers,
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
 * Debug Figma API access
 */
async function debugFigmaAccess() {
  console.log("🔍 Debugging Figma API access...\n");

  if (!FIGMA_API_TOKEN) {
    console.error("❌ FIGMA_API_TOKEN environment variable is required");
    return;
  }

  if (!FIGMA_FILE_KEY) {
    console.error("❌ FIGMA_FILE_KEY environment variable is required");
    return;
  }

  console.log("✅ Environment variables found");
  console.log(`📁 File Key: ${FIGMA_FILE_KEY}`);
  console.log(`🔑 Token: ${FIGMA_API_TOKEN.substring(0, 12)}...`);
  console.log("");

  try {
    // Test 1: Check if we can access the Figma API at all
    console.log("🧪 Test 1: Testing basic Figma API access...");
    const meUrl = `${FIGMA_API_BASE}/me`;
    const meResponse = await makeRequest(meUrl);

    if (meResponse.status === 200) {
      console.log("✅ Basic API access working");
      console.log(`👤 Logged in as: ${meResponse.data.email}`);
      console.log(`🆔 User ID: ${meResponse.data.id}`);
      console.log(
        `📅 Created: ${new Date(meResponse.data.created_at).toLocaleString()}`
      );
    } else {
      console.error(`❌ Basic API access failed: ${meResponse.status}`);
      console.error(`Response: ${JSON.stringify(meResponse.data, null, 2)}`);
      return;
    }

    console.log("");

    // Test 2: Try to access the specific file
    console.log("🧪 Test 2: Testing file access...");
    const fileUrl = `${FIGMA_API_BASE}/files/${FIGMA_FILE_KEY}`;
    const fileResponse = await makeRequest(fileUrl);

    if (fileResponse.status === 200) {
      console.log("✅ File access successful!");
      console.log(`📄 File name: ${fileResponse.data.name}`);
      console.log(`👤 Owner: ${fileResponse.data.owner?.name || "Unknown"}`);
      console.log(
        `📅 Last modified: ${new Date(
          fileResponse.data.lastModified
        ).toLocaleString()}`
      );
    } else if (fileResponse.status === 403) {
      console.error("❌ 403 Forbidden - Access denied to this file");
      console.log("💡 Possible reasons:");
      console.log("   • File is private and you don't have access");
      console.log("   • File is in a team workspace you don't have access to");
      console.log("   • Your API token doesn't have the right permissions");
      console.log("   • File key is incorrect");
      console.log("");
      console.log("🔧 Solutions:");
      console.log("   • Check if you have access to this file in Figma");
      console.log("   • Make sure the file is shared with your account");
      console.log("   • Verify the file key from the Figma URL");
      console.log("   • Check if you need team access permissions");

      // Try to get more info about the error
      if (fileResponse.data && fileResponse.data.message) {
        console.log(`📋 Error message: ${fileResponse.data.message}`);
      }
    } else if (fileResponse.status === 404) {
      console.error("❌ 404 Not Found - File doesn't exist");
      console.log("💡 Check if the file key is correct");
    } else {
      console.error(`❌ Unexpected error: ${fileResponse.status}`);
      console.error(`Response: ${JSON.stringify(fileResponse.data, null, 2)}`);
    }

    console.log("");

    // Test 3: Check if file has variables (design tokens)
    if (fileResponse.status === 200) {
      console.log("🧪 Test 3: Checking for design tokens...");
      const variablesUrl = `${FIGMA_API_BASE}/files/${FIGMA_FILE_KEY}/variables/local`;
      const variablesResponse = await makeRequest(variablesUrl);

      if (variablesResponse.status === 200) {
        const variables = variablesResponse.data.meta?.variables || {};
        const variableCount = Object.keys(variables).length;

        console.log("✅ Design tokens accessible");
        console.log(`🎨 Found ${variableCount} design tokens`);

        if (variableCount > 0) {
          console.log("📋 Sample tokens:");
          const sampleTokens = Object.entries(variables).slice(0, 5);
          sampleTokens.forEach(([key, value]) => {
            console.log(`   • ${key}: ${value.name}`);
          });
        } else {
          console.log("⚠️  No design tokens found in this file");
          console.log("💡 Make sure your Figma file has variables set up");
        }
      } else {
        console.error(
          `❌ Cannot access design tokens: ${variablesResponse.status}`
        );
      }
    }
  } catch (error) {
    console.error("❌ Debug failed:", error);
  }
}

// Run the debug
debugFigmaAccess().catch(console.error);
