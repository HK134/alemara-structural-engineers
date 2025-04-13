
import { supabase } from '@/integrations/supabase/client';
import { SubmissionData, OperationResult } from './types';

/**
 * Submits form data to the database
 */
export const submitFormToDB = async (
  formData: SubmissionData,
  formType: string = 'contact'
): Promise<OperationResult> => {
  try {
    const { firstName, lastName, email, phone, message, serviceType, postcode, address } = formData;

    const submission = {
      form_type: formType,
      first_name: firstName,
      last_name: lastName,
      email,
      phone,
      service_type: serviceType,
      message,
      status: 'new',
      postcode,
      address: address || '',
      secured: false
    };

    const { data, error } = await supabase
      .from('form_submissions')
      .insert([submission as any])
      .select();

    if (error) {
      console.error('Error submitting form to database:', error);
      return { success: false, message: 'Database submission failed', error };
    }

    console.log('Form submitted to database:', data);
    return { success: true, message: 'Form submitted successfully', data };
  } catch (error) {
    console.error('Error in form submission:', error);
    return { success: false, message: 'An unexpected error occurred', error };
  }
};

// Alias for backward compatibility
export const saveFormSubmissionToDatabase = submitFormToDB;

/**
 * Gets submission counts by status
 */
export const getSubmissionCounts = async (): Promise<OperationResult> => {
  try {
    const { data: statusData, error: statusError } = await supabase
      .rpc('get_status_counts');

    if (statusError) {
      console.error('Error getting status counts:', statusError);
      return { success: false, message: 'Failed to get status counts', error: statusError };
    }

    const { count: totalCount, error: countError } = await supabase
      .from('form_submissions')
      .select('*', { count: 'exact', head: true });

    if (countError) {
      console.error('Error getting total count:', countError);
      return { success: false, message: 'Failed to get total count', error: countError };
    }

    const { count: newCount, error: newError } = await supabase
      .from('form_submissions')
      .select('*', { count: 'exact', head: true })
      .eq('status', 'new' as any);

    if (newError) {
      console.error('Error getting new count:', newError);
      return { success: false, message: 'Failed to get new count', error: newError };
    }

    return {
      success: true, 
      message: 'Counts retrieved successfully',
      counts: {
        total: totalCount ?? 0,
        new: newCount ?? 0,
        byStatus: statusData ?? []
      }
    };
  } catch (error) {
    console.error('Error in getSubmissionCounts:', error);
    return { success: false, message: 'An unexpected error occurred', error };
  }
};
