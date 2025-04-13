
import React from 'react';
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { LockIcon, UnlockIcon } from 'lucide-react';
import { FormSubmission, Engineer } from '@/utils/db/types';

interface SubmissionDetailSheetProps {
  submission: FormSubmission;
  engineers?: Engineer[];
  onAssignEngineer: (projectId: string, engineerId: string | null) => void;
  onUpdateStatus: (id: string, status: string) => void;
  onToggleSecured: (id: string, secured: boolean) => void;
}

const SubmissionDetailSheet: React.FC<SubmissionDetailSheetProps> = ({
  submission,
  engineers,
  onAssignEngineer,
  onUpdateStatus,
  onToggleSecured
}) => {
  if (!submission) return null;

  return (
    <SheetContent className="w-full sm:max-w-md">
      <SheetHeader>
        <SheetTitle>Lead Details</SheetTitle>
      </SheetHeader>
      <div className="py-6">
        <div className="space-y-6">
          {submission.secured && submission.project_reference && (
            <div className="bg-green-50 p-3 rounded-md border border-green-100">
              <h3 className="text-sm font-bold text-green-700">Project Reference</h3>
              <p className="mt-1 text-lg font-bold">{submission.project_reference}</p>
            </div>
          )}
          
          <div>
            <h3 className="text-sm font-medium text-gray-500">Full Name</h3>
            <p className="mt-1 text-lg">{submission.first_name} {submission.last_name}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500">Email</h3>
            <p className="mt-1 text-lg">{submission.email}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500">Phone</h3>
            <p className="mt-1 text-lg">{submission.phone}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500">Service Type</h3>
            <p className="mt-1 text-lg">{submission.service_type}</p>
          </div>
          <div>
            <h3 className="text-sm font-medium text-gray-500">Message</h3>
            <p className="mt-1 text-lg whitespace-pre-wrap">{submission.message || 'No message provided'}</p>
          </div>
          
          <div className="space-y-4">
            <div className="flex flex-col">
              <h3 className="text-sm font-medium text-gray-500 mb-2">Assigned Engineer</h3>
              <Select
                value={submission.engineer_id || "unassigned"}
                onValueChange={(value) => onAssignEngineer(submission.id, value === "unassigned" ? null : value)}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select an engineer" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="unassigned">Not Assigned</SelectItem>
                  {engineers?.map((engineer) => (
                    <SelectItem key={engineer.id} value={engineer.id}>
                      {engineer.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="flex space-x-2">
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-500">Status</h3>
                <div className="mt-2">
                  <div className="flex flex-wrap gap-2">
                    {['new', 'contacted', 'live', 'closed', 'archived'].map((status) => (
                      <Button
                        key={status}
                        variant={submission.status === status ? "default" : "outline"}
                        size="sm"
                        onClick={() => onUpdateStatus(submission.id, status)}
                        className="capitalize"
                      >
                        {status}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-500">Project Status</h3>
                <div className="mt-2">
                  <Button
                    variant={submission.secured ? "default" : "outline"}
                    size="sm"
                    onClick={() => onToggleSecured(submission.id, submission.secured)}
                    className={submission.secured ? "bg-green-600 hover:bg-green-700" : ""}
                  >
                    {submission.secured ? (
                      <div className="flex items-center">
                        <LockIcon size={14} className="mr-1" />
                        Secured
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <UnlockIcon size={14} className="mr-1" />
                        Not Secured
                      </div>
                    )}
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {submission.postcode && (
            <div>
              <h3 className="text-sm font-medium text-gray-500">Postcode</h3>
              <p className="mt-1 text-lg">{submission.postcode || 'Not provided'}</p>
            </div>
          )}
        </div>
      </div>
    </SheetContent>
  );
};

export default SubmissionDetailSheet;
