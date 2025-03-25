
import { supabase } from "@/integrations/supabase/client";

/**
 * Test function to directly insert a form submission into the database
 * This is for debugging purposes only
 */
export const createTestSubmission = async () => {
  console.log("Creating test submission...");
  
  try {
    const testSubmission = {
      form_type: "test",
      first_name: "Test",
      last_name: "User",
      email: "test@example.com",
      phone: "1234567890",
      service_type: "Testing",
      message: "This is a test submission",
      status: "new",
      postcode: "12345",
      address: "123 Test Street",
      secured: false
    };
    
    console.log("Submitting test data to Supabase:", testSubmission);
    
    const { data, error } = await supabase
      .from('form_submissions')
      .insert(testSubmission)
      .select();
    
    if (error) {
      console.error("Error creating test submission:", error);
      return { success: false, error };
    }
    
    console.log("Test submission created successfully:", data);
    return { success: true, data };
  } catch (error) {
    console.error("Exception when creating test submission:", error);
    return { success: false, error };
  }
};
