
import React from 'react';
import { ArrowRight, Award, Shield, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { getFeaturedProjects } from '@/data/projects';
import PortfolioCard from './PortfolioCard';
import { Badge } from "@/components/ui/badge";

const Portfolio = () => {
  // Get featured projects for preview, limiting to 3
  const previewProjects = getFeaturedProjects().slice(0, 3);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F2C] mb-4">Our Recent Projects</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            A selection of our recent structural engineering projects across London
          </p>
        </div>
        
        {/* Recent projects grid - with SEO optimized images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {previewProjects.map((item) => (
            <PortfolioCard key={item?.id} project={item!} />
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
