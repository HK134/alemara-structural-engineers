
import React, { useEffect } from 'react';
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
  // Create a function for smooth scrolling with offset
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Add offset for the sticky navbar
      const navbarHeight = 120; // Approximate height of navbar
      const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // Check if there's a hash in the URL when the component mounts
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      setTimeout(() => {
        scrollToSection(id);
      }, 500); // Small delay to ensure page is fully loaded
    } else {
      // If no hash, scroll to top when component mounts
      window.scrollTo(0, 0);
    }
  }, []);

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
