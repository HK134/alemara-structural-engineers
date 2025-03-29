
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BookingDialog from './BookingDialog';
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center text-[#1A1F2C] font-bold text-xl">
            <img src="/lovable-uploads/1f9708d9-de83-4362-9b30-7fafe295163c.png" alt="Alemara Engineers Logo" className="h-12 mr-2" />
            <span className="hidden md:inline">Alemara Engineers</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-[#1A1F2C] hover:text-[#ea384c] transition-colors">Home</Link>
            <Link to="/services" className="text-[#1A1F2C] hover:text-[#ea384c] transition-colors">Services</Link>
            <Link to="/#why-choose-us" className="text-[#1A1F2C] hover:text-[#ea384c] transition-colors">About Us</Link>
            <Link to="/#faq" className="text-[#1A1F2C] hover:text-[#ea384c] transition-colors">FAQ</Link>
            <Link to="/#contact" className="text-[#1A1F2C] hover:text-[#ea384c] transition-colors">Contact</Link>
            
            <a href="tel:02080049060" className="flex items-center text-[#1A1F2C] hover:text-[#ea384c] transition-colors">
              <Phone className="mr-1 h-4 w-4" /> 020 8004 9060
            </a>
            
            <BookingDialog>
              <Button className="bg-[#ea384c] hover:bg-opacity-90 text-white">Book a Survey</Button>
            </BookingDialog>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <a href="tel:02080049060" className="mr-4 text-[#1A1F2C]">
              <Phone className="h-5 w-5" />
            </a>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#1A1F2C] focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-4 px-4 animate-fade-in">
          <div className="flex flex-col space-y-4">
            <Link to="/" 
              className="text-[#1A1F2C] hover:text-[#ea384c] transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link to="/services" 
              className="text-[#1A1F2C] hover:text-[#ea384c] transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link to="/#why-choose-us" 
              className="text-[#1A1F2C] hover:text-[#ea384c] transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link to="/#faq" 
              className="text-[#1A1F2C] hover:text-[#ea384c] transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link to="/#contact" 
              className="text-[#1A1F2C] hover:text-[#ea384c] transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
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
    </nav>
  );
};

export default Navbar;
