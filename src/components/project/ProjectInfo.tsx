
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

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
  };
}

const ProjectInfo = ({ project }: ProjectInfoProps) => {
  // Get the first image from the project.images array if available, otherwise use the main image
  const displayImage = project.images && project.images.length > 0 ? project.images[0] : project.image;
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      {/* Main project image */}
      <div>
        <img 
          src={displayImage}
          alt={project.title} 
          className="w-full h-auto rounded-lg shadow-lg"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            console.error(`Failed to load image: ${target.src}`);
            target.onerror = null;
            target.src = 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&q=80&w=800&h=500';
          }}
        />
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
