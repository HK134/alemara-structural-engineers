
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
    
    // Check if client already exists
    const { data: existingClient, error: existingClientError } = await supabase
      .from('clients')
      .select('*')
      .eq('email', email)
      .maybeSingle();
      
    if (existingClientError) {
      console.error('Error checking existing client:', existingClientError);
      return { success: false, message: 'Failed to check if client exists', error: existingClientError };
    }
    
    if (existingClient) {
      // Client already exists, just return success
      return { success: true, message: 'Client already exists', data: existingClient };
    }
    
    // Create new client record
    const { data: newClient, error: newClientError } = await supabase
      .from('clients')
      .insert({
        email: email,
        first_name: submission.first_name,
        last_name: submission.last_name,
        phone: submission.phone,
        project_reference: submission.project_reference,
      })
      .select()
      .single();
      
    if (newClientError) {
      console.error('Error creating client:', newClientError);
      return { success: false, message: 'Failed to create client account', error: newClientError };
    }
    
    return { success: true, message: 'Client account created successfully', data: newClient };
  } catch (error) {
    console.error('Error in createClientAccount:', error);
    return { success: false, message: 'An unexpected error occurred', error };
  }
};
