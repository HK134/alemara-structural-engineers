
import React from 'react';
import AreaTemplate from './AreaTemplate';
import { Building2 } from 'lucide-react';

const WestminsterMayfair = () => {
  return (
    <AreaTemplate
      areaName="Westminster & Mayfair"
      areaDescription="Westminster and Mayfair represent London's most prestigious districts, known for their historic architecture and high-end properties. Our structural engineering expertise caters to the area's sophisticated requirements and strict conservation guidelines."
      metaDescription="Expert structural engineers for Westminster & Mayfair properties. Specialists in heritage buildings, luxury renovations, and conservation area projects."
      specificFeatures={[
        "Deep understanding of Westminster Council planning policies",
        "Heritage property structural modifications",
        "Conservation area expertise",
        "Grade-listed building experience",
        "Complex residential remodeling",
        "Party wall specialists"
      ]}
      commonProjects={[
        "Historic Building Renovations",
        "Luxury Property Modifications",
        "Conservation Area Projects",
        "Listed Building Alterations",
        "High-End Residential Remodeling",
        "Basement Extensions"
      ]}
      nearbyLandmarks="Our engineers regularly work on properties near Park Lane, Bond Street, and Berkeley Square, understanding the unique requirements of these prestigious locations."
      historicalContext="Westminster and Mayfair feature primarily Georgian and Victorian architecture, with many Grade I and II listed buildings. The area's strict conservation guidelines and planning requirements reflect its historical significance."
    />
  );
};

export default WestminsterMayfair;
