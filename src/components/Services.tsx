
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Search, AlertTriangle, Scale, Ruler, Wrench, Home, Warehouse, PencilRuler, ArrowRight, Hammer, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const serviceItems = [
  {
    icon: <Home className="h-10 w-10 text-[#ea384c]" />,
    title: "Residential Structural Engineering",
    description: "Expert structural design and calculations for loft conversions, extensions, basements, and internal reconfigurations in London homes.",
    link: "/services/residential"
  },
  {
    icon: <Building2 className="h-10 w-10 text-[#ea384c]" />,
    title: "Loft Conversions & Extensions",
    description: "Specialized structural solutions for expanding your London home, including structural calculations, designs and Party Wall advice.",
    link: "/services/residential/loft-conversions"
  },
  {
    icon: <Hammer className="h-10 w-10 text-[#ea384c]" />,
    title: "Internal Alterations",
    description: "Safe removal of internal walls, floor strengthening, and opening up spaces in period London properties with careful structural consideration.",
    link: "/services/residential#internal-alterations"
  },
  {
    icon: <Building className="h-10 w-10 text-[#ea384c]" />,
    title: "Structural Surveys",
    description: "Detailed follow-up inspections after initial RICS surveys to investigate specific structural concerns highlighted in homebuyer reports.",
    link: "/services/structural-surveys"
  },
  {
    icon: <AlertTriangle className="h-10 w-10 text-[#ea384c]" />,
    title: "Crack Assessment",
    description: "Expert analysis of cracks in walls, floors and ceilings to determine their cause, severity and the appropriate remedial action required.",
    link: "/services/structural-surveys"
  },
  {
    icon: <Warehouse className="h-10 w-10 text-[#ea384c]" />,
    title: "Commercial Structural Engineering",
    description: "Comprehensive structural design services for new builds, hotels, restaurants, retail spaces and office developments.",
    link: "/services/commercial"
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F2C] mb-4">London Structural & Civil Engineering Services</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We provide specialist engineering design and assessment services for London properties, 
            from Victorian terraces to modern commercial developments.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <Card key={index} className="border-2 hover:border-[#ea384c] transition-all duration-300 hover:shadow-lg">
              <CardHeader className="pb-2">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl text-[#1A1F2C]">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 text-base mb-4">{service.description}</CardDescription>
                <Link to={service.link}>
                  <Button variant="link" className="text-[#ea384c] p-0 h-auto font-semibold flex items-center">
                    Read More <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-[#1A1F2C] mb-6">Residential Engineering Specialists</h3>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto mb-8">
            Our team specializes in London's unique residential properties, from Victorian terraces to modern apartments. 
            We understand the specific challenges of London homes and provide tailored structural solutions.
          </p>
          <div className="text-center mt-8">
            <Link to="/services/residential">
              <Button className="bg-[#ea384c] hover:bg-[#d02e40]">
                Explore Residential Services <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
