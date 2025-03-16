
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
    
    // Prepare template parameters for EmailJS to match the Auto-Reply template format
    const templateParams = {
      email: formData.email, // This maps to {{email}} in the template
      from_name: `${formData.firstName} ${formData.lastName}`,
      to_email: 'info@londonstructuralsurveys.com', // Primary recipient
      reply_to: formData.email,
      bcc: 'info@alemara.co.uk', // BCC recipient as shown in your template
      subject: `New ${formType} Submission from ${formData.firstName} ${formData.lastName}`,
      // Additional useful information for the email body
      form_type: formType,
      first_name: formData.firstName,
      last_name: formData.lastName,
      phone: formData.phone,
      service_type: formData.serviceType || 'Not specified',
      message: formData.message || 'No additional message provided'
    };
    
    console.log("Template params being sent:", templateParams);
    
    // Send email using EmailJS
    const response = await emailjs.send(
      'service_v3sqaub', // Your EmailJS service ID 
      'template_mi8klv3', // Your EmailJS template ID as shown in the image
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
