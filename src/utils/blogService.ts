import { supabase } from "@/integrations/supabase/client";

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content: string;
  tags: string[];
  image_path: string | null;
  author: string;
  date_published: string;
  updated_at: string;
  published: boolean;
  featured: boolean;
  category: string;
  meta_description: string | null;
  read_time: number;
}

export interface BlogFilters {
  category?: string;
  tags?: string[];
  search?: string;
  featured?: boolean;
}

export interface PaginationParams {
  page: number;
  limit: number;
}

export interface BlogResponse {
  data: BlogPost[];
  count: number;
  totalPages: number;
  currentPage: number;
}

/**
 * Fetch blog posts with filtering and pagination
 */
export const fetchBlogPosts = async (
  filters: BlogFilters = {},
  pagination: PaginationParams = { page: 1, limit: 9 }
): Promise<BlogResponse> => {
  try {
    let query = supabase
      .from('blogs')
      .select('*', { count: 'exact' })
      .eq('published', true)
      .order('date_published', { ascending: false });

    // Apply filters
    if (filters.category && filters.category !== 'All') {
      query = query.eq('category', filters.category);
    }

    if (filters.featured) {
      query = query.eq('featured', true);
    }

    if (filters.search) {
      query = query.or(
        `title.ilike.%${filters.search}%,excerpt.ilike.%${filters.search}%,content.ilike.%${filters.search}%`
      );
    }

    if (filters.tags && filters.tags.length > 0) {
      query = query.overlaps('tags', filters.tags);
    }

    // Apply pagination
    const from = (pagination.page - 1) * pagination.limit;
    const to = from + pagination.limit - 1;
    query = query.range(from, to);

    const { data, error, count } = await query;

    if (error) {
      throw error;
    }

    const totalPages = Math.ceil((count || 0) / pagination.limit);

    return {
      data: data || [],
      count: count || 0,
      totalPages,
      currentPage: pagination.page
    };
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    throw error;
  }
};

/**
 * Fetch a single blog post by slug
 */
export const fetchBlogPostBySlug = async (slug: string): Promise<BlogPost | null> => {
  try {
    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .eq('slug', slug)
      .eq('published', true)
      .maybeSingle();

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    throw error;
  }
};

/**
 * Fetch featured blog posts
 */
export const fetchFeaturedBlogPosts = async (limit: number = 3): Promise<BlogPost[]> => {
  try {
    const { data, error } = await supabase
      .from('blogs')
      .select('*')
      .eq('published', true)
      .eq('featured', true)
      .order('date_published', { ascending: false })
      .limit(limit);

    if (error) {
      throw error;
    }

    return data || [];
  } catch (error) {
    console.error('Error fetching featured blog posts:', error);
    throw error;
  }
};

/**
 * Fetch all unique categories
 */
export const fetchBlogCategories = async (): Promise<string[]> => {
  try {
    const { data, error } = await supabase
      .from('blogs')
      .select('category')
      .eq('published', true);

    if (error) {
      throw error;
    }

    const categories = Array.from(new Set(data?.map(post => post.category) || []));
    return ['All', ...categories.sort()];
  } catch (error) {
    console.error('Error fetching blog categories:', error);
    return ['All'];
  }
};

/**
 * Fetch all unique tags
 */
export const fetchBlogTags = async (): Promise<string[]> => {
  try {
    const { data, error } = await supabase
      .from('blogs')
      .select('tags')
      .eq('published', true);

    if (error) {
      throw error;
    }

    const allTags = new Set<string>();
    data?.forEach(post => {
      post.tags?.forEach((tag: string) => allTags.add(tag));
    });

    return Array.from(allTags).sort();
  } catch (error) {
    console.error('Error fetching blog tags:', error);
    return [];
  }
};

/**
 * Get public URL for blog image from storage
 */
export const getBlogImageUrl = (imagePath: string | null): string | null => {
  if (!imagePath) return null;
  
  const { data } = supabase.storage
    .from('alemarablogimages')
    .getPublicUrl(imagePath);
  
  return data.publicUrl;
};

/**
 * Format date for display
 */
export const formatBlogDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};