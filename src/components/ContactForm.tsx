
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/components/ui/use-toast";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real implementation, this would send the form data to a server
    toast({
      title: "Request submitted successfully!",
      description: "Our structural engineers will be in touch within 24 hours to discuss your requirements.",
      duration: 5000,
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F2C] mb-6">Book Your Structural Inspection</h2>
            <p className="text-xl text-gray-700 mb-8">
              Fill out the form for a no-obligation quote or to discuss your structural concerns with one of our chartered engineers.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-[#ea384c] mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-[#1A1F2C] text-lg">Call Us</h3>
                  <p className="text-gray-700">020 1234 5678</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-[#ea384c] mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-[#1A1F2C] text-lg">Email Us</h3>
                  <p className="text-gray-700">info@alemara.co.uk</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-[#ea384c] mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-[#1A1F2C] text-lg">Our Office</h3>
                  <p className="text-gray-700">123 Engineering Street, London, EC1V 9BD</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
              <h3 className="font-semibold text-[#1A1F2C] text-lg mb-3">Common Structural Issues We Assess</h3>
              <div className="grid grid-cols-1 gap-2 text-gray-700">
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-[#ea384c] mr-2"></div>
                  <div>Cracks in walls, ceilings, and foundations</div>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-[#ea384c] mr-2"></div>
                  <div>Subsidence and settlement issues</div>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-[#ea384c] mr-2"></div>
                  <div>Structural movement and stability concerns</div>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-[#ea384c] mr-2"></div>
                  <div>Dampness affecting structural elements</div>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-[#ea384c] mr-2"></div>
                  <div>Timber defects, including rot and beetle infestation</div>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-[#ea384c] mr-2"></div>
                  <div>Roof structure assessment</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-[#ea384c]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name*</Label>
                  <Input id="firstName" placeholder="Enter first name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name*</Label>
                  <Input id="lastName" placeholder="Enter last name" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email Address*</Label>
                <Input id="email" type="email" placeholder="Enter your email" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number*</Label>
                <Input id="phone" placeholder="Enter your phone number" required />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="propertyType">Property Type*</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select property type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="terrace">Terraced House</SelectItem>
                    <SelectItem value="semidetached">Semi-Detached House</SelectItem>
                    <SelectItem value="detached">Detached House</SelectItem>
                    <SelectItem value="flat">Flat/Apartment</SelectItem>
                    <SelectItem value="commercial">Commercial Property</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="serviceType">Service Required*</Label>
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
                <Label htmlFor="message">Describe Your Structural Concerns</Label>
                <Textarea id="message" placeholder="Please provide details about the structural issues or concerns you have..." className="h-32" />
              </div>
              
              <Button type="submit" className="w-full bg-[#ea384c] hover:bg-opacity-90 text-white text-lg">
                Request a Structural Assessment
              </Button>
              
              <p className="text-sm text-gray-500 text-center">
                We aim to respond to all enquiries within 24 hours during business days.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
