
import { supabase } from '@/integrations/supabase/client';
import { OperationResult, FormSubmission } from './types';

/**
 * Gets all submissions from the database
 */
export const getAllSubmissions = async (): Promise<OperationResult> => {
  try {
    const { data, error } = await supabase
      .from('form_submissions')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error getting submissions:', error);
      return { success: false, message: 'Failed to get submissions', error };
    }

    return { 
      success: true, 
      message: 'Submissions retrieved successfully',
      data 
    };
  } catch (error) {
    console.error('Error in getAllSubmissions:', error);
    return { success: false, message: 'An unexpected error occurred', error };
  }
};

/**
 * Gets a submission by ID
 */
export const getSubmissionById = async (id: string): Promise<OperationResult> => {
  try {
    const { data, error } = await supabase
      .from('form_submissions')
      .select('*')
      .eq('id', id)
      .single();

    if (error) {
      console.error('Error getting submission:', error);
      return { success: false, message: 'Failed to get submission', error };
    }

    return { 
      success: true, 
      message: 'Submission retrieved successfully',
      data 
    };
  } catch (error) {
    console.error('Error in getSubmissionById:', error);
    return { success: false, message: 'An unexpected error occurred', error };
  }
};

/**
 * Updates a submission
 */
export const updateSubmission = async (id: string, updates: Partial<FormSubmission>): Promise<OperationResult> => {
  try {
    const { data, error } = await supabase
      .from('form_submissions')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error('Error updating submission:', error);
      return { success: false, message: 'Failed to update submission', error };
    }

    return { 
      success: true, 
      message: 'Submission updated successfully',
      data 
    };
  } catch (error) {
    console.error('Error in updateSubmission:', error);
    return { success: false, message: 'An unexpected error occurred', error };
  }
};
