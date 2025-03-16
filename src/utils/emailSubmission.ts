
import emailjs from 'emailjs-com';

/**
 * Utility function to handle form submissions via email
 * This uses EmailJS to send emails from the client-side
 */
export const submitFormToEmail = async (formData: any, formType: string) => {
  console.log(`Sending ${formType} form data to hayder@alemara.co.uk:`, formData);
  
  try {
    // Initialize EmailJS with your user ID (only needs to be done once)
    emailjs.init("B_jYcT8aQ8L7R1Dp3"); // EmailJS public key from Account > API Keys
    
    // Prepare template parameters for EmailJS
    const templateParams = {
      to_name: "Hayder", // Name of recipient
      to_email: 'hayder@alemara.co.uk', // Updated email based on your EmailJS configuration
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
      'service_v3sqaub', // Your EmailJS service ID from the screenshot
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
