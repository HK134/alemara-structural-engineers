import { supabase } from '@/integrations/supabase/client';
import { v4 as uuidv4 } from 'uuid';

export type SubmissionData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message?: string;
  serviceType: string;
  postcode?: string;
  address?: string;
};

export const submitFormToDB = async (
  formData: SubmissionData,
  formType: string = 'contact'
) => {
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

export const assignEngineerToSubmission = async (
  submissionId: string,
  engineerId: string,
  status: string = 'contacted'
) => {
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

export const unassignEngineerFromSubmission = async (
  submissionId: string,
  status: string = 'new'
) => {
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

export const getEngineerSubmissions = async (engineerId: string) => {
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

export const getProjectsEligibleForArchiving = async () => {
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

export const markSubmissionComplete = async (
  submissionId: string,
  completionDate: Date = new Date()
) => {
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

export const generateProjectReference = async (submissionId: string) => {
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

export const archiveSubmission = async (submissionId: string) => {
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

export const getSubmissionCounts = async () => {
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

/**
 * Creates a client account for a secured submission
 */
export const createClientAccount = async (submission: any) => {
  try {
    // Check if a user with this email already exists
    const { data: authData, error: authError } = await supabase.auth.admin.listUsers({
      filters: {
        email: submission.email,
      },
    });
    
    if (!authError && authData && authData.users.length > 0) {
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
  } catch (error) {
    console.error('Error in createClientAccount:', error);
    return { success: false, message: 'An unexpected error occurred' };
  }
};

/**
 * Deletes a single form submission from the database
 */
export const deleteSubmission = async (submissionId: string) => {
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
export const deleteAllSubmissions = async () => {
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
