
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InfoIcon, Building2, ClipboardList, HelpCircle, ArrowRight, Phone, Clock } from 'lucide-react';
import BookingDialog from '@/components/BookingDialog';
import StickyBookingButton from '@/components/StickyBookingButton';
import { Link } from 'react-router-dom';

// Define FAQ question categories
const generalQuestions = [
  {
    question: "How do I know I need a Structural Engineer?",
    answer: "If you are planning structural changes such as extensions, loft conversions, or removing load-bearing walls, consulting a structural engineer is essential for safety and building control requirements."
  },
  {
    question: "How much do you cost?",
    answer: "Our pricing varies by project size and scope. Contact us first, and we'll guide you through your project and provide a custom quote. We ensure transparent pricing and clear fees upfront, with no surprises in costs."
  },
  {
    question: "What is the process when I engage you?",
    answer: "We begin with an initial consultation, followed by a site visit, then a schematic design for feedback before concluding with a full structural package to meet building control approval requirements."
  },
  {
    question: "Are your engineers chartered and accredited?",
    answer: "Yes, all our structural engineers are accredited by the ICE and/or IStructE UK institutions and have a minimum of 5 years of industry experience."
  },
  {
    question: "What is your turnaround time?",
    answer: "Typically, structural schematics are provided within 5 working days following the site visit and the final structural package is shortly thereafter pending feedback."
  },
  {
    question: "What happens during a site visit?",
    answer: "During a site visit, we assess the structure, take necessary measurements, and discuss project requirements to develop a precise engineering plan."
  }
];

const buildingControlQuestions = [
  {
    question: "Why do I need building control approval for my project?",
    answer: "Building control approval ensures that your project complies with structural safety standards and regulations."
  },
  {
    question: "How do I know your team has experience with my council?",
    answer: "Our team has extensive experience working with various councils across London and the surrounding areas. We are well-versed in local building control requirements and have successfully completed projects complying with council regulations."
  },
  {
    question: "Do you handle building control submissions?",
    answer: "Building control approval typically takes 2-4 weeks after submission. Simple, well-prepared applications may be approved faster, while more complex cases or those requiring additional information may take longer. Timelines can vary, so check with your local council for specifics."
  },
  {
    question: "Can you assist with building control queries after submission?",
    answer: "Absolutely. We're always available to assist with any questions or clarifications building control might have, all free of charge."
  },
  {
    question: "What documents do you provide for building control approval?",
    answer: "Our structural package includes detailed drawings, calculation packages, and specifications."
  },
  {
    question: "Do you ensure compliance with building regulations?",
    answer: "Yes, our designs are crafted to meet all building control approval requirements, and we have a 100% approval rate on all our projects."
  }
];

const planningQuestions = [
  {
    question: "What is the difference between planning permission and building control approval?",
    answer: "Planning permission focuses on the aesthetics and impact of your project, while building control approval ensures structural safety."
  },
  {
    question: "Do I need planning permission for my project?",
    answer: "It depends on the project. We can advise you on whether planning permission or just building control approval is necessary."
  },
  {
    question: "Can you assist with both planning and building control?",
    answer: "We specialise in building control approval but can refer trusted partners for planning assistance."
  },
  {
    question: "Do I always need planning permission for home extensions?",
    answer: "Not always. Many small-scale extensions fall under permitted development rights. However, larger or specific projects usually require planning permission."
  },
  {
    question: "How long does it take to get planning permission?",
    answer: "The process typically takes about 8 weeks for a decision after submitting your application, but it can vary depending on the project and local authority workload."
  },
  {
    question: "Can you work with my architect?",
    answer: "Yes, structural engineers usually support your architect or planning consultant by providing structural reports and calculations needed for planning applications."
  }
];

const otherQuestions = [
  {
    question: "What happens if I have questions during construction?",
    answer: "We are always available to assist during the construction phase. Our team provides ongoing support for building control and contractor questions post-structural package submission to ensure your project proceeds smoothly and any issues are promptly addressed."
  },
  {
    question: "Do you have an after care service?",
    answer: "Yes, we offer comprehensive aftercare services to ensure the success of your project beyond the initial phase. Our team is available to answer questions, provide guidance, and assist with any follow-up concerns. We support clients through final inspections, building control approvals, and any additional queries that may arise during construction or after project completion."
  },
  {
    question: "Are you registered with an approved institution?",
    answer: "Yes, we are registered with the Institution of Structural Engineers (IStructE). All our engineers are accredited by either the ICE or IStructE and hold senior-level positions, ensuring expert and reliable service for every project."
  },
  {
    question: "Do you know any contractors?",
    answer: "Yes, we have a network of trusted contractors and offer project management services alongside our installation and fabrication team on selected projects, ensuring a seamless transition from design to execution."
  },
  {
    question: "Do you also do structural surveys?",
    answer: "Yes, we offer comprehensive structural surveys for residential, commercial, and industrial properties. Our surveys assess the condition of structural elements, identify potential issues, and provide expert recommendations to ensure safety and compliance with building regulations."
  },
  {
    question: "Do you have insurance?",
    answer: "Yes, we have Professional Indemnity (PI) insurance up to £5 million and Public Liability (PL) insurance up to £5 million. This ensures full coverage and protection for all our projects and clients."
  },
  {
    question: "What sets you apart from other engineering firms?",
    answer: "Our team brings years of industry experience, delivering quality engineering services with clear and affordable fees. Our rates are significantly reduced compared to the reputable firms our engineers previously worked for, ensuring you receive top expertise without the high costs."
  },
  {
    question: "What is construction assurance?",
    answer: "It involves on-site inspections and quality checks to ensure the project aligns with approved designs and safety standards."
  },
  {
    question: "What's the best way to contact you?",
    answer: "The best way to reach us is by phone or email. If you call or send your drawings, we can provide a callback to discuss your project in detail."
  },
  {
    question: "How do you ensure projects remain on schedule?",
    answer: "Through regular updates, proactive communication, and efficient handling of building control queries."
  }
];

