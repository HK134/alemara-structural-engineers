
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Phone, Mail } from "lucide-react";
import ContactForm from "./ContactForm";

interface ContactDialogProps {
  children: React.ReactNode;
}

const ContactDialog = ({ children }: ContactDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Contact Us</DialogTitle>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-2 mb-4 text-[#1A1F2C]">
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-[#ea384c]" />
              <a href="tel:02080049060" className="hover:text-[#ea384c] transition-colors">
                020 8004 9060
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-[#ea384c]" />
              <a href="mailto:info@londonstructuralsurveys.com" className="hover:text-[#ea384c] transition-colors">
                info@londonstructuralsurveys.com
              </a>
            </div>
          </div>
        </DialogHeader>
        <ContactForm />
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
