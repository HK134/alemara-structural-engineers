#!/usr/bin/env node
import fs from 'fs';
import path from 'path';
import { createClient } from '@supabase/supabase-js';

// This script can be triggered by a webhook when new content is added
// Or run as part of the build process

const SITE_URL = 'https://alemara.co.uk';
const SITEMAP_PATH = path.resolve(process.cwd(), 'public', 'sitemap.xml');

// Supabase client
const SUPABASE_URL = 'https://alwjzubhrjubtvwenyqt.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFsd2p6dWJocmp1YnR2d2VueXF0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI4NjA1NTQsImV4cCI6MjA1ODQzNjU1NH0.QQxZvC1par1hFfudWIoLuqpA8Ji50-vAZA4QHWMayds';
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Monitor for changes and auto-update
export async function autoUpdateSitemap() {
  console.log('🔄 Auto-updating sitemap...');
  
  // Import the existing generate-sitemap logic
  const { default: generateSitemap } = await import('./generate-sitemap.mjs');
  
  // Watch for changes in blog posts
  const blogSubscription = supabase
    .channel('blog-changes')
    .on('postgres_changes', {
      event: '*',
      schema: 'public',
      table: 'blog_posts'
    }, async (payload) => {
      console.log('📝 Blog post change detected:', payload.eventType);
      await generateSitemap();
      console.log('✅ Sitemap updated with new blog post');
      
      // Ping Google about the update
      await pingGoogle();
    })
    .subscribe();

  return blogSubscription;
}

// Ping Google and Bing when sitemap updates
async function pingGoogle() {
  const sitemapUrl = encodeURIComponent(`${SITE_URL}/sitemap.xml`);
  
  try {
    // Ping Google
    await fetch(`https://www.google.com/ping?sitemap=${sitemapUrl}`);
    console.log('✅ Google notified of sitemap update');
    
    // Ping Bing
    await fetch(`https://www.bing.com/ping?sitemap=${sitemapUrl}`);
    console.log('✅ Bing notified of sitemap update');
  } catch (error) {
    console.error('❌ Error pinging search engines:', error);
  }
}

// Run if called directly
if (process.argv[1] === new URL(import.meta.url).pathname) {
  autoUpdateSitemap().then(() => {
    console.log('🚀 Auto-sitemap updater is running...');
  });
}

export default autoUpdateSitemap; 