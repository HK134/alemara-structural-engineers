
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Info, FileText, LayoutPlan, HelpCircle, ArrowRight } from "lucide-react";

const faqCategories = {
  general: [
    {
      question: "How do I know I need a Structural Engineer?",
      answer: "You need a structural engineer if you're planning any modifications to your property's structure, such as removing walls, extending your home, converting a loft, or noticing structural issues like cracks or sagging floors. Our engineers can assess your property and provide professional advice on the structural implications of your plans."
    },
    {
      question: "How much do you cost?",
      answer: "Our fees depend on the specific requirements of your project. Residential structural designs typically range from £500-£1,500, while commercial projects are quoted based on complexity and scope. We provide transparent, no-obligation quotes for all our services, with detailed breakdowns of all costs involved."
    },
    {
      question: "What is the process when I engage you?",
      answer: "When you engage our services, we begin with an initial consultation to understand your project needs. This is followed by a site visit (if necessary), after which we provide a detailed proposal outlining scope, timeline, and costs. Once agreed, we proceed with the structural design or survey, maintaining clear communication throughout. Finally, we deliver professionally prepared reports or drawings that meet all regulatory requirements."
    },
    {
      question: "Are your engineers chartered and accredited?",
      answer: "Yes, all our structural engineers are fully qualified Chartered Members of the Institution of Structural Engineers (MIStructE) or the Institution of Civil Engineers (MICE). Our firm holds professional indemnity insurance and follows strict quality control procedures to ensure all work meets industry standards."
    },
    {
      question: "What is your turnaround time?",
      answer: "Our standard turnaround time for residential structural designs is 1-2 weeks, with more complex projects taking 3-4 weeks. We also offer expedited services for time-sensitive projects at an additional fee. During busier periods, we always communicate realistic timeframes upfront."
    },
    {
      question: "What happens during a site visit?",
      answer: "During a site visit, our engineer will examine the relevant structural elements of your property, take necessary measurements, and assess the condition of existing structures. They will discuss your requirements on-site, identify potential challenges, and gather all information needed for preparing accurate designs or reports. Site visits typically take 1-2 hours depending on the property size and project complexity."
    }
  ],
  buildingControl: [
    {
      question: "Do you handle building regulations approval?",
      answer: "Yes, our designs are prepared with full consideration of current building regulations. We have a 100% approval rate with building control authorities across all London boroughs. We can liaise directly with building control officers on your behalf to ensure smooth approval of your project."
    },
    {
      question: "What information do building control need?",
      answer: "Building control typically requires detailed structural calculations, specifications of materials to be used, foundation designs, and comprehensive drawings showing all structural elements. We prepare complete documentation packages that satisfy all building control requirements, minimizing delays in the approval process."
    },
    {
      question: "How long does building control approval take?",
      answer: "Building control approval typically takes 5-8 weeks from submission, although this can vary depending on the local authority and the complexity of your project. We prepare thorough applications to avoid unnecessary delays and can offer expedited services for urgent projects."
    },
    {
      question: "Do you provide structural calculations for building control?",
      answer: "Yes, we provide comprehensive structural calculations as a standard part of our design service. These calculations demonstrate compliance with current building regulations and are essential for building control approval. Our calculations are presented in a clear format that building control officers can easily review and approve."
    },
    {
      question: "Will you help with building control site inspections?",
      answer: "Yes, we can attend key building control inspections to address any structural concerns that may arise during construction. This service ensures that the implementation of our designs meets both our specifications and building control requirements."
    },
    {
      question: "What happens if building control requests changes?",
      answer: "If building control requests changes to our designs, we address these promptly at no additional cost as part of our service commitment. We maintain good working relationships with building control departments across London, which helps minimize change requests in the first place."
    }
  ],
  planning: [
    {
      question: "Do you assist with planning applications?",
      answer: "While we don't submit planning applications directly, our structural designs and specifications are prepared to the standards required for planning submission. We work closely with architects and planning consultants to ensure our structural input supports successful planning applications."
    },
    {
      question: "Can you work with planning conditions?",
      answer: "Yes, we regularly help clients meet structural-related planning conditions. Our detailed designs and specifications can satisfy conditions relating to structural integrity, foundation design, and other technical requirements that planning authorities may impose."
    },
    {
      question: "Do I need planning permission for internal structural work?",
      answer: "Internal structural alterations typically don't require planning permission, but they do need building regulations approval. However, if your property is listed or in a conservation area, additional permissions may be required. We can advise on the specific requirements for your project during our initial consultation."
    },
    {
      question: "How can your designs support my planning application?",
      answer: "Our precise structural designs can strengthen planning applications by demonstrating the technical feasibility of your project. For complex or sensitive sites, we can provide structural justifications that help planning officers understand how structural challenges will be addressed safely and appropriately."
    },
    {
      question: "Can you help with retrospective planning for structural work?",
      answer: "Yes, we can assist with retrospective applications for structural work that has been completed without necessary approvals. We can assess existing structures, provide professional reports, and recommend any remedial work needed to meet current standards and secure retrospective approvals."
    },
    {
      question: "Do you provide structural statements for planning?",
      answer: "Yes, we can prepare structural statements or reports specifically for planning purposes. These documents explain the structural approach in non-technical language, address potential concerns about structural impact, and demonstrate the feasibility of your proposed development."
    }
  ],
  other: [
    {
      question: "What makes Alemara different from other structural engineering firms?",
      answer: "With 10 years of experience specializing in London properties, we understand the unique challenges of the capital's diverse building stock. We're known for our jargon-free approach to engineering, ensuring clients fully understand our designs and recommendations. Our strong relationships with local councils and 100% building control approval rate demonstrate our technical expertise and local knowledge."
    },
    {
      question: "Can you work with my architect or contractor?",
      answer: "Absolutely. We regularly collaborate with architects, contractors, and other construction professionals. Our team integrates seamlessly into existing project teams, providing the structural expertise needed while communicating effectively with all stakeholders. We're happy to join projects at any stage, from initial concept to construction."
    },
    {
      question: "Do you offer site inspections during construction?",
      answer: "Yes, we provide site inspection services during key construction phases to ensure work is being carried out in accordance with our designs. These inspections can be scheduled at critical stages of your project to verify structural elements before they're covered up or enclosed."
    },
    {
      question: "What areas of London do you cover?",
      answer: "We provide structural engineering services across all London boroughs, from central locations to outer zones. Our engineers have extensive experience with London's varied building types, from historic Georgian townhouses to modern developments."
    },
    {
      question: "Do you provide structural warranties?",
      answer: "Our professional designs come with the assurance of our professional indemnity insurance. While we don't offer structural warranties in the traditional sense, our calculations and designs are prepared to the highest professional standards, giving you confidence in the structural integrity of your project."
    },
    {
      question: "How quickly can you start work on my project?",
      answer: "For most projects, we can begin work within 3-5 working days of receiving your confirmation. During particularly busy periods, this may extend to 7-10 days, but we always aim to accommodate urgent projects where possible."
    },
    {
      question: "What information do you need to provide a quote?",
      answer: "To provide an accurate quote, we typically need a brief description of your project, property location, any existing architectural drawings (if available), and your project timeline. For more complex projects, a brief site visit may be necessary before finalizing costs. We provide transparent, no-obligation quotes for all our services."
    },
    {
      question: "Do you offer remote consultations?",
      answer: "Yes, we offer remote consultations via video call for initial discussions and for projects where physical site visits aren't immediately necessary. This service is particularly useful for preliminary advice or for clients based outside London."
    },
    {
      question: "Are your structural designs insurance-approved?",
      answer: "Yes, our structural designs and calculations meet the requirements of building insurance providers. We can provide additional documentation if required by your insurance company for particular projects or structural modifications."
    },
    {
      question: "How do you handle revisions to structural designs?",
      answer: "Minor revisions are included in our service as standard. For significant changes to the project scope or design after work has commenced, additional fees may apply. We always discuss any potential extra costs with you before proceeding with major revisions."
    }
  ]
};

