
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ExternalLink, Maximize2 } from 'lucide-react';
import ProjectModal from './project/ProjectModal';
import { toast } from "sonner";

interface ProjectProps {
  project: {
    id: number;
    title: string;
    type: string;
    image: string;
    description: string;
    completion: string;
    featured?: boolean;
    architect?: string;
    location?: string;
    images?: string[];
    imageAlt?: string[];
    fullDescription?: string;
    useModal?: boolean;
  };
}

const PortfolioCard = ({
  project
}: ProjectProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  // Get the first image from the project.images array if available, otherwise use the main image
  const displayImage = project.images && project.images.length > 0 ? project.images[0] : project.image;
  
  // Get alt text for better accessibility and SEO
  const imageAlt = project.imageAlt && project.imageAlt.length > 0 
    ? project.imageAlt[0] 
    : `${project.title} - ${project.type} structural engineering project`;

  // Only show architect if it's Daniel Rees or Xami
  const showArchitect = project.architect && 
    (project.architect.toLowerCase().includes('daniel rees') || 
     project.architect.toLowerCase().includes('xami'));

  const handleViewDetails = (e: React.MouseEvent) => {
    if (project.useModal) {
      e.preventDefault();
      setIsModalOpen(true);
    }
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    console.error(`Failed to load image for project ${project.id}:`, displayImage);
    setImageLoaded(true);
    setImageError(true);
    
    const target = e.target as HTMLImageElement;
    
    // Special handling for Cheval Place project (id: 15)
    if (project.id === 15) {
      target.src = 'https://alwjzubhrjubtvwenyqt.supabase.co/storage/v1/object/public/alemaraprojectimages/Cheval%20Place/alemara-cheval-place.jpg';
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
    
    // For other projects, use a placeholder
    target.src = '/placeholder.svg';
  };

  return (
    <>
      <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all hover:shadow-lg hover:-translate-y-1">
        <div className="h-56 overflow-hidden relative bg-gray-100">
          {/* Show placeholder while image is loading */}
          {!imageLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-8 h-8 border-4 border-gray-200 border-t-[#ea384c] rounded-full animate-spin"></div>
            </div>
          )}
          <img 
            src={displayImage} 
            alt={imageAlt} 
            className={`w-full h-full object-cover transition-opacity duration-300 ${imageLoaded && !imageError ? 'opacity-100' : 'opacity-0'}`}
            loading="lazy"
            width="600"
            height="400"
            onLoad={() => setImageLoaded(true)}
            onError={handleImageError}
          />
          {imageError && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
              <div className="text-gray-400 flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            </div>
          )}
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="inline-block bg-[#ea384c]/10 text-[#ea384c] text-xs font-semibold px-2 py-1 rounded-full">
              {project.type.charAt(0).toUpperCase() + project.type.slice(1)}
            </span>
            {showArchitect && (
              <span className="text-xs text-gray-500">Architect: {project.architect}</span>
            )}
          </div>
          <h3 className="text-xl font-semibold text-[#1A1F2C] mb-3">{project.title}</h3>
          <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
          
          {project.useModal ? (
            <Button 
              variant="outline" 
              size="sm" 
              className="text-[#1A1F2C] hover:bg-[#ea384c] hover:text-white flex items-center gap-2" 
              onClick={handleViewDetails}
              aria-label={`View details for ${project.title}`}
            >
              View Details
              <Maximize2 size={16} />
            </Button>
          ) : (
            <Button 
              variant="outline" 
              size="sm" 
              className="text-[#1A1F2C] hover:bg-[#ea384c] hover:text-white flex items-center gap-2" 
              asChild
            >
              <Link 
                to={`/portfolio/${project.id}`}
                aria-label={`View details for ${project.title}`}
              >
                View Details
                <ExternalLink size={16} />
              </Link>
            </Button>
          )}
        </div>
      </div>
      
      {/* Modal for projects with useModal property */}
      {project.useModal && <ProjectModal project={project} isOpen={isModalOpen} onOpenChange={setIsModalOpen} />}
    </>
  );
};

export default PortfolioCard;
