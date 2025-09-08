#!/usr/bin/env node

/**
 * Test Figma API Connection
 *
 * This script tests the connection to Figma API to verify credentials
 * before running the full token synchronization.
 */

import https from "https";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

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
            resolve({ status: res.statusCode, data: jsonData });
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
 * Test Figma API connection
 */
async function testFigmaConnection() {
  console.log("🔍 Testing Figma API connection...\n");

  if (!FIGMA_API_TOKEN) {
    console.error("❌ FIGMA_API_TOKEN environment variable is required");
    console.log("Set it with: export FIGMA_API_TOKEN='your_token_here'");
    return false;
  }

  if (!FIGMA_FILE_KEY) {
    console.error("❌ FIGMA_FILE_KEY environment variable is required");
    console.log("Set it with: export FIGMA_FILE_KEY='your_file_key_here'");
    return false;
  }

  try {
    console.log(" Environment variables found");
    console.log(`📁 File Key: ${FIGMA_FILE_KEY.substring(0, 8)}...`);
    console.log(`🔑 Token: ${FIGMA_API_TOKEN.substring(0, 8)}...\n`);

    // Test 1: Fetch file metadata
    console.log("🧪 Test 1: Fetching file metadata...");
    const fileUrl = `${FIGMA_API_BASE}/files/${FIGMA_FILE_KEY}`;
    const fileResponse = await makeRequest(fileUrl);

    if (fileResponse.status === 200) {
      console.log(" File metadata fetched successfully");
      console.log(`📄 File name: ${fileResponse.data.name}`);
      console.log(
        `👤 Last modified by: ${fileResponse.data.lastModifiedBy?.name || "Unknown"
        }`
      );
      console.log(
        `📅 Last modified: ${new Date(
          fileResponse.data.lastModified
        ).toLocaleString()}\n`
      );
    } else {
      console.error(`❌ Failed to fetch file metadata: ${fileResponse.status}`);
      return false;
    }

    // Test 2: Fetch local variables (design tokens)
    console.log("🧪 Test 2: Fetching design tokens...");
    const variablesUrl = `${FIGMA_API_BASE}/files/${FIGMA_FILE_KEY}/variables/local`;
    const variablesResponse = await makeRequest(variablesUrl);

    if (variablesResponse.status === 200) {
      const variables = variablesResponse.data.meta?.variables || {};
      const variableCount = Object.keys(variables).length;

      console.log(" Design tokens fetched successfully");
      console.log(`🎨 Found ${variableCount} design tokens`);

      if (variableCount > 0) {
        console.log("📋 Sample tokens:");
        const sampleTokens = Object.entries(variables).slice(0, 5);
        sampleTokens.forEach(([key, value]) => {
          console.log(`   • ${key}: ${value.name}`);
        });
      }
    } else {
      console.error(
        `❌ Failed to fetch design tokens: ${variablesResponse.status}`
      );
      return false;
    }

    console.log(
      "\n🎉 All tests passed! Your Figma API connection is working correctly."
    );
    console.log("🚀 You can now run: npm run sync-tokens");

    return true;
  } catch (error) {
    console.error("❌ Test failed:", error.message);

    if (error.message.includes("401")) {
      console.log(
        "💡 This usually means your FIGMA_API_TOKEN is invalid or expired"
      );
    } else if (error.message.includes("404")) {
      console.log("💡 This usually means your FIGMA_FILE_KEY is incorrect");
    }

    return false;
  }
}

// Run the test
testFigmaConnection().catch(console.error);
