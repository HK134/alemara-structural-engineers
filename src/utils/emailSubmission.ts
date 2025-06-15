
import emailjs from 'emailjs-com';
import { saveFormSubmissionToDatabase } from './formSubmissionDB';

/**
 * Utility function to handle form submissions via email and database
 * This uses EmailJS to send emails from the client-side and also stores in Supabase
 */
export const submitFormToEmail = async (formData: any, formType: string) => {
  console.log(`Sending ${formType} form data to info@alemara.co.uk:`, formData);
  
  try {
    // Save to database first
    const dbResult = await saveFormSubmissionToDatabase(formData, formType);
    
    // Even if database save fails, continue with email (don't block email sending)
    if (!dbResult.success) {
      console.warn("Database save failed, but continuing with email sending");
    }
    
    // Initialize EmailJS with your user ID (only needs to be done once)
    emailjs.init("B_jYcT8aQ8L7R1Dp3"); // EmailJS public key from Account > API Keys
    
    // Prepare template parameters to match what we want to collect from our website
    const templateParams = {
      to_name: "Alemara", 
      to_email: 'info@alemara.co.uk',
      bcc: 'info@alemara.co.uk',
      form_type: formType,
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      service_type: formData.serviceType || 'Not specified',
      message: formData.message || 'No additional message provided',
      from_name: `${formData.firstName} ${formData.lastName}`,
      reply_to: formData.email,
      subject: `New ${formType} Submission from ${formData.firstName} ${formData.lastName}`
    };
    
    console.log("Template params being sent:", templateParams);
    
    // Send email using EmailJS
    const response = await emailjs.send(
      'service_v3sqaub', // Your EmailJS service ID 
      'template_j35qzgy', // Updated template ID from the image
      templateParams
    );
    
    console.log('Email successfully sent!', response);
    return {
      success: true,
      message: "Form submitted successfully. We'll be in touch soon!"
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      message: "There was an error submitting your request. Please try again later."
    };
  }
};
