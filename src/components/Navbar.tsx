
import React from 'react';
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 py-4 w-full z-10">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-survey-primary">
            <span className="text-survey-accent">London</span> Structural Surveys
          </h1>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <a href="#services" className="text-survey-dark hover:text-survey-accent transition-colors">Services</a>
          <a href="#process" className="text-survey-dark hover:text-survey-accent transition-colors">Our Process</a>
          <a href="#testimonials" className="text-survey-dark hover:text-survey-accent transition-colors">Testimonials</a>
          <a href="#faq" className="text-survey-dark hover:text-survey-accent transition-colors">FAQ</a>
          <Button className="bg-survey-primary hover:bg-survey-dark text-white flex items-center">
            <Phone className="mr-2 h-4 w-4" />
            020 1234 5678
          </Button>
        </div>
        <div className="md:hidden">
          <Button className="bg-survey-primary hover:bg-survey-dark text-white">
            <Phone className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
