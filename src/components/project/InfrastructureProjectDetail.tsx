
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HardHat, Award, CheckCircle, FileCheck, Calendar, MapPin, Building, Image } from 'lucide-react';

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

        {/* Featured Image Section */}
        {project.id === 11 && (
          <div className="mb-16 rounded-lg overflow-hidden shadow-xl">
            <div className="bg-[#1A1F2C] p-4 flex items-center">
              <Image className="mr-2 h-5 w-5 text-white" />
              <h3 className="text-lg font-semibold text-white">Night Construction Operations</h3>
            </div>
            <img 
              src="/lovable-uploads/592dddf9-ecec-47bf-893a-cf6ceb0b395a.png" 
              alt="Hinkley Point C Night Construction" 
              className="w-full h-auto object-cover"
            />
            <div className="bg-gray-50 p-4 text-sm text-gray-600 italic">
              Night view of the Hinkley Point C construction site showing extensive crane operations and reinforcement work
            </div>
          </div>
        )}

        {/* Project overview */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <HardHat className="mr-3 h-7 w-7" style={{ color: colorScheme.primary }} />
            <h2 className="text-2xl md:text-3xl font-bold">Project Overview</h2>
          </div>
          
          <div className="prose prose-lg max-w-none">
            {project.fullDescription?.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4 text-gray-700">
                {paragraph}
              </p>
            ))}
          </div>
        </div>

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
