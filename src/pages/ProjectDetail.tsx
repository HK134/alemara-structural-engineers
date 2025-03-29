
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
        console.log("Project images:", currentProject.images);
        
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

  return (
    <div className="min-h-screen flex flex-col">
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
              <ProjectGallery images={project.images} title={project.title} />
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
