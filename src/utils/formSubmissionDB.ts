
import { supabase } from "@/integrations/supabase/client";

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
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
        service_type: formData.serviceType || 'Not specified',
        message: formData.message || '',
        status: 'new'
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
