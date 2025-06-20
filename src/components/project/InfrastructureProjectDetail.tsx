
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HardHat, Award, CheckCircle, FileCheck, Calendar, MapPin, Building, Construction } from 'lucide-react';
import { Button } from "@/components/ui/button";
import ProjectImageCard from './ProjectImageCard';
import ImageLightbox from './ImageLightbox';

interface InfrastructureProjectInfoProps {
  project: {
    id: number;
    title: string;
    type: string;
    image: string;
    description: string;
    completion: string;
    client?: string;
    architect?: string;
    location?: string;
    fullDescription?: string;
    images?: string[];
    imageAlt?: string[];
  };
}

const InfrastructureProjectDetail = ({
  project
}: InfrastructureProjectInfoProps) => {
  // State for lightbox
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [lightboxCaption, setLightboxCaption] = useState<string | undefined>(undefined);

  // Determine if it's HS2 project
  const isHS2 = project.title.includes('HS2');

  // Define color schemes based on project
  const colorScheme = isHS2 ? {
    primary: '#9b87f5',
    secondary: '#7E69AB',
    accent: '#33C3F0',
    light: '#D6BCFA'
  } : {
    primary: '#ea384c',
    secondary: '#d02e40',
    accent: '#1A1F2C',
    light: '#ffebee'
  };

  // Function to open lightbox
  const openLightbox = (image: string, caption?: string) => {
    setLightboxImage(image);
    setLightboxCaption(caption);
  };

  // Get alt text for an image
  const getImageAlt = (index: number) => {
    if (project.imageAlt && project.imageAlt[index]) {
      return project.imageAlt[index];
    }
    return `${project.title} - Image ${index + 1}`;
  };

  return (
    <div className="bg-white">
      {/* Hero banner with gradient overlay */}
      <div className="w-full h-[500px] relative overflow-hidden" style={{
        background: `linear-gradient(to right, ${colorScheme.accent} 0%, ${colorScheme.primary} 100%)`
      }}>
        {project.images && project.images.length > 0 && (
          <img 
            src={project.images[0]} 
            alt={getImageAlt(0)} 
            className="w-full h-full object-cover opacity-40" 
            style={{
              objectPosition: 'center 30%'
            }}
            loading="eager"
            width="1920"
            height="1080"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <Badge className="mb-4" style={{
            backgroundColor: colorScheme.primary
          }}>
            {project.type.charAt(0).toUpperCase() + project.type.slice(1)}
          </Badge>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{project.title}</h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl">{project.description}</p>
        </div>
      </div>

      {/* Project details */}
      <div className="container mx-auto px-4 py-12">
        {/* Key project information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card className="shadow-md bg-white border-t-4" style={{
            borderTopColor: colorScheme.primary
          }}>
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <Calendar className="mr-2 h-5 w-5" style={{
                  color: colorScheme.primary
                }} />
                <h3 className="text-lg font-semibold">Project Timeline</h3>
              </div>
              <p className="text-gray-700">{project.completion}</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-md bg-white border-t-4" style={{
            borderTopColor: colorScheme.primary
          }}>
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <Building className="mr-2 h-5 w-5" style={{
                  color: colorScheme.primary
                }} />
                <h3 className="text-lg font-semibold">Client</h3>
              </div>
              <p className="text-gray-700">{project.client || 'Confidential'}</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-md bg-white border-t-4" style={{
            borderTopColor: colorScheme.primary
          }}>
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <MapPin className="mr-2 h-5 w-5" style={{
                  color: colorScheme.primary
                }} />
                <h3 className="text-lg font-semibold">Location</h3>
              </div>
              <p className="text-gray-700">{project.location}</p>
            </CardContent>
          </Card>
        </div>

        {/* HS2 project special gallery */}
        {isHS2 && (
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <Construction className="mr-3 h-7 w-7" style={{
                color: colorScheme.primary
              }} />
              <h2 className="text-2xl md:text-3xl font-bold">Project Gallery</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <ProjectImageCard 
                image="/lovable-uploads/4cf66701-a794-43d4-aa2b-151109a11333.png" 
                title="HS2 Construction Site" 
                caption="Aerial view of HS2 construction site showing extensive groundworks and rail infrastructure development" 
                onClick={() => openLightbox(
                  "/lovable-uploads/4cf66701-a794-43d4-aa2b-151109a11333.png", 
                  "Aerial view of HS2 construction site showing extensive groundworks and rail infrastructure development"
                )} 
                className="h-96" 
              />
              <ProjectImageCard 
                image="/lovable-uploads/b14325b1-4b96-4238-9f62-d04e2fb4406a.png" 
                title="HS2 Bridge Construction" 
                caption="HS2 bridge construction showing concrete span and specialized red and yellow gantry crane system" 
                onClick={() => openLightbox(
                  "/lovable-uploads/b14325b1-4b96-4238-9f62-d04e2fb4406a.png", 
                  "HS2 bridge construction showing concrete span and specialized red and yellow gantry crane system"
                )} 
                className="h-96" 
              />
            </div>
          </div>
        )}

        {/* Project overview integrated with images for Hinkley Point */}
        {project.id === 11 && (
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <HardHat className="mr-3 h-7 w-7" style={{
                color: colorScheme.primary
              }} />
              <h2 className="text-2xl md:text-3xl font-bold">Project Overview</h2>
            </div>
            
            {/* Header section with first image and introductory text */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
              <div className="prose prose-lg max-w-none">
                <p className="text-xl font-medium mb-6 text-gray-800">
                  As part of the engineering team for the landmark Hinkley Point C nuclear power station project, 
                  our structural engineering practice delivered critical expertise for this transformative UK energy 
                  infrastructure initiative.
                </p>
                <p className="mb-4 text-gray-700">
                  Our work focused on ensuring the highest standards of structural engineering and compliance,
                  contributing to the project's milestones through meticulous planning and execution.
                </p>
                {project.fullDescription?.split('\n\n').slice(0, 1).map((paragraph, index) => (
                  <p key={index} className="mb-4 text-gray-700">{paragraph}</p>
                ))}
              </div>
              
              <ProjectImageCard 
                image="/lovable-uploads/96cb7441-1400-49aa-b4ac-57a2b03e7408.png" 
                title="Hinkley Point C Aerial View" 
                caption="Aerial view of the Hinkley Point C nuclear power station construction site" 
                onClick={() => openLightbox(
                  "/lovable-uploads/96cb7441-1400-49aa-b4ac-57a2b03e7408.png", 
                  "Aerial view of the Hinkley Point C nuclear power station construction site"
                )} 
              />
            </div>
            
            {/* Big Carl Feature with new image */}
            <div className="my-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                <div className="lg:col-span-8">
                  <ProjectImageCard 
                    image="/lovable-uploads/3ed68382-f152-4207-a9a2-9c03d22055ab.png" 
                    title="Big Carl Crane at Hinkley Point C" 
                    caption="Aerial view of Big Carl, the world's largest land-based crane, operating at Hinkley Point C" 
                    onClick={() => openLightbox(
                      "/lovable-uploads/3ed68382-f152-4207-a9a2-9c03d22055ab.png", 
                      "Big Carl - The world's largest land-based crane at Hinkley Point C"
                    )} 
                    className="h-full" 
                  />
                </div>
                <div className="lg:col-span-4">
                  <div className="bg-[#1A1F2C] rounded-lg p-5 h-full flex flex-col">
                    <div className="flex items-center mb-4">
                      <Construction className="h-6 w-6 text-[#ea384c] mr-2" />
                      <h3 className="text-xl font-bold text-white">Big Carl: Engineering Marvel</h3>
                    </div>
                    <p className="text-white/90 mb-4">
                      Big Carl, the world's largest land based crane is a 250m tall and 5,000t capacity 
                      super heavy lift ring crane operating on 96 individual wheels on 6km of rails.
                    </p>
                    <p className="text-white/90 mb-4">
                      This massive engineering marvel is a critical component in the construction of Hinkley Point C, enabling 
                      the precise placement of enormous prefabricated components.
                    </p>
                    <div className="mt-auto">
                      <Button className="w-full mt-4" style={{
                        backgroundColor: colorScheme.primary
                      }} onClick={() => openLightbox(
                        "/lovable-uploads/3ed68382-f152-4207-a9a2-9c03d22055ab.png", 
                        "Big Carl - The world's largest land-based crane at Hinkley Point C"
                      )}>
                        View Full Image
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Services provided */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <FileCheck className="mr-3 h-7 w-7" style={{
              color: colorScheme.primary
            }} />
            <h2 className="text-2xl md:text-3xl font-bold">Our Services</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2 flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5" style={{
                    color: colorScheme.primary
                  }} />
                  Temporary Works Design
                </h3>
                <p className="text-gray-600">Comprehensive design solutions tailored to each construction phase, ensuring structural integrity and safety.</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2 flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5" style={{
                    color: colorScheme.primary
                  }} />
                  Site-Wide Coordination
                </h3>
                <p className="text-gray-600">Expert coordination across multiple work areas, ensuring seamless integration and workflow efficiency.</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2 flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5" style={{
                    color: colorScheme.primary
                  }} />
                  Structural Inspections
                </h3>
                <p className="text-gray-600">Thorough on-site inspections verifying construction adherence to designs, drawings, and safety standards.</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2 flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5" style={{
                    color: colorScheme.primary
                  }} />
                  Quality Assurance
                </h3>
                <p className="text-gray-600">Rigorous quality processes ensuring all works meet specifications, regulatory standards, and client expectations.</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2 flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5" style={{
                    color: colorScheme.primary
                  }} />
                  Compliance Oversight
                </h3>
                <p className="text-gray-600">Ensuring adherence to industry regulations, project specifications, and stakeholder assurances.</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2 flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5" style={{
                    color: colorScheme.primary
                  }} />
                  Detailed Reporting
                </h3>
                <p className="text-gray-600">Clear documentation and comprehensive reports tracking progress and maintaining stakeholder transparency.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Project excellence banner */}
        <div className="p-8 rounded-xl shadow-lg mb-8" style={{
          background: `linear-gradient(135deg, ${colorScheme.light} 0%, ${colorScheme.primary}40 100%)`,
          borderLeft: `4px solid ${colorScheme.primary}`
        }}>
          <div className="flex items-start space-x-4">
            <div className="bg-white p-2 rounded-full">
              <Award className="h-10 w-10" style={{
                color: colorScheme.primary
              }} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2" style={{
                color: colorScheme.accent
              }}>
                Engineering Excellence
              </h3>
              <p className="text-gray-700">
                Our work on this project underscores our expertise in delivering innovative, 
                cost-effective engineering solutions while prioritising safety, compliance, 
                and efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Lightbox for full-size images */}
      {lightboxImage && (
        <ImageLightbox 
          isOpen={!!lightboxImage} 
          onClose={() => {
            setLightboxImage(null);
            setLightboxCaption(undefined);
          }} 
          image={lightboxImage} 
          caption={lightboxCaption} 
        />
      )}
    </div>
  );
};

export default InfrastructureProjectDetail;
