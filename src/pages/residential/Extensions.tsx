
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowRight, Home, CheckCircle2, Maximize2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Extensions = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "House Extension Structural Engineering London",
    "provider": {
      "@type": "ProfessionalService",
      "name": "London Structural Surveys",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "London",
        "addressRegion": "Greater London",
        "addressCountry": "UK"
      }
    },
    "description": "Expert structural engineering for house extensions in London. Detailed calculations, drawings and Building Regulations approval for side, rear and wrap-around extensions.",
    "serviceType": "Extension Structural Engineering",
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "51.5074",
        "longitude": "0.1278"
      },
      "geoRadius": "30"
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>House Extension Structural Engineering London | Alemara Engineers</title>
        <meta name="description" content="Specialist structural engineering for London house extensions. Expert calculations and drawings for side, rear and wrap-around extensions across London." />
        <meta name="keywords" content="house extension, structural engineer London, side extension, rear extension, wrap-around extension, single storey, double storey" />
        <link rel="canonical" href="https://alemara.co.uk/services/residential/extensions" />
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      </Helmet>
      
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-[#1A1F2C] py-20 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center text-sm mb-4">
                <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
                <span className="mx-2">›</span>
                <Link to="/services" className="text-gray-300 hover:text-white">Services</Link>
                <span className="mx-2">›</span>
                <Link to="/services#residential-work" className="text-gray-300 hover:text-white">Residential</Link>
                <span className="mx-2">›</span>
                <span className="text-white">Extensions</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">House Extension Structural Engineering</h1>
              <p className="text-xl mb-8">
                Expert structural design services for all types of London house extensions, from simple single-storey extensions to complex multi-storey additions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-[#ea384c] hover:bg-[#d02e40]">
                  <Link to="/#contact" className="flex items-center">
                    Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" className="text-white border-white hover:bg-white/10">
                  <Link to="#benefits" className="flex items-center">
                    Learn More
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Overview Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <h2 className="text-3xl font-bold text-[#1A1F2C] mb-4">Extension Design Specialists</h2>
                  <p className="text-gray-700 mb-4">
                    House extensions are one of the most effective ways to add living space and value to your London property. Our structural engineers specialize in creating safe, efficient designs for all types of residential extensions.
                  </p>
                  <p className="text-gray-700 mb-4">
                    From rear extensions and side returns to wrap-around extensions and double-storey additions, we provide comprehensive structural calculations and drawings for Building Regulations approval.
                  </p>
                  <p className="text-gray-700">
                    We understand the unique challenges presented by London's diverse housing stock, from Victorian terraces to modern properties, and create tailored solutions for each project.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                    <h3 className="text-xl font-semibold mb-4 text-[#1A1F2C]">Our Extension Services Include:</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-[#ea384c] mr-2 mt-0.5" />
                        <span>Structural calculations for Building Regulations</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-[#ea384c] mr-2 mt-0.5" />
                        <span>Detailed construction drawings</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-[#ea384c] mr-2 mt-0.5" />
                        <span>Steel beam and column specifications</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-[#ea384c] mr-2 mt-0.5" />
                        <span>Foundation design and calculations</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-[#ea384c] mr-2 mt-0.5" />
                        <span>Party wall engineering support</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-[#ea384c] mr-2 mt-0.5" />
                        <span>Roof structure design</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Types of Extensions */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-[#1A1F2C] mb-8 text-center">Types of House Extensions We Design</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-3 text-[#1A1F2C]">Single-Storey Rear Extensions</h3>
                  <p className="text-gray-700 mb-3">
                    The most common type of extension in London, adding space to the back of your property, typically for expanded kitchens or living areas.
                  </p>
                  <ul className="space-y-2 mb-3">
                    <li className="flex items-start">
                      <div className="mr-2 mt-1.5">
                        <div className="h-3 w-3 rounded-full bg-[#ea384c]"></div>
                      </div>
                      <span>Full-width rear extensions</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1.5">
                        <div className="h-3 w-3 rounded-full bg-[#ea384c]"></div>
                      </div>
                      <span>Partial-width extensions</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1.5">
                        <div className="h-3 w-3 rounded-full bg-[#ea384c]"></div>
                      </div>
                      <span>Glazed rear extensions</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-3 text-[#1A1F2C]">Side Return Extensions</h3>
                  <p className="text-gray-700 mb-3">
                    Perfect for London terraced houses, utilizing the narrow strip of land alongside the property to create wider, more usable internal spaces.
                  </p>
                  <ul className="space-y-2 mb-3">
                    <li className="flex items-start">
                      <div className="mr-2 mt-1.5">
                        <div className="h-3 w-3 rounded-full bg-[#ea384c]"></div>
                      </div>
                      <span>Full-length side returns</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1.5">
                        <div className="h-3 w-3 rounded-full bg-[#ea384c]"></div>
                      </div>
                      <span>Partial side infills</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1.5">
                        <div className="h-3 w-3 rounded-full bg-[#ea384c]"></div>
                      </div>
                      <span>Side return with structural glazing</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-3 text-[#1A1F2C]">Wrap-Around Extensions</h3>
                  <p className="text-gray-700 mb-3">
                    Combining rear and side extensions to create an L-shaped addition that maximizes available space and transforms living areas.
                  </p>
                  <ul className="space-y-2 mb-3">
                    <li className="flex items-start">
                      <div className="mr-2 mt-1.5">
                        <div className="h-3 w-3 rounded-full bg-[#ea384c]"></div>
                      </div>
                      <span>Single-storey wrap-arounds</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1.5">
                        <div className="h-3 w-3 rounded-full bg-[#ea384c]"></div>
                      </div>
                      <span>Multi-level wrap-arounds</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1.5">
                        <div className="h-3 w-3 rounded-full bg-[#ea384c]"></div>
                      </div>
                      <span>Complex geometric designs</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-3 text-[#1A1F2C]">Double-Storey Extensions</h3>
                  <p className="text-gray-700 mb-3">
                    Maximizing your property's potential by adding space to both ground and first floors, typically adding bedrooms upstairs and living space below.
                  </p>
                  <ul className="space-y-2 mb-3">
                    <li className="flex items-start">
                      <div className="mr-2 mt-1.5">
                        <div className="h-3 w-3 rounded-full bg-[#ea384c]"></div>
                      </div>
                      <span>Rear double-storey extensions</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1.5">
                        <div className="h-3 w-3 rounded-full bg-[#ea384c]"></div>
                      </div>
                      <span>Side double-storey extensions</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1.5">
                        <div className="h-3 w-3 rounded-full bg-[#ea384c]"></div>
                      </div>
                      <span>Combined with loft conversions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Benefits Section */}
        <section id="benefits" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1A1F2C] mb-4">Why Choose Our Extension Engineering Services</h2>
              <p className="text-xl text-gray-700">
                Working with our specialist structural engineers ensures your extension is safe, compliant, and optimized for your property
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                <div className="rounded-full bg-[#ea384c]/10 w-12 h-12 flex items-center justify-center mb-4">
                  <Home className="h-6 w-6 text-[#ea384c]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#1A1F2C]">London Property Expertise</h3>
                <p className="text-gray-700">
                  Our engineers understand the unique challenges of London's diverse housing stock, from Victorian terraces to modern properties.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                <div className="rounded-full bg-[#ea384c]/10 w-12 h-12 flex items-center justify-center mb-4">
                  <CheckCircle2 className="h-6 w-6 text-[#ea384c]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#1A1F2C]">Building Regulations Approval</h3>
                <p className="text-gray-700">
                  All our calculations and drawings are designed to satisfy Building Control requirements, ensuring a smooth approval process.
                </p>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                <div className="rounded-full bg-[#ea384c]/10 w-12 h-12 flex items-center justify-center mb-4">
                  <Maximize2 className="h-6 w-6 text-[#ea384c]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#1A1F2C]">Space Optimization</h3>
                <p className="text-gray-700">
                  We create structural solutions that maximize your available space while ensuring safety and compliance with all regulations.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-[#1A1F2C] py-16 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Start Your House Extension?</h2>
              <p className="text-xl mb-8">
                Contact our structural engineering team today for expert advice on your London extension project.
              </p>
              <Button size="lg" className="bg-[#ea384c] hover:bg-[#d02e40]">
                <Link to="/#contact" className="flex items-center">
                  Book a Consultation <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Extensions;
