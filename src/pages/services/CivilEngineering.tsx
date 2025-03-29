
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { ArrowRight, Droplets, Construction, Trees } from "lucide-react";
import { Link } from "react-router-dom";

const CivilEngineering = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-[#1A1F2C] py-20 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Civil Engineering Services</h1>
              <p className="text-xl mb-8">
                Comprehensive civil engineering solutions for infrastructure, drainage, and site development
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 mb-6">
                Our civil engineering services provide clients with expert solutions for infrastructure projects, 
                drainage systems, flood risk assessment, and site development. Our team of chartered civil engineers 
                brings technical expertise and practical experience to every project, ensuring successful outcomes 
                that meet regulatory requirements and client objectives.
              </p>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-[#1A1F2C] mb-8 text-center">Our Civil Engineering Services</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <div className="flex items-start mb-4">
                    <Droplets className="h-8 w-8 text-[#ea384c] mr-3 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-[#1A1F2C]">Drainage Design</h3>
                      <p className="mt-2 text-gray-600">Comprehensive drainage solutions for residential, commercial, and infrastructure projects, including SuDS design.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <div className="flex items-start mb-4">
                    <Construction className="h-8 w-8 text-[#ea384c] mr-3 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-[#1A1F2C]">Infrastructure Design</h3>
                      <p className="mt-2 text-gray-600">Civil engineering design for roads, utilities, retaining walls, and other infrastructure elements.</p>
                    </div>
                  </div>
                </div>
                
                {/* Add more service cards here */}
              </div>
              
              <div className="text-center">
                <Button className="bg-[#ea384c] hover:bg-[#d02e40]">
                  <Link to="/#contact" className="flex items-center">
                    Request a Consultation <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="bg-[#1A1F2C] py-16 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Need Civil Engineering Expertise?</h2>
              <p className="text-xl mb-8">
                Our team of chartered civil engineers is ready to help with your infrastructure and development projects.
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

export default CivilEngineering;
