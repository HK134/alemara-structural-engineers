
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
  Search, 
  HelpCircle, 
  Clock, 
  Building, 
  CheckCircle, 
  FileText, 
  ShieldCheck,
  Book,
  Calendar, 
  Users, 
  MessageSquare, 
  Info,
  Phone,
  Briefcase,
  Star,
  HeartHandshake,
  ArrowRight
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqCategories = [
  { id: "general", label: "General Questions", icon: <HelpCircle className="h-5 w-5" /> },
  { id: "building", label: "Building Control", icon: <Building className="h-5 w-5" /> },
  { id: "planning", label: "Planning", icon: <FileText className="h-5 w-5" /> },
  { id: "other", label: "Other Questions", icon: <Info className="h-5 w-5" /> },
];

const faqItems = [
  {
    id: 1,
    question: "How do I know I need a Structural Engineer?",
    answer: "If you are planning structural changes such as extensions, loft conversions, or removing load-bearing walls, consulting a structural engineer is essential for safety and building control requirements. They ensure your project is structurally sound and complies with regulations.",
    category: "general",
  },
  {
    id: 2,
    question: "How much do you cost?",
    answer: "Our pricing varies by project size and scope. Contact us first, and we'll guide you through your project and provide a custom quote. We ensure transparent pricing and clear fees upfront, with no surprises in costs. Our rates are competitive as we operate with lower overhead than larger firms while maintaining the same level of expertise.",
    category: "general",
  },
  {
    id: 3,
    question: "What is the process when I engage you?",
    answer: "We begin with an initial consultation to understand your project requirements. This is followed by a comprehensive site visit where we assess the existing structure. We then develop a schematic design for your feedback before delivering a full structural package that meets building control approval requirements. Throughout this process, we maintain open communication to ensure your needs are met.",
    category: "general",
  },
  {
    id: 4,
    question: "Are your engineers chartered and accredited?",
    answer: "Yes, all our structural engineers are accredited by the Institution of Civil Engineers (ICE) and/or Institution of Structural Engineers (IStructE) UK institutions. They each have a minimum of 5 years of industry experience, ensuring that your project is in the hands of qualified professionals who understand the complexities of structural engineering.",
    category: "general",
  },
  {
    id: 5,
    question: "What is your turnaround time?",
    answer: "Typically, structural schematics are provided within 5 working days following the site visit, and the final structural package is delivered shortly thereafter, pending your feedback. For urgent projects, we offer expedited services when available. We pride ourselves on meeting deadlines while maintaining the highest quality standards.",
    category: "general",
  },
  {
    id: 6,
    question: "What happens during a site visit?",
    answer: "During a site visit, our engineers thoroughly assess the structure, take necessary measurements, examine existing conditions, and discuss project requirements with you. This comprehensive assessment allows us to develop a precise engineering plan tailored to your specific needs and the structural characteristics of your property.",
    category: "general",
  },
  {
    id: 7,
    question: "Why do I need building control approval for my project?",
    answer: "Building control approval ensures that your project complies with structural safety standards and regulations. It verifies that the work meets the necessary requirements for safety, energy efficiency, and accessibility, protecting both current and future occupants of the building.",
    category: "building",
  },
  {
    id: 8,
    question: "How do I know your team has experience with my council?",
    answer: "Our team has extensive experience working with various councils across London and the surrounding areas. We are well-versed in local building control requirements and have successfully completed projects complying with council regulations throughout the region.",
    category: "building",
  },
  {
    id: 9,
    question: "Do you handle building control submissions?",
    answer: "Yes, we can prepare all necessary documentation for building control submissions. The approval process typically takes 2-4 weeks after submission. Simple, well-prepared applications may be approved faster, while more complex cases or those requiring additional information may take longer. We ensure all documentation is thorough and complete to expedite the approval process.",
    category: "building",
  },
  {
    id: 10,
    question: "Can you assist with building control queries after submission?",
    answer: "Absolutely. We're always available to assist with any questions or clarifications building control might have, all free of charge. Our commitment extends beyond submission to ensure your project receives approval without complications.",
    category: "building",
  },
  {
    id: 11,
    question: "What documents do you provide for building control approval?",
    answer: "Our structural package includes detailed drawings, comprehensive calculation packages, and precise specifications. These documents provide building control with all the information they need to verify that your project meets structural safety requirements and building regulations.",
    category: "building",
  },
  {
    id: 12,
    question: "Do you ensure compliance with building regulations?",
    answer: "Yes, our designs are crafted to meet all building control approval requirements, and we have a 100% approval rate on all our projects. Our thorough understanding of building regulations ensures that your project will be compliant from the outset.",
    category: "building",
  },
  {
    id: 13,
    question: "What is the difference between planning permission and building control approval?",
    answer: "Planning permission focuses on the aesthetics and impact of your project on the surrounding area, including aspects like appearance, size, and use of the building. Building control approval ensures structural safety and compliance with technical standards. Most projects require both types of approval but for different aspects of the work.",
    category: "planning",
  },
  {
    id: 14,
    question: "Do I need planning permission for my project?",
    answer: "It depends on the nature and scale of your project. Some smaller works fall under permitted development rights and don't require planning permission. We can advise you on whether planning permission is necessary for your specific project based on its characteristics and local regulations.",
    category: "planning",
  },
  {
    id: 15,
    question: "Can you assist with both planning and building control?",
    answer: "We specialize in building control approval but can refer trusted partners for planning assistance. This ensures you receive expert guidance for all aspects of your project while we focus on delivering exceptional structural engineering services.",
    category: "planning",
  },
  {
    id: 16,
    question: "Do I always need planning permission for home extensions?",
    answer: "Not always. Many small-scale extensions fall under permitted development rights, which allow certain types of work without planning permission. However, larger extensions or those in conservation areas, listed buildings, or with specific restrictions usually require planning permission. We can help determine the requirements for your property.",
    category: "planning",
  },
  {
    id: 17,
    question: "How long does it take to get planning permission?",
    answer: "The process typically takes about 8 weeks for a decision after submitting your application, but it can vary depending on the complexity of the project and local authority workload. Some cases may take longer if additional information is requested or if there are objections to consider.",
    category: "planning",
  },
  {
    id: 18,
    question: "Can you work with my architect?",
    answer: "Yes, we frequently collaborate with architects and planning consultants by providing structural reports and calculations needed for planning applications. Our team is experienced in working as part of a larger project team, ensuring seamless integration of structural considerations into the overall design.",
    category: "planning",
  },
  {
    id: 19,
    question: "What happens if I have questions during construction?",
    answer: "We are always available to assist during the construction phase. Our team provides ongoing support for building control and contractor questions post-structural package submission to ensure your project proceeds smoothly and any issues are promptly addressed.",
    category: "other",
  },
  {
    id: 20,
    question: "Do you have an after care service?",
    answer: "Yes, we offer comprehensive aftercare services to ensure the success of your project beyond the initial phase. Our team is available to answer questions, provide guidance, and assist with any follow-up concerns. We support clients through final inspections, building control approvals, and any additional queries that may arise during construction or after project completion.",
    category: "other",
  },
  {
    id: 21,
    question: "Are you registered with an approved institution?",
    answer: "Yes, we are registered with the Institution of Structural Engineers (IStructE). All our engineers are accredited by either the ICE or IStructE and hold senior-level positions, ensuring expert and reliable service for every project.",
    category: "other",
  },
  {
    id: 22,
    question: "Do you know any contractors?",
    answer: "Yes, we have a network of trusted contractors and offer project management services alongside our installation and fabrication team on selected projects, ensuring a seamless transition from design to execution.",
    category: "other",
  },
  {
    id: 23,
    question: "Do you also do structural surveys?",
    answer: "Yes, we offer comprehensive structural surveys for residential, commercial, and industrial properties. Our surveys assess the condition of structural elements, identify potential issues, and provide expert recommendations to ensure safety and compliance with building regulations.",
    category: "other",
  },
  {
    id: 24,
    question: "Do you have insurance?",
    answer: "Yes, we have Professional Indemnity (PI) insurance up to £5 million and Public Liability (PL) insurance up to £5 million. This ensures full coverage and protection for all our projects and clients.",
    category: "other",
  },
  {
    id: 25,
    question: "What sets you apart from other engineering firms?",
    answer: "Our team brings years of industry experience, delivering quality engineering services with clear and affordable fees. Our rates are significantly reduced compared to the reputable firms our engineers previously worked for, ensuring you receive top expertise without the high costs. We also pride ourselves on jargon-free communication and exceptional customer service.",
    category: "other",
  },
  {
    id: 26,
    question: "What is construction assurance?",
    answer: "Construction assurance involves on-site inspections and quality checks to ensure the project aligns with approved designs and safety standards. It provides verification that the construction work is being carried out correctly and according to specifications, helping to prevent issues and ensure compliance.",
    category: "other",
  },
  {
    id: 27,
    question: "What's the best way to contact you?",
    answer: "The best way to reach us is by phone or email. If you call or send your drawings, we can provide a callback to discuss your project in detail. We aim to respond to all inquiries within 24 hours during business days.",
    category: "other",
  },
  {
    id: 28,
    question: "How do you ensure projects remain on schedule?",
    answer: "Through regular updates, proactive communication, and efficient handling of building control queries. We understand the importance of timelines in construction projects and take a proactive approach to anticipate and address potential delays before they impact your schedule.",
    category: "other",
  },
];

const FAQPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('general');
  
  // Filter FAQs based on search term and active category
  const filteredFAQs = faqItems.filter(item => {
    const matchesSearch = item.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         item.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    return matchesSearch && matchesCategory;
  });
  
  // Group FAQs by category for the sidebar counts
  const faqCountsByCategory = faqCategories.reduce((acc, category) => {
    acc[category.id] = faqItems.filter(item => item.category === category.id).length;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Frequently Asked Questions | Alemara Engineering</title>
        <meta 
          name="description" 
          content="Find answers to common questions about structural engineering services, building control, planning permissions, and more from Alemara Engineering." 
        />
      </Helmet>
      
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section with Search */}
        <section className="bg-gradient-to-r from-[#1A1F2C] to-[#2d3748] py-16 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
              <p className="text-xl mb-8">
                Find answers to common questions about our structural engineering services
              </p>
              
              <div className="relative max-w-xl mx-auto">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <Input 
                  type="search" 
                  placeholder="Search for answers..." 
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-300 focus-visible:ring-[#ea384c]"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Main Content with Categories */}
        <section className="py-12 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4">
            <Tabs 
              defaultValue="general" 
              className="max-w-5xl mx-auto"
              onValueChange={setActiveCategory}
            >
              <div className="flex justify-center mb-8">
                <TabsList className="bg-gray-100 p-1 rounded-full">
                  {faqCategories.map((category) => (
                    <TabsTrigger 
                      key={category.id} 
                      value={category.id}
                      className="rounded-full data-[state=active]:bg-[#ea384c] data-[state=active]:text-white px-6"
                    >
                      <div className="flex items-center gap-2">
                        {category.icon}
                        <span>{category.label}</span>
                        <Badge variant="outline" className="ml-1 bg-white/80">
                          {faqCountsByCategory[category.id]}
                        </Badge>
                      </div>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
              
              {/* Render content for each category */}
              {faqCategories.map((category) => (
                <TabsContent 
                  key={category.id} 
                  value={category.id} 
                  className="mt-6 focus-visible:outline-none focus-visible:ring-0"
                >
                  <div className="grid md:grid-cols-6 gap-8">
                    {/* Sidebar with quick links */}
                    <div className="md:col-span-2">
                      <div className="bg-white p-6 rounded-lg shadow-md sticky top-20">
                        <h3 className="text-lg font-semibold text-[#1A1F2C] mb-4 flex items-center">
                          <Book className="h-5 w-5 mr-2 text-[#ea384c]" />
                          Quick Links
                        </h3>
                        <ul className="space-y-2">
                          {filteredFAQs.map((item) => (
                            <li key={item.id}>
                              <a 
                                href={`#faq-${item.id}`} 
                                className="text-sm text-gray-700 hover:text-[#ea384c] flex items-center"
                              >
                                <ArrowRight className="h-3 w-3 mr-2 text-[#ea384c]" />
                                {item.question}
                              </a>
                            </li>
                          ))}
                        </ul>
                        
                        <div className="mt-8 p-4 bg-[#ea384c]/10 rounded-lg">
                          <h4 className="font-semibold text-[#1A1F2C] mb-2 flex items-center">
                            <HeartHandshake className="h-4 w-4 mr-2 text-[#ea384c]" />
                            Need More Help?
                          </h4>
                          <p className="text-sm text-gray-600 mb-3">
                            Can't find what you're looking for? Contact our team directly.
                          </p>
                          <Button 
                            variant="default" 
                            className="w-full bg-[#ea384c] hover:bg-[#d02e40] text-white"
                          >
                            <Phone className="h-4 w-4 mr-2" />
                            Contact Us
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    {/* Main FAQ accordion */}
                    <div className="md:col-span-4">
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-bold text-[#1A1F2C] mb-6 flex items-center">
                          {category.icon}
                          <span className="ml-2">{category.label}</span>
                        </h2>
                        
                        <Accordion type="single" collapsible className="w-full">
                          {filteredFAQs.length > 0 ? (
                            filteredFAQs.map((item) => (
                              <AccordionItem 
                                key={item.id} 
                                value={`item-${item.id}`}
                                className="border-b border-gray-200 last:border-b-0"
                                id={`faq-${item.id}`}
                              >
                                <AccordionTrigger className="text-left hover:text-[#ea384c] text-lg py-4">
                                  {item.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-700 pb-6">
                                  <div className="p-4 bg-gradient-to-r from-gray-50 to-white rounded-md border-l-4 border-[#ea384c]">
                                    {item.answer}
                                  </div>
                                </AccordionContent>
                              </AccordionItem>
                            ))
                          ) : (
                            <div className="text-center p-8 bg-gray-50 rounded-md">
                              <MessageSquare className="h-12 w-12 mx-auto text-gray-300 mb-4" />
                              <p className="text-lg text-gray-500 mb-2">No results found</p>
                              <p className="text-gray-400">
                                Try adjusting your search term or selecting a different category
                              </p>
                            </div>
                          )}
                        </Accordion>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="py-16 bg-[#1A1F2C] text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-10">Why Choose Our Structural Engineering Services?</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="flex justify-center mb-3">
                    <div className="bg-[#ea384c]/20 p-4 rounded-full">
                      <CheckCircle className="h-8 w-8 text-[#ea384c]" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold mb-1">100%</div>
                  <div className="text-sm text-gray-300">Building Control Approval Rate</div>
                </div>
                
                <div className="text-center">
                  <div className="flex justify-center mb-3">
                    <div className="bg-[#ea384c]/20 p-4 rounded-full">
                      <Calendar className="h-8 w-8 text-[#ea384c]" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold mb-1">10+</div>
                  <div className="text-sm text-gray-300">Years of Experience</div>
                </div>
                
                <div className="text-center">
                  <div className="flex justify-center mb-3">
                    <div className="bg-[#ea384c]/20 p-4 rounded-full">
                      <Users className="h-8 w-8 text-[#ea384c]" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold mb-1">500+</div>
                  <div className="text-sm text-gray-300">Happy Clients</div>
                </div>
                
                <div className="text-center">
                  <div className="flex justify-center mb-3">
                    <div className="bg-[#ea384c]/20 p-4 rounded-full">
                      <ShieldCheck className="h-8 w-8 text-[#ea384c]" />
                    </div>
                  </div>
                  <div className="text-3xl font-bold mb-1">£5M</div>
                  <div className="text-sm text-gray-300">Professional Indemnity Cover</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-[#e7f7ff] to-[#f8f9fa]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-[#1A1F2C] mb-4">Still Have Questions?</h2>
              <p className="text-lg text-gray-700 mb-8">
                Our team of expert structural engineers is ready to help you with any inquiries about your project
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-[#ea384c] hover:bg-[#d02e40] text-white">
                  Contact Us Today
                </Button>
                <Button size="lg" variant="outline" className="border-[#1A1F2C] text-[#1A1F2C]">
                  <Phone className="mr-2 h-4 w-4" />
                  020 8004 9060
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default FAQPage;
