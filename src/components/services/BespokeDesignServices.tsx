
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, PencilRuler, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import ContactDialog from '@/components/ContactDialog';

const BespokeDesignServices = () => {
  return (
    <section id="bespoke-design" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6 mb-12">
            <div className="bg-[#ea384c]/10 p-6 rounded-full">
              <PencilRuler className="h-16 w-16 text-[#ea384c]" />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F2C] mb-3">Bespoke Design Solutions</h2>
              <p className="text-xl text-gray-700 max-w-2xl">
                Innovative structural solutions for architecturally challenging projects
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
            <div className="p-8">
              <Badge className="bg-[#ea384c] mb-4">Specialized Design</Badge>
              
              <p className="text-gray-700 text-lg mb-8">
                Our bespoke design service specializes in turning innovative architectural visions into structurally sound realities. 
                We excel at solving complex engineering challenges while maintaining architectural integrity.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[
                  "Innovative structural solutions",
                  "Complex architectural challenges",
                  "Custom steel fabrication design",
                  "Sustainable material integration",
                  "Specialized connection details",
                  "3D modeling and analysis"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#ea384c] mt-1" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8">
                <ContactDialog>
                  <Button className="bg-[#ea384c] hover:bg-[#d02e40] flex items-center gap-2">
                    Discuss Your Project <ArrowRight className="h-4 w-4" />
                  </Button>
                </ContactDialog>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BespokeDesignServices;
