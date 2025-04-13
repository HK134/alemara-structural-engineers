
import { supabase } from '@/integrations/supabase/client';
import { OperationResult, FormSubmission } from './types';

/**
 * Creates a client account for a secured submission
 */
export const createClientAccount = async (submission: FormSubmission): Promise<OperationResult> => {
  try {
    // Check if a user with this email already exists
    const { data: existingUsers, error: fetchError } = await supabase.auth.admin.listUsers({
      page: 1,
      perPage: 1,
    });
    
    if (submission && submission.email) {
      const userExists = existingUsers?.users.some(user => user.email === submission.email);
      
      if (userExists) {
        console.log('User already exists with this email:', submission.email);
        
        // Update the submission to mark client_auth_created as true
        await supabase
          .from('form_submissions')
          .update({ client_auth_created: true } as any)
          .eq('id', submission.id);
          
        return { success: true, message: 'User already exists with this email' };
      }
      
      // Generate a temporary password
      const tempPassword = Math.random().toString(36).slice(-8) + Math.random().toString(10).slice(-2);
      
      // Create a new user
      const { data: userCreateData, error: userCreateError } = await supabase.auth.admin.createUser({
        email: submission.email,
        password: tempPassword,
        email_confirm: true,
        user_metadata: { 
          full_name: `${submission.first_name} ${submission.last_name}`,
          project_id: submission.id,
          project_reference: submission.project_reference 
        }
      });
      
      if (userCreateError) {
        console.error('Error creating client account:', userCreateError);
        return { success: false, message: userCreateError.message };
      }
      
      // Update the submission to mark client_auth_created as true and store the temp password
      await supabase
        .from('form_submissions')
        .update({ 
          client_auth_created: true, 
          client_temp_password: tempPassword 
        } as any)
        .eq('id', submission.id);
      
      console.log('Client account created:', {
        email: submission.email,
        password: tempPassword,
        name: `${submission.first_name} ${submission.last_name}`
      });
      
      return { success: true, message: 'Client account created successfully' };
    } else {
      return { success: false, message: 'Invalid submission data: email is missing' };
    }
  } catch (error) {
    console.error('Error in createClientAccount:', error);
    return { success: false, message: 'An unexpected error occurred' };
  }
};
