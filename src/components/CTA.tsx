
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-survey-accent to-survey-accent/80 text-survey-primary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Your London Property Surveyed?</h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto">
          Don't take risks with structural issues. Our expert surveyors are ready to help you make informed decisions about your property.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-survey-primary hover:bg-survey-dark text-white text-lg">
            Get Your Free Quote
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button size="lg" variant="outline" className="border-survey-primary text-survey-primary hover:bg-survey-primary hover:text-white text-lg">
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
