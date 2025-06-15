
import React, { useState } from 'react';
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
          <div className="text-center py-20">
            <h4 className="text-lg font-semibold mb-4">Booking Form</h4>
            <p className="text-gray-600">Booking form will be implemented here</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;
