
import { supabase } from '@/integrations/supabase/client';
import { FormSubmission } from './types';

export interface OperationResult {
  success: boolean;
  message: string;
  data?: any;
  error?: any;
}

/**
 * Creates a client account based on form submission data
 */
export const createClientAccount = async (submission: FormSubmission): Promise<OperationResult> => {
  try {
    const email = submission.email;
    
    if (!email) {
      return { success: false, message: 'Email is required' };
    }
    
    // We'll just update the form_submissions record to mark it as secured
    // since we don't have a separate clients table
    const { data: existingSubmission, error: existingError } = await supabase
      .from('form_submissions')
      .select('*')
      .eq('email', email)
      .maybeSingle();
      
    if (existingError) {
      console.error('Error checking existing submission:', existingError);
      return { success: false, message: 'Failed to check if client exists', error: existingError };
    }
    
    if (existingSubmission) {
      // Client already exists in form_submissions, just return success
      return { success: true, message: 'Client already exists', data: existingSubmission };
    }
    
    // Create new form_submissions record if needed
    // This should rarely happen as we normally create from the form first
    const { data: newSubmission, error: newSubmissionError } = await supabase
      .from('form_submissions')
      .insert({
        email: email,
        first_name: submission.first_name,
        last_name: submission.last_name,
        phone: submission.phone,
        project_reference: submission.project_reference,
        form_type: 'client_creation',
        service_type: 'not_specified',
        status: 'new'
      })
      .select()
      .single();
      
    if (newSubmissionError) {
      console.error('Error creating client:', newSubmissionError);
      return { success: false, message: 'Failed to create client account', error: newSubmissionError };
    }
    
    return { success: true, message: 'Client account created successfully', data: newSubmission };
  } catch (error) {
    console.error('Error in createClientAccount:', error);
    return { success: false, message: 'An unexpected error occurred', error };
  }
};
