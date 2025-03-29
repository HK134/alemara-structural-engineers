
import React from 'react';
import { Helmet } from "react-helmet";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AccreditationSection from '@/components/AccreditationSection';
import TeamMember from '@/components/about/TeamMember';
import ServiceCTA from '@/components/services/ServiceCTA';
import { Building, Users, Award, Target, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Hayder",
      role: "Practice Manager",
      image: "/lovable-uploads/1ab701e8-4ba8-4e1c-9d1d-1ca2c9cd967b.png",
      bio: "With over 15 years in structural engineering management, Hayder oversees our practice operations, ensuring clients receive exceptional service and technical excellence."
    },
    {
      name: "Matheos",
      role: "Chartered Structural Engineer",
      image: "/lovable-uploads/fdcd7944-f4b5-4001-89a1-17adf6b188df.png",
      bio: "Matheos specializes in complex residential renovations and extensions, bringing creative structural solutions that balance design ambition with technical feasibility."
    },
    {
      name: "Dr. Hassan",
      role: "Principal Civil Engineer",
      image: "/lovable-uploads/357c7682-51ff-4501-9504-dfa32e250d61.png",
      bio: "With a PhD in Civil Engineering and extensive research background, Dr. Hassan leads our infrastructure projects and provides expert consultation on challenging technical problems."
    },
    {
      name: "Neil",
      role: "Chartered Structural Engineer",
      image: "/lovable-uploads/0fa16540-97de-43ea-8d62-de381379aaab.png",
      bio: "Neil's expertise in commercial structures and historic building renovations has contributed to some of London's most challenging conservation projects."
    },
    {
      name: "Zoë",
      role: "Operations Manager",
      image: "/lovable-uploads/366ed2ae-8d3f-4bd9-a291-75d5a6d2f1ad.png",
      bio: "Zoë ensures our day-to-day operations run seamlessly, coordinating between teams and clients to deliver projects efficiently and on schedule."
    },
    {
      name: "Mitch",
      role: "Construction Manager",
      image: "/lovable-uploads/a8a0964f-22e7-423b-bf2c-8222396bd389.png",
      bio: "With hands-on construction experience, Mitch bridges the gap between engineering designs and practical implementation, ensuring buildability for all our projects."
    },
    {
      name: "Jaya",
      role: "Senior Structural Engineer",
      image: "/lovable-uploads/7d10d14f-4a3b-4c6f-ad5a-561f899b4bea.png",
      bio: "Jaya specializes in steel and concrete design, bringing extensive experience in multi-story residential and commercial developments across London."
    },
    {
      name: "Hassanien",
      role: "Project Manager",
      image: "/lovable-uploads/9abf20b7-377a-4626-8214-45f423afa5b4.png",
      bio: "Hassanien's meticulous approach to project planning ensures our engineering projects are delivered on time and within budget while maintaining rigorous quality standards."
    },
    {
      name: "Nasrin",
      role: "Senior Structural Engineer",
      image: "",
      bio: "Nasrin's specialized knowledge in seismic design and dynamic analysis has been instrumental in our work on sensitive structures and high-rise buildings."
    },
    {
      name: "Mirsad",
      role: "Senior Structural Engineer",
      image: "",
      bio: "With over 20 years of experience, Mirsad's expertise in foundation engineering and soil-structure interaction has been invaluable for our complex urban projects."
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Structural Engineering Solutions | Alemara</title>
        <meta name="description" content="Discover Alemara's team of expert structural engineers providing innovative, reliable engineering solutions for London's residential and commercial projects." />
        <meta name="keywords" content="structural engineers London, civil engineering consultancy, building structural assessment, Alemara engineering team" />
        <link rel="canonical" href="https://yourwebsite.com/about-structural-engineering-solutions" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "EngineeringFirm",
            "name": "Alemara Structural Engineers",
            "url": "https://yourwebsite.com",
            "logo": "https://yourwebsite.com/logo.png",
            "description": "Expert structural and civil engineering consultancy serving London and the UK.",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "London",
              "addressRegion": "London",
              "addressCountry": "UK"
            }
          })}
        </script>
      </Helmet>
      
      <Navbar />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[500px] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src="/lovable-uploads/b3d340a2-9f40-4ed6-8a83-02818fda1543.png" 
              alt="Alemara Engineering Office" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#1A1F2C]/70"></div>
          </div>
          
          <div className="container mx-auto px-4 h-full relative z-10 flex flex-col justify-center text-white">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
                Innovative Structural Engineering Solutions for Modern Projects
              </h1>
              <p className="text-xl mb-8 max-w-2xl">
                Expert engineering that turns architectural visions into safe, functional and compliant realities.
              </p>
            </div>
          </div>
        </section>
        
        {/* Introduction & Mission */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center mb-4">
                <Building className="h-6 w-6 text-[#ea384c] mr-3" />
                <h2 className="text-3xl font-bold text-[#1A1F2C]">Who We Are</h2>
              </div>
              
              <div className="prose prose-lg max-w-none">
                <p>
                  Established with a vision to bridge creative architecture with practical engineering, Alemara Structural Engineers has grown to become one of London's most respected structural engineering consultancies. Our team of chartered engineers brings decades of combined expertise to every project we undertake, from residential extensions to large-scale commercial developments.
                </p>
                
                <p>
                  Our approach is defined by three core principles: technical excellence, innovative thinking, and client partnership. We believe that structural engineering is not just about calculations and compliance—it's about enabling great design while ensuring safety, longevity, and value.
                </p>
                
                <p>
                  Based in central London, our practice serves clients across Greater London and the Southeast, with a strong reputation for delivering both technically sophisticated and beautifully realized projects.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Workspace - Image Gallery */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1A1F2C]">Our Workspace</h2>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Our modern offices provide the perfect environment for innovation and collaboration, enabling our team to deliver exceptional engineering solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              <div className="rounded-lg overflow-hidden shadow-md h-64">
                <img 
                  src="/lovable-uploads/8aab59c0-c673-4311-9ec9-a9a8c5e24bfa.png" 
                  alt="Alemara Office Interior" 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md h-64">
                <img 
                  src="/lovable-uploads/cd403569-d073-445b-a33e-06c990b9b4c9.png" 
                  alt="Alemara Engineering Studio" 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md h-64">
                <img 
                  src="/lovable-uploads/1538283d-b9c2-4605-b325-82f813edfcba.png" 
                  alt="Alemara Meeting Room" 
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Get To Know Us - Creative Asymmetric Section */}
        <section className="py-20 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              {/* Left Content */}
              <div className="w-full lg:w-1/2">
                <h2 className="text-4xl lg:text-5xl font-bold text-[#1A1F2C] mb-6">Get to know us</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Alemara is a team of former engineers from leading structural and civil engineering firms, bringing years of top-tier industry experience to every project.
                  </p>
                  <p>
                    For over ten years, we have been driven by a vision to offer exceptional structural design services at competitive prices.
                  </p>
                  <p>
                    Over time, we expanded to provide a one-stop service, covering everything from initial design to fabrication and installation.
                  </p>
                  <p>
                    Our commitment to excellence and comprehensive solutions ensures that our clients receive the highest quality outcomes for their residential, commercial, and infrastructure projects.
                  </p>
                </div>
              </div>
              
              {/* Right Image - Circular Crop */}
              <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-[#ea384c]/20 shadow-xl transform lg:-translate-y-6">
                  <img 
                    src="/lovable-uploads/9ae2a80a-0d46-4983-95d1-acc383d040ac.png"
                    alt="Historical Engineering in London" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
          
        {/* Stats Bar */}
        <section className="bg-[#1A1F2C] text-white py-10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center p-6 border-b md:border-b-0 md:border-r border-white/20">
                <div className="text-5xl font-bold mb-2">1000+</div>
                <div className="text-xl">Successful Projects</div>
              </div>
              <div className="text-center p-6 border-b md:border-b-0 md:border-r border-white/20">
                <div className="text-5xl font-bold mb-2">10</div>
                <div className="text-xl">Years of Experience</div>
              </div>
              <div className="text-center p-6">
                <div className="text-5xl font-bold mb-2">100%</div>
                <div className="text-xl">Building Control Approval</div>
              </div>
            </div>
          </div>
        </section>
          
        {/* Our Mission and Vision - Alternating Layout */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            {/* Mission Section */}
            <div className="flex flex-col lg:flex-row items-center gap-10 mb-24">
              {/* Left Image - Asymmetric Shape */}
              <div className="w-full lg:w-1/2 relative">
                <div className="aspect-[4/3] rounded-tr-[100px] rounded-bl-[100px] overflow-hidden shadow-xl">
                  <img 
                    src="/lovable-uploads/cd403569-d073-445b-a33e-06c990b9b4c9.png"
                    alt="Alemara Engineering Workspace" 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative Element */}
                <div className="absolute -bottom-5 -left-5 w-20 h-20 rounded-full bg-[#ea384c]/20 -z-10"></div>
              </div>
              
              {/* Right Content */}
              <div className="w-full lg:w-1/2">
                <h2 className="text-3xl font-bold text-[#1A1F2C] mb-4">Our mission</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Our mission is to simplify structural engineering process for our clients with complete, sustainable solutions from design to installation. 
                  </p>
                  <p>
                    By leveraging innovative technology, we streamline processes, reduce complexities, and deliver efficient, high-quality results that prioritize client satisfaction.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Vision Section - Reversed Layout */}
            <div className="flex flex-col-reverse lg:flex-row items-center gap-10">
              {/* Left Content */}
              <div className="w-full lg:w-1/2">
                <h2 className="text-3xl font-bold text-[#1A1F2C] mb-4">Our vision</h2>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Our vision is to redefine structural engineering through innovation, sustainability, and a client-first approach. We aim to be the trusted partner for end-to-end engineering solutions that drive efficiency and excellence.
                  </p>
                  <p>
                    With continuous growth and dedication, we strive to surpass current standards and set new ones, shaping a future where engineering is smarter, greener, and more accessible.
                  </p>
                </div>
              </div>
              
              {/* Right Image - Unique Shape */}
              <div className="w-full lg:w-1/2 relative flex justify-end">
                <div className="aspect-[4/3] rounded-tl-[100px] rounded-br-[100px] overflow-hidden shadow-xl">
                  <img 
                    src="/lovable-uploads/8aab59c0-c673-4311-9ec9-a9a8c5e24bfa.png"
                    alt="Alemara Office Design" 
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative Element */}
                <div className="absolute -top-5 -right-5 w-20 h-20 rounded-full bg-[#ea384c]/20 -z-10"></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Expertise & Value Proposition */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center mb-4">
                <Award className="h-6 w-6 text-[#ea384c] mr-3" />
                <h2 className="text-3xl font-bold text-[#1A1F2C]">Our Expertise</h2>
              </div>
              
              <div className="prose prose-lg max-w-none mb-10">
                <p>
                  With over 50 years of combined experience, our team has developed specialized knowledge across all aspects of structural engineering, allowing us to tackle even the most challenging projects with confidence.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                  <h3 className="text-xl font-semibold text-[#1A1F2C] mb-4">Technical Excellence</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#ea384c]/10 flex items-center justify-center mt-0.5 mr-3">
                        <svg className="h-4 w-4 text-[#ea384c]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Advanced structural analysis and modeling</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#ea384c]/10 flex items-center justify-center mt-0.5 mr-3">
                        <svg className="h-4 w-4 text-[#ea384c]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Deep understanding of London's unique building stock</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#ea384c]/10 flex items-center justify-center mt-0.5 mr-3">
                        <svg className="h-4 w-4 text-[#ea384c]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Specialist knowledge in period property modifications</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                  <h3 className="text-xl font-semibold text-[#1A1F2C] mb-4">Client-Focused Approach</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#ea384c]/10 flex items-center justify-center mt-0.5 mr-3">
                        <svg className="h-4 w-4 text-[#ea384c]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Responsive communication with 4-hour response time</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#ea384c]/10 flex items-center justify-center mt-0.5 mr-3">
                        <svg className="h-4 w-4 text-[#ea384c]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Transparent fee structures with no hidden costs</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#ea384c]/10 flex items-center justify-center mt-0.5 mr-3">
                        <svg className="h-4 w-4 text-[#ea384c]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span>Project scheduling within the same week of consultation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Meet the Team */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-6">
              <div className="flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-[#ea384c] mr-3" />
                <h2 className="text-3xl font-bold text-[#1A1F2C]">Meet Our Team</h2>
              </div>
              <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                Our diverse team of qualified professionals brings together decades of expertise in structural and civil engineering.
              </p>
              <div className="text-center mt-5 mb-8">
                <p className="text-lg font-medium text-[#1A1F2C]">Small enough to make your home project feel personal</p>
                <p className="text-lg font-medium text-[#1A1F2C] mt-1">Skilled enough to take on sensitive mega projects</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <TeamMember 
                  key={index}
                  name={member.name}
                  role={member.role}
                  image={member.image}
                  bio={member.bio}
                />
              ))}
            </div>
          </div>
        </section>
        
        {/* Accreditations Section */}
        <AccreditationSection />
        
        {/* Call to Action */}
        <section className="py-20 bg-[#1A1F2C] text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <Target className="h-6 w-6 text-[#ea384c] mr-3" />
                <h2 className="text-3xl font-bold">Ready to Work with Us?</h2>
              </div>
              <p className="text-xl mb-10">
                Discover how Alemara's structural engineering expertise can bring your project to life with technical excellence and innovative solutions.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Link to="/#contact">
                  <Button size="lg" className="bg-[#ea384c] hover:bg-[#ea384c]/80 flex items-center gap-2">
                    Book a Consultation <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Explore Our Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default AboutUs;
