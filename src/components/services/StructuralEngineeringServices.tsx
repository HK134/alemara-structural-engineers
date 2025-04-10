
import React from 'react';
import { ArrowRight, Home, Calculator, FileText, SearchCheck } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface StructuralEngineeringServicesProps {
  onRequestService?: (serviceType: string) => void;
}

const StructuralEngineeringServices = ({ onRequestService }: StructuralEngineeringServicesProps) => {
  const handleRequestService = (serviceType: string) => {
    if (onRequestService) {
      onRequestService(serviceType);
    }
  };

  return (
    <section id="structural-engineering" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1A1F2C] mb-8">Structural Engineering Services</h2>
          
          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <div className="flex items-start mb-4">
                <Calculator className="h-8 w-8 text-[#ea384c] mr-3 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-[#1A1F2C]">Structural Calculations</h3>
                  <p className="mt-2 text-gray-600">
                    Our chartered structural engineers provide detailed structural calculations for residential and commercial 
                    projects. We ensure your designs meet building regulations and are structurally sound.
                  </p>
                  <div className="mt-4">
                    <Button 
                      variant="outline" 
                      className="border-[#ea384c] text-[#ea384c] hover:bg-[#ea384c] hover:text-white"
                      onClick={() => handleRequestService("structural-design")}
                    >
                      Request this service <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <div className="flex items-start mb-4">
                <Home className="h-8 w-8 text-[#ea384c] mr-3 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-[#1A1F2C]">Residential Structural Engineering</h3>
                  <p className="mt-2 text-gray-600">
                    Expert structural design for loft conversions, extensions, basement excavations, and internal alterations. 
                    We specialize in period properties and modern homes across London.
                  </p>
                  <div className="mt-4">
                    <Button 
                      variant="outline" 
                      className="border-[#ea384c] text-[#ea384c] hover:bg-[#ea384c] hover:text-white"
                      onClick={() => handleRequestService("residential")}
                    >
                      Request this service <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <div className="flex items-start mb-4">
                <FileText className="h-8 w-8 text-[#ea384c] mr-3 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-[#1A1F2C]">Building Regulation Drawings</h3>
                  <p className="mt-2 text-gray-600">
                    Comprehensive building regulation drawings and technical specifications that meet local authority requirements 
                    and ensure compliance with current regulations.
                  </p>
                  <div className="mt-4">
                    <Button 
                      variant="outline" 
                      className="border-[#ea384c] text-[#ea384c] hover:bg-[#ea384c] hover:text-white"
                      onClick={() => handleRequestService("building-regs")}
                    >
                      Request this service <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <div className="flex items-start mb-4">
                <SearchCheck className="h-8 w-8 text-[#ea384c] mr-3 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-[#1A1F2C]">Structural Inspections & Reports</h3>
                  <p className="mt-2 text-gray-600">
                    Professional structural surveys and assessments to identify issues, recommend solutions, and provide detailed 
                    reports for insurance, planning, or peace of mind.
                  </p>
                  <div className="mt-4">
                    <Button 
                      variant="outline" 
                      className="border-[#ea384c] text-[#ea384c] hover:bg-[#ea384c] hover:text-white"
                      onClick={() => handleRequestService("structural-survey")}
                    >
                      Request this service <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StructuralEngineeringServices;
