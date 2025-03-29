
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Construction, Workflow, FileText, ArrowRight } from "lucide-react";

interface CivilServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  longDescription: string;
  id: string;
  image?: string;
}

const civilEngineeringServices: CivilServiceItem[] = [
  {
    icon: <Construction className="h-16 w-16 text-white" />,
    title: "Temporary Works Design",
    description: "Expert design of safe, efficient temporary structures for construction projects including excavation support, falsework, and formwork.",
    longDescription: "Our temporary works design service provides comprehensive engineering solutions for construction phase requirements. We design safe, efficient temporary structures including excavation support systems, scaffolding designs, falsework and formwork for concrete structures, propping systems for building alterations, and temporary access solutions. Our designs prioritize worker safety while optimizing construction efficiency and cost-effectiveness.",
    id: "temporary-works"
  },
  {
    icon: <Workflow className="h-16 w-16 text-white" />,
    title: "Civil & Infrastructure Design",
    description: "Specialized design services for drainage systems, highways, foundations, and other civil infrastructure components.",
    longDescription: "Our civil and infrastructure design service covers a wide range of essential project elements, from drainage systems and sustainable urban drainage solutions (SUDS) to highways design, foundations, and retaining structures. We provide detailed designs that ensure compliance with all relevant standards and regulations while promoting sustainable, efficient solutions.",
    id: "civil-infrastructure"
  },
  {
    icon: <FileText className="h-16 w-16 text-white" />,
    title: "Design Assurance & Sign-off",
    description: "Independent checking and verification services for major infrastructure projects including HS2 and Hinkley Point.",
    longDescription: "Our design assurance and sign-off service provides independent verification of structural and civil engineering designs for major infrastructure projects. Our team of experienced engineers reviews designs against relevant standards, codes, and project requirements to ensure safety, efficiency, and compliance. We have extensive experience working on significant national projects including HS2 and Hinkley Point.",
    id: "design-assurance",
    image: "/lovable-uploads/bb746e6a-6105-42d2-81e9-1c0805d61938.png"
  }
];

const CivilEngineeringServices = () => {
  return (
    <section id="civil-engineering" className="py-16 bg-[#1A1F2C] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Civil Engineering Major Projects</h2>
          <p className="text-xl text-gray-300">
            Specialized engineering services for infrastructure and major construction projects
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8">
          <article className="relative rounded-2xl overflow-hidden shadow-2xl">
            <div className="w-full h-[400px] md:h-[500px] bg-black flex items-center justify-center">
              <img 
                src={civilEngineeringServices[2].image} 
                alt="Major Infrastructure Engineering Projects - HS2 and energy projects" 
                className="w-full h-full object-cover object-center opacity-85 rounded-2xl transform scale-[0.98]"
                style={{ objectPosition: 'center 30%' }}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Major Infrastructure Projects</h3>
              <p className="text-gray-200 max-w-3xl mx-auto mb-6">
                Our civil engineering team provides comprehensive design, verification, and technical assurance 
                services for major infrastructure projects throughout the UK, including High Speed 2 (HS2), 
                highways schemes, and energy infrastructure.
              </p>
              <Link to="/#contact">
                <Button className="bg-[#ea384c] hover:bg-[#d02e40]">
                  Inquire About Major Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </article>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {civilEngineeringServices.slice(0, 2).map((service, index) => (
              <Card key={index} className="bg-white/10 border-none text-white shadow-md hover:bg-white/15 transition-all duration-300">
                <CardHeader className="pb-2">
                  <div className="mb-4 bg-[#ea384c] p-3 rounded-full w-fit">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-300 text-base mb-4">{service.description}</CardDescription>
                  <Link to="/#contact">
                    <Button variant="link" className="text-[#ea384c] p-0 h-auto font-semibold flex items-center">
                      Request This Service <ArrowRight className="ml-1 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
            
            <Card className="bg-white/10 border-none text-white shadow-md hover:bg-white/15 transition-all duration-300 md:col-span-2 lg:col-span-1">
              <CardHeader className="pb-2">
                <div className="mb-4 bg-[#ea384c] p-3 rounded-full w-fit">
                  <FileText className="h-16 w-16 text-white" />
                </div>
                <CardTitle className="text-xl text-white">{civilEngineeringServices[2].title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-300 text-base mb-4">{civilEngineeringServices[2].description}</CardDescription>
                <Link to="/#contact">
                  <Button variant="link" className="text-[#ea384c] p-0 h-auto font-semibold flex items-center">
                    Request This Service <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-300 mb-6 max-w-3xl mx-auto">
              Our civil engineering experts have worked on numerous high-profile infrastructure projects across the UK,
              bringing their specialized knowledge and expertise to ensure successful outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CivilEngineeringServices;
