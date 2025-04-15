
import React, { useState } from 'react';
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { toast } from "sonner"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2, CheckCircle, Phone, Mail } from 'lucide-react';
import { submitFormToEmail } from '@/utils/emailSubmission';

const serviceOptions = [
  { value: "structural-design", label: "Structural Design & Calculations" },
  { value: "loft-conversion", label: "Loft Conversion" },
  { value: "rear-extension", label: "Rear Extension" },
  { value: "structural-survey", label: "Structural Survey" },
  { value: "commercial", label: "Commercial Project" },
  { value: "bespoke-design", label: "Bespoke Design Solution" },
  { value: "other", label: "Other" },
];

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const formSchema = z.object({
    firstName: z.string().min(2, "Name is required"),
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
      email: "",
      phone: "",
      address: "",
      postcode: "",
      serviceType: "",
      message: "",
    },
  })

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);

    try {
      const result = await submitFormToEmail({
        ...data,
        lastName: "",
        message: data.message || '',
      }, 'contact');

      if (result.success) {
        setIsSuccess(true);
        toast.success(result.message || "Thank you for your message! We'll be in touch soon.");
        form.reset({
          firstName: '',
          email: '',
          phone: '',
          address: '',
          postcode: '',
          serviceType: '',
          message: '',
        });
        
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
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get in touch with our team of expert structural engineers. We'll respond to all inquiries within 4 hours during business hours.
          </p>
        </div>
        
        <div className="bg-[#1A1F2C] text-white p-4 rounded-lg max-w-3xl mx-auto mb-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Phone className="h-5 w-5 text-[#ea384c]" />
            <a href="tel:02080049060" className="text-white hover:text-[#ea384c] transition-colors font-semibold">
              020 8004 9060
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="h-5 w-5 text-[#ea384c]" />
            <a href="mailto:info@alemara.co.uk" className="text-white hover:text-[#ea384c] transition-colors font-semibold">
              info@alemara.co.uk
            </a>
          </div>
        </div>
        
        <div className="w-full max-w-3xl mx-auto">
          {isSuccess ? (
            <div className="bg-green-50 p-8 rounded-lg border border-green-100 text-center">
              <div className="flex justify-center mb-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-green-800 mb-2">Thank You!</h3>
              <p className="text-green-700 mb-4">
                Your message has been successfully submitted. One of our structural engineers will contact you within 24 hours.
              </p>
              <Button 
                variant="outline" 
                onClick={() => setIsSuccess(false)}
                className="hover:bg-green-100"
              >
                Submit Another Inquiry
              </Button>
            </div>
          ) : (
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name*</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter your name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
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
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message (Optional)</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Please provide any additional information about your requirements" 
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
                    <p>Your information is securely protected and will only be used to respond to your inquiry.</p>
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
                      "Submit Inquiry"
                    )}
                  </Button>
                </div>
              </form>
            </Form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
