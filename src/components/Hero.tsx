
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Clock, Shield, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative bg-[#1A1F2C] py-20 text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
      
      {/* London skyline silhouette */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-[url('/lovable-uploads/london-skyline-silhouette.png')] bg-repeat-x bg-bottom opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <div className="flex items-center mb-4">
            <MapPin className="text-[#ea384c] mr-2 h-5 w-5" />
            <span className="inline-block bg-[#ea384c] text-white text-sm font-semibold px-3 py-1 rounded-full">London's Premier Structural Engineers</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Expert Structural Solutions for London Properties
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            From Victorian terraces to modern high-rises, our London-based engineers provide thorough assessments within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button size="lg" className="bg-[#ea384c] hover:bg-opacity-90 text-white text-lg group relative overflow-hidden">
              <span className="relative z-10 flex items-center">
                Book a Structural Survey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <span className="absolute inset-0 bg-white bg-opacity-20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#1A1F2C] text-lg">
              Call Us: 020 8004 9060
            </Button>
          </div>
          <div className="bg-black bg-opacity-30 p-4 rounded-lg mb-6">
            <div className="flex items-center text-[#ea384c] mb-2">
              <Clock className="mr-2 h-5 w-5" />
              <span className="font-semibold">Central London Availability: Book your assessment this week for priority scheduling</span>
            </div>
            <p className="text-sm text-gray-300">Conveniently located at 6 Highbury Corner, London, N5 1RD - Serving all London Boroughs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center">
              <Check className="text-[#ea384c] mr-2 h-5 w-5" />
              <span>London Property Specialists</span>
            </div>
            <div className="flex items-center">
              <Check className="text-[#ea384c] mr-2 h-5 w-5" />
              <span>Fast 48hr Report Delivery</span>
            </div>
            <div className="flex items-center">
              <Check className="text-[#ea384c] mr-2 h-5 w-5" />
              <span>Trusted by London Homebuyers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
