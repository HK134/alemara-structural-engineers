
import React from "react";
import { Outlet } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import EngineerSidebar from "@/components/EngineerSidebar";
import { Sparkles } from "lucide-react";

const EngineerLayout = () => {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex min-h-screen w-full">
        <EngineerSidebar />
        <div className="flex-1 overflow-auto">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 py-2">
            <div className="container mx-auto">
              <div className="flex items-center justify-center text-white text-sm px-4">
                <Sparkles className="mr-2 h-4 w-4" />
                <span className="font-medium">Excellence in every calculation, innovation in every design</span>
                <Sparkles className="ml-2 h-4 w-4" />
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
