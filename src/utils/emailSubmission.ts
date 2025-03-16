
import emailjs from 'emailjs-com';

/**
 * Utility function to handle form submissions via email
 * This uses EmailJS to send emails from the client-side
 */
export const submitFormToEmail = async (formData: any, formType: string) => {
  console.log(`Sending ${formType} form data to info@londonstructuralsurveys.com:`, formData);
  
  try {
    // Initialize EmailJS with your user ID (only needs to be done once)
    emailjs.init("B_jYcT8aQ8L7R1Dp3"); // EmailJS public key from Account > API Keys
    
    // Prepare template parameters for EmailJS
    const templateParams = {
      to_email: 'info@londonstructuralsurveys.com',
      form_type: formType,
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      service_type: formData.serviceType,
      message: formData.message || 'No additional message provided',
    };
    
    // Send email using EmailJS
    const response = await emailjs.send(
      'service_v3sqaub', // Your EmailJS service ID
      'template_mi8klv3', // Your EmailJS template ID
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
