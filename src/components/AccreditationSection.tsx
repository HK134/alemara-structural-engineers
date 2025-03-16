
import React from 'react';
import { Shield } from 'lucide-react';

const AccreditationSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-2 bg-[#ea384c]/10 rounded-full mb-4">
            <Shield className="h-6 w-6 text-[#ea384c]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F2C] mb-4">Professional Accreditation</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We maintain the highest industry standards through our affiliation with leading structural engineering and construction safety bodies.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-sm">
          <div className="text-center">
            <img 
              src="/lovable-uploads/b73082d3-f4cd-498f-93a3-137ac572ed47.png" 
              alt="IStructE - The Institution of Structural Engineers" 
              className="h-20 md:h-24 object-contain mb-2" 
            />
            <p className="text-sm font-medium text-gray-700">Institution of<br />Structural Engineers</p>
          </div>
          
          <div className="text-center">
            <img 
              src="/lovable-uploads/205ece92-2248-4d3f-ad1e-2c7a1921f65d.png" 
              alt="ICE - Institution of Civil Engineers" 
              className="h-16 md:h-20 object-contain mb-2" 
            />
            <p className="text-sm font-medium text-gray-700">Institution of<br />Civil Engineers</p>
          </div>
          
          <div className="text-center">
            <img 
              src="/lovable-uploads/23cacf03-8d2a-410a-8aa0-b13a3d9357c4.png" 
              alt="Constructionline - UK Government Certification Service" 
              className="h-16 md:h-20 object-contain mb-2" 
            />
            <p className="text-sm font-medium text-gray-700">Constructionline<br />Gold Member</p>
          </div>
          
          <div className="text-center">
            <img 
              src="https://www.acclaim-health-safety.co.uk/wp-content/uploads/2023/02/homepage-logo.webp" 
              alt="Acclaim Accreditation" 
              className="h-16 md:h-20 object-contain mb-2" 
            />
            <p className="text-sm font-medium text-gray-700">Acclaim<br />Accreditation</p>
          </div>
          
          <div className="text-center">
            <img 
              src="https://ssip.co.uk/wp-content/uploads/2019/10/SSIP-NEW-LOGO.jpg" 
              alt="SSIP - Safety Schemes in Procurement" 
              className="h-16 md:h-20 object-contain mb-2" 
            />
            <p className="text-sm font-medium text-gray-700">Safety Schemes in<br />Procurement</p>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-gray-600">Our team of chartered engineers are endorsed by the Institution of Structural Engineers and registered with the Institution of Civil Engineers.</p>
          <p className="text-gray-600 mt-2">We maintain comprehensive professional indemnity insurance for all structural assessments and consultations.</p>
        </div>
      </div>
    </section>
  );
};

export default AccreditationSection;
