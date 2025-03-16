
import React from 'react';
import { Award, Clock, MapPin, ThumbsUp, GraduationCap, FileText } from 'lucide-react';

const reasons = [
  {
    icon: <GraduationCap className="h-12 w-12 text-[#ea384c]" />,
    title: "Chartered Structural Engineers",
    description: "Our team consists of experienced chartered structural engineers with specialist knowledge in building pathology and defect diagnosis."
  },
  {
    icon: <Clock className="h-12 w-12 text-[#ea384c]" />,
    title: "Prompt Response",
    description: "We understand urgency - receive your detailed structural report within 48 hours of our inspection to keep your property transaction on track."
  },
  {
    icon: <MapPin className="h-12 w-12 text-[#ea384c]" />,
    title: "London Property Specialists",
    description: "In-depth knowledge of London's diverse building stock, from Georgian and Victorian properties to modern developments and their common structural issues."
  },
  {
    icon: <ThumbsUp className="h-12 w-12 text-[#ea384c]" />,
    title: "Trusted by Surveyors & Agents",
    description: "Regularly recommended by RICS surveyors, estate agents, and conveyancers across London for our thorough assessments and clear reporting."
  },
  {
    icon: <FileText className="h-12 w-12 text-[#ea384c]" />,
    title: "Jargon-Free Reports",
    description: "We explain our findings in clear, straightforward language, ensuring you fully understand the structural condition of your property."
  },
  {
    icon: <Award className="h-12 w-12 text-[#ea384c]" />,
    title: "Professional Indemnity Insurance",
    description: "Full professional indemnity insurance coverage, giving you complete peace of mind when making decisions based on our expert assessment."
  }
];

const WhyChooseUs = () => {
  return (
    <section id="process" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F2C] mb-4">Why Choose Alemara Structural Engineers?</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            When it comes to assessing structural issues in your London property, specialist expertise and experience matter.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {reasons.map((reason, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold text-[#1A1F2C] mb-2">{reason.title}</h3>
              <p className="text-gray-700">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
