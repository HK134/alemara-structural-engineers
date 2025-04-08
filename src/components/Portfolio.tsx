import React from 'react';
import { ArrowRight, Award, Shield, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { portfolioItems } from './PortfolioData';
import PortfolioCard from './PortfolioCard';
import { Badge } from "@/components/ui/badge";

const Portfolio = () => {
  // Get the featured project (Cheval Place) and two others for preview
  const featuredProject = portfolioItems.find(item => item.id === 16); // Cheval Place
  
  // Get specific projects for preview (excluding the featured one)
  const previewProjects = [
    portfolioItems.find(item => item.id === 15), // Halcyon Gallery
    portfolioItems.find(item => item.id === 14), // New Club project
  ].filter(Boolean);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F2C] mb-4">Our Recent Projects</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            A selection of our recent structural engineering projects across London
          </p>
        </div>
        
        {/* Featured project */}
        {featuredProject && (
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-4">
              <Badge className="bg-[#ea384c]">Featured Project</Badge>
              <h3 className="text-xl font-semibold">Latest Work</h3>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
              {/* Main image - spans 3 columns */}
              <div className="lg:col-span-3 relative overflow-hidden rounded-lg shadow-lg h-[400px]">
                <img 
                  src={featuredProject.image} 
                  alt={featuredProject.imageAlt ? featuredProject.imageAlt[0] : featuredProject.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{featuredProject.title}</h3>
                  <div className="flex items-center gap-2">
                    <span className="inline-block bg-white/20 backdrop-blur-sm text-white px-2 py-1 rounded-full text-sm">
                      {featuredProject.type.charAt(0).toUpperCase() + featuredProject.type.slice(1)}
                    </span>
                    <span className="text-white/90 text-sm">{featuredProject.completion}</span>
                  </div>
                </div>
              </div>
              
              {/* Right column with details and secondary images */}
              <div className="lg:col-span-2 flex flex-col justify-between">
                <div>
                  <p className="text-gray-700 mb-4">
                    {featuredProject.description}
                  </p>
                  
                  {/* Key features */}
                  <div className="mb-6">
                    <div className="flex items-center text-[#ea384c] mb-2">
                      <Star className="h-4 w-4 mr-1" />
                      <span className="text-sm font-semibold">Key Features</span>
                    </div>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ea384c] mt-1.5 mr-2"></span>
                        <span className="text-sm">Historic preservation with contemporary design</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ea384c] mt-1.5 mr-2"></span>
                        <span className="text-sm">Additional floor with rooftop terrace</span>
                      </li>
                      <li className="flex items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ea384c] mt-1.5 mr-2"></span>
                        <span className="text-sm">Concealed steel frame supporting open-plan living</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <Button asChild className="w-full bg-[#1A1F2C] hover:bg-[#ea384c] transition-colors">
                  <Link to={`/portfolio/${featuredProject.id}`}>
                    View Project Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
        
        {/* Other recent projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {previewProjects.map((item) => (
            <PortfolioCard key={item?.id} project={item!} />
          ))}
          {!featuredProject && previewProjects.length < 3 && (
            <PortfolioCard key={portfolioItems[2].id} project={portfolioItems[2]} />
          )}
        </div>
        
        <div className="text-center">
          <Button asChild className="inline-flex items-center bg-[#1A1F2C] hover:bg-[#ea384c] transition-colors">
            <Link to="/portfolio">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <div className="flex justify-center items-center mt-8">
            <Award className="text-[#ea384c] mr-2 h-5 w-5" />
            <p className="text-gray-600">All projects approved by local councils and building control authorities</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
