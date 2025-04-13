
import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { AuthProvider } from '@/contexts/AuthContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AdminLayout from '@/components/AdminLayout';
import ClientLayout from '@/components/ClientLayout';
import EngineerLayout from '@/components/EngineerLayout';
import ProtectedRoute from '@/components/ProtectedRoute';

// Create a new QueryClient instance
const queryClient = new QueryClient();

// Instead of lazy loading critical components, import them directly
import Index from '@/pages/Index';
import Portfolio from '@/pages/Portfolio';
import ProjectDetail from '@/pages/ProjectDetail';

// Continue lazy loading for less critical routes
const AboutUs = lazy(() => import('@/pages/AboutUs'));
const Services = lazy(() => import('@/pages/Services'));
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
const EngineerTimesheet = lazy(() => import('@/pages/EngineerTimesheet'));
const EngineerInvoices = lazy(() => import('@/pages/EngineerInvoices'));
const EngineerMessages = lazy(() => import('@/pages/EngineerMessages'));
const EngineerAvailability = lazy(() => import('@/pages/EngineerAvailability'));
const EngineerCompanyPolicy = lazy(() => import('@/pages/EngineerCompanyPolicy'));
const EngineerClientEtiquette = lazy(() => import('@/pages/EngineerClientEtiquette'));

// Analytics pages
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
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router>
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              {/* Main Routes - Critical paths loaded directly */}
              <Route path="/" element={<Index />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/portfolio/:id" element={<ProjectDetail />} />
              
              {/* Lazy loaded routes */}
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/services" element={<Services />} />
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

              {/* Auth Routes */}
              <Route path="/login" element={<Login />} />
              <Route path="/client-login" element={<ClientLogin />} />
              <Route path="/engineer-login" element={<EngineerLogin />} />
              
              {/* Admin Portal Routes */}
              <Route path="/admin" element={
                <ProtectedRoute allowedRoles={['admin']}>
                  <AdminLayout />
                </ProtectedRoute>
              }>
                <Route index element={<Admin />} />
                <Route path="analytics" element={<Analytics />} />
              </Route>
              
              {/* Client Portal Routes */}
              <Route path="/client" element={
                <ProtectedRoute allowedRoles={['client']}>
                  <ClientLayout />
                </ProtectedRoute>
              }>
                <Route index element={<ClientDashboard />} />
              </Route>
              
              {/* Engineer Portal Routes */}
              <Route path="/engineer" element={
                <ProtectedRoute allowedRoles={['engineer']}>
                  <EngineerLayout />
                </ProtectedRoute>
              }>
                <Route index element={<EngineerDashboard />} />
                <Route path="timesheet" element={<EngineerTimesheet />} />
                <Route path="invoices" element={<EngineerInvoices />} />
                <Route path="messages" element={<EngineerMessages />} />
                <Route path="availability" element={<EngineerAvailability />} />
                <Route path="company-policy" element={<EngineerCompanyPolicy />} />
                <Route path="client-etiquette" element={<EngineerClientEtiquette />} />
              </Route>
              
              {/* Fallbacks */}
              <Route path="/404" element={<NotFound />} />
              <Route path="*" element={<Navigate to="/404" replace />} />
            </Routes>
          </Suspense>
        </Router>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
