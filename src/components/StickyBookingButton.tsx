
import React from 'react';
import { Button } from "@/components/ui/button";
import { Calendar, Phone } from "lucide-react";
import BookingDialog from "./BookingDialog";
import { useIsMobile } from "@/hooks/use-mobile";

const StickyBookingButton = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in flex flex-col gap-2">
      <BookingDialog>
        <Button 
          size="lg" 
          className="bg-[#ea384c]/90 hover:bg-[#ea384c] text-white rounded-full shadow-lg group transition-all duration-300 hover:scale-105"
        >
          <Calendar className="mr-2 h-5 w-5" />
          <span className="font-medium">Book Survey</span>
        </Button>
      </BookingDialog>
      <a href="tel:02080049060" className={`${isMobile ? 'hidden' : 'block'}`}>
        <Button 
          size="lg" 
          className="bg-[#1A1F2C]/90 hover:bg-[#1A1F2C] text-white rounded-full shadow-lg group transition-all duration-300 hover:scale-105"
        >
          <Phone className="mr-2 h-5 w-5" />
          <span className="font-medium">Call Us</span>
        </Button>
      </a>
      <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
        <span className="bg-black/60 text-white text-xs px-2 py-1 rounded-full">
          Takes 2 mins
        </span>
      </div>
    </div>
  );
};

export default StickyBookingButton;
