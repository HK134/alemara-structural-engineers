import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Building, Home, Building2, HardHat, Shield } from 'lucide-react';
import ServiceCTA from '@/components/services/ServiceCTA';
import { Card, CardContent } from "@/components/ui/card";

const portfolioItems = [
  // Featured project - Baron's Court
  {
    id: 10,
    title: 'Basement Extension & Layout Restructuring - Baron\'s Court',
    type: 'residential',
    image: '/lovable-uploads/cafbd1f2-5b5f-43be-863d-d27c2cf90647.png',
    description: 'Intricate basement extension with zinc clad box design, underpinning of garden walls, and comprehensive internal layout restructuring within a conservation area.',
    completion: 'March 2023',
    featured: true,
    architect: 'Rees + Lee Architects',
    location: 'Barons Court, London',
    images: [
      '/lovable-uploads/cafbd1f2-5b5f-43be-863d-d27c2cf90647.png',
      '/lovable-uploads/166ee5b4-8ac0-46c2-9263-76801c951d68.png',
      '/lovable-uploads/62838626-e1ef-4f46-b6bb-a32e7377b8ad.png',
      '/lovable-uploads/50ac03f3-8f8c-4231-a2cf-95af7347b69b.png',
      '/lovable-uploads/85e76aa6-f5d7-45d2-b062-f699968e882e.png',
      '/lovable-uploads/ec396354-e997-4369-ae73-f2c0793ff32f.png',
      '/lovable-uploads/0dfcb21d-fb3b-4178-b3d5-c4fd7069db52.png',
      '/lovable-uploads/1bbc38ef-f8f1-413f-b6b0-c67d8349dbcf.png',
      '/lovable-uploads/7206c33e-ff71-4117-8c22-9c0a6572c105.png',
    ],
    fullDescription: `Rees + Lee Architects had successfully obtained planning approval from Hammersmith & Fulham Council for this intricate basement extension and internal layout restructuring scheme in the Barons Court conservation area. The unique project proposed a zinc clad box below a new roof terrace requiring a box frame design.

The project also included new foundations, underpinning of garden walls and staircase. Prior to providing a final structural package, we visited the site to inspect the existing structure and discuss our ideas with the architect and the client. Following the site visit, a schematic structural design was provided, and once confirmed, the final full package was released.`
  },
  
  // Existing projects
  // Residential projects
  {
    id: 1,
    title: 'Structural Reinforcement - Kensington',
    type: 'residential',
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=800&h=500',
    description: 'Complete basement reinforcement for a Victorian property, including steel beam installation and load-bearing wall modifications.',
    completion: 'January 2023'
  },
  {
    id: 2,
    title: 'Loft Conversion - Richmond',
    type: 'residential',
    image: 'https://images.unsplash.com/photo-1551038247-3d9af20df552?auto=format&fit=crop&q=80&w=800&h=500',
    description: 'Structural design for loft conversion including dormer windows and reinforced floor structure.',
    completion: 'March 2023'
  },
  {
    id: 3,
    title: 'Side Return Extension - Islington',
    type: 'residential',
    image: 'https://images.unsplash.com/photo-1433832597046-4f10e10ac764?auto=format&fit=crop&q=80&w=800&h=500',
    description: 'Structural calculations and design for a glass-roofed side return extension with steel frame.',
    completion: 'May 2023'
  },
  
  // Commercial projects
  {
    id: 4,
    title: 'Commercial Office Building - City of London',
    type: 'commercial',
    image: 'https://images.unsplash.com/photo-1486718448742-163732cd1544?auto=format&fit=crop&q=80&w=800&h=500',
    description: 'Structural assessment and remediation strategy for an 8-storey office building with subsidence concerns.',
    completion: 'February 2023'
  },
  {
    id: 5,
    title: 'Retail Space Conversion - Shoreditch',
    type: 'commercial',
    image: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&q=80&w=800&h=500',
    description: 'Conversion of warehouse to open plan retail space, including removal of load-bearing columns and installation of steel beams.',
    completion: 'June 2023'
  },
  
  // Multi-residential projects
  {
    id: 6,
    title: 'Apartment Complex - Canary Wharf',
    type: 'multi-residential',
    image: 'https://images.unsplash.com/photo-1551038247-3d9af20df552?auto=format&fit=crop&q=80&w=800&h=500',
    description: 'Comprehensive structural calculations and design for a new 12-unit apartment complex, including foundation specifications.',
    completion: 'April 2023'
  },
  {
    id: 7,
    title: 'Student Accommodation - Greenwich',
    type: 'multi-residential',
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=800&h=500',
    description: 'Structural design for a 40-unit student accommodation building, focusing on efficient space utilization and safety compliance.',
    completion: 'July 2023'
  },
  
  // Civil engineering projects
  {
    id: 8,
    title: 'Bridge Reinforcement - Hammersmith',
    type: 'civil',
    image: 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&q=80&w=800&h=500',
    description: 'Assessment and reinforcement design for a pedestrian bridge showing signs of structural fatigue.',
    completion: 'January 2023'
  },
  {
    id: 9,
    title: 'Flood Defense System - Richmond Riverside',
    type: 'civil',
    image: 'https://images.unsplash.com/photo-1433832597046-4f10e10ac764?auto=format&fit=crop&q=80&w=800&h=500',
    description: 'Design of reinforced concrete flood defense system to protect riverside properties.',
    completion: 'August 2023'
  }
];

