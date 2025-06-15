
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, CheckCircle, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

interface AreaTemplateProps {
  areaName: string;
  areaDescription: string;
  metaDescription: string;
  specificFeatures: string[];
  commonProjects: string[];
  nearbyLandmarks?: string;
  historicalContext?: string;
}

const AreaTemplate: React.FC<AreaTemplateProps> = ({
  areaName,
  areaDescription,
  metaDescription,
  specificFeatures,
  commonProjects,
  nearbyLandmarks,
  historicalContext
}) => {
  return (
    <>
      <Helmet>
        <title>Structural Engineers in {areaName} | London Structural Surveys</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={`structural engineer ${areaName}, structural engineering ${areaName}, structural calculations ${areaName}, building regulations ${areaName}, structural inspections ${areaName}, London`} />
      </Helmet>

      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-[#1A1F2C] py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Structural Engineers in {areaName}</h1>
            <p className="text-xl mb-8">
              Specialist structural engineering services tailored for {areaName} properties
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-[#ea384c] hover:bg-[#d02e40]">
                  Get Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#1A1F2C]">
                  <Eye className="mr-2 h-5 w-5" />
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Area Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center mb-8">
              <MapPin className="text-[#ea384c] h-8 w-8 mr-4" />
              <h2 className="text-3xl font-bold text-[#1A1F2C]">Structural Engineering in {areaName}</h2>
            </div>
            <p className="text-lg text-gray-700 mb-6">
              {areaDescription}
            </p>
            {historicalContext && (
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
                <h3 className="text-xl font-semibold text-[#1A1F2C] mb-3">Historical Context</h3>
                <p className="text-gray-700">{historicalContext}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Services for this Area */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1A1F2C] mb-8 text-center">Our Engineering Services in {areaName}</h2>
            
            <div className="bg-white rounded-xl shadow-md p-8 mb-10">
              <h3 className="text-2xl font-bold text-[#1A1F2C] mb-4">Specialised Services for {areaName} Properties</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                {specificFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-[#ea384c] mt-1 mr-3" />
                    <p className="text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <h3 className="text-2xl font-bold text-[#1A1F2C] mb-6">Common Projects in {areaName}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {commonProjects.map((project, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <h4 className="text-xl font-semibold text-[#1A1F2C] mb-2">{project}</h4>
                  <p className="text-gray-600 mb-4">Our certified engineers provide comprehensive structural solutions for {project.toLowerCase()} in {areaName}.</p>
                  <Link to={`/services/${project.toLowerCase().replace(/\s+/g, '-')}`} className="text-[#ea384c] font-semibold hover:underline inline-flex items-center">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
            
            {nearbyLandmarks && (
              <div className="bg-white rounded-xl shadow-md p-8 mb-10">
                <h3 className="text-2xl font-bold text-[#1A1F2C] mb-4">Local Knowledge</h3>
                <p className="text-gray-700">{nearbyLandmarks}</p>
              </div>
            )}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="bg-[#1A1F2C] py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Need Structural Engineering in {areaName}?</h2>
            <p className="text-xl mb-8">
              Our team of certified structural engineers is ready to help with your project in {areaName}.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-[#ea384c] hover:bg-[#d02e40]">
                  Get Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#1A1F2C]">
                  <Eye className="mr-2 h-5 w-5" />
                  View Our Portfolio
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AreaTemplate;
