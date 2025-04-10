
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight, Home, Warehouse, PencilRuler, Building } from "lucide-react";

interface StructuralServiceFeature {
  title: string;
  link?: string;
}

interface StructuralServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  longDescription: string;
  features: Array<StructuralServiceFeature | string>;
  image: string;
  id: string;
}

const structuralEngineeringServices: StructuralServiceItem[] = [
  {
    icon: <Home className="h-16 w-16 text-[#ea384c]" />,
    title: "Residential Structural Engineering",
    description: "Expert structural design for lofts, extensions, basements, and internal reconfigurations in London homes.",
    longDescription: "Our residential structural engineering services cover everything from loft conversions and extensions to basement excavations and internal reconfigurations. We provide detailed structural calculations, drawings and specifications for Building Regulations approval, ensuring your home renovation or extension is both structurally sound and compliant with all regulations. Our engineers understand London's diverse housing stock, from Victorian terraces to modern apartments, and provide tailored solutions for each property type.",
    features: [
      {
        title: "Loft conversions and roof alterations",
        link: "/services/residential/loft-conversions"
      },
      {
        title: "Side and rear extensions",
        link: "/services/residential/extensions"
      },
      {
        title: "Basement excavations and conversions",
        link: "/services/residential/basements"
      },
      {
        title: "Internal wall removals",
        link: "/services/residential/internal-alterations"
      },
      {
        title: "Floor strengthening",
        link: "/services/residential/floor-strengthening"
      },
      {
        title: "Structural opening formations",
        link: "/services/residential/structural-openings"
      }
    ],
    image: "/lovable-uploads/551ecc30-f655-4a5d-8c6a-775bbc45da9e.png",
    id: "residential-work"
  },
  {
    icon: <Warehouse className="h-16 w-16 text-[#ea384c]" />,
    title: "Commercial Structural Engineering",
    description: "Comprehensive structural design services for new builds, hotels, restaurants, retail spaces and office buildings.",
    longDescription: "Our commercial structural engineering services provide comprehensive solutions for businesses of all sizes. From new build developments to the renovation and repurposing of existing commercial spaces, our team delivers efficient, cost-effective structural designs. We work closely with architects, contractors and property developers to create structures that meet both aesthetic and functional requirements while ensuring compliance with building regulations and industry standards.",
    features: [
      "New commercial buildings",
      "Hotel and restaurant structural design",
      "Retail space optimization",
      "Office building renovations",
      "Mixed-use developments",
      "Change of use structural assessments"
    ],
    image: "/lovable-uploads/30f1d92e-b72a-4c9c-9edd-e07196399814.png",
    id: "commercial"
  },
  {
    icon: <PencilRuler className="h-16 w-16 text-[#ea384c]" />,
    title: "Bespoke Design Projects",
    description: "Innovative structural solutions for unconventional and architecturally challenging projects, fabrication design and bespoke connection details.",
    longDescription: "Our bespoke design project service is perfect for unique, architecturally challenging, or unusual structures. We thrive on solving complex engineering problems and turning innovative architectural visions into structurally sound realities. Our team has extensive experience in designing quirky structures, custom fabrication components, and specialized connection details that require both technical expertise and creative problem-solving. We work closely with architects, contractors, and fabricators to ensure seamless integration of structural elements with architectural vision.",
    features: [
      "Quirky and unusual structures",
      "Architecturally challenging designs",
      "Custom steel and timber fabrication details",
      "Cantilevers and structural glass installations",
      "Bespoke connection details",
      "Sustainable and innovative material applications"
    ],
    image: "/lovable-uploads/ea57e3ba-44ae-4ccd-97b8-27790e5721ce.png",
    id: "bespoke-design"
  },
  {
    icon: <Building className="h-16 w-16 text-[#ea384c]" />,
    title: "Structural Surveys & Assessments",
    description: "Comprehensive structural inspection services including crack assessment, pre-purchase structural checks, bulging wall analysis and subsidence investigations.",
    longDescription: "Our structural survey and assessment services provide thorough evaluations of existing buildings to identify potential structural issues and recommend appropriate remedial actions. Led by experienced certified structural engineers, our surveys combine visual inspections with advanced diagnostic techniques when necessary. We specialize in London's diverse building stock, from historic Georgian and Victorian properties to modern developments, providing clear, jargon-free reports that explain findings and recommendations in detail.",
    features: [
      "Crack assessment and monitoring",
      "Pre-purchase structural inspections",
      "Bulging and leaning wall analysis",
      "Subsidence investigations",
      "Floor and roof structure assessments",
      "Listed building structural surveys"
    ],
    image: "/lovable-uploads/8f1a8336-2983-4ee5-8e70-4663c95ced97.png",
    id: "structural-surveys"
  }
];

const StructuralEngineeringServices = () => {
  return (
    <section id="structural-engineering" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F2C] mb-4">Structural Engineering Services</h2>
          <p className="text-xl text-gray-700">
            Comprehensive structural design, analysis, and assessment solutions for all building types
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-16">
          {structuralEngineeringServices.map((service, index) => (
            <article key={index} id={service.id} className="border-b border-gray-200 pb-16 last:border-b-0">
              <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8`}>
                <div className="lg:w-1/2">
                  <div className="bg-white p-4 rounded-xl shadow-sm">
                    <div className="flex items-center mb-4">
                      <div className="mr-4">{service.icon}</div>
                      <h2 className="text-2xl md:text-3xl font-bold text-[#1A1F2C]">{service.title}</h2>
                    </div>
                    <p className="text-xl text-gray-700 mb-6">{service.description}</p>
                    <p className="text-gray-600 mb-8">{service.longDescription}</p>
                    
                    {service.features && (
                      <div className="mb-8">
                        <h3 className="text-xl font-semibold mb-4">Our Services Include:</h3>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {service.features.map((feature, fidx) => (
                            <li key={fidx} className="flex items-start group">
                              <div className="mr-2 mt-1.5">
                                <div className="h-4 w-4 rounded-full bg-[#ea384c] group-hover:scale-110 transition-all"></div>
                              </div>
                              {typeof feature === 'object' && feature.link ? (
                                <Link to={feature.link} className="text-[#1A1F2C] hover:text-[#ea384c] transition-colors">
                                  {feature.title}
                                </Link>
                              ) : (
                                <span>{typeof feature === 'string' ? feature : feature.title}</span>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <Button className="bg-[#ea384c] hover:bg-[#d02e40]">
                      <Link to="/#contact" className="flex items-center">
                        Request This Service <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
                
                <div className="lg:w-1/2 flex items-center justify-center">
                  {service.image && (
                    <div className={`rounded-xl overflow-hidden shadow-md ${
                      service.id === 'bespoke-design' 
                        ? 'w-[90%] h-[75%] self-center' 
                        : service.id === 'structural-surveys' 
                        ? 'w-[90%] h-[75%] self-center' 
                        : 'w-full'
                    }`}>
                      <img 
                        src={service.image} 
                        alt={`${service.title} - London structural engineering services`} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StructuralEngineeringServices;
