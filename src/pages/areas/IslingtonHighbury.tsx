
import React from 'react';
import AreaTemplate from './AreaTemplate';
import { Building2 } from 'lucide-react';

const IslingtonHighbury = () => {
  return (
    <AreaTemplate
      areaName="Islington & Highbury"
      areaDescription="Islington and Highbury are areas of North London known for their Victorian and Georgian architecture, with many properties now undergoing modernisation and extensions. Our structural engineering services are tailored specifically for the unique challenges of these period properties, including loft conversions, basement extensions, and structural alterations."
      metaDescription="Expert structural engineers for Islington & Highbury properties. Specialising in period property renovations, loft conversions, extensions and structural calculations."
      specificFeatures={[
        "Period property specialists for Victorian and Georgian buildings",
        "Expertise in dealing with Islington Council's planning requirements",
        "Solutions for party wall issues common in terraced properties",
        "Structural assessments for properties in conservation areas",
        "Basement extension expertise for Islington's unique subsoil conditions",
        "Design solutions that maintain period features while modernising spaces"
      ]}
      commonProjects={[
        "Loft Conversions",
        "Rear Extensions",
        "Basement Conversions",
        "Internal Wall Removal",
        "Structural Surveys",
        "Steel Beam Installations"
      ]}
      nearbyLandmarks="Our team is familiar with properties near landmarks such as Highbury Fields, Emirates Stadium, and the Islington Square development, understanding the specific structural challenges and planning considerations for each area."
      historicalContext="Islington and Highbury feature many properties built in the Georgian and Victorian eras (1714-1901). These buildings often have specific structural characteristics including load-bearing brick walls, timber floor joists, and shallow foundations that require specialist knowledge when undertaking modern alterations."
      canonicalUrl="https://alemara.co.uk/areas/islington-highbury"
    />
  );
};

export default IslingtonHighbury;
