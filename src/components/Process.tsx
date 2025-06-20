
import React from 'react';
import { CheckCircle } from 'lucide-react';

const Process = () => {
  return (
    <section id="process" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block bg-[#ea384c] text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">Fast Response Guaranteed</span>
          
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F2C] mb-8">Book Your Structural Engineering Consultation Today</h2>
          
          <p className="text-xl text-gray-700 mb-10">
            Complete the form for priority scheduling. A certified structural engineer with 5-10 years of experience will contact you within 4 hours.
          </p>
          
          <div className="bg-white p-6 sm:p-8 rounded-lg shadow-md border border-gray-200 mb-8">
            <h3 className="font-semibold text-[#1A1F2C] text-xl mb-6 flex items-center">
              <CheckCircle className="text-[#ea384c] mr-2 h-5 w-5" />
              Our Engineering Process:
            </h3>
            
            <div className="space-y-6 sm:space-y-8">
              <div className="flex flex-col sm:flex-row sm:items-start">
                <div className="bg-[#ea384c] rounded-full text-white w-12 h-12 flex items-center justify-center mb-3 sm:mb-0 sm:mr-5 flex-shrink-0 mx-auto sm:mx-0">
                  <span className="text-xl font-bold">1</span>
                </div>
                <div className="text-center sm:text-left">
                  <h4 className="text-xl font-semibold text-[#1A1F2C] mb-1">Initial Consultation</h4>
                  <p className="text-gray-700">We discuss your project requirements and establish the scope of engineering services needed</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-start">
                <div className="bg-[#ea384c] rounded-full text-white w-12 h-12 flex items-center justify-center mb-3 sm:mb-0 sm:mr-5 flex-shrink-0 mx-auto sm:mx-0">
                  <span className="text-xl font-bold">2</span>
                </div>
                <div className="text-center sm:text-left">
                  <h4 className="text-xl font-semibold text-[#1A1F2C] mb-1">Engineering Assessment</h4>
                  <p className="text-gray-700">Thorough evaluation by a certified structural engineer tailored to your specific project needs</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row sm:items-start">
                <div className="bg-[#ea384c] rounded-full text-white w-12 h-12 flex items-center justify-center mb-3 sm:mb-0 sm:mr-5 flex-shrink-0 mx-auto sm:mx-0">
                  <span className="text-xl font-bold">3</span>
                </div>
                <div className="text-center sm:text-left">
                  <h4 className="text-xl font-semibold text-[#1A1F2C] mb-1">Comprehensive Solution</h4>
                  <p className="text-gray-700">Detailed reports, calculations, or designs delivered within 48 hours for most projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
