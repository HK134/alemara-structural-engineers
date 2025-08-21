
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { getProjectSlug } from '@/data/projects';

interface ProjectNavigationProps {
  prevProject: any;
  nextProject: any;
}

const ProjectNavigation = ({ prevProject, nextProject }: ProjectNavigationProps) => {
  const prevSlug = prevProject ? getProjectSlug(prevProject) : null;
  const nextSlug = nextProject ? getProjectSlug(nextProject) : null;

  return (
    <div className="flex justify-between mt-12">
      {prevProject ? (
        <Button variant="outline" className="flex items-center gap-2" asChild>
          <Link to={`/portfolio/${prevSlug}`}>
            <ArrowLeft size={16} /> Previous Project
          </Link>
        </Button>
      ) : (
        <div></div> // Empty div to maintain layout when there's no previous project
      )}
      
      {nextProject ? (
        <Button variant="outline" className="flex items-center gap-2" asChild>
          <Link to={`/portfolio/${nextSlug}`}>
            Next Project <ArrowRight size={16} />
          </Link>
        </Button>
      ) : (
        <div></div> // Empty div to maintain layout when there's no next project
      )}
    </div>
  );
};

export default ProjectNavigation;
