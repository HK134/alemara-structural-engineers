
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';

const Contact = () => {
  useEffect(() => {
    // Remove any existing Typeform scripts to avoid conflicts
    const existingScripts = document.querySelectorAll('script[src*="embed.typeform.com"]');
    existingScripts.forEach(script => script.remove());

    // Load the new Typeform embed script
    const script = document.createElement('script');
    script.src = '//embed.typeform.com/next/embed.js';
    script.async = true;
    document.head.appendChild(script);

    // Clean up script on component unmount
    return () => {
      const scriptToRemove = document.querySelector('script[src="//embed.typeform.com/next/embed.js"]');
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Contact Us | London Structural Surveys</title>
        <meta name="description" content="Get in touch with London Structural Surveys. Contact our expert structural engineers for consultations, quotes, and project inquiries." />
        <meta name="keywords" content="contact structural engineer, London structural engineering, structural survey quote, engineering consultation" />
      </Helmet>

      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-[#1A1F2C] text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-300 mb-8">
              Ready to start your project? Get in touch with our expert structural engineers today.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Form Section - First */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Your Project Started</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Fill out our quick form below and one of our structural engineers will get back to you within 4 hours during business hours.
            </p>
          </div>
          
          <div className="w-full max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8">
              <div 
                data-tf-live="01JXTJ5CFBZ6S88JWXVAXA0P1G"
                style={{ width: '100%', height: '600px' }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information - Second */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-[#ea384c]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-[#ea384c]" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <a href="tel:02080049060" className="text-[#ea384c] hover:underline text-lg font-medium">
                020 8004 9060
              </a>
            </div>
            
            <div className="text-center">
              <div className="bg-[#ea384c]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-[#ea384c]" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <a href="mailto:info@londonstructuralsurveys.com" className="text-[#ea384c] hover:underline">
                info@londonstructuralsurveys.com
              </a>
            </div>
            
            <div className="text-center">
              <div className="bg-[#ea384c]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-[#ea384c]" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Response Time</h3>
              <p className="text-gray-600">Within 4 hours<br />(business hours)</p>
            </div>
            
            <div className="text-center">
              <div className="bg-[#ea384c]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-[#ea384c]" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Service Area</h3>
              <p className="text-gray-600">Greater London<br />& Surrounding Areas</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Contact;
