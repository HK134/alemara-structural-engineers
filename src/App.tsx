
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Index from '@/pages/Index';
import Services from '@/pages/Services';
import AboutUs from '@/pages/AboutUs';
import Portfolio from '@/pages/Portfolio';
import ProjectDetail from '@/pages/ProjectDetail';
import FAQPage from '@/pages/FAQPage';
import Blog from '@/pages/Blog';
import BlogPostPage from '@/pages/BlogPost';
import Contact from '@/pages/Contact';
import SiteVisits from '@/pages/BlogPost/SiteVisits';
import Residential from '@/pages/services/Residential';
import LoftConversions from '@/pages/residential/LoftConversions';
import Extensions from '@/pages/residential/Extensions';
import StructuralSurveys from '@/pages/services/StructuralSurveys';
import Commercial from '@/pages/services/Commercial';
import CivilEngineering from '@/pages/services/CivilEngineering';
import BasementExtensions from '@/pages/services/BasementExtensions';
import SubsidenceCrackSurveys from '@/pages/services/SubsidenceCrackSurveys';
import NewBuilds from '@/pages/services/NewBuilds';
import IslingtonHighbury from '@/pages/areas/IslingtonHighbury';
import CamdenKentishTown from '@/pages/areas/CamdenKentishTown';
import HackneyShoreditch from '@/pages/areas/HackneyShoreditch';
import KensingtonChelsea from '@/pages/areas/KensingtonChelsea';
import WestminsterMayfair from '@/pages/areas/WestminsterMayfair';
import LondonBoroughs from '@/pages/areas/LondonBoroughs';
import SitemapUpdater from '@/pages/SitemapUpdater';
import SitemapXML from '@/pages/SitemapXML';
import ClientOnboarding from '@/pages/ClientOnboarding';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import Terms from '@/pages/Terms';
import Login from '@/pages/Login';
import EngineerLogin from '@/pages/EngineerLogin';
import ClientLogin from '@/pages/ClientLogin';
import Admin from '@/pages/Admin';
import Analytics from '@/pages/Analytics';
import EngineerManagement from '@/pages/EngineerManagement';
import EngineerDashboard from '@/pages/EngineerDashboard';
import EngineerTimesheet from '@/pages/EngineerTimesheet';
import EngineerCompanyPolicy from '@/pages/EngineerCompanyPolicy';
import EngineerClientEtiquette from '@/pages/EngineerClientEtiquette';
import EngineerAvailability from '@/pages/EngineerAvailability';
import EngineerInvoices from '@/pages/EngineerInvoices';
import EngineerMessages from '@/pages/EngineerMessages';
import ClientDashboard from '@/pages/ClientDashboard';
import NotFound from '@/pages/NotFound';
import ProtectedRoute from '@/components/ProtectedRoute';
import { AuthProvider } from '@/contexts/AuthContext';
import './App.css';
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';

import AdminLayout from '@/components/AdminLayout';
import EngineerLayout from '@/components/EngineerLayout';

// Create a client
const queryClient = new QueryClient();

function DomainCheck() {
  React.useEffect(() => {
    // Check if we're on the wrong domain and redirect
    const currentDomain = window.location.hostname;
    const canonicalDomain = 'alemara.co.uk';
    
    if (currentDomain !== canonicalDomain && currentDomain !== 'localhost') {
      // Redirect to canonical domain
      window.location.replace(`https://${canonicalDomain}${window.location.pathname}${window.location.search}`);
    }
  }, []);

  const currentDomain = typeof window !== 'undefined' ? window.location.hostname : '';
  const isWrongDomain = currentDomain !== 'alemara.co.uk' && currentDomain !== 'localhost';

  if (isWrongDomain) {
    return (
      <Helmet>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
    );
  }

  return null;
}

function GAListener() {
  const location = useLocation();
  React.useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', 'G-T6RTP11HPR', {
        page_path: location.pathname + location.search,
      });
    }
  }, [location.pathname, location.search]);
  return null;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router>
          <DomainCheck />
          <GAListener />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:id" element={<ProjectDetail />} />
            <Route path="/portfolio/:slug" element={<ProjectDetail />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/blog/importance-of-site-visits" element={<SiteVisits />} />
            <Route path="/contact" element={<Contact />} />

            {/* Service Pages */}
            <Route path="/services/residential" element={<Residential />} />
            <Route path="/services/loft-conversions" element={<Navigate to="/services/residential/loft-conversions" replace />} />
            <Route path="/services/residential/loft-conversions" element={<LoftConversions />} />
            <Route path="/services/extensions" element={<Navigate to="/services/residential/extensions" replace />} />
            <Route path="/services/residential/extensions" element={<Extensions />} />
            <Route path="/services/structural-surveys" element={<StructuralSurveys />} />
            <Route path="/services/commercial" element={<Commercial />} />
            <Route path="/services/civil-engineering" element={<CivilEngineering />} />
            <Route path="/services/basement-extensions" element={<BasementExtensions />} />
            <Route path="/services/subsidence-crack-surveys" element={<SubsidenceCrackSurveys />} />
            <Route path="/services/new-builds" element={<NewBuilds />} />

            {/* Area Pages */}
            <Route path="/areas/islington-highbury" element={<IslingtonHighbury />} />
            <Route path="/areas/camden-kentish-town" element={<CamdenKentishTown />} />
            <Route path="/areas/hackney-shoreditch" element={<HackneyShoreditch />} />
            <Route path="/areas/kensington-chelsea" element={<KensingtonChelsea />} />
            <Route path="/areas/westminster-mayfair" element={<WestminsterMayfair />} />
            <Route path="/areas/london-boroughs" element={<LondonBoroughs />} />

            <Route path="/client-onboarding" element={<ClientOnboarding />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/login" element={<Login />} />
            <Route path="/engineer-login" element={<EngineerLogin />} />
            <Route path="/client-login" element={<ClientLogin />} />

            {/* Admin Routes: use AdminLayout */}
            <Route element={<ProtectedRoute allowedRoles={['admin']}><AdminLayout /></ProtectedRoute>}>
              <Route path="/admin" element={<Admin />} />
              <Route path="/admin/analytics" element={<Analytics />} />
              <Route path="/admin/engineers" element={<EngineerManagement />} />
            </Route>

            {/* Engineer Routes: use EngineerLayout */}
            <Route element={<ProtectedRoute allowedRoles={['engineer']}><EngineerLayout /></ProtectedRoute>}>
              <Route path="/engineer" element={<EngineerDashboard />} />
              <Route path="/engineer/timesheet" element={<EngineerTimesheet />} />
              <Route path="/engineer/company-policy" element={<EngineerCompanyPolicy />} />
              <Route path="/engineer/client-etiquette" element={<EngineerClientEtiquette />} />
              <Route path="/engineer/availability" element={<EngineerAvailability />} />
              <Route path="/engineer/invoices" element={<EngineerInvoices />} />
              <Route path="/engineer/messages" element={<EngineerMessages />} />
            </Route>

            {/* Client Routes */}
            <Route path="/client" element={<ProtectedRoute allowedRoles={['client']}><ClientDashboard /></ProtectedRoute>} />
            
            {/* API Endpoints */}
            <Route path="/sitemap-generator" element={<SitemapUpdater />} />
            <Route path="/generate-sitemap.xml" element={<SitemapXML />} />

            {/* Not Found Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
