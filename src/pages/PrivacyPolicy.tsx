
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center text-[#ea384c] hover:underline mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to home
        </Link>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p>
            Welcome to London Structural Surveys. We are committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, 
            and safeguard your personal information when you visit our website or use our services.
          </p>
          <p>
            London Structural Surveys is operated by Alemara Ltd (referred to as "we", "us", or "our" in this policy).
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
          <p>We may collect the following information:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Name and contact details (including email address, postal address, and telephone number)</li>
            <li>Property information relevant to structural surveys and assessments</li>
            <li>Information about your visit to our website, including the pages you view, how you navigate the site, and your IP address</li>
            <li>Any information you provide when you contact us or complete forms on our website</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
          <p>We use the information we collect for the following purposes:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>To provide and manage our structural engineering and survey services</li>
            <li>To communicate with you regarding enquiries, appointments, and services</li>
            <li>To improve our website and services</li>
            <li>To comply with legal obligations</li>
            <li>For our legitimate business interests, including marketing (where you have given consent)</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Legal Basis for Processing</h2>
          <p>We process your personal data on the following legal bases:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Your consent (where applicable)</li>
            <li>Performance of a contract with you</li>
            <li>Compliance with legal obligations</li>
            <li>Our legitimate interests, such as running our business effectively and providing our services</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Data Retention</h2>
          <p>
            We will retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, 
            including to satisfy any legal, accounting, or reporting requirements.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Data Security</h2>
          <p>
            We have implemented appropriate security measures to protect your personal information from unauthorized access, alteration, 
            disclosure, or destruction. These measures include internal reviews of our data collection, storage, and processing practices.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Your Rights</h2>
          <p>Under data protection law, you have rights including:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>The right to access your personal data</li>
            <li>The right to rectification of inaccurate personal data</li>
            <li>The right to erasure (in certain circumstances)</li>
            <li>The right to restrict processing</li>
            <li>The right to data portability</li>
            <li>The right to object to processing</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Third-Party Links</h2>
          <p>
            Our website may include links to third-party websites. Clicking on these links may allow third parties to collect or share data about you. 
            We do not control these third-party websites and are not responsible for their privacy policies.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Cookies</h2>
          <p>
            Our website uses cookies to distinguish you from other users. This helps us provide you with a good experience when you browse our website 
            and allows us to improve our site. For detailed information on the cookies we use and the purposes for which we use them, 
            please see our Cookie Policy.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">10. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. 
            You are advised to review this Privacy Policy periodically for any changes.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">11. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy or our data practices, please contact us at:
          </p>
          <p className="my-2">
            <strong>Email:</strong> info@londonstructuralsurveys.com
          </p>
          <p className="my-2">
            <strong>Phone:</strong> 020 8004 9060
          </p>
          <p className="my-2">
            <strong>Address:</strong> 6 Highbury Corner, London, N5 1RD
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;
