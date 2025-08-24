
import React from 'react';
import ServiceTemplate from './ServiceTemplate';
import { Home } from 'lucide-react';

const NewBuilds = () => {
  return (
    <ServiceTemplate
      serviceName="New Builds & Developments"
      serviceDescription="Our new build structural engineering service provides comprehensive design solutions for residential and mixed-use developments across London. From single luxury homes to multi-unit developments, we deliver innovative, efficient structural designs that optimize space while meeting all regulatory requirements and sustainability goals."
      metaDescription="Expert structural engineering for new build developments in London. Specialist design services for residential, commercial and mixed-use projects, from single homes to large developments."
      icon={<Home className="h-16 w-16 text-[#ea384c]" />}
      keyFeatures={[
        "Comprehensive structural design for new construction",
        "Foundation solutions for London's varied soil conditions",
        "Innovative structural systems to maximize space",
        "Integration with architectural and MEP designs",
        "Sustainable structural engineering solutions",
        "Building Information Modeling (BIM) capability",
        "Value engineering to optimize construction costs",
        "Full Building Regulations compliance documentation"
      ]}
      benefits={[
        "Optimized structural designs that reduce material costs",
        "Experienced with London's planning requirements",
        "Creative solutions for constrained urban sites",
        "Expertise in basement construction for maximizing development potential",
        "Knowledge of sustainable construction methods",
        "Coordination with other disciplines to minimize conflicts",
        "Responsive service throughout the construction phase"
      ]}
      process={[
        {
          title: "Initial Design Consultation",
          description: "We work closely with your architect to understand the project vision, constraints, and opportunities, establishing key structural parameters and systems."
        },
        {
          title: "Site Investigation Review",
          description: "We analyze geotechnical reports to determine appropriate foundation solutions based on London's varied soil conditions and site constraints."
        },
        {
          title: "Conceptual Structural Design",
          description: "We develop initial structural schemes, considering options for the structural frame, floor systems, and stability solutions to meet architectural requirements."
        },
        {
          title: "Detailed Design Development",
          description: "Our engineers produce comprehensive calculations and detailed drawings for all structural elements, optimizing designs for efficiency and constructability."
        },
        {
          title: "Building Regulations Submission",
          description: "We prepare and submit all necessary structural documentation for Building Regulations approval, liaising with building control officers as required."
        },
        {
          title: "Construction Phase Support",
          description: "We provide ongoing support during construction, including site visits, responding to technical queries, and reviewing contractor submissions."
        }
      ]}
      faqs={[
        {
          question: "How do you approach foundation design for new builds in London?",
          answer: "London's geology varies significantly across the city, from clay in the north and west to sand and gravel in the south and east. We design foundations based on site-specific soil investigations, considering factors like soil bearing capacity, groundwater levels, and proximity to adjacent structures. Options range from traditional strip foundations to piled solutions depending on conditions."
        },
        {
          question: "Can you help with sustainable structural engineering solutions?",
          answer: "Yes, sustainability is integral to our design approach. We evaluate embodied carbon in structural materials, design for material efficiency, consider options like cross-laminated timber where appropriate, and design for future adaptability. We also collaborate with sustainability consultants to achieve certifications like BREEAM or Passive House standards."
        },
        {
          question: "How do you ensure the structural design meets London's planning requirements?",
          answer: "We have extensive experience with London's planning requirements and work closely with architects and planning consultants to ensure structural solutions support planning compliance. This includes considerations for height restrictions, heritage impacts, rights of light, and party wall matters that are particularly important in London's dense urban environment."
        },
        {
          question: "What structural systems do you typically recommend for London developments?",
          answer: "Our recommendations vary based on the specific project, but we frequently use reinforced concrete frames for basement and lower levels transitioning to lighter steel or timber structures above. For taller developments, we may use reinforced concrete cores for stability. We select systems that optimize construction efficiency while meeting the architectural vision."
        },
        {
          question: "How do you coordinate with other design team members?",
          answer: "We use a collaborative approach, working closely with architects, MEP engineers, and other consultants through regular coordination meetings, shared BIM models where appropriate, and clear communication channels. This ensures structural elements integrate seamlessly with other building systems, preventing conflicts during construction."
        }
      ]}
      relatedServices={[
        "Commercial Projects",
        "Bespoke Design",
        "Basement Extensions",
        "Steel Fabrication",
        "Foundation Design",
        "Structural Calculations"
      ]}
      canonicalUrl="https://alemara.co.uk/services/new-builds"
    />
  );
};

export default NewBuilds;
