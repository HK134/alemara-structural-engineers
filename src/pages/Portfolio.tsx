
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { portfolioItems } from '@/data/projects';
import { Helmet } from "react-helmet";
import ServiceCTA from '@/components/services/ServiceCTA';
import { Link } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building, Home, HardHat } from 'lucide-react';
import PortfolioGridCard from '@/components/PortfolioGridCard';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('all');
  
  // Filter projects based on active tab
  const filteredProjects = activeTab === 'all' 
    ? portfolioItems
    : portfolioItems.filter(item => item.type === activeTab);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Portfolio | London Structural Surveys | Engineering Projects</title>
        <meta name="description" content="Explore our portfolio of structural engineering projects across London, including residential extensions, commercial renovations, and civil engineering work." />
        <meta name="keywords" content="structural engineering projects, London engineering portfolio, residential extensions, commercial structural work, civil engineering projects" />
        <link rel="canonical" href="https://londonstructuralsurveys.com/portfolio" />
      </Helmet>
      
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
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">All Projects</h2>
            <p className="text-gray-600 text-center mb-12">Browse our complete portfolio of structural engineering work</p>
            
            <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <div className="flex justify-center mb-12">
                <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-2">
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
                  <TabsTrigger value="civil" className="flex items-center gap-2">
                    <HardHat className="h-4 w-4" />
                    <span>Civil</span>
                  </TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value={activeTab} className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {filteredProjects.map(project => (
                    <PortfolioGridCard key={project.id} project={project} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        <ServiceCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
