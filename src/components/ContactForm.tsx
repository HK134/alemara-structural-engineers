
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock, CheckCircle, ArrowRight } from "lucide-react";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { submitFormToEmail } from "@/utils/emailSubmission";

const formSchema = z.object({
  firstName: z.string().min(2, { message: "First name must be at least 2 characters." }),
  lastName: z.string().min(2, { message: "Last name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(5, { message: "Please enter a valid phone number." }),
  serviceType: z.string({ required_error: "Please select a service type." }),
  message: z.string().optional(),
});

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    try {
      // Log form data for development purposes
      console.log("Form submission data:", data);
      
      // Send form data to email
      const result = await submitFormToEmail(data, "Contact Form");
      
      if (result.success) {
        toast({
          title: "Request submitted successfully!",
          description: "Our structural engineers will be in touch within 24 hours to discuss your requirements.",
          duration: 5000,
        });
        
        // Reset form
        form.reset();
      } else {
        throw new Error(result.message);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Submission failed",
        description: "There was an error submitting your request. Please try again later.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <span className="inline-block bg-[#ea384c] text-white text-sm font-semibold px-3 py-1 rounded-full mb-4">Fast Response Guaranteed</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F2C] mb-4">Book Your Structural Inspection Today</h2>
            <p className="text-xl text-gray-700 mb-6">
              Complete the form for priority scheduling. A senior structural engineer will contact you within 4 hours.
            </p>
            
            <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 mb-8">
              <h3 className="font-semibold text-[#1A1F2C] text-lg mb-4 flex items-center">
                <CheckCircle className="text-[#ea384c] mr-2 h-5 w-5" />
                What Our Process Includes:
              </h3>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-start">
                  <div className="bg-[#ea384c] rounded-full text-white w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">1</div>
                  <div>
                    <span className="font-semibold block">Initial Consultation</span>
                    <span className="text-sm">We discuss your concerns and establish if a structural inspection is needed</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#ea384c] rounded-full text-white w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">2</div>
                  <div>
                    <span className="font-semibold block">On-site Inspection</span>
                    <span className="text-sm">Thorough assessment by a certified structural engineer</span>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-[#ea384c] rounded-full text-white w-6 h-6 flex items-center justify-center mr-3 mt-1 flex-shrink-0">3</div>
                  <div>
                    <span className="font-semibold block">Detailed Report</span>
                    <span className="text-sm">Comprehensive findings and recommendations within 48 hours</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-[#ea384c] mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-[#1A1F2C] text-lg">Call Us</h3>
                  <p className="text-gray-700">020 8004 9060</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-[#ea384c] mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-[#1A1F2C] text-lg">Email Us</h3>
                  <p className="text-gray-700">info@londonstructuralsurveys.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-[#ea384c] mr-4 mt-1" />
                <div>
                  <h3 className="font-semibold text-[#1A1F2C] text-lg">Our Office</h3>
                  <p className="text-gray-700">6 Highbury Corner, London, N5 1RD</p>
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
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-[#1A1F2C]">Request a Structural Assessment</h3>
              <div className="flex items-center bg-[#1A1F2C] text-white text-xs px-3 py-1 rounded-full">
                <Clock className="h-3 w-3 mr-1" />
                <span>Takes only 2 minutes</span>
              </div>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name*</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter first name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name*</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter last name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address*</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="Enter your email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number*</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your phone number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="serviceType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Service Required*</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select service type" />
                          </SelectTrigger>
                        </FormControl>
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
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Describe Your Structural Concerns</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Please provide details about the structural issues or concerns you have..." 
                          className="h-24"
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="bg-gray-100 p-3 rounded-lg border border-gray-200 text-sm text-gray-600 flex items-start mb-2">
                  <CheckCircle className="text-[#ea384c] h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
                  <span>By submitting this form, you'll secure priority scheduling with one of our senior structural engineers. We're currently booking appointments within 3-5 business days.</span>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-[#ea384c] hover:bg-opacity-90 text-white text-lg group relative overflow-hidden h-14"
                  disabled={isSubmitting}
                >
                  <span className="relative z-10 flex items-center">
                    {isSubmitting ? "Submitting..." : "Request a Structural Assessment"}
                    {!isSubmitting && <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />}
                  </span>
                  <span className="absolute inset-0 bg-white bg-opacity-20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                </Button>
                
                <p className="text-sm text-gray-500 text-center mt-4">
                  <Clock className="inline-block mr-1 h-3 w-3" />
                  We typically respond to all enquiries within 4 hours during business hours.
                </p>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
