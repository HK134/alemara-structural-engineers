
import React from 'react';
import { ArrowRight, Award, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";

const portfolioItems = [
  {
    id: 1,
    title: 'Structural Engineering for Carlton Road Extension',
    type: 'Residential',
    image: '/lovable-uploads/96cb7441-1400-49aa-b4ac-57a2b03e7408.png',
    description: 'Comprehensive structural engineering for a sophisticated rear extension featuring steel support solutions and specialized foundation design.'
  },
  {
    id: 11,
    title: 'Hinkley Point C Nuclear Power Station',
    type: 'Civil',
    image: '/lovable-uploads/592dddf9-ecec-47bf-893a-cf6ceb0b395a.png',
    description: 'Structural engineering and temporary works design for the UK\'s first new nuclear power station in a generation.'
  },
  {
    id: 12,
    title: 'HS2 High Speed Rail Infrastructure',
    type: 'Civil',
    image: 'https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80&w=800&h=500',
    description: 'Expert engineering and assurance services for key HS2 packages across London and Central areas, delivering innovative solutions for the UK\'s new high-speed rail network.'
  }
];

const Portfolio = () => {
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
          {portfolioItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg overflow-hidden shadow-md transition-transform hover:shadow-lg hover:-translate-y-1">
              <div className="h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="inline-block bg-[#ea384c]/10 text-[#ea384c] text-xs font-semibold px-2 py-1 rounded-full">
                    {item.type}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-[#1A1F2C] mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
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
