
import React from 'react';
import { Link } from 'react-router-dom';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { BarChart, Filter, LineChart, User } from 'lucide-react';

interface AdminViewTabsProps {
  viewMode: 'leads' | 'engineers' | 'analytics';
  onViewChange: (view: 'leads' | 'engineers' | 'analytics') => void;
}

const AdminViewTabs: React.FC<AdminViewTabsProps> = ({ 
  viewMode, 
  onViewChange 
}) => {
  return (
    <Tabs value={viewMode} onValueChange={(value) => onViewChange(value as any)} className="mr-4">
      <TabsList>
        <TabsTrigger value="leads" className="flex items-center gap-2">
          <Filter size={16} />
          Leads
        </TabsTrigger>
        <TabsTrigger value="engineers" className="flex items-center gap-2">
          <User size={16} />
          Engineers
        </TabsTrigger>
        <TabsTrigger value="analytics" className="flex items-center gap-2">
          <LineChart size={16} />
          Analytics
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default AdminViewTabs;
