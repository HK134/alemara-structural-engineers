
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-16 bg-[#1A1F2C] text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Expert Structural Assessment?</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Don't take risks with structural issues. Our specialist structural engineers can diagnose problems and provide clear, actionable solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-[#ea384c] hover:bg-opacity-90 text-white text-lg">
            Book a Structural Inspection
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#1A1F2C] text-lg">
            Contact Us for Advice
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
