
import React from 'react';
import { Button } from "@/components/ui/button";
import { Phone, Clock, Shield, MapPin } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-[#1A1F2C] py-4 w-full z-10 sticky top-0 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/6680eb37-5f4f-4000-abea-88ccf4675de9.png" 
            alt="Alemara Structural Engineering" 
            className="h-12 mr-3" 
          />
          <div className="hidden md:block">
            <span className="text-xs text-gray-400">Serving Greater London</span>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <a href="#services" className="text-white hover:text-[#ea384c] transition-colors">Services</a>
          <a href="#process" className="text-white hover:text-[#ea384c] transition-colors">Our Process</a>
          <a href="#testimonials" className="text-white hover:text-[#ea384c] transition-colors">Testimonials</a>
          <a href="#faq" className="text-white hover:text-[#ea384c] transition-colors">FAQ</a>
          <div className="border-l border-gray-600 pl-6 flex items-center">
            <div className="mr-4">
              <div className="flex items-center mb-1">
                <Shield className="h-4 w-4 text-[#ea384c] mr-1" />
                <span className="text-xs text-gray-300 font-semibold">RICS APPROVED</span>
              </div>
              <Button className="bg-[#ea384c] hover:bg-[#c02d3f] text-white flex items-center">
                <Phone className="mr-2 h-4 w-4" />
                020 8004 9060
              </Button>
            </div>
          </div>
        </div>
        <div className="md:hidden">
          <Button className="bg-[#ea384c] hover:bg-[#c02d3f] text-white">
            <Phone className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="hidden md:block bg-[#ea384c] py-1">
        <div className="container mx-auto">
          <div className="flex items-center justify-center text-white text-sm">
            <MapPin className="h-4 w-4 mr-2" />
            <span>Central London Location: 6 Highbury Corner, London, N5 1RD</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
