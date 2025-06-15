
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Check, Clock, Shield, MapPin } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Hero = () => {
  const isMobile = useIsMobile();
  const [isTypeformReady, setIsTypeformReady] = useState(false);
  
  useEffect(() => {
    // Function to initialize Typeform
    const initTypeform = () => {
      if (window.tf && window.tf.load) {
        window.tf.load();
        setIsTypeformReady(true);
        console.log('Typeform initialized successfully');
      }
    };

    // Check if script already exists
    const existingScript = document.querySelector('script[src*="embed.typeform.com"]');
    
    if (existingScript) {
      // Script exists, try to initialize
      if (window.tf) {
        initTypeform();
      } else {
        // Wait for script to load
        existingScript.addEventListener('load', initTypeform);
      }
    } else {
      // Create and load the script
      const script = document.createElement('script');
      script.src = '//embed.typeform.com/next/embed.js';
      script.async = true;
      
      script.onload = () => {
        console.log('Typeform script loaded in Hero');
        // Small delay to ensure script is fully ready
        setTimeout(initTypeform, 200);
      };
      
      script.onerror = () => {
        console.error('Failed to load Typeform script');
      };
      
      document.head.appendChild(script);
    }

    // Cleanup function
    return () => {
      if (existingScript) {
        existingScript.removeEventListener('load', initTypeform);
      }
    };
  }, []);
  
  return (
    <section className="relative bg-[#1A1F2C] py-20 text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-[url('/lovable-uploads/london-skyline-silhouette.png')] bg-repeat-x bg-bottom opacity-20"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <div className="flex items-center mb-4">
            <MapPin className="text-[#ea384c] mr-2 h-5 w-5" />
            <span className="inline-block bg-[#ea384c] text-white text-sm font-semibold px-3 py-1 rounded-full">London's Trusted Structural Engineers</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Expert Structural Engineering Across London
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Comprehensive structural design, assessment and consultancy services. From property surveys to complex engineering projects, we deliver expert solutions across Greater London.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <div className={`relative ${isMobile ? 'mb-8' : ''}`}>
              <div className="bg-white rounded-lg p-4 w-full max-w-md">
                {!isTypeformReady && (
                  <div className="flex items-center justify-center h-[400px] bg-gray-50 rounded">
                    <div className="text-center">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#ea384c] mx-auto mb-2"></div>
                      <p className="text-gray-600 text-sm">Loading form...</p>
                    </div>
                  </div>
                )}
                <div 
                  data-tf-live="01JKMCBJRZQJH52ACHS9JVY1AK" 
                  style={{ 
                    width: '100%', 
                    height: '400px',
                    display: isTypeformReady ? 'block' : 'none'
                  }}
                ></div>
              </div>
              {isMobile ? (
                <div className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                  <span className="flex items-center bg-black bg-opacity-50 text-white px-2 py-1 rounded-full text-xs">
                    <Clock className="mr-1 h-3 w-3 text-[#ea384c]" />
                    Only takes 2 minutes
                  </span>
                </div>
              ) : (
                <div className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                  <span className="flex items-center bg-black bg-opacity-30 text-white px-2 py-1 rounded-full text-xs">
                    <Clock className="mr-1 h-3 w-3 text-[#ea384c]" />
                    Only takes 2 minutes
                  </span>
                </div>
              )}
            </div>
            <a href="tel:02080049060">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#1A1F2C] text-lg w-full sm:w-auto">
                Call Us: 020 8004 9060
              </Button>
            </a>
          </div>
          
          <div className="mt-12 bg-black bg-opacity-30 p-4 rounded-lg mb-10">
            <div className="flex items-center text-[#ea384c] mb-2">
              <Clock className="mr-2 h-5 w-5" />
              <span className="font-semibold">Limited Availability: Schedule your consultation this week for priority service</span>
            </div>
            <p className="text-sm text-gray-300">Serving all of Greater London for 10 years</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div className="flex items-center">
              <Check className="text-[#ea384c] mr-2 h-5 w-5" />
              <span>London Property Specialists</span>
            </div>
            <div className="flex items-center">
              <Check className="text-[#ea384c] mr-2 h-5 w-5" />
              <span>Comprehensive Design Services</span>
            </div>
            <div className="flex items-center">
              <Check className="text-[#ea384c] mr-2 h-5 w-5" />
              <span>Certified Civil Engineers</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
