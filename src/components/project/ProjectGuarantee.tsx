
import React from 'react';
import { Shield } from 'lucide-react';

const ProjectGuarantee = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-4">
            <Shield className="h-12 w-12 text-[#ea384c]" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Our Project Delivery Guarantee</h2>
          <p className="text-lg text-gray-700 mb-6">
            Every engineering project we undertake is completed with rigorous attention to detail, 
            ensuring timely delivery and 100% building control approval. Our designs optimize both 
            safety and cost-efficiency, backed by professional indemnity insurance.
          </p>
          <div className="inline-block bg-gray-50 p-4 rounded-lg border border-gray-200">
            <p className="font-semibold text-[#1A1F2C]">
              All projects showcased have received full approval from relevant London borough authorities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectGuarantee;
