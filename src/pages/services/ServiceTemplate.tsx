import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, AlertCircle } from "lucide-react";
import { Link } from "react-router-dom";
import ContactDialog from '@/components/ContactDialog';
import { Helmet } from 'react-helmet';
import StickyBookingButton from '@/components/StickyBookingButton';
import { Badge } from "@/components/ui/badge";

interface ServiceTemplateProps {
  serviceName: string;
  serviceDescription: string;
  metaDescription: string;
  keyFeatures: string[];
  benefits: string[];
  process: {
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  icon: React.ReactNode;
  relatedServices: string[];
  canonicalUrl: string;
}

const ServiceTemplate: React.FC<ServiceTemplateProps> = ({
  serviceName,
  serviceDescription,
  metaDescription,
  keyFeatures,
  benefits,
  process,
  faqs,
  icon,
  relatedServices,
  canonicalUrl
}) => {
  return (
    <>
      <Helmet>
        <title>{serviceName} | London Structural Engineers</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={`${serviceName.toLowerCase()}, structural engineer london, ${serviceName.toLowerCase()} london, structural engineering`} />
        <link rel="canonical" href={canonicalUrl} />
      </Helmet>

      <Navbar />
      <StickyBookingButton />
      
      {/* Hero Section */}
      <section className="bg-[#1A1F2C] py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{serviceName}</h1>
            <p className="text-xl mb-8">
              Expert structural engineering solutions for {serviceName.toLowerCase()} across London
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-[#ea384c] hover:bg-[#d02e40]">
                Book a Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Introduction */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center mb-8">
              <div className="bg-[#ea384c]/10 p-6 rounded-full mb-6 md:mb-0 md:mr-6">
                {icon}
              </div>
              <div>
                <h2 className="text-3xl font-bold text-[#1A1F2C] mb-4">About {serviceName}</h2>
                <p className="text-lg text-gray-700">
                  {serviceDescription}
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-[#1A1F2C] mb-4">Key Features</h3>
                <ul className="space-y-3">
                  {keyFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#ea384c] mt-1 mr-3" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-[#1A1F2C] mb-4">Benefits</h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-[#ea384c] mt-1 mr-3" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1A1F2C] mb-8 text-center">Our {serviceName} Process</h2>
            
            <div className="space-y-6">
              {process.map((step, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <div className="flex items-start">
                    <div className="bg-[#ea384c] text-white rounded-full h-8 w-8 flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#1A1F2C] mb-2">{step.title}</h3>
                      <p className="text-gray-700">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQs */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1A1F2C] mb-8 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <h3 className="text-xl font-semibold text-[#1A1F2C] mb-3">{faq.question}</h3>
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Services */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1A1F2C] mb-8 text-center">Related Services</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServices.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-[#1A1F2C] mb-3">{service}</h3>
                  <Link to={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`} className="text-[#ea384c] font-semibold hover:underline inline-flex items-center">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="bg-[#1A1F2C] py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your {serviceName} Project?</h2>
            <p className="text-xl mb-8">
              Our team of certified structural engineers is ready to help with your {serviceName.toLowerCase()} needs.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-[#ea384c] hover:bg-[#d02e40]">
                Book a Consultation <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ServiceTemplate;