const FAQ = () => {
  const [activeTab, setActiveTab] = useState("general");
  
  return (
    <section id="faq" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F2C] mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Find answers to common questions about our structural engineering services
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mt-10">
          {/* Quick Links Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h3 className="flex items-center text-xl font-bold text-[#1A1F2C] mb-6">
                <ArrowRight className="h-5 w-5 text-[#ea384c] mr-2" />
                Quick Links
              </h3>
              
              <ul className="space-y-4">
                {faqCategories.general.map((item, index) => (
                  <li key={`quick-link-${index}`}>
                    <a 
                      href={`#faq-${index}`}
                      className="flex items-center text-gray-700 hover:text-[#ea384c] transition-colors group"
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveTab("general");
                        setTimeout(() => {
                          document.getElementById(`faq-general-${index}`)?.scrollIntoView({ behavior: 'smooth' });
                        }, 100);
                      }}
                    >
                      <ArrowRight className="h-4 w-4 text-[#ea384c] mr-2 transform group-hover:translate-x-1 transition-transform" />
                      {item.question}
                    </a>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 bg-red-50 rounded-lg p-6">
                <h3 className="flex items-center text-xl font-bold text-[#1A1F2C] mb-4">
                  <HelpCircle className="h-5 w-5 text-[#ea384c] mr-2" />
                  Need More Help?
                </h3>
                <p className="text-gray-700">
                  Can't find what you're looking for? Contact our team directly.
                </p>
                <a 
                  href="#contact" 
                  className="mt-4 inline-block text-[#ea384c] font-medium hover:underline"
                >
                  Get in touch →
                </a>
              </div>
            </div>
          </div>
          
          {/* FAQ Content */}
          <div className="lg:col-span-3">
            <Tabs defaultValue="general" value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-8">
                <TabsTrigger value="general" className="flex items-center gap-2">
                  <Info className="h-4 w-4" />
                  <span>General Questions</span>
                  <span className="ml-1 bg-red-100 text-red-800 text-xs px-2 py-0.5 rounded-full">{faqCategories.general.length}</span>
                </TabsTrigger>
                <TabsTrigger value="buildingControl" className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  <span>Building Control</span>
                  <span className="ml-1 bg-gray-100 text-gray-800 text-xs px-2 py-0.5 rounded-full">{faqCategories.buildingControl.length}</span>
                </TabsTrigger>
                <TabsTrigger value="planning" className="flex items-center gap-2">
                  <LayoutPlan className="h-4 w-4" />
                  <span>Planning</span>
                  <span className="ml-1 bg-gray-100 text-gray-800 text-xs px-2 py-0.5 rounded-full">{faqCategories.planning.length}</span>
                </TabsTrigger>
                <TabsTrigger value="other" className="flex items-center gap-2">
                  <HelpCircle className="h-4 w-4" />
                  <span>Other Questions</span>
                  <span className="ml-1 bg-gray-100 text-gray-800 text-xs px-2 py-0.5 rounded-full">{faqCategories.other.length}</span>
                </TabsTrigger>
              </TabsList>
              
              {Object.entries(faqCategories).map(([category, items]) => (
                <TabsContent key={category} value={category} className="mt-0">
                  <div className="bg-white rounded-lg shadow-sm border p-1">
                    <div className="flex items-center p-4 mb-2">
                      {category === "general" && <Info className="h-5 w-5 text-[#ea384c] mr-2" />}
                      {category === "buildingControl" && <FileText className="h-5 w-5 text-[#ea384c] mr-2" />}
                      {category === "planning" && <LayoutPlan className="h-5 w-5 text-[#ea384c] mr-2" />}
                      {category === "other" && <HelpCircle className="h-5 w-5 text-[#ea384c] mr-2" />}
                      <h3 className="text-2xl font-bold text-[#1A1F2C]">
                        {category === "general" && "General Questions"}
                        {category === "buildingControl" && "Building Control"}
                        {category === "planning" && "Planning"}
                        {category === "other" && "Other Questions"}
                      </h3>
                    </div>
                    
                    <Accordion type="single" collapsible className="w-full">
                      {items.map((item, index) => (
                        <AccordionItem 
                          key={`faq-${category}-${index}`} 
                          value={`item-${index}`}
                          id={`faq-${category}-${index}`}
                          className="border-b last:border-0 px-4"
                        >
                          <AccordionTrigger className="text-left text-lg font-medium text-[#1A1F2C] hover:text-[#ea384c] py-6">
                            {item.question}
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-700 pb-6">
                            {item.answer}
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
