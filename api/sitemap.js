import { createClient } from '@supabase/supabase-js';

// Supabase client
const SUPABASE_URL = 'https://alwjzubhrjubtvwenyqt.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFsd2p6dWJocmp1YnR2d2VueXF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI4NjA1NTQsImV4cCI6MjA1ODQzNjU1NH0.QQxZvC1par1hFfudWIoLuqpA8Ji50-vAZA4QHWMayds';
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const SITE_URL = 'https://alemara.co.uk';

// Helper functions
const iso = (d) => new Date(d).toISOString().slice(0, 10);
const createSlug = (title) => title.toLowerCase().trim().replace(/&/g, ' and ').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

const urlEl = ({ loc, lastmod, changefreq = 'monthly', priority = '0.7' }) => {
  return `  <url>
    <loc>${loc}</loc>
    ${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
};

async function getBlogPosts() {
  try {
    const { data: posts, error } = await supabase
      .from('blog_posts')
      .select('slug, updated_at, date_published')
      .eq('status', 'published')
      .order('date_published', { ascending: false });

    if (error) throw error;
    return posts || [];
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

// Static routes
const staticRoutes = [
  '/',
  '/about-us',
  '/services',
  '/services/residential',
  '/services/residential/loft-conversions',
  '/services/residential/extensions',
  '/services/structural-surveys',
  '/services/commercial',
  '/services/civil-engineering',
  '/services/basement-extensions',
  '/services/subsidence-crack-surveys',
  '/services/new-builds',
  '/areas/islington-highbury',
  '/areas/camden-kentish-town',
  '/areas/hackney-shoreditch',
  '/areas/kensington-chelsea',
  '/areas/westminster-mayfair',
  '/areas/london-boroughs',
  '/portfolio',
  '/faq',
  '/contact',
  '/privacy-policy',
  '/terms',
  '/blog',
];

// Portfolio projects with slugs
const portfolioProjects = [
  'gloucester-terrace-classic-london-terrace',
  'carlton-road-victorian-conversion',
  'gloucester-gardens-heritage-renovation',
  'hanningfield-timber-structure',
  'warrington-crescent-maida-vale',
  'gloucester-gardens-2-period-property-restoration',
  'mollands-riba-feature-project',
  'victoria-park-project-east-london',
  'riverbank-plaza-hotel-structural-upgrade'
];

export default async function handler(req, res) {
  try {
    // Set proper headers for XML
    res.setHeader('Content-Type', 'application/xml; charset=utf-8');
    res.setHeader('Cache-Control', 'no-cache');
    
    const urls = [];
    const today = iso(new Date());

    // Add static pages
    for (const route of staticRoutes) {
      urls.push(urlEl({ 
        loc: `${SITE_URL}${route}`, 
        lastmod: today, 
        priority: route === '/' ? '1.0' : '0.8' 
      }));
    }

    // Add portfolio pages
    for (const slug of portfolioProjects) {
      urls.push(urlEl({ 
        loc: `${SITE_URL}/portfolio/${slug}`, 
        lastmod: today, 
        priority: '0.7' 
      }));
    }

    // Add blog posts
    const blogPosts = await getBlogPosts();
    for (const post of blogPosts) {
      urls.push(urlEl({ 
        loc: `${SITE_URL}/blog/${post.slug}`, 
        lastmod: iso(post.updated_at || post.date_published || new Date()), 
        priority: '0.6', 
        changefreq: 'weekly' 
      }));
    }

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;

    res.status(200).send(xml);
  } catch (error) {
    console.error('Error generating sitemap:', error);
    res.status(500).send(`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${SITE_URL}</loc>
    <lastmod>${iso(new Date())}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`);
  }
} 