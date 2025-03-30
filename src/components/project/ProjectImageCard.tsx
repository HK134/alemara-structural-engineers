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
const ProjectImageCard = ({
  image,
  title,
  caption,
  onClick,
  className = ""
}: ProjectImageCardProps) => {
  return <Card className={`group relative overflow-hidden rounded-lg shadow-md cursor-pointer transition-all hover:shadow-xl ${className}`} onClick={onClick}>
      <div className="absolute top-2 right-2 bg-black/40 p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-20">
        <ZoomIn className="h-4 w-4 text-white" />
      </div>
      
      
      
      {caption && <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-white z-10">
          <p className="text-sm">{caption}</p>
        </div>}
    </Card>;
};
export default ProjectImageCard;