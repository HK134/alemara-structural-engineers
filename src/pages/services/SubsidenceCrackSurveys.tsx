
import React from 'react';
import ServiceTemplate from './ServiceTemplate';
import { Search } from 'lucide-react';

const SubsidenceCrackSurveys = () => {
  return (
    <ServiceTemplate
      serviceName="Subsidence & Crack Surveys"
      serviceDescription="Our specialized subsidence and crack survey service provides expert assessment of structural movement in London properties. We investigate the causes of cracks, settlement, and structural movement to deliver detailed reports and effective remediation strategies tailored to London's unique soil conditions and building types."
      metaDescription="Professional subsidence and crack surveys for London properties. Expert structural engineers providing thorough assessments, monitoring, and remediation solutions for building movement and structural cracks."
      icon={<Search className="h-16 w-16 text-[#ea384c]" />}
      keyFeatures={[
        "Comprehensive visual inspection and crack mapping",
        "Movement monitoring and analysis",
        "Soil investigation and foundation assessment",
        "Root cause analysis of structural movement",
        "Detailed photographic documentation",
        "Level and verticality surveys",
        "Subsidence risk assessment",
        "Insurance claim support documentation"
      ]}
      benefits={[
        "Early detection of serious structural issues",
        "Expert evidence for insurance claims",
        "Tailored remediation recommendations",
        "Prevention of further property damage",
        "Peace of mind regarding structural stability",
        "London-specific expertise with clay soils and Victorian foundations",
        "Detailed reports suitable for mortgage lenders and insurers"
      ]}
      process={[
        {
          title: "Initial Consultation",
          description: "We discuss your concerns and the history of the property, including when cracks first appeared and any recent construction work or environmental changes."
        },
        {
          title: "Comprehensive Site Inspection",
          description: "Our structural engineers conduct a thorough inspection of the property, documenting all visible cracks, movement, and structural deformation both internally and externally."
        },
        {
          title: "Crack Analysis & Monitoring",
          description: "We analyze crack patterns to determine if they're structural or cosmetic, and may install monitoring equipment for properties with active movement."
        },
        {
          title: "Foundation Assessment",
          description: "Where necessary, we investigate the condition of foundations through trial pits or boreholes to understand subsurface conditions and foundation types."
        },
        {
          title: "Detailed Report Preparation",
          description: "We compile our findings into a comprehensive report that includes causes of movement, risk assessment, and specific recommendations for remediation."
        },
        {
          title: "Remediation Design",
          description: "If required, we provide detailed designs for structural repairs, underpinning, or other stabilization measures specific to your property's needs."
        }
      ]}
      faqs={[
        {
          question: "How can I tell if cracks in my London property are serious?",
          answer: "While not all cracks indicate serious problems, those wider than 3mm, that run diagonally across walls, appear suddenly after dry weather, or cause doors and windows to stick may indicate subsidence. London's clay soils make properties particularly susceptible to seasonal movement. Our engineers can properly assess whether cracks are structural or cosmetic."
        },
        {
          question: "What causes subsidence in London properties?",
          answer: "London properties commonly experience subsidence due to: shrinkable clay soils that expand and contract with moisture changes, mature trees too close to foundations drawing moisture from soil, leaking drains washing away soil, historical mining or quarrying activity, and inadequate foundations common in older London buildings."
        },
        {
          question: "Will my insurance cover subsidence repairs?",
          answer: "Most buildings insurance policies cover subsidence damage, but the claim process can be complex. Our detailed reports provide the technical evidence insurers require, documenting the cause, extent, and recommended remediation. We can also liaise directly with insurance company surveyors if needed."
        },
        {
          question: "How long does monitoring for subsidence usually take?",
          answer: "For active movement cases, we typically recommend monitoring for at least 3-6 months and ideally through seasonal changes. This allows us to determine if movement is ongoing, seasonal, or has stabilized. For London's clay soils, a full year of monitoring may be necessary to observe both winter swelling and summer shrinkage."
        },
        {
          question: "Can subsidence be fixed permanently?",
          answer: "Yes, once the cause is properly identified, subsidence can be permanently remedied. Solutions may include underpinning, root barriers for tree-related subsidence, drain repairs, or soil stabilization. Our reports recommend the most appropriate and cost-effective solution for your specific situation."
        }
      ]}
      relatedServices={[
        "Structural Surveys",
        "Underpinning Design",
        "Basement Extensions",
        "Party Wall Matters",
        "Foundation Design",
        "Insurance Assessment"
      ]}
      canonicalUrl="https://alemara.co.uk/services/subsidence-crack-surveys"
    />
  );
};

export default SubsidenceCrackSurveys;
