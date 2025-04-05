import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import EngineerDashboardHeader from '@/components/EngineerDashboardHeader';
import EngineerProjects from '@/components/EngineerProjects';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from '@/contexts/AuthContext';

const EngineerDashboard = () => {
  const { user } = useAuth();
  
  return (
    <div className="container mx-auto p-6">
      <EngineerDashboardHeader />
      
      <div className="grid gap-6 mt-8">
        <EngineerProjects />
        
        {/* Additional dashboard cards and components can be added here */}
      </div>
    </div>
  );
};

export default EngineerDashboard;
