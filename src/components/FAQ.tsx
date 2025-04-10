
import React, { useState } from 'react';
import FAQSidebar from './faq/FAQSidebar';
import FAQContent from './faq/FAQContent';
import { faqCategories } from './faq/faqData';

const FAQ = () => {
  const [activeTab, setActiveTab] = useState("general");
  
  return (
    <section id="faq" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F2C] mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Find answers to common questions about our structural engineering services
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-10">
          {/* Quick Links Sidebar */}
          <FAQSidebar 
            quickLinks={faqCategories.general}
            setActiveTab={setActiveTab}
          />
          
          {/* FAQ Content */}
          <FAQContent 
            categories={faqCategories}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
