
import React from 'react';
import { Card } from "@/components/ui/card";
import { ZoomIn } from 'lucide-react';

interface ProjectImageCardProps {
  image: string;
  title: string;
  caption?: string;
  onClick: () => void;
  className?: string;
}

const ProjectImageCard = ({ image, title, caption, onClick, className = "" }: ProjectImageCardProps) => {
  return (
    <Card 
      className={`group relative overflow-hidden rounded-lg shadow-md cursor-pointer transition-all hover:shadow-xl ${className}`}
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/0 to-black/70 z-10"></div>
      
      <div className="absolute top-2 right-2 bg-black/40 p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-20">
        <ZoomIn className="h-4 w-4 text-white" />
      </div>
      
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
      
      {caption && (
        <div className="absolute bottom-0 left-0 right-0 p-3 text-white z-20">
          <p className="text-sm">{caption}</p>
        </div>
      )}
    </Card>
  );
};

export default ProjectImageCard;
