
import React from 'react';
import AreaTemplate from './AreaTemplate';

const CamdenKentishTown = () => {
  return (
    <AreaTemplate
      areaName="Camden & Kentish Town"
      areaDescription="Camden and Kentish Town are vibrant areas of North London featuring a diverse mix of Victorian terraces, Georgian townhouses, and modern developments. Our structural engineering services cater to the unique challenges of these historic areas, including complex party wall agreements, conservation area requirements, and the integration of modern amenities into period properties."
      metaDescription="Expert structural engineers for Camden & Kentish Town properties. Specialising in Victorian terraces, Georgian townhouses, loft conversions, extensions and structural calculations in North London."
      specificFeatures={[
        "Victorian and Georgian property renovation specialists",
        "Experience with Camden Council planning and building regulations",
        "Party wall expertise for terraced and semi-detached properties",
        "Conservation area compliance and heritage building knowledge",
        "Structural solutions for mixed-use developments",
        "Underground and basement conversion specialists familiar with local geology"
      ]}
      commonProjects={[
        "Loft Conversions",
        "Victorian Terrace Extensions",
        "Basement Conversions",
        "Commercial Property Renovations",
        "Mixed-Use Development Support",
        "Heritage Building Restorations"
      ]}
      nearbyLandmarks="Our engineers have extensive experience working near Camden Market, Regent's Canal, Primrose Hill, and the historic Roundhouse, understanding the specific planning considerations and structural challenges in these culturally significant areas."
      historicalContext="Camden and Kentish Town feature predominantly Victorian housing stock (1837-1901) with some Georgian elements. These properties often feature solid brick construction, timber floor systems, and require careful consideration when adding modern structural elements or creating open-plan living spaces."
    />
  );
};

export default CamdenKentishTown;
