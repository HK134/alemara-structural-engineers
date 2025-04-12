
import { supabase } from '@/integrations/supabase/client';

export const setupAlexEngineer = async () => {
  try {
    // Check if Alex already exists
    const { data: existingEngineer, error: checkError } = await supabase
      .from('engineers')
      .select('*')
      .eq('email', 'dubiah@hotmail.com')
      .single();
    
    if (checkError && checkError.code !== 'PGRST116') {
      console.error("Error checking for existing engineer:", checkError);
      return { success: false, message: "Failed to check for existing engineer" };
    }
    
    // If Alex doesn't exist, create the engineer
    if (!existingEngineer) {
      const { data: newEngineer, error: insertError } = await supabase
        .from('engineers')
        .insert({
          name: 'Alex',
          email: 'dubiah@hotmail.com',
          active: true
        })
        .select()
        .single();
      
      if (insertError) {
        console.error("Error creating engineer:", insertError);
        return { success: false, message: "Failed to create engineer" };
      }
      
      console.log("Created engineer:", newEngineer);
    }
    
    // Create auth user for Alex if it doesn't exist
    const { data: userData, error: userError } = await supabase.auth.signUp({
      email: 'dubiah@hotmail.com',
      password: 'EngineerAlex123!',
      options: {
        data: {
          name: 'Alex',
          role: 'engineer'
        }
      }
    });
    
    if (userError) {
      // If the user already exists, this may error, which is fine
      console.log("Note about auth user:", userError.message);
    } else {
      console.log("Created auth user for Alex");
    }
    
    return { 
      success: true, 
      message: "Engineer Alex set up successfully", 
      credentials: {
        email: 'dubiah@hotmail.com',
        password: 'EngineerAlex123!'
      }
    };
  } catch (error) {
    console.error("Error setting up engineer:", error);
    return { success: false, message: "An unexpected error occurred" };
  }
};
