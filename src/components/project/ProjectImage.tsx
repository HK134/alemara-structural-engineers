
import React, { useState, useEffect } from 'react';

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
  const [currentImageSrc, setCurrentImageSrc] = useState(imageSrc);

  // Reset image states when imageSrc changes
  useEffect(() => {
    setImageLoaded(false);
    setImageError(false);
    setCurrentImageSrc(imageSrc);
  }, [imageSrc]);

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

  // Handle image loading errors
  const handleImageError = () => {
    console.error('Image failed to load:', currentImageSrc);
    
    // Try project-specific fallback first
    const projectFallback = getProjectFallback();
    if (projectFallback) {
      setCurrentImageSrc(projectFallback);
      setImageError(false);
      return;
    }
    
    // Set error state if no fallbacks work
    setImageError(true);
  };

  return (
    <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-4/3">
      {!imageLoaded && !imageError && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-6 h-6 border-2 border-gray-200 border-t-[#ea384c] rounded-full animate-spin"></div>
        </div>
      )}
      
      {imageError ? (
        <div className="flex flex-col items-center justify-center p-6 text-gray-400 h-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <p className="text-sm">Image not available</p>
        </div>
      ) : (
        <img 
          src={currentImageSrc}
          alt={imageAlt} 
          className={`w-full h-full object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          width="600"
          height="450"
          loading="eager"
          onLoad={() => setImageLoaded(true)}
          onError={handleImageError}
        />
      )}
    </div>
  );
};

export default ProjectImage;
