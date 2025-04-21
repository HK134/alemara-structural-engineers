import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLayout from "./components/AdminLayout";
import Admin from "./pages/Admin";
import ClientsPage from "./pages/ClientsPage";
import Home from "./pages/Home";
import Login from "./pages/Login";
import EngineerLogin from "./pages/EngineerLogin";
import ClientLogin from "./pages/ClientLogin";
import Register from "./pages/Register";
import Engineer from "./pages/Engineer";
import Client from "./pages/Client";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./contexts/AuthContext";
import Availability from "./pages/engineer/Availability";
import Timesheet from "./pages/engineer/Timesheet";
import Invoices from "./pages/engineer/Invoices";
import ProjectsMap from "./pages/engineer/ProjectsMap";
import CompanyPolicy from "./pages/engineer/CompanyPolicy";
import ClientEtiquette from "./pages/engineer/ClientEtiquette";
import Messages from "./pages/engineer/Messages";
import Wellbeing from "./pages/engineer/Wellbeing";
import TeamSupport from "./pages/engineer/TeamSupport";
import LeadsMap from "./pages/admin/LeadsMap";
import SettingsPage from "./pages/admin/SettingsPage";
import SEOTracking from "./pages/admin/SEOTracking";
import WebsiteAnalytics from "./pages/admin/WebsiteAnalytics";
import EngineerManagement from "./pages/admin/EngineerManagement";
import ClientOnboarding from "./pages/ClientOnboarding";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/engineer-login" element={<EngineerLogin />} />
          <Route path="/client-login" element={<ClientLogin />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/client-onboarding" element={<ClientOnboarding />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<ProtectedRoute allowedRoles={['admin']}><AdminLayout /></ProtectedRoute>}>
            <Route index element={<Admin />} />
            <Route path="clients" element={<ClientsPage />} />
            <Route path="engineers" element={<EngineerManagement />} />
            <Route path="leads" element={<Admin />} />
            <Route path="map" element={<LeadsMap />} />
            <Route path="analytics" element={<WebsiteAnalytics />} />
            <Route path="seo" element={<SEOTracking />} />
            <Route path="settings" element={<SettingsPage />} />
          </Route>

          {/* Engineer Routes */}
           <Route path="/engineer" element={<ProtectedRoute allowedRoles={['engineer']}><Engineer /></ProtectedRoute>} />
          <Route path="/engineer" element={<ProtectedRoute allowedRoles={['engineer']}><Engineer /></ProtectedRoute>}>
            <Route index element={<Engineer />} />
            <Route path="availability" element={<Availability />} />
            <Route path="timesheet" element={<Timesheet />} />
            <Route path="invoices" element={<Invoices />} />
            <Route path="projects-map" element={<ProjectsMap />} />
            <Route path="company-policy" element={<CompanyPolicy />} />
            <Route path="client-etiquette" element={<ClientEtiquette />} />
            <Route path="messages" element={<Messages />} />
            <Route path="wellbeing" element={<Wellbeing />} />
            <Route path="team-support" element={<TeamSupport />} />
          </Route>

          {/* Client Routes */}
          <Route path="/client" element={<ProtectedRoute allowedRoles={['client']}><Client /></ProtectedRoute>} />

          {/* Not Found Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
