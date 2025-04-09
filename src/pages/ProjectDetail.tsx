import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceCTA from '@/components/services/ServiceCTA';
import { portfolioItems, getProjectsByType } from '@/data/projects';
import ProjectInfo from '@/components/project/ProjectInfo';
import ProjectNavigation from '@/components/project/ProjectNavigation';
import ProjectStructuredData from '@/components/project/ProjectStructuredData';
import { Helmet } from 'react-helmet';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Building, Home, HardHat } from 'lucide-react';
import PortfolioCard from '@/components/PortfolioCard';

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [prevProject, setPrevProject] = useState<any>(null);
  const [nextProject, setNextProject] = useState<any>(null);
  const [relatedProjects, setRelatedProjects] = useState<any[]>([]);
  const [filterType, setFilterType] = useState<string>('all');

  useEffect(() => {
    if (id) {
      const currentProject = portfolioItems.find(item => item.id === parseInt(id));
      
      if (currentProject) {
        setProject(currentProject);
        
        // Find previous and next projects
        const currentIndex = portfolioItems.findIndex(item => item.id === parseInt(id));
        setPrevProject(currentIndex > 0 ? portfolioItems[currentIndex - 1] : null);
        setNextProject(currentIndex < portfolioItems.length - 1 ? portfolioItems[currentIndex + 1] : null);
        
        // Set initial related projects
        updateRelatedProjects(currentProject.type);
      }
    }
    setLoading(false);
  }, [id]);
  
  // Update related projects when filter changes
  useEffect(() => {
    if (project) {
      updateRelatedProjects(filterType);
    }
  }, [filterType, project]);
  
  const updateRelatedProjects = (type: string) => {
    // Get filtered projects based on type
    let filteredProjects = type === 'all' 
      ? portfolioItems 
      : getProjectsByType(type);
    
    // Exclude current project
    filteredProjects = filteredProjects.filter(item => item.id !== project?.id);
    
    // Limit to 3 projects
    setRelatedProjects(filteredProjects.slice(0, 3));
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-2xl">Loading...</div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-2xl">Project not found</div>
      </div>
    );
  }

  const pageTitle = `${project.title} | London Structural Engineering Project`;
  const pageDescription = project.description?.substring(0, 160);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={`${project.type} engineering, ${project.title}, structural engineering project, London, ${project.location || ''}`} />
        <link rel="canonical" href={`https://londonstructuralsurveys.com/portfolio/${project.id}`} />
      </Helmet>
      <ProjectStructuredData project={project} />
      <Navbar />
      <main className="flex-grow py-12">
        {/* Compact header */}
        <div className="container mx-auto px-4 mb-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
            <p className="text-gray-600">{project.location || 'London'}</p>
          </div>
        </div>
        
        {/* Project information */}
        <div className="container mx-auto px-4 mb-8">
          <ProjectInfo project={project} />
        </div>
        
        {/* Project navigation */}
        <div className="container mx-auto px-4 mt-12">
          <div className="max-w-4xl mx-auto">
            <ProjectNavigation prevProject={prevProject} nextProject={nextProject} />
          </div>
        </div>
        
        {/* Other projects section */}
        <div className="container mx-auto px-4 mt-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">Check Out Our Other Projects</h2>
            
            {/* Project type filter */}
            <div className="flex justify-center mb-8">
              <ToggleGroup type="single" defaultValue="all" value={filterType} onValueChange={(value) => value && setFilterType(value)}>
                <ToggleGroupItem value="all" aria-label="All projects" className="flex items-center gap-2">
                  <Building className="h-4 w-4" />
                  <span>All</span>
                </ToggleGroupItem>
                <ToggleGroupItem value="residential" aria-label="Residential projects" className="flex items-center gap-2">
                  <Home className="h-4 w-4" />
                  <span>Residential</span>
                </ToggleGroupItem>
                <ToggleGroupItem value="commercial" aria-label="Commercial projects" className="flex items-center gap-2">
                  <Building className="h-4 w-4" />
                  <span>Commercial</span>
                </ToggleGroupItem>
                <ToggleGroupItem value="civil" aria-label="Civil projects" className="flex items-center gap-2">
                  <HardHat className="h-4 w-4" />
                  <span>Civil</span>
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
            
            {/* Related projects */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProjects.map(relatedProject => (
                <PortfolioCard key={relatedProject.id} project={relatedProject} />
              ))}
            </div>
          </div>
        </div>
        
        <ServiceCTA />
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
