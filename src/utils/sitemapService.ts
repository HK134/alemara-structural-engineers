/**
 * Service to handle sitemap regeneration
 */

const WEBHOOK_URL = process.env.VITE_SITEMAP_WEBHOOK_URL || 'http://localhost:3001/regenerate-sitemap';

export const regenerateSitemap = async (): Promise<boolean> => {
  try {
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      const result = await response.json();
      console.log('Sitemap regenerated:', result.message);
      return true;
    } else {
      console.error('Failed to regenerate sitemap:', response.statusText);
      return false;
    }
  } catch (error) {
    console.error('Error triggering sitemap regeneration:', error);
    return false;
  }
};

/**
 * Trigger sitemap regeneration after blog operations
 */
export const triggerSitemapUpdate = async (operation: 'create' | 'update' | 'delete') => {
  console.log(`Blog ${operation} detected, triggering sitemap update...`);
  await regenerateSitemap();
}; 