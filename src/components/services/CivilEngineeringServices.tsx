
import React from 'react';
import { ArrowRight, Droplets, Route, Map } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface CivilEngineeringServicesProps {
  onRequestService?: (serviceType: string) => void;
}

const CivilEngineeringServices = ({ onRequestService }: CivilEngineeringServicesProps) => {
  const handleRequestService = (serviceType: string) => {
    if (onRequestService) {
      onRequestService(serviceType);
    }
  };

  return (
    <section id="civil-engineering" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1A1F2C] mb-8">Civil Engineering Services</h2>
          
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg border border-gray-100">
              <div className="flex items-start mb-4">
                <Droplets className="h-8 w-8 text-[#ea384c] mr-3 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-[#1A1F2C]">Drainage Design & SuDS</h3>
                  <p className="mt-2 text-gray-600">
                    Comprehensive drainage solutions including sustainable drainage systems (SuDS), flood risk assessments, 
                    and detailed design for surface and foul water drainage.
                  </p>
                  <div className="mt-4">
                    <Button 
                      variant="outline" 
                      className="border-[#ea384c] text-[#ea384c] hover:bg-[#ea384c] hover:text-white"
                      onClick={() => handleRequestService("drainage-design")}
                    >
                      Request this service <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-100">
              <div className="flex items-start mb-4">
                <Route className="h-8 w-8 text-[#ea384c] mr-3 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-[#1A1F2C]">Infrastructure Design</h3>
                  <p className="mt-2 text-gray-600">
                    Expert civil engineering for roads, utilities, retaining walls, and external works. We provide technical 
                    designs that meet local authority and utility provider requirements.
                  </p>
                  <div className="mt-4">
                    <Button 
                      variant="outline" 
                      className="border-[#ea384c] text-[#ea384c] hover:bg-[#ea384c] hover:text-white"
                      onClick={() => handleRequestService("infrastructure")}
                    >
                      Request this service <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-100">
              <div className="flex items-start mb-4">
                <Map className="h-8 w-8 text-[#ea384c] mr-3 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-[#1A1F2C]">Site Development & Planning</h3>
                  <p className="mt-2 text-gray-600">
                    Comprehensive civil engineering for site development, including levels, earthworks, access design, and planning 
                    support for residential and commercial developments.
                  </p>
                  <div className="mt-4">
                    <Button 
                      variant="outline" 
                      className="border-[#ea384c] text-[#ea384c] hover:bg-[#ea384c] hover:text-white"
                      onClick={() => handleRequestService("site-development")}
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

export default CivilEngineeringServices;
