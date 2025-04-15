
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Building2, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Helmet } from 'react-helmet';

const LondonBoroughs = () => {
  const boroughs = [
    {
      name: "Islington & Highbury",
      path: "/areas/islington-highbury",
      description: "Victorian and Georgian architecture specialists",
      coordinates: { top: "30%", left: "48%" }
    },
    {
      name: "Camden & Kentish Town",
      path: "/areas/camden-kentish-town",
      description: "Period property and conservation area experts",
      coordinates: { top: "35%", left: "45%" }
    },
    {
      name: "Hackney & Shoreditch",
      path: "/areas/hackney-shoreditch",
      description: "Urban regeneration and warehouse conversion specialists",
      coordinates: { top: "40%", left: "52%" }
    },
    {
      name: "Westminster & Mayfair",
      path: "/areas/westminster-mayfair",
      description: "Luxury property and heritage building experts",
      coordinates: { top: "45%", left: "42%" }
    },
    {
      name: "Kensington & Chelsea",
      path: "/areas/kensington-chelsea",
      description: "High-end residential and basement extension specialists",
      coordinates: { top: "50%", left: "38%" }
    }
  ];

  return (
    <>
      <Helmet>
        <title>London Borough Structural Engineering Services | Alemara</title>
        <meta name="description" content="Specialist structural engineering services across London's premier boroughs. Expert solutions for period properties, conservation areas, and modern developments." />
      </Helmet>

      <Navbar />

      <section className="bg-[#1A1F2C] py-20 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            Structural Engineering Across London
          </h1>
          <p className="text-xl text-center max-w-3xl mx-auto">
            Specialized structural engineering expertise tailored to each London borough's unique architectural heritage and planning requirements.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="relative aspect-square bg-gray-100 rounded-lg overflow-hidden">
              <img 
                src="/lovable-uploads/london-boroughs-map.png" 
                alt="London Boroughs Map"
                className="w-full h-full object-cover"
              />
              {boroughs.map((borough, index) => (
                <Link
                  key={index}
                  to={borough.path}
                  className="absolute group"
                  style={{ top: borough.coordinates.top, left: borough.coordinates.left }}
                >
                  <div className="relative">
                    <MapPin className="h-8 w-8 text-[#ea384c] transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform" />
                    <div className="absolute left-1/2 -translate-x-1/2 bg-white p-2 rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap top-full mt-2">
                      <p className="text-sm font-medium">{borough.name}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-[#1A1F2C]">Our Coverage Areas</h2>
              <div className="grid gap-6">
                {boroughs.map((borough, index) => (
                  <Link 
                    key={index}
                    to={borough.path}
                    className="block bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start">
                      <Building2 className="h-6 w-6 text-[#ea384c] mt-1 mr-4" />
                      <div>
                        <h3 className="text-xl font-semibold text-[#1A1F2C] mb-2">{borough.name}</h3>
                        <p className="text-gray-600">{borough.description}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default LondonBoroughs;
