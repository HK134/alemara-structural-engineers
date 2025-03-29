
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Search, AlertTriangle, Scale, Ruler, Wrench, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const serviceItems = [
  {
    icon: <Building className="h-10 w-10 text-[#ea384c]" />,
    title: "Post-RICS Structural Surveys",
    description: "Detailed follow-up inspections after initial RICS surveys to investigate specific structural concerns highlighted in homebuyer reports.",
    link: "/services#post-rics"
  },
  {
    icon: <AlertTriangle className="h-10 w-10 text-[#ea384c]" />,
    title: "Crack Assessment",
    description: "Expert analysis of cracks in walls, floors and ceilings to determine their cause, severity and the appropriate remedial action required.",
    link: "/services#crack-assessment"
  },
  {
    icon: <Search className="h-10 w-10 text-[#ea384c]" />,
    title: "Subsidence Investigations",
    description: "Comprehensive assessment of potential subsidence issues, including soil analysis, monitoring, and detailed recommendations for stabilisation.",
    link: "/services#subsidence"
  },
  {
    icon: <Ruler className="h-10 w-10 text-[#ea384c]" />,
    title: "Pre-Purchase Structural Inspections",
    description: "Thorough structural assessments before property purchase to identify potential issues that may affect structural integrity and value.",
    link: "/services#pre-purchase"
  },
  {
    icon: <Scale className="h-10 w-10 text-[#ea384c]" />,
    title: "Bulging Walls & Movement Analysis",
    description: "Expert assessment of wall bulging, leaning structures and building movement issues common in London period properties, with detailed remediation advice.",
    link: "/services#bulging-walls"
  },
  {
    icon: <Wrench className="h-10 w-10 text-[#ea384c]" />,
    title: "Structural Defect Analysis",
    description: "Specialised investigation of specific structural defects, identifying root causes and providing detailed remediation strategies.",
    link: "/services#defect-analysis"
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F2C] mb-4">London Structural Surveys & Engineering Services</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We provide specialist structural engineering assessments for London properties, 
            from Victorian terraces to modern apartments.
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
              View All Services <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
