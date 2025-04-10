
import React, { useEffect, useRef, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SchemaMarkup from '@/components/services/SchemaMarkup';
import ServiceHeader from '@/components/services/ServiceHeader';
import ServiceIntro from '@/components/services/ServiceIntro';
import StructuralEngineeringServices from '@/components/services/StructuralEngineeringServices';
import CivilEngineeringServices from '@/components/services/CivilEngineeringServices';
import SteelFabricationServices from '@/components/services/SteelFabricationServices';
import ServiceCTA from '@/components/services/ServiceCTA';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import ContactForm from '@/components/ContactForm';

const Services = () => {
  const [openContactDialog, setOpenContactDialog] = useState(false);
  const [selectedService, setSelectedService] = useState("");
  
  // Create refs for smooth scrolling with offset
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

  // Function to handle service request
  const handleServiceRequest = (serviceType: string) => {
    setSelectedService(serviceType);
    setOpenContactDialog(true);
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
        <StructuralEngineeringServices onRequestService={handleServiceRequest} />
        <CivilEngineeringServices onRequestService={handleServiceRequest} />
        <SteelFabricationServices onRequestService={handleServiceRequest} />
        <ServiceCTA />
        
        {/* Service Request Dialog */}
        <Dialog open={openContactDialog} onOpenChange={setOpenContactDialog}>
          <DialogContent className="sm:max-w-[600px]">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold text-center mb-4">Request This Service</DialogTitle>
            </DialogHeader>
            <ContactForm inDialog={true} preselectedService={selectedService} />
          </DialogContent>
        </Dialog>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
