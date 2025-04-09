
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import ProjectImage from './ProjectImage';
import { Separator } from "@/components/ui/separator";
import { AspectRatio } from "@/components/ui/aspect-ratio";

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
  
  // For displaying a few thumbnail images
  const additionalImages = project.images ? project.images.slice(1, 4) : [];
  const [selectedImage, setSelectedImage] = useState(displayImage);
  
  return (
    <div className="max-w-4xl mx-auto">
      <Card className="bg-white border border-gray-200 shadow-sm">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Main project image with thumbnails */}
            <div className="space-y-3">
              <div className="overflow-hidden rounded-lg">
                <ProjectImage 
                  project={project}
                  imageSrc={selectedImage}
                  imageAlt={imageAlt}
                />
              </div>
              
              {/* Thumbnail images */}
              {additionalImages.length > 0 && (
                <div className="grid grid-cols-4 gap-2 mt-2">
                  <div 
                    className={`aspect-square rounded-md overflow-hidden cursor-pointer border-2 ${selectedImage === displayImage ? 'border-[#ea384c]' : 'border-transparent'}`}
                    onClick={() => setSelectedImage(displayImage)}
                  >
                    <img src={displayImage} alt={`${project.title} thumbnail`} className="w-full h-full object-cover" />
                  </div>
                  
                  {additionalImages.map((img, index) => (
                    <div 
                      key={index}
                      className={`aspect-square rounded-md overflow-hidden cursor-pointer border-2 ${selectedImage === img ? 'border-[#ea384c]' : 'border-transparent'}`}
                      onClick={() => setSelectedImage(img)}
                    >
                      <img src={img} alt={`${project.title} thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Project details */}
            <div>
              <div className="flex items-center gap-4 mb-4">
                <span className="inline-block bg-[#ea384c]/10 text-[#ea384c] text-sm font-semibold px-3 py-1 rounded-full">
                  {project.type.charAt(0).toUpperCase() + project.type.slice(1)}
                </span>
                <span className="text-sm text-gray-500">{project.completion}</span>
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
                  
                  {project.architect && (
                    <div className="flex items-start">
                      <span className="font-medium w-24">Architect:</span>
                      <span>{project.architect}</span>
                    </div>
                  )}
                  
                  <div className="flex items-start">
                    <span className="font-medium w-24">Completion:</span>
                    <span>{project.completion}</span>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-100">
                  <h3 className="text-lg font-semibold mb-2">Project Highlights</h3>
                  <p className="text-gray-700">{project.description}</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Organized Project Details */}
          {project.fullDescription && (
            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="prose max-w-none text-gray-700 space-y-6">
                {/* Project Overview */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Project Overview</h3>
                  <p className="mb-4">{project.fullDescription.split('\n\n')[0]}</p>
                  {project.fullDescription.split('\n\n')[1] && (
                    <p className="mb-4">{project.fullDescription.split('\n\n')[1]}</p>
                  )}
                </div>
                
                {/* Structural Work */}
                {project.fullDescription.includes("Our structural engineering work included:") && (
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Structural Engineering Work</h3>
                    <ul className="list-disc pl-5 space-y-2">
                      {project.fullDescription
                        .split("Our structural engineering work included:")[1]
                        .split("\n\n")[0]
                        .split(/\d\.\s/)
                        .filter(item => item.trim())
                        .map((item, index) => (
                          <li key={index} className="text-gray-700">{item.trim()}</li>
                        ))}
                    </ul>
                  </div>
                )}
                
                {/* Challenges & Solutions */}
                {project.fullDescription.includes("This challenging project") && (
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Challenges & Solutions</h3>
                    <p className="mb-4">
                      {project.fullDescription.split("This challenging project")[1].trim()}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ProjectInfo;
