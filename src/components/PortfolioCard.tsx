
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
    fullDescription?: string;
    useModal?: boolean;
  };
}

const PortfolioCard = ({ project }: ProjectProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Get the first image from the project.images array if available, otherwise use the main image
  const displayImage = project.images && project.images.length > 0 ? project.images[0] : project.image;
  
  const handleViewDetails = (e: React.MouseEvent) => {
    if (project.useModal) {
      e.preventDefault();
      setIsModalOpen(true);
    }
  };
  
  return (
    <>
      <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all hover:shadow-lg hover:-translate-y-1">
        <div className="h-56 overflow-hidden relative">
          <img 
            src={displayImage} 
            alt={project.title} 
            className="w-full h-full object-cover transition-transform hover:scale-105"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              console.error(`Failed to load image: ${target.src}`);
              target.onerror = null;
              target.src = 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&q=80&w=800&h=500';
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
              <Link to={`/portfolio/${project.id}`}>
                View Details
                <ExternalLink size={16} />
              </Link>
            </Button>
          )}
        </div>
      </div>
      
      {/* Modal for projects with useModal property */}
      {project.useModal && (
        <ProjectModal 
          project={project} 
          isOpen={isModalOpen} 
          onOpenChange={setIsModalOpen} 
        />
      )}
    </>
  );
};

export default PortfolioCard;
