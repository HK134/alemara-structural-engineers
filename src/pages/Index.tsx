
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Process from '@/components/Process';
import AccreditationSection from '@/components/AccreditationSection';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import StickyBookingButton from '@/components/StickyBookingButton';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Process />
        <AccreditationSection />
        <Testimonials />
        <ContactForm />
        <FAQ />
        <CTA />
      </main>
      <Footer />
      <StickyBookingButton />
    </div>
  );
};

export default Index;
