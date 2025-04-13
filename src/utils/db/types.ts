
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
};
