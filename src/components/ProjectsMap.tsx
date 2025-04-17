
import React from 'react';
import LeadsMap from '@/components/LeadsMap';

const ProjectsMap = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Projects Map</h1>
      <p className="mb-4 text-gray-600">
        View all your assigned projects on a map to help with planning and logistics.
      </p>
      <LeadsMap />
    </div>
  );
};

export default ProjectsMap;
