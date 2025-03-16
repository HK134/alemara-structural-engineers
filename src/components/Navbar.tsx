
import React from 'react';
import { Button } from "@/components/ui/button";
import { Phone, Clock, Shield, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-[#1A1F2C] py-4 w-full z-10 sticky top-0 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/">
            <img 
              src="/lovable-uploads/a543004b-6dda-4449-b14e-4a9212b75d84.png" 
              alt="London Structural Surveys" 
              className="h-12 mr-3" 
            />
          </Link>
          <div className="hidden md:block">
            <span className="text-xs text-gray-400">Serving Greater London</span>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/about" className="text-white hover:text-[#ea384c] transition-colors">About Us</Link>
          <a href="/#services" className="text-white hover:text-[#ea384c] transition-colors">Services</a>
          <a href="/#process" className="text-white hover:text-[#ea384c] transition-colors">Our Process</a>
          <a href="/#testimonials" className="text-white hover:text-[#ea384c] transition-colors">Testimonials</a>
          <a href="/#faq" className="text-white hover:text-[#ea384c] transition-colors">FAQ</a>
          <div className="border-l border-gray-600 pl-6 flex items-center">
            <div className="mr-4">
              <div className="flex items-center mb-1">
                <Shield className="h-4 w-4 text-[#ea384c] mr-1" />
                <span className="text-xs text-gray-300 font-semibold">IStructE ENDORSED</span>
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
            <Clock className="h-4 w-4 mr-2" />
            <span>We respond to all enquiries within 4 hours during business hours</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
