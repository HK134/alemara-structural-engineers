
import React from 'react';
import { Award, Clock, MapPin, ThumbsUp, GraduationCap, FileText, History } from 'lucide-react';

const reasons = [
  {
    icon: <GraduationCap className="h-12 w-12 text-[#ea384c]" />,
    title: "Certified Structural Engineers",
    description: "Our team consists of experienced certified structural engineers with specialist knowledge in building pathology and defect diagnosis."
  },
  {
    icon: <History className="h-12 w-12 text-[#ea384c]" />,
    title: "5-10 Years of Experience",
    description: "With our structural engineering experience in London, we've surveyed thousands of properties across all boroughs and building types."
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
  }
];

const WhyChooseUs = () => {
  return (
    <section id="why-choose-us" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F2C] mb-4">Why Choose Alemara Structural Engineers?</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            When it comes to assessing structural issues in your London property, our 5-10 years of specialist expertise and experience matter.
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
          
          {/* Professional Indemnity Insurance - Redesigned as a single row with logo on left */}
          <div className="col-span-1 md:col-span-2 lg:col-span-3 mt-8">
            <div className="flex flex-col md:flex-row items-center justify-center bg-gray-50 p-4 rounded-lg border border-gray-100">
              <Award className="h-12 w-12 text-[#ea384c] mr-0 md:mr-4 mb-3 md:mb-0" />
              <div className="text-center md:text-left">
                <h3 className="text-xl font-semibold text-[#1A1F2C]">Full Professional Indemnity Insurance Coverage</h3>
                <p className="text-gray-700">Complete peace of mind when making decisions based on our expert assessment.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
