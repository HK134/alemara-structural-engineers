
import React from 'react';
import { FileSpreadsheet, Clock, Users } from 'lucide-react';

const SiteVisitBenefits = () => {
  return (
    <>
      <h2 className="text-2xl font-bold text-[#1A1F2C] mt-10 mb-4">How Alemara's Site Visits Benefit Clients</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
        <div className="text-center p-6 bg-gray-50 rounded-lg">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-[#ea384c]/10 rounded-full mb-4">
            <FileSpreadsheet className="h-6 w-6 text-[#ea384c]" />
          </div>
          <h3 className="font-semibold text-[#1A1F2C] mb-2">Accurate Design & Costing</h3>
          <p className="text-gray-600 text-sm">
            Detailed site information leads to precise designs and more accurate project cost estimates.
          </p>
        </div>

        <div className="text-center p-6 bg-gray-50 rounded-lg">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-[#ea384c]/10 rounded-full mb-4">
            <Clock className="h-6 w-6 text-[#ea384c]" />
          </div>
          <h3 className="font-semibold text-[#1A1F2C] mb-2">Reduced Delays</h3>
          <p className="text-gray-600 text-sm">
            Early identification of potential issues minimizes costly mid-project redesigns and construction delays.
          </p>
        </div>

        <div className="text-center p-6 bg-gray-50 rounded-lg">
          <div className="inline-flex items-center justify-center w-12 h-12 bg-[#ea384c]/10 rounded-full mb-4">
            <Users className="h-6 w-6 text-[#ea384c]" />
          </div>
          <h3 className="font-semibold text-[#1A1F2C] mb-2">Regulatory Compliance</h3>
          <p className="text-gray-600 text-sm">
            Ensuring designs meet building regulations and addressing specific London borough requirements.
          </p>
        </div>
      </div>
    </>
  );
};

export default SiteVisitBenefits;
