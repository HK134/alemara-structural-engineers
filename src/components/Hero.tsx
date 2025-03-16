
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-[#1A1F2C] py-20 text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover opacity-20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Expert Structural Engineering Surveys Across London
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Specialising in post-RICS surveys, crack assessments, subsidence investigations, and comprehensive structural inspections.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Button size="lg" className="bg-[#ea384c] hover:bg-opacity-90 text-white text-lg">
              Get a Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#1A1F2C] text-lg">
              Our Specialised Services
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center">
              <Check className="text-[#ea384c] mr-2 h-5 w-5" />
              <span>Chartered Structural Engineers</span>
            </div>
            <div className="flex items-center">
              <Check className="text-[#ea384c] mr-2 h-5 w-5" />
              <span>Fast 48hr Report Delivery</span>
            </div>
            <div className="flex items-center">
              <Check className="text-[#ea384c] mr-2 h-5 w-5" />
              <span>Trusted by Homebuyers & Surveyors</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
