
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

/**
 * Saves a form submission to the database
 */
export const saveFormSubmissionToDatabase = async (formData: any, formType: string): Promise<OperationResult> => {
  try {
    const submission = {
      form_type: formType,
      first_name: formData.firstName,
      last_name: formData.lastName || '',
      email: formData.email,
      phone: formData.phone,
      service_type: formData.serviceType || 'Not specified',
      message: formData.message || null,
      status: 'new',
      postcode: formData.postcode || '',
      address: formData.address || null,
      secured: false,
    };

    const { data, error } = await supabase
      .from('form_submissions')
      .insert(submission)
      .select()
      .single();

    if (error) {
      console.error('Error saving submission:', error);
      return { success: false, message: 'Failed to save submission', error };
    }

    return { 
      success: true, 
      message: 'Submission saved successfully',
      data 
    };
  } catch (error) {
    console.error('Error in saveFormSubmissionToDatabase:', error);
    return { success: false, message: 'An unexpected error occurred', error };
  }
};

/**
 * Gets all engineer projects from the database
 */
export const getEngineerProjects = async (engineerId: string): Promise<OperationResult> => {
  try {
    const { data, error } = await supabase
      .from('form_submissions')
      .select('*')
      .eq('engineer_id', engineerId)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error getting engineer projects:', error);
      return { success: false, message: 'Failed to get engineer projects', error };
    }

    return { 
      success: true, 
      message: 'Engineer projects retrieved successfully',
      data 
    };
  } catch (error) {
    console.error('Error in getEngineerProjects:', error);
    return { success: false, message: 'An unexpected error occurred', error };
  }
};
