
import React, { useEffect } from 'react';

const TYPEFORM_ID = "01JXTRNZW6VRXQD5M9GFNHN81Z";

const ContactForm = () => {
  useEffect(() => {
    // Remove any existing script with this src to avoid duplicate loading
    const existing = document.querySelector('script[src="https://embed.typeform.com/next/embed.js"]');
    if (existing) {
      existing.remove();
    }
    // Add script
    const script = document.createElement('script');
    script.src = "https://embed.typeform.com/next/embed.js";
    script.async = true;
    script.onload = () => {
      if (window.tf && window.tf.load) {
        window.tf.load();
      }
    };
    document.head.appendChild(script);

    // On cleanup: remove the script
    return () => {
      const sc = document.querySelector('script[src="https://embed.typeform.com/next/embed.js"]');
      if (sc) sc.remove();
    };
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
              data-tf-live={TYPEFORM_ID}
              style={{
                minHeight: '550px',
                width: '100%',
                display: 'block'
              }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
