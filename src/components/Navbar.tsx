
import React from 'react';
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-[#1A1F2C] py-4 w-full z-10">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/6680eb37-5f4f-4000-abea-88ccf4675de9.png" 
            alt="Alemara Structural Engineering" 
            className="h-12 mr-3" 
          />
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <a href="#services" className="text-white hover:text-[#ea384c] transition-colors">Services</a>
          <a href="#process" className="text-white hover:text-[#ea384c] transition-colors">Our Process</a>
          <a href="#testimonials" className="text-white hover:text-[#ea384c] transition-colors">Testimonials</a>
          <a href="#faq" className="text-white hover:text-[#ea384c] transition-colors">FAQ</a>
          <Button className="bg-[#ea384c] hover:bg-[#c02d3f] text-white flex items-center">
            <Phone className="mr-2 h-4 w-4" />
            020 1234 5678
          </Button>
        </div>
        <div className="md:hidden">
          <Button className="bg-[#ea384c] hover:bg-[#c02d3f] text-white">
            <Phone className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
