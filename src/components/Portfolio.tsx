
import React from 'react';
import { ArrowRight, Award, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { portfolioItems } from './PortfolioData';

const Portfolio = () => {
  // Get first 3 projects for preview
  const previewProjects = [
    portfolioItems.find(item => item.id === 13), // Warrington Crescent (new project)
    portfolioItems.find(item => item.id === 1),  // Carlton Road
    portfolioItems.find(item => item.id === 11)  // Hinkley Point C
  ].filter(Boolean);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F2C] mb-4">Our Recent Projects</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            A selection of our recent structural engineering projects across London
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {previewProjects.map((item) => (
            <div key={item?.id} className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
              <div className="h-48 overflow-hidden">
                <img 
                  src={item?.images && item.images.length > 0 ? item.images[0] : item?.image} 
                  alt={item?.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = 'https://images.unsplash.com/photo-1493397212122-2b85dda8106b?auto=format&fit=crop&q=80&w=800&h=500';
                  }}
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="inline-block bg-[#ea384c]/10 text-[#ea384c] text-xs font-semibold px-2 py-1 rounded-full">
                    {item?.type.charAt(0).toUpperCase() + item?.type.slice(1)}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-[#1A1F2C] mb-2">{item?.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{item?.description}</p>
                <Button variant="outline" size="sm" className="text-[#1A1F2C] hover:bg-[#ea384c] hover:text-white" asChild>
                  <Link to={`/portfolio/${item?.id}`}>View Project</Link>
                </Button>
              </div>
            </div>
          ))}
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
