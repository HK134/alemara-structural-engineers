
import React, { useEffect } from 'react';

const TypeformSideButton = () => {
  useEffect(() => {
    // Load Typeform script if not already loaded
    if (!document.querySelector('script[src*="embed.typeform.com"]')) {
      const script = document.createElement('script');
      script.src = '//embed.typeform.com/next/embed.js';
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50">
      <div data-tf-live="01JXTV98VCWA0WJT7SXFBW4RB3"></div>
    </div>
  );
};

export default TypeformSideButton;
