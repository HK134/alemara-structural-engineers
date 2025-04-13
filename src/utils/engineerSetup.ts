
import { supabase } from '@/integrations/supabase/client';
import { generateSecurePassword } from './passwordGenerator';
import { sendLoginCredentialsEmail } from './engineerEmailService';

interface EngineerSetupParams {
  name: string;
  email: string;
  password?: string;
}

export const setupEngineer = async ({ name, email, password }: EngineerSetupParams) => {
  try {
    // Generate a password if not provided
    const engineerPassword = password || generateSecurePassword();
    
    // Check if engineer already exists
    const { data: existingEngineer, error: checkError } = await supabase
      .from('engineers')
      .select('*')
      .eq('email', email as string)
      .single();
    
    if (checkError && checkError.code !== 'PGRST116') {
      console.log("Error checking for existing engineer:", checkError);
      return { success: false, message: "Failed to check for existing engineer" };
    }
    
    // If engineer doesn't exist, create the engineer
    if (!existingEngineer) {
      const { data: newEngineer, error: insertError } = await supabase
        .from('engineers')
        .insert([{
          name,
          email,
          active: true
        }])
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
      password: engineerPassword,
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
    
    // Send login credentials via email
    const emailSent = await sendLoginCredentialsEmail(email, engineerPassword);
    
    if (!emailSent) {
      return { 
        success: true, 
        message: `Engineer ${name} set up successfully but failed to send email. Password: ${engineerPassword}`, 
        credentials: {
          email,
          password: engineerPassword
        }
      };
    }
    
    return { 
      success: true, 
      message: `Engineer ${name} set up successfully. Login credentials sent to ${email}.`, 
      credentials: {
        email,
        password: engineerPassword
      }
    };
  } catch (error) {
    console.error("Error setting up engineer:", error);
    return { success: false, message: "An unexpected error occurred" };
  }
};

export const setupMakramEngineer = async () => {
  return setupEngineer({
    name: 'Makram',
    email: 'makram@amatrix.co'
  });
};
