
import React from 'react';
import { ProjectStage } from '@/types';

type ProjectStatusProps = {
  status: string;
  stage?: ProjectStage;
  size?: 'sm' | 'md' | 'lg';
};

const ProjectStatus: React.FC<ProjectStatusProps> = ({ status, stage, size = 'md' }) => {
  let bgColor = '';
  let textColor = '';
  
  // Determine colors based on overall status
  switch (status.toLowerCase()) {
    case 'completed':
      bgColor = 'bg-green-100';
      textColor = 'text-green-800';
      break;
    case 'in progress':
      bgColor = 'bg-blue-100';
      textColor = 'text-blue-800';
      break;
    case 'awaiting info':
      bgColor = 'bg-amber-100';
      textColor = 'text-amber-800';
      break;
    default:
      bgColor = 'bg-gray-100';
      textColor = 'text-gray-800';
  }

  // Determine size classes
  const sizeClasses = {
    sm: 'text-xs px-1.5 py-0.5',
    md: 'text-xs px-2 py-1',
    lg: 'text-sm px-3 py-1.5'
  };
  
  return (
    <div className="flex flex-col space-y-1">
      <span className={`rounded-full font-medium ${bgColor} ${textColor} inline-flex items-center ${sizeClasses[size]}`}>
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
// Using export type to avoid TS1205 error when re-exporting
export type { ProjectStage };
