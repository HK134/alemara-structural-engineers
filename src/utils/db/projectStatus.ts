import { supabase } from '@/integrations/supabase/client';
import { OperationResult } from './types';
import { ProjectStage } from '@/types';

export const updateProjectStatus = async (
  projectId: string, 
  status: string,
  stage?: ProjectStage,
  notes?: string,
  visibleToClient: boolean = true
): Promise<OperationResult> => {
  try {
    // Get current user (engineer) id
    const { data: sessionData } = await supabase.auth.getSession();
    const updatedBy = sessionData.session?.user.id;

    if (!updatedBy) {
      return { 
        success: false, 
        message: 'Unable to identify the current user' 
      };
    }

    // Insert new status update
    const { data, error } = await supabase
      .from('project_statuses')
      .insert({
        project_id: projectId,
        status,
        stage,
        notes,
        last_updated_by: updatedBy,
        visible_to_client: visibleToClient
      })
      .select()
      .single();

    if (error) {
      console.error('Error updating project status:', error);
      return { 
        success: false, 
        message: 'Failed to update project status', 
        error 
      };
    }

    // Update the main project record status too
    const { error: projectError } = await supabase
      .from('form_submissions')
      .update({ status })
      .eq('id', projectId);

    if (projectError) {
      console.error('Error updating form submission status:', projectError);
      return { 
        success: false, 
        message: 'Failed to update project record', 
        error: projectError 
      };
    }

    return { 
      success: true, 
      message: 'Project status updated successfully',
      data 
    };
  } catch (error) {
    console.error('Error in updateProjectStatus:', error);
    return { 
      success: false, 
      message: 'An unexpected error occurred', 
      error 
    };
  }
};

/**
 * Gets all status updates for a project
 */
export const getProjectStatusHistory = async (projectId: string): Promise<OperationResult> => {
  try {
    const { data, error } = await supabase
      .from('project_statuses')
      .select('*')
      .eq('project_id', projectId)
      .order('updated_at', { ascending: false });

    if (error) {
      console.error('Error getting project status history:', error);
      return { 
        success: false, 
        message: 'Failed to get status history', 
        error 
      };
    }

    return { 
      success: true, 
      message: 'Status history retrieved successfully',
      data 
    };
  } catch (error) {
    console.error('Error in getProjectStatusHistory:', error);
    return { 
      success: false, 
      message: 'An unexpected error occurred', 
      error 
    };
  }
};

/**
 * Gets the latest status for a project
 */
export const getLatestProjectStatus = async (projectId: string): Promise<OperationResult> => {
  try {
    const { data, error } = await supabase
      .from('project_statuses')
      .select('*')
      .eq('project_id', projectId)
      .order('updated_at', { ascending: false })
      .limit(1)
      .maybeSingle();

    if (error) {
      console.error('Error getting latest project status:', error);
      return { 
        success: false, 
        message: 'Failed to get latest status', 
        error 
      };
    }

    return { 
      success: true, 
      message: 'Latest status retrieved successfully',
      data 
    };
  } catch (error) {
    console.error('Error in getLatestProjectStatus:', error);
    return { 
      success: false, 
      message: 'An unexpected error occurred', 
      error 
    };
  }
};
