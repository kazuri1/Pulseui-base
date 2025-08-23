# 🎨 Figma Token Synchronization Setup Guide

## **Current Status: ❌ NOT SYNCHRONIZED**

Your design tokens are currently **out of sync** with Figma. The `_tokens.scss` file contains manually defined values that don't match your Figma design system.

## **🔧 Quick Setup (5 minutes)**

### **Step 1: Get Figma API Token**

1. Go to [Figma Account Settings](https://www.figma.com/settings)
2. Click **Personal Access Tokens**
3. Click **Generate new token**
4. Name: `Design System CI/CD`
5. **Copy the token** (you won't see it again!)

### **Step 2: Get Figma File Key**

1. Open your design system file in Figma
2. Copy the file key from URL:
   ```
   https://www.figma.com/file/[FILE_KEY]/Your-Design-System
                              ^^^^^^^^^ Copy this part
   ```

### **Step 3: Test Connection**

```bash
# Set environment variables (replace with your actual values)
export FIGMA_API_TOKEN="your_token_here"
export FIGMA_FILE_KEY="your_file_key_here"

# Test the connection
npm run test-figma
```

### **Step 4: Sync Tokens**

```bash
# If test passes, sync tokens
npm run sync-tokens
```

## **🚀 What Happens After Sync**

1. **Figma tokens** will be fetched with real values (not `#ffffff`)
2. **`_tokens.scss`** will be automatically generated from Figma
3. **100% compliance** between Figma and your code
4. **Automatic updates** via GitHub Actions (daily at 2 AM UTC)

## **🔍 Verification**

After sync, check:

- ✅ `tokens/figma-tokens.json` - Contains real color values
- ✅ `src/styles/_tokens.scss` - Generated from Figma tokens
- ✅ Components use design tokens (not hardcoded values)

## **📋 Troubleshooting**

### **"FIGMA_API_TOKEN environment variable is required"**

- Set: `export FIGMA_API_TOKEN="your_token"`

### **"FIGMA_FILE_KEY environment variable is required"**

- Set: `export FIGMA_FILE_KEY="your_file_key"`

### **"401 Unauthorized"**

- Your API token is invalid/expired
- Generate a new token in Figma

### **"404 Not Found"**

- Your file key is incorrect
- Check the Figma URL again

## **🎯 Next Steps**

1. **Set up credentials** (Steps 1-2 above)
2. **Test connection** (`npm run test-figma`)
3. **Sync tokens** (`npm run sync-tokens`)
4. **Verify changes** in your components
5. **Commit changes** to Git

## **💡 Pro Tips**

- **Keep your API token secure** - never commit it to Git
- **Use GitHub Secrets** for CI/CD automation
- **Run sync regularly** to stay compliant
- **Check the CI/CD logs** for automatic sync status

---

**Need help?** Check the logs from `npm run test-figma` for specific error messages.
