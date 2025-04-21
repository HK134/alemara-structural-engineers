
import { supabase } from '@/integrations/supabase/client';
import { v4 as uuidv4 } from 'uuid';

export const createTestSubmission = async () => {
  try {
    // Generate random data for a test submission
    const firstName = `Test${Math.floor(Math.random() * 1000)}`;
    const lastName = `User${Math.floor(Math.random() * 1000)}`;
    const email = `test${Math.floor(Math.random() * 10000)}@example.com`;
    const phone = `0${Math.floor(Math.random() * 10000000000)}`.substring(0, 11);
    const message = `This is a test submission created on ${new Date().toISOString()}`;
    const serviceType = ['Structural Survey', 'Building Regulations', 'Loft Conversion', 'Extension'][
      Math.floor(Math.random() * 4)
    ];
    const postcode = `${String.fromCharCode(65 + Math.floor(Math.random() * 26))}${String.fromCharCode(
      65 + Math.floor(Math.random() * 26)
    )}${Math.floor(Math.random() * 10)} ${Math.floor(Math.random() * 10)}${String.fromCharCode(
      65 + Math.floor(Math.random() * 26)
    )}${String.fromCharCode(65 + Math.floor(Math.random() * 26))}`;
    const address = `${Math.floor(Math.random() * 200)} Example Street, London`;

    // Create the submission
    const { data, error } = await supabase
      .from('form_submissions')
      .insert([{
        form_type: 'contact',
        first_name: firstName,
        last_name: lastName,
        email,
        phone,
        service_type: serviceType,
        message,
        status: 'new',
        postcode,
        address,
        secured: false
      } as any])
      .select();

    if (error) {
      console.error('Error creating test submission:', error);
      return { success: false, message: 'Failed to create test submission', error };
    }

    console.log('Test submission created:', data);
    return { success: true, message: 'Test submission created successfully', data };
  } catch (error) {
    console.error('Error in createTestSubmission:', error);
    return { success: false, message: 'An unexpected error occurred', error };
  }
};

export const testDatabaseConnection = async () => {
  try {
    const { data, error } = await supabase.from('form_submissions').select('count(*)', { count: 'exact', head: true });

    if (error) {
      console.error('Database connection test failed:', error);
      return { success: false, message: 'Database connection test failed', error };
    }

    console.log('Database connection test successful');
    return { success: true, message: 'Database connection test successful', data };
  } catch (error) {
    console.error('Error in testDatabaseConnection:', error);
    return { success: false, message: 'An unexpected error occurred', error };
  }
};
