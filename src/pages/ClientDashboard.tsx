
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import ClientDashboardHeader from '@/components/ClientDashboardHeader';
import ClientProjects from '@/components/ClientProjects';
import { useAuth } from '@/contexts/AuthContext';
import { CalendarDays, FileText, MessageSquare, HelpCircle, User } from 'lucide-react';

const ClientDashboard = () => {
  const { userName } = useAuth();
  
  return (
    <div className="container mx-auto p-6">
      <ClientDashboardHeader />
      
      <div className="mt-8 grid grid-cols-1 gap-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="col-span-1 md:col-span-2">
            <CardHeader className="pb-3">
              <CardTitle className="text-2xl">Welcome back, {userName || 'Client'}</CardTitle>
              <CardDescription>
                Track your structural engineering projects and stay updated on their progress
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="bg-blue-50">
                  <CardContent className="pt-6">
                    <div className="flex items-center space-x-2">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <FileText className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Reports</p>
                        <p className="text-xl font-bold">2</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-emerald-50">
                  <CardContent className="pt-6">
                    <div className="flex items-center space-x-2">
                      <div className="bg-emerald-100 p-2 rounded-full">
                        <CalendarDays className="h-6 w-6 text-emerald-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Meetings</p>
                        <p className="text-xl font-bold">1</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="bg-amber-50">
                  <CardContent className="pt-6">
                    <div className="flex items-center space-x-2">
                      <div className="bg-amber-100 p-2 rounded-full">
                        <MessageSquare className="h-6 w-6 text-amber-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Messages</p>
                        <p className="text-xl font-bold">3</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Your Account</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center space-x-2 border rounded-lg p-4">
                <User className="h-5 w-5 text-blue-500" />
                <div>
                  <p className="text-sm font-medium">Profile</p>
                  <p className="text-xs text-muted-foreground">Manage your personal details</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 border rounded-lg p-4">
                <CalendarDays className="h-5 w-5 text-emerald-500" />
                <div>
                  <p className="text-sm font-medium">Appointments</p>
                  <p className="text-xs text-muted-foreground">Schedule site visits and meetings</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2 border rounded-lg p-4">
                <HelpCircle className="h-5 w-5 text-amber-500" />
                <div>
                  <p className="text-sm font-medium">Support</p>
                  <p className="text-xs text-muted-foreground">Get help with your projects</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <ClientProjects />
      </div>
    </div>
  );
};

export default ClientDashboard;
