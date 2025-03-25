
import React from 'react';
import { Clock, Ruler, Award, CreditCard, TrendingUp, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import BookingDialog from './BookingDialog';
import { Button } from './ui/button';
import { ArrowRight, Phone } from 'lucide-react';

const questions = [
  {
    icon: <Ruler className="h-8 w-8 text-[#ea384c]/80" />,
    question: "How much does a structural survey cost?",
    answer: "Our structural surveys start from £450 depending on property size and complexity. Contact us for a precise quote."
  },
  {
    icon: <Clock className="h-8 w-8 text-[#ea384c]/80" />,
    question: "How long does a survey take to complete?",
    answer: "Most surveys take 1-3 hours on site, with reports delivered within 48 hours of inspection."
  },
  {
    icon: <Award className="h-8 w-8 text-[#ea384c]/80" />,
    question: "Do I need planning permission for structural work?",
    answer: "Many internal structural alterations don't require planning permission but may need Building Regulations approval. We can advise on your specific case."
  },
  {
    icon: <CreditCard className="h-8 w-8 text-[#ea384c]/80" />,
    question: "What payment methods do you accept?",
    answer: "We accept bank transfers, credit/debit cards and can provide invoicing options for estate agents and solicitors."
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-[#ea384c]/80" />,
    question: "What value can a structural report add?",
    answer: "Our reports can help negotiate property prices, reassure mortgage lenders, and provide accurate repair costs for budgeting."
  },
  {
    icon: <Home className="h-8 w-8 text-[#ea384c]/80" />,
    question: "What types of properties do you survey?",
    answer: "We survey all residential properties across London, from Victorian terraces to modern apartments and commercial buildings."
  }
];

const CommonQuestions = () => {
  const navigate = useNavigate();
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F2C] mb-4">
            Common Questions About Structural Surveys
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Find quick answers to questions about our structural engineering services
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
