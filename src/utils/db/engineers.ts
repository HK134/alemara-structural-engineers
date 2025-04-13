
import { supabase } from '@/integrations/supabase/client';
import { OperationResult } from './types';

/**
 * Assigns an engineer to a submission
 */
export const assignEngineerToSubmission = async (
  submissionId: string,
  engineerId: string,
  status: string = 'contacted'
): Promise<OperationResult> => {
  try {
    const { data, error } = await supabase
      .from('form_submissions')
      .update({
        engineer_id: engineerId,
        status: status
      } as any)
      .eq('id', submissionId as any)
      .select();

    if (error) {
      console.error('Error assigning engineer:', error);
      return { success: false, message: 'Failed to assign engineer', error };
    }

    return { success: true, message: 'Engineer assigned successfully', data };
  } catch (error) {
    console.error('Error in assignEngineerToSubmission:', error);
    return { success: false, message: 'An unexpected error occurred', error };
  }
};

// Alias for backward compatibility
export const assignEngineerToProject = assignEngineerToSubmission;

/**
 * Unassigns an engineer from a submission
 */
export const unassignEngineerFromSubmission = async (
  submissionId: string,
  status: string = 'new'
): Promise<OperationResult> => {
  try {
    const { data, error } = await supabase
      .from('form_submissions')
      .update({
        engineer_id: null,
        status: status
      } as any)
      .eq('id', submissionId as any)
      .select();

    if (error) {
      console.error('Error unassigning engineer:', error);
      return { success: false, message: 'Failed to unassign engineer', error };
    }

    return { success: true, message: 'Engineer unassigned successfully', data };
  } catch (error) {
    console.error('Error in unassignEngineerFromSubmission:', error);
    return { success: false, message: 'An unexpected error occurred', error };
  }
};

// Alias for backward compatibility
export const unassignEngineerFromProject = unassignEngineerFromSubmission;

/**
 * Gets all submissions assigned to an engineer
 */
export const getEngineerSubmissions = async (engineerId: string): Promise<OperationResult> => {
  try {
    const { data, error } = await supabase
      .from('form_submissions')
      .select('*')
      .eq('engineer_id', engineerId as any);

    if (error) {
      console.error('Error getting engineer submissions:', error);
      return { success: false, message: 'Failed to get engineer submissions', error };
    }

    return { success: true, data };
  } catch (error) {
    console.error('Error in getEngineerSubmissions:', error);
    return { success: false, message: 'An unexpected error occurred', error };
  }
};

// Alias for backward compatibility
export const getEngineerProjects = getEngineerSubmissions;
