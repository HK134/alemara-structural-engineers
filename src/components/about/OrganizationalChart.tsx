import React from 'react';
import { Building2, Users } from 'lucide-react';

interface OrgMember {
  name: string;
  role: string;
  email: string;
}

const OrganizationalChart = () => {
  const director: OrgMember = {
    name: "Hayder",
    role: "Practice Director",
    email: "hayder@alemara.co.uk"
  };

  const managers: OrgMember[] = [
    {
      name: "Hassanien",
      role: "Practice Manager",
      email: "hassanien@alemara.co.uk"
    }
  ];

  const seniorEngineers: OrgMember[] = [
    {
      name: "Dr. Hassan",
      role: "Principal Civil Engineer",
      email: "hassan@alemara.co.uk"
    },
    {
      name: "Matheos",
      role: "Structural Engineer",
      email: "matheos@alemara.co.uk"
    },
    {
      name: "Neil",
      role: "Chartered Structural Engineer",
      email: "neil@alemara.co.uk"
    }
  ];

  const OrgCard = ({ member, highlight = false }: { member: OrgMember; highlight?: boolean }) => (
    <div className={`bg-white rounded-lg p-4 shadow-md border-2 transition-all hover:shadow-lg ${
      highlight ? 'border-primary' : 'border-gray-200'
    }`}>
      <h3 className="font-semibold text-gray-900 text-sm">{member.name}</h3>
      <p className="text-xs text-primary font-medium mt-1">{member.role}</p>
      <p className="text-xs text-gray-500 mt-1">{member.email}</p>
    </div>
  );

  return (
    <div className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <Building2 className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Leadership Structure
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our experienced leadership team ensures every project meets the highest standards of structural engineering excellence
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Director Level */}
          <div className="flex justify-center mb-8">
            <div className="w-full max-w-xs">
              <OrgCard member={director} highlight={true} />
            </div>
          </div>

          {/* Connection Line */}
          <div className="flex justify-center mb-8">
            <div className="w-0.5 h-12 bg-gradient-to-b from-primary to-gray-300"></div>
          </div>

          {/* Management Level */}
          <div className="flex justify-center mb-8">
            <div className="w-full max-w-xs">
              <OrgCard member={managers[0]} />
            </div>
          </div>

          {/* Connection Line */}
          <div className="flex justify-center mb-8">
            <div className="w-0.5 h-12 bg-gradient-to-b from-gray-300 to-gray-200"></div>
          </div>

          {/* Senior Engineers Level */}
          <div className="relative">
            {/* Horizontal connecting line */}
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-gray-200 hidden md:block"></div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
              {seniorEngineers.map((engineer, index) => (
                <div key={index} className="relative">
                  {/* Vertical connecting line */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-gray-200 -mt-8 hidden md:block"></div>
                  <OrgCard member={engineer} />
                </div>
              ))}
            </div>
          </div>

          {/* Team Overview */}
          <div className="mt-12 bg-primary/5 rounded-lg p-6 border border-primary/20">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Users className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold text-gray-900">Full Engineering Team</h3>
            </div>
            <p className="text-center text-gray-600 text-sm">
              Our complete team includes specialist structural engineers, temporary works engineers, 
              façade engineers, and support staff working together to deliver exceptional results across 
              all project types—from major infrastructure to residential developments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizationalChart;
