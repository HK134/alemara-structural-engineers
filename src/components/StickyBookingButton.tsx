
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Calendar, X } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useLocation } from 'react-router-dom';

const StickyBookingButton = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const location = useLocation();
  
  // Don't show on admin/login/portal pages
  const adminOrPortalPages = [
    '/admin', 
    '/login', 
    '/client-login', 
    '/engineer-login', 
    '/client-dashboard',
    '/engineer-dashboard',
    '/engineer-projects-map',
    '/engineer-timesheet',
    '/engineer-invoices',
    '/engineer-messages',
    '/engineer-availability',
    '/engineer-company-policy',
    '/engineer-client-etiquette',
    '/analytics',
    '/seo'
  ];
  
  // Check if current path should hide the booking button
  const shouldHideButton = adminOrPortalPages.some(path => 
    location.pathname.startsWith(path)
  );
  
  if (shouldHideButton) return null;
  
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Popover open={isFormOpen} onOpenChange={setIsFormOpen}>
        <PopoverTrigger asChild>
          <Button 
            size="lg" 
            className="bg-[#ea384c]/90 hover:bg-[#ea384c] text-white rounded-full shadow-lg group transition-all duration-300 hover:scale-105"
            aria-label="Book a structural engineer"
          >
            {isFormOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <>
                <Calendar className="mr-2 h-5 w-5" />
                <span className="font-medium">Book Engineer</span>
              </>
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-[400px] h-[600px] border-2 border-[#ea384c]/20" side="top" align="end">
          <div className="bg-white rounded-md overflow-hidden shadow-xl h-full">
            <div className="p-4 bg-[#ea384c]/10">
              <h3 className="text-lg font-semibold text-[#1A1F2C]">Book a Structural Engineer</h3>
              <p className="text-sm text-gray-600">Complete in under 2 minutes</p>
            </div>
            <div className="p-4 h-[calc(100%-80px)]">
              <div className="text-center py-20">
                <h4 className="text-lg font-semibold mb-4">Booking Form</h4>
                <p className="text-gray-600">Booking form will be implemented here</p>
              </div>
            </div>
          </div>
        </PopoverContent>
      </Popover>
      
      <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
        <span className="bg-black/60 text-white text-xs px-2 py-1 rounded-full">
          Takes 2 mins
        </span>
      </div>
    </div>
  );
};

export default StickyBookingButton;
