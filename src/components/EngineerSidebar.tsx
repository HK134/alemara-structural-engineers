
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
  SidebarProvider,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { 
  Calendar, 
  Clock, 
  FileText, 
  Home, 
  LogOut, 
  Map, 
  MessageSquare, 
  Settings,
  Book,
  FileCheck
} from "lucide-react";

export const EngineerSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout } = useAuth();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleLogout = async () => {
    await logout();
    navigate("/engineer-login");
  };

  return (
    <Sidebar className="border-r">
      <SidebarHeader className="border-b p-4">
        <div className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/6680eb37-5f4f-4000-abea-88ccf4675de9.png" 
            alt="Alemara Engineering" 
            className="h-8 w-auto"
          />
          <div className="text-lg font-semibold">
            Engineering Portal
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  isActive={isActive("/engineer")} 
                  tooltip="Dashboard"
                  onClick={() => navigate("/engineer")}
                >
                  <Home className="h-5 w-5" />
                  <span>Dashboard</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton 
                  isActive={isActive("/engineer/messages")} 
                  tooltip="Messages"
                  onClick={() => navigate("/engineer/messages")}
                >
                  <MessageSquare className="h-5 w-5" />
                  <span>Messages</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton 
                  isActive={isActive("/engineer/availability")} 
                  tooltip="Availability"
                  onClick={() => navigate("/engineer/availability")}
                >
                  <Calendar className="h-5 w-5" />
                  <span>Availability</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton 
                  isActive={isActive("/engineer/timesheet")} 
                  tooltip="Timesheet"
                  onClick={() => navigate("/engineer/timesheet")}
                >
                  <Clock className="h-5 w-5" />
                  <span>Timesheet</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <SidebarGroup>
          <SidebarGroupLabel>Financial</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  isActive={isActive("/engineer/invoices")} 
                  tooltip="Invoices"
                  onClick={() => navigate("/engineer/invoices")}
                >
                  <FileText className="h-5 w-5" />
                  <span>Invoices</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton 
                  isActive={isActive("/engineer/projects-map")} 
                  tooltip="Projects Map"
                  onClick={() => navigate("/engineer/projects-map")}
                >
                  <Map className="h-5 w-5" />
                  <span>Projects Map</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <SidebarGroup>
          <SidebarGroupLabel>Housekeeping</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  isActive={isActive("/engineer/company-policy")} 
                  tooltip="Company Policy"
                  onClick={() => navigate("/engineer/company-policy")}
                >
                  <FileCheck className="h-5 w-5" />
                  <span>Company Policy</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
              
              <SidebarMenuItem>
                <SidebarMenuButton 
                  isActive={isActive("/engineer/client-etiquette")} 
                  tooltip="Client Etiquette"
                  onClick={() => navigate("/engineer/client-etiquette")}
                >
                  <Book className="h-5 w-5" />
                  <span>Client Etiquette</span>
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
  );
};

export default EngineerSidebar;
