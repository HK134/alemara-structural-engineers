
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
    imageAlt?: string[];
    fullDescription?: string;
    client?: string;
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

  // Create image objects with URL and alt text for better SEO
  const getImageObjects = () => {
    if (!project.images || project.images.length === 0) {
      return [{
        "@type": "ImageObject",
        "url": getAbsoluteUrl(project.image),
        "caption": project.title
      }];
    }

    return project.images.map((img, index) => ({
      "@type": "ImageObject",
      "url": getAbsoluteUrl(img),
      "caption": project.imageAlt && project.imageAlt[index] 
        ? project.imageAlt[index] 
        : `${project.title} - Project Image ${index + 1}`
    }));
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": project.title,
    "description": project.description,
    "image": getImageObjects(),
    "datePublished": project.completion,
    "author": {
      "@type": "Organization",
      "name": "London Structural Surveys"
    },
    "publisher": {
      "@type": "Organization",
      "name": "London Structural Surveys",
      "logo": {
        "@type": "ImageObject",
        "url": "https://londonstructuralsurveys.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://londonstructuralsurveys.com/portfolio/${project.id}`
    }
  };

  // Add project-specific schema markup
  const projectData = {
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
    projectData["location"] = {
      "@type": "Place",
      "name": project.location
    };
  }

  if (project.architect) {
    projectData["contributor"] = {
      "@type": "Organization",
      "name": project.architect
    };
  }

  if (project.client) {
    projectData["funder"] = {
      "@type": "Organization",
      "name": project.client
    };
  }

  // Add BreadcrumbList for better navigation structure recognition
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://londonstructuralsurveys.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Portfolio",
        "item": "https://londonstructuralsurveys.com/portfolio"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": project.title,
        "item": `https://londonstructuralsurveys.com/portfolio/${project.id}`
      }
    ]
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(projectData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(breadcrumbData)}
      </script>
    </Helmet>
  );
};

export default ProjectStructuredData;
