// Centralized type definitions
export type ProjectStage = 
  | 'Site Visit' 
  | 'Schematic Submission' 
  | 'Final Package' 
  | 'Completed' 
  | 'Awaiting Info' 
  | 'In Progress';

export type ProjectStatus = {
  id: string;
  project_id: string;
  status: string;
  stage?: ProjectStage;
  notes?: string;
  visible_to_client?: boolean;
  last_updated_by?: string;
  updated_at?: string;
};
