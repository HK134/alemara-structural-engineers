
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Home, Warehouse, PencilRuler, Building, Search } from "lucide-react";

interface ServiceHeaderProps {
  scrollToSection: (sectionId: string) => void;
}

const ServiceHeader = ({ scrollToSection }: ServiceHeaderProps) => {
  const [hoveredCategory, setHoveredCategory] = useState("residential-work");
  
  const serviceCategories = [
    {
      id: "residential-work",
      name: "Residential",
      icon: <Home className="h-6 w-6 mb-2" />,
    },
    {
      id: "commercial",
      name: "Commercial",
      icon: <Warehouse className="h-6 w-6 mb-2" />,
    },
    {
      id: "bespoke-design",
      name: "Bespoke Design",
      icon: <PencilRuler className="h-6 w-6 mb-2" />,
    },
    {
      id: "structural-surveys",
      name: "Surveys",
      icon: <Search className="h-6 w-6 mb-2" />,
    },
    {
      id: "civil-engineering",
      name: "Civil",
      icon: <Building className="h-6 w-6 mb-2" />,
    }
  ];

  const handleCategoryClick = (categoryId: string) => {
    scrollToSection(categoryId);
  };

  return (
    <section className="bg-[#1A1F2C] py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Comprehensive Structural & Civil Engineering Services</h1>
          <p className="text-xl mb-10">
            Expert engineering solutions for London's diverse building projects, from residential extensions to major infrastructure.
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mt-8">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                onMouseEnter={() => setHoveredCategory(category.id)}
                className={`${hoveredCategory === category.id ? 'bg-[#ea384c]' : 'bg-[#1A1F2C]'} 
                  text-white p-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg 
                  flex flex-col items-center justify-center h-28 border border-white/10 cursor-pointer
                  hover:bg-[#ea384c]`}
              >
                {category.icon}
                <span className="font-medium">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHeader;
