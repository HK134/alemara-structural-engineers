
import React from 'react';
import { Award, Clock, MapPin, ThumbsUp, Users, Zap } from 'lucide-react';

const reasons = [
  {
    icon: <Award className="h-12 w-12 text-survey-accent" />,
    title: "Certified Expertise",
    description: "Our surveyors are fully certified by RICS with decades of combined experience in London properties."
  },
  {
    icon: <Clock className="h-12 w-12 text-survey-accent" />,
    title: "Fast Turnaround",
    description: "Receive your detailed structural report within 48 hours of the survey completion."
  },
  {
    icon: <MapPin className="h-12 w-12 text-survey-accent" />,
    title: "London Specialists",
    description: "Intimate knowledge of London's unique property landscape, from Georgian townhouses to modern developments."
  },
  {
    icon: <ThumbsUp className="h-12 w-12 text-survey-accent" />,
    title: "Trusted Service",
    description: "Over 500 five-star reviews from satisfied clients across Greater London."
  },
  {
    icon: <Users className="h-12 w-12 text-survey-accent" />,
    title: "Client-Focused Approach",
    description: "We explain our findings in plain English, ensuring you fully understand your property's condition."
  },
  {
    icon: <Zap className="h-12 w-12 text-survey-accent" />,
    title: "Actionable Recommendations",
    description: "Practical advice on addressing structural issues, prioritized by urgency and importance."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-survey-primary mb-4">Why Choose Our Structural Surveys?</h2>
          <p className="text-xl text-survey-dark max-w-3xl mx-auto">
            When it comes to understanding the structural integrity of your London property, experience and local knowledge matter.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {reasons.map((reason, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold text-survey-primary mb-2">{reason.title}</h3>
              <p className="text-survey-dark">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
