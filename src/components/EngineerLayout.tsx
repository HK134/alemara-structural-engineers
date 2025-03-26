
import React from "react";
import { Outlet } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import EngineerSidebar from "@/components/EngineerSidebar";

const EngineerLayout = () => {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen w-full">
        <EngineerSidebar />
        <div className="flex-1 overflow-auto">
          <div className="bg-[#ea384c] py-1">
            <div className="container mx-auto">
              <div className="flex items-center justify-center text-white text-xs px-4">
                <span>London's trusted structural engineering experts - ready to help you with your project</span>
              </div>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </SidebarProvider>
  );
};

export default EngineerLayout;
