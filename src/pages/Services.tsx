
import React, { useRef, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import ServiceIntro from '@/components/services/ServiceIntro';
import ServiceHeader from '@/components/services/ServiceHeader';
import StructuralEngineeringServices from '@/components/services/StructuralEngineeringServices';
import CivilEngineeringServices from '@/components/services/CivilEngineeringServices';
import ServiceCTA from '@/components/services/ServiceCTA';
import ContactForm from '@/components/ContactForm';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CommonQuestions from '@/components/CommonQuestions';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet';
import StickyBookingButton from '@/components/StickyBookingButton';
import BespokeDesignServices from '@/components/services/BespokeDesignServices';
import StructuralSurveyServices from '@/components/services/StructuralSurveyServices';
import { useLocation } from 'react-router-dom';

const Services = () => {
  const scrollToRef = useRef<Record<string, HTMLElement | null>>({});
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    console.log('Attempting to scroll to section:', sectionId);
    console.log('Available refs:', Object.keys(scrollToRef.current));
    console.log('Target element:', scrollToRef.current[sectionId]);
    
    if (scrollToRef.current[sectionId]) {
      const element = scrollToRef.current[sectionId];
      console.log('Element found:', element);
      console.log('Element offsetTop:', element!.offsetTop);
      
      const navbarHeight = 120; // Approximate navbar height including the red banner
      const elementPosition = element!.offsetTop - navbarHeight;
      
      console.log('Scrolling to position:', elementPosition);
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    } else {
      console.warn('Section not found:', sectionId);
    }
  };

  // Handle hash navigation when component mounts or hash changes
  useEffect(() => {
    const hash = location.hash.replace('#', '');
    if (hash) {
      // Wait a bit for the page to render
      setTimeout(() => {
        scrollToSection(hash);
      }, 500);
    }
  }, [location.hash]);

  return (
    <>
      <Helmet>
        <title>Structural Engineering Services | London Structural Surveys</title>
        <meta name="description" content="Professional structural engineering services including loft conversions, extensions, design calculations, and structural inspections across London." />
        <meta name="keywords" content="structural engineer, structural engineering services, London structural engineer, structural calculations, building regulations, structural inspections" />
        <link rel="canonical" href="https://alemara.co.uk/services" />
      </Helmet>

      <Navbar />
      <StickyBookingButton />
      
      <ServiceHeader scrollToSection={scrollToSection} />
      <ServiceIntro />
      
      <section id="residential-work" ref={el => scrollToRef.current['residential-work'] = el}>
        <StructuralEngineeringServices />
      </section>
      
      <section id="commercial" ref={el => scrollToRef.current['commercial'] = el}>
        <div className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F2C] mb-4">Commercial Structural Engineering</h2>
              <p className="text-xl text-gray-700">
                Comprehensive structural design services for new builds, hotels, restaurants, retail spaces and office buildings
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-1/2">
                  <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
                    <p className="text-gray-600 mb-8">
                      Our commercial structural engineering services provide comprehensive solutions for businesses of all sizes. 
                      From new build developments to the renovation and repurposing of existing commercial spaces, our team delivers 
                      efficient, cost-effective structural designs.
                    </p>
                    
                    <div className="mb-8">
                      <h3 className="text-xl font-semibold mb-4">Our Commercial Services Include:</h3>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {[
                          "New commercial buildings",
                          "Hotel and restaurant structural design", 
                          "Retail space optimization",
                          "Office building renovations",
                          "Mixed-use developments",
                          "Change of use structural assessments"
                        ].map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <div className="mr-2 mt-1.5">
                              <div className="h-4 w-4 rounded-full bg-[#ea384c]"></div>
                            </div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-1/2 flex items-center justify-center">
                  <div className="rounded-xl overflow-hidden shadow-md w-full">
                    <img 
                      src="/lovable-uploads/30f1d92e-b72a-4c9c-9edd-e07196399814.png" 
                      alt="Commercial structural engineering services - London office and retail buildings" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="bespoke-design" ref={el => scrollToRef.current['bespoke-design'] = el}>
        <BespokeDesignServices />
      </section>
      
      <section id="structural-surveys" ref={el => scrollToRef.current['structural-surveys'] = el}>
        <StructuralSurveyServices />
      </section>
      
      <section id="civil-engineering" ref={el => scrollToRef.current['civil-engineering'] = el}>
        <CivilEngineeringServices />
      </section>
      
      <ServiceCTA />
      <Testimonials />
      <CommonQuestions />
      <FAQ />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Services;
