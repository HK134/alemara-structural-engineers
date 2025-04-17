
import React from 'react';
import { Link } from 'react-router-dom';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { BarChart, Filter, LineChart, Map, User } from 'lucide-react';

interface AdminViewTabsProps {
  viewMode: 'leads' | 'map' | 'engineers' | 'seo' | 'analytics';
  onViewChange: (view: 'leads' | 'map' | 'engineers' | 'seo' | 'analytics') => void;
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
        <TabsTrigger value="map" className="flex items-center gap-2">
          <Map size={16} />
          Map
        </TabsTrigger>
        <TabsTrigger value="engineers" className="flex items-center gap-2">
          <User size={16} />
          Engineers
        </TabsTrigger>
        <TabsTrigger value="seo" className="flex items-center gap-2">
          <BarChart size={16} />
          SEO
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
