# Deployment Guide

This project has two separate deployment configurations:

## 1. Storybook Deployment (Existing)

- **Configuration**: `vercel.json`
- **Build Command**: `npm run build-storybook`
- **Output Directory**: `storybook-static`
- **Purpose**: Component documentation and design system showcase

## 2. Development App Deployment (New)

- **Configuration**: `vercel-dev.json`
- **Build Command**: `npm run build:vite`
- **Output Directory**: `dist`
- **Purpose**: Main React application for development and testing

## Deploying the Dev Environment to Vercel

### Step 1: Create New Vercel Project

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New..." → "Project"
3. Import your GitHub repository again (or create a new one)
4. Give it a different name (e.g., `pulseui-dev` or `pulseui-app`)

### Step 2: Configure the New Project

1. In the project settings, go to the "General" tab
2. Set the following build settings:
   - **Build Command**: `npm run build:vite`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

### Step 3: Deploy Using Custom Configuration

You can also deploy directly using the Vercel CLI with the custom config:

```bash
# Install Vercel CLI if you haven't already
npm install -g vercel

# Deploy using the dev configuration
vercel --prod --local-config vercel-dev.json
```

### Step 4: Set Up Environment Variables (if needed)

If your dev environment requires any environment variables, add them in the Vercel project settings under the "Environment Variables" tab.

## Build Commands Reference

- `npm run dev` - Start development server (port 3001 as per your preference)
- `npm run build:vite` - Build the main React app for production
- `npm run build-storybook` - Build Storybook for production
- `npm run storybook` - Start Storybook development server

## Project Structure

```
├── vercel.json           # Storybook deployment config
├── vercel-dev.json       # Dev app deployment config
├── dist/                 # Vite build output (dev app)
├── storybook-static/     # Storybook build output
└── src/                  # Source code
```

## ✅ Deployment Results

Your dev environment has been successfully deployed!

**Dev App URL**: https://pulseui-v1-0-hol592y5o-vigneshs-projects-229e5d2d.vercel.app

## Notes

- The dev configuration includes SPA routing support via rewrites
- Security headers are included for production deployment
- Both deployments can run simultaneously on different Vercel projects
- The dev app is now live and ready for testing
- Storybook remains on your existing Vercel project
