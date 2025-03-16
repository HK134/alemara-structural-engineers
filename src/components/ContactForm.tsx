
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
      description: "We'll be in touch within 24 hours to discuss your survey needs.",
      duration: 5000,
    });
  };

  return (
    <section id="contact" className="py-20 bg-survey-light">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-survey-primary mb-6">Get Your Structural Survey Quote</h2>
            <p className="text-xl text-survey-dark mb-8">
              Fill out the form for a no-obligation quote or to schedule a call with one of our structural engineers.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-survey-accent mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-survey-primary text-lg">Call Us</h3>
                  <p className="text-survey-dark">020 1234 5678</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-survey-accent mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-survey-primary text-lg">Email Us</h3>
                  <p className="text-survey-dark">info@londonstructuralsurveys.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-survey-accent mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-survey-primary text-lg">Our Office</h3>
                  <p className="text-survey-dark">123 Structural Avenue, London, EC1V 9BD</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold text-survey-primary text-lg mb-3">Areas We Cover in London</h3>
              <p className="text-survey-dark mb-4">
                We provide structural survey services across all London boroughs, including:
              </p>
              <div className="grid grid-cols-2 gap-2 text-survey-dark">
                <div>• Westminster</div>
                <div>• Kensington & Chelsea</div>
                <div>• Camden</div>
                <div>• Islington</div>
                <div>• Hackney</div>
                <div>• Tower Hamlets</div>
                <div>• Lambeth</div>
                <div>• Southwark</div>
                <div>• Greenwich</div>
                <div>• And all other boroughs</div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-survey-accent">
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
                <Label htmlFor="surveyType">Survey Type*</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select survey type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="full">Full Structural Survey</SelectItem>
                    <SelectItem value="prepurchase">Pre-Purchase Survey</SelectItem>
                    <SelectItem value="defect">Specific Defect Analysis</SelectItem>
                    <SelectItem value="party">Party Wall Survey</SelectItem>
                    <SelectItem value="renovation">Renovation Consultation</SelectItem>
                    <SelectItem value="unsure">Not Sure - Need Advice</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Additional Information</Label>
                <Textarea id="message" placeholder="Tell us about your property and specific concerns..." className="h-32" />
              </div>
              
              <Button type="submit" className="w-full bg-survey-accent hover:bg-opacity-90 text-survey-primary text-lg">
                Request Your Free Quote
              </Button>
              
              <p className="text-sm text-survey-muted text-center">
                By submitting this form, you agree to our privacy policy and terms of service.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
