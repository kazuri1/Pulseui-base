# CI/CD Pipeline Setup Guide

## Overview

This project uses GitHub Actions for continuous integration and deployment. The pipeline automatically builds, tests, and deploys the PulseUI component library.

## Pipeline Structure

### 🔄 Sync Design Tokens (Smart Update)

- **Trigger**: Manual workflow dispatch or scheduled
- **Purpose**: Intelligently syncs design tokens from Figma design system
- **Features**:
  - Only updates changed token values
  - Preserves existing token names and structure
  - Creates comparison files for future syncs
  - Generates backup files before changes
- **Requirements**: `FIGMA_API_TOKEN` and `FIGMA_FILE_KEY` secrets

### 🏗️ Build Library

- **Trigger**: Runs after token sync
- **Purpose**: Builds library and Storybook
- **Output**: Build artifacts ready for manual deployment

## Required Secrets

### GitHub Repository Secrets

Add these secrets in your GitHub repository settings:

#### Figma Integration

```bash
FIGMA_API_TOKEN=your_figma_api_token
FIGMA_FILE_KEY=your_figma_file_key
```

## Manual Workflow Triggers

### Force Design Token Sync

1. Go to Actions tab in GitHub
2. Select "CI/CD Pipeline"
3. Click "Run workflow"
4. Check "Force sync design tokens from Figma"
5. Click "Run workflow"

## Local Development

### Prerequisites

- Node.js 18+
- npm

### Setup

```bash
# Install dependencies
npm install --legacy-peer-deps

# Run linting
npm run lint

# Build library
npm run build

# Build Storybook
npm run build-storybook
```

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build library and styles

- `npm run lint` - Lint code
- `npm run lint:fix` - Fix linting issues
- `npm run type-check` - TypeScript type checking
- `npm run storybook` - Start Storybook dev server
- `npm run build-storybook` - Build Storybook for production

## Troubleshooting

### Common Issues

#### 1. Dependency Conflicts

If you encounter peer dependency conflicts:

```bash
npm install --legacy-peer-deps
```

#### 2. Missing Scripts

Ensure all required scripts are defined in `package.json`:

- `lint`
- `build`
- `build-storybook`
- `sync-tokens`

#### 3. Figma Sync Failures

- Verify `FIGMA_API_TOKEN` and `FIGMA_FILE_KEY` are set
- Check Figma API permissions
- Ensure the Figma file is accessible
- Check that the Figma file contains design tokens/variables
- Verify the sync script can access the tokens directory

#### 4. Build Failures

- Check TypeScript compilation errors
- Verify all imports are correct
- Ensure SCSS compilation works

### Debug Mode

To run the pipeline in debug mode:

1. Add `ACTIONS_STEP_DEBUG: true` to repository secrets
2. Re-run the workflow
3. Check detailed logs for debugging information

## Performance Optimization

### Caching

- Node modules are cached between runs
- Build artifacts are preserved for deployment
- Coverage reports are stored as artifacts

### Parallel Execution

- Jobs run in parallel where possible
- Dependencies are clearly defined
- Failed jobs don't block subsequent steps

## Security

### Secret Management

- All sensitive data is stored in GitHub secrets
- No hardcoded credentials in workflows
- Environment-specific configurations

### Access Control

- Build artifacts are preserved for manual deployment
- No automatic deployments to external services

## Monitoring

### Success Metrics

- Build success rate
- Build artifact generation
- Error rates

### Notifications

- Workflow status updates
- Failure notifications
- Success confirmations

## Maintenance

### Regular Tasks

- Update dependencies monthly
- Review and update secrets
- Monitor workflow performance
- Update documentation

### Version Updates

- Update Node.js version in workflows
- Review action versions
- Test new configurations

## Support

For issues with the CI/CD pipeline:

1. Check workflow logs for errors
2. Verify all secrets are configured
3. Test scripts locally
4. Review this documentation
5. Create an issue with detailed error information
