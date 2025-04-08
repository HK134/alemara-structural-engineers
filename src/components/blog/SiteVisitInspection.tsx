
import React from 'react';
import { CheckSquare } from 'lucide-react';

const SiteVisitInspection = () => {
  return (
    <>
      <h2 className="text-2xl font-bold text-[#1A1F2C] mt-10 mb-4">Importance of the Visit Inspection</h2>
      <p>
        The on-site inspection forms the backbone of our structural assessment process. During these visits, our chartered structural engineers conduct a thorough examination of all relevant structural elements. This hands-on approach enables us to:
      </p>

      <ul className="space-y-4 my-6">
        <li className="flex items-start gap-3">
          <CheckSquare className="h-6 w-6 text-[#ea384c] flex-shrink-0 mt-0.5" />
          <span>Identify existing structural defects that may compromise the integrity of your planned construction</span>
        </li>
        <li className="flex items-start gap-3">
          <CheckSquare className="h-6 w-6 text-[#ea384c] flex-shrink-0 mt-0.5" />
          <span>Examine the condition of load-bearing elements like walls, beams, and foundations</span>
        </li>
        <li className="flex items-start gap-3">
          <CheckSquare className="h-6 w-6 text-[#ea384c] flex-shrink-0 mt-0.5" />
          <span>Evaluate the property's ability to support proposed structural changes</span>
        </li>
        <li className="flex items-start gap-3">
          <CheckSquare className="h-6 w-6 text-[#ea384c] flex-shrink-0 mt-0.5" />
          <span>Gather critical information for creating accurate designs and calculations</span>
        </li>
      </ul>

      <div className="my-10 bg-gray-50 border border-gray-200 rounded-lg p-6">
        <h3 className="text-xl font-bold text-[#1A1F2C] mb-3">Did You Know?</h3>
        <p className="text-gray-700">
          Many London properties have undergone multiple undocumented modifications over decades or even centuries. Our site visits often reveal critical structural elements that aren't shown on any existing plans or drawings.
        </p>
      </div>
    </>
  );
};

export default SiteVisitInspection;
