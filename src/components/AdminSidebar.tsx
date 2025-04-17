
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
  Users, 
  FileText, 
  Map, 
  Settings,
  Search,
  BarChart,
  LineChart,
  Home,
  UserCog
} from "lucide-react";

export const AdminSidebar = () => {
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
              src="/lovable-uploads/6680eb37-5f4f-4000-abea-88ccf4675de9.png" 
              alt="Alemara Engineering" 
              className="h-8 w-auto"
            />
            <div className="text-lg font-semibold">
              Admin Portal
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
                    isActive={isActive("/admin")} 
                    tooltip="Dashboard"
                    onClick={() => navigate("/admin")}
                  >
                    <LayoutDashboard className="h-5 w-5" />
                    <span>Dashboard</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                
                <SidebarMenuItem>
                  <SidebarMenuButton 
                    isActive={isActive("/admin/engineers")} 
                    tooltip="Engineer Management"
                    onClick={() => navigate("/admin/engineers")}
                  >
                    <UserCog className="h-5 w-5" />
                    <span>Engineers</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                
                <SidebarMenuItem>
                  <SidebarMenuButton 
                    isActive={isActive("/admin/users")} 
                    tooltip="Users"
                    onClick={() => navigate("/admin/users")}
                  >
                    <Users className="h-5 w-5" />
                    <span>Users</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                
                <SidebarMenuItem>
                  <SidebarMenuButton 
                    isActive={isActive("/admin/leads")} 
                    tooltip="Leads"
                    onClick={() => navigate("/admin/leads")}
                  >
                    <FileText className="h-5 w-5" />
                    <span>Leads</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          
          <SidebarGroup>
            <SidebarGroupLabel>Analytics</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton 
                    isActive={isActive("/admin/map")} 
                    tooltip="Leads Map"
                    onClick={() => navigate("/admin/map")}
                  >
                    <Map className="h-5 w-5" />
                    <span>Leads Map</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>

                <SidebarMenuItem>
                  <SidebarMenuButton 
                    isActive={isActive("/admin/analytics")} 
                    tooltip="Website Analytics"
                    onClick={() => navigate("/admin/analytics")}
                  >
                    <LineChart className="h-5 w-5" />
                    <span>Website Analytics</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                
                <SidebarMenuItem>
                  <SidebarMenuButton 
                    isActive={isActive("/admin/seo")} 
                    tooltip="SEO Tracking"
                    onClick={() => navigate("/admin/seo")}
                  >
                    <Search className="h-5 w-5" />
                    <span>SEO Tracking</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          
          <SidebarGroup>
            <SidebarGroupLabel>System</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton 
                    isActive={isActive("/admin/settings")} 
                    tooltip="Settings"
                    onClick={() => navigate("/admin/settings")}
                  >
                    <Settings className="h-5 w-5" />
                    <span>Settings</span>
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

export default AdminSidebar;
