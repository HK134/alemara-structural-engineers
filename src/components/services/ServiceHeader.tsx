
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

interface ServiceHeaderProps {
  scrollToSection: (sectionId: string) => void;
}

const ServiceHeader = ({ scrollToSection }: ServiceHeaderProps) => {
  return (
    <section className="bg-[#1A1F2C] py-20 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Comprehensive Structural & Civil Engineering Services</h1>
          <p className="text-xl mb-8">
            Expert engineering solutions for London's diverse building projects, from residential extensions to major infrastructure.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Button 
              onClick={() => scrollToSection('structural-engineering')} 
              className="bg-[#ea384c] hover:bg-[#d02e40] text-white"
            >
              Structural Engineering
            </Button>
            <Button 
              onClick={() => scrollToSection('civil-engineering')} 
              variant="outline" 
              className="text-white border-white hover:bg-white/10"
            >
              Civil Engineering
            </Button>
            <Button 
              onClick={() => scrollToSection('steel-fabrication')} 
              variant="outline" 
              className="text-white border-white hover:bg-white/10"
            >
              Steel Fabrication
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHeader;
