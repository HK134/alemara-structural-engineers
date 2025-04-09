
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface ProjectOverviewProps {
  fullDescription?: string;
}

const ProjectOverview = ({ fullDescription }: ProjectOverviewProps) => {
  if (!fullDescription) return null;
  
  // Split the description into paragraphs
  const paragraphs = fullDescription.split('\n\n');
  
  return (
    <div className="col-span-1 lg:col-span-2">
      <Card>
        <CardContent className="p-6">
          <h4 className="text-xl font-semibold mb-4">Project Overview</h4>
          <div className="space-y-4 text-gray-700">
            {paragraphs.map((paragraph, index) => (
              <p key={index} className="whitespace-pre-line">
                {paragraph}
              </p>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectOverview;
