
import { supabase } from '@/integrations/supabase/client';
import { OperationResult } from './types';
import { sendLoginCredentialsEmail } from '@/utils/engineerEmailService';
import { generateSecurePassword } from '@/utils/passwordGenerator';

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

    return { success: true, message: 'Engineer submissions retrieved successfully', data };
  } catch (error) {
    console.error('Error in getEngineerSubmissions:', error);
    return { success: false, message: 'An unexpected error occurred', error };
  }
};

/**
 * Creates a new engineer in the system and sets up their auth account
 */
export const createEngineer = async (name: string, email: string): Promise<OperationResult> => {
  try {
    // Check if engineer already exists
    const { data: existingEngineer, error: checkError } = await supabase
      .from('engineers')
      .select('*')
      .eq('email', email)
      .single();
    
    if (checkError && checkError.code !== 'PGRST116') {
      console.error("Error checking for existing engineer:", checkError);
      return { success: false, message: "Failed to check for existing engineer", error: checkError };
    }
    
    if (existingEngineer) {
      return { success: false, message: "Engineer with this email already exists", data: existingEngineer };
    }
    
    // Generate a secure password
    const password = generateSecurePassword();
    
    // Create the engineer record
    const { data: newEngineer, error: insertError } = await supabase
      .from('engineers')
      .insert([{
        name,
        email,
        active: true
      }])
      .select()
      .single();
    
    if (insertError) {
      console.error("Error creating engineer:", insertError);
      return { success: false, message: "Failed to create engineer record", error: insertError };
    }
    
    // Create auth user
    const { data: userData, error: userError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
          role: 'engineer'
        }
      }
    });
    
    if (userError) {
      console.error("Error creating auth user:", userError);
      return { success: false, message: "Failed to create auth user account", error: userError };
    }
    
    // Send login credentials via email
    const emailSent = await sendLoginCredentialsEmail(email, password);
    
    if (!emailSent) {
      return { 
        success: true, 
        message: `Engineer ${name} created successfully, but failed to send login credentials email. Password: ${password}`,
        data: { engineer: newEngineer, password }
      };
    }
    
    return { 
      success: true, 
      message: `Engineer ${name} created successfully. Login credentials sent to ${email}`,
      data: { engineer: newEngineer, password }
    };
  } catch (error) {
    console.error("Error in createEngineer:", error);
    return { success: false, message: "An unexpected error occurred", error };
  }
};

// Alias for backward compatibility
export const getEngineerProjects = getEngineerSubmissions;
