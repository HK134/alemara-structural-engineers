
import React from 'react';
import AreaTemplate from './AreaTemplate';
import { Building2 } from 'lucide-react';

const KensingtonChelsea = () => {
  return (
    <AreaTemplate
      areaName="Kensington & Chelsea"
      areaDescription="Kensington and Chelsea are home to some of London's most prestigious properties, featuring elegant Georgian and Victorian architecture. Our structural engineering expertise caters to the borough's high standards and strict planning requirements."
      metaDescription="Premier structural engineers for Kensington & Chelsea properties. Specialists in luxury renovations, basement extensions, and heritage property modifications."
      specificFeatures={[
        "In-depth knowledge of RBKC planning policies",
        "Expertise in high-end residential modifications",
        "Specialists in complex basement extensions",
        "Conservation area compliance expertise",
        "Listed building structural solutions",
        "Party wall agreement management"
      ]}
      commonProjects={[
        "Luxury Basement Extensions",
        "Heritage Property Renovations",
        "Complex Loft Conversions",
        "Garden Square Property Modifications",
        "Listed Building Alterations",
        "High-End Structural Surveys"
      ]}
      nearbyLandmarks="Our team regularly works on properties near Sloane Square, King's Road, and Kensington High Street, understanding the unique requirements of these prestigious areas."
      historicalContext="Kensington and Chelsea feature predominantly Victorian and Georgian architecture (1714-1901), with many listed buildings and properties in conservation areas. The borough's strict planning requirements reflect its commitment to preserving architectural heritage."
    />
  );
};

export default KensingtonChelsea;
