
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import Portfolio from '@/components/Portfolio';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import TypeformSideButton from '@/components/TypeformSideButton';
import { Helmet } from 'react-helmet-async';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>London Structural Surveys | Expert Structural Engineers</title>
        <meta name="description" content="London's trusted structural engineers providing comprehensive design, assessment and consultancy services. From property surveys to complex engineering projects across Greater London." />
        <meta name="keywords" content="structural engineer London, structural survey, building survey, structural design, London structural consultancy" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="London Structural Surveys | Expert Structural Engineers" />
        <meta property="og:description" content="London's trusted structural engineers providing comprehensive design, assessment and consultancy services." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://alemara.co.uk" />
        <meta property="og:image" content="/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="London Structural Surveys | Expert Structural Engineers" />
        <meta name="twitter:description" content="London's trusted structural engineers providing comprehensive design, assessment and consultancy services." />
        <meta name="twitter:image" content="/og-image.png" />
        <link rel="canonical" href="https://alemara.co.uk" />
      </Helmet>
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <Portfolio />
      <ContactForm />
      <Footer />
      <TypeformSideButton />
    </>
  );
};

export default Index;
