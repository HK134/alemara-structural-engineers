
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ArrowLeft, ArrowRight, Shield, ExternalLink, X } from 'lucide-react';
import ServiceCTA from '@/components/services/ServiceCTA';
import { portfolioItems } from '@/components/PortfolioData';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel";

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Main project image */}
              <div>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-auto rounded-lg shadow-lg"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    console.error(`Failed to load image: ${target.src}`);
                    target.onerror = null;
                    target.src = 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&q=80&w=800&h=500';
                  }}
                />
              </div>
              
              {/* Project info */}
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <span className="inline-block bg-[#ea384c]/10 text-[#ea384c] text-sm font-semibold px-3 py-1 rounded-full">
                    {project.type.charAt(0).toUpperCase() + project.type.slice(1)}
                  </span>
                  <span className="text-sm text-gray-500">{project.completion}</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{project.title}</h3>
                <p className="text-lg mb-6">{project.description}</p>
                
                {project.architect && (
                  <div className="mb-2">
                    <span className="font-semibold">Architect:</span> {project.architect}
                  </div>
                )}
                
                {project.location && (
                  <div className="mb-6">
                    <span className="font-semibold">Location:</span> {project.location}
                  </div>
                )}
              </div>
            </div>
            
            {project.fullDescription && (
              <div className="mt-12 max-w-4xl mx-auto">
                <Card>
                  <CardContent className="p-6">
                    <h4 className="text-xl font-semibold mb-4">Project Overview</h4>
                    <p className="text-gray-700 whitespace-pre-line">
                      {project.fullDescription}
                    </p>
                  </CardContent>
                </Card>
              </div>
            )}
            
            {/* Image gallery with carousel */}
            {project.images && project.images.length > 0 && (
              <div className="mt-12">
                <h4 className="text-xl font-semibold mb-6 text-center">Project Gallery</h4>
                
                {/* Image Carousel */}
                <div className="max-w-4xl mx-auto px-10">
                  <Carousel className="w-full">
                    <CarouselContent>
                      {project.images.map((image: string, index: number) => (
                        <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                          <div 
                            className="p-1 h-full aspect-[4/3]"
                            onClick={() => setSelectedImage(image)}
                          >
                            <div className="h-full overflow-hidden rounded-lg cursor-pointer">
                              <img 
                                src={image} 
                                alt={`${project.title} - Image ${index + 1}`}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.onerror = null;
                                  target.src = 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&q=80&w=800&h=500';
                                }}
                              />
                            </div>
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden md:flex" />
                    <CarouselNext className="hidden md:flex" />
                  </Carousel>
                </div>
                
                {/* Thumbnail gallery for smaller screens and as alternative */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                  {project.images.slice(0, 8).map((image: string, index: number) => (
                    <div 
                      key={index} 
                      className="aspect-[4/3] overflow-hidden rounded-lg shadow-md cursor-pointer"
                      onClick={() => setSelectedImage(image)}
                    >
                      <img 
                        src={image} 
                        alt={`${project.title} - Image ${index + 1}`} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.onerror = null;
                          target.src = 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&q=80&w=800&h=500';
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Image lightbox/modal */}
            <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
              <DialogContent className="max-w-5xl p-2 bg-black border-none">
                {selectedImage && (
                  <div className="relative">
                    <img 
                      src={selectedImage} 
                      alt="Project image" 
                      className="w-full h-auto max-h-[80vh] object-contain"
                    />
                    <Button
                      variant="ghost"
                      size="icon" 
                      className="absolute top-2 right-2 bg-black/20 hover:bg-black/40 text-white rounded-full"
                      onClick={() => setSelectedImage(null)}
                    >
                      <X className="h-4 w-4" />
                      <span className="sr-only">Close</span>
                    </Button>
                  </div>
                )}
              </DialogContent>
            </Dialog>
            
            {/* Navigation buttons */}
            <div className="flex justify-between mt-12">
              {prevProject ? (
                <Button variant="outline" className="flex items-center gap-2" asChild>
                  <Link to={`/portfolio/${prevProject.id}`}>
                    <ArrowLeft size={16} /> Previous Project
                  </Link>
                </Button>
              ) : (
                <div></div> // Empty div to maintain layout when there's no previous project
              )}
              
              {nextProject ? (
                <Button variant="outline" className="flex items-center gap-2" asChild>
                  <Link to={`/portfolio/${nextProject.id}`}>
                    Next Project <ArrowRight size={16} />
                  </Link>
                </Button>
              ) : (
                <div></div> // Empty div to maintain layout when there's no next project
              )}
            </div>
          </div>
        </section>
        
        {/* Project delivery guarantee section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-4">
                <Shield className="h-12 w-12 text-[#ea384c]" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Project Delivery Guarantee</h2>
              <p className="text-lg text-gray-700 mb-6">
                Every engineering project we undertake is completed with rigorous attention to detail, 
                ensuring timely delivery and 100% building control approval. Our designs optimize both 
                safety and cost-efficiency, backed by professional indemnity insurance.
              </p>
              <div className="inline-block bg-gray-50 p-4 rounded-lg border border-gray-200">
                <p className="font-semibold text-[#1A1F2C]">
                  All projects showcased have received full approval from relevant London borough authorities.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <ServiceCTA />
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
