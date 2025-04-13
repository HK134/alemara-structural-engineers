
import React from 'react';
import Navbar from '@/components/Navbar';
import ServiceIntro from '@/components/services/ServiceIntro';
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

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Structural Engineering Services | London Structural Surveys</title>
        <meta name="description" content="Professional structural engineering services including loft conversions, extensions, design calculations, and structural inspections across London." />
        <meta name="keywords" content="structural engineer, structural engineering services, London structural engineer, structural calculations, building regulations, structural inspections" />
      </Helmet>

      <Navbar />
      <StickyBookingButton />
      
      <ServiceIntro />
      <StructuralEngineeringServices />
      <CivilEngineeringServices />
      <SteelFabricationServices />
      <ServiceCTA />
      <Testimonials
        title="What Our Clients Say About Our Services"
        subtitle="Trusted by homeowners and businesses across London"
      />
      <CommonQuestions />
      <FAQ />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Services;
