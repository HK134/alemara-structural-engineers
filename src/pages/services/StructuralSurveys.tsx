
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet';
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
  MapPin,
  Phone,
  ThumbsUp,
  Star,
  Microscope,
  Wrench,
  CalendarClock,
  Calendar,
  GanttChart,
  AreaChart
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
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Process from '@/components/Process';
import StickyBookingButton from '@/components/StickyBookingButton';
import BookingDialog from '@/components/BookingDialog';

const faqItems = [
  {
    question: "When should I get a structural survey done?",
    answer: "You should get a structural survey when buying a property, noticing visible defects (cracks, sloping floors, bulging walls), planning renovations that affect load-bearing elements, or if your mortgage lender requires one. They're particularly important for older London properties or those with unusual construction."
  },
  {
    question: "How is a structural survey different from a RICS HomeBuyer Report?",
    answer: "A RICS HomeBuyer Report provides a general overview of a property's condition, while a structural survey focuses specifically on the structural integrity of the building. Our structural surveys are more detailed and technical when it comes to structural elements, providing in-depth analysis of structural defects and specific recommendations for repairs."
  },
  {
    question: "How quickly can you provide a structural survey report?",
    answer: "We typically deliver our structural survey reports within 48 hours of completing the inspection. For urgent cases, we offer a premium service with same-day or next-day report delivery, subject to our engineers' availability."
  },
  {
    question: "Can your structural survey help me negotiate on a property price?",
    answer: "Absolutely. Our detailed reports often identify structural issues that were not apparent during initial viewings. These findings, along with our cost estimates for repairs, provide concrete evidence you can use to negotiate the purchase price or ask the seller to rectify issues before completion."
  },
  {
    question: "Do your structural engineers cover all London boroughs?",
    answer: "Yes, our team of structural engineers covers all 32 London boroughs and surrounding areas. We have extensive experience with London's diverse building stock, from historic Georgian and Victorian properties to modern developments."
  },
  {
    question: "What credentials do your structural engineers have?",
    answer: "All our structural engineers are certified members of either the Institution of Structural Engineers (IStructE) or the Institution of Civil Engineers (ICE). They have a minimum of 10 years of experience in structural assessments of residential and commercial properties across London."
  }
];

const testimonials = [
  {
    quote: "The structural survey identified serious issues with the Victorian property we were about to purchase. The detailed report helped us negotiate £15,000 off the asking price to cover the necessary repairs.",
    author: "James Wilson",
    location: "Hackney, London",
    rating: 5
  },
  {
    quote: "After noticing concerning cracks in our walls, we called Alemara. Their engineer not only identified the cause but also reassured us it wasn't subsidence as we feared. Saved us thousands in unnecessary work.",
    author: "Sarah Thompson",
    location: "Kensington, London",
    rating: 5
  },
  {
    quote: "As a property developer, I've used Alemara for dozens of pre-purchase structural assessments. Their reports are thorough yet clear, and their engineers' expertise with London properties is unmatched.",
    author: "Michael Chen",
    location: "Richmond, London",
    rating: 5
  }
];

