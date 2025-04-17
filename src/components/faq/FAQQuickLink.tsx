
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface FAQQuickLinkProps {
  question: string;
  index: number;
  setActiveTab: (tab: string) => void;
}

const FAQQuickLink = ({ question, index, setActiveTab }: FAQQuickLinkProps) => {
  return (
    <li>
      <a 
        href={`#faq-${index}`}
        className="flex items-center text-gray-700 hover:text-[#ea384c] transition-colors group"
        onClick={(e) => {
          e.preventDefault();
          setActiveTab("general");
          setTimeout(() => {
            document.getElementById(`faq-general-${index}`)?.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }}
      >
        <ArrowRight className="h-4 w-4 text-[#ea384c] mr-2 transform group-hover:translate-x-1 transition-transform" />
        {question}
      </a>
    </li>
  );
};

export default FAQQuickLink;
