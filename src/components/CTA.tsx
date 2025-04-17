
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Shield, Building, MapPin, History } from "lucide-react";
import BookingDialog from "./BookingDialog";

const CTA = () => {
  return (
    <section className="py-16 bg-[#1A1F2C] text-white relative overflow-hidden">
      {/* London-themed background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-20 h-20 bg-[url('/lovable-uploads/london-icon.png')] bg-no-repeat bg-contain"></div>
        <div className="absolute top-20 right-40 w-16 h-16 bg-[url('/lovable-uploads/london-icon.png')] bg-no-repeat bg-contain"></div>
        <div className="absolute bottom-10 left-1/4 w-24 h-24 bg-[url('/lovable-uploads/london-icon.png')] bg-no-repeat bg-contain"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-3/5">
              <div className="flex items-center mb-4">
                <MapPin className="text-[#ea384c] mr-2 h-5 w-5" />
                <span className="inline-block bg-[#ea384c] text-white text-sm font-semibold px-3 py-1 rounded-full">London Property Experts</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">London Buildings Require Specialised Structural Engineering</h2>
              <p className="text-xl mb-6">
                From historic Georgian architecture to modern developments, our London-based engineers understand the unique challenges of the capital's buildings:
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-start">
                  <span className="bg-[#ea384c] rounded-full p-1 mr-3 mt-1">
                    <History className="h-3 w-3 text-white" />
                  </span>
                  <span>10 years of experience in London structural engineering</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-[#ea384c] rounded-full p-1 mr-3 mt-1">
                    <Building className="h-3 w-3 text-white" />
                  </span>
                  <span>Expert in London's Victorian, Edwardian and period properties</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-[#ea384c] rounded-full p-1 mr-3 mt-1">
                    <Shield className="h-3 w-3 text-white" />
                  </span>
                  <span>London subsidence and foundation specialists</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-[#ea384c] rounded-full p-1 mr-3 mt-1">
                    <Shield className="h-3 w-3 text-white" />
                  </span>
                  <span>100% approval rate with all London building control authorities</span>
                </li>
              </ul>
              <div className="flex items-center text-sm mb-6 bg-white/10 p-3 rounded">
                <Clock className="text-[#ea384c] mr-2 h-5 w-5" />
                <span>We cover all London boroughs with same-week appointments available</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <BookingDialog buttonText="Book a Structural Engineer">
                  <Button size="lg" className="bg-[#ea384c] hover:bg-opacity-90 text-white text-lg group relative overflow-hidden">
                    <span className="relative z-10 flex items-center">
                      Book a Structural Engineer
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <span className="absolute inset-0 bg-white bg-opacity-20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                  </Button>
                </BookingDialog>
                <a href="tel:02080049060">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#1A1F2C] text-lg w-full sm:w-auto">
                    Call 020 8004 9060
                  </Button>
                </a>
              </div>
            </div>
            <div className="md:w-2/5 bg-white/10 p-6 rounded-lg">
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center bg-[#ea384c] w-16 h-16 rounded-full mb-3">
                  <span className="text-2xl font-bold">97%</span>
                </div>
                <h3 className="text-xl font-semibold">London Client Satisfaction</h3>
                <p className="text-sm text-gray-300">Based on over 1000 London property projects</p>
              </div>
              <div className="border-t border-white/20 pt-4">
                <p className="italic text-gray-200 mb-3">"Alemara delivered exceptional structural designs for our Islington property renovation that exceeded our expectations."</p>
                <p className="font-semibold">— Michael T., Kensington</p>
              </div>
              <div className="mt-4 pt-4 border-t border-white/20">
                <p className="text-center text-sm text-gray-300">Visit us at 6 Highbury Corner, London, N5 1RD</p>
                <p className="text-center text-sm text-gray-300">Email: info@alemara.co.uk</p>
                <p className="text-center text-sm text-gray-300 mt-1">Serving London for over 10 years</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
