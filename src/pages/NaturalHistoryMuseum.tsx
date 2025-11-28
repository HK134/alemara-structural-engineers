import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Play, Maximize2 } from 'lucide-react';

const NaturalHistoryMuseum = () => {

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Helmet>
        <title>Natural History Museum - 3D Scan & Virtual Tour | Alemara</title>
        <meta name="description" content="Explore the Natural History Museum through our advanced 3D scanning and virtual tour technology. Experience detailed point cloud renders and interactive walkthrough." />
        <meta name="robots" content="noindex, nofollow" />
        <link rel="canonical" href="https://alemara.co.uk/Natural-History-Museum" />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-[#1A1F2C] text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Natural History Museum</h1>
            <p className="text-xl max-w-3xl mb-4">
              Point Cloud Visualisation & Virtual Tour
            </p>
            
          </div>
        </section>

        {/* Point Cloud / Pano2VR Section - Desktop Only */}
        <section className="py-12 bg-white hidden md:block">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4 text-[#1A1F2C]">Interactive 3D Point Cloud Visualisation</h2>
              <p className="text-gray-600 mb-6">
                Explore the detailed 3D scan of the site. Use your mouse to navigate and interact with the model.
              </p>
            </div>
            
            <div className="relative w-full bg-black rounded-lg shadow-lg overflow-hidden" style={{ height: '600px' }}>
              <iframe 
                src="https://framebound.co.uk/Pointcloud/nhmsubway.html" 
                className="w-full h-full border-0"
                loading="lazy" 
                allow="fullscreen; accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; magnetometer; xr-spatial-tracking;"
                allowFullScreen
                title="Natural History Museum Point Cloud 3D View"
              />
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500">
                Tip: Click and drag to rotate, scroll to zoom, navigate between views
              </p>
            </div>
          </div>
        </section>

        {/* Virtual Tour Section */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4 text-[#1A1F2C]">Virtual Tour Experience</h2>
              <p className="text-gray-600 mb-8">
                Take a complete walkthrough of the site with our immersive virtual tour. Available on desktop and mobile.
              </p>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-[#1A1F2C] to-[#2A3F5C] rounded-lg p-12 shadow-xl">
                  <div className="mb-8">
                    <Play className="h-20 w-20 mx-auto text-[#ea384c] mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-2">Start Virtual Tour</h3>
                    <p className="text-gray-300">Experience a full 360° walkthrough</p>
                  </div>
                  
                  <Button 
                    asChild
                    className="bg-[#ea384c] hover:bg-[#ea384c]/90 text-white text-lg px-8 py-6 h-auto"
                  >
                    <a href="/tours/nhm/index.html" target="_blank" rel="noopener noreferrer">
                      <Maximize2 className="mr-2 h-5 w-5" />
                      Launch Full-Screen Tour
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Project Information */}
        <section className="py-12 bg-transparent">
          
             
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-[#1A1F2C] text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Need 3D Scanning Services?</h2>
            <p className="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
              Our advanced surveying services provide comprehensive site analysis for civil engineering projects.
            </p>
            <Button 
              asChild
              className="bg-[#ea384c] hover:bg-[#ea384c]/90 text-white text-lg px-8 py-6 h-auto"
            >
              <a href="/contact">Contact Us About Your Project</a>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default NaturalHistoryMuseum;



