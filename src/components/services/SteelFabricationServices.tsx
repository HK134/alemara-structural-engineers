
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight, Hammer } from "lucide-react";

interface SteelServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  longDescription: string;
  id: string;
}

const steelFabricationServices: SteelServiceItem[] = [
  {
    icon: <Hammer className="h-16 w-16 text-[#ea384c]" />,
    title: "Steel Fabrication & Installation",
    description: "End-to-end steel fabrication services including design, manufacturing, and on-site installation.",
    longDescription: "Our steel fabrication and installation service provides end-to-end solutions for structural steel requirements. From detailed connection design and steel member specification to manufacturing and on-site installation, our team ensures precision and quality at every stage. We specialize in both standard structural elements and bespoke fabrication for architecturally complex or visually exposed steelwork.",
    id: "steel-fabrication"
  }
];

const SteelFabricationServices = () => {
  return (
    <section id="steel-fabrication" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F2C] mb-4">Steel Fabrication & Installation</h2>
          <p className="text-xl text-gray-700">
            End-to-end steel solutions from design to installation
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <article id={steelFabricationServices[0].id} className="border-2 hover:border-[#ea384c] transition-all duration-300 hover:shadow-lg bg-white p-8">
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="md:w-1/3 flex justify-center items-start">
                <div className="relative">
                  {steelFabricationServices[0].icon}
                </div>
              </div>
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold mb-4">{steelFabricationServices[0].title}</h3>
                <p className="text-gray-700 text-lg mb-6">{steelFabricationServices[0].description}</p>
                <p className="text-gray-600 mb-6">{steelFabricationServices[0].longDescription}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold mb-2 text-[#1A1F2C]">Fabrication Services</h4>
                    <ul className="space-y-1">
                      <li className="flex items-start">
                        <div className="mr-2 mt-1">
                          <div className="h-3 w-3 rounded-full bg-[#ea384c]"></div>
                        </div>
                        <span>Structural steel members</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-1">
                          <div className="h-3 w-3 rounded-full bg-[#ea384c]"></div>
                        </div>
                        <span>Architectural steel features</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-1">
                          <div className="h-3 w-3 rounded-full bg-[#ea384c]"></div>
                        </div>
                        <span>Bespoke connection details</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-1">
                          <div className="h-3 w-3 rounded-full bg-[#ea384c]"></div>
                        </div>
                        <span>CE marked fabrication</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
                    <h4 className="font-semibold mb-2 text-[#1A1F2C]">Installation Services</h4>
                    <ul className="space-y-1">
                      <li className="flex items-start">
                        <div className="mr-2 mt-1">
                          <div className="h-3 w-3 rounded-full bg-[#ea384c]"></div>
                        </div>
                        <span>Fully insured installation teams</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-1">
                          <div className="h-3 w-3 rounded-full bg-[#ea384c]"></div>
                        </div>
                        <span>Residential and commercial projects</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-1">
                          <div className="h-3 w-3 rounded-full bg-[#ea384c]"></div>
                        </div>
                        <span>Coordination with other trades</span>
                      </li>
                      <li className="flex items-start">
                        <div className="mr-2 mt-1">
                          <div className="h-3 w-3 rounded-full bg-[#ea384c]"></div>
                        </div>
                        <span>Health & safety compliant</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <Link to="/#contact">
                  <Button className="bg-[#ea384c] hover:bg-[#d02e40] flex items-center">
                    Request Steel Services <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default SteelFabricationServices;
