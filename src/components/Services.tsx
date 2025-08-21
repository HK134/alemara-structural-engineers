
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Home, Search, Building2, ArrowRight, Warehouse, PencilRuler, Building } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const serviceItems = [
  {
    icon: <Home className="h-10 w-10 text-[#ea384c]" />,
    title: "Residential Structural Engineering",
    description: "Expert structural design and calculations for home renovations, alterations, and extensions across London properties.",
    link: "/services#residential-work"
  },
  {
    icon: <Building2 className="h-10 w-10 text-[#ea384c]" />,
    title: "Loft Conversions",
    description: "Specialized structural engineering for loft extensions, dormer windows, and roof alterations to maximize your London property's potential.",
    link: "/services/residential/loft-conversions"
  },
  {
    icon: <Building2 className="h-10 w-10 text-[#ea384c]" />,
    title: "Rear Extensions",
    description: "Comprehensive structural design for side returns, rear, and wrap-around extensions, including foundations and load-bearing solutions.",
    link: "/services/residential/extensions"
  },
  {
    icon: <Building className="h-10 w-10 text-[#ea384c]" />,
    title: "Structural Surveys",
    description: "Detailed structural inspections, including crack assessment, movement analysis and subsidence investigations for London properties.",
    link: "/services#structural-surveys"
  },
  {
    icon: <Warehouse className="h-10 w-10 text-[#ea384c]" />,
    title: "Commercial Projects",
    description: "Comprehensive structural design services for commercial buildings, retail spaces, offices, and mixed-use developments across London.",
    link: "/services#commercial"
  },
  {
    icon: <PencilRuler className="h-10 w-10 text-[#ea384c]" />,
    title: "Bespoke Designs",
    description: "Innovative structural solutions for unconventional and architecturally challenging projects, including fabrication design and custom details.",
    link: "/services#bespoke-design"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F2C] mb-4">London Structural & Civil Engineering Services</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We provide specialist engineering design and assessment services for London 
            properties, from Victorian terraces to modern commercial developments.
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
                    View Our Services <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/services">
            <Button className="bg-[#ea384c] hover:bg-[#d02e40]">
              View All Engineering Services <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
