
import { supabase } from '@/integrations/supabase/client';
import { OperationResult } from './types';

/**
 * Saves whiteboard canvas data for a project
 */
export const saveWhiteboardData = async (
  projectId: string, 
  canvasData: string
): Promise<OperationResult> => {
  try {
    // Get current user id
    const { data: sessionData } = await supabase.auth.getSession();
    const updatedBy = sessionData.session?.user.id;

    if (!updatedBy) {
      return { 
        success: false, 
        message: 'Unable to identify the current user' 
      };
    }

    // Check if a record exists
    const { data: existing } = await supabase
      .from('project_whiteboards')
      .select('id')
      .eq('project_id', projectId)
      .maybeSingle();

    let result;
    
    if (existing) {
      // Update existing record
      result = await supabase
        .from('project_whiteboards')
        .update({
          canvas_data: JSON.parse(canvasData),
          last_updated_by: updatedBy,
          updated_at: new Date().toISOString()
        })
        .eq('id', existing.id)
        .select()
        .single();
    } else {
      // Insert new record
      result = await supabase
        .from('project_whiteboards')
        .insert({
          project_id: projectId,
          canvas_data: JSON.parse(canvasData),
          last_updated_by: updatedBy
        })
        .select()
        .single();
    }

    if (result.error) {
      console.error('Error saving whiteboard data:', result.error);
      return { 
        success: false, 
        message: 'Failed to save whiteboard data', 
        error: result.error 
      };
    }

    return { 
      success: true, 
      message: 'Whiteboard data saved successfully',
      data: result.data 
    };
  } catch (error) {
    console.error('Error in saveWhiteboardData:', error);
    return { 
      success: false, 
      message: 'An unexpected error occurred', 
      error 
    };
  }
};

/**
 * Loads whiteboard canvas data for a project
 */
export const loadWhiteboardData = async (projectId: string): Promise<OperationResult> => {
  try {
    const { data, error } = await supabase
      .from('project_whiteboards')
      .select('*')
      .eq('project_id', projectId)
      .maybeSingle();

    if (error) {
      console.error('Error loading whiteboard data:', error);
      return { 
        success: false, 
        message: 'Failed to load whiteboard data', 
        error 
      };
    }

    return { 
      success: true, 
      message: 'Whiteboard data loaded successfully',
      data 
    };
  } catch (error) {
    console.error('Error in loadWhiteboardData:', error);
    return { 
      success: false, 
      message: 'An unexpected error occurred', 
      error 
    };
  }
};

/**
 * Subscribes to whiteboard changes for a project
 */
export const subscribeToWhiteboardChanges = (
  projectId: string,
  onUpdate: (payload: any) => void
) => {
  const channel = supabase
    .channel(`whiteboard-${projectId}`)
    .on(
      'postgres_changes',
      {
        event: 'UPDATE',
        schema: 'public',
        table: 'project_whiteboards',
        filter: `project_id=eq.${projectId}`
      },
      (payload) => onUpdate(payload)
    )
    .subscribe();

  return () => {
    supabase.removeChannel(channel);
  };
};
