
import React from 'react';
import { Button } from "@/components/ui/button";
import { TableCell, TableRow } from "@/components/ui/table";
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { FormSubmission, Engineer } from '@/utils/db/types';
import StatusBadge from './StatusBadge';
import EngineerBadge from './EngineerBadge';
import ActionButtons from './ActionButtons';
import ExpandedRowContent from './ExpandedRowContent';
import SubmissionDetailSheet from './SubmissionDetailSheet';

interface SubmissionTableRowProps {
  submission: FormSubmission;
  isExpanded: boolean;
  engineers?: Engineer[];
  onToggleExpand: (id: string) => void;
  onToggleSecured: (id: string, secured: boolean) => void;
  onAssignEngineer: (projectId: string, engineerId: string | null) => void;
  onUpdateStatus: (id: string, status: string) => void;
  onRefetch: () => void;
  selectedSubmission: FormSubmission | null;
  setSelectedSubmission: (submission: FormSubmission | null) => void;
}

const SubmissionTableRow: React.FC<SubmissionTableRowProps> = ({
  submission,
  isExpanded,
  engineers,
  onToggleExpand,
  onToggleSecured,
  onAssignEngineer,
  onUpdateStatus,
  onRefetch,
  selectedSubmission,
  setSelectedSubmission
}) => {
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

  return (
    <React.Fragment>
      <TableRow className={submission.secured ? "bg-green-50" : ""}>
        <TableCell>
          <Button 
            variant="ghost" 
            size="sm" 
            className="h-8 w-8 p-0" 
            onClick={() => onToggleExpand(submission.id)}
          >
            {isExpanded ? 
              <ChevronUp className="h-4 w-4" /> : 
              <ChevronDown className="h-4 w-4" />
            }
          </Button>
        </TableCell>
        <TableCell className="font-medium">
          {formatDate(submission.created_at)}
        </TableCell>
        <TableCell>
          {submission.first_name} {submission.last_name}
        </TableCell>
        <TableCell className="hidden md:table-cell">
          {submission.email}
        </TableCell>
        <TableCell className="hidden md:table-cell">
          {submission.phone}
        </TableCell>
        <TableCell className="hidden md:table-cell font-medium">
          {submission.project_reference || "-"}
        </TableCell>
        <TableCell>
          <StatusBadge status={submission.status} />
        </TableCell>
        <TableCell>
          <EngineerBadge engineerId={submission.engineer_id} engineers={engineers} />
        </TableCell>
        <TableCell className="text-right">
          <Sheet>
            <SheetTrigger asChild>
              <span>
                <ActionButtons 
                  submission={submission} 
                  onEdit={() => setSelectedSubmission(submission)}
                  onToggleSecured={onToggleSecured}
                  onRefetch={onRefetch}
                />
              </span>
            </SheetTrigger>
            {selectedSubmission && selectedSubmission.id === submission.id && (
              <SubmissionDetailSheet
                submission={selectedSubmission}
                engineers={engineers}
                onAssignEngineer={onAssignEngineer}
                onUpdateStatus={onUpdateStatus}
                onToggleSecured={onToggleSecured}
              />
            )}
          </Sheet>
        </TableCell>
      </TableRow>
      
      {isExpanded && (
        <TableRow className={submission.secured ? "bg-green-50 border-b" : "border-b"}>
          <TableCell colSpan={9} className="p-0">
            <ExpandedRowContent submission={submission} />
          </TableCell>
        </TableRow>
      )}
    </React.Fragment>
  );
};

export default SubmissionTableRow;
