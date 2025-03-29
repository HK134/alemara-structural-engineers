
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqItems = [
  {
    question: "What services does Alemara Structural Engineering provide?",
    answer: "We offer a comprehensive range of structural engineering services including residential structural designs, loft conversions, rear extensions, structural surveys, commercial projects, and bespoke design solutions. Our team of certified engineers provides expertise across all London boroughs for both residential and commercial properties."
  },
  {
    question: "How long does the structural design process typically take?",
    answer: "The timeline varies based on project complexity. Simple residential designs can be completed in 1-2 weeks, while more complex projects may take 3-4 weeks. We pride ourselves on meeting agreed deadlines and can offer expedited services when required for time-sensitive projects."
  },
  {
    question: "Do you handle planning and building regulations approval?",
    answer: "Yes, our designs are prepared with full consideration of current building regulations. We have a 100% approval rate with building control authorities across all London boroughs. While we don't submit planning applications directly, our drawings and specifications are prepared to the standards required for planning submission."
  },
  {
    question: "What makes Alemara different from other structural engineering firms?",
    answer: "With 10 years of experience specializing in London properties, we understand the unique challenges of the capital's diverse building stock. We're known for our jargon-free approach to engineering, ensuring clients fully understand our designs and recommendations. Our strong relationships with local councils and 100% building control approval rate demonstrate our technical expertise and local knowledge."
  },
  {
    question: "Can you work with my architect or contractor?",
    answer: "Absolutely. We regularly collaborate with architects, contractors, and other construction professionals. Our team integrates seamlessly into existing project teams, providing the structural expertise needed while communicating effectively with all stakeholders. We're happy to join projects at any stage, from initial concept to construction."
  },
  {
    question: "What information do you need to provide a quote for my project?",
    answer: "To provide an accurate quote, we typically need a brief description of your project, property location, any existing architectural drawings (if available), and your project timeline. For more complex projects, a brief site visit may be necessary before finalizing costs. We provide transparent, no-obligation quotes for all our services."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F2C] mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Get answers to common questions about our structural engineering services.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium text-[#1A1F2C] hover:text-[#ea384c]">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-700 mb-4">Still have questions about our structural engineering services?</p>
          <a href="#contact" className="text-[#ea384c] hover:underline font-semibold">Contact our engineers directly</a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
