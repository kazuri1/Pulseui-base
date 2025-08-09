# 🎨 Figma CI/CD Pipeline Setup

This guide explains how to set up the automated Figma-to-GitHub design token synchronization pipeline for maintaining 100% design token compliance.

## 📋 Prerequisites

- Figma account with access to your design system file
- GitHub repository with Actions enabled
- Node.js 18+ for local development

## 🔧 Setup Instructions

### 1. Generate Figma API Token

1. Go to [Figma Account Settings](https://www.figma.com/settings)
2. Navigate to **Personal Access Tokens**
3. Click **Generate new token**
4. Name it `Design System CI/CD`
5. **Save the token securely** - you'll need it for GitHub secrets

### 2. Get Figma File Key

1. Open your design system file in Figma
2. Copy the file key from the URL:
   ```
   https://www.figma.com/file/[FILE_KEY]/Your-Design-System
                              ^^^^^^^^^ This is your file key
   ```

### 3. Configure GitHub Secrets

Add these secrets to your GitHub repository:

1. Go to your repository → **Settings** → **Secrets and variables** → **Actions**
2. Click **New repository secret** and add:

   | Secret Name | Value | Description |
   |-------------|-------|-------------|
   | `FIGMA_API_TOKEN` | Your Figma API token | Generated in step 1 |
   | `FIGMA_FILE_KEY` | Your Figma file key | Extracted in step 2 |

### 4. Verify Pipeline Setup

The pipeline is automatically configured with these files:
- `.github/workflows/sync-figma-tokens.yml` - GitHub Actions workflow
- `scripts/sync-figma-tokens.js` - Token fetching script
- `scripts/validate-token-compliance.js` - Compliance validation

## 🚀 Usage

### Manual Sync

Trigger a manual token sync:

```bash
# Local development
npm run sync-tokens

# GitHub Actions (manual trigger)
Go to Actions → Sync Design Tokens from Figma → Run workflow
```

### Automatic Sync

The pipeline automatically runs:
- **Daily at 2 AM UTC** (scheduled)
- **When token files are updated** (on push)
- **Manual trigger** (workflow_dispatch)

### Validation

Check token compliance:

```bash
# Local validation
npm run validate-tokens

# Automatic validation runs in CI/CD
```

## 📊 Pipeline Features

### ✅ What It Does

1. **Fetches Design Tokens** from Figma API
2. **Transforms** tokens to SCSS variables
3. **Validates** 100% design token compliance
4. **Runs Tests** to ensure no breaking changes
5. **Creates Pull Request** with token updates
6. **Auto-merges** minor changes (additions/updates only)
7. **Maintains** design token compliance at 100%

### 🔍 Compliance Checks

The pipeline validates:
- ❌ No hardcoded pixel values
- ❌ No hardcoded hex colors
- ❌ No hardcoded RGB/RGBA values
- ✅ All components use design tokens
- ✅ All tests pass (536/536)
- ✅ Build succeeds

### 🎯 Token Categories

Automatically processes:
- **Colors** → `--color-*`
- **Spacing** → `--spacing-*`
- **Sizes** → `--size-*`
- **Typography** → `--font-*`, `--line-height-*`
- **Effects** → `--shadow-*`, `--radius-*`
- **Breakpoints** → `--breakpoint-*`

## 📁 File Structure

```
.github/
└── workflows/
    └── sync-figma-tokens.yml          # GitHub Actions workflow

scripts/
├── sync-figma-tokens.js               # Figma API integration
└── validate-token-compliance.js       # Compliance validation

src/styles/
├── _tokens.scss                       # Generated design tokens
└── _tokens.backup.scss               # Backup before updates

tokens/
└── figma-tokens.json                 # Raw Figma token data
```

## 🛠️ Customization

### Modify Token Processing

Edit `scripts/sync-figma-tokens.js`:

```javascript
// Custom token processing
function processTokens(figmaData) {
  // Add your custom logic here
  return customTokens;
}
```

### Adjust Compliance Rules

Edit `scripts/validate-token-compliance.js`:

```javascript
// Add custom compliance rules
const COMPLIANCE_RULES = [
  {
    name: 'Custom Rule',
    pattern: /your-pattern/g,
    severity: 'error',
    message: 'Your message'
  }
];
```

### Configure Schedule

Edit `.github/workflows/sync-figma-tokens.yml`:

```yaml
schedule:
  - cron: '0 2 * * *'  # Daily at 2 AM UTC
  # Change to your preferred schedule
```

## 🔧 Troubleshooting

### Common Issues

**❌ "FIGMA_API_TOKEN environment variable is required"**
- Verify the secret is set in GitHub repository settings
- Check the secret name matches exactly: `FIGMA_API_TOKEN`

**❌ "Failed to fetch from Figma"**
- Verify Figma file key is correct
- Ensure the file is accessible with your API token
- Check if the file has design tokens/variables

**❌ "Compliance issues found"**
- Run `npm run validate-tokens` locally
- Fix hardcoded values identified in the report
- Replace with appropriate design tokens

**❌ "No variables found"**
- Ensure your Figma file has design tokens/variables
- Check if tokens are published in Figma
- Verify token naming conventions

### Debug Mode

Enable debug logging:

```bash
# Local debugging
DEBUG=true npm run sync-tokens

# In GitHub Actions
# Add to workflow environment:
# DEBUG: true
```

### Manual Recovery

If sync fails, restore from backup:

```bash
# Restore previous tokens
cp src/styles/_tokens.backup.scss src/styles/_tokens.scss

# Or reset to repository version
git checkout HEAD -- src/styles/_tokens.scss
```

## 📈 Monitoring

### Success Indicators

- ✅ Pull requests created automatically
- ✅ All tests passing (536/536)
- ✅ 100% design token compliance maintained
- ✅ Builds succeed with new tokens

### Alerts

The pipeline will fail if:
- ❌ Figma API is unreachable
- ❌ Invalid API credentials
- ❌ Design token compliance < 100%
- ❌ Tests fail
- ❌ Build fails

## 🚀 Best Practices

### Figma Organization

1. **Consistent Naming**: Use clear, consistent token names
2. **Token Categories**: Organize tokens in collections
3. **Documentation**: Document token usage in Figma
4. **Publishing**: Publish tokens to make them API-accessible

### Code Organization

1. **Never Edit `_tokens.scss` Manually**: It's auto-generated
2. **Use Backup Files**: For emergency recovery
3. **Test Locally**: Run validation before committing
4. **Monitor PRs**: Review auto-generated pull requests

### CI/CD Optimization

1. **Schedule Appropriately**: Don't over-sync (daily is usually enough)
2. **Auto-merge Carefully**: Only for additions/updates, not deletions
3. **Monitor Failures**: Set up notifications for failed syncs
4. **Regular Maintenance**: Update scripts as Figma API evolves

## 🎉 Success!

Your Figma CI/CD pipeline is now configured to:
- 🔄 Automatically sync design tokens
- 🏆 Maintain 100% design token compliance  
- 🚀 Keep your design system up-to-date
- ✅ Ensure production readiness

**Next Steps:**
1. Test the manual sync: `npm run sync-tokens`
2. Validate compliance: `npm run validate-tokens`
3. Monitor the first scheduled run
4. Celebrate maintaining 100% design token compliance! 🎊
