
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { MapPin, CalendarCheck, HardHat, Search, Building, Construction } from 'lucide-react';
import { Separator } from "@/components/ui/separator";
import BookingDialog from '@/components/BookingDialog';

const SiteVisitSidebar = () => {
  return (
    <div className="lg:w-1/3">
      {/* Contact Card */}
      <div className="bg-gray-50 rounded-lg border border-gray-200 p-6 mb-8 sticky top-24">
        <h3 className="text-xl font-bold text-[#1A1F2C] mb-4">Need Structural Engineering Help?</h3>
        <p className="text-gray-600 mb-6">
          Our certified structural engineers can assess your London property and provide expert guidance for your project.
        </p>
        <div className="space-y-4 mb-6">
          <div className="flex items-center gap-3">
            <div className="bg-[#ea384c]/10 p-2 rounded-full">
              <MapPin className="h-5 w-5 text-[#ea384c]" />
            </div>
            <div className="text-gray-700">
              Serving all 32 London boroughs
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-[#ea384c]/10 p-2 rounded-full">
              <CalendarCheck className="h-5 w-5 text-[#ea384c]" />
            </div>
            <div className="text-gray-700">
              Quick appointments available
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="bg-[#ea384c]/10 p-2 rounded-full">
              <HardHat className="h-5 w-5 text-[#ea384c]" />
            </div>
            <div className="text-gray-700">
              Chartered structural engineers
            </div>
          </div>
        </div>
        <BookingDialog>
          <Button className="w-full bg-[#ea384c] hover:bg-[#d02e40] text-white mb-3">
            Book a Site Visit
          </Button>
        </BookingDialog>
        <Button variant="outline" className="w-full">
          <a href="tel:02080049060" className="flex items-center justify-center w-full">
            Call 020 8004 9060
          </a>
        </Button>
      </div>

      {/* Related Services */}
      <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
        <h3 className="text-xl font-bold text-[#1A1F2C] mb-4">Related Services</h3>
        <div className="space-y-4">
          <Link to="/services/structural-surveys" className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors group">
            <Search className="h-5 w-5 text-[#ea384c] mr-3 mt-0.5" />
            <div>
              <h4 className="font-semibold text-[#1A1F2C] group-hover:text-[#ea384c] transition-colors">Structural Surveys</h4>
              <p className="text-sm text-gray-600">Comprehensive property assessments for structural issues</p>
            </div>
          </Link>
          <Separator />
          <Link to="/services/residential/extensions" className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors group">
            <Building className="h-5 w-5 text-[#ea384c] mr-3 mt-0.5" />
            <div>
              <h4 className="font-semibold text-[#1A1F2C] group-hover:text-[#ea384c] transition-colors">House Extensions</h4>
              <p className="text-sm text-gray-600">Structural engineering for residential extensions</p>
            </div>
          </Link>
          <Separator />
          <Link to="/services/residential/internal-alterations" className="flex items-start p-3 rounded-lg hover:bg-gray-50 transition-colors group">
            <Construction className="h-5 w-5 text-[#ea384c] mr-3 mt-0.5" />
            <div>
              <h4 className="font-semibold text-[#1A1F2C] group-hover:text-[#ea384c] transition-colors">Internal Alterations</h4>
              <p className="text-sm text-gray-600">Removing walls, creating openings, and structural modifications</p>
            </div>
          </Link>
        </div>
      </div>

      {/* Related Articles */}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
        <h3 className="text-xl font-bold text-[#1A1F2C] mb-4">Related Articles</h3>
        <div className="space-y-4">
          <Link to="/blog/loft-conversion-considerations" className="flex group">
            <div className="w-20 h-20 bg-gray-100 rounded overflow-hidden mr-3 flex-shrink-0">
              <img 
                src="/lovable-uploads/bb746e6a-6105-42d2-81e9-1c0805d61938.png" 
                alt="Loft conversion" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="font-medium text-[#1A1F2C] group-hover:text-[#ea384c] transition-colors text-sm">5 Things to Consider Before Starting a Loft Conversion</h4>
              <p className="text-xs text-gray-500 mt-1">June 15, 2023</p>
            </div>
          </Link>
          <Separator />
          <Link to="/blog/period-property-structural-issues" className="flex group">
            <div className="w-20 h-20 bg-gray-100 rounded overflow-hidden mr-3 flex-shrink-0">
              <img 
                src="/lovable-uploads/30f1d92e-b72a-4c9c-9edd-e07196399814.png" 
                alt="Period property" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h4 className="font-medium text-[#1A1F2C] group-hover:text-[#ea384c] transition-colors text-sm">Structural Issues in Period Properties: What to Look For</h4>
              <p className="text-xs text-gray-500 mt-1">April 10, 2023</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SiteVisitSidebar;
