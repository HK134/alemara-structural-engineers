
import React from "react";
import { Outlet } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import EngineerSidebar from "@/components/EngineerSidebar";

const EngineerLayout = () => {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <EngineerSidebar />
        <div className="flex-1 overflow-auto">
          <Outlet />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default EngineerLayout;
