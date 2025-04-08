
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
import { 
  Hammer, 
  Award, 
  Layout, 
  Columns, 
  HomeIcon, 
  Calendar, 
  MapPin, 
  User, 
  CheckCircle 
} from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [prevProject, setPrevProject] = useState<any>(null);
  const [nextProject, setNextProject] = useState<any>(null);
  const [activeImage, setActiveImage] = useState<string | null>(null);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    if (id) {
      const currentProject = portfolioItems.find(item => item.id === parseInt(id));
      
      if (currentProject) {
        setProject(currentProject);
        
        // Find previous and next projects
        const currentIndex = portfolioItems.findIndex(item => item.id === parseInt(id));
        setPrevProject(currentIndex > 0 ? portfolioItems[currentIndex - 1] : null);
        setNextProject(currentIndex < portfolioItems.length - 1 ? portfolioItems[currentIndex + 1] : null);
        
        // Set initial active image
        if (currentProject.images && currentProject.images.length > 0) {
          setActiveImage(currentProject.images[0]);
        }
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

  // Victoria Park Project (id: 2) should only show the single image, no gallery
  const isVictoriaParkProject = project.id === 2;

  // Check if this is a major infrastructure project (HS2 or Hinkley Point)
  const isMajorInfrastructure = 
    project.id === 11 || // Hinkley Point C
    project.id === 12;   // HS2

  // For infrastructure projects, use the specialized layout
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

  // Standard project display for all other projects
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
            
            {/* Victoria Park Project (ID 2) should not show the gallery */}
            {/* Only show gallery for projects with multiple images */}
            {!isVictoriaParkProject && project.images && project.images.length > 1 && (
              <ProjectGallery 
                images={project.images} 
                title={project.title}
                imageAlt={project.imageAlt}
              />
            )}
            
            {/* For Victoria Park Project, show single image instead */}
            {isVictoriaParkProject && project.images && project.images.length > 0 && (
              <div className="mt-12 max-w-4xl mx-auto">
                <img 
                  src={project.images[0]}
                  alt={project.imageAlt ? project.imageAlt[0] : `${project.title} - Open plan living space`}
                  className="w-full h-auto rounded-lg shadow-md"
                  width="1200"
                  height="800"
                  loading="lazy"
                />
                <p className="text-center text-gray-500 mt-4 text-sm italic">
                  {project.imageAlt ? project.imageAlt[0] : "Open plan living space after structural refurbishment"}
                </p>
              </div>
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