const StructuralSurveys = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Expert Structural Surveys London | Alemara Engineers</title>
        <meta name="description" content="Professional structural survey reports for London homeowners, buyers and landlords. Detailed inspections by certified engineers with fast 48-hour delivery." />
        <link rel="canonical" href="https://londonstructuralsurveys.com/services/structural-surveys" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Structural Survey Services",
            "provider": {
              "@type": "ProfessionalService",
              "name": "Alemara Engineers",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "London",
                "addressRegion": "Greater London",
                "addressCountry": "UK"
              }
            },
            "serviceType": "Structural Engineering Survey",
            "areaServed": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": "51.5074",
                "longitude": "-0.1278"
              },
              "geoRadius": "30"
            },
            "description": "Expert structural survey services in London, providing detailed assessments of residential and commercial properties by certified structural engineers."
          })}
        </script>
      </Helmet>
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative bg-[#1A1F2C] py-20 text-white">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2400&q=80')] bg-cover bg-center opacity-30"></div>
          
          <div className="container mx-auto px-4 max-w-7xl relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Expert Structural Surveys By Alemara Engineers
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-200">
                Get a certified structural survey within 24 hours. Our detailed structural inspections catch issues that RICS surveys miss, saving you thousands in repairs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="relative">
                  <BookingDialog>
                    <Button size="lg" className="w-full sm:w-auto bg-[#ea384c] hover:bg-opacity-90 text-white text-lg">
                      <span className="flex items-center">
                        Book a Structural Survey
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </span>
                    </Button>
                  </BookingDialog>
                  <div className="absolute -bottom-7 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                    <span className="flex items-center bg-black bg-opacity-50 text-white px-2 py-1 rounded-full text-xs">
                      <Clock className="mr-1 h-3 w-3 text-[#ea384c]" />
                      Only takes 2 minutes
                    </span>
                  </div>
                </div>
                <a href="tel:02080049060">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#1A1F2C] text-lg w-full sm:w-auto">
                    Call Us: 020 8004 9060
                  </Button>
                </a>
              </div>
              
              <div className="mt-16">
                <div className="flex items-center text-[#ea384c] mb-2">
                  <Clock className="mr-2 h-5 w-5" />
                  <span className="font-semibold">Limited Availability: Book your assessment this week for priority scheduling</span>
                </div>
                <p className="text-gray-300">Serving all of Greater London for 10+ years</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="flex items-center">
                  <Check className="text-[#ea384c] mr-2 h-5 w-5" />
                  <span>London Property Specialists</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-[#ea384c] mr-2 h-5 w-5" />
                  <span>Fast 48hr Report Delivery</span>
                </div>
                <div className="flex items-center">
                  <Check className="text-[#ea384c] mr-2 h-5 w-5" />
                  <span>Trusted by London Homebuyers</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Introduction with Stats */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-[1400px]">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row gap-8 items-center mb-12">
                <div className="md:w-2/3">
                  <h2 className="text-3xl font-bold text-[#1A1F2C] mb-4">Comprehensive Structural Survey Services in London</h2>
                  <p className="text-lg text-gray-700 mb-6">
                    Our structural survey services provide property owners, buyers, and managers with detailed assessments
                    of building structures. Our certified engineers have extensive experience with London's diverse building
                    stock, from historic Georgian and Victorian properties to modern developments.
                  </p>
                  <p className="text-lg text-gray-700">
                    We provide clear, jargon-free structural inspection reports that explain our findings and recommendations in detail, helping
                    you make informed decisions about your property investment or renovation plans. <Link to="/about" className="text-[#ea384c] hover:underline">Learn more about our company</Link>.
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
              
              <div className="bg-[#ea384c]/10 p-6 rounded-lg border border-[#ea384c]/20 flex gap-4 items-center">
                <Shield className="text-[#ea384c] h-8 w-8 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-[#1A1F2C]">We've Saved London Homebuyers Thousands</h3>
                  <p className="text-gray-700">Our detailed structural survey reports have helped clients identify serious defects, negotiate better prices, and avoid costly surprises</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Cards */}
        <section className="py-16 bg-gray-50" id="survey-services">
          <div className="container mx-auto px-4 max-w-[1400px]">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[#1A1F2C] mb-4">Our Structural Survey Services</h2>
                <p className="text-lg text-gray-700">
                  Comprehensive structural inspection services tailored to London properties
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
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
                
                <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#ea384c]/10 p-3 rounded-lg">
                        <Microscope className="h-6 w-6 text-[#ea384c]" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-semibold text-[#1A1F2C]">Timber Defect Analysis</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Assessment of timber structural elements for rot, insect infestation, and other defects common in period properties.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-[#ea384c] flex-shrink-0 mt-0.5" />
                        <span>Identification of wood-boring insects</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-[#ea384c] flex-shrink-0 mt-0.5" />
                        <span>Assessment of rot and fungal decay</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-[#ea384c] flex-shrink-0 mt-0.5" />
                        <span>Treatment and replacement specifications</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="pb-2">
                    <div className="flex items-start gap-4">
                      <div className="bg-[#ea384c]/10 p-3 rounded-lg">
                        <AreaChart className="h-6 w-6 text-[#ea384c]" />
                      </div>
                      <div>
                        <CardTitle className="text-xl font-semibold text-[#1A1F2C]">Structural Analysis</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">
                      Computational analysis of building structures to assess load capacity, stress points, and structural safety.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-[#ea384c] flex-shrink-0 mt-0.5" />
                        <span>Finite element analysis</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-[#ea384c] flex-shrink-0 mt-0.5" />
                        <span>Load capacity assessments</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Check className="h-5 w-5 text-[#ea384c] flex-shrink-0 mt-0.5" />
                        <span>Safety factor calculations</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
              
              <div className="text-center">
                <BookingDialog>
                  <Button className="bg-[#ea384c] hover:bg-[#d02e40]">
                    <span className="flex items-center">
                      Request a Structural Survey <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </Button>
                </BookingDialog>
              </div>
            </div>
          </div>
        </section>
        
        {/* Process Section */}
        <Process />
        
        {/* Image Gallery Section with Lazy Loading */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-[1400px]">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[#1A1F2C] mb-4">Structural Survey Examples</h2>
                <p className="text-lg text-gray-700">
                  See examples of our structural engineering reports and on-site inspections
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-100 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace" 
                    alt="Structural engineer inspecting a building facade" 
                    className="w-full h-64 object-cover" 
                    loading="lazy"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-[#1A1F2C]">Facade Inspection</h3>
                    <p className="text-sm text-gray-600">Detailed assessment of structural integrity in Victorian properties</p>
                  </div>
                </div>
                
                <div className="bg-gray-100 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1487958449943-2429e8be8625" 
                    alt="Measuring wall cracks during a structural survey" 
                    className="w-full h-64 object-cover" 
                    loading="lazy"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-[#1A1F2C]">Crack Assessment</h3>
                    <p className="text-sm text-gray-600">Professional measurement and documentation of structural cracks</p>
                  </div>
                </div>
                
                <div className="bg-gray-100 rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1518005020951-eccb494ad742" 
                    alt="Sample page from a detailed structural survey report" 
                    className="w-full h-64 object-cover" 
                    loading="lazy"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold text-[#1A1F2C]">Sample Report</h3>
                    <p className="text-sm text-gray-600">Example of our comprehensive structural survey documentation</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <Link to="/services#structural-engineering" className="text-[#ea384c] hover:underline font-semibold">
                  View more examples of our structural engineering work
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-[1400px]">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F2C] mb-4">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                Common questions about our structural surveys and assessment services
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-lg font-medium text-[#1A1F2C] hover:text-[#ea384c]">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
            
            <div className="text-center mt-12">
              <p className="text-gray-700 mb-4">Still have questions about our structural surveys?</p>
              <Link to="/contact" className="text-[#ea384c] hover:underline font-semibold">Contact our structural engineers directly</Link>
            </div>
          </div>
        </section>
        
        {/* Testimonials */}
        <section className="py-16 bg-[#1A1F2C] text-white">
          <div className="container mx-auto px-4 max-w-[1400px]">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">What London Homeowners Say</h2>
                <p className="text-xl text-gray-300">
                  Real feedback from our London structural survey clients
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <Card key={index} className="bg-white/10 backdrop-blur-sm border-none hover:bg-white/15 transition-colors">
                    <CardContent className="pt-6">
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-[#ea384c] text-[#ea384c]" />
                        ))}
                      </div>
                      <p className="mb-4 text-gray-100 italic">"{testimonial.quote}"</p>
                    </CardContent>
                    <CardFooter className="border-t border-white/20 pt-4 flex flex-col items-start">
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-gray-300">{testimonial.location}</p>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              
              <div className="text-center mt-8">
                <Link to="/testimonials" className="text-white hover:text-[#ea384c] underline">
                  Read more client testimonials
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* London Areas Covered */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-[1400px]">
            <div className="max-w-5xl mx-auto">
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
        
        {/* Why Choose Us Section - Similar to home page */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-[1400px]">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[#1A1F2C] mb-4">Why Choose Our Structural Engineers?</h2>
                <p className="text-lg text-gray-700">
                  Experienced professionals you can trust with your London property
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="flex justify-center mb-4">
                    <div className="bg-[#ea384c]/10 p-4 rounded-full">
                      <ThumbsUp className="h-8 w-8 text-[#ea384c]" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-[#1A1F2C] mb-2">Trusted by London Property Professionals</h3>
                  <p className="text-gray-600">Regularly recommended by estate agents, mortgage lenders, and solicitors across London</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="flex justify-center mb-4">
                    <div className="bg-[#ea384c]/10 p-4 rounded-full">
                      <Shield className="h-8 w-8 text-[#ea384c]" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-[#1A1F2C] mb-2">Certified Structural Engineers</h3>
                  <p className="text-gray-600">All surveys conducted by certified engineers with minimum 10 years experience</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <div className="flex justify-center mb-4">
                    <div className="bg-[#ea384c]/10 p-4 rounded-full">
                      <Clock className="h-8 w-8 text-[#ea384c]" />
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-[#1A1F2C] mb-2">Fast Turnaround Times</h3>
                  <p className="text-gray-600">Survey appointments within 48 hours and reports delivered within 2-5 working days</p>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <Link to="/about#our-engineers" className="text-[#ea384c] hover:underline">
                  Meet our team of structural engineers
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Money-saving callout */}
        <section className="py-12 bg-[#ea384c]/10">
          <div className="container mx-auto px-4 max-w-[1400px]">
            <div className="max-w-5xl mx-auto">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-lg">
                <div className="md:w-3/4">
                  <h3 className="text-2xl font-bold text-[#1A1F2C] mb-2">We've Saved London Homebuyers Thousands</h3>
                  <p className="text-gray-700">
                    On average, our structural engineering reports help clients save £8,000 - £12,000 on property purchases by identifying issues that RICS surveys miss. Don't risk buying a property with hidden structural problems.
                  </p>
                </div>
                <div className="md:w-1/4">
                  <BookingDialog>
                    <Button size="lg" className="w-full bg-[#ea384c] hover:bg-[#d02e40] text-white">
                      <span className="flex items-center">
                        Book Survey
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </span>
                    </Button>
                  </BookingDialog>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="bg-[#1A1F2C] py-16 text-white">
          <div className="container mx-auto px-4 max-w-[1400px]">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Concerned About Your Property?</h2>
              <p className="text-xl mb-8">
                Our team of certified structural engineers is ready to inspect your property and provide expert advice.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <BookingDialog>
                  <Button size="lg" className="bg-[#ea384c] hover:bg-[#d02e40]">
                    <span className="flex items-center">
                      Book a Structural Survey <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </Button>
                </BookingDialog>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#1A1F2C]">
                  <a href="tel:02080049060" className="flex items-center">
                    Call 020 8004 9060
                  </a>
                </Button>
              </div>
              <div className="mt-8 p-4 bg-white/10 rounded-lg">
                <div className="flex items-center justify-center text-sm">
                  <Shield className="h-4 w-4 text-[#ea384c] mr-2" />
                  <span>All surveys conducted by certified structural engineers</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Related Services */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-[1400px]">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-[#1A1F2C] mb-4">Related Engineering Services</h2>
                <p className="text-lg text-gray-700">
                  Explore our other services that complement structural surveys
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link to="/services/residential" className="group">
                  <div className="border border-gray-200 rounded-lg overflow-hidden hover:border-[#ea384c] transition-colors">
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-[#1A1F2C] mb-2 group-hover:text-[#ea384c] transition-colors">Residential Engineering</h3>
                      <p className="text-gray-600 mb-4">Structural design for extensions, loft conversions, and internal alterations</p>
                      <div className="text-[#ea384c] flex items-center">
                        <span>Learn more</span>
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
                
                <Link to="/services/commercial" className="group">
                  <div className="border border-gray-200 rounded-lg overflow-hidden hover:border-[#ea384c] transition-colors">
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-[#1A1F2C] mb-2 group-hover:text-[#ea384c] transition-colors">Commercial Engineering</h3>
                      <p className="text-gray-600 mb-4">Structural solutions for office, retail, and industrial properties</p>
                      <div className="text-[#ea384c] flex items-center">
                        <span>Learn more</span>
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
                
                <Link to="/services/civil-engineering" className="group">
                  <div className="border border-gray-200 rounded-lg overflow-hidden hover:border-[#ea384c] transition-colors">
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-[#1A1F2C] mb-2 group-hover:text-[#ea384c] transition-colors">Civil Engineering</h3>
                      <p className="text-gray-600 mb-4">Drainage, foundation, and infrastructure engineering solutions</p>
                      <div className="text-[#ea384c] flex items-center">
                        <span>Learn more</span>
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <StickyBookingButton />
    </div>
  );
};

export default StructuralSurveys;
