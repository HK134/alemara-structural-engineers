
import React from 'react';
import { AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { FAQItem } from './types';

interface FAQAccordionItemProps {
  item: FAQItem;
  index: number;
  category: string;
}

const FAQAccordionItem = ({ item, index, category }: FAQAccordionItemProps) => {
  return (
    <AccordionItem 
      key={`faq-${category}-${index}`} 
      value={`item-${index}`}
      id={`faq-${category}-${index}`}
      className="border-b last:border-0 px-4"
    >
      <AccordionTrigger className="text-left text-lg font-medium text-[#1A1F2C] hover:text-[#ea384c] py-6">
        {item.question}
      </AccordionTrigger>
      <AccordionContent className="text-gray-700 pb-6">
        {item.answer}
      </AccordionContent>
    </AccordionItem>
  );
};

export default FAQAccordionItem;
