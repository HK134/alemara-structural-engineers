
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HardHat, Award, CheckCircle, FileCheck, Calendar, MapPin, Building, Image, Construction } from 'lucide-react';
import { Button } from "@/components/ui/button";

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
  };
}

const InfrastructureProjectDetail = ({ project }: InfrastructureProjectInfoProps) => {
  // Determine if it's HS2 project
  const isHS2 = project.title.includes('HS2');
  
  // Define color schemes based on project
  const colorScheme = isHS2 
    ? { 
        primary: '#9b87f5', 
        secondary: '#7E69AB',
        accent: '#33C3F0',
        light: '#D6BCFA'
      } 
    : { 
        primary: '#ea384c', 
        secondary: '#d02e40',
        accent: '#1A1F2C',
        light: '#ffebee'
      };

  return (
    <div className="bg-white">
      {/* Hero banner with gradient overlay */}
      <div 
        className="w-full h-[500px] relative overflow-hidden" 
        style={{
          background: `linear-gradient(to right, ${colorScheme.accent} 0%, ${colorScheme.primary} 100%)`
        }}
      >
        {project.images && project.images.length > 0 && (
          <img 
            src={project.images[0]} 
            alt={project.title} 
            className="w-full h-full object-cover opacity-40"
            style={{ objectPosition: 'center 30%' }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <Badge className="mb-4" style={{ backgroundColor: colorScheme.primary }}>
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
          <Card className="shadow-md bg-white border-t-4" style={{ borderTopColor: colorScheme.primary }}>
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <Calendar className="mr-2 h-5 w-5" style={{ color: colorScheme.primary }} />
                <h3 className="text-lg font-semibold">Project Timeline</h3>
              </div>
              <p className="text-gray-700">{project.completion}</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-md bg-white border-t-4" style={{ borderTopColor: colorScheme.primary }}>
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <Building className="mr-2 h-5 w-5" style={{ color: colorScheme.primary }} />
                <h3 className="text-lg font-semibold">Client</h3>
              </div>
              <p className="text-gray-700">{project.client || 'Confidential'}</p>
            </CardContent>
          </Card>
          
          <Card className="shadow-md bg-white border-t-4" style={{ borderTopColor: colorScheme.primary }}>
            <CardContent className="pt-6">
              <div className="flex items-center mb-4">
                <MapPin className="mr-2 h-5 w-5" style={{ color: colorScheme.primary }} />
                <h3 className="text-lg font-semibold">Location</h3>
              </div>
              <p className="text-gray-700">{project.location}</p>
            </CardContent>
          </Card>
        </div>

        {/* Project overview integrated with images */}
        {project.id === 11 && (
          <div className="mb-16">
            <div className="flex items-center mb-8">
              <HardHat className="mr-3 h-7 w-7" style={{ color: colorScheme.primary }} />
              <h2 className="text-2xl md:text-3xl font-bold">Project Overview</h2>
            </div>
            
            {/* Big Carl Feature - Integrated into overview */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <div className="bg-gradient-to-r from-[#1A1F2C] to-[#2d3748] p-4 flex items-center">
                  <Construction className="h-6 w-6 text-[#ea384c] mr-2" />
                  <h3 className="text-xl font-bold text-white">Big Carl: Engineering Marvel</h3>
                </div>
                <img 
                  src="/lovable-uploads/6320697a-0d20-42e1-8e87-feecbcee1a71.png" 
                  alt="Big Carl crane at Hinkley Point C" 
                  className="w-full h-[300px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-[#00a8e8] bg-opacity-90 p-4">
                  <p className="text-white font-medium text-sm">
                    Big Carl, the world's largest land based crane is a 250m tall and 5,000t capacity super heavy lift ring crane operating on 96 individual wheels on 6km of rails.
                  </p>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p className="mb-4 text-gray-700">
                  This massive engineering marvel is a critical component in the construction of Hinkley Point C, enabling the precise placement of enormous prefabricated components and significantly reducing on-site construction time.
                </p>
                <p className="mb-4 text-gray-700">
                  Our structural engineering team worked closely with crane specialists to ensure the rail foundation design could support the immense weight and operational requirements.
                </p>
                {project.fullDescription?.split('\n\n').slice(0, 2).map((paragraph, index) => (
                  <p key={index} className="mb-4 text-gray-700">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            
            {/* Night Construction & More Text Content - Side by side */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="prose prose-lg max-w-none order-2 lg:order-1">
                {project.fullDescription?.split('\n\n').slice(2, 4).map((paragraph, index) => (
                  <p key={index} className="mb-4 text-gray-700">
                    {paragraph}
                  </p>
                ))}
                <div className="bg-gray-50 p-5 border-l-4 rounded-r-lg" style={{ borderLeftColor: colorScheme.primary }}>
                  <h4 className="font-bold text-lg mb-2">Technical Highlights</h4>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Specialized rail foundation design for 5,000-tonne capacity</li>
                    <li>Structural analysis for precision component placement</li>
                    <li>Safety and compliance with UK nuclear regulations</li>
                  </ul>
                </div>
              </div>
              
              <div className="relative overflow-hidden rounded-lg shadow-lg order-1 lg:order-2">
                <div className="bg-[#1A1F2C] p-4 flex items-center">
                  <Image className="h-5 w-5 text-white mr-2" />
                  <h3 className="text-lg font-semibold text-white">Night Construction Operations</h3>
                </div>
                <img 
                  src="/lovable-uploads/592dddf9-ecec-47bf-893a-cf6ceb0b395a.png" 
                  alt="Hinkley Point C Night Construction" 
                  className="w-full h-[300px] object-cover"
                />
                <Button 
                  className="absolute bottom-4 right-4" 
                  style={{ backgroundColor: colorScheme.primary }}
                >
                  View Full Gallery
                </Button>
              </div>
            </div>
            
            {/* New image with final text content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="relative overflow-hidden rounded-lg shadow-lg h-full">
                <img 
                  src="/lovable-uploads/6870975b-6e71-4ef6-b9c4-2b9d4ecdc463.png" 
                  alt="Construction site aerial view" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm p-4">
                  <p className="text-white text-sm">
                    Aerial view showcasing the scale of the Hinkley Point C construction site
                  </p>
                </div>
              </div>
              
              <div className="prose prose-lg max-w-none">
                {project.fullDescription?.split('\n\n').slice(4).map((paragraph, index) => (
                  <p key={index} className="mb-4 text-gray-700">
                    {paragraph}
                  </p>
                ))}
                <div className="flex items-center gap-2 mt-6">
                  <Badge className="px-3 py-1 text-sm" style={{ backgroundColor: colorScheme.accent, color: 'white' }}>
                    Nuclear Construction
                  </Badge>
                  <Badge className="px-3 py-1 text-sm" style={{ backgroundColor: colorScheme.accent, color: 'white' }}>
                    Heavy Lifting
                  </Badge>
                  <Badge className="px-3 py-1 text-sm" style={{ backgroundColor: colorScheme.accent, color: 'white' }}>
                    Engineering Design
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Services provided */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <FileCheck className="mr-3 h-7 w-7" style={{ color: colorScheme.primary }} />
            <h2 className="text-2xl md:text-3xl font-bold">Our Services</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2 flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5" style={{ color: colorScheme.primary }} />
                  Temporary Works Design
                </h3>
                <p className="text-gray-600">Comprehensive design solutions tailored to each construction phase, ensuring structural integrity and safety.</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2 flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5" style={{ color: colorScheme.primary }} />
                  Site-Wide Coordination
                </h3>
                <p className="text-gray-600">Expert coordination across multiple work areas, ensuring seamless integration and workflow efficiency.</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2 flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5" style={{ color: colorScheme.primary }} />
                  Structural Inspections
                </h3>
                <p className="text-gray-600">Thorough on-site inspections verifying construction adherence to designs, drawings, and safety standards.</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2 flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5" style={{ color: colorScheme.primary }} />
                  Quality Assurance
                </h3>
                <p className="text-gray-600">Rigorous quality processes ensuring all works meet specifications, regulatory standards, and client expectations.</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2 flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5" style={{ color: colorScheme.primary }} />
                  Compliance Oversight
                </h3>
                <p className="text-gray-600">Ensuring adherence to industry regulations, project specifications, and stakeholder assurances.</p>
              </CardContent>
            </Card>
            
            <Card className="shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <h3 className="font-semibold text-lg mb-2 flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5" style={{ color: colorScheme.primary }} />
                  Detailed Reporting
                </h3>
                <p className="text-gray-600">Clear documentation and comprehensive reports tracking progress and maintaining stakeholder transparency.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Project excellence banner */}
        <div 
          className="p-8 rounded-xl shadow-lg mb-8" 
          style={{ 
            background: `linear-gradient(135deg, ${colorScheme.light} 0%, ${colorScheme.primary}40 100%)`,
            borderLeft: `4px solid ${colorScheme.primary}`
          }}
        >
          <div className="flex items-start space-x-4">
            <div className="bg-white p-2 rounded-full">
              <Award className="h-10 w-10" style={{ color: colorScheme.primary }} />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2" style={{ color: colorScheme.accent }}>
                Engineering Excellence
              </h3>
              <p className="text-gray-700">
                Our work on this project underscores our expertise in delivering innovative, 
                cost-effective engineering solutions while prioritising safety, compliance, 
                and efficiency. Through our dedicated approach, we support the successful 
                progression of critical infrastructure works, reinforcing our reputation 
                as a trusted engineering partner for large-scale projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfrastructureProjectDetail;
