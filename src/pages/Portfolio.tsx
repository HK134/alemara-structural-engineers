
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
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6;
  
  // Filter projects based on active tab
  const filteredProjects = activeTab === 'all' 
    ? portfolioItems
    : portfolioItems.filter(item => item.type === activeTab);
  
  // Calculate pagination
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirstProject, indexOfLastProject);
  
  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Scroll to top when changing pages
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  // Reset to page 1 when changing tabs
  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setCurrentPage(1);
  };
  
  // Generate pagination items
  const renderPaginationItems = () => {
    const items = [];
    
    // First page
    if (currentPage > 3) {
      items.push(
        <PaginationItem key="first">
          <PaginationLink onClick={() => handlePageChange(1)}>1</PaginationLink>
        </PaginationItem>
      );
      
      if (currentPage > 4) {
        items.push(
          <PaginationItem key="ellipsis-1">
            <span className="px-4">...</span>
          </PaginationItem>
        );
      }
    }
    
    // Pages around current page
    for (let i = Math.max(1, currentPage - 1); i <= Math.min(totalPages, currentPage + 1); i++) {
      items.push(
        <PaginationItem key={i}>
          <PaginationLink 
            isActive={currentPage === i} 
            onClick={() => handlePageChange(i)}
          >
            {i}
          </PaginationLink>
        </PaginationItem>
      );
    }
    
    // Last page
    if (currentPage < totalPages - 2) {
      if (currentPage < totalPages - 3) {
        items.push(
          <PaginationItem key="ellipsis-2">
            <span className="px-4">...</span>
          </PaginationItem>
        );
      }
      
      items.push(
        <PaginationItem key="last">
          <PaginationLink onClick={() => handlePageChange(totalPages)}>
            {totalPages}
          </PaginationLink>
        </PaginationItem>
      );
    }
    
    return items;
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  {currentProjects.map(project => (
                    <PortfolioGridCard key={project.id} project={project} />
                  ))}
                </div>
                
                {totalPages > 1 && (
                  <Pagination className="mt-12">
                    <PaginationContent>
                      {currentPage > 1 && (
                        <PaginationItem>
                          <PaginationPrevious onClick={() => handlePageChange(currentPage - 1)} />
                        </PaginationItem>
                      )}
                      
                      {renderPaginationItems()}
                      
                      {currentPage < totalPages && (
                        <PaginationItem>
                          <PaginationNext onClick={() => handlePageChange(currentPage + 1)} />
                        </PaginationItem>
                      )}
                    </PaginationContent>
                  </Pagination>
                )}
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
