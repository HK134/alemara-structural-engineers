
import React from 'react';
import EngineerDashboardHeader from '@/components/EngineerDashboardHeader';
import AIDraftGenerator from '@/components/AIDraftGenerator';

const EngineerMessages = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <EngineerDashboardHeader />
      
      <div className="container mx-auto py-8 px-4">
        <h1 className="text-2xl font-bold mb-6">Client Response Assistant</h1>
        
        <div className="mb-6">
          <p className="text-gray-600">
            Use this tool to quickly generate professional response drafts for new client inquiries.
            Customize the template options to match the specific requirements of the inquiry.
          </p>
        </div>
        
        <AIDraftGenerator />
      </div>
    </div>
  );
};

export default EngineerMessages;
