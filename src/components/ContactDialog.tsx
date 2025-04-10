
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import ContactForm from './ContactForm';

interface ContactDialogProps {
  children: React.ReactNode;
}

const ContactDialog = ({ children }: ContactDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[90%] md:max-w-[85%] lg:max-w-[80%]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center mb-4">Contact Us</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left side - Contact details */}
          <div className="bg-[#1A1F2C] p-6 rounded-lg text-white">
            <div className="flex items-center mb-4">
              <Phone className="h-5 w-5 text-[#ea384c] mr-3" />
              <div>
                <p className="text-sm text-gray-300">Call us directly</p>
                <a href="tel:02080049060" className="text-lg font-bold hover:text-[#ea384c] transition-colors">
                  020 8004 9060
                </a>
              </div>
            </div>
            
            <div className="flex items-center mb-4">
              <Mail className="h-5 w-5 text-[#ea384c] mr-3" />
              <div>
                <p className="text-sm text-gray-300">Email us</p>
                <a href="mailto:info@londonstructuralsurveys.com" className="text-lg font-bold hover:text-[#ea384c] transition-colors">
                  info@londonstructuralsurveys.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center mb-4">
              <Clock className="h-5 w-5 text-[#ea384c] mr-3" />
              <div>
                <p className="text-sm text-gray-300">Response time</p>
                <p className="text-lg font-bold">Within 4 hours (business hours)</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-[#ea384c] mr-3" />
              <div>
                <p className="text-sm text-gray-300">Service area</p>
                <p className="text-lg font-bold">Greater London</p>
              </div>
            </div>
          </div>
          
          {/* Right side - Contact form */}
          <div className="bg-white rounded-lg">
            <ContactForm inDialog={true} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