const Portfolio = () => {
  const featuredProject = portfolioItems.find(item => item.featured);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero section */}
        <section className="bg-[#1A1F2C] text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
            <p className="text-xl max-w-3xl">
              Explore our structural engineering projects across London, showcasing our expertise in residential, commercial, and civil engineering.
            </p>
          </div>
        </section>
        
        {/* Featured Project */}
        {featuredProject && (
          <section className="py-16 bg-white border-b border-gray-100">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">Featured Project</h2>
              <p className="text-gray-600 text-center mb-12">Our latest structural engineering challenge</p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <img 
                    src={featuredProject.image} 
                    alt={featuredProject.title} 
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    <span className="inline-block bg-[#ea384c]/10 text-[#ea384c] text-sm font-semibold px-3 py-1 rounded-full">
                      {featuredProject.type.charAt(0).toUpperCase() + featuredProject.type.slice(1)}
                    </span>
                    <span className="text-sm text-gray-500">{featuredProject.completion}</span>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{featuredProject.title}</h3>
                  <p className="text-lg mb-6">{featuredProject.description}</p>
                  
                  {featuredProject.architect && (
                    <div className="mb-2">
                      <span className="font-semibold">Architect:</span> {featuredProject.architect}
                    </div>
                  )}
                  
                  {featuredProject.location && (
                    <div className="mb-6">
                      <span className="font-semibold">Location:</span> {featuredProject.location}
                    </div>
                  )}
                  
                  <Button className="bg-[#1A1F2C] hover:bg-[#ea384c]">
                    View Project Details
                  </Button>
                </div>
              </div>
              
              {featuredProject.fullDescription && (
                <div className="mt-12 max-w-4xl mx-auto">
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="text-xl font-semibold mb-4">Project Overview</h4>
                      <p className="text-gray-700 whitespace-pre-line">{featuredProject.fullDescription}</p>
                    </CardContent>
                  </Card>
                </div>
              )}
              
              {/* Image gallery */}
              {featuredProject.images && featuredProject.images.length > 1 && (
                <div className="mt-12">
                  <h4 className="text-xl font-semibold mb-6 text-center">Project Gallery</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {featuredProject.images.slice(1, 7).map((image, index) => (
                      <div key={index} className="aspect-[4/3] overflow-hidden rounded-lg shadow-md">
                        <img 
                          src={image} 
                          alt={`${featuredProject.title} - Image ${index + 2}`} 
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </section>
        )}
        
        {/* Portfolio filters */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">All Projects</h2>
            <p className="text-gray-600 text-center mb-12">Browse our complete portfolio of structural engineering work</p>
            
            <Tabs defaultValue="all" className="w-full">
              <div className="flex justify-center mb-12">
                <TabsList className="grid grid-cols-2 md:grid-cols-5 gap-2">
                  <TabsTrigger value="all" className="flex items-center gap-2">
                    <Building className="h-4 w-4" />
                    <span>All Projects</span>
                  </TabsTrigger>
                  <TabsTrigger value="residential" className="flex items-center gap-2">
                    <Home className="h-4 w-4" />
                    <span>Residential</span>
                  </TabsTrigger>
                  <TabsTrigger value="commercial" className="flex items-center gap-2">
                    <Building className="h-4 w-4" />
                    <span>Commercial</span>
                  </TabsTrigger>
                  <TabsTrigger value="multi-residential" className="flex items-center gap-2">
                    <Building2 className="h-4 w-4" />
                    <span>Multi-Residential</span>
                  </TabsTrigger>
                  <TabsTrigger value="civil" className="flex items-center gap-2">
                    <HardHat className="h-4 w-4" />
                    <span>Civil</span>
                  </TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="all" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {portfolioItems.filter(item => !item.featured).map(item => (
                    <PortfolioCard key={item.id} project={item} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="residential" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {portfolioItems.filter(item => item.type === 'residential' && !item.featured).map(item => (
                    <PortfolioCard key={item.id} project={item} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="commercial" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {portfolioItems.filter(item => item.type === 'commercial').map(item => (
                    <PortfolioCard key={item.id} project={item} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="multi-residential" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {portfolioItems.filter(item => item.type === 'multi-residential').map(item => (
                    <PortfolioCard key={item.id} project={item} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="civil" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {portfolioItems.filter(item => item.type === 'civil').map(item => (
                    <PortfolioCard key={item.id} project={item} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Project delivery guarantee */}
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

interface ProjectProps {
  project: {
    id: number;
    title: string;
    type: string;
    image: string;
    description: string;
    completion: string;
    featured?: boolean;
    architect?: string;
    location?: string;
    images?: string[];
    fullDescription?: string;
  };
}

const PortfolioCard = ({ project }: ProjectProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all hover:shadow-lg hover:-translate-y-1">
      <div className="h-56 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="inline-block bg-[#ea384c]/10 text-[#ea384c] text-xs font-semibold px-2 py-1 rounded-full">
            {project.type.charAt(0).toUpperCase() + project.type.slice(1)}
          </span>
          <span className="text-xs text-gray-500">{project.completion}</span>
        </div>
        <h3 className="text-xl font-semibold text-[#1A1F2C] mb-3">{project.title}</h3>
        <p className="text-gray-600 mb-4">{project.description}</p>
        <Button variant="outline" size="sm" className="text-[#1A1F2C] hover:bg-[#ea384c] hover:text-white">
          View Details
        </Button>
      </div>
    </div>
  );
};

export default Portfolio;
