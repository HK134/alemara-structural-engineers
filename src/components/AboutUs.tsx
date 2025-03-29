
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold text-[#1A1F2C] mb-8">About London Structural Surveys</h1>
              
              <div className="prose prose-lg">
                <p className="mb-6">
                  London Structural Surveys is a specialist structural engineering consultancy serving the Greater London area
                  for over 5-10 years. With decades of combined experience, our team of certified structural engineers provides expert assessments and 
                  solutions for London's unique property landscape.
                </p>
                
                <h2 className="text-2xl font-bold text-[#1A1F2C] mt-8 mb-4">Our Expertise</h2>
                <p className="mb-6">
                  We specialize in addressing the structural challenges common in London properties, from historic Victorian terraces 
                  to modern apartments. Our engineers are particularly skilled in identifying and resolving issues related to subsidence, 
                  crack assessment, and structural defects that are prevalent in London's diverse building stock.
                </p>
                
                <h2 className="text-2xl font-bold text-[#1A1F2C] mt-8 mb-4">Our Approach</h2>
                <p className="mb-6">
                  We believe in providing clear, actionable advice without unnecessary technical jargon. Our reports are comprehensive 
                  yet accessible, designed to help homeowners, buyers, and property professionals make informed decisions. We pride 
                  ourselves on our responsive service, with all enquiries addressed within 4 hours during business hours.
                </p>
                
                <h2 className="text-2xl font-bold text-[#1A1F2C] mt-8 mb-4">Professional Accreditations</h2>
                <p className="mb-6">
                  Our engineers are members of the Institution of Structural Engineers (IStructE) and are fully qualified certified 
                  engineers. We maintain the highest professional standards and stay current with the latest structural engineering 
                  developments and building regulations.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
