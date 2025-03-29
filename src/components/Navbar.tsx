import React from 'react';
import { Calculator, Clock, Award, CreditCard, Building, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BookingDialog from './BookingDialog';
import { Button } from './ui/button';
import { ArrowRight, Phone } from 'lucide-react';

const questions = [
  {
    icon: <Calculator className="h-8 w-8 text-[#ea384c]/80" />,
    question: "How much will my structural project cost?",
    answer: "We evaluate and provide the most viable cost-effective solution tailored to suit your project and requirements. Every project is unique - contact us for a personalized quote."
  },
  {
    icon: <Clock className="h-8 w-8 text-[#ea384c]/80" />,
    question: "How long does a structural survey take to complete?",
    answer: "Most surveys take 1-3 hours on site, with reports delivered within 48 hours of inspection."
  },
  {
    icon: <Award className="h-8 w-8 text-[#ea384c]/80" />,
    question: "What qualifications do your engineers have?",
    answer: "All our engineers are chartered members of either IStructE or ICE with extensive experience in London properties. We maintain full professional indemnity insurance for your peace of mind."
  },
  {
    icon: <CreditCard className="h-8 w-8 text-[#ea384c]/80" />,
    question: "What happens after I receive my structural designs?",
    answer: "We provide comprehensive support throughout your project, including contractor liaison, site visits during construction, and assistance with building control submissions and approvals."
  },
  {
    icon: <Building className="h-8 w-8 text-[#ea384c]/80" />,
    question: "Can you work with complex or heritage buildings?",
    answer: "Yes, we specialize in both modern and historic London properties. Our team has extensive experience with listed buildings, conservation areas, and properties with unique structural challenges."
  },
  {
    icon: <Home className="h-8 w-8 text-[#ea384c]/80" />,
    question: "How soon can you start on my project?",
    answer: "We typically schedule new projects within the same week. For urgent matters, we offer expedited services with potential next-day appointments based on availability."
  }
];

const blogPosts = [
  {
    title: "5 Things to Consider Before Starting a Loft Conversion",
    excerpt: "Planning a loft conversion? Our structural engineers share the key considerations to ensure success.",
    date: "June 15, 2023",
    slug: "/blog/loft-conversion-considerations",
    image: "/lovable-uploads/bb746e6a-6105-42d2-81e9-1c0805d61938.png"
  },
  {
    title: "Understanding Building Regulations for House Extensions",
    excerpt: "Navigate the complexities of building regulations with our expert guide for homeowners.",
    date: "May 22, 2023",
    slug: "/blog/building-regulations-for-extensions",
    image: "/lovable-uploads/551ecc30-f655-4a5d-8c6a-775bbc45da9e.png"
  },
  {
    title: "Structural Issues in Period Properties: What to Look For",
    excerpt: "Own a period property? Learn to identify common structural issues before they become major problems.",
    date: "April 10, 2023",
    slug: "/blog/period-property-structural-issues",
    image: "/lovable-uploads/30f1d92e-b72a-4c9c-9edd-e07196399814.png"
  }
];

const CommonQuestions = () => {
  const navigate = useNavigate();
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F2C] mb-4">
            Common Questions About Our Structural Services
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Find quick answers to questions about our structural engineering expertise
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {questions.map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-start mb-3">
                <div className="bg-gray-100 p-3 rounded-md mr-4">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-[#1A1F2C] text-lg">{item.question}</h3>
              </div>
              <p className="text-gray-600 ml-16">{item.answer}</p>
            </div>
          ))}
        </div>
        
        {/* Blog Section */}
        <div className="my-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F2C] mb-4">
              Structural Engineering Insights
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Expert advice and knowledge from our engineering team
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <p className="text-sm text-[#ea384c] mb-2">{post.date}</p>
                  <h3 className="text-xl font-bold text-[#1A1F2C] mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Button 
                    variant="link" 
                    className="text-[#ea384c] p-0 hover:text-[#ea384c]/80"
                    onClick={() => navigate(post.slug)}
                  >
                    Read more <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button 
              variant="outline"
              className="border-[#ea384c] text-[#ea384c] hover:bg-[#ea384c] hover:text-white"
              onClick={() => navigate('/blog')}
            >
              View all articles
            </Button>
          </div>
        </div>
        
        <div className="bg-[#1A1F2C] rounded-lg p-8 md:p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 opacity-10 w-40 h-40 transform translate-x-10 -translate-y-10">
            <Phone className="w-full h-full text-white" />
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Still have questions? Let's talk.
              </h3>
              <p className="text-gray-300 mb-0 max-w-xl">
                Book a free 15-minute consultation with one of our structural engineers to discuss your project needs.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <BookingDialog>
                <Button size="lg" className="bg-[#ea384c] hover:bg-[#ea384c]/90 text-white">
                  <span className="flex items-center">
                    Book Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </span>
                </Button>
              </BookingDialog>
              
              <a href="tel:02080049060">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#1A1F2C]">
                  Call 020 8004 9060
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommonQuestions;
