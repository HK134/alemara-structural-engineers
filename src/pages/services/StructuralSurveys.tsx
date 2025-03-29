
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { 
  ArrowRight, 
  Search, 
  AlertTriangle, 
  Scale, 
  Ruler, 
  Building, 
  Shield, 
  Clock, 
  Image, 
  Check,
  MapPin
} from "lucide-react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const StructuralSurveys = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-[#1A1F2C] py-20 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block bg-[#ea384c]/20 px-4 py-2 rounded-full mb-4">
                <span className="text-[#ea384c] font-semibold text-sm">LONDON'S TRUSTED STRUCTURAL ENGINEERS</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Expert Structural Surveys & Inspections</h1>
              <p className="text-xl mb-8">
                Comprehensive structural assessments for London properties by chartered engineers
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-[#ea384c] hover:bg-[#d02e40]">
                  <Link to="/#contact" className="flex items-center">
                    Book a Structural Survey <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#1A1F2C]">
                  <a href="tel:02080049060" className="flex items-center">
                    Call 020 8004 9060
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction with Stats */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
                <div className="md:w-2/3">
                  <h2 className="text-3xl font-bold text-[#1A1F2C] mb-4">Why Choose Our Structural Surveys?</h2>
                  <p className="text-lg text-gray-700 mb-6">
                    Our structural survey services provide property owners, buyers, and managers with detailed assessments
                    of building structures. Our chartered engineers have extensive experience with London's diverse building
                    stock, from historic Georgian and Victorian properties to modern developments.
                  </p>
                  <p className="text-lg text-gray-700">
                    We provide clear, jargon-free reports that explain our findings and recommendations in detail, helping
                    you make informed decisions about your property investment or renovation plans.
                  </p>
                </div>
                <div className="md:w-1/3 bg-gray-50 p-6 rounded-lg shadow-sm">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-[#ea384c] text-3xl font-bold">10+</div>
                      <div className="text-gray-600 text-sm">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-[#ea384c] text-3xl font-bold">1000+</div>
                      <div className="text-gray-600 text-sm">Projects Completed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-[#ea384c] text-3xl font-bold">95%</div>
                      <div className="text-gray-600 text-sm">Client Satisfaction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-[#ea384c] text-3xl font-bold">32</div>
                      <div className="text-gray-600 text-sm">London Boroughs</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 flex gap-4 items-center">
                <Clock className="text-[#ea384c] h-8 w-8 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-[#1A1F2C]">Fast Response Times</h3>
                  <p className="text-gray-600">We typically arrange site visits within 2-3 days and deliver reports within 5 working days</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Cards */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[#1A1F2C] mb-4">Our Structural Survey Services</h2>
                <p className="text-lg text-gray-700">
                  Comprehensive structural inspection services tailored to London properties
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#ea384c]/10 p-3 rounded-lg">
                        <AlertTriangle className="h-6 w-6 text-[#ea384c]" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-semibold text-[#1A1F2C]">Crack Assessment</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Expert analysis of cracks in walls, floors, and ceilings to determine their cause, severity, and remedial action required.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-[#ea384c] flex-shrink-0 mt-0.5" />
                        <span>Categorization of crack types and severity</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-[#ea384c] flex-shrink-0 mt-0.5" />
                        <span>Assessment of underlying structural issues</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-[#ea384c] flex-shrink-0 mt-0.5" />
                        <span>Clear recommendations for repairs</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#ea384c]/10 p-3 rounded-lg">
                        <Scale className="h-6 w-6 text-[#ea384c]" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-semibold text-[#1A1F2C]">Bulging Walls & Movement</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Assessment of wall bulging, leaning structures, and building movement issues common in London period properties.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-[#ea384c] flex-shrink-0 mt-0.5" />
                        <span>Identification of movement patterns</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-[#ea384c] flex-shrink-0 mt-0.5" />
                        <span>Assessment of structural stability risks</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-[#ea384c] flex-shrink-0 mt-0.5" />
                        <span>Solutions for stabilization and repair</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#ea384c]/10 p-3 rounded-lg">
                        <Building className="h-6 w-6 text-[#ea384c]" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-semibold text-[#1A1F2C]">Pre-Purchase Surveys</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Detailed structural inspections for property buyers to identify potential issues before completing a purchase.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-[#ea384c] flex-shrink-0 mt-0.5" />
                        <span>Comprehensive structural assessment</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-[#ea384c] flex-shrink-0 mt-0.5" />
                        <span>Identification of hidden defects</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-[#ea384c] flex-shrink-0 mt-0.5" />
                        <span>Cost estimates for necessary repairs</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#ea384c]/10 p-3 rounded-lg">
                        <Ruler className="h-6 w-6 text-[#ea384c]" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-semibold text-[#1A1F2C]">Subsidence Investigations</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Specialist assessment of subsidence issues, particularly common in London clay soil areas.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-[#ea384c] flex-shrink-0 mt-0.5" />
                        <span>Root cause analysis of subsidence</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-[#ea384c] flex-shrink-0 mt-0.5" />
                        <span>Monitoring recommendations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-[#ea384c] flex-shrink-0 mt-0.5" />
                        <span>Remedial strategy development</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <div className="text-center mt-12">
                <Button className="bg-[#ea384c] hover:bg-[#d02e40]">
                  <Link to="/#contact" className="flex items-center">
                    Request a Survey <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Process Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[#1A1F2C] mb-4">Our Survey Process</h2>
                <p className="text-lg text-gray-700">
                  A simple, transparent approach to structural surveys
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center bg-[#ea384c]/10 w-16 h-16 rounded-full mb-4">
                    <span className="text-[#ea384c] text-xl font-bold">1</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Initial Consultation</h3>
                  <p className="text-gray-600">We discuss your requirements and provide a clear, fixed-price quote with no hidden fees</p>
                </div>
                
                <div className="text-center">
                  <div className="inline-flex items-center justify-center bg-[#ea384c]/10 w-16 h-16 rounded-full mb-4">
                    <span className="text-[#ea384c] text-xl font-bold">2</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">On-Site Inspection</h3>
                  <p className="text-gray-600">Our chartered engineer conducts a thorough assessment of the property structure</p>
                </div>
                
                <div className="text-center">
                  <div className="inline-flex items-center justify-center bg-[#ea384c]/10 w-16 h-16 rounded-full mb-4">
                    <span className="text-[#ea384c] text-xl font-bold">3</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Detailed Report</h3>
                  <p className="text-gray-600">We deliver a comprehensive report with findings, recommendations and next steps</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[#1A1F2C] mb-4">What Our London Clients Say</h2>
                <p className="text-lg text-gray-700">
                  Trusted by homeowners, property buyers, and building professionals across London
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="border border-gray-200 shadow-sm">
                  <CardContent className="pt-6">
                    <p className="italic text-gray-600 mb-4">"The survey was thorough and identified serious structural issues in our Victorian terrace that our RICS survey had completely missed. Worth every penny."</p>
                    <div className="flex items-center">
                      <div className="bg-[#ea384c]/10 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                        <span className="text-[#ea384c] font-bold">MH</span>
                      </div>
                      <div>
                        <div className="font-semibold">Michael Harrington</div>
                        <div className="text-sm text-gray-500 flex items-center">
                          <MapPin className="h-3 w-3 mr-1" /> Islington, London
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border border-gray-200 shadow-sm">
                  <CardContent className="pt-6">
                    <p className="italic text-gray-600 mb-4">"Alemara's structural survey saved us from making an expensive mistake. The engineer spotted subsidence issues that would have cost tens of thousands to fix."</p>
                    <div className="flex items-center">
                      <div className="bg-[#ea384c]/10 w-10 h-10 rounded-full flex items-center justify-center mr-3">
                        <span className="text-[#ea384c] font-bold">SL</span>
                      </div>
                      <div>
                        <div className="font-semibold">Sarah Lawrence</div>
                        <div className="text-sm text-gray-500 flex items-center">
                          <MapPin className="h-3 w-3 mr-1" /> Hackney, London
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        {/* London Areas Covered */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[#1A1F2C] mb-4">London Areas We Cover</h2>
                <p className="text-lg text-gray-700">
                  Our structural engineers provide surveys across all London boroughs
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gray-50 p-3 rounded text-center border border-gray-200">
                  <span className="text-[#1A1F2C]">Camden & Islington</span>
                </div>
                <div className="bg-gray-50 p-3 rounded text-center border border-gray-200">
                  <span className="text-[#1A1F2C]">Hackney & Tower Hamlets</span>
                </div>
                <div className="bg-gray-50 p-3 rounded text-center border border-gray-200">
                  <span className="text-[#1A1F2C]">Westminster & Kensington</span>
                </div>
                <div className="bg-gray-50 p-3 rounded text-center border border-gray-200">
                  <span className="text-[#1A1F2C]">Lambeth & Southwark</span>
                </div>
                <div className="bg-gray-50 p-3 rounded text-center border border-gray-200">
                  <span className="text-[#1A1F2C]">Richmond & Kingston</span>
                </div>
                <div className="bg-gray-50 p-3 rounded text-center border border-gray-200">
                  <span className="text-[#1A1F2C]">Hammersmith & Fulham</span>
                </div>
                <div className="bg-gray-50 p-3 rounded text-center border border-gray-200">
                  <span className="text-[#1A1F2C]">Wandsworth & Merton</span>
                </div>
                <div className="bg-gray-50 p-3 rounded text-center border border-gray-200">
                  <span className="text-[#1A1F2C]">All Other Boroughs</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="bg-[#1A1F2C] py-16 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Concerned About Your Property?</h2>
              <p className="text-xl mb-8">
                Our team of chartered structural engineers is ready to inspect your property and provide expert advice.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-[#ea384c] hover:bg-[#d02e40]">
                  <Link to="/#contact" className="flex items-center">
                    Book a Structural Survey <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#1A1F2C]">
                  <a href="tel:02080049060" className="flex items-center">
                    Call 020 8004 9060
                  </a>
                </Button>
              </div>
              <div className="mt-8 p-4 bg-white/10 rounded-lg">
                <div className="flex items-center justify-center text-sm">
                  <Shield className="h-4 w-4 text-[#ea384c] mr-2" />
                  <span>All surveys conducted by chartered structural engineers</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default StructuralSurveys;
