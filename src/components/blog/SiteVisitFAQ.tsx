
import React from 'react';

const SiteVisitFAQ = () => {
  return (
    <>
      <h2 className="text-2xl font-bold text-[#1A1F2C] mt-10 mb-4">Frequently Asked Questions</h2>
      <div className="space-y-6 mt-6">
        <div>
          <h3 className="font-semibold text-[#1A1F2C]">How long does a typical site visit take?</h3>
          <p className="text-gray-600 mt-2">
            Most residential site visits take 1-2 hours, depending on the property size and project complexity. Commercial properties may require longer assessments.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-[#1A1F2C]">Do I need to be present during the site visit?</h3>
          <p className="text-gray-600 mt-2">
            While not always necessary, it's beneficial for you or a representative to be present to provide access and discuss specific concerns or plans directly with our engineer.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-[#1A1F2C]">How quickly can you schedule a site visit in London?</h3>
          <p className="text-gray-600 mt-2">
            We typically schedule site visits within 2-5 working days across all London boroughs, with emergency appointments available when necessary.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-[#1A1F2C]">What documentation do you provide after the site visit?</h3>
          <p className="text-gray-600 mt-2">
            Following the visit, we provide a detailed report summarizing our findings, including photographs, measurements, and preliminary recommendations for your project.
          </p>
        </div>
      </div>
    </>
  );
};

export default SiteVisitFAQ;
