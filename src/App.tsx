
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminLayout from "./components/AdminLayout";
import Admin from "./pages/Admin";
import ClientsPage from "./pages/ClientsPage";
import LeadsPage from "./pages/LeadsPage";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Index from "./pages/Index";
import Login from "./pages/Login";
import ClientLogin from "./pages/ClientLogin";
import EngineerLogin from "./pages/EngineerLogin";
import ClientLayout from "./components/ClientLayout";
import ClientDashboard from "./pages/ClientDashboard";
import EngineerLayout from "./components/EngineerLayout";
import EngineerDashboard from "./pages/EngineerDashboard";
import NotFound from "./pages/NotFound";
import LiveProjectsPage from "./pages/LiveProjectsPage";
import AdminProjectWhiteboard from "./pages/AdminProjectWhiteboard";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <AuthProvider>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/client-login" element={<ClientLogin />} />
            <Route path="/engineer-login" element={<EngineerLogin />} />
            
            {/* Admin Routes */}
            <Route path="/admin" element={<ProtectedRoute allowedRoles={['admin']}><AdminLayout /></ProtectedRoute>}>
              <Route index element={<Admin />} />
              <Route path="leads" element={<LeadsPage />} />
              <Route path="clients" element={<ClientsPage />} />
              <Route path="live-projects" element={<LiveProjectsPage />} />
              <Route path="project/:projectId/whiteboard" element={<AdminProjectWhiteboard />} />
            </Route>

            {/* Client Routes */}
            <Route path="/client" element={<ProtectedRoute allowedRoles={['client']}><ClientLayout /></ProtectedRoute>}>
              <Route index element={<ClientDashboard />} />
              {/* Additional client routes can be added here */}
            </Route>

            {/* Engineer Routes */}
            <Route path="/engineer" element={<ProtectedRoute allowedRoles={['engineer']}><EngineerLayout /></ProtectedRoute>}>
              <Route index element={<EngineerDashboard />} />
              {/* Additional engineer routes can be added here */}
            </Route>

            {/* Not Found Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
