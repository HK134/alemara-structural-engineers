
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

    // Use explicit typecasting to match Supabase types
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

    // Insert as an array for Supabase
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
    // Get the submission
    const { data: submission, error: getError } = await supabase
      .from('form_submissions')
      .select('*')
      .eq('id', submissionId as any)
      .single();

    if (getError) {
      console.error('Error getting submission:', getError);
      return { success: false, message: 'Failed to get submission', error: getError };
    }

    // If it already has a project reference, return it
    if (submission?.project_reference) {
      return { success: true, projectReference: submission.project_reference };
    }

    // Function to generate a unique project reference
    const generateReference = () => {
      const year = new Date().getFullYear().toString().slice(-2);
      const randomPart = Math.floor(1000 + Math.random() * 9000); // 4-digit number
      return `W-${year}-${randomPart}`;
    };

    const projectReference = generateReference();

    // Update the submission with the new project reference
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
    // Get counts by status
    const { data: statusData, error: statusError } = await supabase
      .rpc('get_status_counts');

    if (statusError) {
      console.error('Error getting status counts:', statusError);
      return { success: false, message: 'Failed to get status counts', error: statusError };
    }

    // Get total count
    const { count: totalCount, error: countError } = await supabase
      .from('form_submissions')
      .select('*', { count: 'exact', head: true });

    if (countError) {
      console.error('Error getting total count:', countError);
      return { success: false, message: 'Failed to get total count', error: countError };
    }

    // Get new submissions count (status = 'new')
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
