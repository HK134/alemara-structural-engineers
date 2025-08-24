
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { ArrowRight, Home, Building2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

const Residential = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Residential Structural Engineering Services London | Alemara</title>
        <meta name="description" content="Expert residential structural engineering services for London homes. From Victorian terraces to modern apartments, we provide comprehensive design and assessment solutions." />
        <meta name="keywords" content="residential structural engineering, London homes, Victorian terraces, modern apartments, structural design, structural assessment" />
        <link rel="canonical" href="https://alemara.co.uk/services/residential" />
      </Helmet>
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-[#1A1F2C] py-20 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Residential Structural Engineering Services</h1>
              <p className="text-xl mb-8">
                Expert structural engineering for London homes, from Victorian terraces to modern apartments
              </p>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 mb-6">
                Our residential structural engineering services provide homeowners, architects, and builders with comprehensive 
                design and assessment solutions for all types of residential properties across Greater London. From period conversions 
                to new builds, our chartered engineers have the expertise to ensure your project is structurally sound, compliant with 
                regulations, and cost-effective.
              </p>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-[#1A1F2C] mb-8 text-center">Our Residential Engineering Services</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <div className="flex items-start mb-4">
                    <Home className="h-8 w-8 text-[#ea384c] mr-3 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-[#1A1F2C]">Loft Conversions</h3>
                      <p className="mt-2 text-gray-600">Structural designs for loft conversions, including roof alterations, dormer windows, and hip-to-gable conversions.</p>
                      <Link to="/services/residential/loft-conversions" className="inline-flex items-center mt-4 text-[#ea384c] font-medium">
                        Learn more <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <div className="flex items-start mb-4">
                    <Building2 className="h-8 w-8 text-[#ea384c] mr-3 mt-1" />
                    <div>
                      <h3 className="text-xl font-semibold text-[#1A1F2C]">Extensions</h3>
                      <p className="mt-2 text-gray-600">Structural engineering for side, rear, and wrap-around extensions, including foundations and roof structures.</p>
                      <Link to="/services/residential/extensions" className="inline-flex items-center mt-4 text-[#ea384c] font-medium">
                        Learn more <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
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
              <h2 className="text-3xl font-bold mb-6">Ready to Start Your Residential Project?</h2>
              <p className="text-xl mb-8">
                Our team of chartered structural engineers is ready to help with your residential project.
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

export default Residential;
