
import React, { useEffect } from 'react';

const TypeformSideButton = () => {
  useEffect(() => {
    // Remove any existing Typeform scripts to avoid conflicts
    const existingScripts = document.querySelectorAll('script[src*="embed.typeform.com"]');
    existingScripts.forEach(script => script.remove());

    // Load Typeform script
    const script = document.createElement('script');
    script.src = '//embed.typeform.com/next/embed.js';
    script.async = true;
    script.onload = () => {
      console.log('Typeform script loaded for side button');
      // Force refresh of Typeform embeds after script loads
      if (window.tf && window.tf.load) {
        window.tf.load();
      }
    };
    document.head.appendChild(script);

    return () => {
      // Cleanup on unmount
      const scripts = document.querySelectorAll('script[src*="embed.typeform.com"]');
      scripts.forEach(script => script.remove());
    };
  }, []);

  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50">
      <div data-tf-live="01JXTV98VCWA0WJT7SXFBW4RB3"></div>
    </div>
  );
};

export default TypeformSideButton;
