
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from "@/components/ui/button";
import { 
  LogOut, 
  User, 
  Calendar, 
  Settings,
  LayoutDashboard,
  CalendarClock,
} from "lucide-react";
import { useNavigate, useLocation } from 'react-router-dom';

const EngineerDashboardHeader = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Helper function to determine if a path is active
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/a543004b-6dda-4449-b14e-4a9212b75d84.png" 
              alt="London Structural Surveys" 
              className="h-12"
              width="auto"
              height="48"
            />
            <div className="flex flex-col ml-3">
              <h1 className="text-xl font-bold text-[#1A1F2C]">Engineer Dashboard</h1>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 md:space-x-4">
            {/* Project Dashboard Button */}
            <Button 
              variant={isActive('/engineer') ? "default" : "ghost"} 
              size="sm" 
              className="flex items-center" 
              onClick={() => navigate('/engineer')}
            >
              <LayoutDashboard className="mr-2 h-4 w-4" />
              <span className="hidden md:inline">Dashboard</span>
            </Button>

            {/* Schedule Button */}
            <Button 
              variant={isActive('/engineer/schedule') ? "default" : "ghost"} 
              size="sm" 
              className="flex items-center" 
              onClick={() => navigate('/engineer/schedule')}
            >
              <Calendar className="mr-2 h-4 w-4" />
              <span className="hidden md:inline">Schedule</span>
            </Button>
            
            {/* Availability Button */}
            <Button 
              variant={isActive('/engineer/availability') ? "default" : "ghost"} 
              size="sm" 
              className="flex items-center" 
              onClick={() => navigate('/engineer/availability')}
            >
              <CalendarClock className="mr-2 h-4 w-4" />
              <span className="hidden md:inline">Availability</span>
            </Button>

            {/* Profile Button */}
            <Button variant="ghost" size="sm" className="flex items-center">
              <User className="mr-2 h-4 w-4" />
              <span className="hidden md:inline">Profile</span>
            </Button>

            {/* Settings Button */}
            <Button variant="ghost" size="sm" className="flex items-center">
              <Settings className="mr-2 h-4 w-4" />
              <span className="hidden md:inline">Settings</span>
            </Button>
            
            {/* Logout Button */}
            <Button variant="outline" size="sm" onClick={logout} className="flex items-center">
              <LogOut className="mr-2 h-4 w-4" />
              <span className="hidden md:inline">Logout</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default EngineerDashboardHeader;
