
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, ClipboardCheck, FileText, SearchCheck, Scale, Wrench } from "lucide-react";

const serviceItems = [
  {
    icon: <Building className="h-10 w-10 text-survey-accent" />,
    title: "Full Structural Surveys",
    description: "Comprehensive assessment of all structural elements of your property, identifying any defects or concerns."
  },
  {
    icon: <ClipboardCheck className="h-10 w-10 text-survey-accent" />,
    title: "Pre-Purchase Surveys",
    description: "Detailed inspection before you buy to identify potential issues and maintenance requirements."
  },
  {
    icon: <FileText className="h-10 w-10 text-survey-accent" />,
    title: "Building Reports",
    description: "Clear, jargon-free reports detailing our findings with actionable recommendations."
  },
  {
    icon: <SearchCheck className="h-10 w-10 text-survey-accent" />,
    title: "Defect Analysis",
    description: "Targeted inspections to diagnose specific structural issues and recommend remedial solutions."
  },
  {
    icon: <Scale className="h-10 w-10 text-survey-accent" />,
    title: "Party Wall Surveys",
    description: "Expert guidance through the party wall process, ensuring legal compliance and protecting your interests."
  },
  {
    icon: <Wrench className="h-10 w-10 text-survey-accent" />,
    title: "Renovation Consultation",
    description: "Professional advice on structural modifications for renovation or extension projects."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-survey-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-survey-primary mb-4">Our Structural Survey Services</h2>
          <p className="text-xl text-survey-dark max-w-3xl mx-auto">
            We offer a comprehensive range of structural survey services tailored to London properties, 
            from Victorian terraces to modern apartments.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceItems.map((service, index) => (
            <Card key={index} className="border-2 hover:border-survey-accent transition-all duration-300 hover:shadow-lg">
              <CardHeader className="pb-2">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl text-survey-primary">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-survey-dark text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
