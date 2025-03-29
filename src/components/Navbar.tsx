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

  const menuItems = [
    { label: "Home", path: "/" },
    {
      label: "Services",
      path: "/services",
      submenu: [
        { label: "Residential", path: "/services/residential" },
        { label: "Commercial", path: "/services/commercial" },
        { label: "Structural Surveys", path: "/services/structural-surveys" },
        { label: "Civil Engineering", path: "/services/civil-engineering" },
      ]
    },
    { label: "Portfolio", path: "/portfolio" },
    { label: "Blog", path: "/blog" },
    { label: "About Us", path: "/about" },
    { label: "FAQ", path: "/faq" },
    { label: "Contact", path: "/contact" },
  ];

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
          {menuItems.map((item, index) => (
            <div key={index} className="flex items-center">
              <Link to={item.path} className="text-white hover:text-[#ea384c] transition-colors">
                {item.label}
              </Link>
              {item.submenu && (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="border-[#ea384c] text-[#ea384c]">
                      <ChevronDown className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="bg-[#1A1F2C] text-white border-gray-700">
                    {item.submenu.map((subItem, subIndex) => (
                      <DropdownMenuItem key={subIndex} className="px-4 py-2">
                        <Link to={subItem.path} className="text-white hover:text-[#ea384c] transition-colors">
                          {subItem.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              )}
            </div>
          ))}
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
                {menuItems.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <Link to={item.path} className="text-white hover:text-[#ea384c] transition-colors px-4 py-2">
                      {item.label}
                    </Link>
                    {item.submenu && (
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="outline" className="border-[#ea384c] text-[#ea384c]">
                            <ChevronDown className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="bg-[#1A1F2C] text-white border-gray-700">
                          {item.submenu.map((subItem, subIndex) => (
                            <DropdownMenuItem key={subIndex} className="px-4 py-2">
                              <Link to={subItem.path} className="text-white hover:text-[#ea384c] transition-colors">
                                {subItem.label}
                              </Link>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    )}
                  </div>
                ))}
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
