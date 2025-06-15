
import React from 'react';

const ContactForm = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Get in touch with our team of expert structural engineers. We'll respond to all inquiries within 4 hours during business hours.
          </p>
        </div>
        
        <div className="w-full max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8">
            <div className="text-center py-20">
              <h3 className="text-xl font-semibold mb-4">Contact Form</h3>
              <p className="text-gray-600">Contact form will be implemented here</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
