
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqItems = [
  {
    question: "How long does a structural survey take?",
    answer: "A typical structural survey in London takes 2-4 hours depending on the property size and complexity. For larger properties or those with significant concerns, we may need up to a full day to complete a thorough assessment."
  },
  {
    question: "How quickly can I get my survey report?",
    answer: "We deliver all structural survey reports within 48 hours of completing the inspection. If you have an urgent need, we offer an express service with same-day reports for an additional fee."
  },
  {
    question: "What's the difference between a structural survey and a homebuyer's report?",
    answer: "A structural survey is much more comprehensive than a homebuyer's report. Our structural surveys involve a detailed inspection of all accessible parts of the property, focusing specifically on structural elements and providing in-depth analysis of any defects. A homebuyer's report is more general and less detailed."
  },
  {
    question: "Do I need to be present during the survey?",
    answer: "While not mandatory, we recommend that clients be present at least at the beginning and end of the survey. This allows us to discuss any specific concerns you have beforehand and provide immediate feedback on major findings afterward."
  },
  {
    question: "How much does a structural survey cost in London?",
    answer: "The cost varies depending on the property size, location, age, and complexity. Surveys typically range from £600 for a small flat to £1,500+ for larger properties. We provide transparent quotes with no hidden fees after understanding your specific requirements."
  },
  {
    question: "Do you provide recommendations for structural engineers or contractors?",
    answer: "Yes, our reports include actionable recommendations, and we can refer you to trusted structural engineers and contractors in London if remedial work is required. We have an extensive network of professionals we've worked with over many years."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-survey-primary mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-survey-dark max-w-3xl mx-auto">
            Get answers to common questions about our structural survey services in London.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-medium text-survey-primary hover:text-survey-accent">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-survey-dark">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-survey-dark mb-4">Still have questions? We're here to help!</p>
          <a href="#contact" className="text-survey-accent hover:underline font-semibold">Contact us for more information</a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
