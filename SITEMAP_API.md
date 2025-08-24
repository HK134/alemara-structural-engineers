# Dynamic Sitemap Generator API

## Overview
The website now includes a dynamic sitemap generator that can be triggered via a web endpoint. This allows you to update the sitemap without redeploying the entire website.

## API Endpoint
**URL:** `https://alemara.co.uk/api/generate-sitemap`

## Usage

### 1. Manual Trigger (Browser)
Visit: `https://alemara.co.uk/api/generate-sitemap`
- Shows a user-friendly interface
- Automatically downloads the generated sitemap.xml
- Displays generation status and preview

### 2. JSON API Response (for automation)
Visit: `https://alemara.co.uk/api/generate-sitemap?format=json`
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
   - URL: `https://alemara.co.uk/api/generate-sitemap?format=json`
   - Headers: `Accept: application/json`

2. **Schedule Trigger**:
   - Set to run daily at your preferred time
   - Recommended: 2 AM UTC (low traffic time)

3. **Optional: Webhook to Google Search Console**
   - After sitemap generation, ping Google: 
   - `http://www.google.com/ping?sitemap=https://alemara.co.uk/sitemap.xml`

### Sample N8N Workflow:
```
[Schedule Trigger] → [HTTP Request (Generate Sitemap)] → [HTTP Request (Ping Google)]
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

After deploying this update:
1. Test the endpoint: `https://alemara.co.uk/api/generate-sitemap`
2. Set up your n8n daily automation
3. Submit the sitemap URL to Google Search Console: `https://alemara.co.uk/sitemap.xml`
4. The sitemap will be automatically updated daily with new blog posts 