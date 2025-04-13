
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
};

export type Engineer = {
  id: string;
  name: string;
  email: string;
  active: boolean;
  created_at: string;
}

export type OperationResult = {
  success: boolean;
  message: string;
  data?: any;
  error?: any;
};
