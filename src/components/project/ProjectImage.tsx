import React, { useState, useEffect } from 'react';
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

interface ProjectImageProps {
  project: {
    id: number;
    title: string;
    images?: string[];
    imageAlt?: string[];
    location?: string;
  };
  imageSrc: string;
  imageAlt: string;
}

const ProjectImage = ({ project, imageSrc, imageAlt }: ProjectImageProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const [currentImageSrc, setCurrentImageSrc] = useState(imageSrc);

  // Reset image states when imageSrc changes
  useEffect(() => {
    setImageLoaded(false);
    setImageError(false);
    setRetryCount(0);
    setCurrentImageSrc(imageSrc);
  }, [imageSrc]);

  // Check if the image is a Supabase storage URL or public URL
  const isSupabaseStorageUrl = (url: string): boolean => {
    return url.startsWith('https://alwjzubhrjubtvwenyqt.supabase.co/storage/v1/object/public/');
  };

  // Project-specific fallback images
  const getProjectFallback = () => {
    // Cheval Place project (id: 15)
    if (project.id === 15) {
      return 'https://alwjzubhrjubtvwenyqt.supabase.co/storage/v1/object/public/alemaraprojectimages/Cheval%20Place/alemara-cheval-place.jpg';
    }
    
    // Victoria Park Project (id: 2)
    if (project.id === 2) {
      return '/lovable-uploads/f7869f8f-7c74-4b3b-927d-b68dcbd70016.png';
    }
    
    // Warrington Crescent (id: 13)
    if (project.id === 13) {
      return '/lovable-uploads/5fee22ca-8fc0-40ec-afa2-94dc5b75eb98.png';
    }
    
    return null;
  };

  // Specific fallback images for Cheval Place project (id: 15)
  const chevalPlaceFallbacks = [
    'https://alwjzubhrjubtvwenyqt.supabase.co/storage/v1/object/public/alemaraprojectimages/Cheval%20Place/alemara-cheval-place.jpg', // Main image
    'https://alwjzubhrjubtvwenyqt.supabase.co/storage/v1/object/public/alemaraprojectimages/Cheval%20Place/entrance.jpg',
    'https://alwjzubhrjubtvwenyqt.supabase.co/storage/v1/object/public/alemaraprojectimages/Cheval%20Place/kitchen.jpg',
    'https://alwjzubhrjubtvwenyqt.supabase.co/storage/v1/object/public/alemaraprojectimages/Cheval%20Place/stairs.jpg',
    'https://alwjzubhrjubtvwenyqt.supabase.co/storage/v1/object/public/alemaraprojectimages/Cheval%20Place/bathroom.jpg'
  ];

  // Fallback images from unsplash (available in placeholders)
  const fallbackImages = [
    'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=800&h=500',
    'https://images.unsplash.com/photo-1527576539890-dfa815648363?auto=format&fit=crop&q=80&w=800&h=500',
    'https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?auto=format&fit=crop&q=80&w=800&h=500'
  ];

  // Try to load the image, with fallbacks and retries
  const handleImageError = async () => {
    console.error('Image failed to load:', currentImageSrc);
    
    // If it's a Supabase URL that failed, try to get a signed URL
    if (isSupabaseStorageUrl(currentImageSrc) && retryCount === 0) {
      try {
        // Extract path from URL
        const path = currentImageSrc.split('public/website-images/')[1];
        if (path) {
          const { data, error } = await supabase.storage
            .from('website-images')
            .createSignedUrl(path, 60); // 60 seconds expiry
            
          if (data?.signedUrl) {
            setCurrentImageSrc(data.signedUrl);
            setRetryCount(prev => prev + 1);
            setImageError(false);
            setImageLoaded(false);
            return;
          }
        }
      } catch (err) {
        console.error('Error creating signed URL:', err);
      }
    }
    
    // Try project-specific fallback first
    const projectFallback = getProjectFallback();
    if (projectFallback && retryCount === 0) {
      setCurrentImageSrc(projectFallback);
      setRetryCount(prev => prev + 1);
      setImageError(false);
      setImageLoaded(false);
      return;
    }
    
    if (retryCount < 2) {
      // Try again with the same image (could be a temporary network issue)
      setTimeout(() => {
        setRetryCount(prev => prev + 1);
        // Force image reload by adding a cache-busting param
        setCurrentImageSrc(`${imageSrc}?retry=${retryCount + 1}`);
        setImageError(false);
        setImageLoaded(false);
      }, 1000);
    } else if (project.id === 15 && retryCount < chevalPlaceFallbacks.length + 2) {
      // For Cheval Place project, use the newly uploaded images as fallbacks
      const fallbackIndex = retryCount - 2;
      setCurrentImageSrc(chevalPlaceFallbacks[fallbackIndex]);
      setRetryCount(prev => prev + 1);
      setImageError(false);
      setImageLoaded(false);
      toast.info("Using alternative image");
    } else if (retryCount < 5 + chevalPlaceFallbacks.length) {
      // Try one of the fallback images
      const fallbackIndex = (retryCount - chevalPlaceFallbacks.length - 2) % fallbackImages.length;
      setCurrentImageSrc(fallbackImages[fallbackIndex]);
      setRetryCount(prev => prev + 1);
      setImageError(false);
      setImageLoaded(false);
      toast.info("Using fallback image");
    } else {
      // Give up and show error
      setImageLoaded(true);
      setImageError(true);
      toast.error("Could not load project image");
    }
  };

  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg bg-gray-100 min-h-[400px] flex items-center justify-center">
      {!imageLoaded && !imageError && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-gray-200 border-t-[#ea384c] rounded-full animate-spin"></div>
        </div>
      )}
      
      {imageError ? (
        <div className="flex flex-col items-center justify-center p-6 text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p>Image could not be loaded</p>
        </div>
      ) : (
        <img 
          key={`${currentImageSrc}-${retryCount}`} // Force re-render on retry
          src={currentImageSrc}
          alt={imageAlt} 
          className={`w-full h-auto rounded-lg shadow-lg transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          width="800"
          height="600"
          loading="eager"
          onLoad={() => {
            setImageLoaded(true);
            setImageError(false);
          }}
          onError={handleImageError}
        />
      )}
    </div>
  );
};

export default ProjectImage;
