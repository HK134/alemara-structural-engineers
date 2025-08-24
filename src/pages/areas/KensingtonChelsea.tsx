
import React from 'react';
import AreaTemplate from './AreaTemplate';

const KensingtonChelsea = () => {
  return (
    <AreaTemplate
      areaName="Kensington & Chelsea"
      areaDescription="Kensington and Chelsea are among London's most prestigious boroughs, featuring exceptional Georgian and Victorian architecture alongside world-class modern developments. Our structural engineering services are tailored for the exacting standards required in these areas, with deep expertise in heritage conservation, luxury renovations, and high-end residential projects."
      metaDescription="Luxury structural engineers for Kensington & Chelsea properties. Specialists in Georgian mansions, Victorian villas, heritage conservation, basement extensions and high-end residential projects in West London."
      specificFeatures={[
        "Heritage building conservation and Grade II listed property expertise",
        "Luxury basement extension and subterranean development specialists",
        "Experience with Royal Borough of Kensington & Chelsea planning requirements",
        "High-end residential renovation and refurbishment specialists",
        "Structural solutions for mansion blocks and period apartments",
        "Expertise in integrating modern amenities while preserving architectural heritage"
      ]}
      commonProjects={[
        "Heritage Building Restorations",
        "Luxury Basement Extensions",
        "Georgian Mansion Renovations",
        "Victorian Villa Modernisations",
        "High-End Apartment Refurbishments",
        "Mansion Block Structural Upgrades"
      ]}
      nearbyLandmarks="Our portfolio includes work near Hyde Park, the Royal Albert Hall, Chelsea Embankment, and South Kensington's museum district, areas requiring the highest standards of structural engineering and architectural sensitivity."
      historicalContext="Kensington and Chelsea showcase some of London's finest Georgian (1714-1830) and Victorian (1837-1901) architecture. These prestigious properties often feature complex structural systems, ornate facades, and require specialist knowledge to maintain their architectural integrity while incorporating modern living requirements."
      canonicalUrl="https://alemara.co.uk/areas/kensington-chelsea"
    />
  );
};

export default KensingtonChelsea;
