
import React from 'react';
import { Tabs, TabsContent } from "@/components/ui/tabs";
import FAQTabs from './FAQTabs';
import FAQCategoryContent from './FAQCategoryContent';
import { FAQCategories } from './types';

interface FAQContentProps {
  categories: FAQCategories;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const FAQContent = ({ categories, activeTab, setActiveTab }: FAQContentProps) => {
  return (
    <div className="lg:col-span-3">
      <Tabs defaultValue="general" value={activeTab} onValueChange={setActiveTab} className="w-full">
        <FAQTabs categories={categories} />
        
        {Object.entries(categories).map(([category, items]) => (
          <TabsContent key={category} value={category} className="mt-0">
            <FAQCategoryContent category={category} items={items} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default FAQContent;
