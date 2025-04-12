
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { submitFormToEmail } from './emailSubmission';

/**
 * Sends login credentials to an engineer's email
 */
export const sendLoginCredentialsEmail = async (
  email: string, 
  password: string
): Promise<boolean> => {
  try {
    // Check if this is an authorized engineer first
    const { data: engineerData, error: engineerError } = await supabase
      .from('engineers')
      .select('*')
      .eq('email', email as string)
      .eq('active', true as boolean)
      .single();
    
    if (engineerError || !engineerData) {
      console.error("Failed to find engineer:", engineerError);
      return false;
    }
    
    // Prepare email data for the engineer
    const emailData = {
      firstName: engineerData?.name || '',
      lastName: '',
      email: email,
      phone: '',
      message: `Your temporary login password is: ${password}\n\nPlease log in using this password. You may be prompted to create a new password on first login.`,
      serviceType: 'Engineer Portal Access'
    };
    
    // Use the existing email submission utility
    const result = await submitFormToEmail(emailData, 'Engineer Login Credentials');
    
    if (!result.success) {
      console.error("Failed to send email:", result.message);
      return false;
    }
    
    return true;
  } catch (error) {
    console.error("Error sending engineer login email:", error);
    return false;
  }
};

/**
 * Checks if an email belongs to an authorized engineer
 */
export const isAuthorizedEngineer = async (email: string): Promise<boolean> => {
  try {
    const { data, error } = await supabase
      .from('engineers')
      .select('*')
      .eq('email', email as string)
      .eq('active', true as boolean)
      .single();
    
    return !!data && !error;
  } catch (error) {
    console.error("Error checking engineer authorization:", error);
    return false;
  }
};
