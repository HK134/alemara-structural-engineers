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
  return;
};
export default ProjectImageCard;