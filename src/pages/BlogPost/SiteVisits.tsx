
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet';
import SiteVisitHero from '@/components/blog/SiteVisitHero';
import SiteVisitReasons from '@/components/blog/SiteVisitReasons';
import SiteVisitInspection from '@/components/blog/SiteVisitInspection';
import SiteVisitAssessment from '@/components/blog/SiteVisitAssessment';
import SiteVisitConstruction from '@/components/blog/SiteVisitConstruction';
import SiteVisitCommonIssues from '@/components/blog/SiteVisitCommonIssues';
import SiteVisitCaseStudy from '@/components/blog/SiteVisitCaseStudy';
import SiteVisitBenefits from '@/components/blog/SiteVisitBenefits';
import SiteVisitFAQ from '@/components/blog/SiteVisitFAQ';
import SiteVisitCTA from '@/components/blog/SiteVisitCTA';
import SiteVisitBottomCTA from '@/components/blog/SiteVisitBottomCTA';
import SiteVisitSidebar from '@/components/blog/SiteVisitSidebar';

const SiteVisits = () => {
  return (
    <>
      <Helmet>
        <title>The Importance of Structural Engineering Site Visits | London Structural Surveys</title>
        <meta 
          name="description" 
          content="Learn why site visits by structural engineers are crucial for your building project's success, safety, and compliance with regulations." 
        />
        <meta 
          name="keywords" 
          content="structural engineer site visit, structural inspection, building assessment, structural survey, London structural engineer" 
        />
      </Helmet>
      
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-3/4">
            <SiteVisitHero />
            <SiteVisitReasons />
            <SiteVisitInspection />
            <SiteVisitAssessment />
            <SiteVisitConstruction />
            <SiteVisitCommonIssues />
            <SiteVisitCaseStudy />
            <SiteVisitBenefits />
            <SiteVisitFAQ />
            <SiteVisitCTA />
            <SiteVisitBottomCTA />
          </div>
          
          <div className="lg:w-1/4">
            <SiteVisitSidebar />
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default SiteVisits;
