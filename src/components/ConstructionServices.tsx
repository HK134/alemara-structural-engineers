
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Ruler, Wrench, Home, Warehouse, PenTool } from "lucide-react";

const serviceItems = [
  {
    icon: <Building className="h-10 w-10 text-[#ea384c]" />,
    title: "Rear Extensions",
    description: "Expand your living space with our professionally designed and engineered rear extensions, perfect for London properties."
  },
  {
    icon: <Home className="h-10 w-10 text-[#ea384c]" />,
    title: "Loft Conversions",
    description: "Transform your unused loft space into a beautiful bedroom, office, or living area with our expert conversion services."
  },
  {
    icon: <Wrench className="h-10 w-10 text-[#ea384c]" />,
    title: "Internal Renovations",
    description: "Revitalize your interior with structural renovations including wall removal, load-bearing modifications, and layout changes."
  },
  {
    icon: <Warehouse className="h-10 w-10 text-[#ea384c]" />,
    title: "New Builds",
    description: "From concept to completion, our engineering team will ensure your new build meets all structural and regulatory requirements."
  },
  {
    icon: <PenTool className="h-10 w-10 text-[#ea384c]" />,
    title: "Architectural Design",
    description: "Our in-house architectural team works alongside our engineers to create beautiful, structurally sound designs."
  },
  {
    icon: <Ruler className="h-10 w-10 text-[#ea384c]" />,
    title: "Building Regulations",
    description: "Navigate complex London building regulations with our expert guidance and documentation services."
  }
];

const ConstructionServices = () => {
  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F2C] mb-4">London Construction & Engineering Services</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            From extensions and conversions to complete renovations, we provide full-service engineering solutions for London properties.
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
                <CardDescription className="text-gray-700 text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConstructionServices;
