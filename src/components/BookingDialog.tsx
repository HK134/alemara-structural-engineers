
import React from 'react';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle, 
  DialogTrigger 
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, CheckCircle, Clock } from "lucide-react";

interface BookingDialogProps {
  children: React.ReactNode;
  buttonText?: string;
}

const BookingDialog = ({ children, buttonText = "Book a Structural Survey" }: BookingDialogProps) => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    toast({
      title: "Request submitted successfully!",
      description: "Our structural engineers will be in touch within 24 hours to discuss your requirements.",
      duration: 5000,
    });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-[#1A1F2C]">Request a Structural Assessment</DialogTitle>
          <DialogDescription className="flex items-center text-sm">
            <Clock className="h-3 w-3 mr-1 text-[#ea384c]" />
            <span>Takes only 2 minutes</span>
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="dialogFirstName">First Name*</Label>
              <Input id="dialogFirstName" placeholder="Enter first name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="dialogLastName">Last Name*</Label>
              <Input id="dialogLastName" placeholder="Enter last name" required />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="dialogEmail">Email Address*</Label>
            <Input id="dialogEmail" type="email" placeholder="Enter your email" required />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="dialogPhone">Phone Number*</Label>
            <Input id="dialogPhone" placeholder="Enter your phone number" required />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="dialogServiceType">Service Required*</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Select service type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rics-follow">Post-RICS Survey Assessment</SelectItem>
                <SelectItem value="crack">Crack Assessment</SelectItem>
                <SelectItem value="subsidence">Subsidence Investigation</SelectItem>
                <SelectItem value="prepurchase">Pre-Purchase Structural Inspection</SelectItem>
                <SelectItem value="party">Party Wall Assessment</SelectItem>
                <SelectItem value="defect">Structural Defect Analysis</SelectItem>
                <SelectItem value="unsure">Not Sure - Need Advice</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="dialogMessage">Describe Your Structural Concerns</Label>
            <Textarea id="dialogMessage" placeholder="Please provide details about the structural issues or concerns you have..." className="h-20" />
          </div>

          <div className="bg-gray-100 p-3 rounded-lg border border-gray-200 text-sm text-gray-600 flex items-start">
            <CheckCircle className="text-[#ea384c] h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
            <span>By submitting this form, you'll secure priority scheduling with one of our senior structural engineers.</span>
          </div>
          
          <Button type="submit" className="w-full bg-[#ea384c] hover:bg-opacity-90 text-white group relative overflow-hidden">
            <span className="relative z-10 flex items-center">
              {buttonText}
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <span className="absolute inset-0 bg-white bg-opacity-20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default BookingDialog;
