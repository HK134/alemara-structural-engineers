
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import ProtectedRoute from "@/components/ProtectedRoute";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import ClientLogin from "./pages/ClientLogin";
import EngineerLogin from "./pages/EngineerLogin";
import ClientDashboard from "./pages/ClientDashboard";
import EngineerDashboard from "./pages/EngineerDashboard";
import EngineerMessages from "./pages/EngineerMessages";
import EngineerAvailability from "./pages/EngineerAvailability";
import EngineerTimesheet from "./pages/EngineerTimesheet";
import EngineerInvoices from "./pages/EngineerInvoices";
import EngineerProjectsMap from "./pages/EngineerProjectsMap";
import EngineerCompanyPolicy from "./pages/EngineerCompanyPolicy";
import EngineerClientEtiquette from "./pages/EngineerClientEtiquette";
import EngineerLayout from "./components/EngineerLayout";
import AdminLayout from "./components/AdminLayout";
import ClientLayout from "./components/ClientLayout";
import SEO from "./pages/SEO";
import Analytics from "./pages/Analytics";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<Index />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/admin-login" element={<Login />} />
            <Route path="/client-login" element={<ClientLogin />} />
            <Route path="/engineer-login" element={<EngineerLogin />} />
            <Route path="/login" element={<Navigate to="/client-login" replace />} />
            <Route path="/about" element={<Navigate to="/#why-choose-us" replace />} />
            
            {/* Protected admin routes with sidebar layout */}
            <Route path="/admin" element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }>
              <Route index element={<Admin />} />
              <Route path="seo" element={<SEO />} />
              <Route path="analytics" element={<Analytics />} />
              {/* Additional admin routes can be added here */}
            </Route>
            
            {/* Protected client routes with sidebar layout */}
            <Route path="/client" element={
              <ProtectedRoute>
                <ClientLayout />
              </ProtectedRoute>
            }>
              <Route index element={<ClientDashboard />} />
              {/* Additional client routes can be added here */}
            </Route>
            
            {/* Engineer routes with sidebar layout */}
            <Route path="/engineer" element={
              <ProtectedRoute>
                <EngineerLayout />
              </ProtectedRoute>
            }>
              <Route index element={<EngineerDashboard />} />
              <Route path="messages" element={<EngineerMessages />} />
              <Route path="availability" element={<EngineerAvailability />} />
              <Route path="timesheet" element={<EngineerTimesheet />} />
              <Route path="invoices" element={<EngineerInvoices />} />
              <Route path="projects-map" element={<EngineerProjectsMap />} />
              <Route path="company-policy" element={<EngineerCompanyPolicy />} />
              <Route path="client-etiquette" element={<EngineerClientEtiquette />} />
            </Route>
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
