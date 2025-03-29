
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Search, AlertTriangle, Scale, Ruler, Wrench, Home, Warehouse, 
  FileText, Construction, Hammer, Workflow, HardHat, Building2, ArrowRight, PencilRuler } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "London Structural Surveys",
  "description": "Expert structural & civil engineering services in London for residential, commercial, and bespoke projects.",
  "url": "https://londonstructuralsurveys.com/services",
  "telephone": "02080049060",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "London",
    "addressRegion": "Greater London",
    "addressCountry": "UK"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "51.5074",
    "longitude": "0.1278"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Engineering Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Residential Structural Engineering"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Commercial Structural Engineering"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Bespoke Design Projects"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Structural Surveys & Assessments"
        }
      }
    ]
  }
};

const structuralEngineeringServices = [
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
    longDescription: "Our structural survey and assessment services provide thorough evaluations of existing buildings to identify potential structural issues and recommend appropriate remedial actions. Led by experienced chartered structural engineers, our surveys combine visual inspections with advanced diagnostic techniques when necessary. We specialize in London's diverse building stock, from historic Georgian and Victorian properties to modern developments, providing clear, jargon-free reports that explain findings and recommendations in detail.",
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

const civilEngineeringServices = [
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

const steelFabricationServices = [
  {
    icon: <Hammer className="h-16 w-16 text-[#ea384c]" />,
    title: "Steel Fabrication & Installation",
    description: "End-to-end steel fabrication services including design, manufacturing, and on-site installation.",
    longDescription: "Our steel fabrication and installation service provides end-to-end solutions for structural steel requirements. From detailed connection design and steel member specification to manufacturing and on-site installation, our team ensures precision and quality at every stage. We specialize in both standard structural elements and bespoke fabrication for architecturally complex or visually exposed steelwork.",
    id: "steel-fabrication",
    image: "/lovable-uploads/be2ffdaf-904e-4449-b8bf-ba820e52e28f.png"
  }
];

const Services = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Structural & Civil Engineering Services London | Alemara Engineers</title>
        <meta name="description" content="Expert structural engineering services in London - residential extensions, commercial buildings, bespoke designs, and structural surveys. Specialist in London properties." />
        <meta name="keywords" content="structural engineering, London structural engineer, structural surveys, residential extensions, basement conversions, loft conversions, commercial building design, steel fabrication, civil engineering" />
        <link rel="canonical" href="https://londonstructuralsurveys.com/services" />
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
      </Helmet>
      
      <Navbar />
      <main className="flex-grow">
        <section className="bg-[#1A1F2C] py-20 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Comprehensive Structural & Civil Engineering Services</h1>
              <p className="text-xl mb-8">
                Expert engineering solutions for London's diverse building projects, from residential extensions to major infrastructure.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Button 
                  onClick={() => scrollToSection('structural-engineering')} 
                  className="bg-[#ea384c] hover:bg-[#d02e40] text-white"
                >
                  Structural Engineering
                </Button>
                <Button 
                  onClick={() => scrollToSection('civil-engineering')} 
                  variant="outline" 
                  className="text-white border-white hover:bg-white/10"
                >
                  Civil Engineering
                </Button>
                <Button 
                  onClick={() => scrollToSection('steel-fabrication')} 
                  variant="outline" 
                  className="text-white border-white hover:bg-white/10"
                >
                  Steel Fabrication
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 mb-6">
                At Alemara Structural Engineers, we provide comprehensive engineering solutions across a wide range of projects. 
                Our team of chartered structural and civil engineers brings decades of collective experience to every project, 
                ensuring technical excellence, regulatory compliance, and practical, cost-effective solutions.
              </p>
              <p className="text-lg text-gray-700">
                Whether you're planning a <Link to="/services#residential-work" className="text-[#ea384c] hover:underline">home extension</Link>, developing a <Link to="/services#commercial" className="text-[#ea384c] hover:underline">commercial property</Link>, or working on a major infrastructure project, 
                our engineering expertise will help you achieve your objectives safely, efficiently, and on budget.
              </p>
            </div>
          </div>
        </section>

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
                                  {feature.link ? (
                                    <Link to={feature.link} className="text-[#1A1F2C] hover:text-[#ea384c] transition-colors">
                                      {feature.title}
                                    </Link>
                                  ) : (
                                    <span>{feature.title}</span>
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
                      <div className="absolute -bottom-2 -right-2 w-12 h-12 rounded-full overflow-hidden border-2 border-white">
                        <img 
                          src="/lovable-uploads/be2ffdaf-904e-4449-b8bf-ba820e52e28f.png" 
                          alt="Steel fabrication detail" 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="md:w-2/3">
                    <h3 className="text-2xl font-bold mb-4">{steelFabricationServices[0].title}</h3>
                    <p className="text-gray-700 text-lg mb-6">{steelFabricationServices[0].description}</p>
                    <p className="text-gray-600 mb-6">{steelFabricationServices[0].longDescription}</p>
                    
                    <div className="grid grid-cols-1 mb-6">
                      <div className="w-full rounded-lg overflow-hidden shadow-md">
                        <img 
                          src="/lovable-uploads/be2ffdaf-904e-4449-b8bf-ba820e52e28f.png" 
                          alt="Steel fabrication project by Alemara Engineers" 
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    </div>
                    
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

        <section className="bg-[#1A1F2C] py-16 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Need Expert Engineering Support?</h2>
              <p className="text-xl mb-8">
                Our team of chartered structural and civil engineers is ready to help with your project.
              </p>
              <Button size="lg" className="bg-[#ea384c] hover:bg-[#d02e40]">
                <Link to="/#contact" className="flex items-center">
                  Book a Consultation <ArrowRight className="ml-2 h-4 w-4" />
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
