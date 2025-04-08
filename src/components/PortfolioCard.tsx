
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ExternalLink, Maximize2 } from 'lucide-react';
import ProjectModal from './project/ProjectModal';

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

  // Get the first image from the project.images array if available, otherwise use the main image
  const displayImage = project.images && project.images.length > 0 ? project.images[0] : project.image;
  
  // Get alt text for better accessibility and SEO
  const imageAlt = project.imageAlt && project.imageAlt.length > 0 
    ? project.imageAlt[0] 
    : `${project.title} - ${project.type} structural engineering project`;

  const handleViewDetails = (e: React.MouseEvent) => {
    if (project.useModal) {
      e.preventDefault();
      setIsModalOpen(true);
    }
  };

  return <>
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
            className={`w-full h-full object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            loading="lazy"
            width="600"
            height="400"
            onLoad={() => setImageLoaded(true)}
            onError={(e) => {
              setImageLoaded(true);
              const target = e.target as HTMLImageElement;
              target.src = '/placeholder.svg';
            }}
          />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span className="inline-block bg-[#ea384c]/10 text-[#ea384c] text-xs font-semibold px-2 py-1 rounded-full">
              {project.type.charAt(0).toUpperCase() + project.type.slice(1)}
            </span>
            <span className="text-xs text-gray-500">{project.completion}</span>
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
    </>;
};

export default PortfolioCard;
