
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import ContactForm from '@/components/ContactForm';
import CTA from '@/components/CTA';
import { Helmet } from "react-helmet";

const FAQPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>FAQ | London Structural Engineering Questions Answered</title>
        <meta name="description" content="Get answers to common questions about structural engineering, building regulations, planning requirements, and our services across London." />
        <meta name="keywords" content="structural engineering FAQ, building regulations, planning permission, London structural engineer, engineering costs" />
        <link rel="canonical" href="https://londonstructuralsurveys.com/faq" />
      </Helmet>
      
      <Navbar />
      <main className="flex-grow">
        <div className="bg-[#1A1F2C] text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl max-w-3xl">
              Get answers to common questions about our structural engineering services and processes.
            </p>
          </div>
        </div>
        
        <FAQ />
        <ContactForm />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default FAQPage;