// Quick links for sidebar navigation
const quickLinks = [
  {
    question: "How do I know I need a Structural Engineer?",
    value: "general-0"
  },
  {
    question: "How much do you cost?",
    value: "general-1"
  },
  {
    question: "What is the process when I engage you?",
    value: "general-2"
  },
  {
    question: "Are your engineers chartered and accredited?",
    value: "general-3"
  },
  {
    question: "What is your turnaround time?",
    value: "general-4"
  },
  {
    question: "What happens during a site visit?",
    value: "general-5"
  }
];

const FAQPage = () => {
  const [activeTab, setActiveTab] = useState("general");
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  const handleAccordionChange = (value: string) => {
    setActiveAccordion(activeAccordion === value ? null : value);
  };

  const scrollToQuestion = (value: string) => {
    const [tab, index] = value.split('-');
    setActiveTab(tab);
    
    // Use setTimeout to allow tab content to render before scrolling
    setTimeout(() => {
      const element = document.getElementById(value);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        setActiveAccordion(value);
      }
    }, 100);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Frequently Asked Questions | London Structural Engineering</title>
        <meta 
          name="description" 
          content="Find answers to common questions about structural engineering services, building control approval, planning permission, and more." 
        />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-[#1A1F2C] py-16 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h1>
              <p className="text-lg text-gray-300">
                Find answers to common questions about our structural engineering services
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Content Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Sidebar with Quick Links */}
              <div className="md:w-1/4">
                <div className="sticky top-24 bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <div className="flex items-center gap-2 mb-6">
                    <ArrowRight className="text-[#ea384c] h-5 w-5" />
                    <h2 className="text-xl font-bold text-[#1A1F2C]">Quick Links</h2>
                  </div>
                  
                  <div className="space-y-4">
                    {quickLinks.map((link, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <ArrowRight className="text-[#ea384c] h-4 w-4 mt-1 flex-shrink-0" />
                        <button 
                          onClick={() => scrollToQuestion(link.value)}
                          className="text-left text-gray-700 hover:text-[#ea384c] transition-colors"
                        >
                          {link.question}
                        </button>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-8 bg-[#ea384c]/10 p-6 rounded-lg">
                    <div className="flex items-center gap-2 mb-3">
                      <HelpCircle className="text-[#ea384c] h-5 w-5" />
                      <h3 className="text-lg font-semibold text-[#1A1F2C]">Need More Help?</h3>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Can't find what you're looking for? Contact our team directly.
                    </p>
                    <Button 
                      className="w-full bg-[#ea384c] hover:bg-[#d02e40] text-white"
                      asChild
                    >
                      <Link to="/contact">
                        <div className="flex items-center justify-center">
                          <Phone className="mr-2 h-4 w-4" />
                          Contact Us
                        </div>
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Main Content with Tabs */}
              <div className="md:w-3/4">
                <Tabs 
                  value={activeTab} 
                  onValueChange={setActiveTab}
                  className="w-full"
                >
                  <TabsList className="w-full mb-6 grid grid-cols-2 md:grid-cols-4 gap-2">
                    <TabsTrigger 
                      value="general" 
                      className="flex items-center gap-2 data-[state=active]:bg-[#ea384c] data-[state=active]:text-white"
                    >
                      <InfoIcon className="h-5 w-5" />
                      <span>General Questions</span>
                      <Badge variant="secondary" className="bg-white text-[#1A1F2C] ml-auto">
                        {generalQuestions.length}
                      </Badge>
                    </TabsTrigger>
                    <TabsTrigger 
                      value="building" 
                      className="flex items-center gap-2 data-[state=active]:bg-[#ea384c] data-[state=active]:text-white"
                    >
                      <Building2 className="h-5 w-5" />
                      <span>Building Control</span>
                      <Badge variant="secondary" className="bg-white text-[#1A1F2C] ml-auto">
                        {buildingControlQuestions.length}
                      </Badge>
                    </TabsTrigger>
                    <TabsTrigger 
                      value="planning" 
                      className="flex items-center gap-2 data-[state=active]:bg-[#ea384c] data-[state=active]:text-white"
                    >
                      <ClipboardList className="h-5 w-5" />
                      <span>Planning</span>
                      <Badge variant="secondary" className="bg-white text-[#1A1F2C] ml-auto">
                        {planningQuestions.length}
                      </Badge>
                    </TabsTrigger>
                    <TabsTrigger 
                      value="other" 
                      className="flex items-center gap-2 data-[state=active]:bg-[#ea384c] data-[state=active]:text-white"
                    >
                      <HelpCircle className="h-5 w-5" />
                      <span>Other Questions</span>
                      <Badge variant="secondary" className="bg-white text-[#1A1F2C] ml-auto">
                        {otherQuestions.length}
                      </Badge>
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="general" className="mt-6">
                    <div className="flex items-center gap-2 mb-4">
                      <InfoIcon className="text-[#ea384c] h-6 w-6" />
                      <h2 className="text-2xl font-bold text-[#1A1F2C]">General Questions</h2>
                    </div>
                    <Accordion
                      type="single"
                      collapsible
                      value={activeAccordion}
                      onValueChange={handleAccordionChange}
                      className="space-y-4"
                    >
                      {generalQuestions.map((item, index) => (
                        <AccordionItem
                          key={index}
                          value={`general-${index}`}
                          id={`general-${index}`}
                          className="border border-gray-200 rounded-lg overflow-hidden"
                        >
                          <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 hover:no-underline">
                            <div className="text-left font-medium text-[#1A1F2C]">
                              {item.question}
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="px-6 py-4 bg-gray-50 text-gray-700">
                            {item.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </TabsContent>
                  
                  <TabsContent value="building" className="mt-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Building2 className="text-[#ea384c] h-6 w-6" />
                      <h2 className="text-2xl font-bold text-[#1A1F2C]">Building Control Questions</h2>
                    </div>
                    <Accordion
                      type="single"
                      collapsible
                      value={activeAccordion}
                      onValueChange={handleAccordionChange}
                      className="space-y-4"
                    >
                      {buildingControlQuestions.map((item, index) => (
                        <AccordionItem
                          key={index}
                          value={`building-${index}`}
                          id={`building-${index}`}
                          className="border border-gray-200 rounded-lg overflow-hidden"
                        >
                          <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 hover:no-underline">
                            <div className="text-left font-medium text-[#1A1F2C]">
                              {item.question}
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="px-6 py-4 bg-gray-50 text-gray-700">
                            {item.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </TabsContent>
                  
                  <TabsContent value="planning" className="mt-6">
                    <div className="flex items-center gap-2 mb-4">
                      <ClipboardList className="text-[#ea384c] h-6 w-6" />
                      <h2 className="text-2xl font-bold text-[#1A1F2C]">Planning Questions</h2>
                    </div>
                    <Accordion
                      type="single"
                      collapsible
                      value={activeAccordion}
                      onValueChange={handleAccordionChange}
                      className="space-y-4"
                    >
                      {planningQuestions.map((item, index) => (
                        <AccordionItem
                          key={index}
                          value={`planning-${index}`}
                          id={`planning-${index}`}
                          className="border border-gray-200 rounded-lg overflow-hidden"
                        >
                          <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 hover:no-underline">
                            <div className="text-left font-medium text-[#1A1F2C]">
                              {item.question}
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="px-6 py-4 bg-gray-50 text-gray-700">
                            {item.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </TabsContent>
                  
                  <TabsContent value="other" className="mt-6">
                    <div className="flex items-center gap-2 mb-4">
                      <HelpCircle className="text-[#ea384c] h-6 w-6" />
                      <h2 className="text-2xl font-bold text-[#1A1F2C]">Other Questions</h2>
                    </div>
                    <Accordion
                      type="single"
                      collapsible
                      value={activeAccordion}
                      onValueChange={handleAccordionChange}
                      className="space-y-4"
                    >
                      {otherQuestions.map((item, index) => (
                        <AccordionItem
                          key={index}
                          value={`other-${index}`}
                          id={`other-${index}`}
                          className="border border-gray-200 rounded-lg overflow-hidden"
                        >
                          <AccordionTrigger className="px-6 py-4 hover:bg-gray-50 hover:no-underline">
                            <div className="flex justify-between w-full">
                              <span className="text-left font-medium text-[#1A1F2C]">
                                {item.question}
                              </span>
                              {index === 0 && (
                                <Badge 
                                  className="ml-2 bg-gray-600 text-white flex items-center gap-1"
                                >
                                  <Clock className="h-3 w-3" />
                                  Takes 2 mins
                                </Badge>
                              )}
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="px-6 py-4 bg-gray-50 text-gray-700">
                            {item.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </TabsContent>
                </Tabs>
                
                {/* CTA Section */}
                <div className="mt-12 bg-gradient-to-r from-[#1A1F2C] to-[#2a3142] p-8 rounded-lg text-white">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">Still Have Questions?</h3>
                      <p className="text-gray-300">
                        Book a consultation with one of our expert engineers to discuss your project.
                      </p>
                    </div>
                    <BookingDialog>
                      <Button size="lg" className="bg-[#ea384c] hover:bg-[#d02e40] whitespace-nowrap">
                        Book Engineer
                      </Button>
                    </BookingDialog>
                  </div>
                </div>
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

export default FAQPage;
