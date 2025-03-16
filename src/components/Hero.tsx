
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Clock } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-[#1A1F2C] py-20 text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover opacity-20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <span className="inline-block bg-[#ea384c] text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">London's Trusted Structural Engineers</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Don't Risk Costly Structural Problems
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Get expert assessment within 24 hours. Our structural engineers identify issues that regular surveys miss, saving you thousands in future repairs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button size="lg" className="bg-[#ea384c] hover:bg-opacity-90 text-white text-lg group relative overflow-hidden">
              <span className="relative z-10 flex items-center">
                Get a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="absolute inset-0 bg-white bg-opacity-20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#1A1F2C] text-lg">
              Our Specialised Services
            </Button>
          </div>
          <div className="bg-black bg-opacity-30 p-4 rounded-lg mb-6">
            <div className="flex items-center text-[#ea384c] mb-2">
              <Clock className="mr-2 h-5 w-5" />
              <span className="font-semibold">Limited Availability: Book your assessment this week for priority scheduling</span>
            </div>
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
