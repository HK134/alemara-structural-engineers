import React, { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { portfolioItems } from '@/data/projects';

// Helper functions
const iso = (d: Date | string) => new Date(d).toISOString().slice(0, 10);

const createProjectSlug = (title: string): string => {
  return title
    .toLowerCase()
    .trim()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

const SitemapGenerator = () => {
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const generateSitemap = async () => {
      try {
        const SITE_URL = 'https://alemara.co.uk';
        
        // Static routes
        const staticRoutes = [
          '/', '/about-us', '/services', '/services/residential', '/services/loft-conversions',
          '/services/residential/loft-conversions', '/services/extensions', '/services/residential/extensions',
          '/services/structural-surveys', '/services/commercial', '/services/civil-engineering',
          '/services/basement-extensions', '/services/subsidence-crack-surveys', '/services/new-builds',
          '/areas/islington-highbury', '/areas/camden-kentish-town', '/areas/hackney-shoreditch',
          '/areas/kensington-chelsea', '/areas/westminster-mayfair', '/areas/london-boroughs',
          '/portfolio', '/faq', '/contact', '/privacy-policy', '/terms', '/blog',
        ];

        // Get blog posts from Supabase
        const { data: blogPosts, error: blogError } = await supabase
          .from('blogs')
          .select('slug, updated_at, date_published, published')
          .eq('published', true)
          .order('date_published', { ascending: false });

        if (blogError) {
          console.warn('Blog fetch error:', blogError.message);
        }

        const urls = [];
        const today = iso(new Date());

        const urlEl = ({ loc, lastmod, changefreq = 'monthly', priority = '0.7' }: {
          loc: string;
          lastmod?: string;
          changefreq?: string;
          priority?: string;
        }) => {
          return `  <url>
    <loc>${loc}</loc>
    ${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
        };

        // Static pages
        for (const route of staticRoutes) {
          urls.push(urlEl({ 
            loc: `${SITE_URL}${route}`, 
            lastmod: today, 
            priority: route === '/' ? '1.0' : '0.8' 
          }));
        }

        // Portfolio pages (using slugs)
        for (const project of portfolioItems) {
          const slug = createProjectSlug(project.title);
          urls.push(urlEl({ 
            loc: `${SITE_URL}/portfolio/${slug}`, 
            lastmod: today, 
            priority: '0.7' 
          }));
        }

        // Blog posts
        if (blogPosts && blogPosts.length > 0) {
          for (const post of blogPosts) {
            urls.push(urlEl({ 
              loc: `${SITE_URL}/blog/${post.slug}`, 
              lastmod: iso(post.updated_at || post.date_published || new Date()), 
              priority: '0.6', 
              changefreq: 'weekly' 
            }));
          }
        }

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;

        const response = {
          status: 'success',
          message: `Sitemap generated successfully with ${urls.length} URLs (${blogPosts?.length || 0} blog posts included)`,
          timestamp: new Date().toISOString(),
          sitemap_length: xml.length,
          urls_count: urls.length,
          blog_posts_count: blogPosts?.length || 0,
          sitemap_xml: xml
        };

        setResult(response);

        // If this is an API request (check user agent or referrer), return JSON
        const isApiRequest = window.location.search.includes('api=true') || 
                           document.referrer.includes('n8n') ||
                           navigator.userAgent.toLowerCase().includes('bot') ||
                           window.location.search.includes('format=json');

        if (isApiRequest) {
          // Replace the entire page content with JSON
          document.body.innerHTML = `<pre style="font-family: monospace; white-space: pre-wrap; margin: 20px;">${JSON.stringify(response, null, 2)}</pre>`;
          document.title = 'Sitemap API Response';
        }

      } catch (error) {
        console.error('Error generating sitemap:', error);
        const errorResponse = {
          status: 'error',
          message: error instanceof Error ? error.message : 'Unknown error',
          timestamp: new Date().toISOString()
        };
        
        setResult(errorResponse);

        const isApiRequest = window.location.search.includes('api=true') || 
                           document.referrer.includes('n8n') ||
                           navigator.userAgent.toLowerCase().includes('bot') ||
                           window.location.search.includes('format=json');

        if (isApiRequest) {
          document.body.innerHTML = `<pre style="font-family: monospace; white-space: pre-wrap; margin: 20px;">${JSON.stringify(errorResponse, null, 2)}</pre>`;
        }
      } finally {
        setLoading(false);
      }
    };

    generateSitemap();
  }, []);

  if (loading) {
    return (
      <div style={{ 
        fontFamily: 'Arial, sans-serif', 
        maxWidth: '800px', 
        margin: '50px auto', 
        padding: '20px' 
      }}>
        <h1>Sitemap Generator</h1>
        <div style={{ 
          padding: '15px', 
          backgroundColor: '#fff3cd', 
          border: '1px solid #ffeaa7', 
          borderRadius: '4px' 
        }}>
          <strong>Status:</strong> Generating sitemap...
        </div>
      </div>
    );
  }

  if (!result) {
    return (
      <div style={{ 
        fontFamily: 'Arial, sans-serif', 
        maxWidth: '800px', 
        margin: '50px auto', 
        padding: '20px' 
      }}>
        <h1>Sitemap Generator</h1>
        <div style={{ 
          padding: '15px', 
          backgroundColor: '#f8d7da', 
          border: '1px solid #f5c6cb', 
          borderRadius: '4px' 
        }}>
          <strong>Status:</strong> Failed to generate sitemap
        </div>
      </div>
    );
  }

  const downloadSitemap = () => {
    if (!result?.sitemap_xml) return;
    
    const blob = new Blob([result.sitemap_xml], { type: 'application/xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sitemap.xml';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const copyToClipboard = () => {
    if (!result?.sitemap_xml) return;
    
    navigator.clipboard.writeText(result.sitemap_xml).then(() => {
      alert('Sitemap XML copied to clipboard!');
    });
  };

  return (
    <div style={{ 
      fontFamily: 'Arial, sans-serif', 
      maxWidth: '800px', 
      margin: '50px auto', 
      padding: '20px',
      backgroundColor: '#f5f5f5',
      borderRadius: '8px'
    }}>
      <h1>Dynamic Sitemap Generator</h1>
      
      <div style={{ 
        padding: '15px', 
        marginBottom: '20px',
        backgroundColor: result.status === 'success' ? '#d4edda' : '#f8d7da',
        border: `1px solid ${result.status === 'success' ? '#c3e6cb' : '#f5c6cb'}`,
        borderRadius: '4px'
      }}>
        <strong>Status:</strong> {result.status}<br/>
        <strong>Message:</strong> {result.message}
      </div>

      {result.status === 'success' && (
        <div>
          <h3>Generated Sitemap Preview (first 1000 chars):</h3>
          <pre style={{ 
            backgroundColor: '#f8f9fa', 
            padding: '15px', 
            borderRadius: '4px',
            overflow: 'auto',
            fontSize: '12px'
          }}>
            {result.sitemap_xml?.substring(0, 1000)}...
          </pre>
          
          <div style={{ marginTop: '20px' }}>
            <button 
              onClick={downloadSitemap}
              style={{ 
                background: '#007bff', 
                color: 'white', 
                padding: '10px 20px', 
                border: 'none', 
                borderRadius: '4px', 
                cursor: 'pointer', 
                margin: '5px' 
              }}
            >
              Download Sitemap
            </button>
            <button 
              onClick={copyToClipboard}
              style={{ 
                background: '#28a745', 
                color: 'white', 
                padding: '10px 20px', 
                border: 'none', 
                borderRadius: '4px', 
                cursor: 'pointer', 
                margin: '5px' 
              }}
            >
              Copy XML
            </button>
          </div>
        </div>
      )}

      <div style={{ marginTop: '30px', fontSize: '14px', color: '#666' }}>
        <h3>API Usage:</h3>
        <p><strong>For JSON response:</strong> Add <code>?format=json</code> or <code>?api=true</code> to the URL</p>
        <p><strong>Current URL:</strong> <code>{window.location.href}</code></p>
        <p><strong>JSON API URL:</strong> <code>{window.location.href}?format=json</code></p>
        
        <h4>N8N Integration:</h4>
        <ul>
          <li>Method: GET</li>
          <li>URL: {window.location.href}?format=json</li>
          <li>Expected response: JSON with status, message, timestamp, sitemap_xml</li>
        </ul>
      </div>
    </div>
  );
};

export default SitemapGenerator; 