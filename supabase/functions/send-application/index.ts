import { createClient } from '@supabase/supabase-js';
// @ts-ignore: Deno-specific import
import { SmtpClient } from "npm:@emailjs/smtp-client@1.0.2";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { jobTitle, fullName, email, phone, coverLetter } = await req.json();

    // Initialize SMTP client
    const smtp = new SmtpClient({
      user: Deno.env.get('SMTP_USER'),
      password: Deno.env.get('SMTP_PASSWORD'),
      host: 'smtp.gmail.com',
      port: 587,
      tls: true,
    });

    // Create email content
    const emailContent = `
      New Job Application Received
      
      Position: ${jobTitle}
      
      Applicant Details:
      ------------------
      Name: ${fullName}
      Email: ${email}
      Phone: ${phone}
      
      Cover Letter:
      -------------
      ${coverLetter}
      
      Please check the attached resume for more details.
    `;

    // Send email
    await smtp.send({
      from: Deno.env.get('SMTP_USER'),
      to: 'info@excelia-bd.com',
      subject: `New Application: ${jobTitle} - ${fullName}`,
      text: emailContent,
      attachments: req.formData ? [
        {
          filename: 'resume.pdf',
          content: await req.formData.get('resume'),
        }
      ] : [],
    });

    return new Response(
      JSON.stringify({ message: 'Application submitted successfully' }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
});