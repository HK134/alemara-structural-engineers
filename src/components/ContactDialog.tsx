import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Phone, Mail } from "lucide-react";
import ContactForm from "./ContactForm";
interface ContactDialogProps {
  children: React.ReactNode;
}
const ContactDialog = ({
  children
}: ContactDialogProps) => {
  return <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          
        </DialogHeader>
        
        <ContactForm />
      </DialogContent>
    </Dialog>;
};
export default ContactDialog;