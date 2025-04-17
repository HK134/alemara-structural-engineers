
import React from 'react';
import AreaTemplate from './AreaTemplate';
import { Building2 } from 'lucide-react';

const CamdenKentishTown = () => {
  return (
    <AreaTemplate
      areaName="Camden & Kentish Town"
      areaDescription="Camden and Kentish Town feature diverse architectural styles, from Georgian townhouses to Victorian terraces and modern developments. Our structural engineering expertise covers the unique challenges of these historic properties, including conservation area considerations and modern adaptations."
      metaDescription="Expert structural engineers for Camden & Kentish Town properties. Specialists in period property renovations, conservation areas, and modern structural solutions."
      specificFeatures={[
        "Expert knowledge of Camden Council's planning policies and conservation areas",
        "Specialists in Victorian and Georgian property modifications",
        "Experience with Camden's Article 4 Direction requirements",
        "Basement impact assessments for Camden properties",
        "Heritage property structural surveys and modifications",
        "Structural solutions for mixed-use development projects"
      ]}
      commonProjects={[
        "Historic Building Renovations",
        "Basement Conversions",
        "Loft Extensions",
        "Commercial to Residential Conversions",
        "Shop Front Structural Alterations",
        "Period Property Structural Surveys"
      ]}
      nearbyLandmarks="Our engineering team regularly works on properties near Camden Market, Regent's Canal, and Kentish Town Road, understanding the specific structural and planning considerations of these historic areas."
      historicalContext="Camden and Kentish Town's buildings span multiple eras, from Georgian (1714-1830) through Victorian (1837-1901) to post-war and modern developments. Many properties are within conservation areas, requiring careful consideration of historical features during structural modifications."
    />
  );
};

export default CamdenKentishTown;
