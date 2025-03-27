
import { useEffect } from 'react';

type GoogleAnalyticsProps = {
  measurementId: string;
};

const GoogleAnalytics = ({ measurementId }: GoogleAnalyticsProps) => {
  useEffect(() => {
    // Only inject GA script if we have a valid measurement ID
    if (measurementId && typeof window !== 'undefined') {
      // Check if the Google Analytics script is already present
      if (!document.getElementById('ga-script')) {
        // Create the script elements
        const script1 = document.createElement('script');
        script1.id = 'ga-script';
        script1.async = true;
        script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;

        const script2 = document.createElement('script');
        script2.id = 'ga-config';
        script2.innerHTML = `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${measurementId}');
        `;

        // Append scripts to document
        document.head.appendChild(script1);
        document.head.appendChild(script2);
      }
    }

    return () => {
      // Optional: Clean up scripts on component unmount
      // Note: Usually, we don't remove GA scripts in production
      if (process.env.NODE_ENV !== 'production') {
        const script1 = document.getElementById('ga-script');
        const script2 = document.getElementById('ga-config');
        if (script1) document.head.removeChild(script1);
        if (script2) document.head.removeChild(script2);
      }
    };
  }, [measurementId]);

  // This component doesn't render anything visible
  return null;
};

export default GoogleAnalytics;
