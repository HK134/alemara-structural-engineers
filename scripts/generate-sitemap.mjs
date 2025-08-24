import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createClient } from '@supabase/supabase-js';

// Config
const SITE_URL = 'https://alemara.co.uk';
const OUTPUT_PATH = path.resolve(process.cwd(), 'public', 'sitemap.xml');

// Supabase client (reuse existing env if available, else inline from client.ts)
const SUPABASE_URL = process.env.SUPABASE_URL || 'https://alwjzubhrjubtvwenyqt.supabase.co';
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFsd2p6dWJocmp1YnR2d2VueXF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI4NjA1NTQsImV4cCI6MjA1ODQzNjU1NH0.QQxZvC1par1hFfudWIoLuqpA8Ji50-vAZA4QHWMayds';
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Helper
const iso = (d) => new Date(d).toISOString().slice(0, 10);
const urlEl = ({ loc, lastmod, changefreq = 'monthly', priority = '0.7', images = [] }) => {
  const imageXml = images.map(img => `
    <image:image>
      <image:loc>${img.loc}</image:loc>
      ${img.title ? `<image:title>${img.title}</image:title>` : ''}
      ${img.caption ? `<image:caption>${img.caption}</image:caption>` : ''}
    </image:image>`).join('');
  return `  <url>
    <loc>${loc}</loc>
    ${lastmod ? `<lastmod>${lastmod}</lastmod>` : ''}
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>${imageXml}
  </url>`;
};

const createSlug = (title) => title.toLowerCase().trim().replace(/&/g, ' and ').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

async function getPortfolioIds() {
  // Read TS data files and extract numeric IDs via regex
  const dataDir = path.resolve(process.cwd(), 'src', 'data', 'projects');
  const files = ['residential.ts', 'commercial.ts', 'civil.ts'];
  const idSet = new Set();
  for (const f of files) {
    const filePath = path.join(dataDir, f);
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const regex = /id:\s*(\d+)/g;
      let match;
      while ((match = regex.exec(content)) !== null) {
        idSet.add(Number(match[1]));
      }
    } catch (e) {
      console.warn('Failed to read', f, e?.message);
    }
  }
  return Array.from(idSet);
}

async function getProjectSlugs() {
  const dataDir = path.resolve(process.cwd(), 'src', 'data', 'projects');
  const files = ['residential.ts', 'commercial.ts', 'civil.ts'];
  const slugs = [];
  for (const f of files) {
    const filePath = path.join(dataDir, f);
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const titleRegex = /title:\s*'([^']+)'/g;
      let m;
      while ((m = titleRegex.exec(content)) !== null) {
        const title = m[1];
        const slug = createSlug(title);
        slugs.push(slug);
      }
    } catch (e) {
      console.warn('Failed to parse titles from', f, e?.message);
    }
  }
  return slugs;
}

async function getBlogPosts() {
  // Expect a blogs table with slug, updated_at, published
  const { data, error } = await supabase
    .from('blogs')
    .select('slug, updated_at, date_published, published')
    .eq('published', true)
    .order('date_published', { ascending: false });
  if (error) {
    console.warn('Supabase blogs fetch error (will proceed without blogs):', error.message);
    return [];
  }
  return (data || []).map(row => ({
    slug: row.slug,
    lastmod: iso(row.updated_at || row.date_published || new Date()),
  }));
}

async function main() {
  const staticRoutes = [
    '/',
    '/about-us',
    '/services',
    '/services/residential',
    '/services/loft-conversions',
    '/services/residential/loft-conversions',
    '/services/extensions',
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

  const [portfolioIds, blogPosts, projectSlugs] = await Promise.all([
    getPortfolioIds().catch(() => []),
    getBlogPosts().catch(() => []),
    getProjectSlugs().catch(() => []),
  ]);

  const urls = [];

  // Static
  const today = iso(new Date());
  for (const route of staticRoutes) {
    urls.push(urlEl({ loc: `${SITE_URL}${route}`, lastmod: today, priority: route === '/' ? '1.0' : '0.8' }));
  }

  // Portfolio detail pages (prefer slug-based; fallback to IDs if empty)
  if (projectSlugs.length > 0) {
    for (const slug of projectSlugs) {
      urls.push(urlEl({ loc: `${SITE_URL}/portfolio/${slug}`, lastmod: today, priority: '0.7' }));
    }
  } else {
    for (const id of portfolioIds) {
      urls.push(urlEl({ loc: `${SITE_URL}/portfolio/${id}`, lastmod: today, priority: '0.7' }));
    }
  }

  // Blog posts
  for (const post of blogPosts) {
    urls.push(urlEl({ loc: `${SITE_URL}/blog/${post.slug}`, lastmod: post.lastmod, priority: '0.6', changefreq: 'weekly' }));
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls.join('\n')}
</urlset>
`;

  fs.writeFileSync(OUTPUT_PATH, xml);
  console.log(`Sitemap generated: ${OUTPUT_PATH}`);
}

main().catch(err => {
  console.error('Failed to generate sitemap:', err);
  process.exit(1);
}); 