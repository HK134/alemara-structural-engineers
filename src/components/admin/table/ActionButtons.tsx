
import React from 'react';
import { Button } from "@/components/ui/button";
import { Edit, LockIcon, UnlockIcon, Trash2 } from 'lucide-react';
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
import { toast } from 'sonner';
import { deleteSubmission } from '@/utils/db';
import { FormSubmission } from '@/utils/db/types';

interface ActionButtonsProps {
  submission: FormSubmission;
  onEdit: (submission: FormSubmission) => void;
  onToggleSecured: (id: string, secured: boolean) => void;
  onRefetch: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ 
  submission, 
  onEdit, 
  onToggleSecured,
  onRefetch
}) => {
  const handleDeleteSubmission = async (id: string) => {
    try {
      const result = await deleteSubmission(id);
      
      if (!result.success) {
        throw new Error(result.message);
      }
      
      toast.success('Lead deleted successfully');
      onRefetch();
    } catch (error) {
      console.error('Error deleting submission:', error);
      toast.error('Failed to delete lead');
    }
  };

  return (
    <div className="flex justify-end">
      <Button
        variant="ghost" 
        size="icon"
        onClick={() => onToggleSecured(submission.id, submission.secured)}
        title={submission.secured ? "Unsecure project" : "Secure project"}
        className="mr-1"
      >
        {submission.secured ? 
          <UnlockIcon size={16} className="text-orange-500" /> : 
          <LockIcon size={16} className="text-green-500" />
        }
      </Button>
      
      <Button
        variant="ghost" 
        size="icon"
        onClick={() => onEdit(submission)}
        className="mr-1"
      >
        <Edit size={16} />
      </Button>
      
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button
            variant="ghost" 
            size="icon"
            className="text-red-500 hover:text-red-700 hover:bg-red-50"
            title="Delete lead"
          >
            <Trash2 size={16} />
          </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Lead</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this lead? This action cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction 
              onClick={() => handleDeleteSubmission(submission.id)}
              className="bg-red-500 text-white hover:bg-red-600"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default ActionButtons;
