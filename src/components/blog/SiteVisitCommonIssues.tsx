
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const SiteVisitCommonIssues = () => {
  return (
    <>
      <h2 className="text-2xl font-bold text-[#1A1F2C] mt-10 mb-4">Common Structural Issues Uncovered During Visits</h2>
      <p>
        Our site visits frequently reveal issues that would otherwise go undetected. In London properties, we commonly encounter:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
        <Card className="border-l-4 border-l-[#ea384c] shadow-sm">
          <CardContent className="pt-6">
            <h3 className="font-semibold text-[#1A1F2C] mb-2">Inadequate Support for Previous Modifications</h3>
            <p className="text-gray-600">
              Many London properties have had DIY or unpermitted renovations that removed or compromised load-bearing elements.
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-[#ea384c] shadow-sm">
          <CardContent className="pt-6">
            <h3 className="font-semibold text-[#1A1F2C] mb-2">Subsidence and Settlement Issues</h3>
            <p className="text-gray-600">
              London's clay soil makes properties particularly vulnerable to movement during dry summers and wet winters.
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-[#ea384c] shadow-sm">
          <CardContent className="pt-6">
            <h3 className="font-semibold text-[#1A1F2C] mb-2">Deteriorated Victorian Foundations</h3>
            <p className="text-gray-600">
              Many period properties have shallow foundations that may be inadequate for modern extensions or significant alterations.
            </p>
          </CardContent>
        </Card>

        <Card className="border-l-4 border-l-[#ea384c] shadow-sm">
          <CardContent className="pt-6">
            <h3 className="font-semibold text-[#1A1F2C] mb-2">Party Wall Complications</h3>
            <p className="text-gray-600">
              Shared walls between properties often have complex structural relationships that require careful consideration.
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default SiteVisitCommonIssues;
