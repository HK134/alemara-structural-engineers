
import React, { useState } from 'react';
import { toast } from 'sonner';
import { 
  Table, 
  TableBody, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { supabase } from '@/integrations/supabase/client';
import { 
  assignEngineerToProject, 
  unassignEngineerFromProject, 
  createClientAccount 
} from '@/utils/db';
import { FormSubmission, Engineer } from '@/utils/db/types';
import SubmissionTableRow from './table/TableRow';

interface FormSubmissionsTableProps {
  submissions: FormSubmission[];
  engineers?: Engineer[];
  onRefetch: () => void;
}

const FormSubmissionsTable: React.FC<FormSubmissionsTableProps> = ({ 
  submissions,
  engineers,
  onRefetch
}) => {
  const [expandedRows, setExpandedRows] = useState<{[key: string]: boolean}>({});
  const [selectedSubmission, setSelectedSubmission] = useState<FormSubmission | null>(null);
  
  const toggleRowExpanded = (id: string) => {
    setExpandedRows(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const toggleSecuredStatus = async (id: string, currentStatus: boolean) => {
    try {
      let updateData: any = { secured: !currentStatus };
      
      if (!currentStatus) {
        const { data: projectRef } = await supabase.rpc('generate_project_reference');
        if (projectRef) {
          updateData.project_reference = projectRef;
        }
        
        const submission = submissions.find(s => s.id === id);
        if (submission) {
          const result = await createClientAccount(submission);
          if (result.success) {
            toast.success(`Client portal access created for ${submission.email}`);
          } else {
            toast.error(`Failed to create client access: ${result.message}`);
          }
        }
      }
      
      const { error } = await supabase
        .from('form_submissions')
        .update(updateData)
        .eq('id', id);
        
      if (error) throw error;
      
      toast.success(currentStatus ? 'Project unlocked' : 'Project secured');
      onRefetch();
      
      if (selectedSubmission && selectedSubmission.id === id) {
        setSelectedSubmission({
          ...selectedSubmission, 
          secured: !currentStatus,
          project_reference: !currentStatus && updateData.project_reference ? 
            updateData.project_reference : selectedSubmission.project_reference
        });
      }
    } catch (error) {
      console.error('Error toggling secured status:', error);
      toast.error('Failed to update project status');
    }
  };

  const updateStatus = async (id: string, newStatus: string) => {
    try {
      const { error } = await supabase
        .from('form_submissions')
        .update({ status: newStatus })
        .eq('id', id);
        
      if (error) throw error;
      
      toast.success(`Status updated to ${newStatus}`);
      onRefetch();
      
      if (selectedSubmission && selectedSubmission.id === id) {
        setSelectedSubmission({...selectedSubmission, status: newStatus});
      }
    } catch (error) {
      console.error('Error updating status:', error);
      toast.error('Failed to update status');
    }
  };

  const assignEngineer = async (projectId: string, engineerId: string | null) => {
    try {
      if (engineerId) {
        const result = await assignEngineerToProject(projectId, engineerId);
        if (result.error) throw result.error;
        toast.success('Engineer assigned to project. Status set to LIVE');
      } else {
        const result = await unassignEngineerFromProject(projectId);
        if (result.error) throw result.error;
        toast.success('Engineer unassigned from project. Status set to CONTACTED');
      }
      
      onRefetch();
      
      if (selectedSubmission && selectedSubmission.id === projectId) {
        setSelectedSubmission({
          ...selectedSubmission, 
          engineer_id: engineerId,
          status: engineerId ? 'live' : 'contacted'
        });
      }
    } catch (error) {
      console.error('Error managing engineer assignment:', error);
      toast.error('Failed to update engineer assignment');
    }
  };

  return (
    <div className="rounded-md border overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[30px]"></TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Name</TableHead>
            <TableHead className="hidden md:table-cell">Email</TableHead>
            <TableHead className="hidden md:table-cell">Phone</TableHead>
            <TableHead className="hidden md:table-cell">Reference</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Engineer</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {submissions.map((submission) => (
            <SubmissionTableRow
              key={submission.id}
              submission={submission}
              isExpanded={!!expandedRows[submission.id]}
              engineers={engineers}
              onToggleExpand={toggleRowExpanded}
              onToggleSecured={toggleSecuredStatus}
              onAssignEngineer={assignEngineer}
              onUpdateStatus={updateStatus}
              onRefetch={onRefetch}
              selectedSubmission={selectedSubmission}
              setSelectedSubmission={setSelectedSubmission}
            />
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default FormSubmissionsTable;
