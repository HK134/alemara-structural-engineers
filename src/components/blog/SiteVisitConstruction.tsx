
import React from 'react';

const SiteVisitConstruction = () => {
  return (
    <>
      <h2 className="text-2xl font-bold text-[#1A1F2C] mt-10 mb-4">Construction Phase Site Visits</h2>
      <p>
        Our involvement doesn't end with the initial site visit. We also conduct critical inspection visits during construction:
      </p>

      <div className="space-y-4 my-6">
        <div className="flex items-start gap-4">
          <div className="bg-[#ea384c]/10 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
            <span className="text-[#ea384c] font-bold">1</span>
          </div>
          <div>
            <h3 className="font-semibold text-[#1A1F2C]">Foundation Inspection</h3>
            <p className="text-gray-600">Verifying that foundations are constructed according to design specifications before they're covered.</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="bg-[#ea384c]/10 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
            <span className="text-[#ea384c] font-bold">2</span>
          </div>
          <div>
            <h3 className="font-semibold text-[#1A1F2C]">Steel/Structural Frame Verification</h3>
            <p className="text-gray-600">Confirming that steel beams, columns, and connections are installed correctly.</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="bg-[#ea384c]/10 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
            <span className="text-[#ea384c] font-bold">3</span>
          </div>
          <div>
            <h3 className="font-semibold text-[#1A1F2C]">Critical Stage Inspections</h3>
            <p className="text-gray-600">Ensuring structural elements are properly installed before they're concealed by finishes.</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="bg-[#ea384c]/10 rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0">
            <span className="text-[#ea384c] font-bold">4</span>
          </div>
          <div>
            <h3 className="font-semibold text-[#1A1F2C]">Unforeseen Condition Response</h3>
            <p className="text-gray-600">Providing rapid on-site solutions when unexpected issues are uncovered during construction.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SiteVisitConstruction;
