
import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import AdminSidebar from "@/components/AdminSidebar";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const AdminLayout = () => {
  const [analyticsId, setAnalyticsId] = useState<string | null>(null);

  useEffect(() => {
    // Get the analytics ID from localStorage
    const storedAnalyticsId = localStorage.getItem("google_analytics_id");
    if (storedAnalyticsId) {
      setAnalyticsId(storedAnalyticsId);
    }
  }, []);

  return (
    <SidebarProvider defaultOpen={true}>
      {analyticsId && <GoogleAnalytics measurementId={analyticsId} />}
      <div className="flex min-h-screen w-full">
        <AdminSidebar />
        <div className="flex-1 overflow-auto">
          <div className="bg-[#ea384c] py-1">
            <div className="container mx-auto">
              <div className="flex items-center justify-center text-white text-xs px-4">
                <span>London's trusted structural engineering experts - Admin Portal</span>
              </div>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default AdminLayout;
