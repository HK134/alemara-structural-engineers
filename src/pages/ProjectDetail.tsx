
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceCTA from '@/components/services/ServiceCTA';
import { portfolioItems } from '@/data/projects';
import ProjectInfo from '@/components/project/ProjectInfo';
import ProjectNavigation from '@/components/project/ProjectNavigation';
import ProjectStructuredData from '@/components/project/ProjectStructuredData';
import { Helmet } from 'react-helmet';

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [prevProject, setPrevProject] = useState<any>(null);
  const [nextProject, setNextProject] = useState<any>(null);

  useEffect(() => {
    if (id) {
      const currentProject = portfolioItems.find(item => item.id === parseInt(id));
      
      if (currentProject) {
        setProject(currentProject);
        
        // Find previous and next projects
        const currentIndex = portfolioItems.findIndex(item => item.id === parseInt(id));
        setPrevProject(currentIndex > 0 ? portfolioItems[currentIndex - 1] : null);
        setNextProject(currentIndex < portfolioItems.length - 1 ? portfolioItems[currentIndex + 1] : null);
      }
    }
    setLoading(false);
  }, [id]);

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
        
        <ServiceCTA />
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
