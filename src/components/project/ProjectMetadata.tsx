
import React from 'react';

interface ProjectMetadataProps {
  project: {
    type: string;
    completion: string;
    location?: string;
    architect?: string;
    title: string;
  };
}

const ProjectMetadata = ({ project }: ProjectMetadataProps) => {
  // Only show architect if it's Daniel Rees or Xami
  const showArchitect = project.architect && 
    (project.architect.toLowerCase().includes('daniel rees') || 
     project.architect.toLowerCase().includes('xami'));

  return (
    <div>
      <div className="flex items-center gap-4 mb-4">
        <span className="inline-block bg-[#ea384c]/10 text-[#ea384c] text-sm font-semibold px-3 py-1 rounded-full">
          {project.type.charAt(0).toUpperCase() + project.type.slice(1)}
        </span>
      </div>
      
      <h2 className="text-2xl font-bold mb-4">{project.title}</h2>
      
      <div className="space-y-4">
        <div className="grid grid-cols-1 gap-2">
          {project.location && (
            <div className="flex items-start">
              <span className="font-medium w-24">Location:</span>
              <span>{project.location}</span>
            </div>
          )}
          
          {showArchitect && (
            <div className="flex items-start">
              <span className="font-medium w-24">Architect:</span>
              <span>{project.architect}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectMetadata;
