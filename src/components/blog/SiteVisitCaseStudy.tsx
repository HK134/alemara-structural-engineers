
import React from 'react';
import { AlertTriangle } from 'lucide-react';

const SiteVisitCaseStudy = () => {
  return (
    <>
      <h2 className="text-2xl font-bold text-[#1A1F2C] mt-10 mb-4">Case Study: Structural Site Visit in Clapton, London</h2>
      <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 my-6">
        <p className="italic text-gray-700 mb-4">
          "Our client was planning a rear extension and loft conversion for their Victorian terraced house in Clapton. The initial site visit revealed several critical issues not visible from architectural plans:"
        </p>

        <ul className="space-y-3">
          <li className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <span>Previously unidentified chimney breast removal without proper structural support</span>
          </li>
          <li className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <span>Significant cracking in the party wall requiring stabilization before new works</span>
          </li>
          <li className="flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <span>Shallow foundations that would need underpinning for the proposed extension</span>
          </li>
        </ul>

        <p className="mt-4 text-gray-700">
          By identifying these issues early, we were able to redesign the structural scheme, adjust the project budget appropriately, and prevent what would have been costly and dangerous surprises during construction.
        </p>
      </div>

      <div className="my-10">
        <img 
          src="/lovable-uploads/1f9708d9-de83-4362-9b30-7fafe295163c.png" 
          alt="Structural engineer examining foundation during site visit" 
          className="w-full h-auto rounded-lg shadow-md object-cover"
          style={{ maxHeight: "400px" }}
        />
        <p className="text-sm text-gray-500 mt-2 text-center">Our engineer assessing foundation conditions at a London property</p>
      </div>
    </>
  );
};

export default SiteVisitCaseStudy;
