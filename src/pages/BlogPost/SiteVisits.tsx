
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyBookingButton from '@/components/StickyBookingButton';

// Import all components
import SiteVisitSEO from '@/components/blog/SiteVisitSEO';
import SiteVisitHero from '@/components/blog/SiteVisitHero';
import SiteVisitReasons from '@/components/blog/SiteVisitReasons';
import SiteVisitInspection from '@/components/blog/SiteVisitInspection';
import SiteVisitAssessment from '@/components/blog/SiteVisitAssessment';
import SiteVisitCommonIssues from '@/components/blog/SiteVisitCommonIssues';
import SiteVisitConstruction from '@/components/blog/SiteVisitConstruction';
import SiteVisitCaseStudy from '@/components/blog/SiteVisitCaseStudy';
import SiteVisitBenefits from '@/components/blog/SiteVisitBenefits';
import SiteVisitFAQ from '@/components/blog/SiteVisitFAQ';
import SiteVisitCTA from '@/components/blog/SiteVisitCTA';
import SiteVisitSidebar from '@/components/blog/SiteVisitSidebar';
import SiteVisitBottomCTA from '@/components/blog/SiteVisitBottomCTA';

const SiteVisitsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteVisitSEO />
      <Navbar />

      <main className="flex-grow">
        <SiteVisitHero />

        {/* Article Content */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-[1400px]">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* Main Content */}
              <div className="lg:w-2/3">
                <article className="prose prose-lg max-w-none">
                  <p className="lead text-xl text-gray-700">
                    Site visits are a crucial component of any structural engineering project in London. They provide our engineers with firsthand insights about the property that simply cannot be gained from plans or photos alone. Here's why these visits are essential and what to expect when our engineers visit your property.
                  </p>

                  <SiteVisitReasons />
                  <SiteVisitInspection />
                  <SiteVisitAssessment />
                  <SiteVisitCommonIssues />
                  <SiteVisitConstruction />
                  <SiteVisitCaseStudy />
                  <SiteVisitBenefits />
                  <SiteVisitFAQ />
                  <SiteVisitCTA />
                </article>
              </div>

              <SiteVisitSidebar />
            </div>
          </div>
        </section>
        
        <SiteVisitBottomCTA />
      </main>
      <Footer />
      <StickyBookingButton />
    </div>
  );
};

export default SiteVisitsPage;
