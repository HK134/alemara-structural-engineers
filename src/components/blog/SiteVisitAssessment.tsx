
import React from 'react';
import { HardHat, AlertTriangle, Microscope, MapPin, Camera } from 'lucide-react';

const SiteVisitAssessment = () => {
  return (
    <>
      <h2 className="text-2xl font-bold text-[#1A1F2C] mt-10 mb-4">What We Look For During a Site Visit</h2>
      <div className="grid grid-cols-1 gap-4 my-6">
        <div className="bg-white shadow-sm rounded-lg border border-gray-200 p-5">
          <h3 className="font-semibold text-[#1A1F2C] flex items-center">
            <HardHat className="h-5 w-5 text-[#ea384c] mr-2" />
            Structural Elements
          </h3>
          <p className="text-gray-600 mt-2">
            We examine all load-bearing components including walls, beams, columns, lintels, and foundation elements. Special attention is paid to their condition, size, and arrangement.
          </p>
        </div>

        <div className="bg-white shadow-sm rounded-lg border border-gray-200 p-5">
          <h3 className="font-semibold text-[#1A1F2C] flex items-center">
            <AlertTriangle className="h-5 w-5 text-[#ea384c] mr-2" />
            Signs of Distress
          </h3>
          <p className="text-gray-600 mt-2">
            Our engineers look for cracks, sagging, leaning, or bulging in walls and other structural components that may indicate underlying problems.
          </p>
        </div>

        <div className="bg-white shadow-sm rounded-lg border border-gray-200 p-5">
          <h3 className="font-semibold text-[#1A1F2C] flex items-center">
            <Microscope className="h-5 w-5 text-[#ea384c] mr-2" />
            Material Assessment
          </h3>
          <p className="text-gray-600 mt-2">
            We identify the materials used in construction (types of brick, concrete, steel, timber) and assess their condition and properties, which is crucial for accurate structural calculations.
          </p>
        </div>

        <div className="bg-white shadow-sm rounded-lg border border-gray-200 p-5">
          <h3 className="font-semibold text-[#1A1F2C] flex items-center">
            <MapPin className="h-5 w-5 text-[#ea384c] mr-2" />
            Site Constraints
          </h3>
          <p className="text-gray-600 mt-2">
            Identifying access limitations, proximity to neighboring structures, party wall considerations, and potential construction challenges specific to the London urban environment.
          </p>
        </div>

        <div className="bg-white shadow-sm rounded-lg border border-gray-200 p-5">
          <h3 className="font-semibold text-[#1A1F2C] flex items-center">
            <Camera className="h-5 w-5 text-[#ea384c] mr-2" />
            Documentation
          </h3>
          <p className="text-gray-600 mt-2">
            Comprehensive photographic records and detailed measurements are taken to inform the design process and provide evidence of the property's pre-construction condition.
          </p>
        </div>
      </div>

      <div className="my-10">
        <img 
          src="/lovable-uploads/1f9708d9-de83-4362-9b30-7fafe295163c.png" 
          alt="Structural engineer conducting a detailed site visit inspection" 
          className="w-full h-auto rounded-lg shadow-md"
        />
        <p className="text-sm text-gray-500 mt-2 text-center">Our structural engineer examining foundation elements during a site visit in North London</p>
      </div>
    </>
  );
};

export default SiteVisitAssessment;
