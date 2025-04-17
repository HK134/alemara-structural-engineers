
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight, Hammer, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ContactDialog from '@/components/ContactDialog';

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
    <section id="steel-fabrication" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6 mb-12">
            <div className="bg-[#ea384c]/10 p-6 rounded-full">
              <Hammer className="h-16 w-16 text-[#ea384c]" />
            </div>
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F2C] mb-3">Steel Fabrication & Installation</h2>
              <p className="text-xl text-gray-700 max-w-2xl">
                End-to-end steel solutions from design to installation
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
            <div className="p-8">
              <Badge className="bg-[#ea384c] mb-4">Comprehensive Services</Badge>
              
              <p className="text-gray-700 text-lg mb-8">
                {steelFabricationServices[0].longDescription}
              </p>

              <Tabs defaultValue="fabrication" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-6">
                  <TabsTrigger value="fabrication" className="data-[state=active]:bg-[#ea384c] data-[state=active]:text-white">
                    Fabrication Services
                  </TabsTrigger>
                  <TabsTrigger value="installation" className="data-[state=active]:bg-[#ea384c] data-[state=active]:text-white">
                    Installation Services
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="fabrication" className="bg-gray-50 p-6 rounded-lg">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Structural steel members",
                      "Architectural steel features",
                      "Bespoke connection details",
                      "CE marked fabrication"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-[#ea384c]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </TabsContent>
                
                <TabsContent value="installation" className="bg-gray-50 p-6 rounded-lg">
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Fully insured installation teams",
                      "Residential and commercial projects",
                      "Coordination with other trades",
                      "Health & safety compliant"
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-[#ea384c]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </TabsContent>
              </Tabs>
              
              <div className="mt-8 flex justify-center md:justify-start">
                <ContactDialog>
                  <Button className="bg-[#ea384c] hover:bg-[#d02e40] flex items-center gap-2 px-6 py-6 text-base">
                    Request Steel Services <ArrowRight className="h-4 w-4" />
                  </Button>
                </ContactDialog>
              </div>
            </div>
          </div>
          
          <div className="mt-12 flex flex-col md:flex-row gap-6 text-center md:text-left">
            <div className="md:w-1/3 bg-[#1A1F2C] text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Quality Guaranteed</h3>
              <p>All fabrication work is certified to industry standards with full documentation provided.</p>
            </div>
            <div className="md:w-1/3 bg-[#1A1F2C] text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Project Management</h3>
              <p>Dedicated project management from initial design through to final installation.</p>
            </div>
            <div className="md:w-1/3 bg-[#1A1F2C] text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Bespoke Solutions</h3>
              <p>Custom fabrication for complex architectural features and specialized requirements.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SteelFabricationServices;
