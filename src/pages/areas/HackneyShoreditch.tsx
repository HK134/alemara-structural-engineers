
import React from 'react';
import AreaTemplate from './AreaTemplate';
import { Building2 } from 'lucide-react';

const HackneyShoreditch = () => {
  return (
    <AreaTemplate
      areaName="Hackney & Shoreditch"
      areaDescription="Hackney and Shoreditch represent London's dynamic urban evolution, combining historic industrial buildings with contemporary architecture. Our structural engineering services address both heritage conservation and modern development needs in this rapidly changing area."
      metaDescription="Specialist structural engineers for Hackney & Shoreditch. Experts in warehouse conversions, mixed-use developments, and period property renovations."
      specificFeatures={[
        "Expertise in warehouse and industrial building conversions",
        "Knowledge of Hackney Council's planning framework",
        "Specialists in mixed-use development structural design",
        "Experience with local conservation area guidelines",
        "Solutions for modern architectural integration",
        "Historic building structural assessments"
      ]}
      commonProjects={[
        "Warehouse Conversions",
        "Commercial Property Adaptations",
        "Victorian Terrace Modifications",
        "New Build Developments",
        "Shop Front Alterations",
        "Structural Surveys for Period Properties"
      ]}
      nearbyLandmarks="We frequently work on properties near Shoreditch High Street, Columbia Road, and Broadway Market, understanding the area's unique mix of historic and contemporary structures."
      historicalContext="Hackney and Shoreditch's architectural heritage includes Victorian industrial buildings, Georgian townhouses, and post-war developments. The area's rapid regeneration requires careful consideration of both historic preservation and modern construction methods."
    />
  );
};

export default HackneyShoreditch;
