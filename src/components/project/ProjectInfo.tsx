
import React from 'react';
import ProjectImage from './ProjectImage';
import ProjectDetails from './ProjectDetails';
import ProjectOverview from './ProjectOverview';

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
  // Get the first image from the project.images array if available, otherwise use the main image
  const displayImage = project.images && project.images.length > 0 ? project.images[0] : project.image;
  
  // Get alt text for better SEO
  const imageAlt = project.imageAlt && project.imageAlt.length > 0 
    ? project.imageAlt[0] 
    : `${project.title} - ${project.type} structural engineering project in ${project.location || 'London'}`;
  
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      {/* Main project image with loading state */}
      <ProjectImage 
        project={project}
        imageSrc={displayImage}
        imageAlt={imageAlt}
      />
      
      {/* Project info */}
      <ProjectDetails project={project} />

      {/* Project overview section */}
      <ProjectOverview fullDescription={project.fullDescription} />
    </div>
  );
};

export default ProjectInfo;
