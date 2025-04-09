
import React from 'react';

interface ProjectFullDescriptionProps {
  fullDescription?: string;
}

const ProjectFullDescription = ({ fullDescription }: ProjectFullDescriptionProps) => {
  if (!fullDescription) return null;
  
  return (
    <div className="mt-8 pt-6 border-t border-gray-200">
      <div className="bg-gray-50 rounded-lg p-6 shadow-sm border border-gray-100">
        {/* Project Overview */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-3">Project Overview</h3>
          <div className="text-gray-700 space-y-4">
            {fullDescription.split('\n\n')[0] && (
              <p>{fullDescription.split('\n\n')[0]}</p>
            )}
            {fullDescription.split('\n\n')[1] && (
              <p>{fullDescription.split('\n\n')[1]}</p>
            )}
          </div>
        </div>
        
        {/* Structural Work */}
        {fullDescription.includes("Our structural engineering work included:") && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Structural Engineering Work</h3>
            <div className="bg-white rounded-md p-4 border border-gray-100">
              <ul className="list-disc pl-5 space-y-2">
                {fullDescription
                  .split("Our structural engineering work included:")[1]
                  .split("\n\n")[0]
                  .split(/\d\.\s/)
                  .filter(item => item.trim())
                  .map((item, index) => (
                    <li key={index} className="text-gray-700">{item.trim()}</li>
                  ))}
              </ul>
            </div>
          </div>
        )}
        
        {/* Challenges & Solutions */}
        {fullDescription.includes("This challenging project") && (
          <div>
            <h3 className="text-lg font-semibold mb-3">Challenges & Solutions</h3>
            <div className="bg-white rounded-md p-4 border border-gray-100">
              <p className="text-gray-700">
                {fullDescription.split("This challenging project")[1].trim()}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectFullDescription;
