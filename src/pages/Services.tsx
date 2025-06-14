
import React, { useRef, useEffect } from 'react';
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
      </Helmet>

      <Navbar />
      <StickyBookingButton />
      
      <ServiceHeader scrollToSection={scrollToSection} />
      <ServiceIntro />
      
      <section id="residential-work" ref={el => scrollToRef.current['residential-work'] = el}>
        <StructuralEngineeringServices />
      </section>
      
      <section id="commercial" ref={el => { 
        scrollToRef.current['commercial'] = el;
        console.log('Commercial section ref set:', el);
      }}>
        <CivilEngineeringServices />
      </section>

      <section id="bespoke-design" ref={el => scrollToRef.current['bespoke-design'] = el}>
        <BespokeDesignServices />
      </section>
      
      <section id="structural-surveys" ref={el => scrollToRef.current['structural-surveys'] = el}>
        <StructuralSurveyServices />
      </section>
      
      <section id="civil-engineering" ref={el => scrollToRef.current['civil-engineering'] = el}>
        <SteelFabricationServices />
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
