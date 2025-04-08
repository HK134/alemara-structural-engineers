
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  HardHat, 
  Award, 
  CheckCircle, 
  FileCheck, 
  Calendar, 
  MapPin, 
  Building, 
  Construction, 
  Home,
  Briefcase
} from 'lucide-react';
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

  // Determine project type and set appropriate color scheme
  const getProjectTypeConfig = () => {
    switch (project.type) {
      case 'civil':
        return {
          icon: <Construction className="mr-2 h-5 w-5" />,
          colorScheme: {
            primary: '#ea384c',
            secondary: '#d02e40',
            accent: '#1A1F2C',
            light: '#ffebee'
          }
        };
      case 'commercial':
        return {
          icon: <Briefcase className="mr-2 h-5 w-5" />,
          colorScheme: {
            primary: '#3861ea',
            secondary: '#2e45d0',
            accent: '#1A1F2C',
            light: '#ebf0ff'
          }
        };
      case 'residential':
      default:
        return {
          icon: <Home className="mr-2 h-5 w-5" />,
          colorScheme: {
            primary: '#38b2ea',
            secondary: '#2e9cd0',
            accent: '#1A1F2C',
            light: '#ebf9ff'
          }
        };
    }
  };

  const { icon, colorScheme } = getProjectTypeConfig();

  // Special handling for specific projects
  const isHS2 = project.id === 12;
  const isHinkleyPoint = project.id === 11;

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

  // Get an image for display, or use the first available fallback
  const getDisplayImage = (index: number = 0) => {
    if (project.images && project.images.length > index) {
      return project.images[index];
    } else if (project.image) {
      return project.image;
    } else {
      return '/lovable-uploads/1f9708d9-de83-4362-9b30-7fafe295163c.png'; // Fallback image
    }
  };

  return (
    <div className="bg-white">
      {/* Hero banner with gradient overlay */}
      <div className="w-full h-[500px] relative overflow-hidden" style={{
        background: `linear-gradient(to right, ${colorScheme.accent} 0%, ${colorScheme.primary} 100%)`
      }}>
        <img 
          src={getDisplayImage(0)} 
          alt={getImageAlt(0)} 
          className="w-full h-full object-cover opacity-40" 
          style={{
            objectPosition: 'center 30%'
          }}
          loading="eager"
          width="1920"
          height="1080"
        />
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
                {project.architect ? (
                  <>
                    <Building className="mr-2 h-5 w-5" style={{
                      color: colorScheme.primary
                    }} />
                    <h3 className="text-lg font-semibold">Architect</h3>
                  </>
                ) : (
                  <>
                    <Building className="mr-2 h-5 w-5" style={{
                      color: colorScheme.primary
                    }} />
                    <h3 className="text-lg font-semibold">Client</h3>
                  </>
                )}
              </div>
              <p className="text-gray-700">{project.architect || project.client || 'Confidential'}</p>
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
              <p className="text-gray-700">{project.location || 'London'}</p>
            </CardContent>
          </Card>
        </div>

        {/* Project gallery section */}
        {project.images && project.images.length > 1 && (
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <Construction className="mr-3 h-7 w-7" style={{
                color: colorScheme.primary
              }} />
              <h2 className="text-2xl md:text-3xl font-bold">Project Gallery</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {project.images.slice(0, 4).map((image, index) => (
                <ProjectImageCard 
                  key={index}
                  image={image} 
                  title={`${project.title} - Image ${index + 1}`} 
                  caption={project.imageAlt?.[index] || `${project.title} - Detail view ${index + 1}`} 
                  onClick={() => openLightbox(
                    image, 
                    project.imageAlt?.[index]
                  )} 
                  className="h-80" 
                />
              ))}
            </div>
          </div>
        )}

        {/* Project overview - show for all projects with fullDescription */}
        {project.fullDescription && (
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <FileCheck className="mr-3 h-7 w-7" style={{
                color: colorScheme.primary
              }} />
              <h2 className="text-2xl md:text-3xl font-bold">Project Overview</h2>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
              <div className="prose prose-lg max-w-none">
                {project.fullDescription?.split('\n\n').slice(0, 2).map((paragraph, index) => (
                  <p key={index} className="mb-4 text-gray-700">{paragraph}</p>
                ))}
              </div>
              
              {project.images && project.images.length > 0 && (
                <ProjectImageCard 
                  image={project.images[0]} 
                  title={project.title} 
                  caption={project.imageAlt?.[0] || `${project.title} main view`} 
                  onClick={() => openLightbox(
                    project.images![0], 
                    project.imageAlt?.[0]
                  )} 
                />
              )}
            </div>
            
            {/* Additional paragraphs */}
            <div className="mt-8">
              {project.fullDescription?.split('\n\n').slice(2).map((paragraph, index) => (
                <p key={index + 2} className="mb-4 text-gray-700">{paragraph}</p>
              ))}
            </div>
          </div>
        )}

        {/* Services provided */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <CheckCircle className="mr-3 h-7 w-7" style={{
              color: colorScheme.primary
            }} />
            <h2 className="text-2xl md:text-3xl font-bold">Our Services</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {getServiceCards(project, colorScheme)}
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

// Helper function to generate service cards based on project type
const getServiceCards = (project: any, colorScheme: any) => {
  // Default services for all project types
  const defaultServices = [
    {
      title: "Structural Assessment",
      description: "Comprehensive analysis of existing structures to evaluate integrity, safety, and compliance with building codes."
    },
    {
      title: "Design Solutions",
      description: "Tailored engineering designs that balance technical requirements with aesthetic considerations and budget constraints."
    },
    {
      title: "Technical Documentation",
      description: "Detailed drawings, calculations, and specifications for planning approval and construction guidance."
    }
  ];

  // Additional services based on project type
  const typeSpecificServices = {
    residential: [
      {
        title: "Renovation Support",
        description: "Engineering guidance for property renovations, including removal of load-bearing walls and floor strengthening."
      },
      {
        title: "Extension Design",
        description: "Structural designs for home extensions, ensuring seamless integration with existing structures."
      },
      {
        title: "Building Regulations Compliance",
        description: "Expert assistance in meeting all relevant building regulations and obtaining necessary approvals."
      }
    ],
    commercial: [
      {
        title: "Space Optimization",
        description: "Structural solutions that maximize usable space while maintaining building integrity and safety."
      },
      {
        title: "Compliance Management",
        description: "Ensuring all work meets commercial building regulations and safety standards."
      },
      {
        title: "Retrofit Solutions",
        description: "Engineering designs to update and strengthen existing commercial structures."
      }
    ],
    civil: [
      {
        title: "Site-Wide Coordination",
        description: "Expert coordination across multiple work areas, ensuring seamless integration and workflow efficiency."
      },
      {
        title: "Quality Assurance",
        description: "Rigorous quality processes ensuring all works meet specifications, regulatory standards, and client expectations."
      },
      {
        title: "Compliance Oversight",
        description: "Ensuring adherence to industry regulations, project specifications, and stakeholder assurances."
      }
    ]
  };

  // Combine default services with type-specific services
  const projectTypeServices = typeSpecificServices[project.type as keyof typeof typeSpecificServices] || [];
  const services = [...defaultServices, ...projectTypeServices];

  // Return the service cards JSX
  return services.slice(0, 6).map((service, index) => (
    <Card key={index} className="shadow-sm hover:shadow-md transition-shadow">
      <CardContent className="pt-6">
        <h3 className="font-semibold text-lg mb-2 flex items-center">
          <CheckCircle className="mr-2 h-5 w-5" style={{
            color: colorScheme.primary
          }} />
          {service.title}
        </h3>
        <p className="text-gray-600">{service.description}</p>
      </CardContent>
    </Card>
  ));
};

export default InfrastructureProjectDetail;
