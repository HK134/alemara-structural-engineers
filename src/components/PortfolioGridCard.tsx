
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from "sonner";

interface ProjectProps {
  project: {
    id: number;
    title: string;
    type: string;
    image: string;
    description: string;
    completion: string;
    location?: string;
  };
}

const PortfolioGridCard = ({ project }: ProjectProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const typeColor = {
    residential: 'text-yellow-400',
    commercial: 'text-yellow-400',
    civil: 'text-yellow-400'
  }[project.type] || 'text-yellow-400';

  // Extract the location name or use a placeholder
  const locationName = project.location?.split(',')[0] || 'London';
  
  // Create a subtitle for the card based on location
  const locationSubtitle = project.location || 'London, UK';

  // Handle image errors with improved fallbacks
  const handleImageError = () => {
    console.error(`Failed to load image for project ${project.id}:`, project.image);
    setImageError(true);
    
    // Special handling for specific projects
    const target = document.getElementById(`project-img-${project.id}`) as HTMLImageElement;
    if (!target) return;
    
    // Cheval Place project (id: 15)
    if (project.id === 15) {
      target.src = '/lovable-uploads/fcdb272d-9ef4-44ba-9409-ae7576efe782.png';
      setImageError(false);
      return;
    }
    
    // Victoria Park Project (id: 2)
    if (project.id === 2) {
      target.src = '/lovable-uploads/f7869f8f-7c74-4b3b-927d-b68dcbd70016.png';
      setImageError(false);
      return;
    }
    
    // Warrington Crescent (id: 13)
    if (project.id === 13) {
      target.src = '/lovable-uploads/5fee22ca-8fc0-40ec-afa2-94dc5b75eb98.png';
      setImageError(false);
      return;
    }
    
    // Use a placeholder for other projects
    target.src = '/placeholder.svg';
    toast.error(`Could not load image for ${project.title}`);
  };

  return (
    <Link 
      to={`/portfolio/${project.id}`}
      className="block group relative overflow-hidden aspect-square rounded-md transition-all hover:shadow-xl"
    >
      {/* Background Image with gradient overlay */}
      <div className="absolute inset-0 bg-gray-900">
        {/* Show placeholder while image is loading or if there's an error */}
        {(!imageLoaded || imageError) && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-800">
            <div className="w-8 h-8 border-4 border-gray-700 border-t-gray-400 rounded-full animate-spin"></div>
          </div>
        )}
        <img 
          id={`project-img-${project.id}`}
          src={project.image} 
          alt={`${project.title} - ${project.type} structural engineering project`}
          className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 group-hover:brightness-75 ${imageLoaded && !imageError ? 'opacity-100' : 'opacity-0'}`}
          loading="lazy"
          width="600"
          height="600"
          onLoad={() => setImageLoaded(true)}
          onError={handleImageError}
        />
        {/* Dark gradient overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
      </div>

      {/* Project details positioned on top of the image */}
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
        <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-wide mb-1">
          {locationName}
        </h2>
        <p className="text-sm text-gray-300 mb-2">
          {locationSubtitle}
        </p>
        <p className={`uppercase font-semibold ${typeColor}`}>
          {project.type}
        </p>
      </div>
    </Link>
  );
};

export default PortfolioGridCard;
