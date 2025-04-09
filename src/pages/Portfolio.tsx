
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building, Home, HardHat, Shield, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import ServiceCTA from '@/components/services/ServiceCTA';
import PortfolioCard from '@/components/PortfolioCard';
import { portfolioItems } from '@/data/projects';
import { Button } from "@/components/ui/button";
import { Helmet } from "react-helmet";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from 'react-router-dom';

const PROJECTS_PER_PAGE = 6;

const Portfolio = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState('all');
  
  // Filter projects based on active tab
  const filteredProjects = activeTab === 'all' 
    ? portfolioItems
    : portfolioItems.filter(item => item.type === activeTab);
  
  // Calculate pagination
  const totalPages = Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE);
  const indexOfLastProject = currentPage * PROJECTS_PER_PAGE;
  const indexOfFirstProject = indexOfLastProject - PROJECTS_PER_PAGE;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
  
  // Handle tab change
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setCurrentPage(1);
  };
  
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
            <div className="mt-8">
              <Link to="/portfolio-alternative" className="text-white hover:text-[#ea384c] underline transition-colors">
                View Alternative Layout
              </Link>
            </div>
          </div>
        </section>
        
        {/* Portfolio filters */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">All Projects</h2>
            <p className="text-gray-600 text-center mb-12">Browse our complete portfolio of structural engineering work</p>
            
            <Tabs defaultValue="all" value={activeTab} onValueChange={handleTabChange} className="w-full">
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {currentProjects.map(item => (
                    <PortfolioCard key={item.id} project={item} />
                  ))}
                </div>
                
                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex justify-center items-center gap-2 mt-12">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                      disabled={currentPage === 1}
                      aria-label="Previous page"
                    >
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    
                    <div className="flex items-center gap-1">
                      {Array.from({ length: totalPages }, (_, i) => (
                        <Button
                          key={i + 1}
                          variant={currentPage === i + 1 ? "default" : "outline"}
                          size="sm"
                          onClick={() => setCurrentPage(i + 1)}
                          aria-label={`Page ${i + 1}`}
                          aria-current={currentPage === i + 1 ? "page" : undefined}
                        >
                          {i + 1}
                        </Button>
                      ))}
                    </div>
                    
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                      disabled={currentPage === totalPages}
                      aria-label="Next page"
                    >
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                )}
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

export default Portfolio;
