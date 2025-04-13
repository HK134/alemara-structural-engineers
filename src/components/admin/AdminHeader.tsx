import React from 'react';
import { Button } from "@/components/ui/button";
import { RefreshCcw, LogOut, DatabaseBackup, Database, Plus, FileSpreadsheet, Trash2 } from 'lucide-react';
import { 
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { deleteAllSubmissions } from '@/utils/db/deletion';
import { toast } from 'sonner';

interface AdminHeaderProps {
  title: string;
  onLogout: () => void;
  onRefresh: () => void;
  onCreateTestSubmission: () => void;
  viewMode: 'leads' | 'map' | 'engineers' | 'seo' | 'analytics';
  onViewChange: (mode: 'leads' | 'map' | 'engineers' | 'seo' | 'analytics') => void;
}

const AdminHeader: React.FC<AdminHeaderProps> = ({ 
  title, 
  onLogout, 
  onRefresh, 
  onCreateTestSubmission, 
  viewMode, 
  onViewChange 
}) => {
  const handleDeleteAllSubmissions = async () => {
    try {
      const result = await deleteAllSubmissions();
      
      if (!result.success) {
        throw new Error(result.message);
      }
      
      toast.success('All leads deleted successfully');
      onRefresh();
    } catch (error) {
      console.error('Error deleting all submissions:', error);
      toast.error('Failed to delete all leads');
    }
  };

  return (
    <div className="mb-8">
      <div className="flex flex-wrap justify-between items-center gap-4 mb-6">
        <h1 className="text-3xl font-bold text-slate-800">{title}</h1>
        
        <div className="flex flex-wrap gap-2">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={onRefresh}
            className="flex items-center gap-1.5"
          >
            <RefreshCcw size={14} />
            <span>Refresh</span>
          </Button>
          
          <Button 
            variant="outline" 
            size="sm" 
            onClick={onCreateTestSubmission}
            className="flex items-center gap-1.5"
          >
            <Plus size={14} />
            <span>Test Lead</span>
          </Button>
          
          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button 
                variant="outline" 
                size="sm"
                className="flex items-center gap-1.5 text-red-500 border-red-200 hover:bg-red-50 hover:text-red-600"
              >
                <Trash2 size={14} />
                <span>Delete All</span>
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Delete All Leads</AlertDialogTitle>
                <AlertDialogDescription>
                  Are you sure you want to delete all leads? This action cannot be undone.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction 
                  onClick={handleDeleteAllSubmissions}
                  className="bg-red-500 text-white hover:bg-red-600"
                >
                  Delete All
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
          
          <Button 
            variant="destructive" 
            size="sm" 
            onClick={onLogout}
            className="flex items-center gap-1.5"
          >
            <LogOut size={14} />
            <span>Logout</span>
          </Button>
        </div>
      </div>
      
      <div className="flex flex-wrap gap-2 mb-2">
        <Button 
          variant={viewMode === 'leads' ? 'default' : 'outline'} 
          size="sm"
          onClick={() => onViewChange('leads')}
          className="flex items-center gap-1.5"
        >
          <Database size={14} />
          <span>Leads</span>
        </Button>
        
        <Button 
          variant={viewMode === 'map' ? 'default' : 'outline'} 
          size="sm"
          onClick={() => onViewChange('map')}
          className="flex items-center gap-1.5"
        >
          <FileSpreadsheet size={14} />
          <span>Map</span>
        </Button>
        
        <Button 
          variant={viewMode === 'engineers' ? 'default' : 'outline'} 
          size="sm"
          onClick={() => onViewChange('engineers')}
          className="flex items-center gap-1.5"
        >
          <DatabaseBackup size={14} />
          <span>Engineers</span>
        </Button>
        
        <Button 
          variant={viewMode === 'analytics' ? 'default' : 'outline'} 
          size="sm"
          onClick={() => onViewChange('analytics')}
          className="flex items-center gap-1.5"
        >
          <DatabaseBackup size={14} />
          <span>Analytics</span>
        </Button>
        
        <Button 
          variant={viewMode === 'seo' ? 'default' : 'outline'} 
          size="sm"
          onClick={() => onViewChange('seo')}
          className="flex items-center gap-1.5"
        >
          <DatabaseBackup size={14} />
          <span>SEO</span>
        </Button>
      </div>
    </div>
  );
};

export default AdminHeader;
