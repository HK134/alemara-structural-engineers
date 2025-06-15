
import React, { useEffect } from 'react';

const ContactForm = () => {
  useEffect(() => {
    // Load Typeform embed script if not already loaded
    if (!document.querySelector('script[src*="embed.typeform.com"]')) {
      const script = document.createElement('script');
      script.src = '//embed.typeform.com/next/embed.js';
      script.async = true;
      script.onload = () => {
        // Initialize Typeform after script loads
        if (window.tf && window.tf.load) {
          window.tf.load();
        }
      };
      document.head.appendChild(script);
    } else {
      // If script is already loaded, just initialize
      if (window.tf && window.tf.load) {
        window.tf.load();
      }
    }
  }, []);

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
            <div 
              data-tf-live="01JKMCBJRZQJH52ACHS9JVY1AK"
              style={{ minHeight: '500px' }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
