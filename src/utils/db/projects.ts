
import { supabase } from '@/integrations/supabase/client';
import { OperationResult } from './types';

/**
 * Gets all projects
 */
export const getAllProjects = async (): Promise<OperationResult> => {
  try {
    const { data, error } = await supabase
      .from('form_submissions')
      .select('*')
      .eq('secured', true)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error getting projects:', error);
      return { success: false, message: 'Failed to get projects', error };
    }

    return { 
      success: true, 
      message: 'Projects retrieved successfully',
      data 
    };
  } catch (error) {
    console.error('Error in getAllProjects:', error);
    return { success: false, message: 'An unexpected error occurred', error };
  }
};

/**
 * Gets a single project by ID
 */
export const getProjectById = async (projectId: string): Promise<OperationResult> => {
  try {
    const { data, error } = await supabase
      .from('form_submissions')
      .select('*')
      .eq('id', projectId)
      .eq('secured', true)
      .single();

    if (error) {
      console.error('Error getting project:', error);
      return { success: false, message: 'Failed to get project', error };
    }

    return { 
      success: true, 
      message: 'Project retrieved successfully',
      data 
    };
  } catch (error) {
    console.error('Error in getProjectById:', error);
    return { success: false, message: 'An unexpected error occurred', error };
  }
};

/**
 * Gets a project by reference number
 */
export const getProjectByReference = async (reference: string): Promise<OperationResult> => {
  try {
    const { data, error } = await supabase
      .from('form_submissions')
      .select('*')
      .eq('project_reference', reference)
      .eq('secured', true);

    if (error) {
      console.error('Error getting project by reference:', error);
      return { success: false, message: 'Failed to get project', error };
    }

    if (!data || data.length === 0) {
      return { success: false, message: 'Project not found' };
    }

    return { 
      success: true, 
      message: 'Project retrieved successfully',
      data: data[0] 
    };
  } catch (error) {
    console.error('Error in getProjectByReference:', error);
    return { success: false, message: 'An unexpected error occurred', error };
  }
};

/**
 * Gets projects eligible for archiving (completed over 30 days ago)
 */
export const getProjectsEligibleForArchiving = async (): Promise<OperationResult> => {
  try {
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    
    const { data, error } = await supabase
      .from('form_submissions')
      .select('*')
      .eq('status', 'closed')
      .eq('secured', true)
      .lt('completion_date', thirtyDaysAgo.toISOString())
      .is('archived_date', null);
      
    if (error) {
      console.error('Error getting archivable projects:', error);
      return { success: false, message: 'Failed to get archivable projects', error };
    }

    return { 
      success: true, 
      message: 'Archivable projects retrieved successfully',
      data 
    };
  } catch (error) {
    console.error('Error in getProjectsEligibleForArchiving:', error);
    return { success: false, message: 'An unexpected error occurred', error };
  }
};
