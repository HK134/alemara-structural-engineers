
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";

interface ProjectInfoProps {
  project: {
    id: number;
    title: string;
    type: string;
    image: string;
    description: string;
    completion: string;
    architect?: string;
    location?: string;
    fullDescription?: string;
    images?: string[];
    imageAlt?: string[];
  };
}

const ProjectInfo = ({ project }: ProjectInfoProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [retryCount, setRetryCount] = useState(0);
  const [imageSrc, setImageSrc] = useState('');
  
  // Get the first image from the project.images array if available, otherwise use the main image
  const displayImage = project.images && project.images.length > 0 ? project.images[0] : project.image;
  
  // Get alt text for better SEO
  const imageAlt = project.imageAlt && project.imageAlt.length > 0 
    ? project.imageAlt[0] 
    : `${project.title} - ${project.type} structural engineering project in ${project.location || 'London'}`;
  
  // Reset image states when displayImage changes
  useEffect(() => {
    setImageLoaded(false);
    setImageError(false);
    setRetryCount(0);
    setImageSrc(displayImage);
  }, [displayImage]);

  // Project-specific fallback images
  const getProjectFallback = () => {
    // Cheval Place project (id: 15)
    if (project.id === 15) {
      return '/lovable-uploads/fcdb272d-9ef4-44ba-9409-ae7576efe782.png';
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
    '/lovable-uploads/fcdb272d-9ef4-44ba-9409-ae7576efe782.png',
    '/lovable-uploads/f584a768-55ab-44d7-8634-9a6e94adda2b.png',
    '/lovable-uploads/cd25898b-c49e-4558-b60b-61a6fb9174df.png'
  ];

  // Fallback images from unsplash (available in placeholders)
  const fallbackImages = [
    'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=800&h=500',
    'https://images.unsplash.com/photo-1527576539890-dfa815648363?auto=format&fit=crop&q=80&w=800&h=500',
    'https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?auto=format&fit=crop&q=80&w=800&h=500'
  ];

  // Try to load the image, with fallbacks and retries
  const handleImageError = () => {
    console.error('Image failed to load:', imageSrc);
    
    // Try project-specific fallback first
    const projectFallback = getProjectFallback();
    if (projectFallback && retryCount === 0) {
      setImageSrc(projectFallback);
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
        setImageSrc(`${displayImage}?retry=${retryCount + 1}`);
        setImageError(false);
        setImageLoaded(false);
      }, 1000);
    } else if (project.id === 15 && retryCount < chevalPlaceFallbacks.length + 2) {
      // For Cheval Place project, use the newly uploaded images as fallbacks
      const fallbackIndex = retryCount - 2;
      setImageSrc(chevalPlaceFallbacks[fallbackIndex]);
      setRetryCount(prev => prev + 1);
      setImageError(false);
      setImageLoaded(false);
      toast.info("Using alternative image");
    } else if (retryCount < 5 + chevalPlaceFallbacks.length) {
      // Try one of the fallback images
      const fallbackIndex = (retryCount - chevalPlaceFallbacks.length - 2) % fallbackImages.length;
      setImageSrc(fallbackImages[fallbackIndex]);
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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      {/* Main project image with loading state */}
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
            key={`${imageSrc}-${retryCount}`} // Force re-render on retry
            src={imageSrc}
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
      
      {/* Project info */}
      <div>
        <div className="flex items-center gap-4 mb-4">
          <span className="inline-block bg-[#ea384c]/10 text-[#ea384c] text-sm font-semibold px-3 py-1 rounded-full">
            {project.type.charAt(0).toUpperCase() + project.type.slice(1)}
          </span>
          <span className="text-sm text-gray-500">{project.completion}</span>
        </div>
        
        <h3 className="text-2xl md:text-3xl font-bold mb-4">{project.title}</h3>
        <p className="text-lg mb-6">{project.description}</p>
        
        {project.architect && (
          <div className="mb-2">
            <span className="font-semibold">Architect:</span> {project.architect}
          </div>
        )}
        
        {project.location && (
          <div className="mb-6">
            <span className="font-semibold">Location:</span> {project.location}
          </div>
        )}
      </div>

      {project.fullDescription && (
        <div className="col-span-1 lg:col-span-2">
          <Card>
            <CardContent className="p-6">
              <h4 className="text-xl font-semibold mb-4">Project Overview</h4>
              <p className="text-gray-700 whitespace-pre-line">
                {project.fullDescription}
              </p>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default ProjectInfo;
