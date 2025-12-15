
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from 'lucide-react';

// Helper function to create slug from title
const createSlug = (title: string): string => {
  return title
    .toLowerCase()
    .trim()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
};

interface ProjectNavigationProps {
  prevProject: any;
  nextProject: any;
}

const ProjectNavigation = ({ prevProject, nextProject }: ProjectNavigationProps) => {
  const prevSlug = prevProject ? createSlug(prevProject.title) : null;
  const nextSlug = nextProject ? createSlug(nextProject.title) : null;

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
