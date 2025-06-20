
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from '@/pages/Index';
import Services from '@/pages/Services';
import AboutUs from '@/pages/AboutUs';
import Portfolio from '@/pages/Portfolio';
import ProjectDetail from '@/pages/ProjectDetail';
import FAQPage from '@/pages/FAQPage';
import Blog from '@/pages/Blog';
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

import AdminLayout from '@/components/AdminLayout';
import EngineerLayout from '@/components/EngineerLayout';

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:id" element={<ProjectDetail />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/importance-of-site-visits" element={<SiteVisits />} />
            <Route path="/contact" element={<Contact />} />

            {/* Service Pages */}
            <Route path="/services/residential" element={<Residential />} />
            <Route path="/services/loft-conversions" element={<LoftConversions />} />
            <Route path="/services/residential/loft-conversions" element={<LoftConversions />} />
            <Route path="/services/extensions" element={<Extensions />} />
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

            {/* Not Found Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
