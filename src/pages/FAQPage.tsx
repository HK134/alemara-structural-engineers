import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';
import CTA from '@/components/CTA';
import StickyBookingButton from '@/components/StickyBookingButton';

const FAQPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <FAQ />
        <ContactForm />
        <CTA />
      </main>
      <Footer />
      <StickyBookingButton />
    </div>
  );
};

export default FAQPage;
