
import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from "@/components/ui/button";
import { 
  LogOut, 
  User, 
  Calendar, 
  FileText, 
  Settings,
  LayoutDashboard,
  MessageSquare
} from "lucide-react";
import { useNavigate } from 'react-router-dom';

const EngineerDashboardHeader = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-[#1A1F2C]">Engineer Dashboard</h1>
          </div>
          
          <div className="flex items-center space-x-2 md:space-x-4">
            {/* Project Dashboard Button */}
            <Button variant="ghost" size="sm" className="flex items-center" onClick={() => navigate('/engineer')}>
              <LayoutDashboard className="mr-2 h-4 w-4" />
              <span className="hidden md:inline">Dashboard</span>
            </Button>

            {/* Reports Button */}
            <Button variant="ghost" size="sm" className="flex items-center" onClick={() => navigate('/engineer/reports')}>
              <FileText className="mr-2 h-4 w-4" />
              <span className="hidden md:inline">Reports</span>
            </Button>

            {/* Schedule Button */}
            <Button variant="ghost" size="sm" className="flex items-center" onClick={() => navigate('/engineer/schedule')}>
              <Calendar className="mr-2 h-4 w-4" />
              <span className="hidden md:inline">Schedule</span>
            </Button>

            {/* Messages Button */}
            <Button variant="ghost" size="sm" className="flex items-center" onClick={() => navigate('/engineer/messages')}>
              <MessageSquare className="mr-2 h-4 w-4" />
              <span className="hidden md:inline">Messages</span>
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
