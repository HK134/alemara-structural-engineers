import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer
      data-nosnippet
      className="bg-[#1A1F2C] text-white pt-12 pb-6"
    >
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
              <a href="https://www.facebook.com/amatrix.co" className="text-gray-300 hover:text-[#ea384c] transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com/amatrix.co" className="text-gray-300 hover:text-[#ea384c] transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://www.instagram.com/amatrix.co" className="text-gray-300 hover:text-[#ea384c] transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.linkedin.com/company/amatrix.co" className="text-gray-300 hover:text-[#ea384c] transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">London Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/loft-conversions" className="text-gray-300 hover:text-[#ea384c] transition-colors">Loft Conversions</Link></li>
              <li><Link to="/services/extensions" className="text-gray-300 hover:text-[#ea384c] transition-colors">Rear & Side Extensions</Link></li>
              <li><Link to="/services/basement-extensions" className="text-gray-300 hover:text-[#ea384c] transition-colors">Basement Extensions</Link></li>
              <li><Link to="/services/subsidence-crack-surveys" className="text-gray-300 hover:text-[#ea384c] transition-colors">Subsidence & Crack Surveys</Link></li>
              <li><Link to="/services/commercial" className="text-gray-300 hover:text-[#ea384c] transition-colors">Commercial Engineering</Link></li>
              <li><Link to="/services/new-builds" className="text-gray-300 hover:text-[#ea384c] transition-colors">New Builds & Developments</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">London Areas We Cover</h3>
            <ul className="space-y-2">
              <li><Link to="/areas/islington-highbury" className="text-gray-300 hover:text-[#ea384c] transition-colors">Islington & Highbury</Link></li>
              <li><Link to="/areas/camden-kentish-town" className="text-gray-300 hover:text-[#ea384c] transition-colors">Camden & Kentish Town</Link></li>
              <li><Link to="/areas/hackney-shoreditch" className="text-gray-300 hover:text-[#ea384c] transition-colors">Hackney & Shoreditch</Link></li>
              <li><Link to="/areas/kensington-chelsea" className="text-gray-300 hover:text-[#ea384c] transition-colors">Kensington & Chelsea</Link></li>
              <li><Link to="/areas/westminster-mayfair" className="text-gray-300 hover:text-[#ea384c] transition-colors">Westminster & Mayfair</Link></li>
              <li><Link to="/areas/london-boroughs" className="text-gray-300 hover:text-[#ea384c] transition-colors">All London Boroughs</Link></li>
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
                <span className="text-gray-300">info@alemara.co.uk</span>
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
              &copy; {new Date().getFullYear()} Powered by Alemara Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-[#ea384c] text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-[#ea384c] text-sm transition-colors">
                Terms of Service
              </Link>
              <a href="/sitemap.xml" className="text-gray-400 hover:text-[#ea384c] text-sm transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
