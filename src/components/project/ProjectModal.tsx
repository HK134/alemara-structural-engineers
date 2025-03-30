
import React, { useState } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogHeader,
  DialogTitle,
  DialogDescription
} from "@/components/ui/dialog";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { CalendarIcon, MapPin } from 'lucide-react';

interface ProjectModalProps {
  project: {
    id: number;
    title: string;
    type: string;
    image: string;
    description: string;
    completion: string;
    location?: string;
    architect?: string;
    images?: string[];
    fullDescription?: string;
  };
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const ProjectModal = ({ project, isOpen, onOpenChange }: ProjectModalProps) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  const handleImageChange = (index: number) => {
    setActiveImageIndex(index);
  };
  
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden bg-white">
        <div className="flex flex-col md:flex-row h-full max-h-[85vh]">
          {/* Image carousel section */}
          <div className="md:w-1/2 h-[300px] md:h-auto relative bg-gray-100">
            <Carousel className="w-full h-full">
              <CarouselContent className="h-full">
                {project.images?.map((img, index) => (
                  <CarouselItem key={index} className="h-full">
                    <div className="h-full w-full">
                      <img 
                        src={img} 
                        alt={`${project.title} - Image ${index + 1}`} 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.onerror = null;
                          target.src = 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&q=80&w=800&h=500';
                        }}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>
          
          {/* Project details section */}
          <div className="md:w-1/2 p-6 overflow-y-auto max-h-[85vh] md:max-h-none">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
              <div className="flex items-center gap-2 mt-2">
                <Badge variant="secondary" className="bg-[#ea384c]/10 text-[#ea384c] hover:bg-[#ea384c]/20">
                  {project.type.charAt(0).toUpperCase() + project.type.slice(1)}
                </Badge>
                <div className="flex items-center text-sm text-gray-500">
                  <CalendarIcon className="h-4 w-4 mr-1" />
                  {project.completion}
                </div>
              </div>
              {project.location && (
                <div className="flex items-center text-sm text-gray-500 mt-1">
                  <MapPin className="h-4 w-4 mr-1" />
                  {project.location}
                </div>
              )}
            </DialogHeader>
            
            <DialogDescription className="mt-4">
              <div className="prose max-w-none">
                {project.fullDescription?.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="mb-4 text-gray-700">
                    {paragraph}
                  </p>
                ))}
              </div>
            </DialogDescription>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
