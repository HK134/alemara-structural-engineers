
import React from 'react';
import { Helmet } from 'react-helmet';

const SchemaMarkup = () => {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "London Structural Surveys",
    "description": "Expert structural & civil engineering services in London for residential, commercial, and bespoke projects.",
    "url": "https://londonstructuralsurveys.com/services",
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
      "name": "Engineering Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Residential Structural Engineering"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Structural Engineering"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Bespoke Design Projects"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Structural Surveys & Assessments"
          }
        }
      ]
    }
  };

  return (
    <Helmet>
      <title>Structural & Civil Engineering Services London | Alemara Engineers</title>
      <meta name="description" content="Expert structural engineering services in London - residential extensions, commercial buildings, bespoke designs, and structural surveys. Specialist in London properties." />
      <meta name="keywords" content="structural engineering, London structural engineer, structural surveys, residential extensions, basement conversions, loft conversions, commercial building design, steel fabrication, civil engineering" />
      <link rel="canonical" href="https://londonstructuralsurveys.com/services" />
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
    </Helmet>
  );
};

export default SchemaMarkup;
