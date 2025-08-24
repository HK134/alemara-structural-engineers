
import React from 'react';
import AreaTemplate from './AreaTemplate';

const WestminsterMayfair = () => {
  return (
    <AreaTemplate
      areaName="Westminster & Mayfair"
      areaDescription="Westminster and Mayfair represent the heart of London's commercial and residential prestige, featuring some of the capital's most significant Georgian architecture and modern commercial developments. Our structural engineering services meet the exacting standards required in these areas, with expertise in both heritage conservation and contemporary high-value developments."
      metaDescription="Premier structural engineers for Westminster & Mayfair properties. Specialists in Georgian architecture, commercial developments, heritage conservation and luxury residential projects in Central London."
      specificFeatures={[
        "Expertise in Westminster City Council's strict planning and conservation requirements",
        "Specialists in Georgian and Regency period architecture",
        "Commercial building renovation and modernisation experts",
        "Heritage conservation for Grade I and Grade II* listed buildings",
        "High-security and high-specification residential development experience",
        "Structural solutions for mixed-use commercial and residential developments"
      ]}
      commonProjects={[
        "Georgian Townhouse Restorations",
        "Commercial Building Renovations", 
        "Luxury Residential Developments",
        "Heritage Building Conservation",
        "Mixed-Use Development Support",
        "High-End Office Refurbishments"
      ]}
      nearbyLandmarks="We have extensive experience working near Buckingham Palace, Houses of Parliament, Bond Street, and Berkeley Square, understanding the unique security, heritage, and planning considerations that apply in these internationally significant locations."
      historicalContext="Westminster and Mayfair feature exceptional examples of Georgian (1714-1830) and Regency (1811-1820) architecture, including some of London's finest terraced houses and mansion blocks. These buildings require specialist structural knowledge to preserve their historical significance while meeting modern commercial and residential needs."
      canonicalUrl="https://alemara.co.uk/areas/westminster-mayfair"
    />
  );
};

export default WestminsterMayfair;
