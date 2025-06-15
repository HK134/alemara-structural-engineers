
import React from 'react';
import AreaTemplate from './AreaTemplate';

const LondonBoroughs = () => {
  return (
    <AreaTemplate
      areaName="All London Boroughs"
      areaDescription="Our structural engineering expertise extends across all 32 London boroughs and the City of London, providing comprehensive structural engineering services for the diverse range of properties and architectural styles found throughout the capital. From Georgian townhouses in Central London to post-war developments in the outer boroughs, we deliver expert structural solutions tailored to each area's unique characteristics."
      metaDescription="Structural engineers covering all London boroughs. Comprehensive structural engineering services across Greater London including residential, commercial and heritage projects with local planning expertise."
      specificFeatures={[
        "Comprehensive coverage of all 32 London boroughs plus the City of London",
        "Local planning authority knowledge for each borough's specific requirements",
        "Expertise across all architectural periods from Georgian to contemporary",
        "Understanding of London's diverse geological conditions and foundation requirements",
        "Specialised knowledge of each area's typical building stock and common structural issues",
        "Established relationships with local building control departments across London"
      ]}
      commonProjects={[
        "Residential Extensions and Conversions",
        "Commercial Building Renovations",
        "Heritage and Conservation Projects",
        "New Build Developments",
        "Structural Surveys and Assessments",
        "Infrastructure and Civil Engineering Projects"
      ]}
      nearbyLandmarks="Our extensive portfolio covers projects from the historic buildings of the City of London to the suburban developments of the outer boroughs, including work near major landmarks, transport hubs, and regeneration areas throughout Greater London."
      historicalContext="London's building stock spans over 300 years of architectural history, from surviving pre-Georgian buildings through to contemporary developments. Each borough has its own character and typical building types, requiring tailored structural engineering approaches that respect local architectural heritage while meeting modern building standards."
    />
  );
};

export default LondonBoroughs;
