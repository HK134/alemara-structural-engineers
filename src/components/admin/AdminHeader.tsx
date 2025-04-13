
import React from 'react';
import { Button } from "@/components/ui/button";
import ClientOnboardingLinkGenerator from './ClientOnboardingLinkGenerator';
import { 
  RefreshCw, 
  LogOut, 
  Database, 
  LayoutDashboard, 
  Users, 
  BarChart3,
  UserPlus 
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { setupMakramEngineer } from '@/utils/engineerSetup';
import { toast } from 'sonner';

interface AdminHeaderProps {
  title: string;
  onLogout: () => void;
  onRefresh: () => void;
  onCreateTestSubmission: () => Promise<void>;
  viewMode: 'leads' | 'engineers' | 'analytics';
  onViewChange: (view: 'leads' | 'engineers' | 'analytics') => void;
}

const AdminHeader: React.FC<AdminHeaderProps> = ({ 
  title, 
  onLogout, 
  onRefresh, 
  onCreateTestSubmission,
  viewMode,
  onViewChange
}) => {
  const [creatingEngineer, setCreatingEngineer] = React.useState(false);

  const handleCreateMakramEngineer = async () => {
    try {
      setCreatingEngineer(true);
      const result = await setupMakramEngineer();
      
      if (result.success) {
        toast.success(result.message);
        if (result.credentials?.password) {
          toast.info(`Generated password: ${result.credentials.password}`, {
            duration: 10000
          });
        }
      } else {
        toast.error(result.message);
      }
    } catch (error) {
      console.error('Error creating Makram engineer:', error);
      toast.error('Failed to create engineer');
    } finally {
      setCreatingEngineer(false);
    }
  };
  
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl sm:text-3xl font-bold">{title}</h1>
        
        <div className="flex items-center space-x-2">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onRefresh} 
            className="hidden sm:flex items-center"
            title="Refresh Data"
          >
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
          
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={onCreateTestSubmission} 
            className="hidden sm:flex items-center"
            title="Create Test Submission"
          >
            <Database className="h-4 w-4 mr-2" />
            Test Data
          </Button>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={handleCreateMakramEngineer}
            className="hidden sm:flex items-center"
            title="Create Makram Engineer Account"
            disabled={creatingEngineer}
          >
            <UserPlus className="h-4 w-4 mr-2" />
            {creatingEngineer ? 'Creating...' : 'Create Makram'}
          </Button>
          
          <Button 
            variant="ghost" 
            onClick={onLogout} 
            size="sm"
            className="text-red-500 hover:text-red-700 hover:bg-red-100"
            title="Log Out"
          >
            <LogOut className="h-4 w-4" />
          </Button>
        </div>
      </div>
      
      <div className="mb-6">
        <Tabs
          value={viewMode}
          onValueChange={(value) => onViewChange(value as 'leads' | 'engineers' | 'analytics')}
        >
          <TabsList className="grid w-full max-w-md grid-cols-3">
            <TabsTrigger value="leads" className="flex items-center justify-center">
              <LayoutDashboard className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Leads</span>
            </TabsTrigger>
            <TabsTrigger value="engineers" className="flex items-center justify-center">
              <Users className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Engineers</span>
            </TabsTrigger>
            <TabsTrigger value="analytics" className="flex items-center justify-center">
              <BarChart3 className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Analytics</span>
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      
      {viewMode === 'leads' && (
        <div className="mb-6">
          <ClientOnboardingLinkGenerator />
        </div>
      )}
    </div>
  );
};

export default AdminHeader;
