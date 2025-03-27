
import React, { lazy, Suspense } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Clock, Shield, MapPin } from "lucide-react";
import BookingDialog from "@/components/BookingDialog";

// Lazy load components that are below the fold
const WhyChooseUs = lazy(() => import('@/components/WhyChooseUs'));
const Process = lazy(() => import('@/components/Process'));
const CommonQuestions = lazy(() => import('@/components/CommonQuestions'));
const AccreditationSection = lazy(() => import('@/components/AccreditationSection'));
const Testimonials = lazy(() => import('@/components/Testimonials'));
const FAQ = lazy(() => import('@/components/FAQ'));
const ContactForm = lazy(() => import('@/components/ContactForm'));
const CTA = lazy(() => import('@/components/CTA'));
const Footer = lazy(() => import('@/components/Footer'));
const StickyBookingButton = lazy(() => import('@/components/StickyBookingButton'));

const StructuralSurveysService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <section className="relative bg-[#1A1F2C] py-20 text-white">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20"></div>
          
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-[url('/lovable-uploads/london-skyline-silhouette.png')] bg-repeat-x bg-bottom opacity-20"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <div className="flex items-center mb-4">
                <MapPin className="text-[#ea384c] mr-2 h-5 w-5" />
                <span className="inline-block bg-[#ea384c] text-white text-sm font-semibold px-3 py-1 rounded-full">London's Trusted Structural Engineers</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Expert Structural Engineering Surveys Across London
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200">
                Get a certified structural assessment within 24 hours. We catch issues that RICS surveys miss, saving you thousands in repairs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <BookingDialog>
                  <Button size="lg" className="bg-[#ea384c] hover:bg-opacity-90 text-white text-lg">
                    <span className="flex items-center">
                      Book a Structural Survey
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </span>
                  </Button>
                </BookingDialog>
                <a href="tel:02080049060">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#1A1F2C] text-lg w-full sm:w-auto">
                    Call Us: 020 8004 9060
                  </Button>
                </a>
              </div>
              
              <div className="mt-12 bg-black bg-opacity-30 p-4 rounded-lg mb-10">
                <div className="flex items-center text-[#ea384c] mb-2">
                  <Clock className="mr-2 h-5 w-5" />
                  <span className="font-semibold">Limited Availability: Book your assessment this week for priority scheduling</span>
                </div>
                <p className="text-sm text-gray-300">Serving all of Greater London for 10+ years</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div className="flex items-center">
                  <Check className="text-[#ea384c] mr-2 h-5 w-5" />
                  <span>London Property Specialists</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-[#ea384c] mr-2 h-5 w-5" />
                  <span>Fast 48hr Report Delivery</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-[#ea384c] mr-2 h-5 w-5" />
                  <span>Trusted by London Homebuyers</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <Suspense fallback={<div className="w-full h-20 bg-gray-100"></div>}>
          <Services />
          <WhyChooseUs />
          <Process />
          <CommonQuestions />
          <AccreditationSection />
          <Testimonials />
          <ContactForm />
          <FAQ />
          <CTA />
        </Suspense>
      </main>
      <Suspense fallback={<div className="w-full h-10 bg-[#1A1F2C]"></div>}>
        <Footer />
        <StickyBookingButton />
      </Suspense>
    </div>
  );
};

export default StructuralSurveysService;
