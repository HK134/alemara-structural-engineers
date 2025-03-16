
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Shield } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-16 bg-[#1A1F2C] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-3/5">
              <span className="inline-block bg-[#ea384c] text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">Limited Time Offer</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Worried About Structural Issues? Don't Wait Until It's Too Late</h2>
              <p className="text-xl mb-6">
                RICS surveyors often recommend further structural assessment. Our detailed reports help you:
              </p>
              <ul className="mb-6 space-y-2">
                <li className="flex items-start">
                  <span className="bg-[#ea384c] rounded-full p-1 mr-3 mt-1">
                    <Shield className="h-3 w-3 text-white" />
                  </span>
                  <span>Negotiate purchase price based on identified issues</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-[#ea384c] rounded-full p-1 mr-3 mt-1">
                    <Shield className="h-3 w-3 text-white" />
                  </span>
                  <span>Make informed decisions about property investments</span>
                </li>
                <li className="flex items-start">
                  <span className="bg-[#ea384c] rounded-full p-1 mr-3 mt-1">
                    <Shield className="h-3 w-3 text-white" />
                  </span>
                  <span>Avoid unexpected repair costs post-purchase</span>
                </li>
              </ul>
              <div className="flex items-center text-sm mb-6 bg-white/10 p-3 rounded">
                <Clock className="text-[#ea384c] mr-2 h-5 w-5" />
                <span>Most clients book within 24 hours of receiving their RICS survey results</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-[#ea384c] hover:bg-opacity-90 text-white text-lg group relative overflow-hidden">
                  <span className="relative z-10 flex items-center">
                    Book a Structural Inspection
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <span className="absolute inset-0 bg-white bg-opacity-20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#1A1F2C] text-lg">
                  Call 020 8004 9060
                </Button>
              </div>
            </div>
            <div className="md:w-2/5 bg-white/10 p-6 rounded-lg">
              <div className="text-center mb-4">
                <div className="inline-flex items-center justify-center bg-[#ea384c] w-16 h-16 rounded-full mb-3">
                  <span className="text-2xl font-bold">97%</span>
                </div>
                <h3 className="text-xl font-semibold">Client Satisfaction</h3>
                <p className="text-sm text-gray-300">Based on over 500 structural assessments</p>
              </div>
              <div className="border-t border-white/20 pt-4">
                <p className="italic text-gray-200 mb-3">"Alemara identified serious issues our RICS survey missed. Saved us £25,000 in future repairs."</p>
                <p className="font-semibold">— Michael T., Kensington</p>
              </div>
              <div className="mt-4 pt-4 border-t border-white/20">
                <p className="text-center text-sm text-gray-300">Visit us at 6 Highbury Corner, London, N5 1RD</p>
                <p className="text-center text-sm text-gray-300">Email: info@alemara.co.uk</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
