
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface ProjectOverviewProps {
  fullDescription?: string;
}

const ProjectOverview = ({ fullDescription }: ProjectOverviewProps) => {
  if (!fullDescription) return null;
  
  return (
    <div className="col-span-1 lg:col-span-2">
      <Card>
        <CardContent className="p-6">
          <h4 className="text-xl font-semibold mb-4">Project Overview</h4>
          <p className="text-gray-700 whitespace-pre-line">
            {fullDescription}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectOverview;
