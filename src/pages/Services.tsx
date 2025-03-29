
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SchemaMarkup from '@/components/services/SchemaMarkup';
import ServiceHeader from '@/components/services/ServiceHeader';
import ServiceIntro from '@/components/services/ServiceIntro';
import StructuralEngineeringServices from '@/components/services/StructuralEngineeringServices';
import CivilEngineeringServices from '@/components/services/CivilEngineeringServices';
import SteelFabricationServices from '@/components/services/SteelFabricationServices';
import ServiceCTA from '@/components/services/ServiceCTA';

const Services = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SchemaMarkup />
      <Navbar />
      <main className="flex-grow">
        <ServiceHeader scrollToSection={scrollToSection} />
        <ServiceIntro />
        <StructuralEngineeringServices />
        <CivilEngineeringServices />
        <SteelFabricationServices />
        <ServiceCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Services;
