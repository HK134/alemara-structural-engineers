import React from 'react';
import { Helmet } from "react-helmet";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AccreditationSection from '@/components/AccreditationSection';
import TeamMember from '@/components/about/TeamMember';
import ServiceCTA from '@/components/services/ServiceCTA';
import { Building, Users, Award, Target, ArrowRight, Shield, Clock, CheckCircle, Medal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';
const teamMembers = [{
  name: "Hassanien",
  role: "Practice Manager",
  image: "/lovable-uploads/9abf20b7-377a-4626-8214-45f423afa5b4.png",
  bio: "Hassanien's meticulous approach to practice management ensures our engineering projects are delivered on time and within budget while maintaining rigorous quality standards.",
  email: "hassanien@alemara.co.uk"
}, {
  name: "Matheos",
  role: "Chartered Structural Engineer",
  image: "/lovable-uploads/matheos-profile.png",
  bio: "Matheos specializes in complex residential renovations and extensions, bringing creative structural solutions that balance design ambition with technical feasibility.",
  email: "matheos@alemara.co.uk"
}, {
  name: "Dr. Hassan",
  role: "Principal Civil Engineer",
  image: "/lovable-uploads/357c7682-51ff-4501-9504-dfa32e250d61.png",
  bio: "With a PhD in Civil Engineering and extensive research background, Dr. Hassan leads our infrastructure projects and provides expert consultation on challenging technical problems.",
  email: "hassan@alemara.co.uk"
}, {
  name: "Neil",
  role: "Chartered Structural Engineer",
  image: "/lovable-uploads/neil-profile.png",
  bio: "Neil's expertise in commercial structures and historic building renovations has contributed to some of London's most challenging conservation projects.",
  email: "neil@alemara.co.uk"
}, /* {
  name: "Mitch",
  role: "Construction Manager",
  image: "/lovable-uploads/a8a0964f-22e7-423b-bf2c-8222396bd389.png",
  bio: "With hands-on construction experience, Mitch bridges the gap between engineering designs and practical implementation, ensuring buildability for all our projects.",
  email: "mitch@alemara.co.uk"
}, */ {
  name: "Jaya",
  role: "Structural Engineer",
  image: "/lovable-uploads/jaya-profile.png",
  bio: "Jaya specializes in steel and concrete design, bringing extensive experience in multi-story residential and commercial developments across London.",
  email: "jaya@alemara.co.uk"
}, {
  name: "Nas",
  role: "Senior Structural Engineer",
  image: "",
  bio: "Nas specializes in diagnosing structural cracks and subsidence issues, providing expert assessments and remedial solutions for compromised structures.",
  email: "nas@alemara.co.uk"
}, {
  name: "Mirsad",
  role: "Senior Structural Engineer",
  image: "",
  bio: "Mirsad's expertise lies in residential transformations, particularly loft conversions and property remodeling projects requiring creative structural interventions.",
  email: "mirsad@alemara.co.uk"
}, {
  name: "Sam",
  role: "Senior Structural Engineer",
  image: "",
  bio: "Sam is our basement specialist, with particular expertise in complex underpinning projects and creating new subterranean living spaces in London's challenging ground conditions.",
  email: "sam@alemara.co.uk"
}, {
  name: "Ahmed",
  role: "Senior Structural Engineer",
  image: "",
  bio: "Ahmed focuses on residential structural projects, specializing in optimizing designs for extensions and internal reconfigurations to maximize living space.",
  email: "ahmed@alemara.co.uk"
}, {
  name: "Johnny",
  role: "Structural Engineer",
  image: "/lovable-uploads/johnny-profile.png",
  bio: "Johnny brings a passion for combining traditional structural engineering with cutting-edge technology, developing innovative solutions that bridge the gap between classic engineering principles and modern digital tools.",
  email: "johnny@alemara.co.uk",
  imageScale: 130
}, {
  name: "Kirsti",
  role: "Operations Manager",
  image: "/lovable-uploads/kirsti-operations-manager.png",
  bio: "With a background in corporate psychology, Kirsti brings a unique understanding of team dynamics and organizational behavior to our operations, ensuring seamless project coordination while fostering a positive work environment.",
  email: "kirsti@alemara.co.uk",
  imageScale: 130
}, {
  name: "Zoë", 
  role: "Partnerships Manager",
  image: "/lovable-uploads/366ed2ae-8d3f-4bd9-a291-75d5a6d2f1ad.png",
  bio: "Zoë drives our marketing initiatives and brand development, ensuring our engineering expertise reaches the right clients through strategic communication and relationship building.",
  email: "zoe@alemara.co.uk"
}, {
  name: "Sandhya",
  role: "Structural Engineer",
  image: "/lovable-uploads/sandhya-profile.png",
  bio: "Sandhya brings expertise in structural analysis and design, specializing in residential and commercial projects with a focus on sustainable and innovative engineering solutions.",
  email: "sandhya@alemara.co.uk"
}, {
  name: "Joshua",
  role: "Structural Engineer", 
  image: "/lovable-uploads/josh-profile.png",
  bio: "Josh brings a unique perspective to structural engineering, having worked hands-on in the construction trade before transitioning to design. His practical field experience allows him to create designs that are not only structurally sound but also highly buildable, bridging the gap between engineering theory and real-world construction challenges.",
  email: "joshua@alemara.co.uk",
  imageScale: 140
}, {
  name: "Hanoob",
  role: "Senior Structural & Façade Engineer",
  image: "/lovable-uploads/hanoob-profile.png",
  bio: "Hanoob is our specialist in facade and glass structural engineering, with over 5 years of focused experience in this highly specialized field. His expertise in designing transparent and curtain wall systems ensures both structural integrity and architectural excellence in modern building envelopes.",
  email: "hanoob@alemara.co.uk"
}];
const AboutUs = () => {
  return <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>About Structural Engineering Solutions | Alemara</title>
        <meta name="description" content="Discover Alemara's team of expert structural engineers providing innovative, reliable engineering solutions for London's residential and commercial projects." />
        <meta name="keywords" content="structural engineers London, civil engineering consultancy, building structural assessment, Alemara engineering team" />
        <link rel="canonical" href="https://alemara.co.uk/about-us" />
        <script type="application/ld+json">
          {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "EngineeringFirm",
          "name": "Alemara Structural Engineers",
          "url": "https://alemara.co.uk",
          "logo": "https://alemara.co.uk/lovable-uploads/a543004b-6dda-4449-b14e-4a9212b75d84.png",
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
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[500px] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src="/lovable-uploads/caa3f88b-b26d-43c1-910a-e50410f3d3d8.png" alt="Alemara Engineering Office" className="w-full h-full object-cover" />
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
          
        {/* Stats Bar - MODIFIED: reduced padding and font size */}
        <section className="bg-[#1A1F2C] text-white py-6">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              <div className="text-center p-4 border-b md:border-b-0 md:border-r border-white/20">
                <div className="text-4xl font-bold mb-1">1000+</div>
                <div className="text-lg">Successful Projects</div>
              </div>
              <div className="text-center p-4 border-b md:border-b-0 md:border-r border-white/20">
                <div className="text-4xl font-bold mb-1">10</div>
                <div className="text-lg">Years of Experience</div>
              </div>
              <div className="text-center p-4">
                <div className="text-4xl font-bold mb-1">100%</div>
                <div className="text-lg">Building Control Approval</div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Get To Know Us - With Key Conversion Points */}
        <section className="py-20 overflow-hidden bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-[#1A1F2C] mb-6 text-center">Get to know us</h2>
              
              <div className="space-y-4 text-gray-700 mb-10">
                <p className="text-lg">
                  Alemara is a team of former engineers from leading structural and civil engineering firms, bringing years of top-tier industry experience to every project.
                </p>
                <p className="text-lg">
                  For over ten years, we have been driven by a vision to offer exceptional structural design services at competitive prices.
                </p>
                <p className="text-lg">
                  Our commitment to excellence and comprehensive solutions ensures that our clients receive the highest quality outcomes for their residential, commercial, and infrastructure projects.
                </p>
              </div>
              
              {/* Key Conversion Points */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-[#ea384c]/10 rounded-full mr-4">
                      <Medal className="h-6 w-6 text-[#ea384c]" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#1A1F2C]">Members of IStructE &amp; ICE</h3>
                  </div>
                  <p className="text-gray-600">Our engineers are members of the Institution of Structural Engineers, the world's largest professional body dedicated to structural engineering.</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-[#ea384c]/10 rounded-full mr-4">
                      <Shield className="h-6 w-6 text-[#ea384c]" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#1A1F2C]">Professional Indemnity</h3>
                  </div>
                  <p className="text-gray-600">We carry comprehensive professional indemnity insurance coverage, giving our clients complete peace of mind.</p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-[#ea384c]/10 rounded-full mr-4">
                      <Clock className="h-6 w-6 text-[#ea384c]" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#1A1F2C]">Fast 48-Hour Turnaround</h3>
                  </div>
                  <p className="text-gray-600">
                    For urgent projects, we offer expedited 48-hour turnaround options to keep your project on schedule without compromising quality.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="p-2 bg-[#ea384c]/10 rounded-full mr-4">
                      <CheckCircle className="h-6 w-6 text-[#ea384c]" />
                    </div>
                    <h3 className="text-xl font-semibold text-[#1A1F2C]">100% Approval Rate</h3>
                  </div>
                  <p className="text-gray-600">
                    Our designs maintain a perfect 100% approval rate with local building control authorities across all London boroughs.
                  </p>
                </div>
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
                <img src="/lovable-uploads/8aab59c0-c673-4311-9ec9-a9a8c5e24bfa.png" alt="Alemara Office Interior" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md h-64">
                <img src="/lovable-uploads/cd403569-d073-445b-a33e-06c990b9b4c9.png" alt="Alemara Engineering Studio" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md h-64">
                <img src="/lovable-uploads/1538283d-b9c2-4605-b325-82f813edfcba.png" alt="Alemara Meeting Room" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </section>
        
        {/* Expertise & Value Proposition */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center mb-4">
                <Award className="h-6 w-6 text-[#ea384c] mr-3" />
                <h2 className="text-3xl font-bold text-[#1A1F2C]">Our Expertise</h2>
              </div>
              
              <div className="prose prose-lg max-w-none mb-10">
                <p>Our team has developed specialized knowledge across all aspects of structural engineering, allowing us to tackle even the most challenging projects with confidence.</p>
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
        <section className="py-20 bg-white">
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
              {teamMembers.map((member, index) => <TeamMember key={index} name={member.name} role={member.role} image={member.image} bio={member.bio} email={member.email} />)}
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
                  <Button size="lg" variant="outline" className="border-white text-white bg-slate-950 hover:bg-slate-800">
                    Explore Our Services
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>;
};
export default AboutUs;