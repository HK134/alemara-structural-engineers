
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Building, Home, Building2, HardHat, Shield } from 'lucide-react';
import ServiceCTA from '@/components/services/ServiceCTA';

const portfolioItems = [
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
        
        {/* Portfolio filters */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
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
                  {portfolioItems.map(item => (
                    <PortfolioCard key={item.id} project={item} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="residential" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {portfolioItems.filter(item => item.type === 'residential').map(item => (
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
        <section className="py-12 bg-gray-50">
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
              <div className="inline-block bg-white p-4 rounded-lg border border-gray-200">
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
