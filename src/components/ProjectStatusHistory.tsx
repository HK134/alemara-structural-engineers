
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getProjectStatusHistory } from '@/utils/db/projectStatus';
import { Spinner } from '@/components/ui/spinner';
import { UserCircle, Clock } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

interface ProjectStatusHistoryProps {
  projectId: string;
}

const ProjectStatusHistory: React.FC<ProjectStatusHistoryProps> = ({ projectId }) => {
  const [statusHistory, setStatusHistory] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStatusHistory = async () => {
      try {
        const result = await getProjectStatusHistory(projectId);
        
        if (!result.success) {
          throw new Error(result.message);
        }
        
        setStatusHistory(result.data || []);
      } catch (error) {
        console.error("Error fetching status history:", error);
        setError("Failed to load status history");
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchStatusHistory();
    
    // Set up real-time subscription
    const channel = supabase
      .channel(`project-status-${projectId}`)
      .on(
        'postgres_changes',
        {
          event: 'INSERT',
          schema: 'public',
          table: 'project_statuses',
          filter: `project_id=eq.${projectId}`
        },
        (payload) => {
          // Add new status update to the history
          setStatusHistory(prevHistory => [payload.new, ...prevHistory]);
        }
      )
      .subscribe();
      
    return () => {
      supabase.removeChannel(channel);
    };
  }, [projectId]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', { 
      day: '2-digit', 
      month: 'short', 
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Status History</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center p-6">
          <Spinner />
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Status History</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-center text-red-500">{error}</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Status History</CardTitle>
      </CardHeader>
      <CardContent>
        {statusHistory.length === 0 ? (
          <p className="text-center text-gray-500 py-4">No status updates yet</p>
        ) : (
          <div className="space-y-4">
            {statusHistory.map((update, index) => (
              <div 
                key={update.id} 
                className="relative pl-6 pb-4"
              >
                {index < statusHistory.length - 1 && (
                  <div className="absolute left-3 top-3 bottom-0 w-0.5 bg-gray-200" />
                )}
                <div className="absolute left-0 top-3 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-blue-500" />
                </div>
                <div className="bg-gray-50 rounded-lg p-3">
                  <div className="flex justify-between items-start mb-2">
                    <div className="font-medium capitalize">{update.status}</div>
                    <div className="text-xs text-gray-500 flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {formatDate(update.updated_at)}
                    </div>
                  </div>
                  
                  <div className="text-sm mb-2">
                    {update.stage && (
                      <div className="mb-1">
                        <span className="font-medium">Stage:</span> {update.stage}
                      </div>
                    )}
                  </div>
                  
                  {update.notes && (
                    <div className="bg-white p-2 rounded border text-sm mt-2">
                      {update.notes}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ProjectStatusHistory;
