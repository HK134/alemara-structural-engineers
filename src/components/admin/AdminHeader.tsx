
import React from 'react';
import { Button } from "@/components/ui/button";
import { 
  RefreshCw, 
  LogOut, 
  PlusCircle, 
  LayoutDashboard, 
  Map, 
  Users,
  LineChart,
  Search,
  Zap
} from 'lucide-react';
import { setupAlexEngineer } from '@/utils/engineerSetup';
import { toast } from 'sonner';

interface AdminHeaderProps {
  title: string;
  onLogout: () => void;
  onRefresh: () => void;
  onCreateTestSubmission: () => void;
  viewMode: string;
  onViewChange: (mode: 'leads' | 'map' | 'engineers' | 'seo' | 'analytics') => void;
}

const AdminHeader = ({
  title,
  onLogout,
  onRefresh,
  onCreateTestSubmission,
  viewMode,
  onViewChange
}: AdminHeaderProps) => {
  
  const handleSetupAlex = async () => {
    toast.loading('Setting up engineer: Alex...');
    const result = await setupAlexEngineer();
    
    if (result.success) {
      toast.success(`${result.message}. Email: ${result.credentials.email}, Password: ${result.credentials.password}`);
    } else {
      toast.error(result.message);
    }
  };
  
  return (
    <div className="mb-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h1 className="text-2xl font-bold text-slate-800">{title}</h1>
        
        <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
          <Button 
            variant="outline" 
            size="sm"
            onClick={onRefresh}
            className="flex items-center"
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Refresh
          </Button>
          
          <Button 
            variant="outline" 
            size="sm"
            onClick={onCreateTestSubmission}
            className="flex items-center"
          >
            <PlusCircle className="mr-2 h-4 w-4" />
            Create Test Lead
          </Button>
          
          <Button 
            variant="outline" 
            size="sm"
            onClick={handleSetupAlex}
            className="flex items-center"
          >
            <Zap className="mr-2 h-4 w-4" />
            Setup Alex Engineer
          </Button>
          
          <Button 
            variant="destructive" 
            size="sm"
            onClick={onLogout}
            className="flex items-center"
          >
            <LogOut className="mr-2 h-4 w-4" />
            Sign Out
          </Button>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-6">
        <Button 
          variant={viewMode === 'leads' ? "default" : "outline"}
          size="sm"
          onClick={() => onViewChange('leads')}
          className="flex items-center"
        >
          <LayoutDashboard className="mr-2 h-4 w-4" />
          Leads
        </Button>
        
        <Button 
          variant={viewMode === 'map' ? "default" : "outline"}
          size="sm"
          onClick={() => onViewChange('map')}
          className="flex items-center"
        >
          <Map className="mr-2 h-4 w-4" />
          Lead Map
        </Button>
        
        <Button 
          variant={viewMode === 'engineers' ? "default" : "outline"}
          size="sm"
          onClick={() => onViewChange('engineers')}
          className="flex items-center"
        >
          <Users className="mr-2 h-4 w-4" />
          Engineers
        </Button>
        
        <Button 
          variant={viewMode === 'analytics' ? "default" : "outline"}
          size="sm"
          onClick={() => onViewChange('analytics')}
          className="flex items-center"
        >
          <LineChart className="mr-2 h-4 w-4" />
          Analytics
        </Button>
        
        <Button 
          variant={viewMode === 'seo' ? "default" : "outline"}
          size="sm"
          onClick={() => onViewChange('seo')}
          className="flex items-center"
        >
          <Search className="mr-2 h-4 w-4" />
          SEO
        </Button>
      </div>
    </div>
  );
};

export default AdminHeader;
