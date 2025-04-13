
import { supabase } from '@/integrations/supabase/client';

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

export type OperationResult<T = any> = {
  success: boolean;
  message: string;
  data?: T;
  error?: any;
  counts?: {
    total: number;
    new: number;
    byStatus: any[];
  };
  projectReference?: string;
};

export type FormSubmission = {
  id: string;
  form_type: string;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  service_type: string;
  message: string | null;
  created_at: string;
  status: string;
  postcode: string;
  secured: boolean;
  project_reference: string | null;
  engineer_id: string | null;
  address: string | null;
  completion_date: string | null;
  archived_date: string | null;
  client_auth_created?: boolean;
  client_temp_password?: string;
};

export type Engineer = {
  id: string;
  name: string;
  email: string;
  active: boolean;
  created_at: string;
};
