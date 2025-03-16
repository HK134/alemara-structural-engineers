
import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1A1F2C] text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/6680eb37-5f4f-4000-abea-88ccf4675de9.png" 
                alt="Alemara Structural Engineering London" 
                className="h-12 mr-3" 
              />
            </div>
            <p className="text-gray-300 mb-4">
              Specialist structural engineering consultancy providing expert assessments and solutions for property-related structural issues across London and surrounding areas.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-[#ea384c] transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#ea384c] transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#ea384c] transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#ea384c] transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-[#ea384c] transition-colors">Post-RICS Structural Surveys</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#ea384c] transition-colors">Crack Assessment</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#ea384c] transition-colors">Subsidence Investigations</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#ea384c] transition-colors">Pre-Purchase Structural Inspections</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#ea384c] transition-colors">Party Wall Assessments</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#ea384c] transition-colors">Structural Defect Analysis</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Areas We Cover</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-[#ea384c] transition-colors">North London</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#ea384c] transition-colors">East London</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#ea384c] transition-colors">South London</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#ea384c] transition-colors">West London</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#ea384c] transition-colors">Central London</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#ea384c] transition-colors">Greater London</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="text-gray-300">020 8004 9060</li>
              <li className="text-gray-300">info@alemara.co.uk</li>
              <li className="text-gray-300">6 Highbury Corner, London, N5 1RD</li>
            </ul>
            <div className="mt-4 pt-4 border-t border-gray-700">
              <h4 className="font-semibold mb-2">Business Hours</h4>
              <p className="text-gray-300 text-sm">Monday to Friday: 8:30am - 6:00pm</p>
              <p className="text-gray-300 text-sm">Saturday: By appointment</p>
              <p className="text-gray-300 text-sm">Sunday: Closed</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Alemara Structural Engineering. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-[#ea384c] text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-[#ea384c] text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-[#ea384c] text-sm transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
