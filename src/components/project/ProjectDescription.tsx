
import React from 'react';

interface ProjectDescriptionProps {
  description: string;
}

const ProjectDescription = ({ description }: ProjectDescriptionProps) => {
  return (
    <div className="pt-4 border-t border-gray-100">
      <h3 className="text-lg font-semibold mb-2">Project Highlights</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default ProjectDescription;
