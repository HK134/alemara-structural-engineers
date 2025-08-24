# Dynamic Sitemap Generator API

## Overview
The website now includes a dynamic sitemap generator that can be triggered via a web endpoint. This allows you to update the sitemap without redeploying the entire website.

## API Endpoints

### For Manual Use:
**URL:** `https://alemara.co.uk/sitemap-generator`

### For N8N/Automation (Raw XML):
**URL:** `https://alemara.co.uk/generate-sitemap.xml`

## Usage

### 1. Manual Trigger (Browser)
Visit: `https://alemara.co.uk/sitemap-generator`
- Shows a user-friendly interface
- Automatically downloads the generated sitemap.xml
- Displays generation status and preview

### 2. JSON API Response (for automation)
Visit: `https://alemara.co.uk/sitemap-generator?format=json`
Returns JSON with:
```json
{
  "status": "success",
  "message": "Sitemap generated successfully with X URLs (Y blog posts included)",
  "timestamp": "2025-08-24T10:30:00.000Z",
  "sitemap_length": 12345
}
```

## N8N Integration

### Setup Daily Automation:
1. **HTTP Request Node** in n8n:
   - Method: GET
   - URL: `https://alemara.co.uk/generate-sitemap.xml`
   - Headers: `Accept: application/xml`

2. **Schedule Trigger**:
   - Set to run daily at your preferred time
   - Recommended: 2 AM UTC (low traffic time)

3. **Manual Google Search Console Submission**:
   - The deprecated ping service no longer works
   - Instead, manually submit sitemap URL in Google Search Console
   - Or use Google Search Console API (requires authentication)

### Sample N8N Workflow:
```
[Schedule Trigger] → [HTTP Request (Get XML)] → [Save as sitemap.xml] → [Upload to GitHub] → [Deploy]
```

## What Gets Included

The generated sitemap includes:
- **Static Pages**: Homepage, services, areas, contact, etc.
- **Portfolio Projects**: All projects with slug-based URLs
- **Blog Posts**: All published posts from Supabase with `lastmod` dates
- **Proper Priorities**: Homepage (1.0), main pages (0.8), portfolio (0.7), blogs (0.6)

## Benefits

1. **No Redeployment**: Update sitemap without rebuilding the entire site
2. **Always Current**: Includes latest blog posts from Supabase
3. **SEO Optimized**: Proper lastmod dates, priorities, and change frequencies
4. **Automation Ready**: Perfect for n8n, cron jobs, or webhook services

## Technical Details

- **Data Source**: Fetches live data from Supabase `blogs` table
- **Format**: Standard XML sitemap following sitemaps.org protocol
- **Performance**: Lightweight endpoint, fast generation
- **Error Handling**: Graceful fallback if blog table is unavailable

## Deployment Notes

## The Issue with Static Sitemaps

The current sitemap at [https://alemara.co.uk/sitemap.xml](https://alemara.co.uk/sitemap.xml) is a **static file** built during deployment. It won't automatically update when you add new blog posts.

## Solution Options

### Option 1: Manual Update Process
1. Visit: `https://alemara.co.uk/sitemap-generator`
2. Download the generated sitemap.xml 
3. Replace the static file in your project
4. Redeploy

### Option 2: N8N Automation (Recommended)
1. **Daily N8N workflow** calls: `https://alemara.co.uk/generate-sitemap.xml`
2. **Save the response directly** as `sitemap.xml` (it's already pure XML)
3. **Upload/commit** the updated sitemap.xml to your repository
4. **Deploy** to replace the static sitemap

### Option 3: Build Process Integration
- Modify your build process to call the endpoint and update the static sitemap
- Ensures fresh sitemaps on every deployment 