
import { supabase } from '@/integrations/supabase/client';

interface EngineerSetupParams {
  name: string;
  email: string;
  password: string;
}

export const setupEngineer = async ({ name, email, password }: EngineerSetupParams) => {
  try {
    // Check if engineer already exists
    const { data: existingEngineer, error: checkError } = await supabase
      .from('engineers')
      .select('*')
      .eq('email', email)
      .single();
    
    if (checkError && checkError.code !== 'PGRST116') {
      console.log("Error checking for existing engineer:", checkError);
      return { success: false, message: "Failed to check for existing engineer" };
    }
    
    // If engineer doesn't exist, create the engineer
    if (!existingEngineer) {
      const { data: newEngineer, error: insertError } = await supabase
        .from('engineers')
        .insert({
          name,
          email,
          active: true
        })
        .select()
        .single();
      
      if (insertError) {
        console.log("Error creating engineer:", insertError);
        return { success: false, message: "Failed to create engineer" };
      }
      
      console.log("Created engineer:", newEngineer);
    }
    
    // Create auth user if it doesn't exist
    const { data: userData, error: userError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
          role: 'engineer'
        },
        emailRedirectTo: `${window.location.origin}/engineer-login`
      }
    });
    
    if (userError) {
      // If the user already exists, this may error, which is fine
      console.log("Note about auth user:", userError.message);
      return { success: false, message: userError.message };
    } else {
      console.log(`Created auth user for ${name}`);
    }
    
    return { 
      success: true, 
      message: `Engineer ${name} set up successfully. A confirmation email has been sent to ${email}.`, 
      credentials: {
        email,
        password
      }
    };
  } catch (error) {
    console.error("Error setting up engineer:", error);
    return { success: false, message: "An unexpected error occurred" };
  }
};

export const setupAlexEngineer = async () => {
  return setupEngineer({
    name: 'Alex',
    email: 'dubiah@hotmail.com',
    password: 'EngineerAlex123!'
  });
};
