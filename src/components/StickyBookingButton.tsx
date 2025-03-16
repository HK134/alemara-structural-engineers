
import React from 'react';
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import BookingDialog from "./BookingDialog";

const StickyBookingButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
      <BookingDialog>
        <Button 
          size="lg" 
          className="bg-[#ea384c]/90 hover:bg-[#ea384c] text-white rounded-full shadow-lg group transition-all duration-300 hover:scale-105"
        >
          <Calendar className="mr-2 h-5 w-5" />
          <span className="font-medium">Book Now</span>
        </Button>
      </BookingDialog>
      <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
        <span className="bg-black/60 text-white text-xs px-2 py-1 rounded-full">
          Takes 2 mins
        </span>
      </div>
    </div>
  );
};

export default StickyBookingButton;
