
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "./ui/button";
import BookingDialog from "./BookingDialog";

interface ContactDialogProps {
  children: React.ReactNode;
}

const ContactDialog = ({ children }: ContactDialogProps) => {
  return (
    <BookingDialog>
      {children}
    </BookingDialog>
  );
};

export default ContactDialog;
