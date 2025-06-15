
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { Link } from "react-router-dom";

const SiteVisitCTA = () => {
  return (
    <div className="mt-12 mb-8 p-6 bg-[#1A1F2C] rounded-lg text-white">
      <h3 className="text-xl font-bold mb-4">Ready to Schedule Your Structural Site Visit?</h3>
      <p className="mb-6">
        Our team of experienced structural engineers covers all London boroughs and can help ensure your construction project starts with a solid foundation of accurate information.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link to="/contact">
          <Button className="bg-[#ea384c] hover:bg-[#d02e40] text-white">
            Book a Site Visit Now
          </Button>
        </Link>
        <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#1A1F2C]">
          <a href="tel:02080049060" className="flex items-center">
            Call 020 8004 9060
          </a>
        </Button>
      </div>
    </div>
  );
};

export default SiteVisitCTA;
