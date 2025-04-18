
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ProjectStage, updateProjectStatus } from '@/utils/db/projectStatus';
import { useToast } from "@/hooks/use-toast";
import { ProjectStatus } from '@/components/ProjectStatus';

interface ProjectStatusUpdateProps {
  projectId: string;
  currentStatus: string;
  currentStage?: ProjectStage;
  readOnly?: boolean;
  onStatusUpdated?: () => void;
}

const ProjectStatusUpdate: React.FC<ProjectStatusUpdateProps> = ({
  projectId,
  currentStatus,
  currentStage,
  readOnly = false,
  onStatusUpdated
}) => {
  const [status, setStatus] = useState(currentStatus || 'new');
  const [stage, setStage] = useState<ProjectStage | undefined>(currentStage);
  const [notes, setNotes] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleUpdateStatus = async () => {
    if (!status) return;
    
    setIsLoading(true);
    
    try {
      const result = await updateProjectStatus(
        projectId,
        status,
        stage,
        notes
      );
      
      if (!result.success) {
        throw new Error(result.message);
      }
      
      toast({
        title: "Status updated",
        description: "Project status has been updated successfully"
      });
      
      // Clear notes after successful update
      setNotes('');
      
      // Call the callback if provided
      if (onStatusUpdated) {
        onStatusUpdated();
      }
    } catch (error) {
      console.error("Error updating status:", error);
      toast({
        title: "Error",
        description: "Failed to update project status",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (readOnly) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Project Status</CardTitle>
        </CardHeader>
        <CardContent>
          <ProjectStatus status={currentStatus} stage={currentStage} size="lg" />
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Update Project Status</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Status</label>
              <Select
                value={status}
                onValueChange={setStatus}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="new">New</SelectItem>
                  <SelectItem value="contacted">Contacted</SelectItem>
                  <SelectItem value="live">Live</SelectItem>
                  <SelectItem value="in progress">In Progress</SelectItem>
                  <SelectItem value="awaiting info">Awaiting Info</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="closed">Closed</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="text-sm font-medium mb-2 block">Stage</label>
              <Select
                value={stage}
                onValueChange={(value) => setStage(value as ProjectStage)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select stage" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Site Visit">Site Visit</SelectItem>
                  <SelectItem value="Schematic Submission">Schematic Submission</SelectItem>
                  <SelectItem value="Final Package">Final Package</SelectItem>
                  <SelectItem value="Completed">Completed</SelectItem>
                  <SelectItem value="Awaiting Info">Awaiting Info</SelectItem>
                  <SelectItem value="In Progress">In Progress</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          <div>
            <label className="text-sm font-medium mb-2 block">Notes (visible to client)</label>
            <Textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Add notes about this status update..."
              className="min-h-24"
            />
          </div>
          
          <div className="flex justify-end">
            <Button 
              onClick={handleUpdateStatus}
              disabled={isLoading}
              className="bg-blue-600 hover:bg-blue-700"
            >
              {isLoading ? 'Updating...' : 'Update Status'}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectStatusUpdate;
