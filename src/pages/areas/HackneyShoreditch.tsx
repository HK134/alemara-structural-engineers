
import React from 'react';
import AreaTemplate from './AreaTemplate';

const HackneyShoreditch = () => {
  return (
    <AreaTemplate
      areaName="Hackney & Shoreditch"
      areaDescription="Hackney and Shoreditch represent the perfect blend of historic East London character and modern urban regeneration. Our structural engineering expertise covers everything from converted warehouses and industrial buildings to new residential developments and creative workspace transformations, addressing the unique structural challenges of this rapidly evolving area."
      metaDescription="Structural engineers for Hackney & Shoreditch properties. Expert services for warehouse conversions, industrial building renovations, loft conversions and modern residential developments in East London."
      specificFeatures={[
        "Industrial building conversion and renovation specialists",
        "Warehouse to residential conversion expertise",
        "Knowledge of Hackney Council's regeneration planning policies",
        "Structural solutions for creative and flexible workspace designs",
        "Experience with mixed-use development requirements",
        "Expertise in retrofitting modern amenities to period industrial buildings"
      ]}
      commonProjects={[
        "Warehouse Conversions",
        "Industrial Building Renovations",
        "Modern Residential Extensions",
        "Creative Workspace Developments",
        "Loft Conversions",
        "Commercial Property Adaptations"
      ]}
      nearbyLandmarks="We've worked extensively around Old Street, Brick Lane, Columbia Road, and the Olympic Park area, understanding the unique blend of heritage conservation requirements and modern development opportunities that define this dynamic area."
      historicalContext="Hackney and Shoreditch feature a rich industrial heritage with many 19th and early 20th-century warehouse and factory buildings. These structures typically feature robust brick and steel construction that, with proper structural assessment, can be successfully adapted for modern residential and commercial use."
    />
  );
};

export default HackneyShoreditch;
