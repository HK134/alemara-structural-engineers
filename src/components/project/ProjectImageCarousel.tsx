
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProjectImage from './ProjectImage';

interface ProjectImageCarouselProps {
  images: string[];
  project: {
    id: number;
    title: string;
    type: string;
    location?: string;
    imageAlt?: string[];
  };
}

const ProjectImageCarousel = ({ images, project }: ProjectImageCarouselProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const currentImage = images[currentImageIndex];
  
  // Get alt text for better SEO
  const imageAlt = project.imageAlt && project.imageAlt.length > 0 && project.imageAlt[currentImageIndex]
    ? project.imageAlt[currentImageIndex] 
    : `${project.title} - ${project.type} structural engineering project in ${project.location || 'London'}`;
  
  const goToPrevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  return (
    <div className="relative">
      <div className="overflow-hidden rounded-lg">
        <ProjectImage 
          project={project}
          imageSrc={currentImage}
          imageAlt={imageAlt}
        />
      </div>
      
      {/* Navigation arrows */}
      {images.length > 1 && (
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
            {images.map((_, index) => (
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
  );
};

export default ProjectImageCarousel;
