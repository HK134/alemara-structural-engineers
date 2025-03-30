
import React from 'react';
import { Helmet } from 'react-helmet';

interface ProjectStructuredDataProps {
  project: {
    id: number;
    title: string;
    type: string;
    image: string;
    description: string;
    completion: string;
    architect?: string;
    location?: string;
    images?: string[];
    fullDescription?: string;
  };
}

const ProjectStructuredData = ({ project }: ProjectStructuredDataProps) => {
  // Convert relative URLs to absolute URLs for images
  const getAbsoluteUrl = (relativeUrl: string) => {
    if (relativeUrl.startsWith('http')) return relativeUrl;
    
    // Use window.location to get the current domain
    const domain = typeof window !== 'undefined' ? window.location.origin : 'https://londonstructuralsurveys.com';
    return `${domain}${relativeUrl}`;
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Project",
    "name": project.title,
    "description": project.description,
    "image": project.images && project.images.length > 0 ? 
      project.images.map(img => getAbsoluteUrl(img)) : 
      getAbsoluteUrl(project.image),
    "datePublished": project.completion,
    "provider": {
      "@type": "Organization",
      "name": "London Structural Surveys",
      "url": "https://londonstructuralsurveys.com"
    }
  };

  if (project.location) {
    structuredData["location"] = {
      "@type": "Place",
      "name": project.location
    };
  }

  if (project.architect) {
    structuredData["contributor"] = {
      "@type": "Organization",
      "name": project.architect
    };
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default ProjectStructuredData;
