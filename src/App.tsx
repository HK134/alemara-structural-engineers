
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import StructuralSurveysService from "./pages/StructuralSurveysService";
import Login from "./pages/Login";
import EngineerLogin from "./pages/EngineerLogin";
import ClientLogin from "./pages/ClientLogin";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import AboutUs from "./pages/AboutUs";
import EngineerLayout from "./components/EngineerLayout";
import EngineerDashboard from "./pages/EngineerDashboard";
import EngineerTimesheet from "./pages/EngineerTimesheet";
import EngineerMessages from "./pages/EngineerMessages";
import EngineerProjectsMap from "./pages/EngineerProjectsMap";
import EngineerInvoices from "./pages/EngineerInvoices";
import EngineerAvailability from "./pages/EngineerAvailability";
import EngineerCompanyPolicy from "./pages/EngineerCompanyPolicy";
import EngineerClientEtiquette from "./pages/EngineerClientEtiquette";
import ClientDashboard from "./pages/ClientDashboard";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/structural-surveys" element={<StructuralSurveysService />} />
        <Route path="/login" element={<Login />} />
        <Route path="/engineer-login" element={<EngineerLogin />} />
        <Route path="/client-login" element={<ClientLogin />} />
        <Route path="/admin" element={<ProtectedRoute><Index /></ProtectedRoute>} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/about-us" element={<AboutUs />} />
        
        {/* Engineer Portal Routes */}
        <Route path="/engineer" element={<EngineerLayout />}>
          <Route index element={<ProtectedRoute><EngineerDashboard /></ProtectedRoute>} />
          <Route path="timesheet" element={<ProtectedRoute><EngineerTimesheet /></ProtectedRoute>} />
          <Route path="messages" element={<ProtectedRoute><EngineerMessages /></ProtectedRoute>} />
          <Route path="projects-map" element={<ProtectedRoute><EngineerProjectsMap /></ProtectedRoute>} />
          <Route path="invoices" element={<ProtectedRoute><EngineerInvoices /></ProtectedRoute>} />
          <Route path="availability" element={<ProtectedRoute><EngineerAvailability /></ProtectedRoute>} />
          <Route path="company-policy" element={<ProtectedRoute><EngineerCompanyPolicy /></ProtectedRoute>} />
          <Route path="client-etiquette" element={<ProtectedRoute><EngineerClientEtiquette /></ProtectedRoute>} />
        </Route>
        
        {/* Client Portal Routes */}
        <Route path="/client" element={<ProtectedRoute><ClientDashboard /></ProtectedRoute>} />
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
