
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import ProjectImageCarousel from './ProjectImageCarousel';
import ProjectMetadata from './ProjectMetadata';
import ProjectDescription from './ProjectDescription';
import ProjectFullDescription from './ProjectFullDescription';

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
  // Get the main image and all other images
  const allImages = project.images && project.images.length > 0 
    ? project.images 
    : [project.image];
  
  return (
    <div className="max-w-4xl mx-auto">
      <Card className="bg-white border border-gray-200 shadow-sm">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Main project image with navigation arrows */}
            <ProjectImageCarousel 
              images={allImages} 
              project={project} 
            />
            
            {/* Project details */}
            <div>
              <ProjectMetadata project={project} />
              <ProjectDescription description={project.description} />
            </div>
          </div>
          
          {/* Full project description */}
          <ProjectFullDescription fullDescription={project.fullDescription} />
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectInfo;
