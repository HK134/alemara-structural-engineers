
import React from 'react';

export type ProjectStage = 'Site Visit' | 'Schematic Submission' | 'Final Package' | 'Completed' | 'Awaiting Info' | 'In Progress';

type ProjectStatusProps = {
  status: string;
  stage?: ProjectStage;
};

const ProjectStatus: React.FC<ProjectStatusProps> = ({ status, stage }) => {
  let bgColor = '';
  let textColor = '';
  
  // Determine colors based on overall status
  switch (status) {
    case 'Completed':
      bgColor = 'bg-green-100';
      textColor = 'text-green-800';
      break;
    case 'In Progress':
      bgColor = 'bg-blue-100';
      textColor = 'text-blue-800';
      break;
    case 'Awaiting Info':
      bgColor = 'bg-amber-100';
      textColor = 'text-amber-800';
      break;
    default:
      bgColor = 'bg-gray-100';
      textColor = 'text-gray-800';
  }
  
  return (
    <div className="flex flex-col space-y-1">
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${bgColor} ${textColor} inline-flex items-center`}>
        {status}
      </span>
      {stage && (
        <span className="text-xs text-gray-500 ml-1">
          Stage: {stage}
        </span>
      )}
    </div>
  );
};

export default ProjectStatus;
