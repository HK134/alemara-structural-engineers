
import React from 'react';
import { Helmet } from 'react-helmet';

const SchemaMarkup = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Alemara Engineers - London Structural Surveys",
    "description": "Expert structural & civil engineering services in London for residential, commercial, and structural survey projects.",
    "url": "https://londonstructuralsurveys.com/services/structural-surveys",
    "telephone": "02080049060",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "London",
      "addressRegion": "Greater London",
      "addressCountry": "UK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "51.5074",
      "longitude": "0.1278"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Structural Survey Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Pre-Purchase Structural Surveys"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Crack Assessment"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Subsidence Investigations"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Timber Defect Analysis"
          }
        }
      ]
    }
  };

  return (
    <Helmet>
      <title>Expert Structural Surveys London | Alemara Engineers</title>
      <meta name="description" content="Professional structural survey reports for London homeowners, buyers and landlords. Detailed inspections by certified engineers with fast 48-hour delivery." />
      <meta name="keywords" content="structural surveys London, structural engineer London, structural inspections, property survey, engineer reports, building inspection, crack assessment, subsidence, certified structural engineer" />
      <link rel="canonical" href="https://londonstructuralsurveys.com/services/structural-surveys" />
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
    </Helmet>
  );
};

export default SchemaMarkup;
