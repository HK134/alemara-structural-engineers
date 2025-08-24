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

const SitemapAPI = () => {
  const [status, setStatus] = useState<'generating' | 'success' | 'error'>('generating');
  const [message, setMessage] = useState('');
  const [sitemapContent, setSitemapContent] = useState('');

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

        setSitemapContent(xml);
        setStatus('success');
        setMessage(`Sitemap generated successfully with ${urls.length} URLs (${blogPosts?.length || 0} blog posts included)`);

        // Download the sitemap automatically
        const blob = new Blob([xml], { type: 'application/xml' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'sitemap.xml';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

      } catch (error) {
        console.error('Error generating sitemap:', error);
        setStatus('error');
        setMessage(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
      }
    };

    generateSitemap();
  }, []);

  // Return JSON response for API usage
  if (window.location.search.includes('format=json')) {
    return (
      <div style={{ fontFamily: 'monospace', whiteSpace: 'pre' }}>
        {JSON.stringify({
          status,
          message,
          timestamp: new Date().toISOString(),
          sitemap_length: sitemapContent.length
        }, null, 2)}
      </div>
    );
  }

  return (
    <div style={{ 
      fontFamily: 'Arial, sans-serif', 
      maxWidth: '800px', 
      margin: '50px auto', 
      padding: '20px',
      backgroundColor: '#f5f5f5',
      borderRadius: '8px'
    }}>
      <h1>Sitemap Generator API</h1>
      
      <div style={{ 
        padding: '15px', 
        marginBottom: '20px',
        backgroundColor: status === 'success' ? '#d4edda' : status === 'error' ? '#f8d7da' : '#fff3cd',
        border: `1px solid ${status === 'success' ? '#c3e6cb' : status === 'error' ? '#f5c6cb' : '#ffeaa7'}`,
        borderRadius: '4px'
      }}>
        <strong>Status:</strong> {status}<br/>
        <strong>Message:</strong> {message}
      </div>

      {status === 'success' && (
        <div>
          <h3>Generated Sitemap Preview (first 1000 chars):</h3>
          <pre style={{ 
            backgroundColor: '#f8f9fa', 
            padding: '15px', 
            borderRadius: '4px',
            overflow: 'auto',
            fontSize: '12px'
          }}>
            {sitemapContent.substring(0, 1000)}...
          </pre>
          <p><em>Full sitemap has been downloaded automatically as sitemap.xml</em></p>
        </div>
      )}

      <div style={{ marginTop: '30px', fontSize: '14px', color: '#666' }}>
        <h3>API Usage:</h3>
        <p>• Visit this URL to regenerate sitemap: <code>{window.location.href}</code></p>
        <p>• For JSON response: <code>{window.location.href}?format=json</code></p>
        <p>• Use with n8n, cron jobs, or webhook services</p>
        <p>• Sitemap will be automatically downloaded when accessed</p>
      </div>
    </div>
  );
};

export default SitemapAPI; 