
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ServiceCTA from '@/components/services/ServiceCTA';
import { portfolioItems } from '@/components/PortfolioData';
import ProjectInfo from '@/components/project/ProjectInfo';
import ProjectGallery from '@/components/project/ProjectGallery';
import ProjectNavigation from '@/components/project/ProjectNavigation';
import ProjectGuarantee from '@/components/project/ProjectGuarantee';
import InfrastructureProjectDetail from '@/components/project/InfrastructureProjectDetail';
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

  const pageTitle = `${project.title} | London Structural Surveys Project`;
  const pageDescription = project.description?.substring(0, 160);

  // Check if this is a major infrastructure project (HS2 or Hinkley Point)
  const isMajorInfrastructure = 
    project.id === 11 || // Hinkley Point C
    project.id === 12;   // HS2

  if (isMajorInfrastructure) {
    return (
      <div className="min-h-screen flex flex-col">
        <Helmet>
          <title>{pageTitle}</title>
          <meta name="description" content={pageDescription} />
          <meta name="keywords" content={`${project.type} engineering, ${project.title}, structural engineering project, London`} />
          <link rel="canonical" href={`https://londonstructuralsurveys.com/portfolio/${project.id}`} />
        </Helmet>
        <ProjectStructuredData project={project} />
        <Navbar />
        <main className="flex-grow">
          <InfrastructureProjectDetail project={project} />
          
          {/* Navigation buttons */}
          <div className="container mx-auto px-4 py-8">
            <ProjectNavigation prevProject={prevProject} nextProject={nextProject} />
          </div>
          
          <ServiceCTA />
        </main>
        <Footer />
      </div>
    );
  }

  // Standard project display for non-infrastructure projects
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={`${project.type} engineering, ${project.title}, structural engineering project, London`} />
        <link rel="canonical" href={`https://londonstructuralsurveys.com/portfolio/${project.id}`} />
      </Helmet>
      <ProjectStructuredData project={project} />
      <Navbar />
      <main className="flex-grow">
        {/* Hero section */}
        <section className="bg-[#1A1F2C] text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
            <p className="text-xl max-w-3xl">
              {project.description}
            </p>
          </div>
        </section>
        
        {/* Project details */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4">
            <ProjectInfo project={project} />
            
            {/* Project Gallery */}
            {project.images && project.images.length > 0 && (
              <ProjectGallery 
                images={project.images} 
                title={project.title}
                imageAlt={project.imageAlt}
              />
            )}
            
            {/* Navigation buttons */}
            <ProjectNavigation prevProject={prevProject} nextProject={nextProject} />
          </div>
        </section>
        
        {/* Project delivery guarantee section */}
        <ProjectGuarantee />
        
        <ServiceCTA />
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
