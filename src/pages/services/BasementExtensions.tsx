
import React from 'react';
import ServiceTemplate from './ServiceTemplate';
import { Building2 } from 'lucide-react';

const BasementExtensions = () => {
  return (
    <ServiceTemplate
      serviceName="Basement Extensions"
      serviceDescription="Our basement extension structural engineering service provides comprehensive design solutions for creating additional living space below your London property. We specialize in complex underpinning designs, waterproofing strategies, and ensuring structural integrity while maximizing usable space in your new basement."
      metaDescription="Expert basement extension structural engineering services in London. Specialized in underpinning design, waterproofing solutions, and creating high-quality living space below ground."
      icon={<Building2 className="h-16 w-16 text-[#ea384c]" />}
      keyFeatures={[
        "Detailed structural calculations for basement excavations",
        "Underpinning design and methodology",
        "Waterproofing system specifications",
        "Party wall assessment and documentation",
        "Soil analysis and foundation recommendations",
        "Drainage solutions and flood mitigation strategies",
        "Structural integration with existing building",
        "Building Regulations compliance documentation"
      ]}
      benefits={[
        "Significantly increases property value in London's premium market",
        "Creates additional living space without extending the footprint",
        "Modern waterproofing systems ensure dry, habitable environments",
        "Our designs optimize ceiling height where possible",
        "Full compliance with London borough requirements",
        "Experienced with conservation area and listed building constraints",
        "Tailored solutions for different London soil conditions"
      ]}
      process={[
        {
          title: "Initial Site Assessment",
          description: "We conduct a thorough examination of your property, including existing foundations, soil conditions, and neighboring structures to determine feasibility and design requirements."
        },
        {
          title: "Conceptual Design Development",
          description: "Working with your architect, we develop initial structural concepts for the basement, considering underpinning methods, structural support, and waterproofing strategies."
        },
        {
          title: "Detailed Structural Calculations",
          description: "Our engineers perform comprehensive structural calculations to ensure the basement design meets all safety standards and Building Regulations requirements."
        },
        {
          title: "Waterproofing Design",
          description: "We specify appropriate waterproofing systems based on site conditions, groundwater levels, and basement usage requirements."
        },
        {
          title: "Construction Documentation",
          description: "Complete production of detailed drawings, specifications, and method statements for contractors to follow during the construction process."
        },
        {
          title: "Construction Phase Support",
          description: "Regular site visits during critical construction phases to ensure work is proceeding according to design specifications and to address any unforeseen issues."
        }
      ]}
      faqs={[
        {
          question: "Do I need planning permission for a basement extension in London?",
          answer: "In most London boroughs, basement extensions typically require planning permission, especially if they extend beyond the footprint of the existing building or involve significant engineering works. Some very minor internal basement conversions may fall under permitted development, but we always recommend checking with your local planning authority."
        },
        {
          question: "How long does it typically take to complete a basement extension?",
          answer: "A basement extension is a major structural project that usually takes between 6-12 months to complete, depending on the complexity, size, and site conditions. The design and approval phase typically takes 3-4 months, while construction takes a further 6-8 months."
        },
        {
          question: "Is my London property suitable for a basement extension?",
          answer: "Most London properties can accommodate some form of basement extension, but suitability depends on factors including soil conditions, groundwater levels, proximity to neighboring structures, and local planning policies. Our initial assessment can determine feasibility for your specific property."
        },
        {
          question: "How do you ensure my basement won't flood or have damp issues?",
          answer: "We design comprehensive waterproofing strategies usually involving a combination of external tanking, cavity drainage systems, and sump pumps as appropriate. Our designs follow BS 8102:2009 standards for waterproofing, typically providing Type C (drained protection) systems for residential basements."
        },
        {
          question: "Will a basement extension affect my neighbors' properties?",
          answer: "Basement excavations can potentially impact neighboring properties, which is why Party Wall Agreements are typically required. Our designs carefully consider issues like ground movement and settlement to minimize any impact on adjacent structures, and we can assist with the Party Wall process."
        }
      ]}
      relatedServices={[
        "Structural Surveys",
        "Rear Extensions",
        "New Builds",
        "Underpinning",
        "Subsidence Solutions",
        "Party Wall Matters"
      ]}
    />
  );
};

export default BasementExtensions;
