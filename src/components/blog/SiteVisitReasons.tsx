
import React from 'react';
import { Search, Building, Ruler, AlertTriangle } from 'lucide-react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const SiteVisitReasons = () => {
  return (
    <>
      <h2 className="text-2xl font-bold text-[#1A1F2C] mt-10 mb-4">Reasons for Site Visits Before Construction</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
        <Card className="border border-gray-200 shadow-sm">
          <CardHeader className="pb-2">
            <div className="flex items-start gap-4">
              <div className="bg-[#ea384c]/10 p-3 rounded-lg">
                <Search className="h-6 w-6 text-[#ea384c]" />
              </div>
              <CardTitle className="text-xl font-semibold text-[#1A1F2C]">Accurate Assessment</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Allows engineers to see the actual condition of the property, identifying potential issues that may not be visible in drawings or plans.
            </p>
          </CardContent>
        </Card>

        <Card className="border border-gray-200 shadow-sm">
          <CardHeader className="pb-2">
            <div className="flex items-start gap-4">
              <div className="bg-[#ea384c]/10 p-3 rounded-lg">
                <Building className="h-6 w-6 text-[#ea384c]" />
              </div>
              <CardTitle className="text-xl font-semibold text-[#1A1F2C]">Building Context</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Understanding how the property interacts with neighboring buildings, especially in London's densely built environment.
            </p>
          </CardContent>
        </Card>

        <Card className="border border-gray-200 shadow-sm">
          <CardHeader className="pb-2">
            <div className="flex items-start gap-4">
              <div className="bg-[#ea384c]/10 p-3 rounded-lg">
                <Ruler className="h-6 w-6 text-[#ea384c]" />
              </div>
              <CardTitle className="text-xl font-semibold text-[#1A1F2C]">Precise Measurements</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Taking critical dimensions that ensure designs are accurate and construction plans are feasible for the specific property.
            </p>
          </CardContent>
        </Card>

        <Card className="border border-gray-200 shadow-sm">
          <CardHeader className="pb-2">
            <div className="flex items-start gap-4">
              <div className="bg-[#ea384c]/10 p-3 rounded-lg">
                <AlertTriangle className="h-6 w-6 text-[#ea384c]" />
              </div>
              <CardTitle className="text-xl font-semibold text-[#1A1F2C]">Risk Identification</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Early detection of potential structural issues that could impact project costs, timelines, or safety considerations.
            </p>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default SiteVisitReasons;
