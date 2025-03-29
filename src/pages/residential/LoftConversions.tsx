
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { ArrowRight, Home, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const LoftConversions = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Loft Conversion Structural Engineering London",
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
    "description": "Expert structural engineering for loft conversions in London. Detailed calculations, drawings and Building Regulations approval for all types of loft conversions.",
    "serviceType": "Loft Conversion Structural Engineering",
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
        <title>Loft Conversion Structural Engineering London | Alemara Engineers</title>
        <meta name="description" content="Expert structural engineering for loft conversions in London. Get detailed calculations and drawings for Building Regulations approval for all conversion types." />
        <meta name="keywords" content="loft conversion, London structural engineer, mansard conversion, dormer conversion, hip to gable, roof structural design, building regulations" />
        <link rel="canonical" href="https://londonstructuralsurveys.com/services/residential/loft-conversions" />
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
                <span className="text-white">Loft Conversions</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Loft Conversion Structural Engineering</h1>
              <p className="text-xl mb-8">
                Specialist structural design services for all types of London loft conversions, from simple dormer conversions to complex mansard extensions.
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
                  <h2 className="text-3xl font-bold text-[#1A1F2C] mb-4">Specialist Loft Conversion Engineers</h2>
                  <p className="text-gray-700 mb-4">
                    Loft conversions are one of the most popular home improvements in London, adding valuable living space without extending your property's footprint. Our structural engineers specialize in creating safe, compliant designs for all types of loft conversions.
                  </p>
                  <p className="text-gray-700 mb-4">
                    From simple Velux conversions to more complex mansard extensions, we provide comprehensive structural calculations and drawings for Building Regulations approval, ensuring your project proceeds smoothly.
                  </p>
                  <p className="text-gray-700">
                    We understand London's diverse housing stock and the unique challenges presented by different property types, from Victorian terraces to modern apartments.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                    <h3 className="text-xl font-semibold mb-4 text-[#1A1F2C]">Our Loft Conversion Services Include:</h3>
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
                        <span>Steel beam specifications and designs</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-[#ea384c] mr-2 mt-0.5" />
                        <span>Roof structure modifications</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-[#ea384c] mr-2 mt-0.5" />
                        <span>Floor joist assessments and strengthening</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-[#ea384c] mr-2 mt-0.5" />
                        <span>Party wall considerations</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Types of Loft Conversions */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-[#1A1F2C] mb-8 text-center">Types of Loft Conversions We Design</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-3 text-[#1A1F2C]">Dormer Loft Conversions</h3>
                  <p className="text-gray-700 mb-3">
                    The most common type of conversion in London, extending from the existing roof slope to create additional headroom and floor space.
                  </p>
                  <ul className="space-y-2 mb-3">
                    <li className="flex items-start">
                      <div className="mr-2 mt-1.5">
                        <div className="h-3 w-3 rounded-full bg-[#ea384c]"></div>
                      </div>
                      <span>Flat roof dormers</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1.5">
                        <div className="h-3 w-3 rounded-full bg-[#ea384c]"></div>
                      </div>
                      <span>Gabled dormers</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1.5">
                        <div className="h-3 w-3 rounded-full bg-[#ea384c]"></div>
                      </div>
                      <span>L-shaped dormers</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-3 text-[#1A1F2C]">Hip to Gable Conversions</h3>
                  <p className="text-gray-700 mb-3">
                    Perfect for end-of-terrace or semi-detached houses, replacing the sloping hip roof with a vertical gable end to maximize space.
                  </p>
                  <ul className="space-y-2 mb-3">
                    <li className="flex items-start">
                      <div className="mr-2 mt-1.5">
                        <div className="h-3 w-3 rounded-full bg-[#ea384c]"></div>
                      </div>
                      <span>Standard hip to gable</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1.5">
                        <div className="h-3 w-3 rounded-full bg-[#ea384c]"></div>
                      </div>
                      <span>Double hip to gable</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1.5">
                        <div className="h-3 w-3 rounded-full bg-[#ea384c]"></div>
                      </div>
                      <span>Hip to gable with dormer</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-3 text-[#1A1F2C]">Mansard Loft Conversions</h3>
                  <p className="text-gray-700 mb-3">
                    Common in London's conservation areas, replacing the entire roof structure with a more box-like design featuring a steep 72-degree slope.
                  </p>
                  <ul className="space-y-2 mb-3">
                    <li className="flex items-start">
                      <div className="mr-2 mt-1.5">
                        <div className="h-3 w-3 rounded-full bg-[#ea384c]"></div>
                      </div>
                      <span>Front mansard</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1.5">
                        <div className="h-3 w-3 rounded-full bg-[#ea384c]"></div>
                      </div>
                      <span>Rear mansard</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1.5">
                        <div className="h-3 w-3 rounded-full bg-[#ea384c]"></div>
                      </div>
                      <span>Full mansard (front and rear)</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="text-xl font-semibold mb-3 text-[#1A1F2C]">Velux/Roof Light Conversions</h3>
                  <p className="text-gray-700 mb-3">
                    The simplest and most cost-effective option, adding roof windows to the existing roof slope without altering the roof structure significantly.
                  </p>
                  <ul className="space-y-2 mb-3">
                    <li className="flex items-start">
                      <div className="mr-2 mt-1.5">
                        <div className="h-3 w-3 rounded-full bg-[#ea384c]"></div>
                      </div>
                      <span>Single roof light installations</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1.5">
                        <div className="h-3 w-3 rounded-full bg-[#ea384c]"></div>
                      </div>
                      <span>Multiple roof light configurations</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1.5">
                        <div className="h-3 w-3 rounded-full bg-[#ea384c]"></div>
                      </div>
                      <span>Floor strengthening for new loads</span>
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
              <h2 className="text-3xl font-bold text-[#1A1F2C] mb-4">Why Choose Our Loft Conversion Engineering Services</h2>
              <p className="text-xl text-gray-700">
                Working with our specialist structural engineers ensures your loft conversion is safe, compliant, and optimized for your property
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-xl shadow-sm">
                <div className="rounded-full bg-[#ea384c]/10 w-12 h-12 flex items-center justify-center mb-4">
                  <Home className="h-6 w-6 text-[#ea384c]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#1A1F2C]">London Property Expertise</h3>
                <p className="text-gray-700">
                  Our engineers understand the unique challenges of London's diverse housing stock, from Victorian terraces to modern apartments.
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
                  <ArrowRight className="h-6 w-6 text-[#ea384c]" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#1A1F2C]">Optimized Designs</h3>
                <p className="text-gray-700">
                  We create practical, cost-effective structural solutions that maximize your available space while minimizing construction complexity.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-[#1A1F2C] py-16 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Start Your Loft Conversion?</h2>
              <p className="text-xl mb-8">
                Contact our structural engineering team today for expert advice on your London loft conversion project.
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

export default LoftConversions;
