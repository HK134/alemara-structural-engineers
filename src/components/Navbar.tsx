
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Phone, Clock, Shield, MapPin, Menu, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <header>
      <nav className={`${scrolled ? 'bg-[#1A1F2C]' : 'bg-[#1A1F2C]'} py-4 w-full z-50 sticky top-0 transition-all duration-300`}>
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <button onClick={scrollToTop} className="focus:outline-none">
              <img 
                src="/lovable-uploads/a543004b-6dda-4449-b14e-4a9212b75d84.png" 
                alt="London Structural Surveys" 
                className="h-16 mb-1 mr-3"
                width="auto"
                height="64"
                loading="eager"
              />
            </button>
            <div className="hidden md:block ml-2">
              <span className="text-xs text-gray-400">Serving Greater London</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <a href="/#why-choose-us" className="text-white hover:text-[#ea384c] transition-colors">About Us</a>
            
            {/* Services Dropdown Menu */}
            <div className="relative">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="text-white hover:text-[#ea384c] transition-colors flex items-center">
                    Services <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-[#1A1F2C] border-gray-700 text-white min-w-[200px]">
                  <DropdownMenuItem className="hover:bg-gray-700 focus:bg-gray-700">
                    <Link to="/services" className="w-full px-2 py-1">All Services</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-gray-700 focus:bg-gray-700">
                    <Link to="/services/residential" className="w-full px-2 py-1">Residential</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-gray-700 focus:bg-gray-700">
                    <Link to="/services/commercial" className="w-full px-2 py-1">Commercial</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-gray-700 focus:bg-gray-700">
                    <Link to="/services/structural-surveys" className="w-full px-2 py-1">Structural Surveys</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="hover:bg-gray-700 focus:bg-gray-700">
                    <Link to="/services/civil-engineering" className="w-full px-2 py-1">Civil Engineering</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            
            <a href="/#process" className="text-white hover:text-[#ea384c] transition-colors">Our Process</a>
            <a href="/#testimonials" className="text-white hover:text-[#ea384c] transition-colors">Testimonials</a>
            <a href="/#faq" className="text-white hover:text-[#ea384c] transition-colors">FAQ</a>
            <div className="border-l border-gray-600 pl-6 flex items-center">
              <div className="mr-4">
                <div className="flex items-center mb-1">
                  <Shield className="h-4 w-4 text-[#ea384c] mr-1" />
                  <span className="text-xs text-white font-semibold">IStructE ENDORSED</span>
                </div>
                <a href="tel:02080049060" className="block">
                  <div className="bg-[#ea384c] text-white px-4 py-2 rounded-md flex items-center justify-center">
                    <Phone className="mr-2 h-5 w-5 text-white" />
                    <span className="text-white font-bold text-lg">020 8004 9060</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <a href="tel:02080049060" className="block mr-4">
              <div className="bg-[#ea384c] text-white px-3 py-1 rounded-md flex items-center justify-center">
                <Phone className="mr-1 h-4 w-4 text-white" />
                <span className="text-white text-xs font-bold">020 8004 9060</span>
              </div>
            </a>
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline" className="border-[#ea384c] text-[#ea384c]">
                  <Menu className="h-4 w-4" />
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-[#1A1F2C] text-white border-gray-700">
                <div className="flex flex-col space-y-4 py-4">
                  <a href="/#why-choose-us" className="text-white hover:text-[#ea384c] transition-colors px-4 py-2">About Us</a>
                  <Link to="/services" className="text-white hover:text-[#ea384c] transition-colors px-4 py-2">All Services</Link>
                  <Link to="/services/residential" className="text-white hover:text-[#ea384c] transition-colors px-4 py-2 pl-8">- Residential</Link>
                  <Link to="/services/commercial" className="text-white hover:text-[#ea384c] transition-colors px-4 py-2 pl-8">- Commercial</Link>
                  <Link to="/services/structural-surveys" className="text-white hover:text-[#ea384c] transition-colors px-4 py-2 pl-8">- Structural Surveys</Link>
                  <Link to="/services/civil-engineering" className="text-white hover:text-[#ea384c] transition-colors px-4 py-2 pl-8">- Civil Engineering</Link>
                  <a href="/#process" className="text-white hover:text-[#ea384c] transition-colors px-4 py-2">Our Process</a>
                  <a href="/#testimonials" className="text-white hover:text-[#ea384c] transition-colors px-4 py-2">Testimonials</a>
                  <a href="/#faq" className="text-white hover:text-[#ea384c] transition-colors px-4 py-2">FAQ</a>
                  <div className="border-t border-gray-700 pt-4 mt-2">
                    <div className="flex items-center mb-2 px-4">
                      <Shield className="h-4 w-4 text-[#ea384c] mr-2" />
                      <span className="text-xs text-white font-semibold">IStructE ENDORSED</span>
                    </div>
                    <a href="tel:02080049060" className="block px-4">
                      <div className="bg-[#ea384c] text-white px-4 py-2 rounded-md flex items-center justify-center">
                        <Phone className="mr-2 h-4 w-4 text-white" />
                        <span className="text-white font-bold">020 8004 9060</span>
                      </div>
                    </a>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </nav>
      <div className="bg-[#1A1F2C] text-white py-4 relative z-40">
        <div className="container mx-auto">
          <div className="flex items-center justify-center text-white text-sm">
            <Clock className="h-4 w-4 mr-2 text-[#ea384c]" />
            <span className="font-medium">Limited Availability: Book your assessment this week for priority scheduling</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
