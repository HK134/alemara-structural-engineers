
import React, { useState, useEffect } from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { Clock } from "lucide-react";

interface BookingDialogProps {
  children: React.ReactNode;
  buttonText?: string;
}

const BookingDialog = ({ children, buttonText = "Book a Structural Engineer" }: BookingDialogProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Load Typeform embed script if not already loaded
    if (!document.querySelector('script[src*="embed.typeform.com"]')) {
      const script = document.createElement('script');
      script.src = '//embed.typeform.com/next/embed.js';
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-hidden p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-xl font-bold text-[#1A1F2C]">Request a Structural Engineering Consultation</DialogTitle>
          <DialogDescription className="flex items-center text-sm">
            <Clock className="h-3 w-3 mr-1 text-[#ea384c]" />
            <span>Takes only 2 minutes</span>
          </DialogDescription>
        </DialogHeader>
        
        <div className="p-6 pt-2">
          <div data-tf-live="01JKMCBJRZQJH52ACHS9JVY1AK" style={{ width: '100%', height: '600px' }}></div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;
