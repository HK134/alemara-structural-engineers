import React from 'react';
import { Button } from "@/components/ui/button";
import { Check, Clock, Shield, MapPin } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
const Hero = () => {
  const isMobile = useIsMobile();
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section className="relative bg-[#1A1F2C] py-20 text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-[url('/lovable-uploads/london-skyline-silhouette.png')] bg-repeat-x bg-bottom opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center mb-4">
            <MapPin className="text-[#ea384c] mr-2 h-5 w-5" />
            <span className="inline-block bg-[#ea384c] text-white text-sm font-semibold px-3 py-1 rounded-full">London's Trusted Structural Engineers</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Expert Structural Engineering Across London
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Comprehensive structural design, assessment and consultancy services. From property surveys to complex engineering projects, we deliver expert solutions across Greater London.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button size="lg" className="bg-[#ea384c] hover:bg-[#ea384c]/90 text-white text-lg" onClick={scrollToContact}>
              Book a Structural Engineer
            </Button>
            <a href="tel:02080049060">
              <Button size="lg" variant="outline" className="border-white hover:bg-white text-lg w-full sm:w-auto text-slate-950">
                Call Us: 020 8004 9060
              </Button>
            </a>
          </div>
          
          <div className="mt-12 bg-black bg-opacity-30 p-4 rounded-lg mb-10">
            <div className="flex items-center text-[#ea384c] mb-2">
              <Clock className="mr-2 h-5 w-5" />
              <span className="font-semibold">Limited Availability: Schedule your consultation this week for priority service</span>
            </div>
            <p className="text-sm text-gray-300">Serving all of Greater London for 10 years</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="flex items-center">
              <Check className="text-[#ea384c] mr-2 h-5 w-5" />
              <span>London Property Specialists</span>
            </div>
            <div className="flex items-center">
              <Check className="text-[#ea384c] mr-2 h-5 w-5" />
              <span>Comprehensive Design Services</span>
            </div>
            <div className="flex items-center">
              <Check className="text-[#ea384c] mr-2 h-5 w-5" />
              <span>Certified Civil Engineers</span>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;