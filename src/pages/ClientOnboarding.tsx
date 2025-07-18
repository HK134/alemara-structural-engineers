
import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2, CheckCircle } from 'lucide-react';
import { toast } from "sonner";
import { saveFormSubmissionToDatabase } from '@/utils/db/submissions';
import { Helmet } from 'react-helmet';

const serviceOptions = [
  { value: "structural-design", label: "Structural Design & Calculations" },
  { value: "loft-conversion", label: "Loft Conversion" },
  { value: "rear-extension", label: "Rear Extension" },
  { value: "structural-survey", label: "Structural Survey" },
  { value: "commercial", label: "Commercial Project" },
  { value: "bespoke-design", label: "Bespoke Design Solution" },
  { value: "other", label: "Other" },
];

const ClientOnboarding = () => {
  const [searchParams] = useSearchParams();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const navigate = useNavigate();
  
  const formSchema = z.object({
    firstName: z.string().min(2, "Name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Valid phone number is required"),
    address: z.string().min(1, "Address is required"),
    postcode: z.string().min(1, "Postcode is required"),
    serviceType: z.string().min(1, "Please select a service"),
    message: z.string().optional(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      postcode: "",
      serviceType: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);

    try {
      const result = await saveFormSubmissionToDatabase({
        ...data,
        message: data.message || '',
      }, 'client_onboarding');

      if (result.success) {
        setIsSuccess(true);
        toast.success("Thank you for your submission! We'll be in touch soon.");
        form.reset();
        
        setTimeout(() => {
          setIsSuccess(false);
        }, 5000);
      } else {
        toast.error(result.message || "Sorry, there was a problem submitting your form.");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Sorry, there was a problem submitting your form.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <Helmet>
        <title>Client Onboarding | London Structural Surveys</title>
        <meta name="description" content="Complete your client onboarding information for London Structural Surveys" />
      </Helmet>
      
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="bg-[#1A1F2C] p-6 text-white">
            <img 
              src="/lovable-uploads/96cb7441-1400-49aa-b4ac-57a2b03e7408.png" 
              alt="London Structural Surveys" 
              className="h-12 mb-4"
            />
            <h1 className="text-2xl md:text-3xl font-bold">Client Onboarding Form</h1>
            <p className="text-gray-300 mt-2">
              Please provide your details to begin working with London Structural Surveys
            </p>
          </div>
          
          {isSuccess ? (
            <div className="bg-green-50 p-8 text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">Thank You!</h3>
              <p className="text-green-700 mb-4">
                Your information has been successfully submitted. One of our structural engineers will contact you within 24 hours.
              </p>
              <Button 
                onClick={() => navigate('/')}
                className="bg-[#ea384c] hover:bg-[#d02e40] mt-4"
              >
                Visit Our Website
              </Button>
            </div>
          ) : (
            <div className="p-6 md:p-8">
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
                            <Input placeholder="Enter your first name" {...field} />
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
                            <Input placeholder="Enter your last name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email*</FormLabel>
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
                          <FormLabel>Phone*</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your phone number" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="address"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Address Line*</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter first line of address" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="postcode"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Postcode*</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter your postcode" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="serviceType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Service Required*</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a service" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {serviceOptions.map((service) => (
                              <SelectItem key={service.value} value={service.value}>
                                {service.label}
                              </SelectItem>
                            ))}
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
                        <FormLabel>Project Details (Optional)</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Please provide any additional information about your project requirements" 
                            className="min-h-[120px]" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="bg-blue-50 p-4 rounded-lg text-sm text-blue-800 flex items-start mb-6">
                    <div className="mr-2 mt-0.5">
                      <CheckCircle className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">Privacy Notice</p>
                      <p>Your information is securely protected and will only be used to provide our engineering services.</p>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <Button 
                      type="submit" 
                      className="w-full md:w-auto bg-[#ea384c] hover:bg-[#d02e40]" 
                      disabled={isSubmitting}
                      size="lg"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        "Submit Information"
                      )}
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ClientOnboarding;
