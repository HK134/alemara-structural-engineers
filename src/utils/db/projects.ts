
import { supabase } from '@/integrations/supabase/client';
import { OperationResult } from './types';

/**
 * Generates a project reference for a submission
 */
export const generateProjectReference = async (submissionId: string): Promise<OperationResult> => {
  try {
    const { data: submission, error: getError } = await supabase
      .from('form_submissions')
      .select('*')
      .eq('id', submissionId as any)
      .single();

    if (getError) {
      console.error('Error getting submission:', getError);
      return { success: false, message: 'Failed to get submission', error: getError };
    }

    if (submission?.project_reference) {
      return { success: true, projectReference: submission.project_reference };
    }

    const generateReference = () => {
      const year = new Date().getFullYear().toString().slice(-2);
      const randomPart = Math.floor(1000 + Math.random() * 9000);
      return `W-${year}-${randomPart}`;
    };

    const projectReference = generateReference();

    const { data, error } = await supabase
      .from('form_submissions')
      .update({ project_reference: projectReference } as any)
      .eq('id', submissionId as any)
      .select();

    if (error) {
      console.error('Error updating project reference:', error);
      return { success: false, message: 'Failed to generate project reference', error };
    }

    return { success: true, projectReference };
  } catch (error) {
    console.error('Error in generateProjectReference:', error);
    return { success: false, message: 'An unexpected error occurred', error };
  }
};

/**
 * Gets projects eligible for archiving (completed 30+ days ago)
 */
export const getProjectsEligibleForArchiving = async (): Promise<OperationResult> => {
  try {
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    
    const { data, error } = await supabase
      .from('form_submissions')
      .select('*')
      .eq('status', 'closed')
      .lt('completion_date', thirtyDaysAgo.toISOString());
    
    if (error) {
      console.error('Error getting eligible projects for archiving:', error);
      return { success: false, message: 'Failed to get eligible projects', error };
    }
    
    return { success: true, data };
  } catch (error) {
    console.error('Error in getProjectsEligibleForArchiving:', error);
    return { success: false, message: 'An unexpected error occurred', error };
  }
};

/**
 * Marks a submission as complete
 */
export const markSubmissionComplete = async (
  submissionId: string,
  completionDate: Date = new Date()
): Promise<OperationResult> => {
  try {
    const formattedDate = completionDate.toISOString();
    const { data, error } = await supabase
      .from('form_submissions')
      .update({
        status: 'closed',
        completion_date: formattedDate
      } as any)
      .eq('id', submissionId as any)
      .select();

    if (error) {
      console.error('Error marking submission complete:', error);
      return { success: false, message: 'Failed to mark as complete', error };
    }

    return { success: true, message: 'Submission marked as complete', data };
  } catch (error) {
    console.error('Error in markSubmissionComplete:', error);
    return { success: false, message: 'An unexpected error occurred', error };
  }
};

/**
 * Archives a submission
 */
export const archiveSubmission = async (submissionId: string): Promise<OperationResult> => {
  try {
    const formattedDate = new Date().toISOString();
    const { data, error } = await supabase
      .from('form_submissions')
      .update({
        status: 'archived',
        archived_date: formattedDate
      } as any)
      .eq('id', submissionId as any)
      .select();

    if (error) {
      console.error('Error archiving submission:', error);
      return { success: false, message: 'Failed to archive submission', error };
    }

    return { success: true, message: 'Submission archived successfully', data };
  } catch (error) {
    console.error('Error in archiveSubmission:', error);
    return { success: false, message: 'An unexpected error occurred', error };
  }
};
