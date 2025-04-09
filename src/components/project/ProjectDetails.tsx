
import React from 'react';

interface ProjectDetailsProps {
  project: {
    type: string;
    completion: string;
    title: string;
    description: string;
    architect?: string;
    location?: string;
  };
}

const ProjectDetails = ({ project }: ProjectDetailsProps) => {
  return (
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
  );
};

export default ProjectDetails;
