
import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-survey-primary text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">London Structural Surveys</h3>
            <p className="text-gray-300 mb-4">
              Professional structural surveys across Greater London. 
              RICS accredited experts with deep knowledge of London properties.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-survey-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-survey-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-survey-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-survey-accent transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-survey-accent transition-colors">Full Structural Surveys</a></li>
              <li><a href="#" className="text-gray-300 hover:text-survey-accent transition-colors">Pre-Purchase Surveys</a></li>
              <li><a href="#" className="text-gray-300 hover:text-survey-accent transition-colors">Building Reports</a></li>
              <li><a href="#" className="text-gray-300 hover:text-survey-accent transition-colors">Defect Analysis</a></li>
              <li><a href="#" className="text-gray-300 hover:text-survey-accent transition-colors">Party Wall Surveys</a></li>
              <li><a href="#" className="text-gray-300 hover:text-survey-accent transition-colors">Renovation Consultation</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Areas We Cover</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-survey-accent transition-colors">Central London</a></li>
              <li><a href="#" className="text-gray-300 hover:text-survey-accent transition-colors">North London</a></li>
              <li><a href="#" className="text-gray-300 hover:text-survey-accent transition-colors">East London</a></li>
              <li><a href="#" className="text-gray-300 hover:text-survey-accent transition-colors">South London</a></li>
              <li><a href="#" className="text-gray-300 hover:text-survey-accent transition-colors">West London</a></li>
              <li><a href="#" className="text-gray-300 hover:text-survey-accent transition-colors">Greater London</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">020 1234 5678</li>
              <li className="text-gray-300">info@londonstructuralsurveys.com</li>
              <li className="text-gray-300">123 Structural Avenue, London, EC1V 9BD</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} London Structural Surveys. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-survey-accent text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-survey-accent text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-survey-accent text-sm transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
