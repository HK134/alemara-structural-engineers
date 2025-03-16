
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqItems = [
  {
    question: "When do I need a structural engineer rather than just a RICS surveyor?",
    answer: "While RICS surveyors provide general property assessments, you need a structural engineer when specific structural issues are identified or suspected. This includes visible cracks, signs of subsidence, planned structural alterations, or when a RICS survey highlights potential structural concerns that require specialist investigation."
  },
  {
    question: "How quickly can you conduct a structural inspection after I contact you?",
    answer: "We understand the time-sensitive nature of property purchases and structural concerns. In most cases, we can arrange an inspection within 2-3 working days across London. For urgent cases, we offer a priority service with next-day inspections where possible."
  },
  {
    question: "What's included in your structural assessment report?",
    answer: "Our comprehensive reports include detailed analysis of the structural issue, potential causes, supporting photographic evidence, and clear recommendations for remedial work. We also provide an assessment of the urgency of repairs and, where requested, indicative costs for the recommended works."
  },
  {
    question: "How much does a structural inspection cost?",
    answer: "Our fees depend on the property size, location, and the specific issues requiring assessment. Typical inspections range from £550 for crack assessments in smaller properties to £950+ for comprehensive structural surveys of larger homes. We provide transparent, no-obligation quotes after understanding your specific requirements."
  },
  {
    question: "Will your report help me negotiate with the property seller?",
    answer: "Absolutely. Our detailed, professional reports are specifically designed to help in property negotiations. They provide clear evidence of any structural issues, the scope of required repairs, and potential costs – giving you concrete information to renegotiate the purchase price or request that sellers complete necessary repairs."
  },
  {
    question: "Do you recommend contractors for the remedial work?",
    answer: "Yes, we can recommend trusted contractors from our network of specialists who are experienced in implementing our recommended solutions. We can also provide specifications for the work and, if required, oversee the repairs to ensure they're completed to the necessary standard."
  }
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F2C] mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Get answers to common questions about our structural engineering assessments.
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
          <p className="text-gray-700 mb-4">Still have questions about structural issues with your property?</p>
          <a href="#contact" className="text-[#ea384c] hover:underline font-semibold">Contact our structural engineers directly</a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
