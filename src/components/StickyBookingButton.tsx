
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Calendar, X } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useLocation } from 'react-router-dom';

const StickyBookingButton = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const location = useLocation();
  
  // Hide the button on all pages since we're using the new Typeform side button
  return null;
};

export default StickyBookingButton;
