
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import CheckCircle2 from '@/components/blog/CheckCircle2';

const SiteVisitHero = () => {
  return (
    <section className="bg-[#1A1F2C] py-16 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/lovable-uploads/1f9708d9-de83-4362-9b30-7fafe295163c.png')] bg-cover bg-center opacity-20"></div>
      <div className="container mx-auto px-4 max-w-[1400px] relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-[#ea384c]/20 px-4 py-2 rounded-full mb-4">
            <span className="text-[#ea384c] font-semibold text-sm">PROFESSIONAL STRUCTURAL ASSESSMENTS</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Why We Conduct Structural Engineering Site Visits</h1>
          <p className="text-xl mb-8">
            Detailed guide to our comprehensive engineering site visits - ensuring accuracy, safety, and compliance for London property projects
          </p>
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="flex items-center">
              <CheckCircle2 className="text-[#ea384c] mr-2 h-5 w-5" />
              <span>10+ Years Experience</span>
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="text-[#ea384c] mr-2 h-5 w-5" />
              <span>All London Boroughs</span>
            </div>
            <div className="flex items-center">
              <CheckCircle2 className="text-[#ea384c] mr-2 h-5 w-5" />
              <span>Certified Structural Engineers</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/contact">
              <Button size="lg" className="bg-[#ea384c] hover:bg-[#d02e40] text-white">
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

export default SiteVisitHero;
