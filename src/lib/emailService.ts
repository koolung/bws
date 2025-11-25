import nodemailer from 'nodemailer';
import { getBusinessEmailTemplate, getClientEmailTemplate, EmailData } from './emailTemplates';

// Create transporter with Titan SMTP settings
const transporter = nodemailer.createTransport({
  host: 'smtp.titan.email',
  port: 465,
  secure: true, // Use SSL/TLS
  auth: {
    user: process.env.SMTP_USER || 'tae@bedfordwebservices.com',
    pass: process.env.SMTP_PASSWORD || 'BWS@2024bedford',
  },
});

export async function sendQuestionnaireEmails(data: EmailData): Promise<void> {
  try {
    // Email to business
    const businessEmail = await transporter.sendMail({
      from: `"Bedford Web Services" <${process.env.SMTP_USER || 'tae@bedfordwebservices.com'}>`,
      to: 'contact@bedfordwebservices.com',
      replyTo: data.email,
      subject: `New Questionnaire Submission - ${data.name}`,
      html: getBusinessEmailTemplate(data),
    });

    console.log('Business email sent:', businessEmail.messageId);

    // Email to client
    const clientEmail = await transporter.sendMail({
      from: `"Bedford Web Services" <${process.env.SMTP_USER || 'tae@bedfordwebservices.com'}>`,
      to: data.email,
      replyTo: 'contact@bedfordwebservices.com',
      subject: 'We Received Your Questionnaire - Bedford Web Services',
      html: getClientEmailTemplate(data),
    });

    console.log('Client email sent:', clientEmail.messageId);
  } catch (error) {
    console.error('Error sending emails:', error);
    throw new Error(`Failed to send emails: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

// Verify connection
transporter.verify(function (error: Error | null, success: boolean) {
  if (error) {
    console.log('SMTP connection error:', error);
  } else {
    console.log('SMTP connection successful');
  }
});
