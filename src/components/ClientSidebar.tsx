
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { 
  LayoutDashboard, 
  LogOut, 
  Calendar, 
  FileText, 
  HelpCircle,
  MessageSquare,
  Wrench,
  UserCircle,
  Home
} from "lucide-react";

export const ClientSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useAuth();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleLogout = async () => {
    await logout();
    navigate("/"); // Navigate to home page after logout
  };

  return (
    <>
      <Sidebar className="border-r">
        <SidebarRail />
        <SidebarHeader className="border-b p-4">
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/a543004b-6dda-4449-b14e-4a9212b75d84.png" 
              alt="London Structural Surveys" 
              className="h-8 w-auto"
            />
            <div className="text-lg font-semibold">
              Client Portal
            </div>
            <SidebarTrigger />
          </div>
        </SidebarHeader>
        
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Main</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton 
                    isActive={isActive("/client")} 
                    tooltip="Dashboard"
                    onClick={() => navigate("/client")}
                  >
                    <LayoutDashboard className="h-5 w-5" />
                    <span>Dashboard</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                
                <SidebarMenuItem>
                  <SidebarMenuButton 
                    isActive={isActive("/client/appointments")} 
                    tooltip="Appointments"
                    onClick={() => navigate("/client/appointments")}
                  >
                    <Calendar className="h-5 w-5" />
                    <span>Appointments</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                
                <SidebarMenuItem>
                  <SidebarMenuButton 
                    isActive={isActive("/client/reports")} 
                    tooltip="Reports"
                    onClick={() => navigate("/client/reports")}
                  >
                    <FileText className="h-5 w-5" />
                    <span>Reports</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          
          <SidebarGroup>
            <SidebarGroupLabel>Services</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton 
                    isActive={isActive("/client/contractors")} 
                    tooltip="Contractors"
                    onClick={() => navigate("/client/contractors")}
                  >
                    <Wrench className="h-5 w-5" />
                    <span>Request Contractor</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                
                <SidebarMenuItem>
                  <SidebarMenuButton 
                    isActive={isActive("/client/messages")} 
                    tooltip="Messages"
                    onClick={() => navigate("/client/messages")}
                  >
                    <MessageSquare className="h-5 w-5" />
                    <span>Messages</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          
          <SidebarGroup>
            <SidebarGroupLabel>Account</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton 
                    isActive={isActive("/client/profile")} 
                    tooltip="Profile"
                    onClick={() => navigate("/client/profile")}
                  >
                    <UserCircle className="h-5 w-5" />
                    <span>Profile</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton 
                    isActive={isActive("/client/help")} 
                    tooltip="Help"
                    onClick={() => navigate("/client/help")}
                  >
                    <HelpCircle className="h-5 w-5" />
                    <span>Help & Support</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton 
                    tooltip="Go to Website"
                    onClick={() => navigate("/")}
                  >
                    <Home className="h-5 w-5" />
                    <span>Back to Main Site</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        
        <SidebarFooter className="border-t p-4">
          <Button 
            variant="outline" 
            className="w-full justify-start" 
            onClick={handleLogout}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Sign Out
          </Button>
        </SidebarFooter>
      </Sidebar>
    </>
  );
};

export default ClientSidebar;
