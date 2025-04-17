
import { supabase } from '@/integrations/supabase/client';
import { OperationResult } from './types';

/**
 * Deletes a single form submission from the database
 */
export const deleteSubmission = async (submissionId: string): Promise<OperationResult> => {
  try {
    const { error } = await supabase
      .from('form_submissions')
      .delete()
      .eq('id', submissionId);

    if (error) {
      console.error('Error deleting submission:', error);
      return { success: false, message: 'Failed to delete submission', error };
    }

    return { success: true, message: 'Submission deleted successfully' };
  } catch (error) {
    console.error('Error in deleteSubmission:', error);
    return { success: false, message: 'An unexpected error occurred', error };
  }
};

/**
 * Deletes all form submissions from the database
 */
export const deleteAllSubmissions = async (): Promise<OperationResult> => {
  try {
    const { error } = await supabase
      .from('form_submissions')
      .delete()
      .neq('id', '00000000-0000-0000-0000-000000000000'); // This ensures all rows are affected

    if (error) {
      console.error('Error deleting all submissions:', error);
      return { success: false, message: 'Failed to delete all submissions', error };
    }

    return { success: true, message: 'All submissions deleted successfully' };
  } catch (error) {
    console.error('Error in deleteAllSubmissions:', error);
    return { success: false, message: 'An unexpected error occurred', error };
  }
};
