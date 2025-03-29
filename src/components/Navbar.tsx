
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BookingDialog from './BookingDialog';
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Clock, ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="sticky top-0 z-50">
        <nav className="bg-[#1A1F2C] text-white">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center h-20">
              {/* Logo with Link to home page */}
              <Link to="/" className="flex items-center">
                <img src="/lovable-uploads/1f9708d9-de83-4362-9b30-7fafe295163c.png" alt="Alemara Engineers Logo" className="h-12 mr-2" />
                <div className="flex flex-col">
                  <span className="text-white font-bold text-xl">Alemara Engineers</span>
                  <span className="text-sm text-gray-400">Serving Greater London</span>
                </div>
              </Link>
              
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <Link to="/#about-us" className="text-white hover:text-[#ea384c] transition-colors">About Us</Link>
                
                <div className="relative group">
                  <div className="flex items-center cursor-pointer text-white hover:text-[#ea384c] transition-colors">
                    Services <ChevronDown className="ml-1 h-4 w-4" />
                  </div>
                  <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 hidden group-hover:block z-50">
                    <Link to="/services/residential" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Residential</Link>
                    <Link to="/services/commercial" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Commercial</Link>
                    <Link to="/services/structural-surveys" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Structural Surveys</Link>
                    <Link to="/services/civil-engineering" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Civil Engineering</Link>
                  </div>
                </div>
                
                <Link to="/our-process" className="text-white hover:text-[#ea384c] transition-colors">Our Process</Link>
                <Link to="/testimonials" className="text-white hover:text-[#ea384c] transition-colors">Testimonials</Link>
                <Link to="/#faq" className="text-white hover:text-[#ea384c] transition-colors">FAQ</Link>
              </div>
              
              {/* Call Button */}
              <div className="hidden md:flex items-center">
                <div className="flex items-center bg-[#ea384c] px-6 py-3 rounded-md">
                  <Phone className="mr-2 h-5 w-5" />
                  <a href="tel:02080049060" className="text-white font-bold">
                    020 8004 9060
                  </a>
                </div>
              </div>
              
              {/* Mobile Menu Button */}
              <div className="md:hidden flex items-center">
                <a href="tel:02080049060" className="mr-4 text-white">
                  <Phone className="h-5 w-5" />
                </a>
                <button 
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-white focus:outline-none"
                >
                  {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
              </div>
            </div>
          </div>
        </nav>
        
        {/* Notification Bar */}
        <div className="bg-[#ea384c] text-white py-2">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center">
              <Clock className="mr-2 h-4 w-4" />
              <p className="text-sm">We respond to all enquiries within 4 hours during business hours</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4 px-4 animate-fade-in absolute w-full z-50">
          <div className="flex flex-col space-y-4">
            <Link to="/#about-us" 
              className="text-[#1A1F2C] hover:text-[#ea384c] transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link to="/services" 
              className="text-[#1A1F2C] hover:text-[#ea384c] transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link to="/our-process" 
              className="text-[#1A1F2C] hover:text-[#ea384c] transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Process
            </Link>
            <Link to="/testimonials" 
              className="text-[#1A1F2C] hover:text-[#ea384c] transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
            <Link to="/#faq" 
              className="text-[#1A1F2C] hover:text-[#ea384c] transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            
            <BookingDialog>
              <Button className="bg-[#ea384c] hover:bg-opacity-90 text-white w-full mt-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Book a Survey
              </Button>
            </BookingDialog>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
