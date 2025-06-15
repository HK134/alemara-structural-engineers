
import React, { useEffect } from 'react';

const TYPEFORM_ID = "01JXTRNZW6VRXQD5M9GFNHN81Z";

const ContactForm = () => {
  useEffect(() => {
    // Remove any existing script to prevent duplicates
    const src = "//embed.typeform.com/next/embed.js";
    const scrExist = document.querySelector(`script[src="${src}"]`);
    if (!scrExist) {
      const script = document.createElement('script');
      script.src = src;
      script.async = true;
      script.onload = () => {
        if (window.tf && window.tf.load) window.tf.load();
      };
      document.head.appendChild(script);
    } else {
      if (window.tf && window.tf.load) window.tf.load();
    }
    // Optional cleanup
    return () => {};
  }, []);

  return (
    <div className="flex justify-center py-16 bg-gray-50">
      <div className="w-full max-w-3xl">
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
  );
};

export default ContactForm;
