
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import ContactDialog from '@/components/ContactDialog';

const StructuralSurveyServices = () => {
  return (
    <section id="structural-surveys" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6 mb-12">
            <div className="bg-[#ea384c]/10 p-6 rounded-full">
              <Search className="h-16 w-16 text-[#ea384c]" />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F2C] mb-3">Structural Surveys & Assessments</h2>
              <p className="text-xl text-gray-700 max-w-2xl">
                Expert structural inspections and detailed assessments for London properties
              </p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl shadow-lg overflow-hidden border border-gray-100">
            <div className="p-8">
              <Badge className="bg-[#ea384c] mb-4">Comprehensive Inspections</Badge>
              
              <p className="text-gray-700 text-lg mb-8">
                Our structural survey service provides thorough evaluations of existing buildings, identifying potential issues 
                and recommending appropriate solutions. We specialize in London's diverse building stock, from historic properties 
                to modern developments.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[
                  "Detailed structural assessments",
                  "Pre-purchase surveys",
                  "Crack monitoring",
                  "Subsidence investigations",
                  "Building movement analysis",
                  "Renovation feasibility studies"
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
                    Book a Survey <ArrowRight className="h-4 w-4" />
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

export default StructuralSurveyServices;
