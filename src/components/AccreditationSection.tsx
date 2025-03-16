
import React from 'react';
import { Award } from 'lucide-react';

const AccreditationSection = () => {
  return (
    <section className="py-10 bg-white border-y border-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center p-2 bg-[#ea384c]/10 rounded-full mb-3">
            <Award className="h-5 w-5 text-[#ea384c]" />
          </div>
          <h2 className="text-2xl font-bold text-[#1A1F2C]">Professional Accreditation</h2>
        </div>
        
        <div className="flex justify-center items-center">
          <img 
            src="/lovable-uploads/1f9708d9-de83-4362-9b30-7fafe295163c.png" 
            alt="Professional Accreditations - IStructE, ICE, Constructionline, Acclaim, SSIP" 
            className="max-w-full h-auto max-h-16 md:max-h-20" 
          />
        </div>
      </div>
    </section>
  );
};

export default AccreditationSection;
