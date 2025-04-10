
import React from 'react';
import { ArrowRight, Hammer, PencilRuler, Factory } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface SteelFabricationServicesProps {
  onRequestService?: (serviceType: string) => void;
}

const SteelFabricationServices = ({ onRequestService }: SteelFabricationServicesProps) => {
  const handleRequestService = (serviceType: string) => {
    if (onRequestService) {
      onRequestService(serviceType);
    }
  };

  return (
    <section id="steel-fabrication" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1A1F2C] mb-8">Steel Fabrication Services</h2>
          
          <div className="space-y-8">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <div className="flex items-start mb-4">
                <PencilRuler className="h-8 w-8 text-[#ea384c] mr-3 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-[#1A1F2C]">Structural Steel Design</h3>
                  <p className="mt-2 text-gray-600">
                    Comprehensive structural steel design for residential and commercial projects, including detailed 
                    connection design and fabrication drawings.
                  </p>
                  <div className="mt-4">
                    <Button 
                      variant="outline" 
                      className="border-[#ea384c] text-[#ea384c] hover:bg-[#ea384c] hover:text-white"
                      onClick={() => handleRequestService("steel-design")}
                    >
                      Request this service <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <div className="flex items-start mb-4">
                <Factory className="h-8 w-8 text-[#ea384c] mr-3 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-[#1A1F2C]">Steel Fabrication & Installation</h3>
                  <p className="mt-2 text-gray-600">
                    Bespoke steel fabrication services for architectural and structural elements, including beams, columns, 
                    staircases, and decorative metalwork.
                  </p>
                  <div className="mt-4">
                    <Button 
                      variant="outline" 
                      className="border-[#ea384c] text-[#ea384c] hover:bg-[#ea384c] hover:text-white"
                      onClick={() => handleRequestService("steel-fabrication")}
                    >
                      Request this service <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
              <div className="flex items-start mb-4">
                <Hammer className="h-8 w-8 text-[#ea384c] mr-3 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-[#1A1F2C]">Custom Architectural Metalwork</h3>
                  <p className="mt-2 text-gray-600">
                    Specialist design and fabrication of bespoke architectural metalwork, including balustrades, canopies, 
                    feature staircases, and decorative elements.
                  </p>
                  <div className="mt-4">
                    <Button 
                      variant="outline" 
                      className="border-[#ea384c] text-[#ea384c] hover:bg-[#ea384c] hover:text-white"
                      onClick={() => handleRequestService("architectural-metalwork")}
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

export default SteelFabricationServices;
