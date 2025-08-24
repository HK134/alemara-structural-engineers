-- Update blogs table to link to storage bucket
ALTER TABLE public.blogs 
DROP COLUMN image_url;

-- Add image_path column to reference the file path in storage
ALTER TABLE public.blogs 
ADD COLUMN image_path text;

-- Add comment to clarify the image_path usage
COMMENT ON COLUMN public.blogs.image_path IS 'File path in alemarablogimages bucket';

-- Update sample data with proper image paths
UPDATE public.blogs 
SET image_path = 'structural-engineering-guide.jpg'
WHERE title = 'Complete Guide to Structural Engineering Services';

UPDATE public.blogs 
SET image_path = 'basement-extension-tips.jpg' 
WHERE title = '10 Essential Tips for Successful Basement Extensions';

UPDATE public.blogs 
SET image_path = 'building-regulations-2024.jpg'
WHERE title = 'Understanding Building Regulations in 2024';