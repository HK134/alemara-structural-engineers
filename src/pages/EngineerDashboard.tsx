
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import EngineerDashboardHeader from '@/components/EngineerDashboardHeader';
import EngineerProjects from '@/components/EngineerProjects';
import EngineerPasswordChange from '@/components/EngineerPasswordChange';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from '@/contexts/AuthContext';
import { LockKeyhole, ClipboardList, UserCircle } from 'lucide-react';

const EngineerDashboard = () => {
  const { userRole, userName } = useAuth();
  const [activeTab, setActiveTab] = useState('projects');
  
  return (
    <div className="container mx-auto p-6">
      <EngineerDashboardHeader />
      
      <div className="mt-8">
        <Tabs 
          value={activeTab} 
          onValueChange={setActiveTab}
          className="w-full"
        >
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="projects" className="flex items-center gap-2">
              <ClipboardList className="h-4 w-4" />
              <span>My Projects</span>
            </TabsTrigger>
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <UserCircle className="h-4 w-4" />
              <span>Profile</span>
            </TabsTrigger>
            <TabsTrigger value="password" className="flex items-center gap-2">
              <LockKeyhole className="h-4 w-4" />
              <span>Password</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="projects">
            <EngineerProjects />
          </TabsContent>
          
          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Engineer Profile</CardTitle>
                <CardDescription>Your profile information</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-gray-500">Name</p>
                    <p className="text-lg">{userName || 'Not available'}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">Role</p>
                    <p className="text-lg capitalize">{userRole || 'Not available'}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="password">
            <EngineerPasswordChange />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default EngineerDashboard;
