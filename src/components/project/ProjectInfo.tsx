
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import ProjectImage from './ProjectImage';
import { Separator } from "@/components/ui/separator";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  // Get the main image and all other images
  const allImages = project.images && project.images.length > 0 
    ? project.images 
    : [project.image];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const currentImage = allImages[currentImageIndex];
  
  // Get alt text for better SEO
  const imageAlt = project.imageAlt && project.imageAlt.length > 0 && project.imageAlt[currentImageIndex]
    ? project.imageAlt[currentImageIndex] 
    : `${project.title} - ${project.type} structural engineering project in ${project.location || 'London'}`;
  
  const goToPrevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? allImages.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === allImages.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  return (
    <div className="max-w-4xl mx-auto">
      <Card className="bg-white border border-gray-200 shadow-sm">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Main project image with navigation arrows */}
            <div className="relative">
              <div className="overflow-hidden rounded-lg">
                <ProjectImage 
                  project={project}
                  imageSrc={currentImage}
                  imageAlt={imageAlt}
                />
              </div>
              
              {/* Navigation arrows */}
              {allImages.length > 1 && (
                <>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 rounded-full bg-white/80 hover:bg-white border border-gray-200 shadow-sm"
                    onClick={goToPrevImage}
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-5 w-5 text-gray-700" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full bg-white/80 hover:bg-white border border-gray-200 shadow-sm"
                    onClick={goToNextImage}
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-5 w-5 text-gray-700" />
                  </Button>
                  
                  {/* Dots indicator for current image */}
                  <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
                    {allImages.map((_, index) => (
                      <span 
                        key={index} 
                        className={`h-2 w-2 rounded-full ${index === currentImageIndex ? 'bg-[#ea384c]' : 'bg-gray-300'}`}
                        role="button"
                        tabIndex={0}
                        onClick={() => setCurrentImageIndex(index)}
                        aria-label={`Go to image ${index + 1}`}
                      ></span>
                    ))}
                  </div>
                </>
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
          
          {/* Organized Project Details with improved styling */}
          {project.fullDescription && (
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="bg-gray-50 rounded-lg p-6 shadow-sm border border-gray-100">
                {/* Project Overview */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Project Overview</h3>
                  <div className="text-gray-700 space-y-4">
                    {project.fullDescription.split('\n\n')[0] && (
                      <p>{project.fullDescription.split('\n\n')[0]}</p>
                    )}
                    {project.fullDescription.split('\n\n')[1] && (
                      <p>{project.fullDescription.split('\n\n')[1]}</p>
                    )}
                  </div>
                </div>
                
                {/* Structural Work */}
                {project.fullDescription.includes("Our structural engineering work included:") && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3">Structural Engineering Work</h3>
                    <div className="bg-white rounded-md p-4 border border-gray-100">
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
                  </div>
                )}
                
                {/* Challenges & Solutions */}
                {project.fullDescription.includes("This challenging project") && (
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Challenges & Solutions</h3>
                    <div className="bg-white rounded-md p-4 border border-gray-100">
                      <p className="text-gray-700">
                        {project.fullDescription.split("This challenging project")[1].trim()}
                      </p>
                    </div>
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
