
import React from 'react';
import { Button } from "@/components/ui/button";
import { LogOut } from 'lucide-react';
import AdminViewTabs from './AdminViewTabs';

interface AdminHeaderProps {
  title: string;
  onLogout: () => void;
  onRefresh: () => void;
  onCreateTestSubmission: () => void;
  viewMode: 'leads' | 'map' | 'engineers' | 'seo' | 'analytics';
  onViewChange: (view: 'leads' | 'map' | 'engineers' | 'seo' | 'analytics') => void;
}

const AdminHeader: React.FC<AdminHeaderProps> = ({
  title,
  onLogout,
  onRefresh,
  onCreateTestSubmission,
  viewMode,
  onViewChange
}) => {
  return (
    <div className="flex justify-between items-center mb-8">
      <h1 className="text-3xl font-bold">{title}</h1>
      <div className="flex items-center gap-3">
        <Button 
          variant="outline" 
          onClick={onRefresh}
          className="mr-2"
        >
          Refresh Data
        </Button>
        <Button 
          variant="outline" 
          onClick={onCreateTestSubmission} 
          className="mr-2"
        >
          Create Test Submission
        </Button>
        <AdminViewTabs 
          viewMode={viewMode} 
          onViewChange={onViewChange} 
        />
        <Button 
          variant="outline" 
          onClick={onLogout}
          className="flex items-center gap-2"
        >
          <LogOut size={16} />
          Logout
        </Button>
      </div>
    </div>
  );
};

export default AdminHeader;
