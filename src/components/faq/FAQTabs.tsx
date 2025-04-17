
import React from 'react';
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Info, FileText, LayoutGrid, HelpCircle } from "lucide-react";
import { FAQCategories } from './types';

interface FAQTabsProps {
  categories: FAQCategories;
}

const FAQTabs = ({ categories }: FAQTabsProps) => {
  return (
    <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
      <TabsTrigger value="general" className="flex items-center gap-2">
        <Info className="h-4 w-4" />
        <span>General Questions</span>
        <span className="ml-1 bg-red-100 text-red-800 text-xs px-2 py-0.5 rounded-full">{categories.general.length}</span>
      </TabsTrigger>
      <TabsTrigger value="buildingControl" className="flex items-center gap-2">
        <FileText className="h-4 w-4" />
        <span>Building Control</span>
        <span className="ml-1 bg-gray-100 text-gray-800 text-xs px-2 py-0.5 rounded-full">{categories.buildingControl.length}</span>
      </TabsTrigger>
      <TabsTrigger value="planning" className="flex items-center gap-2">
        <LayoutGrid className="h-4 w-4" />
        <span>Planning</span>
        <span className="ml-1 bg-gray-100 text-gray-800 text-xs px-2 py-0.5 rounded-full">{categories.planning.length}</span>
      </TabsTrigger>
      <TabsTrigger value="other" className="flex items-center gap-2">
        <HelpCircle className="h-4 w-4" />
        <span>Other Questions</span>
        <span className="ml-1 bg-gray-100 text-gray-800 text-xs px-2 py-0.5 rounded-full">{categories.other.length}</span>
      </TabsTrigger>
    </TabsList>
  );
};

export default FAQTabs;
