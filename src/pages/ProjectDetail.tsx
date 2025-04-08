
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

  // Check if this is the Cheval Place project (ID: 16)
  const isChevalPlace = project.id === 16;

  // Check if this is a major infrastructure project (HS2 or Hinkley Point)
  const isMajorInfrastructure = 
    project.id === 11 || // Hinkley Point C
    project.id === 12;   // HS2

  // Victoria Park Project (id: 2) should only show the single image, no gallery
  const isVictoriaParkProject = project.id === 2;

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

  // Special layout for Cheval Place project
  if (isChevalPlace) {
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
          {/* Hero section with full-width image */}
          <section className="w-full h-[70vh] relative overflow-hidden">
            <img 
              src={project.image} 
              alt={project.imageAlt ? project.imageAlt[0] : project.title} 
              className="w-full h-full object-cover" 
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
              <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm mb-3">
                {project.completion}
              </span>
              <h1 className="text-3xl md:text-5xl font-bold text-white mb-3">{project.title}</h1>
              <p className="text-lg md:text-xl text-white/90 max-w-3xl">
                {project.description}
              </p>
            </div>
          </section>
          
          {/* Project details section */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              {/* Project metadata cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <Card className="shadow-sm border-t-4 border-t-[#ea384c]">
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-2">
                      <Calendar className="h-5 w-5 text-[#ea384c] mr-2" />
                      <h3 className="text-lg font-semibold">Completion</h3>
                    </div>
                    <p className="text-gray-700">{project.completion}</p>
                  </CardContent>
                </Card>
                
                <Card className="shadow-sm border-t-4 border-t-[#ea384c]">
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-2">
                      <User className="h-5 w-5 text-[#ea384c] mr-2" />
                      <h3 className="text-lg font-semibold">Architect</h3>
                    </div>
                    <p className="text-gray-700">{project.architect || 'Not specified'}</p>
                  </CardContent>
                </Card>
                
                <Card className="shadow-sm border-t-4 border-t-[#ea384c]">
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-2">
                      <MapPin className="h-5 w-5 text-[#ea384c] mr-2" />
                      <h3 className="text-lg font-semibold">Location</h3>
                    </div>
                    <p className="text-gray-700">{project.location || 'London'}</p>
                  </CardContent>
                </Card>
              </div>
              
              {/* Image gallery with selected image view */}
              <div className="mb-16">
                <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center">
                  <Layout className="mr-3 h-6 w-6 text-[#ea384c]" />
                  Project Gallery
                </h2>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                  {/* Main image display */}
                  <div className="aspect-w-4 aspect-h-3 relative overflow-hidden rounded-lg shadow-lg">
                    <img 
                      src={activeImage || project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                      loading="eager"
                    />
                  </div>
                  
                  {/* Image thumbnails and project details */}
                  <div>
                    {/* Image thumbnails */}
                    <div className="grid grid-cols-4 gap-2 mb-6">
                      {project.images && project.images.map((image: string, index: number) => (
                        <div 
                          key={index} 
                          className={`aspect-square overflow-hidden rounded cursor-pointer border-2 ${activeImage === image ? 'border-[#ea384c]' : 'border-transparent'}`}
                          onClick={() => setActiveImage(image)}
                        >
                          <img 
                            src={image} 
                            alt={project.imageAlt ? project.imageAlt[index] : `${project.title} - Image ${index + 1}`} 
                            className="w-full h-full object-cover"
                            loading="lazy"
                          />
                        </div>
                      ))}
                    </div>
                    
                    {/* Project overview */}
                    <div className="prose prose-lg max-w-none">
                      <h3 className="text-xl font-semibold mb-3 flex items-center">
                        <HomeIcon className="mr-2 h-5 w-5 text-[#ea384c]" />
                        Project Overview
                      </h3>
                      <p className="text-gray-700 mb-4">
                        {project.fullDescription?.split('\n\n')[0]}
                      </p>
                      <p className="text-gray-700 mb-4">
                        {project.fullDescription?.split('\n\n')[1]}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Project details with scope and challenges */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                {/* Engineering scope */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Hammer className="mr-2 h-5 w-5 text-[#ea384c]" />
                    Structural Engineering Scope
                  </h3>
                  <ul className="space-y-3">
                    {project.fullDescription?.split('Our structural engineering scope included:')[1]
                      ?.split('The project presented')[0]
                      ?.split('\n')
                      .filter(item => item.trim())
                      .map((item, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-[#ea384c] mr-2 mt-0.5 flex-shrink-0" />
                          <span>{item.replace(/^\d+\.\s*/, '')}</span>
                        </li>
                      ))}
                  </ul>
                </div>
                
                {/* Technical challenges */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Columns className="mr-2 h-5 w-5 text-[#ea384c]" />
                    Technical Challenges & Solutions
                  </h3>
                  <ul className="space-y-3">
                    {project.fullDescription?.split('Our solutions included:')[1]
                      ?.split('This prestigious')[0]
                      ?.split('\n')
                      .filter(item => item.trim())
                      .map((item, i) => (
                        <li key={i} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-[#ea384c] mr-2 mt-0.5 flex-shrink-0" />
                          <span>{item.replace(/^-\s*/, '')}</span>
                        </li>
                      ))}
                  </ul>
                </div>
              </div>
              
              {/* Project conclusion */}
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-l-[#ea384c] mb-12">
                <div className="flex items-start">
                  <Award className="h-6 w-6 text-[#ea384c] mr-3 mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Project Outcome</h3>
                    <p className="text-gray-700">
                      {project.fullDescription?.split('This prestigious')[1]?.trim()}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Navigation buttons */}
              <ProjectNavigation prevProject={prevProject} nextProject={nextProject} />
            </div>
          </section>
          
          <ProjectGuarantee />
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
