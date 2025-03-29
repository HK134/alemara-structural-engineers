
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const ServiceCTA = () => {
  return (
    <section className="bg-[#1A1F2C] py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Need Expert Engineering Support?</h2>
          <p className="text-xl mb-8">
            Our team of chartered structural and civil engineers is ready to help with your project.
          </p>
          <Button size="lg" className="bg-[#ea384c] hover:bg-[#d02e40]">
            <Link to="/#contact" className="flex items-center">
              Book a Consultation <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServiceCTA;
