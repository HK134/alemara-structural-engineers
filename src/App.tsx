
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

// Pages
const Index = lazy(() => import('@/pages/Index'));
const AboutUs = lazy(() => import('@/pages/AboutUs'));
const Services = lazy(() => import('@/pages/Services'));
const Portfolio = lazy(() => import('@/pages/Portfolio'));
const ProjectDetail = lazy(() => import('@/pages/ProjectDetail'));
const NotFound = lazy(() => import('@/pages/NotFound'));
const PrivacyPolicy = lazy(() => import('@/pages/PrivacyPolicy'));
const Terms = lazy(() => import('@/pages/Terms'));
const FAQPage = lazy(() => import('@/pages/FAQPage'));
const Blog = lazy(() => import('@/pages/Blog'));
const BlogPost = lazy(() => import('@/pages/BlogPost'));
const SiteVisits = lazy(() => import('@/pages/BlogPost/SiteVisits'));

// Service pages
const Residential = lazy(() => import('@/pages/services/Residential'));
const Commercial = lazy(() => import('@/pages/services/Commercial'));
const CivilEngineering = lazy(() => import('@/pages/services/CivilEngineering'));
const StructuralSurveys = lazy(() => import('@/pages/services/StructuralSurveys'));

// Residential service pages
const LoftConversions = lazy(() => import('@/pages/residential/LoftConversions'));
const Extensions = lazy(() => import('@/pages/residential/Extensions'));

// Admin pages
const Admin = lazy(() => import('@/pages/Admin'));
const Login = lazy(() => import('@/pages/Login'));
const ClientLogin = lazy(() => import('@/pages/ClientLogin'));
const EngineerLogin = lazy(() => import('@/pages/EngineerLogin'));
const ClientDashboard = lazy(() => import('@/pages/ClientDashboard'));
const EngineerDashboard = lazy(() => import('@/pages/EngineerDashboard'));
const EngineerProjectsMap = lazy(() => import('@/pages/EngineerProjectsMap'));
const EngineerTimesheet = lazy(() => import('@/pages/EngineerTimesheet'));
const EngineerInvoices = lazy(() => import('@/pages/EngineerInvoices'));
const EngineerMessages = lazy(() => import('@/pages/EngineerMessages'));
const EngineerAvailability = lazy(() => import('@/pages/EngineerAvailability'));
const EngineerCompanyPolicy = lazy(() => import('@/pages/EngineerCompanyPolicy'));
const EngineerClientEtiquette = lazy(() => import('@/pages/EngineerClientEtiquette'));

// Analytics pages
const SEO = lazy(() => import('@/pages/SEO'));
const Analytics = lazy(() => import('@/pages/Analytics'));

// Loading fallback
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#f8f9fa]">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-[#ea384c] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-[#1A1F2C] font-medium">Loading...</p>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          {/* Main Routes */}
          <Route path="/" element={<Index />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/blog/structural-engineering-site-visits" element={<SiteVisits />} />

          {/* Service Routes */}
          <Route path="/services/residential" element={<Residential />} />
          <Route path="/services/commercial" element={<Commercial />} />
          <Route path="/services/civil-engineering" element={<CivilEngineering />} />
          <Route path="/services/structural-surveys" element={<StructuralSurveys />} />
          
          {/* Residential Service Routes */}
          <Route path="/services/residential/loft-conversions" element={<LoftConversions />} />
          <Route path="/services/residential/extensions" element={<Extensions />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/client-login" element={<ClientLogin />} />
          <Route path="/engineer-login" element={<EngineerLogin />} />
          
          {/* Client Portal Routes */}
          <Route path="/client-dashboard" element={<ClientDashboard />} />
          
          {/* Engineer Portal Routes */}
          <Route path="/engineer-dashboard" element={<EngineerDashboard />} />
          <Route path="/engineer-projects-map" element={<EngineerProjectsMap />} />
          <Route path="/engineer-timesheet" element={<EngineerTimesheet />} />
          <Route path="/engineer-invoices" element={<EngineerInvoices />} />
          <Route path="/engineer-messages" element={<EngineerMessages />} />
          <Route path="/engineer-availability" element={<EngineerAvailability />} />
          <Route path="/engineer-company-policy" element={<EngineerCompanyPolicy />} />
          <Route path="/engineer-client-etiquette" element={<EngineerClientEtiquette />} />
          
          {/* Analytics Routes */}
          <Route path="/seo" element={<SEO />} />
          <Route path="/analytics" element={<Analytics />} />
          
          {/* Fallbacks */}
          <Route path="/404" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/404" replace />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
