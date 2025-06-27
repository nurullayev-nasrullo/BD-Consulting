import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '';
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';

interface EmailParams {
  to_email: string;
  cc_email?: string;
  subject: string;
  message: string;
  template_id?: string;
  from_name?: string;
  reply_to?: string;
}

export const sendEmail = async (params: EmailParams) => {
  try {
    const templateId = params.template_id || EMAILJS_TEMPLATE_ID;
    
    const templateParams = {
      to_email: params.to_email,
      to_name: params.to_email.split('@')[0], // Extract name from email
      from_name: params.from_name || 'BUSINESS DIPLOMAT',
      reply_to: params.reply_to || 'info@business-diplomat.com',
      subject: params.subject,
      message: params.message,
      cc_email: params.cc_email || '',
    };

    console.log('Sending email with params:', {
      service: EMAILJS_SERVICE_ID,
      template: templateId,
      to: params.to_email,
      subject: params.subject
    });
    
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      templateId,
      templateParams,
      EMAILJS_PUBLIC_KEY
    );

    if (response.status !== 200) {
      throw new Error('Failed to send email');
    }

    console.log('Email sent successfully:', response);
    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    throw error;
  }
};