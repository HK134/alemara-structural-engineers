
import { supabase } from "@/integrations/supabase/client";
import { archiveProjectToOneDrive } from "./oneDriveIntegration";

/**
 * Saves form submission data to the Supabase database
 * This function stores the submission while also allowing email submission to continue
 */
export const saveFormSubmissionToDatabase = async (formData: any, formType: string) => {
  console.log(`Saving ${formType} submission to database:`, formData);
  
  try {
    const { data, error } = await supabase
      .from('form_submissions')
      .insert({
        form_type: formType,
        first_name: formData.firstName,
        last_name: formData.lastName || '', // Support for empty lastName
        email: formData.email,
        phone: formData.phone,
        service_type: formData.serviceType || 'Not specified',
        message: formData.message || '',
        status: 'new',
        postcode: formData.postcode || '',
        address: formData.address || '' // Add support for storing address
      })
      .select();
    
    if (error) {
      console.error("Error saving form submission to database:", error);
      return { success: false, error };
    }
    
    console.log("Form submission saved to database successfully:", data);
    return { success: true, data };
  } catch (error) {
    console.error("Exception when saving form submission:", error);
    return { success: false, error };
  }
};

/**
 * Marks a project as completed in the database
 * This sets up the project for future archiving after 30 days
 * 
 * @param projectId - The UUID of the project in the database
 * @returns Promise with the result of the operation
 */
export const markProjectAsCompleted = async (projectId: string) => {
  console.log(`Marking project ${projectId} as completed`);
  
  try {
    const completionDate = new Date().toISOString();
    
    const { data, error } = await supabase
      .from('form_submissions')
      .update({
        status: 'closed',
        completion_date: completionDate
      })
      .eq('id', projectId)
      .select();
    
    if (error) {
      console.error("Error marking project as completed:", error);
      return { success: false, error };
    }
    
    console.log("Project marked as completed successfully:", data);
    return { success: true, data };
  } catch (error) {
    console.error("Exception when marking project as completed:", error);
    return { success: false, error };
  }
};

/**
 * Archives a completed project by:
 * 1. Retrieving all project data
 * 2. Saving it to OneDrive via archiveProjectToOneDrive
 * 3. Optionally removing or flagging it in the database
 * 
 * @param projectId - The UUID of the project to archive
 * @param removeFromDatabase - Whether to delete the project from the database after archiving
 * @returns Promise with the result of the operation
 */
export const archiveCompletedProject = async (projectId: string, removeFromDatabase = false) => {
  console.log(`Archiving project ${projectId} (removeFromDB: ${removeFromDatabase})`);
  
  try {
    // 1. Get all project data
    const { data: projectData, error: fetchError } = await supabase
      .from('form_submissions')
      .select('*')
      .eq('id', projectId)
      .single();
    
    if (fetchError || !projectData) {
      console.error("Error fetching project for archiving:", fetchError);
      return { success: false, error: fetchError };
    }
    
    // 2. Archive to OneDrive
    const archiveSuccess = await archiveProjectToOneDrive(
      projectData.project_reference || projectId,
      projectData
    );
    
    if (!archiveSuccess) {
      return { success: false, error: "Failed to archive to OneDrive" };
    }
    
    // 3. Update or remove from database
    if (removeFromDatabase) {
      // Delete from database
      const { error: deleteError } = await supabase
        .from('form_submissions')
        .delete()
        .eq('id', projectId);
      
      if (deleteError) {
        console.error("Error removing archived project from database:", deleteError);
        return { success: false, error: deleteError };
      }
    } else {
      // Just mark as archived
      const { error: updateError } = await supabase
        .from('form_submissions')
        .update({ status: 'archived', archived_date: new Date().toISOString() })
        .eq('id', projectId);
      
      if (updateError) {
        console.error("Error marking project as archived:", updateError);
        return { success: false, error: updateError };
      }
    }
    
    console.log(`Project ${projectId} successfully archived`);
    return { success: true };
  } catch (error) {
    console.error("Exception when archiving project:", error);
    return { success: false, error };
  }
};

/**
 * Gets a list of projects eligible for archiving (completed more than 30 days ago)
 * @returns Promise with an array of eligible projects
 */
export const getProjectsEligibleForArchiving = async () => {
  try {
    // Calculate date 30 days ago
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    
    const { data, error } = await supabase
      .from('form_submissions')
      .select('*')
      .eq('status', 'closed')
      .lt('completion_date', thirtyDaysAgo.toISOString());
    
    if (error) {
      console.error("Error fetching projects eligible for archiving:", error);
      return { success: false, error };
    }
    
    return { success: true, data };
  } catch (error) {
    console.error("Exception when getting projects for archiving:", error);
    return { success: false, error };
  }
};
