
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Search, AlertTriangle, Scale, Ruler, Wrench, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const serviceItems = [
  {
    icon: <Building className="h-16 w-16 text-[#ea384c]" />,
    title: "Post-RICS Structural Surveys",
    description: "Detailed follow-up inspections after initial RICS surveys to investigate specific structural concerns highlighted in homebuyer reports.",
    longDescription: "Our Post-RICS structural surveys provide in-depth analysis following standard homebuyer reports. When RICS surveyors identify potential structural issues, our specialist engineers conduct thorough examinations to assess the severity, causes, and necessary remedial actions. We provide comprehensive reports detailing our findings, with clear recommendations and cost estimates for any required repairs.",
    id: "post-rics"
  },
  {
    icon: <AlertTriangle className="h-16 w-16 text-[#ea384c]" />,
    title: "Crack Assessment",
    description: "Expert analysis of cracks in walls, floors and ceilings to determine their cause, severity and the appropriate remedial action required.",
    longDescription: "Our crack assessment service provides expert evaluation of structural and non-structural cracks in buildings. Our engineers assess the pattern, width, and behavior of cracks to determine their cause – whether from settlement, thermal movement, moisture changes, or structural defects. We use specialized tools to measure and monitor cracks, providing detailed reports explaining the causes and comprehensive solutions to address the underlying issues.",
    id: "crack-assessment"
  },
  {
    icon: <Search className="h-16 w-16 text-[#ea384c]" />,
    title: "Subsidence Investigations",
    description: "Comprehensive assessment of potential subsidence issues, including soil analysis, monitoring, and detailed recommendations for stabilisation.",
    longDescription: "Our subsidence investigation service provides thorough assessment of properties experiencing settlement or movement. Common in London's clay soils, subsidence can be caused by soil shrinkage, tree roots, leaking drains, or historic mining. Our engineers conduct detailed site investigations, potentially including soil testing and drain surveys, to identify the exact cause. We provide comprehensive reports with targeted stabilization recommendations, whether underpinning, tree management, or drainage repairs are needed.",
    id: "subsidence"
  },
  {
    icon: <Ruler className="h-16 w-16 text-[#ea384c]" />,
    title: "Pre-Purchase Structural Inspections",
    description: "Thorough structural assessments before property purchase to identify potential issues that may affect structural integrity and value.",
    longDescription: "Our pre-purchase structural inspections provide buyers with detailed insights into a property's structural condition before committing to purchase. Our engineers examine foundations, walls, floors, roofs, and structural alterations to identify existing or potential defects. We evaluate the severity of any issues found, estimate repair costs, and highlight items requiring immediate attention. This service gives buyers confidence in their investment and valuable negotiating leverage when structural concerns are identified.",
    id: "pre-purchase"
  },
  {
    icon: <Scale className="h-16 w-16 text-[#ea384c]" />,
    title: "Bulging Walls & Movement Analysis",
    description: "Expert assessment of wall bulging, leaning structures and building movement issues common in London period properties, with detailed remediation advice.",
    longDescription: "Our bulging walls and movement analysis service addresses common issues in London's period properties. Our engineers evaluate wall bulging, leaning, and structural movement to determine if they represent historic settlement or active, progressive issues requiring intervention. We conduct detailed assessments using plumb lines, laser levels, and monitoring equipment to measure deviations. Our comprehensive reports explain the causes of movement and provide tailored remediation strategies to stabilize the structure while preserving the building's character.",
    id: "bulging-walls"
  },
  {
    icon: <Wrench className="h-16 w-16 text-[#ea384c]" />,
    title: "Structural Defect Analysis",
    description: "Specialised investigation of specific structural defects, identifying root causes and providing detailed remediation strategies.",
    longDescription: "Our structural defect analysis service provides comprehensive assessment of specific structural issues in buildings. Our engineers investigate problems like sagging floors, cracked lintels, roof spread, and failed structural elements to determine their causes and severity. We use specialized equipment including moisture meters, endoscopes, and thermal imaging to conduct non-destructive investigations where possible. Our detailed reports explain the underlying causes and provide practical, cost-effective remediation strategies with prioritized recommendations.",
    id: "defect-analysis"
  }
];

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="bg-[#1A1F2C] py-20 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">London Structural Engineering Services</h1>
              <p className="text-xl mb-8">
                Specialist structural assessments for London's unique property landscape, from historic buildings to modern developments.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 gap-12">
              {serviceItems.map((service, index) => (
                <div key={index} id={service.id} className="border-b border-gray-200 pb-12 last:border-b-0">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/4 flex justify-center">
                      <div className="bg-gray-50 p-8 rounded-full">
                        {service.icon}
                      </div>
                    </div>
                    <div className="md:w-3/4">
                      <h2 className="text-3xl font-bold text-[#1A1F2C] mb-4">{service.title}</h2>
                      <p className="text-xl text-gray-700 mb-6">{service.description}</p>
                      <p className="text-gray-600 mb-8">{service.longDescription}</p>
                      <Button className="bg-[#ea384c] hover:bg-[#d02e40]">
                        <Link to="/#contact" className="flex items-center">
                          Request This Service <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-[#1A1F2C] mb-6">Need a Structural Assessment?</h2>
              <p className="text-xl text-gray-700 mb-8">
                Our team of chartered structural engineers is ready to help with your London property.
              </p>
              <Button size="lg" className="bg-[#ea384c] hover:bg-[#d02e40]">
                <Link to="/#contact" className="flex items-center">
                  Contact Us Today <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
