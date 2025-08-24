import React, { useEffect } from 'react';
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

const SitemapXML = () => {
  useEffect(() => {
    const generateAndReturnXML = async () => {
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

        // Replace entire page with XML content
        document.documentElement.innerHTML = `<pre style="margin: 0; padding: 0; font-family: monospace; white-space: pre-wrap;">${xml}</pre>`;
        
        // Set content type to XML
        const metaContentType = document.createElement('meta');
        metaContentType.setAttribute('http-equiv', 'Content-Type');
        metaContentType.setAttribute('content', 'application/xml; charset=utf-8');
        document.head.appendChild(metaContentType);
        
        // Update title
        document.title = 'Generated Sitemap XML';

      } catch (error) {
        console.error('Error generating sitemap:', error);
        document.documentElement.innerHTML = `<pre>Error generating sitemap: ${error instanceof Error ? error.message : 'Unknown error'}</pre>`;
      }
    };

    generateAndReturnXML();
  }, []);

  // This component will be replaced by the XML content
  return (
    <div style={{ 
      fontFamily: 'monospace', 
      padding: '20px',
      backgroundColor: '#f8f9fa'
    }}>
      <h1>🔄 Generating Sitemap XML...</h1>
      <p>Please wait while we fetch the latest blog posts and generate your sitemap.</p>
      <p><em>This page will be replaced with raw XML content suitable for N8N automation.</em></p>
    </div>
  );
};

export default SitemapXML; 