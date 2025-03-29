
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { ArrowRight, Search, AlertTriangle, Scale, Ruler } from "lucide-react";
import { Link } from "react-router-dom";

const StructuralSurveys = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-[#1A1F2C] py-20 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Structural Surveys & Inspections</h1>
              <p className="text-xl mb-8">
                Expert structural inspections and assessments for London properties by chartered engineers
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 mb-6">
                Our structural survey services provide property owners, buyers, and managers with detailed assessments
                of building structures. Our chartered engineers have extensive experience with London's diverse building
                stock, from historic Georgian and Victorian properties to modern developments. We provide clear, jargon-free
                reports that explain our findings and recommendations in detail.
              </p>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-[#1A1F2C] mb-8 text-center">Our Structural Survey Services</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <div className="flex items-start mb-4">
                    <AlertTriangle className="h-8 w-8 text-[#ea384c] mr-3 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-[#1A1F2C]">Crack Assessment</h3>
                      <p className="mt-2 text-gray-600">Expert analysis of cracks in walls, floors, and ceilings to determine their cause, severity, and remedial action required.</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <div className="flex items-start mb-4">
                    <Scale className="h-8 w-8 text-[#ea384c] mr-3 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-[#1A1F2C]">Bulging Walls & Movement</h3>
                      <p className="mt-2 text-gray-600">Assessment of wall bulging, leaning structures, and building movement issues common in London period properties.</p>
                    </div>
                  </div>
                </div>
                
                {/* Add more service cards here */}
              </div>
              
              <div className="text-center">
                <Button className="bg-[#ea384c] hover:bg-[#d02e40]">
                  <Link to="/#contact" className="flex items-center">
                    Request a Survey <ArrowRight className="ml-2 h-4 w-4" />
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
              <h2 className="text-3xl font-bold mb-6">Concerned About Your Property?</h2>
              <p className="text-xl mb-8">
                Our team of chartered structural engineers is ready to inspect your property and provide expert advice.
              </p>
              <Button size="lg" className="bg-[#ea384c] hover:bg-[#d02e40]">
                <Link to="/#contact" className="flex items-center">
                  Book a Structural Survey <ArrowRight className="ml-2 h-4 w-4" />
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

export default StructuralSurveys;
