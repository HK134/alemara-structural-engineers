
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { Link } from "react-router-dom";

const SiteVisitBottomCTA = () => {
  return (
    <section className="bg-[#1A1F2C] py-16 text-white">
      <div className="container mx-auto px-4 max-w-[1400px]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Book Your Site Visit Today</h2>
          <p className="text-xl mb-8">
            Get expert structural engineering assessments for your London property from our team of certified professionals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-[#ea384c] hover:bg-[#d02e40]">
                <span className="flex items-center">
                  Book a Site Visit <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#1A1F2C]">
              <a href="tel:02080049060" className="flex items-center">
                Call 020 8004 9060
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SiteVisitBottomCTA;
