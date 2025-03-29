
import React from 'react';
import { Link } from 'react-router-dom';

const ServiceIntro = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 mb-6">
            At Alemara Structural Engineers, we provide comprehensive engineering solutions across a wide range of projects. 
            Our team of chartered structural and civil engineers brings decades of collective experience to every project, 
            ensuring technical excellence, regulatory compliance, and practical, cost-effective solutions.
          </p>
          <p className="text-lg text-gray-700">
            Whether you're planning a <Link to="/services#residential-work" className="text-[#ea384c] hover:underline">home extension</Link>, developing a <Link to="/services#commercial" className="text-[#ea384c] hover:underline">commercial property</Link>, or working on a major infrastructure project, 
            our engineering expertise will help you achieve your objectives safely, efficiently, and on budget.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServiceIntro;
