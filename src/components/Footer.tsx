
import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1A1F2C] text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/a543004b-6dda-4449-b14e-4a9212b75d84.png" 
                alt="London Structural Surveys" 
                className="h-12 mr-3" 
              />
            </div>
            <p className="text-gray-300 mb-4">
              Specialist London structural engineering consultancy providing expert assessments for London's unique property landscape from historic buildings to modern developments.
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
            <h3 className="text-xl font-bold mb-4">London Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-[#ea384c] transition-colors">London Property Surveys</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#ea384c] transition-colors">Basement Extensions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#ea384c] transition-colors">London Subsidence Solutions</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#ea384c] transition-colors">Period Property Inspections</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#ea384c] transition-colors">Bulging Walls & Movement Analysis</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#ea384c] transition-colors">Structural Defect Analysis</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">London Areas We Cover</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-[#ea384c] transition-colors">Islington & Highbury</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#ea384c] transition-colors">Camden & Kentish Town</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#ea384c] transition-colors">Hackney & Shoreditch</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#ea384c] transition-colors">Kensington & Chelsea</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#ea384c] transition-colors">Westminster & Mayfair</a></li>
              <li><a href="#" className="text-gray-300 hover:text-[#ea384c] transition-colors">All London Boroughs</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Our London Office</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="text-[#ea384c] mr-2 h-5 w-5 mt-0.5" />
                <span className="text-gray-300">020 8004 9060</span>
              </li>
              <li className="flex items-start">
                <Mail className="text-[#ea384c] mr-2 h-5 w-5 mt-0.5" />
                <span className="text-gray-300">info@londonstructuralsurveys.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="text-[#ea384c] mr-2 h-5 w-5 mt-0.5" />
                <span className="text-gray-300">6 Highbury Corner, London, N5 1RD</span>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-gray-700">
              <h4 className="font-semibold mb-2 flex items-center">
                <Clock className="text-[#ea384c] mr-2 h-4 w-4" />
                London Office Hours
              </h4>
              <p className="text-gray-300 text-sm">Monday to Friday: 8:30am - 6:00pm</p>
              <p className="text-gray-300 text-sm">Saturday: By appointment</p>
              <p className="text-gray-300 text-sm">Sunday: Closed</p>
              <div className="mt-3 bg-[#ea384c]/90 rounded-md p-2 text-white text-sm">
                <Clock className="inline-block mr-1 h-3 w-3" />
                We typically respond to all enquiries within 4 hours during business hours
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} London Structural Surveys, powered by Alemara Ltd. All rights reserved.
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
          
          <div className="border-t border-gray-700 pt-6 mt-4">
            <div className="flex flex-col items-center mb-6">
              <p className="text-gray-300 text-lg font-semibold mb-4">Professional Accreditation:</p>
              <div className="flex flex-wrap justify-center items-center gap-6 max-w-5xl mx-auto">
                <img 
                  src="/lovable-uploads/b73082d3-f4cd-498f-93a3-137ac572ed47.png" 
                  alt="IStructE - The Institution of Structural Engineers" 
                  className="h-14 object-contain" 
                />
                <img 
                  src="/lovable-uploads/205ece92-2248-4d3f-ad1e-2c7a1921f65d.png" 
                  alt="ICE - Institution of Civil Engineers" 
                  className="h-12 object-contain" 
                />
                <img 
                  src="/lovable-uploads/23cacf03-8d2a-410a-8aa0-b13a3d9357c4.png" 
                  alt="Constructionline - UK Government Certification Service" 
                  className="h-12 object-contain" 
                />
                <img 
                  src="https://www.acclaim-health-safety.co.uk/wp-content/uploads/2023/02/homepage-logo.webp" 
                  alt="Acclaim Accreditation" 
                  className="h-12 object-contain" 
                />
                <img 
                  src="https://ssip.co.uk/wp-content/uploads/2019/10/SSIP-NEW-LOGO.jpg" 
                  alt="SSIP - Safety Schemes in Procurement" 
                  className="h-12 object-contain" 
                />
              </div>
            </div>
            <div className="text-center border-t border-gray-700 pt-4">
              <p className="text-gray-400 text-sm">
                Endorsed by the Institution of Structural Engineers (IStructE) and registered with the Institution of Civil Engineers (ICE)
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
