
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Clock, MapPin } from "lucide-react";
import BookingDialog from "./BookingDialog";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-[#1A1F2C] py-20 lg:py-32 text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80')] bg-cover bg-center opacity-30"></div>
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="max-w-3xl">
          {/* Location badge */}
          <div className="inline-flex items-center bg-[#ea384c] text-white px-4 py-2 rounded-full mb-8">
            <MapPin className="mr-2 h-4 w-4" />
            <span className="text-sm font-medium">London's Trusted Structural Engineers</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Expert Structural Engineering Surveys Across London
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Get a certified structural assessment within 24 hours. We catch issues that RICS surveys miss, saving you thousands in repairs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <BookingDialog>
              <Button size="lg" className="w-full sm:w-auto bg-[#ea384c] hover:bg-opacity-90 text-white text-lg px-8 py-6 h-auto">
                <span className="flex items-center">
                  Book a Structural Survey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </span>
              </Button>
            </BookingDialog>
            
            <a href="tel:02080049060">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#1A1F2C] text-lg w-full sm:w-auto">
                Call Us: 020 8004 9060
              </Button>
            </a>
          </div>
          
          <div className="flex items-center text-sm mb-2">
            <Clock className="mr-2 h-4 w-4 text-[#ea384c]" />
            <span>Only takes 2 minutes</span>
          </div>
          
          <div className="flex items-center text-[#ea384c] mb-2 mt-8">
            <Clock className="mr-2 h-5 w-5" />
            <span className="font-semibold">Limited Availability: Book your assessment this week for priority scheduling</span>
          </div>
          <p className="text-gray-300">Serving all of Greater London for 10+ years</p>
          
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
      
      {/* Floating Book Survey Button */}
      <div className="fixed bottom-4 right-4 md:bottom-8 md:right-8 z-40">
        <div className="text-center mb-2 bg-white text-[#1A1F2C] text-sm font-medium py-1 px-3 rounded-full">
          Takes 2 mins
        </div>
        <BookingDialog>
          <Button className="bg-[#ea384c] hover:bg-[#d02e40] text-white rounded-full flex items-center gap-2 px-6 py-4 h-auto">
            <span>Book Survey</span>
          </Button>
        </BookingDialog>
      </div>
    </section>
  );
};

export default Hero;
