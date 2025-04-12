
import React, { useState } from 'react';
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
  Zap,
  UserPlus
} from 'lucide-react';
import { setupEngineer } from '@/utils/engineerSetup';
import { toast } from 'sonner';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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
  // Engineer dialog state
  const [engineerName, setEngineerName] = useState('');
  const [engineerEmail, setEngineerEmail] = useState('');
  const [engineerPassword, setEngineerPassword] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSetupEngineer = async () => {
    if (!engineerName || !engineerEmail || !engineerPassword) {
      toast.error('Please fill in all engineer details');
      return;
    }
    
    setIsLoading(true);
    toast.loading(`Setting up engineer: ${engineerName}...`);
    
    const result = await setupEngineer({
      name: engineerName,
      email: engineerEmail,
      password: engineerPassword
    });
    
    setIsLoading(false);
    
    if (result.success) {
      toast.success(`${result.message}. Email: ${result.credentials.email}, Password: ${result.credentials.password}`);
      setIsDialogOpen(false);
      // Reset form
      setEngineerName('');
      setEngineerEmail('');
      setEngineerPassword('');
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
          
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button 
                variant="outline" 
                size="sm"
                className="flex items-center"
              >
                <UserPlus className="mr-2 h-4 w-4" />
                Setup Engineer
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Set up a new engineer</DialogTitle>
                <DialogDescription>
                  Create an engineer account with database entry and authentication.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    value={engineerName}
                    onChange={(e) => setEngineerName(e.target.value)}
                    className="col-span-3"
                    placeholder="Engineer's name"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="email" className="text-right">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={engineerEmail}
                    onChange={(e) => setEngineerEmail(e.target.value)}
                    className="col-span-3"
                    placeholder="engineer@example.com"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="password" className="text-right">
                    Password
                  </Label>
                  <Input
                    id="password"
                    type="password"
                    value={engineerPassword}
                    onChange={(e) => setEngineerPassword(e.target.value)}
                    className="col-span-3"
                    placeholder="Strong password"
                  />
                </div>
              </div>
              <DialogFooter>
                <Button
                  type="submit"
                  onClick={handleSetupEngineer}
                  disabled={isLoading}
                >
                  {isLoading ? 'Setting up...' : 'Set up Engineer'}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          
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
