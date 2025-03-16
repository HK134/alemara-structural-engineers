
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <Link to="/" className="inline-flex items-center text-[#ea384c] hover:underline mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to home
        </Link>
        
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms and Conditions</h1>
        
        <div className="prose max-w-none">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p>
            Welcome to London Structural Surveys. These terms and conditions govern your use of our website and services. 
            By using our website and services, you accept these terms and conditions in full. If you disagree with any part of these terms and conditions, 
            you must not use our website or services.
          </p>
          <p>
            London Structural Surveys is operated by Alemara Ltd (referred to as "we", "us", or "our" in these terms).
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Services</h2>
          <p>
            We provide structural engineering and surveying services for residential and commercial properties in London and surrounding areas. 
            While we strive to provide accurate and reliable services, we do not warrant or guarantee that our services will meet your specific requirements.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Engagement Process</h2>
          <p>
            When you engage our services:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>We will provide a written fee proposal based on the information you provide us</li>
            <li>Our fee proposal will outline the scope of work, fees, and estimated timeframes</li>
            <li>Work will commence upon your written acceptance of our proposal and receipt of any agreed deposit</li>
            <li>Any changes to the agreed scope of work may result in additional fees and timeframes</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Fees and Payment</h2>
          <p>
            Our fees are as stated in our proposal to you. Unless otherwise agreed:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>A deposit of 50% of the total fee is required before work commences</li>
            <li>The balance is payable upon completion of our work</li>
            <li>Payment terms are strictly 14 days from the invoice date</li>
            <li>We reserve the right to charge interest on late payments at 8% per annum above the Bank of England base rate</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">5. Intellectual Property</h2>
          <p>
            All intellectual property rights in our reports, drawings, calculations, and other documents remain our property. 
            Upon receipt of full payment, you are granted a non-exclusive license to use these materials for the specific project for which they were created.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">6. Liability</h2>
          <p>
            Our liability for any loss or damage caused by our negligence or breach of contract is limited to the amount of our professional indemnity insurance cover. 
            We will not be liable for any indirect or consequential loss, loss of profits, or loss of business opportunity.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">7. Professional Indemnity Insurance</h2>
          <p>
            We maintain appropriate professional indemnity insurance. Details of our current cover can be provided upon request.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">8. Termination</h2>
          <p>
            Either party may terminate our engagement by giving 7 days' written notice. If you terminate our engagement:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>You must pay for all work completed up to the date of termination</li>
            <li>Any deposit paid may be non-refundable depending on the amount of work completed</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">9. Force Majeure</h2>
          <p>
            We will not be liable for any delay or failure to perform our obligations due to circumstances beyond our reasonable control, 
            including but not limited to acts of God, natural disasters, pandemic, government restrictions, or industrial action.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">10. Website Use</h2>
          <p>
            When using our website:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>You must not use our website in any way that is unlawful, illegal, fraudulent, or harmful</li>
            <li>You must not use our website to copy, store, host, transmit, send, use, publish, or distribute any material which consists of malicious computer software</li>
            <li>You must not conduct any systematic or automated data collection activities on or in relation to our website</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">11. Variations</h2>
          <p>
            We may revise these terms and conditions from time to time. The revised terms and conditions shall apply from the date of publication on our website.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">12. Governing Law and Jurisdiction</h2>
          <p>
            These terms and conditions are governed by and construed in accordance with the laws of England and Wales. 
            Any disputes relating to these terms and conditions shall be subject to the exclusive jurisdiction of the courts of England and Wales.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4">13. Contact Us</h2>
          <p>
            If you have any questions about these terms and conditions, please contact us at:
          </p>
          <p className="my-2">
            <strong>Email:</strong> info@alemara.co.uk
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

export default Terms;
