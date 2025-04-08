
import React, { lazy, Suspense } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import StickyBookingButton from '@/components/StickyBookingButton';
import Testimonials from '@/components/Testimonials';

// Lazy load components that are below the fold
const Services = lazy(() => import('@/components/Services'));
const WhyChooseUs = lazy(() => import('@/components/WhyChooseUs'));
const Process = lazy(() => import('@/components/Process'));
const Portfolio = lazy(() => import('@/components/Portfolio'));
const CommonQuestions = lazy(() => import('@/components/CommonQuestions'));
const AccreditationSection = lazy(() => import('@/components/AccreditationSection'));
const FAQ = lazy(() => import('@/components/FAQ'));
const ContactForm = lazy(() => import('@/components/ContactForm'));
const CTA = lazy(() => import('@/components/CTA'));
const Footer = lazy(() => import('@/components/Footer'));

const Index = () => {
  return (
    <>
      <GoogleAnalytics measurementId="G-MEASUREMENT_ID" />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main>
          <Hero />
          <Suspense fallback={<div className="w-full h-20 bg-gray-100"></div>}>
            <Services />
            <WhyChooseUs />
            <Process />
            <Portfolio />
            <CommonQuestions />
            <AccreditationSection />
            <Testimonials />
            <FAQ />
            <ContactForm />
            <CTA />
          </Suspense>
        </main>
        <Suspense fallback={<div className="w-full h-10 bg-[#1A1F2C]"></div>}>
          <Footer />
        </Suspense>
        <StickyBookingButton />
      </div>
    </>
  );
};

export default Index;
