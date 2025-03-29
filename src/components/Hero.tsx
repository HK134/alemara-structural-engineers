
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Clock } from "lucide-react";
import BookingDialog from "./BookingDialog";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-[#1A1F2C] py-20 text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1466442929976-97f336a657be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Expert Structural Engineering Surveys Across London
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Get a certified structural assessment within 24 hours. We catch issues that RICS surveys miss, saving you thousands in repairs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative">
              <BookingDialog>
                <Button size="lg" className="w-full sm:w-auto bg-[#ea384c] hover:bg-opacity-90 text-white text-lg">
                  <span className="flex items-center">
                    Book a Structural Survey
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </span>
                </Button>
              </BookingDialog>
              <div className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                <span className="flex items-center bg-black bg-opacity-50 text-white px-2 py-1 rounded-full text-xs">
                  <Clock className="mr-1 h-3 w-3 text-[#ea384c]" />
                  Only takes 2 minutes
                </span>
              </div>
            </div>
            <a href="tel:02080049060">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#1A1F2C] text-lg w-full sm:w-auto">
                Call Us: 020 8004 9060
              </Button>
            </a>
          </div>
          
          <div className="mt-16">
            <div className="flex items-center text-[#ea384c] mb-2">
              <Clock className="mr-2 h-5 w-5" />
              <span className="font-semibold">Limited Availability: Book your assessment this week for priority scheduling</span>
            </div>
            <p className="text-gray-300">Serving all of Greater London for 10+ years</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
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
