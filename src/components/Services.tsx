
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Search, AlertTriangle, Scale, Ruler, Wrench, Home, Warehouse, PencilRuler, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const serviceItems = [
  {
    icon: <Home className="h-10 w-10 text-[#ea384c]" />,
    title: "Residential Structural Engineering",
    description: "Expert structural design and calculations for loft conversions, extensions, basements, and internal reconfigurations in London homes.",
    link: "/services#residential-work"
  },
  {
    icon: <Warehouse className="h-10 w-10 text-[#ea384c]" />,
    title: "Commercial Structural Engineering",
    description: "Comprehensive structural design services for new builds, hotels, restaurants, retail spaces and office developments.",
    link: "/services#commercial"
  },
  {
    icon: <PencilRuler className="h-10 w-10 text-[#ea384c]" />,
    title: "Bespoke Design Projects",
    description: "Innovative structural solutions for unconventional and architecturally challenging projects, including fabrication design and bespoke connection details.",
    link: "/services#bespoke-design"
  },
  {
    icon: <Building className="h-10 w-10 text-[#ea384c]" />,
    title: "Post-RICS Structural Surveys",
    description: "Detailed follow-up inspections after initial RICS surveys to investigate specific structural concerns highlighted in homebuyer reports.",
    link: "/services#structural-surveys"
  },
  {
    icon: <AlertTriangle className="h-10 w-10 text-[#ea384c]" />,
    title: "Crack Assessment",
    description: "Expert analysis of cracks in walls, floors and ceilings to determine their cause, severity and the appropriate remedial action required.",
    link: "/services#structural-surveys"
  },
  {
    icon: <Scale className="h-10 w-10 text-[#ea384c]" />,
    title: "Bulging Walls & Movement Analysis",
    description: "Expert assessment of wall bulging, leaning structures and building movement issues common in London period properties, with detailed remediation advice.",
    link: "/services#structural-surveys"
  }
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
