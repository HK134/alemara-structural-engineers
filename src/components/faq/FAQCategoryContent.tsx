
import React from 'react';
import { Accordion } from "@/components/ui/accordion";
import { Info, FileText, LayoutGrid, HelpCircle } from "lucide-react";
import FAQAccordionItem from './FAQAccordionItem';
import { FAQItem } from './types';

interface FAQCategoryContentProps {
  category: string;
  items: FAQItem[];
}

const FAQCategoryContent = ({ category, items }: FAQCategoryContentProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border p-1">
      <div className="flex items-center p-4 mb-2">
        {category === "general" && <Info className="h-5 w-5 text-[#ea384c] mr-2" />}
        {category === "buildingControl" && <FileText className="h-5 w-5 text-[#ea384c] mr-2" />}
        {category === "planning" && <LayoutGrid className="h-5 w-5 text-[#ea384c] mr-2" />}
        {category === "other" && <HelpCircle className="h-5 w-5 text-[#ea384c] mr-2" />}
        <h3 className="text-2xl font-bold text-[#1A1F2C]">
          {category === "general" && "General Questions"}
          {category === "buildingControl" && "Building Control"}
          {category === "planning" && "Planning"}
          {category === "other" && "Other Questions"}
        </h3>
      </div>
      
      <Accordion type="single" collapsible className="w-full">
        {items.map((item, index) => (
          <FAQAccordionItem
            key={`faq-${category}-${index}`}
            item={item}
            index={index}
            category={category}
          />
        ))}
      </Accordion>
    </div>
  );
};

export default FAQCategoryContent;
