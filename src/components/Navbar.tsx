
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Phone, Clock, Shield, MapPin, Menu, ChevronDown, Home, UserCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import ContactDialog from './ContactDialog';
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
  const location = useLocation();

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

  // Function to handle navigation to the current page (scrolls to top)
  const handleCurrentPageNav = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const currentPath = location.pathname;
    const linkPath = event.currentTarget.getAttribute('href');
    
    if (linkPath === currentPath) {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`${scrolled ? 'bg-[#1A1F2C]' : 'bg-[#1A1F2C]'} py-4 w-full z-50 sticky top-0 transition-all duration-300`}>
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="focus:outline-none">
            <img 
              src="/lovable-uploads/a543004b-6dda-4449-b14e-4a9212b75d84.png" 
              alt="London Structural Surveys" 
              className="h-16 mb-1 mr-3"
              width="auto"
              height="64"
              loading="eager"
            />
          </Link>
          <div className="hidden md:block ml-2">
            <span className="text-xs text-gray-400">Serving Greater London</span>
          </div>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-white hover:text-[#ea384c] transition-colors" onClick={handleCurrentPageNav}>Home</Link>
          <Link to="/about-us" className="text-white hover:text-[#ea384c] transition-colors" onClick={handleCurrentPageNav}>About</Link>
          <Link to="/services" className="text-white hover:text-[#ea384c] transition-colors" onClick={handleCurrentPageNav}>Services</Link>
          <Link to="/portfolio" className="text-white hover:text-[#ea384c] transition-colors" onClick={handleCurrentPageNav}>Portfolio</Link>
          <Link to="/blog" className="text-white hover:text-[#ea384c] transition-colors" onClick={handleCurrentPageNav}>Blog</Link>
          <Link to="/faq" className="text-white hover:text-[#ea384c] transition-colors" onClick={handleCurrentPageNav}>FAQ</Link>
          
          <ContactDialog>
            <button className="text-white hover:text-[#ea384c] transition-colors">Contact</button>
          </ContactDialog>
          
          {/* Login Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="border-[#ea384c] text-white hover:bg-[#ea384c]/10">
                <UserCircle className="mr-1 h-4 w-4" />
                Login
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white p-2 rounded-md shadow-lg w-48 border border-gray-200">
              <DropdownMenuItem asChild className="cursor-pointer hover:bg-gray-100 py-2">
                <Link to="/client-login">
                  <UserCircle className="mr-2 h-4 w-4 text-blue-600" />
                  <span>Client Portal</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="cursor-pointer hover:bg-gray-100 py-2">
                <Link to="/engineer-login">
                  <Shield className="mr-2 h-4 w-4 text-green-600" />
                  <span>Engineer Login</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild className="cursor-pointer hover:bg-gray-100 py-2">
                <Link to="/login">
                  <MapPin className="mr-2 h-4 w-4 text-red-600" />
                  <span>Admin Panel</span>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <div className="border-l border-gray-600 pl-6 flex items-center">
            <div className="mr-4">
              <div className="flex items-center mb-1">
                <Shield className="h-4 w-4 text-[#ea384c] mr-1" />
                <span className="text-xs text-white font-semibold">CERTIFIED ENGINEERS</span>
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
        <div className="md:hidden">
          <a href="tel:02080049060" className="block mr-4">
            <div className="bg-[#ea384c] text-white px-3 py-1 rounded-md flex items-center justify-center">
              <Phone className="mr-1 h-4 w-4 text-white" />
              <span className="text-white text-xs font-bold">020 8004 9060</span>
            </div>
          </a>
        </div>
        <div className="md:hidden">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="border-[#ea384c] text-[#ea384c]">
                <Menu className="h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-[#1A1F2C] text-white border-gray-700">
              <div className="flex flex-col space-y-4 py-4">
                <Link to="/" className="text-white hover:text-[#ea384c] transition-colors px-4 py-2" onClick={handleCurrentPageNav}>
                  <span className="flex items-center">
                    <Home className="h-4 w-4 mr-2" />
                    Home
                  </span>
                </Link>
                <Link to="/about-us" className="text-white hover:text-[#ea384c] transition-colors px-4 py-2" onClick={handleCurrentPageNav}>About</Link>
                <Link to="/services" className="text-white hover:text-[#ea384c] transition-colors px-4 py-2" onClick={handleCurrentPageNav}>Services</Link>
                <Link to="/portfolio" className="text-white hover:text-[#ea384c] transition-colors px-4 py-2" onClick={handleCurrentPageNav}>Portfolio</Link>
                <Link to="/blog" className="text-white hover:text-[#ea384c] transition-colors px-4 py-2" onClick={handleCurrentPageNav}>Blog</Link>
                <Link to="/faq" className="text-white hover:text-[#ea384c] transition-colors px-4 py-2" onClick={handleCurrentPageNav}>FAQ</Link>
                
                <ContactDialog>
                  <button className="text-white hover:text-[#ea384c] transition-colors px-4 py-2 text-left">Contact</button>
                </ContactDialog>
                
                {/* Login Options */}
                <div className="border-t border-gray-700 pt-4 space-y-2">
                  <p className="text-sm text-gray-400 px-4">Login Portals:</p>
                  <Link to="/client-login" className="flex items-center text-white hover:text-[#ea384c] transition-colors px-4 py-2">
                    <UserCircle className="mr-2 h-4 w-4" />
                    Client Portal
                  </Link>
                  <Link to="/engineer-login" className="flex items-center text-white hover:text-[#ea384c] transition-colors px-4 py-2">
                    <Shield className="mr-2 h-4 w-4" />
                    Engineer Login
                  </Link>
                  <Link to="/login" className="flex items-center text-white hover:text-[#ea384c] transition-colors px-4 py-2">
                    <MapPin className="mr-2 h-4 w-4" />
                    Admin Panel
                  </Link>
                </div>
                
                <div className="border-t border-gray-700 pt-4 mt-2">
                  <div className="flex items-center mb-2 px-4">
                    <Shield className="h-4 w-4 text-[#ea384c] mr-2" />
                    <span className="text-xs text-white font-semibold">CERTIFIED ENGINEERS</span>
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
      <div className="bg-[#ea384c] py-2 mt-2 relative z-50">
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
