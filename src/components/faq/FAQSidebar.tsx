
import React from 'react';
import { ArrowRight, HelpCircle } from 'lucide-react';
import FAQQuickLink from './FAQQuickLink';
import { FAQItem } from './types';

interface FAQSidebarProps {
  quickLinks: FAQItem[];
  setActiveTab: (tab: string) => void;
}

const FAQSidebar = ({ quickLinks, setActiveTab }: FAQSidebarProps) => {
  return (
    <div className="lg:col-span-1">
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h3 className="flex items-center text-xl font-bold text-[#1A1F2C] mb-6">
          <ArrowRight className="h-5 w-5 text-[#ea384c] mr-2" />
          Quick Links
        </h3>
        
        <ul className="space-y-4">
          {quickLinks.map((item, index) => (
            <FAQQuickLink 
              key={`quick-link-${index}`}
              question={item.question}
              index={index}
              setActiveTab={setActiveTab}
            />
          ))}
        </ul>
        
        <div className="mt-8 bg-red-50 rounded-lg p-6">
          <h3 className="flex items-center text-xl font-bold text-[#1A1F2C] mb-4">
            <HelpCircle className="h-5 w-5 text-[#ea384c] mr-2" />
            Need More Help?
          </h3>
          <p className="text-gray-700">
            Can't find what you're looking for? Contact our team directly.
          </p>
          <a 
            href="#contact" 
            className="mt-4 inline-block text-[#ea384c] font-medium hover:underline"
          >
            Get in touch →
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQSidebar;
