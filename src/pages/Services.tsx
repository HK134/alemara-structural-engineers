
import React, { useRef } from 'react';
import Navbar from '@/components/Navbar';
import ServiceIntro from '@/components/services/ServiceIntro';
import ServiceHeader from '@/components/services/ServiceHeader';
import StructuralEngineeringServices from '@/components/services/StructuralEngineeringServices';
import CivilEngineeringServices from '@/components/services/CivilEngineeringServices';
import SteelFabricationServices from '@/components/services/SteelFabricationServices';
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

const Services = () => {
  const scrollToRef = useRef<Record<string, HTMLElement | null>>({});

  const scrollToSection = (sectionId: string) => {
    if (scrollToRef.current[sectionId]) {
      scrollToRef.current[sectionId]?.scrollIntoView({ behavior: 'smooth' });
      
      // Add title visibility by scrolling slightly above the section
      window.scrollBy(0, -80); // Adjust for header height
    }
  };

  return (
    <>
      <Helmet>
        <title>Structural Engineering Services | London Structural Surveys</title>
        <meta name="description" content="Professional structural engineering services including loft conversions, extensions, design calculations, and structural inspections across London." />
        <meta name="keywords" content="structural engineer, structural engineering services, London structural engineer, structural calculations, building regulations, structural inspections" />
      </Helmet>

      <Navbar />
      <StickyBookingButton />
      
      <ServiceHeader scrollToSection={scrollToSection} />
      <ServiceIntro />
      
      <div ref={el => scrollToRef.current['residential-work'] = el} id="residential-work">
        <StructuralEngineeringServices />
      </div>
      
      <div ref={el => scrollToRef.current['commercial'] = el} id="commercial">
        <SteelFabricationServices />
      </div>

      <div ref={el => scrollToRef.current['bespoke-design'] = el} id="bespoke-design">
        <BespokeDesignServices />
      </div>
      
      <div ref={el => scrollToRef.current['structural-surveys'] = el} id="structural-surveys">
        <StructuralSurveyServices />
      </div>
      
      <div ref={el => scrollToRef.current['civil-engineering'] = el} id="civil-engineering">
        <CivilEngineeringServices />
      </div>
      
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
