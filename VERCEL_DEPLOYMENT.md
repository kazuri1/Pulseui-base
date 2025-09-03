# Vercel Deployment Configuration

This repository is configured to deploy two separate sites on Vercel:

## 1. Main Application (Dev Branch)

- **Branch**: `dev`
- **Configuration**: `vercel.json`
- **Build Command**: `npm run build:vite`
- **Output Directory**: `dist`
- **Purpose**: Main PulseUI application

## 2. Storybook (Master Branch)

- **Branch**: `master`
- **Configuration**: `vercel-master.json`
- **Build Command**: `npm run build-storybook`
- **Output Directory**: `storybook-static`
- **Purpose**: Component documentation and testing

## Setup Instructions

### Option 1: Branch-Based Deployments (Recommended)

1. **Connect your repository to Vercel**
2. **Configure branch deployments**:
   - Set `dev` branch to deploy the main application
   - Set `master` branch to deploy Storybook
3. **Vercel will automatically use the appropriate configuration file**

### Option 2: Separate Projects

1. **Create two Vercel projects**:
   - Project 1: Main application
   - Project 2: Storybook
2. **Configure each project**:
   - Main app: Use `vercel.json`
   - Storybook: Use `vercel-master.json`

## Configuration Files

- `vercel.json` - Main application configuration (dev branch)
- `vercel-master.json` - Storybook configuration (master branch)
- `vercel-storybook.json` - Alternative Storybook configuration
- `.vercelignore` - Files to exclude from deployment

## Deployment URLs

After setup, you'll have:

- Main app: `https://your-project-name.vercel.app`
- Storybook: `https://your-project-name-storybook.vercel.app` (or similar)

## Notes

- The `dev` branch will deploy the main application with SPA routing
- The `master` branch will deploy Storybook for component documentation
- Both deployments will have optimized builds and security headers
